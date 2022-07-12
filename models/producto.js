/*modelo producto nosql*/
const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    }
});

productoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}
);

module.exports = model('Producto', productoSchema);