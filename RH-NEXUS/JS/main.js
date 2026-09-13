document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form").forEach((f) =>
    f.addEventListener("submit", (e) => {
      if (!f.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        f.classList.add("was-validated");
      }
    }),
  );
});
