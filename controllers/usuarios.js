
const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const {q, nombre ='no name', apikey, page, limit} = req.query;

    res.json({
        msg: 'get Api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;
    res.json({
        msg: 'put Api - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post Api - controlador',
        nombre,
        edad
    });
}

const usuariosDelete =(req, res = response) => {
    res.json({
        msg: 'delete Api - controlador'
    });
}

usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch Api - controlador'
    });
}


module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}