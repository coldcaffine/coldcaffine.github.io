// ---------- 1. LIGHT / DARK TOGGLE ----------
// style.css has a second set of colors for data-theme="dark".
// This button adds or removes that attribute and remembers your choice.
const root = document.documentElement;
const themeBtn = document.getElementById("theme-btn");

function setTheme(theme) {
    if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
        themeBtn.textContent = "Light";
    } else {
        root.removeAttribute("data-theme");
        themeBtn.textContent = "Dark";
    }
    localStorage.setItem("theme", theme);
}

// on page load: use the saved choice, or the computer's own setting
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");
});


// ---------- 2. FOOTER YEAR ----------
document.getElementById("year").textContent = new Date().getFullYear();