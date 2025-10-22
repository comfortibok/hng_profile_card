const timeEl = document.getElementById("user-time");

function updateTime() {
  const currentMS = Date.now();
  timeEl.textContent = currentMS;
}
updateTime();
document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  setInterval(updateTime, 1000);
});