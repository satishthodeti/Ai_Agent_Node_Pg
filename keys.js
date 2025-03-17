const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
};
