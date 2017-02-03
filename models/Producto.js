// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var productoSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  unidad: {
    type: String, 
    default: 'kg',
    enum: ['kg', 'l', 'ud'],
    required: [true, 'Añade la unidad'],
  },
  calorias: { type: Number, default: 0 },
  grasas: { type: Number, default: 0 },
  grasasSaturadas: { type: Number, default: 0 },
  hidratos: { type: Number, default: 0 },
  hidratosAzucares: { type: Number, default: 0 },
  hidratosFibra: { type: Number, default: 0 },
  proteinas: { type: Number, default: 0 },
  sodio: { type: Number, default: 0 },
  category: [Schema.Types.ObjectId], 
  label: [Schema.Types.ObjectId], 
  descripcion: String,
  rechazo: String, 
  temperatura: Number,
  tolerancia: String, 
  pais: String, 
  temporada: { type: [Number], default: [1,1,1,1,1,1,1,1,1,1,1,1]},
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
},
{
  versionKey: false // avoid mongoose automatic '__v' field
});

var Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;