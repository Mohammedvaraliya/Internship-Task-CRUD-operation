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

### Overview

<table width="100%"> 
<tr>
<td width="50%">      
&nbsp; 
<br>
<p align="center">
  <b>CREATE</b>
</p>
<img src="https://user-images.githubusercontent.com/95087498/230554983-ec84a76d-6b99-4c41-8b33-4e932a9b6b22.png">
</td> 
<td width="50%">
<br>
<p align="center">
  <b>READ</b>
</p>
<img src="https://user-images.githubusercontent.com/95087498/230555237-da00528a-5074-48da-b176-42dcc7ada6c4.png">
</td>
</tr>
<tr>
<td width="50%">
<br>
<p align="center">
  <b>UPDATE</b>
</p>
<img src="https://user-images.githubusercontent.com/95087498/230555430-a7319e3a-4514-4562-971a-3d6a3df7bb37.png">
<img src="https://user-images.githubusercontent.com/95087498/230555551-ef4e77d0-4570-40f4-8eff-85c002d506f7.png">
</td>
<td width="50%">
<br>
<p align="center">
  <b>DELETE</b>
</p>
<img src="https://user-images.githubusercontent.com/95087498/230555978-7e6d9af0-da3d-4f0e-9f85-aa980bb61cba.png">
<img src="https://user-images.githubusercontent.com/95087498/230556124-277d03c2-3bce-49cb-ada8-8a5ec8573a39.png">
</td>
</tr>
</table>
