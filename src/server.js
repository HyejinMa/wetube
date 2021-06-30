/* node_modules���� "express"��� ��Ű���� express��� �̸����� �������*/
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import videoRouter from "./routers/videoRouter.js";
import userRouter from "./routers/userRouter.js";

const PORT = 4000;

/* express application ����*/
const app = express();
const logger = morgan("dev");
app.use(logger);

/* ����� ����
����Ͱ� express���� �������� /videos�� �����ϴ� url�� �����ϸ�
videoRouter�� �ִ� ��Ʈ�ѷ��� ã����
*/
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`!Server listening on port http://localhost:${PORT}`);

/*request listening request ��ٸ�*/
app.listen(4000, handleListening);
