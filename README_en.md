
[English](https://github.com/Gilberto-Mascena/api-google-gemini/blob/main/README-en.md) |
[Português Brasileiro](https://github.com/Gilberto-Mascena/api-google-gemini/blob/main/README.md)

![Status de Manutenção](https://img.shields.io/badge/Maintained-Yes-brightgreen?style=for-the-badge)
[![GitHub Actions Status](https://img.shields.io/github/actions/workflow/status/Gilberto-Mascena/api-google-gemini/build.yml?style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/actions)
[![Licença](https://img.shields.io/github/license/Gilberto-Mascena/api-google-gemini?style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/blob/main/LICENSE.md)
[![Estrelas no GitHub](https://img.shields.io/github/stars/Gilberto-Mascena/api-google-gemini?style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/stargazers)
[![Problemas no GitHub](https://img.shields.io/github/issues/Gilberto-Mascena/api-google-gemini?style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/issues)
[![Versão do Repositório](https://img.shields.io/github/v/release/Gilberto-Mascena/api-google-gemini?include_prereleases&style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/releases)
![Data de Lançamento](https://img.shields.io/github/release-date/Gilberto-Mascena/api-google-gemini?style=for-the-badge)
![Tamanho do Repositório](https://img.shields.io/github/repo-size/Gilberto-Mascena/api-google-gemini?style=for-the-badge)

# 🚀 Google Gemini API: Alura Immersion

#### This project was developed during the Alura Immersion, using Google Cloud's Gemini generative model API to create a Node.js API capable of interacting with images and generating textual descriptions.

## ⚙️ Prerequisites

Before you begin, make sure you have the following tools and accounts configured:

* **Node.js:** Version equal to or greater than `14.0.0`. You can check your version with the command:
```bash
node -v
```
To install or update Node.js, go to the [official Node.js website](https://nodejs.org/).
* **MongoDB:** A running MongoDB instance. You can install it locally, use a cloud service like MongoDB Atlas, or use a Docker container. * **Google Cloud account:** An active account on [Google Cloud Platform](https://cloud.google.com/).
* **Access to the Gemini generative model:** Make sure your Google Cloud account has access to the Gemini model API. This may involve enabling the API and setting the necessary permissions.
* **Google Gemini API key:** A valid API key to authenticate your requests to the Gemini model. You can create and manage your API keys in the [Google Cloud console](https://console.cloud.google.com/).

## 🛠️ Installation

Follow these steps to set up your development environment:

### 1. Clone the repository:

```bash
git clone git@github.com:Gilberto-Mascena/api-google-gemini.git
cd api-google-gemini
```

### 2. Install the project dependencies:
```Bash
npm install
```

This command will download and install all the required libraries listed in the package.json file.

### 3. Set up environment variables:
Create a file called .`env` in the root of your project. This file will store sensitive information and settings specific to your environment. Add the following variables to your `.env` file, replacing the example values ​​with your actual information:

`GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY`
`CONNECTION_STRING=YOUR_MONGODB_CONNECTION_STRING
PORT=3000 # (Optional)` Sets the server port, default is 3000
Important: Make sure to add the .env file to your .gitignore file to avoid accidentally uploading your sensitive information to version control.

### 4. Create the uploads folder:

Run the following command in the terminal, inside the root of your project, to create the folder where the uploaded images will be stored:

```Bash
mkdir uploads
```
Make sure your application has read and write permissions to this folder.

## 🚀 How to Use
### 1. Start the development server:

```Bash
npm run dev
```
This command, defined in package.json, usually starts the server using a tool like nodemon, which automatically restarts the server if the files are changed.

### 2. Access the API:
The API will be available at:

`http://localhost:3000`
Make sure that the port configured in the PORT environment variable (or the default port 3000) is free and accessible.

#### API Endpoints:
The following are the endpoints available in this API:

`GET /posts`:

**Description**: Returns a list of all posts stored in the database.

**Response**: An array of JSON objects, where each object represents a post.

`POST /posts`:

**Description**: Creates a new post.\
**Request Body**:
A JSON object containing the data for the new post. The fields expected will depend on your implementation.
Example Body (JSON):\
JSON

```
{
"title": "My First Post",
"content": "This is the content of my first post."
}
```

`POST /upload` :

**Description**: Uploads an image.\
**Request Body (Form-Data)**: The image must be uploaded as a file in the image field. The Content-Type of the request must be multipart/form-data.\
**Response**: A JSON object containing information about the uploaded image file (e.g. the file name).
PUT /upload/:id:

**Description**: Updates an existing post (identified by the id in the URL) by adding a description generated by the Gemini model based on the image associated with that post.\
**URL Parameters**:
id: The unique identifier of the post to be updated.
Notes: This endpoint will likely fetch the path of the image associated with the post, send that image to the Gemini API, and then update the post's description field in the database with the response from Gemini.

### 📜 *License*

*This project is licensed under the MIT License. See more details at:* [_LICENSE.md_](./LICENSE.md)

### Gilberto | Dev _2024_