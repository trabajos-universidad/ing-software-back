const { Router } = require('express');
const { getProductos, crearProducto, deleteProducto } = require('../controller/productos');
const router = Router();

router.get('/', getProductos)

router.post('/crear-productos', crearProducto)

router.delete('/:id', deleteProducto);

module.exports = router;
