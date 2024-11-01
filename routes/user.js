const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/', userController.create);
router.get('/', userController.create);
router.put('/:id_pessoa', userController.create);
router.delete('/:id_pessoa', userController.create);


module.exports = router