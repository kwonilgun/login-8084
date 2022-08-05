"use strict";
//const fetch = require("node-fetch");



//DOM -> Document object model 인터페이스 HTML에 존재하는 데이타를 가져와서 제어한다. 
console.log("hellll")
const id = document.querySelector("#id"),
pswd = document.querySelector("#pswd"),
loginBtn = document.querySelector("button");

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
    .then((res) => console.log(res));
}

//console.log(id);