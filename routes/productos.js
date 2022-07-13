const { Router } = require('express');
const { check } = require('express-validator');
const { getProductos, crearProducto, deleteProducto } = require('../controller/productos');
const validarCampos = require('../middleware/validar-campos');
const router = Router();

router.get('/', getProductos)

router.post('/crear-productos',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('foto', 'La foto es obligatoria').not().isEmpty(),
    check('desc', 'La Descricion es obligatoria').not().isEmpty(),
    validarCampos
] ,crearProducto)

router.delete('/:id', [
    check('id', 'El id es obligatorio').not().isEmpty(),
    validarCampos
] ,deleteProducto);

module.exports = router;
