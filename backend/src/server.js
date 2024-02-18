const app = require(".");
const { dbconnection } = require("./config/database");
const PORT = 8085;
app.listen(PORT, async () => {
  await dbconnection();
  console.log("The app is running on port: ", PORT);
});