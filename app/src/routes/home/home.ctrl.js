"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage")


//이부분이  컨트롤러 이다. 

const output = {
    home: (req, res) => {
        //console.log("outpu home으로 ")
        res.render("home/index")
    },

    login: (req, res) => {
        res.render("home/login")
    },

    register: (req, res) => {
        res.render("home/register")

    },

    test: (req, res) => {
        res.render("home/test")
    },

    
}



const process ={
    login: async (req, res) => {

        const user = new User(req.body);
        const response = await user.login();
        return res.json(response)

        //console("process login"),
        // console.log("process..");
        // console.log(req.body);

        // const id = req.body.id,
        // pswd = req.body.pswd;

        // //const userStorage = new UserStorage();
        // const users = UserStorage.getUsers("id", "pswd");

        // const response = {};

        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pswd[idx] === pswd) {
        //         response.success = true
        //         return res.json(response);
        //     }
        // };

        // response.success = false;
        // response.msg = "로그인에 실패했습니다."

        // return res.json(response);
       
    },

    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response)
    }
};


module.exports = {
    output,
    process,
};