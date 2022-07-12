const { response } = require('express');

const login = (req, res = response) => {
    console.log(req.body);
    res.send('ok');
}


module.exports = {
    login
}
