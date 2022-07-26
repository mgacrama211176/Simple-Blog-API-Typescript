# Red Core Solution NODEJS/EXPRESS/TYPESCRIPT

## This app is for a simple BLOG API.
### Features are: 
1. Can create a blog post with Image file for the frontend.
2. Update Blogs using Object ID.
3. Delete a Blog using Object ID.
4. View All Blogs and view a specific Blog using Object ID.
5. Can view Blogs based on the category the user wants to view.

#### Technologies used are:
**NodeJS**  
**ExpressJs**  
**TypeScript**  

# How to use the API:
**To add post**


1. Using POSTMAN
 1. copy the URL: localhost:3000/api/posts/
 2. Make sure the action verb is on : **POST**
 2. Copy this on the field: 
| Key  | Value |
| ------------- |:-------------:|
| title     | Any Title you want     |
| description      | Any description    |
| photo (file)     |Any JPG image
| username      | any username string     |
| category      | Blog    |
 3. Click Send
2. Below should give a message saying that Post has been Created.


**To view the post added**
1. On the URL copy : localhost:3000/api/posts/.
2. Make sure the action verb is on : **GET**.
3. Click Send.
4. It should show all the Posts created and available from the database.


**TO DELETE**
1. Follow View post added.
2. Copy the Object ID
3. On the URL type : localhost:3000/api/posts/(PASTE THE OBJECT ID COPIED).
4. Make sure the action verb is on : **DELETE**.
5. Click Send.
6. It should display post Deleted on your Postman.

**TO UPDATE**
1. Follow View post added.
2. Copy the Object ID.
3. On the URL type : localhost:3000/api/posts/(PASTE THE OBJECT ID COPIED).
4. Make sure the action verb is on : **PUT**.
5. Click:
 1. Body
 2. Form-data
6. On the field copy:
| Key           | Value              |
| ------------- |:-------------:     |
| title         | Any Title you want |
| description   | Any description    |
| photo (file)  |Any JPG image       |
| username      | any username string|
| category      | Blog               |
7. Click Send.
8. It will notify the user that the post has been updated.
