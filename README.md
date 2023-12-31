# Specifix assignment

In this challenge we need you to implement a web app to be able to view the `.stl` file. The user needs to login to be able to see the web app.

## Acceptance Criteria

- A Login page for the user (surgeon) to be able to login into the app. It can be a static username/password hardcoded for demo purposes but you can also use any other ways to do it, for example using a third party like Auth0 which is a plus!
- After logging in the user should be able to see a layout containing header, sidebar and main content area. Sidebar will be used for navigation.
- The main view will be a list of patients (cases) and after clicking on the patient, another view will open which contains the details of the patient + the `.stl` viewer (feel free to use the .stl files provided in the folder).
  - List of the patients can be a list hardcoded in the source code or you can use any other sources to retrieve the data which is a plus!
  - There is no need to add any interactivity to the stl viewer, but if you want, be my guest and get an extra point for it!

### Example user
Username: sadmin
Password: leave the field empty


## Serve locally

First start the backend, within the `backend` folder, use the following command:

```
yarn start
```

Then in another terminal, within the `frontend` folder, use the following command:

```
yarn start
```

## To serve via Docker compose

```
docker compose up
```

The backend should be available on `http://localhost:5000/` and the frontend on `http://localhost:8080/`. Live reload is currently not enabled.
