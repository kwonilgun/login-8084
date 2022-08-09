"user strict"

const { Console } = require("console");
const { resolve } = require("path");

//File system을 읽어온다.
//Promises는 약속, 가 수행하는 동작이 끝남과 동시에 상태를
//알려주기 때문에 비동기 처리에 아주 효과적이다. 

//const fs = require("fs").promises;
const db = require("../config/db")


class UserStorage {

    // static #users = {
    //     id: ["kwon", "park", "lee"],
    //     pswd: ["123", "123", "123"],
    //     name: ["kkk", "iii", "ppp"],
    // };

    //#는 private를 뜻한다. 즉 private 함수이다. 
    // static #getUserInfo(data, id) {
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const usersKeys = Object.keys(users);
    //     const userInfo = usersKeys.reduce((newUser, info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser
    //     }, {});
    //     return userInfo; 
    // }

    // static #getUsers(data, isAll, fields) {
    //     const users = JSON.parse(data);
    //     if(isAll) return users;

    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if(users.hasOwnProperty(field)) {
    //             newUsers[field] = users[field]
    //         }
    //         return newUsers
    //     }, {});
    //     console.log(newUsers);
    //     return newUsers;
    // }

    static getUsers(isAll, ...fields) {
        // return fs.readFile("./src/databases/users.json")
        // .then((data) => {
        //     return this.#getUsers(data, isAll, fields);
        // })
        // .catch(console.error);

        // //const users = this.#users;
       
    }

    static getUserInfo(id) {
        console.log("getUserInfo")
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users where id = ?";
            db.query(query, [id], (err, data) => {
                console.log(data);
                if(err) rejet(err);
                console.log(data[0]);
                resolve(data[0])
    
            });
        })
        

        return({success: true});
        //const users = this.#users;

        // return fs.readFile("./src/databases/users.json")
        // .then((data) => {
        //     return this.#getUserInfo(data, id);
        // })
        // .catch(console.error);
        
    }



    static async save(userInfo) {

        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, pswd) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.pswd], (err) => {
                //console.log(data);
                if(err) rejet(err);
                resolve({success: true})
    
            });
        })
        

    }
}

module.exports = UserStorage;
