import express from 'express';
import livros from './livrosRoutes.js';

const routes = (app) => {
    app.route('/').get((res, req) => {
        res.status(200).send({titulo: "Curso de Node"})
    });

    app.use(
        express.json(), livros
    );
}

export default routes;