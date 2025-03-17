const app = require('./app');
const { port } = require("./keys");

const PORT = port || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
