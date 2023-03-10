import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso!');
})

// criando a instância do express
const app = express();

app.use(express.json());

routes(app);

app.put('/livros/:id', (req, res) => {
    let index = findBook(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.get('/livros/:id', (req, res) => {
    let index = findBook(req.params.id);
    res.json(livros[index]);
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = findBook(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} excluído com sucesso!`)
});

function findBook(id){
    return livros.findIndex( livro => livro.id == id);
}

export default app;

