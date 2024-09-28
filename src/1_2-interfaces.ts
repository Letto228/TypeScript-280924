// let film: {title: string; duration: number} = {title: '', duration: 123};

// interface Film {
//     title: string;
//     duration?: number;
//     director: string;
//     // Актуально для сериалов
//     seasonCount?: number;
//     // Актуально для всех, но опционально
//     awards?: string[];
// }

interface Movie {
    title: string;
    director: string;
    awards?: string[];
}

interface Film extends Movie {
    duration: number;
}

interface TvSeries extends Movie {
    seasonCount: number;
}

let film: Film = {title: '', duration: 123, director: ''};
let newFilm: Film = {title: 'new', duration: 321, director: ''};