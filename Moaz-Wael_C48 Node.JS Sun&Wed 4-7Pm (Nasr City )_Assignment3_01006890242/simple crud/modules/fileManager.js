const fs = require ('node:fs');


let readUsers =  function () {

    return JSON.parse(
        fs.readFileSync("./data/data.json", "utf8")
    );

}

let writeUsers =  function (users) {

     fs.writeFileSync(
        "./data/data.json",
        JSON.stringify(users, null, 4)
    );

}

module.exports = {
    readUsers,
    writeUsers,
}
