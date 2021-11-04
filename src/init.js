// 모두가 알 수 있게 import 하는 방법
import "./db.js";
import "./models/Video.js";
import app from "./server.js";

const PORT = 4000;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

/*request listening request 기다림*/
app.listen(4000, handleListening);
