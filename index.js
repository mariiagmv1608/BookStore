import express from 'express'

const app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

import './mongodb.js'
import { handleValidationErrors, checkAuth } from './middleware/index.js';
import { UserController, BookController, OrderController } from './controllers/index.js';


app.listen(process.env.PORT || 8080, (err) => {
    if (err){
        return console.log(err)
    }
    console.log("Server ok")
})

//user
app.post('/auth/login', handleValidationErrors, UserController.login);
app.post('/auth/register', handleValidationErrors, UserController.register);
app.get('/auth/user', checkAuth, UserController.getUser)

//books
app.get('/books', BookController.getAllBooks);
app.get('/books/:id', BookController.getOneBook);
app.patch(
    '/books/:id',
    checkAuth,
    handleValidationErrors,
    BookController.addFeedback,
);
app.post('/books', BookController.createBook);

//order
app.post('/order', checkAuth, handleValidationErrors, OrderController.createOrder);
app.get('/order/:id', OrderController.getOrder);