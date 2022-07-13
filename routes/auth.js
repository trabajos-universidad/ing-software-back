const { Router } = require('express');
const { login, register } = require('../controller/auth');
const validarCampos = require('../middleware/validar-campos');
const { check } = require('express-validator');

const router = Router();

router.post ('/register', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], register);

router.post('/', [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login);

module.exports = router;