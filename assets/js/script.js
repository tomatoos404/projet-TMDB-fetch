// paramétres de base
let body = document.querySelector("body")
let film_categorie = document.querySelector(".film-categorie")
let section_film_detail = document.querySelector(".film-detail")
let section_list_type = document.querySelector("#list-film-type")
let popular_a_in_menu = document.querySelector("#populaire")
let top_rated_a_in_menu = document.querySelector("#top-rated")
let now_film_a_in_menu = document.querySelector("#now-film")
film_categorie.style.display = "none"
section_film_detail.style.display = "none"
section_list_type.style.display = "none"
// paramétres de base

// fontion qui permet d'animer le menu catégorie
let dropdown = document.querySelector(".dropdown")
let buttonCat = document.querySelector(".button-cat")
let menuCat = document.querySelector(".menu-cat")
let toggleIndex = 0
buttonCat.addEventListener("click", ()=>{
    if(toggleIndex === 0){
        menuCat.style.height = `250px`;
        toggleIndex++;
    } else{
        menuCat.style.height = `0px`;
        toggleIndex--;
    }
})
// fontion qui permet d'animer le menu catégorie


// fetch film populaire
let popularFilm = document.querySelector(".pop-div")
const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWVhZDNjMWE2Y2U5MDM0MDg3MmY4NTc5ZDhkMjBmYSIsIm5iZiI6MTczNDM1ODE5OS44MTksInN1YiI6IjY3NjAzNGI3YWU4MWEzZTQzNDc4MjFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpKgKRnf77R10Ve1ewdZryJ8cxYcyBF3OPfWvh0dxxw'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(dataMovies => {
        for(i=0;i<5;i++){
            let title = dataMovies.results[i].original_title
            let rate = dataMovies.results[i].vote_average
            let poster = dataMovies.results[i].poster_path
            console.log(dataMovies.results[i]);
            let movieElToInject = `<div id="${dataMovies.results[i].id}" class="card-film">
                    <img src="https://image.tmdb.org/t/p/w500/${poster}" alt="poster de ${title}">
                    <div class="bottom-card-film">
                    <p>${title}</p>
                    <span>${rate}</span>
                    </div>
                </div>`
                
                popularFilm.innerHTML += movieElToInject
        }
    })
    .catch(err => console.error(err));
// fetch film populaire


