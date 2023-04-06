## CRUD operation for students using mongoDB and node js.

This is a simple RESTful API that manages student data in a MongoDB database. It allows the creation, retrieval, updating, and deletion of student records.

### CREATE

```bash
https://internship-project-i4l1.onrender.com/create_student
```

### READ

```bash
https://internship-project-i4l1.onrender.com/read_student?rollNo=110
```

### UPDATE

```bash
https://internship-project-i4l1.onrender.com/update_student?rollNo=110
```

### DELETE

```bash
https://internship-project-i4l1.onrender.com/delete_student?rollNo=110
```

## API Endpoints

#### The following API endpoints are available:

### POST /create_student

Creates a new student record.

Request Body:

```json
{
  "name": "John Doe",
  "rollNo": "123456",
  "password": "password123"
}

```

Response:

* 201 Created: The student was created successfully.
* 400 Bad Request: The request is missing required fields.
* 409 Conflict: A student with the same rollNo already exists.


### GET /read_student

Retrieves a student record by rollNo.

Request Parameters:

```bash
rollNo: string
```

Response:

* 200 OK: The student record was found.
* 404 Not Found: The student record was not found.

### PUT /update_student

Updates an existing student record.

Request Parameters:

```bash
rollNo: string
```

Request Body:

```json
{
  "password": "password123",
  "newName": "Jane Doe",
  "newPassword": "newpassword123"
}
```

Response:

* 200 OK: The student record was updated successfully.
* 403 Forbidden: The rollNo or password is incorrect.


### DELETE /delete_student

Deletes an existing student record.

Request Body:

```json
{
  "rollNo": "123456",
  "password": "password123"
}

```

Response:

* 200 OK: The student record was deleted successfully.
* 400 Bad Request: The request is missing required fields.
* 404 Not Found: The student record was not found.

## Error Handling

If an error occurs, the server will respond with an error message in JSON format. The following error codes may be returned:

* 400 Bad Request: The request is missing required fields.
* 403 Forbidden: The rollNo or password is incorrect.
* 404 Not Found: The student record was not found.
* 409 Conflict: A student with the same rollNo already exists.
* 500 Internal Server Error: An internal server error occurred.