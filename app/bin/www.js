"use strict";
const app = require("../app");
//const PORT = 3001;
const PORT = process.env.PORT || 3001;


//여기가 수정이 된다. 
console.log(__dirname)

app.listen(PORT, () => {
    console.log("서버 가동")
});