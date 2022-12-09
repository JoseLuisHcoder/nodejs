#Blog API Express

##Models
- Users
- Posts
- Categories
- coments
- Likes

## Auth
-Sign up /auth/sign-up
-Login /auth/login

microservicios
    -auth0
    -redis
    arquitectura hexagonal
//  es recomendable que las cetergorias y posts manejen sus propias rutas, para facilitar los filtros de busqueda y asi tambien ayudar el front teniendo un endpoint paa buscar en una sola ruta

categories
/api/v1/categories
    - turorial
    -español
    -backend
    -devops
    -etc....
posts
/api/v1/posts

añadiremos una nueva funcionalidad de la rutas de nuestro propio login como usuario
/api/v1/users/me
/api/v1/users/me/posts