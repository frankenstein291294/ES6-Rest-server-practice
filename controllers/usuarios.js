
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = 'no name', apikey } = req.query;

    res.json({
        msg: 'Get API - controller',
        q, nombre, apikey
    });
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post API - controller',
        nombre, edad
    });
}

const usuariosPut = (req, res) => {
    const { id } = req.params;

    res.json({
        msg: 'Put API - controller',
        id
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete API - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
