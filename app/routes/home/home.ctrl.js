"use strict";

//이부분이  컨트롤러 이다. 
const home = (req, res) => {
        res.render("home/index")
    };

const login = (req, res) => {
    res.render("home/login")
};

module.exports = {
    home,
    login,
};