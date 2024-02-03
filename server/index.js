const uploadImage = require("./utils/uploadImage");
const express = require("express");
const multer = require("multer"); //a node.js middleware for handling multipart/form-data
const cors = require("cors");
require("dotenv").config();

const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: process.env.FRONTEND_ORIGIN_URL,
    })
  );
} else {
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up multer to handle FormData
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running!" });
});

app.post("/api/upload_image", upload.single("file"), async (req, res) => {
  const imageFile = req.file;
  const { saveName, saveFolder } = req.body;

  try {
    const { url: imageUrl } = await uploadImage(
      imageFile,
      saveName,
      saveFolder
    );
    res
      .status(200)
      .json({ message: "Uploaded successfully!", imageUrl: imageUrl });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error("Error:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
