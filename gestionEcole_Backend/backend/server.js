const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
var port = process.env.PORT || 3013;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

require("dotenv").config();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/gestionEcole", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection successfully");
});

const adminRouter = require("./routes/admin");
app.use("/admin", adminRouter);

const etudiantRouter = require("./routes/etudiant");
app.use("/etudiant", etudiantRouter);

const enseignantRouter = require("./routes/enseignant");
app.use("/enseignant", enseignantRouter);

const filieresRouter = require("./routes/filiere");
app.use("/filiere", filieresRouter);

const moduleRouter = require("./routes/module");
app.use("/module", moduleRouter);

const enseigneRouter = require("./routes/enseigne");
app.use("/enseigne", enseigneRouter);

const semestreRouter = require("./routes/semestre");
app.use("/semestre", semestreRouter);

const noteRouter = require("./routes/note");
app.use("/note", noteRouter);

const mod_semRouter = require("./routes/mod_sem");
app.use("/mod_sem", mod_semRouter);

const elementRouter = require("./routes/element");
app.use("/element", elementRouter);

const fil_modRouter = require("./routes/fil_mod");
app.use("/fil_mod", fil_modRouter);

app.listen(port, () => {
  console.log(`Server is running on port: 5000`);
});
