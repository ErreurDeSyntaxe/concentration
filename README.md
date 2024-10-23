# Concentration

A website to play a singleplayer, custom game of concentration. The user inputs a list of words. The application generates the cards, lays them randomly in a grid formation, and allows the user to play according to the rules. Each turn allows the player to flip to cards. If they are identical, the cards remain face up. Otherwise, they are flipped back down.

## About the Project

### Preview

<div align='center'>
    <img src='./README/project-preview.png'>
</div>

### Live

<a href='https://erreurdesyntaxe.github.io/concentration/'>Concentration</a>

### Objective

The project has two main goals of equal importance. First, I want to provide a fun and quick way to learn/review vocabulary. Second, I want to practice the MVC architecture and parcel.

### Notable Features

- User input validation
- MVC architecture

### Built With

<img src='./README/html5-logo.svg' style='width:40px; height: 40px' >
<img src='./README/css3-logo.svg' style='width:40px; height: 40px' >
<img src='./README/javascript-logo.svg' style='width:40px; height: 40px' >
<!-- <img src='./README/webpack-logo.svg' style='width:40px; height: 40px' > -->
<!-- <img src='./README/parcel.ico' style='width:40px; height: 40px' > -->

## Development

### To Do

- [x] Rewrite the README
  - [x] Title
  - [x] Live Page Link
  - [x] Objective
  - [x] Notable Features
- [x] Plan
  - [x] User stories
  - [x] Features
  - [x] Flowchart
  - [x] Architecture
  - [x] UI Design
- [ ] Development
  - [x] Basic HTML
    - [x] Title
    - [x] Meta
    - [x] Rough Structure
    - [x] Favicons
  - [ ] Parcel
    - [ ] "npm init"
    - [ ] Remove "main": "index.js"
    - [ ] Later Replace With "default": "index.html"
    - [ ] Rewrite "test" to "start": "parcel index.html"
    - [ ] Add "build": "parcel build index.html --dist-dir ./dist"
    - [ ] "npm i parcel -D"
    - [ ] Run Local Host With CLI: "npm start"
    - [ ] Build Deployment-Ready Files With CLI: "npm run build"
  - [x] Console-Based Logic
    - [x] Forget to Plan this Part
  - [ ] UI
    - [ ] Refined UI
    - [ ] Color Palette
    - [ ] Overall Layout
    - [ ] Individual Section Layout
    - [ ] Menu/Nav
  - [ ] Responsive Design
    - [ ] Media Queries
    - [ ] Mobile Menu
  - [ ] Check Accessibility
- [ ] Fix bugs
  - [ ] No Bugs Yet!
- [ ] Review README

### User Stories

- As a user, I want to input vocabulary easily
- As a user, I want to add pairs that are either identical or equivalent
- As a user, I want to start a new game with the same set of cards
- As a user, I want to start a new game with a new set of cards w/o reloading

### Features

- Users can input the words once
- Users can input equivalent but different words for "identical cards" (eg: red & red | red & color of blood)
- Users can start a new game with the same set of cards used
- Users can use a brand new game with a new card set without reloading

### Flowchart

Page Loads -> Nothing
User clicks "Create Set" -> Form (modal) shows -> user inputs list -> a deck is created -> user clicks on a card -> card flips -> user clicks on another card -> card flips -> app compares -> the game continues until the end

### Architecture

model.js
export const state = {
-deck: [['red', 'blood'], ['blue', 'sky']],
-currentCard: 'red',
}

controller.js
pageView.addHandlerRender(function)
inputView.addHandlerRender(function)
playView.addHandlerRender(function)
playView.addHandlerPlay(function)

class View {
-render()
}

class PageView {
-\_parentElement;
}

class PlayView {
-\_parentElement;
-play()
-addHandlerCheck()
}

class InputView {
-\_parentElement;
-validate()
-toggleModal()
-\_addHandlerToggleModal()
}

## Reflection

### Lessons & Difficulties

Some lessons learned along the way

### Diary

Some thoughts regarding the project
