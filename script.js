const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

// Mapping each key to a sound description
const soundMap = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH"
};

// Function to play sound
function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;
  audio.currentTime = 0; // rewind to start
  audio.play();
  display.textContent = soundMap[key];
}

// Add click event to pads
pads.forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.textContent.trim();
    playSound(key);
  });
});

// Add keydown event
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (soundMap[key]) {
    playSound(key);
  }
});
