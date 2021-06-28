/* node_modules���� "express"��� ��Ű���� express��� �̸����� �������*/
import express from "express";

const PORT = 4000;
/* express application ����*/
const app = express();

/* ���� �α�(�͹̳� �α�)
������ root page�� get request�� ������ �Լ� �۵�*/
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

/*request listening request ��ٸ�*/
app.listen(4000, handleListening);
