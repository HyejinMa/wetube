// 우리컴퓨터의 mongo database에 연결
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);
// 여러번 발생
db.on("error", handleError);
// 한번만 발생
db.once("open", handleOpen);
