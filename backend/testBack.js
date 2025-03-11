import { allsortedMovieDate, allsortedActiviteDate, allSortedInviteName, oneIDmovie, oneIDactivite, oneIDinvite, activiteByInviteID, activiteByInviteName, addNewMovie } from './backend.mjs' ;

// try {
//     const sortedMovieDateRecord = await allsortedMovieDate() ;
//     console.table(sortedMovieDateRecord) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try {
//     const sortedActiviteDateRecord = await allsortedActiviteDate() ;
//     console.table(sortedActiviteDateRecord) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try {
//         const sortedInviteNameRecord = await allSortedInviteName() ;
//         console.table(sortedInviteNameRecord) ;
//         } catch (e) {
//         console.error(e) ;
//         };

// try {
//     const IDmovieRecord = await oneIDmovie('8bjw549k95eo3e6') ;
//     console.table(IDmovieRecord) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try {
//     const IDactiviteRecord = await oneIDactivite('44b5jxy8d2jcihq') ;
//     console.table(IDactiviteRecord) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try {
// const IDinviteRecord = await oneIDinvite('m0gw368f6sfwz77') ;
// console.table(IDinviteRecord) ;
// } catch (e) {
// console.error(e) ;
// }

// try {
//     const activiteByInviteRecord = await activiteByInviteID('8872z419r7u7fnj') ;
//     console.table(activiteByInviteRecord) ;
//     } catch (e) {
//     console.error(e) ;
//     };

// try {
//         const activiteByInviteNameRecord = await activiteByInviteName("Martin");
//         console.table(activiteByInviteNameRecord);
//     } catch (e) {
//         console.error(e);
//     }  

try {
    const newMovie = {
        "titre_film": "Test de création d'un film",
        "genre": "fiction",
        "bande_annonce": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "date_projection": "2025-07-07 12:00:00",
    };

    await addNewMovie(newMovie);
} catch (e) {
    console.error(e);
}