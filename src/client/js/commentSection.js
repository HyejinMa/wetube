const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  // fetch는 JS를 통해서 request를 보낼 수 있게함
  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    body: {
      text,
    },
  });
};

// 사용자가 로그인이 되어있지 않으면, form을 불러올 수 없다.
if (form) {
  form.addEventListener("submit", handleSubmit);
}
