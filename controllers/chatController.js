const openai = require('../config/openai');
const { saveChat } = require('../models/chatModel');

const chatWithAI = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const aiResponse = response.choices[0].message.content;

    // Save to DB
    await saveChat(prompt, aiResponse);

    res.json({ reply: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { chatWithAI };
