# blog-platform
This is a **RESTFUL** application that allow *user* to *create*, *read*, and *delete* blog **post** and manage **comment** as well as update **profile**.

## Key technologies used are:
1. *express.js*
2. *mongodb*
3. *mongoose*
4. *jsonwebtoken*
5. *bcryptjs*
6. *swagger-jsdoc*
7. *swagger-ui-express*
8. *nodemailer*

## Features Implemented
1. *User Authetication*
2. *Blog Post Management*
3. *Comments System*
4. *User Profile*

## Answer to Question 1 :
the answer to question 1 is attached as a *downloadable pdf in the public/docs directory*.
the file can be downloaded from the browser using the url:**http:/localhost:50555/docs/question1.pdf**. change the port number accordingly.

## Test
if your are a new user, register with your user information through the **register** endpoint and obtain your authorisation **token**.
if you are an existing user, then login into the application throgh the **login** endpoint by providing your **email** and **password** and obtain your **authorisation token**.
include the authorisation token in the header of your requested to protected APIs.

**NOTE:** 
To use the password reset api, then follow this instruction:
Access the endpoint: **/api/auth/request-password-reset**. the password to use in this endpoint is the App password.
Go to your Google Account's security settings:**https://myaccount.google.com/security**
Look for **App passwords** (you might need to enable 2-Step Verification first if you haven't already).
Create a new App Password specifically for "Mail" or a custom name like "Nodemailer."
**Important: Copy the generated App Password immediately. You won't be able to see it again.**
Replace your regular Gmail password with the App Password when testing the endpoint.
You will get an email with a link to where you can reset your password.

1. if you are using the swagger endpoint. then navigate to the path **blog-api-docs** on your *localhost*, that is
swagger endpointis **http:localhost:port/blog-api-docs**
set the port in the server section of the swagger doc option as follows.
```servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Development server',
      },
    ],
    ```
    I am using port *50555*, change it to your preferred value.
    
2. You can also use Postman, curl etc


