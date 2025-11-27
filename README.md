# NestJS Cloudinary File Upload API

This is a simple NestJS application that allows uploading single or multiple files to [Cloudinary](https://cloudinary.com/).  
It supports common file types including images, audio, video, documents (PDF, DOCX), and ZIP files.

---

## Features

- Upload a single file
- Upload multiple files
- File type validation (mp3, mp4, pdf, jpg, jpeg, png, gif, docx, zip)
- Cloudinary integration with dynamic `resource_type` handling (`image` or `raw`)
- API documentation with Swagger UI

---

## Prerequisites

- Node.js >= 18.x  
- npm or yarn  
- A [Cloudinary](https://cloudinary.com/) account with API credentials

---

## Setup

### 1. Clone the repository

```bash
git clone https://your-repo-url.git
cd your-repo-folder
2. Install dependencies
bash
Copy code
npm install
# or
yarn install
3. Create .env file inside apps/uploade-files folder
bash
Copy code
nano apps/uploade-files/.env
Add the following content:

ini
Copy code
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Save and exit the editor.

4. Start the application
bash
Copy code
npm run start:uploade-files
# or
yarn start:uploade-files
Project Structure
bash
Copy code
apps/
└── uploade-files/
    ├── src/
    │   ├── cloudinary/
    │   │   └── cloudinary.service.ts
    │   ├── upload-files.controller.ts
    │   ├── upload-files.service.ts
    │   └── upload-files.module.ts
    ├── .env
    └── main.ts
API Documentation
Access Swagger UI at:

bash
Copy code
http://localhost:3000/api