const toggle = document.querySelector("#theme-switcher");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Auto enable dark mode if device/browser is set to dark theme
const useDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

const toggleDarkMode = (state) => {
  document.body.classList.toggle("dark", state);
  // turn on dark mode ui switch
  toggle.checked = true;
};
toggleDarkMode(useDarkMode.matches);
useDarkMode.addEventListener((evt) => toggleDarkMode(evt.matches));
