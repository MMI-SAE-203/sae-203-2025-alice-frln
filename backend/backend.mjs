import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export { pb };

export async function allsortedMovieDate () {
    const sortedMovieDateRecord = await pb.collection('Films').getFullList({ sort : 'date_projection', }) ;
    return sortedMovieDateRecord ;
    }

export async function allsortedActiviteDate () {
    const sortedActiviteDateRecord = await pb.collection('activites').getFullList({ sort : 'date', }) ;
    return sortedActiviteDateRecord ;
    }

export async function allSortedInviteName () {
    const sortedInviteNameRecord = await pb.collection('invites').getFullList({ sort : 'nom', }) ;
    return sortedInviteNameRecord ;
    }

// export async function oneIDmovie(id) {
//     const IDmovieRecord = await pb.collection('Films').getOne(id) ;
//     return IDmovieRecord ;
//     }

export async function oneIDmovie(id) {
    try {
        const movie = await pb.collection('Films').getOne(id);

        return {
            ...movie,
            affiche: movie.affiche 
                ? pb.files.getUrl(movie, movie.affiche) 
                : null,
        };
    } catch (error) {
        console.error("Erreur lors de la récupération du film :", error);
        return null;
    }
}
    
export async function oneIDactivite(id) {
    const IDactiviteRecord = await pb.collection('activites').getOne(id) ;
    return IDactiviteRecord ;
    }
    
export async function oneIDinvite(id) {
    const IDinviteRecord = await pb.collection('invites').getOne(id) ;
    return IDinviteRecord ;
    }

export async function activiteByInviteID (IDinvite) {
    const activiteByInviteRecord = await pb.collection('activites').getFullList({ filter : `anime_par = '${IDinvite}'`, }) ;
    return activiteByInviteRecord ;
    }

export async function activiteByInviteName(NameInvite) {
    const activiteByInviteNameRecord = await pb.collection('activites').getFullList({filter: `anime_par.nom = '${NameInvite}'`,});
    
    return activiteByInviteNameRecord;
    }

export async function addNewMovie(newMovie) {
    await pb.collection('Films').create(newMovie) ;
}

export async function addNewActivite(newActivite) {
    await pb.collection('activites').create(newActivite) ;
}

export async function updateMovieById(idMovie, data) {
    const updatedRecord = await pb.collection('Films').update(idMovie, data);
    return updatedRecord;
}

// export async function getMovies() {
//     try {
//         let data = await pb.collection('Films').getFullList({
//             sort: 'date_projection',
//         });

//         return data;
//     } catch (error) {
//         console.log('Une erreur est survenue en lisant la liste des films', error);
//         return null;
//     }
// }

export async function getMovies() {
    try {
        let movies = await pb.collection('Films').getFullList({
            sort: 'date_projection',
        });

        const updatedMovies = movies.map((movie) => ({
            ...movie,
            affiche: movie.affiche 
                ? pb.files.getUrl(movie, movie.affiche) 
                : null,
        }));

        return updatedMovies;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des films', error);
        return null;
    }
}