document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("form");
  if (!f) return;
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const s = +salario.value;
    if (s <= 0 || !Number.isFinite(s)) {
      erro.textContent = "Informe um salário maior que zero.";
      erro.classList.remove("d-none");
      return;
    }
    erro.classList.add("d-none");
    const d = s * 0.09,
      liq = s - d;
    resultado.innerHTML = `<h2 class="h5 fw-bold">Resultado</h2><p>Bruto: <strong>R$ ${s.toFixed(2)}</strong></p><p>Desconto (9%): <strong>R$ ${d.toFixed(2)}</strong></p><div class="alert alert-success"><strong>Líquido: R$ ${liq.toFixed(2)}</strong></div>`;
  });
});
