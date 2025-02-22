# Steps to run this project

> git clone https://github.com/rutulshah17/coding-test.git

> cd coding-test


## SERVER
```
> cd server
> npm install
> npm start => server should run on PORT 5000
> npm test => to run unit tests
```
Below are the accessible API Endpoints
```
> /
> /api/cats
> /api/sharks
> /api/both
```

## CLIENT

```
> cd ./client
> npm install
> npm start
```



# Ownr Developer Candidate Coding Test

Congratulations, you have been asked to complete our Full Stack candidate proficiency test! 

You will have **48 hours** starting when you receive this test to return the full working source code as a Pull Request against a fork of this repository. Please thoroughly read the attached set of instructions. You will be creating a mini web app that uses React, Node & Express. This app will consist of a backend Express server that will deliver a React app to be rendered in the browser. The app that you will be building is a simple image carousel that allows the user to pick between cat or
shark photos and then cycle through those photos. An example of a running version of this can be seen here:
https://founded.media/hiring/videos/cat-shark-app.mp4

If you have any questions, require further details or get stuck please do not hesitate to contact Hugh Soong (hugh.soong@rbc.com).

## Requirements

The Express server, besides delivering whats required for React, should also provide an API endpoint that will return one of 3 possible lists of photo URLs (please see attached lists). Your React app should make a request to your API endpoint to retrieve a photo list. During this request the React app should show a loading state. Once the photo list has been retrieved the loading state should dismiss and the first photo should be shown. The user should now be able to cycle through the photos using left and right arrow buttons. The user can use the UI to toggle between cat photos, shark photos, or both (when both selected they should arrive in a random order). After each change to the desired list the loading state should be shown just like during the initial load and a new request to the photo API endpoint should be made (i.e. Do not cache the photo lists).

### Do

- Use React Context
- Be mindful of when to use props vs. state
- Use webpack
- Be RESTful
- ES6+
- Use JS best practices
- Be creative

### Don't

- Use 3rd party image carousels
- Over think the problem, there's no trick here

### BONUS

- Show off some cool CSS
- Unit tests
- Add other useful features

## Photo Lists

```
const sharksList = [
 'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg',
 'https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg',
 'https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg',
 'https://founded.media/hiring/photos/sharks/4107884442_3baf8985f2_b.jpg',
 'https://founded.media/hiring/photos/sharks/3822452418_ffa66da89d_o.jpg',
 'https://founded.media/hiring/photos/sharks/3800013954_20fea3a9c9_b.jpg',
 'https://founded.media/hiring/photos/sharks/7109693941_250fc6b246_k.jpg',
 'https://founded.media/hiring/photos/sharks/8592704407_75c3c7ff53_h.jpg',
 'https://founded.media/hiring/photos/sharks/14730744390_cebc28aa86_k.jpg',
 'https://founded.media/hiring/photos/sharks/4936728723_91da549b05_b.jpg',
];
const catsList = [
 'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
 'https://founded.media/hiring/photos/cats/16175483119_bd7374d8a8_h.jpg',
 'https://founded.media/hiring/photos/cats/13901304865_a444cf4d34_k.jpg',
 'https://founded.media/hiring/photos/cats/8311701653_49ed80202c_k.jpg',
 'https://founded.media/hiring/photos/cats/13336301695_3c06dd41cc_k.jpg',
 'https://founded.media/hiring/photos/cats/38679744435_66279af67c_k.jpg',
 'https://founded.media/hiring/photos/cats/6393395037_9cda69da1a_b.jpg',
 'https://founded.media/hiring/photos/cats/6977309082_44102ddf51_b.jpg',
 'https://founded.media/hiring/photos/cats/11477923503_bbdf86387d_b.jpg',
 'https://founded.media/hiring/photos/cats/4481336172_7f464f180d_b.jpg'
];
```

## Instructions

### Getting started

- Fork or clone this repository
- Complete the assignment in a separate branch in your version of the repository

### Submission
There are several ways to submit your completed assignment:

#### PR Method (Preferred)
- Create a PR for `your new branch` -> `master` **in your own repository**
- Do not PR in this repository
- Email hugh.soong@rbc.com with a link to the PR

#### Zip Method
- Zip your completed code
- Email it to hugh.soong@rbc.com
