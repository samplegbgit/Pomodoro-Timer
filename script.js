let time = 25 * 60,
  timerId,
  isBreak = false;
const t = document.getElementById("timer");
const bell = new Audio(
  "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
);
function update() {
  const m = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const s = (time % 60).toString().padStart(2, "0");
  t.textContent = `${m}:${s}`;
}
function start() {
  if (!timerId)
    timerId = setInterval(() => {
      if (time > 0) {
        time--;
        update();
      } else {
        bell.play();
        clearInterval(timerId);
        timerId = null;
        if (!isBreak) {
          time = 5 * 60;
          isBreak = true;
        } else {
          time = 25 * 60;
          isBreak = false;
        }
        update();
      }
    }, 1000);
}
document.getElementById("start").onclick = start;
document.getElementById("pause").onclick = () => {
  clearInterval(timerId);
  timerId = null;
};
document.getElementById("reset").onclick = () => {
  clearInterval(timerId);
  timerId = null;
  time = 25 * 60;
  isBreak = false;
  update();
};
update();
