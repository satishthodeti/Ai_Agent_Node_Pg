const dbQuery = require('../config/db');

const saveChat = async (userMessage, aiResponse) => {
  const query = 'INSERT INTO chat_history (user_message, ai_response) VALUES ($1, $2) RETURNING *';
  const result = await dbQuery(query, [userMessage, aiResponse]);
  return result.rows[0];
};

module.exports = { saveChat };
