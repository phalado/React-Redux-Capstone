# React and Redux Capstone Project: catalog os Statistics

<h1 align="center"><img src="https://raw.githubusercontent.com/phalado/React-Redux-Capstone/develop/public/content/welcome.png"></h1>

This is Microverse's final project in React/Redux's course.

In this project, I build a catalog of DC Comic's main characters using React and Redux.


## Table of contents

- [React and Redux Capstone Project: catalog os Statistics](#react-and-redux-capstone-project-catalog-os-statistics)
  - [Table of contents](#table-of-contents)
  - [About](#about)
  - [The catalog](#the-catalog)
    - [How to open](#how-to-open)
    - [Technologies used](#technologies-used)
  - [Video presentation](#video-presentation)
  - [Future work](#future-work)
  - [Contact](#contact)
  - [Acknowledgments](#acknowledgments)


## About

This project's goal was to build a browsable list of items that you can filter and access to the details of one item. The list should be accessed from an API, so I choose the [Superhero API][superhero-API] and filtered it to store only the DC Comic's characters.

The project's assignment can be seen [here][assignment].

Link to a live version [here][live-version].

Repository: https://github.com/phalado/React-Redux-Capstone


## The catalog

For this project I hacked Batman's computer and got some data from the main heroes and villains - you can't be the Batman if you are not prepared for each hero or villain. For my bad luck, after [the Tower of Babel][tower-of-babel] the bat made it difficult to get data, so I wasn't able to get the character's powers and weaknesses, but I was able to get their name, identity, filiations, a photo and some stats that I converted to a power chart using [React SVG Radar Chart][react-radar-chart].

To hide from the world's greatest detective I had to use a fake server to store the data. When you open the catalog the React APP downloads the data from the server using an API and stores it in the Redux store.

The first page showed is just an introductory page.

![init-screen][init-screen]

When you click the button will be rendered the Justice League of America's filtered page, showing it's heroes. It's an example of the characters filtered by filiation.

![team-screen][team-screen]

 You can click in the hero to see its data. Interesting pointing that, if you click in a filiation in blue the will be rendered that team's members.

![hero-screen][hero-screen]

Finally, you can click in the button in the header to see the possible filters, being possible to filter by alignment - good, bad or neutral - by several teams of heroes or villains or, if you prefer, click in the name of any character to see its data.

![filter-screen][filter-screen]


### How to open

You can open the catalog online clicking [here][live-version] or locally following these steps:

* Click on the green button "Clone or Download"
* Click on Download ZIP
* Extract the project
* In your terminal, navigate to the game's folder
* Run *npm install*
* Run *npm start*

A tab will be opened in the browser.


### Technologies used

To create this project I used:

* JavaScript
* A bit of HTML and CSS
* Eslint
* React
* Redux
* PropTypes
* [Superhero API][superhero-API]
* [React SVG Radar Chart][react-radar-chart]
* Github
* Heroku

## Video presentation

https://youtu.be/mFQ1Zvdw2x0


## Future work

* Mobile version with React Native
* Possibility to pin your favourite Heroes/Villains
* Add more data about the characters


## Contact

Author: Raphael Cordeiro

Follow me on [Twitter][rapha-twitter],  visit my [Github portfolio][rapha-github], my [Linkedin][rapha-linkedin] or my [personal portfolio][rapha-personal].


## Acknowledgments

[Microverse][mcvs]

I have no business rights about the characters used in this catalog. This is only for learning purposes. All characters belong to [DC Comics][dc-comics].




<!-- Links -->
[assignment]: https://www.notion.so/Catalogue-of-Statistics-72446e7fa33c403a9b6a0bc1de5c6cf5
[live-version]: https://batcomputer-copy.herokuapp.com/
[superhero-API]: https://www.superheroapi.com/
[tower-of-babel]: https://dc.fandom.com/wiki/JLA:_Tower_of_Babel
[react-radar-chart]: https://www.npmjs.com/package/react-svg-radar-chart
[dc-comics]: https://www.dccomics.com/
[mcvs]: https://www.microverse.org/
[rapha-github]: https://github.com/phalado
[rapha-twitter]: https://twitter.com/phalado
[rapha-linkedin]: https://www.linkedin.com/in/raphael-cordeiro/
[rapha-personal]: https://www.phalado.tech/

<!-- Images -->
[init-screen]: https://raw.githubusercontent.com/phalado/React-Redux-Capstone/develop/public/content/init-screen.png
[team-screen]: https://raw.githubusercontent.com/phalado/React-Redux-Capstone/develop/public/content/team-screen.png
[filter-screen]: https://raw.githubusercontent.com/phalado/React-Redux-Capstone/develop/public/content/filter-screen.png
[hero-screen]: https://raw.githubusercontent.com/phalado/React-Redux-Capstone/develop/public/content/hero-screen.png

<!-- Video -->
[video]: https://youtu.be/mFQ1Zvdw2x0
