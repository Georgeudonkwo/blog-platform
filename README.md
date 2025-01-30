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


