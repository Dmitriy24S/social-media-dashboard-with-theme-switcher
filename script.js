const toggle = document.querySelector("#theme-switcher");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Auto enable dark mode if device/browser is set to dark theme:

// MediaQueryList object
const useDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
// MediaQueryList {media: (prefers-color-scheme: dark)', matches: false,

// Toggle the dark mode class if media quary matches
const toggleDarkMode = (state) => {
  document.body.classList.toggle("dark", state);
  // toggle theme switch
  if (state) {
    toggle.checked = false;
  } else {
    toggle.checked = true;
  }
};

// Innital setting - true/false
toggleDarkMode(useDarkMode.matches);

// Listen for chanes in the OS settings
useDarkMode.addEventListener("change", (evt) => {
  toggleDarkMode(evt.matches);
});
