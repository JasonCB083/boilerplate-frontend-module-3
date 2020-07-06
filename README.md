# Playpix

## Description

React app with front and backend called playpix which combines the ability of a dating app and a sports app to meet friends or more!

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving
-  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Search Restaurants** As a user I want to search restaurants by name so that I know if it´s already in the platform
-  **Add to favorites** As a user I want to add a profile to favorite so that I can save the profiles that I liked the most
-  **See my favorites** As a user I want to see my favorite profiles so that I can see the ones I liked the most

## Backlog

User profile:

- list of events created by the user
- list events the user is attending

Geo Location:
- add geolocation to events when creating
- show event in a map in event detail page
- show all events in a map in the event list page

Homepage:
- ...
  
# Client

## Pages

| url | public | Functionality |
|-----|-------|---------------|
| `/` | true | landing page |
| `/signup` | true | Signup user |
| `/login` | true | login user |
| `/profile` | false | profile of user |

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
  

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Restaurant>]
```

dating model

```
owner - ObjectID<User> // required
name - String // required
phone - String
address - String
```

## API Endpoints (backend routes)

## API routes:

### auth
|Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, password)|
|POST|api/auth/logout|Log out user from app and remove session|
  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Ironhack-PartTime-BCN/boilerplate-frontend-module-3)

[Server repository Link](https://github.com/Ironhack-PartTime-BCN/boilerplate-backend-module-3)

[Deploy Link Backend](http://heroku.com)

[Deploy Link Frontend]()


