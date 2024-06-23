const {Router} = require('express');
const { Login } = require('../controller/authcontroller');


const authRouter = Router();

authRouter.post('/login', Login)

module.exports = authRouter