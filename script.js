const toggle = document.querySelector("#theme-switcher");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
