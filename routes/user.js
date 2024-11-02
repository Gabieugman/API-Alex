const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/', userController.create);
router.get('/', userController.getAll);
router.put('/:id_pessoa', userController.getOne);
router.put('/:id_pessoa', userController.update);
router.delete('/:id_pessoa', userController.delete);


module.exports = router;