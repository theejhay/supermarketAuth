const router = require("express").Router();
const AccessControl = require("../middlewares/roles/AccessControl");

// get all clients
router.get("/", AccessControl(['superadmin', 'employee']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// add new client
router.post("/add", AccessControl(['superadmin', 'employee']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// update client
router.put("/update", AccessControl(['superadmin', 'employee']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// delete client
router.put("/delete", AccessControl(['superadmin', 'employee']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

module.exports = router;