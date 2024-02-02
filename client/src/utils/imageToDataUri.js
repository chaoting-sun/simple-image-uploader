const imageToDataUri = (imageFile) => {
  const base64Image = imageFile.buffer.toString("base64");
  const dataUri = `data:${imageFile.mimetype};base64,${base64Image}`;
  return dataUri;
};

export default imageToDataUri;
