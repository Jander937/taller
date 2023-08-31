import mongoose from "mongoose";
import  express  from "express";
import "dotenv/config";
import modeloUsuario from "./modelos/User.js";


const app = express();
app.use(express.json());

try {
    await mongoose.connect(process.env.CONNECTION).then(()=> console.log("conectado"))
    app.listen(3000, () => {
        console.log("Servidor esta corriendo")
    })
} catch (error) {
    console.log("error")
}

app.post("/api/newuser", async (req, res)=>{
    const {body: cuerpo} = req;
    try {
        console.log(cuerpo);
        const nuevoUsuario =await modeloUsuario.create ({
            ...cuerpo
        });
        res.status(200).json({message: "usuario creado exitosamente", nuevoUsuario})
    } catch (error) {
        res.status(400).json({message: error.message ?? "error del servido "})
    }
})

app.get("/api/user", async (req, res)=>{
    try {
        const usuario= await modeloUsuario.fine({});
        res.status(200).json({message: "Lista de usuarios", usuario})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"error servidor"})
    }
})

app.get("/",function(req, res){
    res.send("Home page");
})

