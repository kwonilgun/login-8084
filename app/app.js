
//모듈
const express = require('express');
const app = express();

const PORT = 3001

//라우팅- 홈으로 이동을 하고 index.js를 실행하게 해주는 역할을 한다.
const home = require("./routes/home")

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home);  //미들웨어를 등록해 주는 메소스



// app.get('/', (req, res) => {
//     res.send('여기는 루트 입니다. ')
// })
// app.get('/', (req, res) => {
//     res.render("home/index")
// })

// app.get('/login', (req, res) => {
//     res.render("home/login")
// })
// app.listen(PORT, () => {
//     console.log("서버 가동")
// });
module.exports = app

