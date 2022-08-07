'use strict';

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;

    }

    async login() {

        const client = this.body


        //await 는 promise만 반환하는 함수에 대해서만 사용가능하다
        const {id, pswd} = await UserStorage.getUserInfo(client.id);
        console.log("login() 함수 콜");
        console.log(id, pswd);
        //console.log(a);
        if(id) {
            if(id === client.id && pswd === client.pswd) {
                return { success: true }
            }
            return {success: false, msg: "비밀번호가 틀렸습니다. "};
        }
        return { success: false, msg :"존재하지 않는 아이디 입니다. "}
    }

    register() {
        const client = this.body
        UserStorage.save(client)
        return({success: true})
    }
}

module.exports = User;
