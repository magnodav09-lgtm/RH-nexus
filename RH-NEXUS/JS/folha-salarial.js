document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("form");
  if (!f) return;
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const s = +salario.value,
      h = +horas.value,
      a = +adicional.value,
      c = +carga.value;
    if (
      s <= 0 ||
      h < 0 ||
      a < 0 ||
      c <= 0 ||
      ![s, h, a, c].every(Number.isFinite)
    ) {
      erro.textContent = "Preencha valores válidos.";
      erro.classList.remove("d-none");
      return;
    }
    erro.classList.add("d-none");
    const vh = s / c,
      he = vh * (1 + a / 100) * h,
      bruto = s + he,
      inss = bruto * 0.09,
      liq = bruto - inss;
    resultado.innerHTML = `<h2 class="h5 fw-bold">Resultado</h2><p>Hora normal: <strong>R$ ${vh.toFixed(2)}</strong></p><p>Horas extras: <strong>R$ ${he.toFixed(2)}</strong></p><p>Bruto: <strong>R$ ${bruto.toFixed(2)}</strong></p><p>INSS (9%): <strong>R$ ${inss.toFixed(2)}</strong></p><div class="alert alert-success"><strong>Líquido: R$ ${liq.toFixed(2)}</strong></div>`;
  });
});
