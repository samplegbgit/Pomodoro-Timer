let time = 25 * 60;
let timerId;
const timer = document.getElementById("timer");
function update() {
  const m = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const s = (time % 60).toString().padStart(2, "0");
  timer.textContent = `${m}:${s}`;
}
document.getElementById("start").onclick = () => {
  if (!timerId)
    timerId = setInterval(() => {
      if (time > 0) {
        time--;
        update();
      }
    }, 1000);
};
document.getElementById("pause").onclick = () => {
  clearInterval(timerId);
  timerId = null;
};
document.getElementById("reset").onclick = () => {
  clearInterval(timerId);
  timerId = null;
  time = 25 * 60;
  update();
};
update();
