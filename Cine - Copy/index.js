var films = [];

function addFilm(e, form) {
    e.preventDefault();

    // obtengo todos los datos del formulario
    var filmName = form.filmName.value;
    var filmYear = Number(form.filmYear.value);
    var filmGenre = form.filmGenre.value;
    var filmVoters = Number(form.filmVoters.value);
    var filmTotalVotes = Number(form.filmTotalVotes.value);

    // me fijo si la pelicula ya esta cargada
    var existingFilm = getFilm(filmName);

    // si esta cargada?
    if (existingFilm != undefined) {
        alert("La película ya está en nuestra base de datos");

        // si no esta cargada
    } else {
        var film = {
            name: filmName,
            year: filmYear,
            genre: filmGenre,
            voters: filmVoters,
            totalVotes: filmTotalVotes,
            raiting: getRaiting(filmVoters, filmTotalVotes)
        };

        // agrego la pelicula al array
        films.push(film);
    }
}

function getRaiting(voters, totalVotes) {
    return (totalVotes / voters).toFixed(2);
}

function getFilm(filmName) {
    return films.find(function (film) {
        return film.name.toLowerCase() == filmName.toLowerCase();
    });
}