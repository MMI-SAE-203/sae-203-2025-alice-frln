import PocketBase from 'pocketbase' ;
const pb = new PocketBase("https://pb-sae-203.alice-frelin.fr:443") ;

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

export async function oneIDmovie(id) {
    try {
        const movie = await pb.collection('Films').getOne(id);

        let embedUrl = null;
        if (movie.bande_annonce) {
            const videoId = movie.bande_annonce.split('v=')[1]?.split('&')[0];
            if (videoId) {
                embedUrl = `https://www.youtube.com/embed/${videoId}`;
            }
        }

        return {
            ...movie,
            affiche: movie.affiche 
                ? pb.files.getUrl(movie, movie.affiche) 
                : null,
            annee_sortie: movie.dateDeSortie 
                ? new Date(movie.dateDeSortie).getUTCFullYear()
                : "N/A",
            embedUrl,
        };
    } catch (error) {
        console.error("Erreur lors de la récupération du film :", error);
        return null;
    }
}
    
export async function oneIDactivite(id) {
    try {
        const activite = await pb.collection('activites').getOne(id, { expand: 'anime_par' });

        return {
            ...activite,
            imageActivite: activite.imageActivite 
                ? pb.files.getUrl(activite, activite.imageActivite) 
                : null,
        };
    } catch (error) {
        console.error("Erreur lors de la récupération de l'activité :", error);
        return null;
    }
}
    
export async function oneIDinvite(id) {
    try {
        const invite = await pb.collection('invites').getOne(id);

        return {
            ...invite,
            photoInvite: invite.photoInvite
                ? pb.files.getUrl(invite, invite.photoInvite) 
                : null,
        };
    } catch (error) {
        console.error("Erreur lors de la récupération de l'invité :", error);
        return null;
    }
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
            annee_sortie: movie.dateDeSortie 
                ? new Date(movie.dateDeSortie).getUTCFullYear()
                : "N/A",
        }));

        return updatedMovies;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des films', error);
        return null;
    }
}


export async function getActivites() {
    try {
        let activites = await pb.collection('activites').getFullList({
            sort: 'date',
        });

        const updatedActivites = activites.map((activite) => ({
            ...activite,
            imageActivite: activite.imageActivite 
                ? pb.files.getUrl(activite, activite.imageActivite) 
                : null,
            dateFormatted: activite.date 
                ? new Date(activite.date).toLocaleDateString('fr-FR', {
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric'
                })
                : "Date inconnue",
            heureFormatted: activite.date 
                ? new Date(activite.date).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
                : "Heure inconnue",
        }));

        return updatedActivites;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des activités', error);
        return null;
    }
}

 
export async function getInvites() {
    try {
        let invites = await pb.collection('invites').getFullList({
            sort: 'nom',
        });

        const updatedInvites = invites.map((invite) => ({
            ...invite,
            photoInvite: invite.photoInvite
                ? pb.files.getUrl(invite, invite.photoInvite) 
                : null,
        }));

        return updatedInvites;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des invités', error);
        return null;
    }
}

export async function allMoviesByInviteId(id) {
    try {
        let movies = await pb.collection('Films').getFullList({
            filter : `presente_par.id= '${id}'`,
            expand : 'presente_par',
        });

        const updatedMoviesID = movies.map((movie) => ({
            ...movie,
            affiche: movie.affiche 
                ? pb.files.getUrl(movie, movie.affiche) 
                : null,
        }));

        return updatedMoviesID;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des films de l invité', error);
        return null;
    }
}

export async function allActivitesByInviteId(id) {
    try {
        let activites = await pb.collection('activites').getFullList({
            filter : `anime_par.id= '${id}'`,
            expand : 'anime_par',
        });

        const updatedActivitesID = activites.map((activite) => ({
            ...activite,
            imageActivite: activite.imageActivite 
                ? pb.files.getUrl(activite, activite.imageActivite) 
                : null,
        }));

        return updatedActivitesID;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des activités de l invité', error);
        return null;
    }
}

export async function filterByGenre(genre) {
    try {
        let filterQuery = genre ? `Genre ~ "${genre}"` : "";

        console.log("Filtrage des films avec le genre :", genre);

        let movies = await pb.collection('Films').getFullList({
            filter: filterQuery,
            sort: 'date_projection',
        });

        console.log("Films récupérés après filtrage :", movies.length);

        const updatedMovies = movies.map((movie) => ({
            ...movie,
            affiche: movie.affiche 
                ? pb.files.getUrl(movie, movie.affiche) 
                : null,
            annee_sortie: movie.dateDeSortie 
                ? new Date(movie.dateDeSortie).getUTCFullYear()
                : "N/A",
        }));

        return updatedMovies;
    } catch (error) {
        console.log('Erreur lors du filtrage des films par genre', error);
        return [];
    }
}
