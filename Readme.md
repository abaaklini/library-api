# Library Management API

This API was developed to manage books and publishers in a library. It allows CRUD operations (Create, Read, Update, Delete) for books and publishers, with data stored in a NoSQL MongoDB database. The API was built using **Node.js**, **TypeScript**, **Express**, and follows the **MVC** design pattern. The documentation was generated using **Swagger**.

## Features

### Books
- Create a new book
- List all books
- Get a book by ID
- Update a book
- Delete a book

### Publishers
- Create a new publisher
- List all publishers
- Get a publisher by ID
- Update a publisher
- Delete a publisher

## Technologies Used

- **Node.js**
- **TypeScript**
- **Express**
- **MongoDB**
- **Mongoose**
- **Swagger**
- **dotenv**

## Project Structure

```plaintext
library-api/
├── src/
│   ├── controllers/      # Controllers to handle requests
│   ├── models/           # MongoDB models (schemas)
│   ├── routes/           # API route definitions
│   ├── services/         # Business logic (optional)
│   ├── app.ts            # Main application file
│   └── swagger.ts        # Swagger configuration
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Development Environment Setup

### 1. Clone the Repository
```bash
git clone https://github.com/abaaklini/library-api.git
cd library-api
```

### 2. Create the "dist" folder
```bash
mkdir dist
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and add the following variables:

```plaintext
PORT=3000
MONGODB_URI=mongodb://localhost:27017/library
```

### 5. Run the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm run build
npm start
```

The API will be available at `http://localhost:3000`.

## Endpoints

### **Books**

#### Create a new book
- **POST** `/api/books`
- **Request Body**:
  ```json
  {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "publisher": "641c78b5f1a4b2d1e4e5f3a1",
    "year": 1954,
    "isbn": "978-3-16-148410-0"
  }
  ```
- **Response**: 201 Created

#### List all books
- **GET** `/api/books`

#### Get a book by ID
- **GET** `/api/books/:id`

#### Update a book
- **PUT** `/api/books/:id`

#### Delete a book
- **DELETE** `/api/books/:id`

### **Publishers**

#### Create a new publisher
- **POST** `/api/publishers`
- **Request Body**:
  ```json
  {
    "name": "HarperCollins",
    "address": "195 Broadway, New York, NY 10007"
  }
  ```
- **Response**: 201 Created

#### List all publishers
- **GET** `/api/publishers`

#### Get a publisher by ID
- **GET** `/api/publishers/:id`

#### Update a publisher
- **PUT** `/api/publishers/:id`

#### Delete a publisher
- **DELETE** `/api/publishers/:id`

## Swagger Documentation

The API documentation can be accessed at `http://localhost:3000/api-docs` after starting the application.

## Future Improvements

- Implement pagination on listing routes.
- Add filters by title, author, and publication year.
- Implement authentication and authorization using JWT.
- Write automated tests using Jest or Mocha.

## Contribution

Contributions are welcome! Follow the steps below to contribute:

1. Fork this repository
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.