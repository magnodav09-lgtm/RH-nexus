document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("form");
  if (!f) return;
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const s = +salario.value,
      c = +carga.value,
      h = +horas.value,
      a = +adicional.value;
    if (
      s <= 0 ||
      c <= 0 ||
      h < 0 ||
      a < 0 ||
      ![s, c, h, a].every(Number.isFinite)
    ) {
      erro.textContent = "Informe valores válidos.";
      erro.classList.remove("d-none");
      return;
    }
    erro.classList.add("d-none");
    const vn = s / c,
      ve = vn * (1 + a / 100),
      total = ve * h;
    resultado.innerHTML = `<h2 class="h5 fw-bold">Resultado</h2><p>Hora normal: <strong>R$ ${vn.toFixed(2)}</strong></p><p>Hora extra: <strong>R$ ${ve.toFixed(2)}</strong></p><div class="alert alert-success"><strong>Total: R$ ${total.toFixed(2)}</strong></div>`;
  });
});
