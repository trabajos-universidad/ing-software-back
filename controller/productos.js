const { response } = require('express');

const crearProducto = async (req, res = response) => {
    const producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            ok: true,
            producto
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error',
            error
        });
    }
}


const getProductos = async (req, res = response) => {
    try {
        const productos = await Producto.find();
        res.json({
            ok: true,
            productos
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error',
            error
        });
    }
}


const deleteProdcuto = async (req, res = response) => {
    const id = req.params.id;
    try {
        const producto = await Producto.findByIdAndDelete(id);
        res.json({
            ok: true,
            producto
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error',
            error
        });
    }
}

module.exports = {
    crearProducto,
    getProductos,
    deleteProdcuto
}
