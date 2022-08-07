"use strict";

//DOM -> Document object model 인터페이스 HTML에 존재하는 데이타를 가져와서 제어한다. 
console.log("register.js")
const id = document.querySelector("#id"),
name = document.querySelector("#name"),
pswd = document.querySelector("#pswd"),
confirmPswd = document.querySelector("#confirm-pswd"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register)

function register() {
    if(!id.value) return alert("아이디를 입력해주십시요.")
    if (pswd.value !== confirmPswd.value) {
        return alert("비밀번호가 일치하지 않습니다.")
    }
    const req = {
        id: id.value,
        name: name.value,
        pswd: pswd.value,
        //confirmPswd: confirmPswd.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));

    //onst body = {a : 1}

    //console.log(JSON.stringify(body));

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            console.log(res.msg)
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입중 에러 발생"));
    })
    ;
}