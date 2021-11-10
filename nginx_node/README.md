<h1 align="center">
	Node API and Nginx
</h1>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;
</p>

## 📋 Project

- Simply API with Node.js. You and fetch all entries and insert new names.

## 💻 How to use

### Running Locally

To clone and run this application, you need [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your machine. On your command line:

### Clone this repository

```bash
# Enter the command below to clone the repository
$ git clone https://github.com/osergioneto/fullcycle
$ cd fullcyle/nginx_node/
```

### Build and running docker-compose

```bash
# Build and run 
docker-compose up --build -d
```

## API

All APIs requests are under `http://localhost/` scope.

## Fetch all names

### Request
`GET /`

### Response

```json
[
  {
    "id": "0f9cb82f-e321-455c-85f2-69e30ea7546d",
    "name": "Sérgio Neto",
    "createdAt": "2021-11-09T03:13:46.821Z",
    "updatedAt": "2021-11-09T03:13:46.821Z"
  },
  {
    "id": "c815551e-7532-4b75-bc66-a52dca2d9c37",
    "name": "Uzumaki Naruto",
    "createdAt": "2021-11-10T22:12:28.207Z",
    "updatedAt": "2021-11-10T22:12:28.207Z"
  }
]
```

## Insert name

### Request
  `POST /`

```json
// Body
{
  "name": "Uchiha Sasuke"
}
```

### Response

```json
[
  {
  "id": "c0ce7416-42a7-49e2-9b77-39699231186b",
  "name": "Sérgio Neto",
  "createdAt": "2021-11-09T03:13:19.067Z",
  "updatedAt": "2021-11-09T03:13:19.067Z"
  },
  {
    "id": "c815551e-7532-4b75-bc66-a52dca2d9c37",
    "name": "Uzumaki Naruto",
    "createdAt": "2021-11-10T22:12:28.207Z",
    "updatedAt": "2021-11-10T22:12:28.207Z"
  },
  {
  "id": "9d7b1b89-b167-4425-82ba-940da9b22d6e",
  "name": "Uchicha Sasuke",
  "createdAt": "2021-11-10T22:12:28.207Z",
  "updatedAt": "2021-11-10T22:12:28.207Z"
  }
]
```

---

Made by Sérgio Deusdedith 👋 <br>
🔗 [Linkedin](https://www.linkedin.com/in/osergioneto/) <br>
✉ [sergio.deusdedith@gmail.com](mailto:sergio.deusdedith@gmail.com) &nbsp; <br>