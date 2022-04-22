const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;

  // 사용자가 댓글을 작성했을 때에만 보내기
  if (text === "") {
    return;
  }
  // fetch는 JS를 통해서 request를 보낼 수 있게함
  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    // headers : 보내는 것의 정보
    headers: {
      // 우리는,, string 보내고 있는데 사실 json string이야! 그래서 json으로 다시 되돌려줘야됑 라고 express에게 알리기
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, rating: "5" }),
  });
  textarea.value = "";
};

// 사용자가 로그인이 되어있지 않으면, form을 불러올 수 없다.
if (form) {
  form.addEventListener("submit", handleSubmit);
}
