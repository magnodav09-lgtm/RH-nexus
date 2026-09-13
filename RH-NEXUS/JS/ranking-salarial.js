document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("form");
  if (!f) return;
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = [];
    for (let i = 1; i <= 5; i++) {
      const n = document.getElementById(`nome${i}`).value.trim(),
        s = +document.getElementById(`sal${i}`).value;
      if (!n || s <= 0 || !Number.isFinite(s)) {
        erro.textContent = "Preencha os cinco nomes e salários.";
        erro.classList.remove("d-none");
        return;
      }
      v.push({ n, s });
    }
    erro.classList.add("d-none");
    v.sort((a, b) => b.s - a.s);
    resultado.classList.remove("d-none");
    resultado.innerHTML = `<div class="card"><div class="card-body"><h2 class="h5 fw-bold">Ranking</h2><div class="table-responsive"><table class="table"><thead><tr><th>Posição</th><th>Funcionário</th><th>Salário</th></tr></thead><tbody>${v.map((x, i) => `<tr><td>${i + 1}º</td><td>${x.n}</td><td>R$ ${x.s.toFixed(2)}</td></tr>`).join("")}</tbody></table></div></div></div>`;
  });
});
