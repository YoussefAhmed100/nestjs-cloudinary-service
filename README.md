# NestJS Cloudinary File Upload API

A simple NestJS application that allows uploading single or multiple files to [Cloudinary](https://cloudinary.com/).  
Supports various file types including images, audio, video, documents (PDF, DOCX), and ZIP files.

---

## Features

- Upload a single file  
- Upload multiple files  
- File type validation (mp3, mp4, pdf, jpg, jpeg, png, gif, docx, zip)  
- Cloudinary integration with dynamic `resource_type` handling (`image` or `raw`)  
- API documentation with Swagger UI  

---

## Prerequisites

- Node.js version 18 or higher  
- npm or yarn package manager  
- A [Cloudinary](https://cloudinary.com/) account with API credentials  

---

## Setup Instructions


### 1. Clone the repository

```bash
git clone https://your-repo-url.git
cd your-repo-folder 
```



## 2. Install dependencies

```bash
npm install
``` 
## 3. Create a .env file

### Inside the apps/uploade-files folder

```bash 
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
## 4.Start the application
```bash
npm run start:dev
```
## Project Structure

```bash
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
```
## API Documentation
```bash 
API Documentation
```
