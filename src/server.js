import "./db.js";
/* node_modules에서 "express"라는 패키지를 express라는 이름으로 갖고오기*/
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import videoRouter from "./routers/videoRouter.js";
import userRouter from "./routers/userRouter.js";

const PORT = 4000;

/* express application 생성*/
const app = express();
const logger = morgan("dev");

/* 라우터 쓰기
라우터가 express한테 누군가가 /videos로 시작하는 url에 접근하면
videoRouter에 있는 컨트롤러로 찾게함
*/
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

/*request listening request 기다림*/
app.listen(4000, handleListening);
