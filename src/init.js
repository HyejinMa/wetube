// ��ΰ� �� �� �ְ� import �ϴ� ���
import "./db.js";
import "./models/Video.js";
import app from "./server.js";

const PORT = 4000;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

/*request listening request ��ٸ�*/
app.listen(4000, handleListening);
