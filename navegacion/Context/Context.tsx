import { createContext } from "react";
import { Usuario } from "../Modelos/Usuario";

export const contextoUsuario = createContext({
    nombre:'',
    apellido:'',
    correo:'',
    telefono:'',
    fechaNacimiento:'',
    agregarUsuario:() => {},
    listaUsuario: [] as Usuario[],
    setNombre: (nombre:string) => {},
    setApellido: (apellido:string) => {},
    setTelefono: (telefono:string) => {},
    setCorreo: (correo:string) => {},
    setFechaNacimiento: (fechaNacimiento:string) => {}

})