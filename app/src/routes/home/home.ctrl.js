"use strict";




//이부분이  컨트롤러 이다. 

const output = {
    home: (req, res) => {
        //console.log("outpu home으로 ")
        res.render("home/index")
    },

    login: (req, res) => {
        res.render("home/login")
    }
}

const users = {
    id: ["kwon", "park","lee"],
    pswd: ["123", "123", "123"]
}

const process ={
    login: (req, res) => {
        //console("process login"),
        console.log("process..");
        console.log(req.body);

        const id = req.body.id,
        pswd = req.body.pswd

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pswd[idx] === pswd) {
                return res.json({
                    success: true,
                })
            }
        };

        return res.json({
            success: false,
            msg: "로그인에 실패함...",
        });
       
    },
};


module.exports = {
    output,
    process,
};