// fetch list des film populaire
let listTypeFilm = document.querySelector("#div-list-film-type")
let type = ""
let callListByType = ()=>{

    const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`;
    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWVhZDNjMWE2Y2U5MDM0MDg3MmY4NTc5ZDhkMjBmYSIsIm5iZiI6MTczNDM1ODE5OS44MTksInN1YiI6IjY3NjAzNGI3YWU4MWEzZTQzNDc4MjFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpKgKRnf77R10Ve1ewdZryJ8cxYcyBF3OPfWvh0dxxw'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(dataMovies => {
        listTypeFilm.innerHTML = ""
        for(i=0;i<15;i++){
            let title = dataMovies.results[i].original_title
            let rate = dataMovies.results[i].vote_average
            let poster = dataMovies.results[i].poster_path
            console.log(dataMovies.results[i]);
            let movieElToInject_list_type = `<div id="${dataMovies.results[i].id}" class="card-film">
                    <img src="https://image.tmdb.org/t/p/w500/${poster}" alt="poster de ${title}">
                    <div class="bottom-card-film">
                    <p>${title}</p>
                    <span>${rate}</span>
                    </div>
                </div>`
                
                listTypeFilm.innerHTML += movieElToInject_list_type
        }
    })
    .catch(err => console.error(err));
}
// fetch list des type de film présent a l'acceuil


// fetch film les meiux note
let topRated = document.querySelector(".best-rated-div")
const url_top_rated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const options_top_rated = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWVhZDNjMWE2Y2U5MDM0MDg3MmY4NTc5ZDhkMjBmYSIsIm5iZiI6MTczNDM1ODE5OS44MTksInN1YiI6IjY3NjAzNGI3YWU4MWEzZTQzNDc4MjFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpKgKRnf77R10Ve1ewdZryJ8cxYcyBF3OPfWvh0dxxw'
    }
};

fetch(url_top_rated, options_top_rated)
    .then(res => res.json())
    .then(dataMovies => {
        for(i=0;i<5;i++){
            let title = dataMovies.results[i].original_title
            let rate = dataMovies.results[i].vote_average
            let poster = dataMovies.results[i].poster_path
            console.log(dataMovies.results[i]);

            let movieElToInject_top_rated = `<div id="${dataMovies.results[i].id}" class="card-film">
                    <img src="https://image.tmdb.org/t/p/w500/${poster}" alt="poster de ${title}">
                    <div class="bottom-card-film">
                    <p>${title}</p>
                    <span>${rate}</span>
                    </div>
                </div>`
                
                topRated.innerHTML += movieElToInject_top_rated
        }
    })
    .catch(err => console.error(err));
// fetch film les meiux note

// fetch film les derniere sortie
let nowPlaying = document.querySelector(".last-film-div")
const url_now_playing = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options_now_playing = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWVhZDNjMWE2Y2U5MDM0MDg3MmY4NTc5ZDhkMjBmYSIsIm5iZiI6MTczNDM1ODE5OS44MTksInN1YiI6IjY3NjAzNGI3YWU4MWEzZTQzNDc4MjFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpKgKRnf77R10Ve1ewdZryJ8cxYcyBF3OPfWvh0dxxw'
    }
};

fetch(url_now_playing, options_now_playing)
    .then(res => res.json())
    .then(dataMovies => {
        for(i=0;i<5;i++){
            let title = dataMovies.results[i].original_title
            let rate = dataMovies.results[i].vote_average
            let poster = dataMovies.results[i].poster_path
            console.log(dataMovies.results[i]);
            let movieElToInject_now_playing = `<div id="${dataMovies.results[i].id}" class="card-film">
                    <img src="https://image.tmdb.org/t/p/w500/${poster}" alt="poster de ${title}">
                    <div class="bottom-card-film">
                    <p>${title}</p>
                    <span>${rate}</span>
                    </div>
                </div>`
                
                nowPlaying.innerHTML += movieElToInject_now_playing
        }
    })
    .catch(err => console.error(err));
// fetch film les derniere sortie



// fontion qui permet de recuperer les film part genre
let genre = 0
let callApiGenre = ()=>{
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWVhZDNjMWE2Y2U5MDM0MDg3MmY4NTc5ZDhkMjBmYSIsIm5iZiI6MTczNDM1ODE5OS44MTksInN1YiI6IjY3NjAzNGI3YWU4MWEzZTQzNDc4MjFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpKgKRnf77R10Ve1ewdZryJ8cxYcyBF3OPfWvh0dxxw'
        }
};
let sectionCatergorie = document.querySelector(".film-categorie-div")
fetch(url, options)
    .then(res => res.json())
    .then(dataMovies => {
        sectionCatergorie.innerHTML = ""
        for(i=0;i<15;i++){
            let title = dataMovies.results[i].original_title
            let rate = dataMovies.results[i].vote_average
            let poster = dataMovies.results[i].poster_path
            console.log(dataMovies.results[i]);
            let movieElToInject_sectionCatergorie = 
                `<div id="${dataMovies.results[i].id}"class="card-film">
                    <img src="https://image.tmdb.org/t/p/w500/${poster}" alt="poster de ${title}">
                    <div class="bottom-card-film">
                    <p>${title}</p>
                    <span>${rate}</span>
                    </div>
                </div>`
                sectionCatergorie.innerHTML += movieElToInject_sectionCatergorie
        }
    })
    .catch(err => console.error(err));
}
// fontion qui permet de recuperer les film part genre


// declaration de variable pour les bouton dans le menu categorie
let comedie_button = document.querySelector("#comedie")
let action_button = document.querySelector("#action")
let horreur_button = document.querySelector("#horreur")
let science_fiction_button = document.querySelector("#science_fiction")
// declaration de variable pour les bouton dans le menu categorie

// declaration de variable pour les section de chaque genre de film
let sectionFilmPopular = document.querySelector(".film-populaire")
let sectionLastFilm = document.querySelector(".last-film")
let sectionBestRated = document.querySelector(".best-rated")
// declaration de variable pour les section de chaque genre de film

// partie pour gerer l'affichage des section des film
let buttonHome = document.querySelector(".home-button")
let h2_Categorie = document.querySelector(".film-categorie h2")
let sectionFilmType_h2 = document.querySelector("#list-film-type h2")



// button populaire dans le menu deroulant et dans la page d'acceuil
let popular_button = document.querySelector(".film-populaire h2")
popular_button.addEventListener("click",()=>{
    section_list_type.style.display = "flex"
        film_categorie.style.display = "none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmType_h2.innerHTML = "Populaire"
        type = "popular"
        callListByType()
})

popular_a_in_menu.addEventListener("click",()=>{
    section_list_type.style.display = "flex"
        film_categorie.style.display = "none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmType_h2.innerHTML = "Populaire"
        type = "popular"
        callListByType()
    })
    // button populaire dans le menu deroulant et dans la page d'acceuil
    
    
    // button les mieux notés dans le menu deroulant et dans la page d'acceuil
    let top_rated_button = document.querySelector(".best-rated h2")
    top_rated_button.addEventListener("click",()=>{
        section_list_type.style.display = "flex"
        film_categorie.style.display = "none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmType_h2.innerHTML = "Les mieux notés"
        type = "top_rated"
        callListByType()
})
top_rated_a_in_menu.addEventListener("click",()=>{
    section_list_type.style.display = "flex"
    film_categorie.style.display = "none"
    sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmType_h2.innerHTML = "Les mieux notés"
        type = "top_rated"
        callListByType()
    })
    // button les mieux notés dans le menu deroulant et dans la page d'acceuil
    
    
    // button dernieres sorties dans le menu deroulant et dans la page d'acceuil
    let last_film_button = document.querySelector(".last-film h2")
    last_film_button.addEventListener("click",()=>{
        section_list_type.style.display = "flex"
        film_categorie.style.display = "none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmType_h2.innerHTML = "Les dernières sorties"
        type = "now_playing"
        callListByType()
})
now_film_a_in_menu.addEventListener("click",()=>{
    section_list_type.style.display = "flex"
    film_categorie.style.display = "none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmType_h2.innerHTML = "Les dernières sorties"
        type = "now_playing"
        callListByType()
    })
    // button dernieres sorties dans le menu deroulant et dans la page d'acceuil

    // button comedie dans le menu deroulant
    comedie_button.addEventListener("click", ()=> {
        h2_Categorie.innerHTML = "Comédie"
        section_list_type.style.display = "none"
        film_categorie.style.display = "flex"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        section_film_detail.style.display="none"
        genre = 35;
        callApiGenre()
    })
    // button action dans le menu deroulant

// button action dans le menu deroulant
    action_button.addEventListener("click", ()=> {
        h2_Categorie.innerHTML = "Action"
        film_categorie.style.display = "flex"
        section_list_type.style.display = "none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        section_film_detail.style.display="none"
        genre = 28;
        callApiGenre()
    })
// button action dans le menu deroulant

// button science fiction dans le menu deroulant
    science_fiction_button.addEventListener("click", ()=> {
        h2_Categorie.innerHTML = "Science fiction"
        film_categorie.style.display = "flex"
        section_list_type.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        genre = 14;
        callApiGenre()
    })
// button science fiction dans le menu deroulant

// button horreur dans le menu deroulant
    horreur_button.addEventListener("click", ()=> {
        h2_Categorie.innerHTML = "Horreur"
        film_categorie.style.display = "flex"
        section_list_type.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        genre = 27;
        callApiGenre()
    })
// button horreur dans le menu deroulant

// button home dans la nav
    buttonHome.addEventListener("click", ()=> {
        section_list_type.style.display = "none"
        film_categorie.style.display = "none"
        section_film_detail.style.display="none"
        sectionFilmPopular.style.display = "flex"
        sectionBestRated.style.display = "flex"
        sectionLastFilm.style.display = "flex"
    })
// button home dans la nav
// partie pour gerer l'affichage des section des film


// fontion qui permet de recuperer les details d'un film selectionné 
    let filmDetail = (id = 0)=>{
        const url_film_detail = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos`;
        const options_film_detail = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWVhZDNjMWE2Y2U5MDM0MDg3MmY4NTc5ZDhkMjBmYSIsIm5iZiI6MTczNDM1ODE5OS44MTksInN1YiI6IjY3NjAzNGI3YWU4MWEzZTQzNDc4MjFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpKgKRnf77R10Ve1ewdZryJ8cxYcyBF3OPfWvh0dxxw'
            }
    };
    let filmPage = document.querySelector(".film-detail-div")
    filmPage.innerHTML=""
    fetch(url_film_detail, options_film_detail)
        .then(res => res.json())
        .then(dataMovies => {
            let video;
            dataMovies.videos.results.forEach((video_d)=>{
                console.log(video_d);
                // console.log(video_d);
                if(video_d.type==="Trailer"){
                    video = video_d.key
                    
                }
            })
                let title = dataMovies.original_title
                let releaseDate = dataMovies.release_date
                let theOverview = dataMovies.overview
                let rate = dataMovies.vote_average
                let voteCount = dataMovies.vote_count
                let poster = dataMovies.poster_path
                let movieElToInject_film_detail = 
                `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video}?si=pAHfkyHchWwVpsn6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h2>${title}</h2>
                <div class="film-detail-img">
                    <img src="https://image.tmdb.org/t/p/w500/${poster}" alt="poster de ${title}">
                </div>
                <div class="detail">
                    <p><span>Titre:</span> <span>${title}</span></p>
                    <p><span>Date de sortie:</span> <span>${releaseDate}</span></p>
                    <p><span>Nombre de votes:</span> <span>${voteCount}</span></p>
                    <p><span>Note:</span> <span>${rate}</span></p>
                </div>
                <div class="synopsis">
                    <p>Synopsis: ${theOverview}</p>
                </div>`
                    filmPage.innerHTML += movieElToInject_film_detail
        })
        .catch(err => console.error(err));
    }
// fontion qui permet de recuperer les details d'un film selectionné 

// event qui fait fontionner la fontion qui permet de recuperer les details d'un film selectionné 
let card_click = document.querySelector(".card-film")
body.addEventListener("click",(e)=>{
    let target = e.target
    if(target.closest(".card-film")){
        section_film_detail.style.display="flex"
        section_list_type.style.display = "none"
        film_categorie.style.display = "none"
        sectionFilmPopular.style.display = "none"
        sectionBestRated.style.display = "none"
        sectionLastFilm.style.display = "none"
        let id = target.closest(".card-film").id
        filmDetail(id)
    }
})
// event qui fait fontionner la fontion qui permet de recuperer les details d'un film selectionné 
