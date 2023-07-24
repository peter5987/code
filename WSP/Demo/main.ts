import { print } from "listening-on";
import express from "express";

let app = express();

app.use(express.static("public"));

let counter = 0;

app.get("/counter.js", (req, res) => {
  counter++;
  res.end("let counter= ${counter");
});

let options = [
  { label: "typescript", vote: 0 },
  { label: "javascript", vote: 0 },
];
