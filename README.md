# 🚀 AI Agent with Node.js & PostgreSQL

A powerful AI chatbot application built using **Node.js**, **Express.js**, **OpenAI API**, and **PostgreSQL**. It allows users to interact with an AI model and stores the chat history in the database.

---

## 🚀 Features

- 🌐 **API Integration**: Utilizes OpenAI's GPT models to process prompts.
- 🗄️ **Database Storage**: Stores all user prompts and AI responses in PostgreSQL.
- 📑 **REST API**: Easily extensible endpoints.
- ⚡ **Error Handling**: Proper error management for smooth performance.

---

## 📦 Technologies Used

- Node.js
- Express.js
- PostgreSQL
- OpenAI API (GPT-3.5/4)
- Swagger (Optional API Documentation)

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

Make sure PostgreSQL server is up and database credentials are configured in `.env`.


---

## 📄 Database Schema Example

**Table: chats**

| Column Name | Data Type | Description                |
|------------|----------|----------------------------|
| id         | SERIAL   | Primary Key                |
| prompt     | TEXT     | User's input prompt        |
| response   | TEXT     | AI-generated reply         |
| created_at | TIMESTAMP| Timestamp of conversation  |

---

## 📑 Swagger Documentation

You can document this API using Swagger UI. Example basic setup:

