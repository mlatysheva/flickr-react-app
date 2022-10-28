# React-Redux App with a Search, Form and Photos fetch features

I developed this project during the course on React at the Rolling Scopes School.
It has the following features:
- a page that renders the list of G20 countries, with a `search by continent` option
- a form that adds a new candidate for the G20 countries
- a page that fetches photos from Flickr based on a search query, number of photos per page and relevancy of photos

## Installation

1. Clone the repository from CLI with `git clone [name of the repository]`
2. Install all the dependencies by running `npm i`
3. Run the app in the development mode by `npm run start`
4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
The page will reload if you make edits to the code.\
You will also see any lint errors in the console.
5. Run `npm run build` to build the app for deploy

## Deployed version 

![https://mlatysheva.github.io/flickr-react-app/](https://mlatysheva.github.io/flickr-react-app/)

## Stack used
- Typescript
- React
- Redux
- Eslint
- Jest

## Features
1. `Home Page`:Render G20 countries with a search by continent option
![](/screenshot-countires.png)

2. `Form Page` Add new candidate via React-Hook-Form and display the newly added candidates:

![](/screenshot-form-add-member.png)

Validation of information of the candidate being added:
![](/screenshot-add-new-candidate-form.png)

3. `API Page` Render photos from the Flickr API filtered by a search query. There are options to select how many photos per page will be displayed and how to sort the photos: most relevant, most recent, etc.

![](/screenshot-photos-api.png)

Page with the details of a selected photo:
![](/screenshot-photo-page.png)

## Testing
Tests have been implemented for the app with the use of the jest library:

![](/screenshot-api-tests.png)