# Simple Image Uploader
The website in the light mode

![the light-mode screen](./photos/light-mode.png)

The website in the dark mode, after an image was successfully uploaded

![the dark-mode screen](./photos/uploaded-dark-mode.png)

## Welcome! 👋

**Github Profile** is a front-end coding challenge in [devChallenges](https://devchallenges.io/) platform which helps improve coding skills by building realistic projects.

## The challenge

The **Simple Image Uploader** has the following function:

- **Switching modes** - Users can switch between dark and light mode.

- **Uploading images**
  - Users can upload an image at a time with a maximum size of 2MB.
  - Users can drag and drop or select a file in the folder to upload.
  - A loading bar shows when the image is uploading.
  - When the image is successfully uploaded, users can see the image.

- **Share & Download**
  - Share - After the image is uploaded, users can copy its address by selecting the `Share` button
  - Download - users can download the image by selecting the `Download` button

## Applied Skills

#### Server (Backend)

- Node.js and Express
- Cloudinary (for image upload, storage, and download)

#### Client (Frontend)

- React
- Tailwind CSS
- Vite
- Axios (making HTTP requests to the server)
- react-dropzone (for file uploads)
- react-toastify (for displaying notifications)

## Run Locally

install the repository and the related libraries.

```bash
git clone git@github.com:chaoting-sun/image-uploader.git
cd github-profile
npm install
```

start the frontend and backend.

```bash
npm run dev
npm run server # in another terminal
```






The file at 'https://res.cloudinary.com/di0n4282l/image/upload/v1706968839/image-uploader/github-icon.svg.svg' was redirected through an insecure connection. This file should be served over HTTPS.
