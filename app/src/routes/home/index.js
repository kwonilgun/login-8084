"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

// router.get('/', (req, res) => {
//     res.render("home/index")
// })

router.get('/', ctrl.home);
router.get('/login', ctrl.login);
//router.post('/login', ctrl.login);

// router.get('/login', (req, res) => {
//     res.render("home/login")
// })

module.exports = router