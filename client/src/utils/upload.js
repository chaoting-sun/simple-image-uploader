
const upload = async (formData) => {
  const timestamp = getTimestamp();
  // const signature = generateSignature();

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload?api_key=${apiKey}&timestamp=${timestamp}&signature=${signature}`,
    {
      method: "POST",
      body: formData
    }
  );
  const data = await res.json();
  return data.secure_url;
};