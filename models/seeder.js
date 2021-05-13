const User = require("../models/users");

const seeder = async () => {
    // seed supervisor
    if (!await User.findOne({email: "supervisor@mail.com"})) {
        let details1 = {
            email: "supervisor@mail.com",
            password: "12345678",
            name: "Supervisor",
            role: "supervisor"
        };
        createUser(details1).then(r => {
            return console.log("Supervisor Account Seeded...");
        }).catch(err => {
            return console.log("Supervisor Account not Seeded...");
        });
    }

    // seed employee
    if (!await User.findOne({email: "employee@mail.com"})) {
        let details2 = {
            email: "employee@mail.com",
            password: "12345678",
            name: "Employee",
            role: "employee"
        };
        createUser(details2).then(r => {
            return console.log("Employee Account Seeded...");
        }).catch(err => {
            return console.log("Employee Account not Seeded...");
        });
    }

    // seed client
    if (!await User.findOne({email: "client@mail.com"})) {
        let details3 = {
            email: "client@mail.com",
            password: "12345678",
            name: "Client",
            role: "client"
        };
        createUser(details3).then(r => {
            return console.log("Client Account Seeded...");
        }).catch(err => {
            return console.log("Client Account not Seeded...");
        });
    }

    //return console.log("Default Users Seeded...");

};

const createUser = async (userDetails) => {
    const newUser = new User(userDetails);
    await newUser.save();
};

module.exports = seeder;