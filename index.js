const express = require("express");
const cors = require("cors");

const { routeNotFound, errorHandler } = require("./middlewares");

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Server Started");
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("ॐ नमः शिवाय ॐ");
});

app.use(routeNotFound);
app.use(errorHandler);
