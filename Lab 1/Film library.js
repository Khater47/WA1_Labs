'use strict'


const dayjs = require('dayjs');

function Film(id, title, favorite = false, watchDate = dayjs(), rating = 0){
    this.id = id;
    this.title = title;
    this.favorite = favorite;
    this.watchDate = watchDate;
    this.rating = rating;
}

function FilmLibrary(){
    this.library = [];


    this.addNewFilm = (film) => {
        this.library.push(film);
    }
}

const pulpFiction = new Film(1, 'Pulp Fiction', true, dayjs('2022-03-10'), 5);
const grams21 = new Film(2, '21 Grams', true, dayjs('2022-03-17'), 4);
const starWars = new Film(3, 'Star Wars', false);
const matrix = new Film(4, 'Matrix', false);
const shrek = new Film(5, 'Shrek', false, dayjs('2022-03-21'), 3);

const myFilmLibrary = new FilmLibrary();
myFilmLibrary.addNewFilm(pulpFiction);
myFilmLibrary.addNewFilm(grams21);
myFilmLibrary.addNewFilm(starWars);
myFilmLibrary.addNewFilm(matrix);
myFilmLibrary.addNewFilm(shrek);

console.log(myFilmLibrary);