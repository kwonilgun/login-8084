"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

// router.get('/', (req, res) => {
//     res.render("home/index")
// })

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register)
router.post('/login', ctrl.process.login);
router.get('/test', ctrl.output.test);

// router.get('/login', (req, res) => {
//     res.render("home/login")
// })

module.exports = router