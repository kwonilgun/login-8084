"user strict"

const { Console } = require("console");

//File system을 읽어온다.
const fs = require("fs").promises;

//Promises는 약속, 가 수행하는 동작이 끝남과 동시에 상태를
//알려주기 때문에 비동기 처리에 아주 효과적이다. 

class UserStorage {

    //#는 private를 뜻한다. 즉 private 함수이다. 
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users);
            const userInfo = usersKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser
            }, {});
            return userInfo; 
    }

    static getUsers(...fields) {
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers
        }, {});
        console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id) {
        //const users = this.#users;

        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
        // , (err, data) => {
        //     if(err) throw err;
        //     const users = JSON.parse(data);
        //     const idx = users.id.indexOf(id);
        //     const usersKeys = Object.keys(users);
        //     const userInfo = usersKeys.reduce((newUser, info) => {
        //         newUser[info] = users[info][idx];
        //         return newUser
        //     }, {});
        //     return userInfo;
        // })
    }



    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pswd.push(userInfo.pswd);

    }
}

module.exports = UserStorage;
