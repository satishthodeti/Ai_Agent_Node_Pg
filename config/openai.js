const OpenAI = require("openai");
const { openai: apiKey } = require("../keys");

const openai = new OpenAI({
  apiKey: apiKey.apiKey, // Ensure the key is correct
});

module.exports = openai;
