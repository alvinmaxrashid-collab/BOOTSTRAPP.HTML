document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector("footer p");

  if (footerText) {
    footerText.textContent = `Launch your next idea with confidence. © ${year}`;
  }
});
