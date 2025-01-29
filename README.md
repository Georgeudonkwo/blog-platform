# blog-platform
This is a **RESTFUL** application that allow *user* to *create*, *read*, and *delete* blog **post** and manage **comment**.

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
