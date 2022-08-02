const app = require("../app.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`HTTP App Listening at http://localhost:${port} 👻`)
})