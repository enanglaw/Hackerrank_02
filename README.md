# Hackerrank01

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# WeatherFinder

_JSON API URL :_
`https://jsonmock.hackerrank.com/api/weather?name=<name>`

## Environment

- Angular CLI Version: 10.0.9
- Angular Core Version: 10.0.9
- Node Version: 12.18.3
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/I8LW4foLtjrt6jvB0RIv4w/weather-finder.gif)

## Functionality Requirements

The component must have the following functionalities:

- The input should initially be empty. The user can type a city name into this input box to search for weather details for this city.

- Clicking on the `Search` button should make an API GET call to the URL `https://jsonmock.hackerrank.com/api/weather?name=<name>` using the Angular HttpClient module. Here, `<name>` is the city name entered into the text box. For example, for the value `Dallas`, the API hit has to be `https://jsonmock.hackerrank.com/api/weather?name=Dallas`. You will always get data for cities `Dallas` and `Oakland`.

- The response contains a data field, where data is an array of objects, and each object is a weather record. We only need to use the first record from the array for rendering in this challenge. The sample format of the data field is given below:

```
  "data": [
    {
      "name": "Dallas",
      "weather": "12 degree", // Format is always "<value> degree"
      "status": [
        "Wind: 2Kmph", // String
        "Humidity: 5%" // String
      ]
    }
  ]
```

- The weather details should be rendered inside `<div data-test-id="weather-details"></div>`. This div should not be rendered initially since no API has been hit yet.

- Each weather record contains a weather field. Retrieve the value and display in the following element - `<span data-test-id="result-temperature"></span>`.

- If value in weather field is less than 20, render cold weather icon by rendering `<i data-test-id="icon-cold"></i>`. If the value is greater than or equal to 20, render sunny weather icon by rendering `<i data-test-id="icon-sunny"></i>`.

- Each weather record contains a status field which is an array of strings.

- The first string denotes the wind value and the second string denotes the humidity value.

  1. Render wind value in <div data-test-id="result-wind"></div>
  2. Render humidity value in <div data-test-id="result-humidity"></div>

- If no records are returned for any city by the API, you must render `<div data-test-id="no-result">No Results Found</div>` instead, and this element must be visible only when the data field is an empty array. This div should not be rendered initially since no API has been hit yet.

- Please note that the input field accepts only text. Test cases take care of calling the API with valid input, so writing input validation is not required.

- For testing purposes, please use the following cities and their corresponding weather conditions:

```
  Dallas - Cold
  Oakland - Sunny
```

## Testing Requirements

- The input should have the data-test-id attribute `app-input`.
- The `Search` button should have the data-test-id attribute `submit-button`.
- The weather details should have the data-test-id attribute `weather-details`.
- The sunny icon should have the data-test-id attribute `icon-sunny`.
- The cold icon should have the data-test-id attribute `icon-cold`.
- The span showing temperature should have the data-test-id attribute `result-temperature`.
- The div showing wind information should have the data-test-id attribute `result-wind`.
- The div showing wind information should have the data-test-id attribute `result-humidity`.
- The `No Results Found` div should have the data-test-id attribute `no-result`.

## Project Specifications

**Read Only Files**

- src/tsconfig.spec.json
- src/app/app.component.css
- src/app/app.module.ts
- src/app/app.component.spec.ts
- src/app/weatherFinder/weatherFinder.component.spec.ts

**Commands**

- run:

```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```

- install:

```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```

- test:

```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```

# User Lists

## Environment

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12.18.3
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/CgD5M0JuOd1ffgjGhwyPzQ/users-list.gif)

## Functionality Requirements

There are 2 components in the app:

- DataForm component: This component is used to add a new item of type Song or Book to the list.

- DataList component: A reusable component that is used to render the list of Songs and the list of Books. Accepts the appropriate List and the dataType (One of "Song" or "Book") as input.

The app should have the following functionalities:

- The user can add items to the book list or the song list from the same form. Adding an item in the form at the top should add it to the respective list below.

- There are 3 required input fields - name, genre, creator, and a `type` input field having 2 options to choose if the current item being added is a book or a song.

- For this challenge, you can assume that each item is uniquely identified by its name. Tests take care of testing with unique names only.

- On choosing `Song`, render an extra input field `totalTime`. Initially, all fields should be empty.

- Clicking on `Add` button should add the item to the respective list and clear all the input fields.

- The DataList component renders each of book list and song list in a table having columns name, genre, creator of each item followed by a delete button. Clicking on the delete button should delete the respective item from the list. Song list has an extra column of `Time` to render `Total Time` information for the item.

- Book item should be added to `<table data-test-id="book-table">` as a `<tr>`.

- Song item should be added to `<table data-test-id="song-table">` as a `<tr>`.

- The interface for an item is defined in the file `src/types/Item.ts` having the following structure:

```
  interface Item {
    name: string;
    genre: string;
    creator: string;
    type: string;
    totalTime?: number;
  }
```

## Testing Requirements

- The input field for `name` has data-test-id attribute `app-input-name`.
- The input field for `genre` has data-test-id attribute `app-input-genre`.
- The input field for `creator` has data-test-id attribute `app-input-creator`.
- The input field for `total time` has data-test-id attribute `app-input-time`.
- The input field for type Book has data-test-id attribute `app-input-book-type`.
- The input field for type Song has data-test-id attribute `app-input-song-type`.
- The Add button has data-test-id attribute `add-button`.
- The book table has data-test-id attribute `book-table`.
- The song table has data-test-id attribute `song-table`.
- Rows in a single table has data-test-id attribute `list-item-0`, `list-item-1` and so on.
- The Cell having name has data-test-id attribute `item-name`.
- The Cell having name has data-test-id attribute `item-name`.
- The Cell having creator has data-test-id attribute `item-creator`.
- The Cell having total time has data-test-id attribute `item-time`.
- The Cell having delete button has data-test-id attribute `item-delete`.

## Project Specifications

**Read-only Files**

- src/app/app.component.spec.ts
- src/app/app.module.ts

**Commands**

- run:

```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```

- install:

```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```

- test:

```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
