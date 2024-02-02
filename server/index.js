// server/index.js
const uploadImage = require("./uploadImage");
const express = require("express");
const multer = require("multer"); //a node.js middleware for handling multipart/form-data
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up multer to handle FormData
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const PORT = process.env.PORT || 5001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from ExpressJS" });
});

app.post("/api/upload_image", upload.single("file"), async (req, res) => {
  const imageFile = req.file;
  const { saveName, saveFolder } = req.body;
  console.log(imageFile, saveName, saveFolder);
  try {
    const { url: imageUrl } = await uploadImage(
      imageFile,
      saveName,
      saveFolder
    );
    res.status(200).json({ imageUrl: imageUrl });
  } catch (error) {
    console.log("error:", error);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
