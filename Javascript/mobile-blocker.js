console.log("Mobile Blocker JS Loaded");
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
  if (isMobile()) {
    window.location.href = "block.html";
  }
});
