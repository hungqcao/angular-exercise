# Angular Exercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Notes

- I'm storing API Key inside `timezone-db.service.ts` for the sake of this exercise, in reality, the client should make a call to an Api to request the time, and the Api Key will be stored on api server.
- The API URL should be stored in configuration variables.
- We could potentially use a proxy to hide API URL from client.
- I wanted to write some unit tests as well but due the time constraint, I couldn't. But again, in reality, I would.
