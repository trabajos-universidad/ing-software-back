const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    contraseña: {
        type: String,
        required: true,
    },
});

usuarioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}
);

module.exports = model('Usuario', usuarioSchema);