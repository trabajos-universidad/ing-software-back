const { response } = require('express');

const crearProducto = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Producto creado',
  });
};

const getProductos = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Productos',
  });
};

const deleteProducto = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Producto eliminado',
  });
};

module.exports = {
  crearProducto,
  getProductos,
  deleteProducto,
};
