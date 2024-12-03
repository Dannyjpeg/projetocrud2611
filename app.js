const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./Controllers/userController'); 
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', userController.getAllUsers);
app.get('/edit/:id', userController.getUserById);
app.post('/edit/:id', userController.updateUser); 
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
