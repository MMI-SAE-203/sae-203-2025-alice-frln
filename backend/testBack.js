import { allsortedMovieDate, allsortedActiviteDate, allSortedInviteName, oneIDmovie, oneIDactivite, oneIDinvite, activiteByInviteID, activiteByInviteName } from './backend.mjs' ;

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

try {
        const activiteByInviteNameRecord = await activiteByInviteName('Miyazaki');
        console.table(activiteByInviteNameRecord);
    } catch (e) {
        console.error(e);
    }    