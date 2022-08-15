const express = require("express");
const cors = require("cors");
const app = express();
const connectToDatabase = require("./src/database/database");

const Routes = require("./src/routes/routes");
const routes = new Routes();

connectToDatabase();
app.use(cors());
app.use(express.json());

app.get("/", routes.getAllRoute);
app.get("/get/:id", routes.getByIdRoute);
app.delete("/delete/:id", routes.deleteRoute);
app.post("/post", routes.postRoute);
app.put("/put/:idSearch", routes.putRoute);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`App running at port ${listener.address().port}`);
  console.log(`Access at http://localhost:${listener.address().port}`);
});
