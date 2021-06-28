/* node_modules에서 "express"라는 패키지를 express라는 이름으로 갖고오기*/
import express from "express";

const PORT = 4000;
/* express application 생성*/
const app = express();

/* 서버 로그(터미널 로그)
누군가 root page로 get request를 보내면 함수 작동*/
const handleHome = (req, res) => {
  return res.end();
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}?`);

/*request listening request 기다림*/
app.listen(4000, handleListening);
