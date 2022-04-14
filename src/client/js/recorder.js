const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preivew");

const handleStart = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  video.srcObject = stream; // 파일이 아닌 src 객체.
  video.play();
};

startBtn.addEventListener("click", handleStart);
