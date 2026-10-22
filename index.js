const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
  res.send('Olá da DevFlow Solutions - Pipeline CI/CD Ativo!');
});
 
module.exports = app;
 
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}