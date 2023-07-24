import express from "express";
import { Request, Response } from "express";
import { print } from "listening-on";
import path from "path";
// bodyParser = require('body-parser')
import bodyParser from "body-parser";
import jsonfile from "jsonfile";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

const students = [
  { name: "gordon", age: 20 },
  { name: "peter", age: 20 },
];

app.get("/students", async (req, res) => {
  console.log("get, /students");
  console.log(req.query.name);
  const students = await jsonfile.readFile(path.resolve("./students.json"));
  res.json(students);
});

app.post("/students", (req, res) => {
  console.log("post, /students");
  console.log(req.body);
  res.end("");
});

app.put("/students/:id", (req, res) => {
  console.log("put, /students/:id");
  const id = req.params.id;
  console.log(id);
  res.end("");
});

app.delete("/studens", (req, res) => {
  console.log("delete, /students");
  res.end();
});

app.post("/contact", (req, res) => {
  console.log(req.body);

  res.json({ success: true });
});

app.listen(8080, () => {
  print(8080);
});

app.use((req, res) => {
  // res.redirect('/public/404.html')
  res.sendFile(path.resolve("public", "404.html"));
});
