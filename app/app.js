
//모듈
const express = require('express');
//const bodyParser = require("body-parser");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//const PORT = 3001

//아주 많은 시간을 소비했다. 순서 문제이다. 라우터 전에  json을 세팅 해 주어야 한다.
//그래야 라우터에서 작동이 된다. 

app.use(express.json())
app.use(express.urlencoded({extended: true}));

//라우팅- 홈으로 이동을 하고 index.js를 실행하게 해주는 역할을 한다.
const home = require("./src/routes/home")



//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use("/", home);  //미들웨어를 등록해 주는 메소스



//디렉토리 설정이 정확해야 한다. 
console.log(__dirname +'/src/public')
app.use(express.static(__dirname +'/src/public'));






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

