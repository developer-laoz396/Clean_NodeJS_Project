const UserLogic = require('../app/domain/user.logic');
const Logic = new UserLogic();

module.exports.getAll = (res) => {
    Logic.getUsers((err, users) => {
        if (err)
            return res.status(500).json({
                status: "error",
                message: err
            });

        res.json({
            status: "success",
            message: "Got Users Successfully!",
            data: users
        });
    });
}

module.exports.getUser = (req, res) => {
    let params = req.params;
    if (!params) {
        return res.status(400).json({
            status: "error",
            message: "Authentication data is required"
        });
    }

    let id = params.id;
    Logic.findById(id, (err, users) => {
        if (err)
            return res.status(500).json({
                status: "error",
                message: err
            });

        res.json({
            status: "success",
            message: "Got Users Successfully!",
            data: users
        });
    });
};

module.exports.login = (req, res) => {
    let body = req.body;
    if (!body || !body.username || !body.password) {
        return res.status(400).json({
            status: "error",
            message: "Authentication data is not valid."
        });
    }

    Logic.getUserLogin(body, (err, user) => {
        if (err)
            return res.status(500).json({
                status: "error",
                message: err
            });

        if (!user)
            return res.status(404).json({
                status: "error",
                message: "User not found",
            });

        res.json({
            status: "success",
            message: "Got Users Successfully!",
            data: user
        });
    });
};

module.exports.post = (req, res) => {
    let body = req.body;
    if (!body) {
        return res.status(400).json({
            status: "error",
            message: "User data is required"
        });
    }

    Logic.createUser(body, (err, users) => {
        if (err)
            return res.status(500).json({
                status: "error",
                message: err
            });

        res.json({
            status: "success",
            message: "User saved successfully!",
            id: users._id
        });
    });
};

module.exports.put = (req, res) => {
    let body = req.body;
    if (!body) {
        return res.status(400).json({
            status: "error",
            message: "User data is required"
        });
    }

    Logic.findAndModify(body.id, body, (err, users) => {
        if (err)
            return res.status(500).json({
                status: "error",
                message: err
            });

        res.json({
            status: "success",
            message: "User updated successfully!",
            data: users
        });
    });
};