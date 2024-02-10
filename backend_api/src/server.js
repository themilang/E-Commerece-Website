const app = require(".");
const { dbconnection } = require("./config/db");
const PORT = 8085;
app.listen(PORT, async () => {
  await dbconnection();
  console.log("The app is running on port: ", PORT);
});