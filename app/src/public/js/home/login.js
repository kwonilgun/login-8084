"use strict";
//const fetch = require("node-fetch");
{/* <body>
  <h2>A</h2>
  <script src="./script.js"></script>
  <h2>B</h2>
</body>
위 HTML 문서는 브라우저에서 다음과 같이 순차적으로 처리가 됩니다.

<h2>A</h2>가 화면에 출력됨
script.js 파일을 내려받아 자바스립트 코드가 실행됨
<h2>B</h2>가 화면에 출력 */}


//DOM -> Document object model 인터페이스 HTML에 존재하는 데이타를 가져와서 제어한다. 
console.log("hellll")
const id = document.querySelector("#id"),
pswd = document.querySelector("#pswd"),
loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login)

function login() {
    const req = {
        id: id.value,
        pswd: pswd.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));

    //onst body = {a : 1}

    //console.log(JSON.stringify(body));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            console.log(res.msg)
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인중 에러 발생"));
    })
    ;
}

//console.log(id);