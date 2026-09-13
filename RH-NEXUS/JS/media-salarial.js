document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("form");
  if (!f) return;
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = [];
    for (let i = 1; i <= 5; i++) {
      const s = +document.getElementById(`sal${i}`).value;
      if (s <= 0 || !Number.isFinite(s)) {
        erro.textContent = "Preencha os cinco salários.";
        erro.classList.remove("d-none");
        return;
      }
      v.push(s);
    }
    erro.classList.add("d-none");
    const soma = v.reduce((a, b) => a + b, 0),
      m = soma / v.length;
    resultado.innerHTML = `<h2 class="h5 fw-bold">Resultado</h2><p>Funcionários: <strong>${v.length}</strong></p><p>Soma: <strong>R$ ${soma.toFixed(2)}</strong></p><div class="alert alert-success"><strong>Média: R$ ${m.toFixed(2)}</strong></div>`;
  });
});
