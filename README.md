# Real Estate Scheduler API


## Description

Welcome to my Real Estate API project! This API allows users to sign up and schedule visits to real estate properties, which are registered exclusively by admin users.

In terms of security, user passwords are encrypted, ensuring their safety. Additionally, certain endpoints can only be accessed by admin users, maintaining a controlled environment.

## Technologies utilized in this project

- Jsonwebtoken
- Node
- TypeScript
- Express
- TypeORM
- Bcryptjs
- Zod
- Jest

## Endpoints:

| Method | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /users                     | User creation                                     | Any user, token not required         |
| GET    | /users                     | List all users                                    | Administrators only                  |
| PATCH  | /users/:id                 | Update a user                                     | Administrators only |
| DELETE | /users/:id                 | Perform a soft delete on the user                 | Apenas Admnistradores                  |
| POST   | /login                     | Generate authentication token                     | Any user, token not required  |
| POST   | /categories                | Category creation                                 | Administrators only                  |
| GET    | /categories                | List all categories                               | Any user, token not required  |
| GET    | /categories/:id/realEstate | List all properties that belong to a category     | Any user, token not required  |
| POST   | /realEstate                | Property creation                                 | Administrators only                  |
| GET    | /realEstate                | List all properties                               | 	Any user, token not required  |
| POST   | /schedules                 | Schedule a visit to a property                    | Any user, token mandatory    |
| GET    | /schedules/realEstate/:id  | List all schedules for a specific property        | Administrators only                  |


