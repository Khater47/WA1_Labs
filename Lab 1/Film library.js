'use strict'


const dayjs = require('dayjs');

function Film(id, title, favorite = false, watchDate, rating){
    this.id = id;
    this.title = title;
    this.favorite = favorite;
    this.watchDate = watchDate;
    this.rating = rating;
}

const printLibrary = (library) => {
    console.log('***** List of films *****');
    for(const film of library){
        if(film.watchDate !== undefined){
            console.log(`Id: ${film.id}, Title: ${film.title}, Favorite: ${film.favorite}, Watch date: ${film.watchDate.format('MMMM DD, YYYY')}, Score: ${film.rating}`);
        }else{
            console.log(`Id: ${film.id}, Title: ${film.title}, Favorite: ${film.favorite}, Watch date: ${film.watchDate}, Score: ${film.rating}`);
        }   
    }
}

function FilmLibrary(){
    this.library = [];

    //addNewFilm
    this.addNewFilm = (film) => {
        this.library.push(film);
    }

    //sortByDate
    this.sortByDate = () => {
        const ordered = this.library.filter( film => film.watchDate !== undefined).sort( (a, b) => (a.watchDate.isAfter(b.watchDate) ? 1 : -1));
        this.library.forEach( film => { if(film.watchDate === undefined) ordered.push(film)});
        return ordered;
    }

    //deleteFilm
    this.deleteFilm = (id) => {
        const index = this.library.findIndex((film) => film.id === id);
        return this.library.splice(index, 1);
    }

    //resetWatchedFilms
    this.resetWatchedFilms = () => {
        return [...this.library].map( film => film.watchDate = undefined);
    }

    //getRated
    this.getRated = () =>{
        return this.library.filter( film => film.rating !== undefined).sort((a,b) => (a-b));
    }

    //printList
    this.printList = () =>{
        console.log('***** List of films *****');
        for(const film of this.library){
            if(film.watchDate !== undefined){
                console.log(`Id: ${film.id}, Title: ${film.title}, Favorite: ${film.favorite}, Watch date: ${film.watchDate.format('MMMM DD, YYYY')}, Score: ${film.rating}`);
             }else{
                console.log(`Id: ${film.id}, Title: ${film.title}, Favorite: ${film.favorite}, Watch date: ${film.watchDate}, Score: ${film.rating}`);
            }   
        }
    }
}

const pulpFiction = new Film(1, 'Pulp Fiction', true, dayjs('March 10, 2022', 'MMMM DD, YYYY'), 5);
const grams21 = new Film(2, '21 Grams', true, dayjs('March 17, 2022', 'MMMM DD, YYYY'), 4);
const starWars = new Film(3, 'Star Wars', false);
const matrix = new Film(4, 'Matrix', false);
const shrek = new Film(5, 'Shrek', false, dayjs('March 21, 2022', 'MMMM DD, YYYY'), 3);

const myFilmLibrary = new FilmLibrary();
myFilmLibrary.addNewFilm(pulpFiction);
myFilmLibrary.addNewFilm(grams21);
myFilmLibrary.addNewFilm(starWars);
myFilmLibrary.addNewFilm(matrix);
myFilmLibrary.addNewFilm(shrek);


myFilmLibrary.printList();
printLibrary(myFilmLibrary.getRated());
printLibrary(myFilmLibrary.sortByDate());
myFilmLibrary.resetWatchedFilms();
myFilmLibrary.printList();
myFilmLibrary.deleteFilm(3);
myFilmLibrary.printList();