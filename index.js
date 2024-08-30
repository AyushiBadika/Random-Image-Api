import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 5000;

app.get("/api/image/random", (req, res) => {
  const num = Math.floor(Math.random() * 50) + 1;
  res.sendFile(path.join(__dirname, "images", `image-${num}.jpg`));
});

app.listen(PORT, () => {
  console.log("Server hosted on PORT : " + PORT);
});
