# Specifix assignment

In this challenge we need you to implement a web app to be able to view the `.stl` file. The user needs to login to be able to see the web app.

## Acceptance Criteria

- A Login page for the user (surgeon) to be able to login into the app. It can be a static username/password hardcoded for demo purposes but you can also use any other ways to do it, for example using a third party like Auth0 which is a plus!
- After logging in the user should be able to see a layout containing header, sidebar and main content area.Sidebar will be used for navigation.
- The main view will be a list of patients (cases) and after clicking on the patient, another view will open which contains the details of the patient + the `.stl` viewer (feel free to use the .stl files provided in the folder).
  - List of the patients can be a list hardcoded in the source code or you can use any other sources to retrieve the data which is a plus! (Maybe https://mockoon.com/ can help you!)
  - There is no need to add any interactivity to the stl viewer, But if you want, be my guest and get an extra point for it!

### Example user
Username: sadmin
Password: leave the field empty

## Installation

```
yarn install
```

## Run development mode

```
yarn start
```

## Build production mode

```
yarn build
```

## Linting

The rules are in `.eslintrc.js` and in `.prettierrc.js`

To run the linter:
```
yarn lint
```

To run the linter and fix the autofixable errors:
```
yarn lint-fix
```