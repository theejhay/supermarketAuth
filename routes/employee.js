const router = require("express").Router();
const AccessControl = require("../middlewares/roles/AccessControl");

// get all employees
router.get("/", AccessControl(['superadmin']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// add new employee
router.post("/add", AccessControl(['superadmin']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// update employee
router.put("/update", AccessControl(['superadmin']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// delete employees
router.put("/delete", AccessControl(['superadmin']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

module.exports = router;