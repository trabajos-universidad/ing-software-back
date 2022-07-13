const { Router } = require('express');
const { login, register } = require('../controller/auth');


const router = Router();

router.post ('/register', register);

router.post('/', login);

module.exports = router;