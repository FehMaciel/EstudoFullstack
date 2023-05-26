const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let tarefas = [];

app.post('/tarefas', (req, res) => {
    const tarefa = req.body.tarefa;
    tarefas.push(tarefa);
    req.json({message: 'Tarefa Adicionada com sucesso'});
});

app.get('/tarefas', (req, res) => {
    res.json({tarefas});
});

app.delete('/tarefas/:index', (req, res) => {
    const index = req.params.index;
    if(index >= 0 && index < tarefas.length){
        tarefas.splice(index, 1);
        res.json({message: 'Tarefa removida com sucesso'});
    }else{
        res.status(404).json({error: 'Tarefa não encontrada'});
    }
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});