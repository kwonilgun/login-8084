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



    },

    register: async (req, res) => {

        const user = new User(req.body);
        const response = await user.login();
        return res.json(response)

        // const user = new User(req.body);
        // console.log("home.ctrl:register()")
        // console.log(user)
        // const response = user.register();
        //  return res.json({success: true})
        //console.log("register")
    }
};


module.exports = {
    output,
    process,
};