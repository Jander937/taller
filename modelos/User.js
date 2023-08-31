import mongoose from "mongoose";

const esquema = mongoose.Schema ({
    nombre: {
        type: String,
        required: [true, "Este campo es requerido"],
        trim: true,
        minlength: 5,
        maxlength: [55, "el campo es muy largo"],
    },
    edad : {
        type: Number,
        required: [true,"Este campo es requerido"],
        min: [1, "mas de un año"],
        max: [99, "el maximo es 99 años"],
        trim:true,
    },
    family: {
        type:Array,default:[],
    }
},{
    timestamps: true
})

let modeloUsuario;
try {
    modeloUsuario = mongoose.model("Usuario")
} catch (error) {
    modeloUsuario = mongoose.model("Usuario", esquema);
}

export default modeloUsuario;