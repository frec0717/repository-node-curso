
const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required:[true, 'En nombre es obligatorio']
    },
    correo:{
        type: String,
        required:[true,'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required:[true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,       
    },
    rol: {
        type: String,  
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']     
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    },
});

UsuarioSchema.methods.toJSON = function(){
    const {__v, password, ...usuario} = this.toObject();
    return usuario;
}
//Siempre es en singular porque te lo crea con la S al final 
module.exports = model('Usuario',UsuarioSchema);