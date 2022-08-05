"use strict";

//DOM -> Document object model 인터페이스 HTML에 존재하는 데이타를 가져와서 제어한다. 

const id = document.querySelector("#id"),
pswd = document.querySelector("#pswd"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login)

function login() {
    const req = {
        id: id.value,
        pswd: pswd.value,
    };
    // console.log(req);
    // console.log(JSON.stringify(req));
    fetch("/login", {
        metho: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    });
}

//console.log(id);