import express from 'express';

 const app = express()

 app.use(express.json())

 const porta = 7878

 app.listen(porta, () => {
console.log(`aplicação subiu na porta ${porta}`)
    console.log ('rodando na porta', porta)
 })