const express = require('express');
const router = express.Router();

const controller = require('../controllers/projetos')

router.get('/', controller.get);
router.get('/:id', controller.getById);

module.exports = router;