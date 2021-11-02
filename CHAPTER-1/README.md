<h2 align="center">
    Rocketseat - IGNITE - Chapter I<br>
</h2>

<div align="center">
    Nodemon, HTTP Methods, Insomnia & Types of Params<br>
</div>


## :rocket: Content

## Verbs

  - GET - Reading infos
  - POST - Create infos
  - PUT - Update Infos
  - PATCH - Update PARTIAL info (example: avatar from user)
  - DELETE - Delete infos

<hr>

## HTTP - Status Code 

  - 1xx - Informative: processing..
  - 2xx - Confirmation:
    - 200: Request success
    - 201: Created - AFTER REQUEST POST
  - 3xx - Redirect:
    - 301: Moved Permanently
    - 302: Moved
  - 4xx - Client Error
    - 400: Bad Request
    - 401: Unauthorized
    - 403: Forbidden
    - 404: Not Found
    - 422: Unprocessable Entity 
  - 5xx - Server Error
    - 500: Internal Server Error
    - 502: Bad Gateway

<hr>

## Request Params

  - Header Params: Token, authorization, cors
  - Query Params: key,value,separator (page=28&order=asc)
  - Route Params: /products/{id}
  - Body Params: { name: 'john doe', last_name: 'stewie' }

<hr>