const express = require('express');
const { chatWithAI } = require('../controllers/chatController');

const router = express.Router();

router.post('/ai/chat/agent', chatWithAI);

module.exports = router;
