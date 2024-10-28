

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { modelUsuarios } from "../models/modelUsuarios.js";

// Registro de usuarios
export const registrarUsuarios = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const usuario = {
            nombre: req.body.nombre,
            mail: req.body.mail,
            password: hash,
            curp: req.body.curp,
            rol: req.body.rol
        };
        await modelUsuarios.create(usuario)
        res.status(201).json({ message: "El usuario ha sido registrado correctamente" });
    } catch (err) {
        res.status(500).json({ error: "Ha ocurrido un error al registrar el usuario" });
        console.error(err);
    }

}

// Iniciar de sesion, login
export const login = async (req, res) => {
    try {
        const mail = req.body.mail;
        const password = req.body.password;

        if (!mail || !password) {
            return res.status(400).json({ message: "Debes proporcionar mmail y contraseña" });
        }

        const usuario = await modelUsuarios.findOne({ mail });
        if (!usuario) {
            return res.status(404).json({ message: "Credenciales no validas" });
        }

        if (!bcrypt.compare(password, usuario.password)) {
            return res.status(401).json({ message: "Credenciales no validas" });
        }

        // creaciodel JSON web token
        const token = jwt.sign({ userId: usuario._id }, 'clavesecreta1', { expiresIn: '1h' });
        return res.status(202).json({ token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Se ha producido un error al iniciar sesion" });
    }

}

// Actualizar perfil
export const actualizarPerfil = async (req, res) => {
    try {
        // busca el usuario por su id 
        const usuario = await modelUsuarios.findById(req.params._id);
        if (!usuario) {
            return res.status(404).json({ message: "No se ha encontrado el usuario" });
        }
        console.log(req.body);

        // actualizar datos del usuario
        usuario.nombre = req.body.nombre ? req.body.nombre : usuario.nombre;
        usuario.mail = req.body.mail ? req.body.mail : usuario.mail;

        // Cambiar contraseña (en caso de contar con la antigua)
        if (req.body.password) {
            const newPassword = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(req.body.password, newPassword);
        }

        usuario.curp = req.body.curp ? req.body.curp : usuario.curp;
        usuario.rol = req.body.rol ? req.body.rol : usuario.rol;

        await usuario.save();

        return res.status(200).json({ message: "El perfil del usuario ha sido actualizado correctamente", usuario });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "El perfil del usuario NO ha sido actualizado correctamente", details: err.message });
    }
};