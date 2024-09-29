function toUperCase(a: number | string): string {
    if (typeof a === 'string') {
        return a.toUpperCase();
    } else {
        return `${a}`.toUpperCase();
    }
}

// ------------------------------------------------

interface Movie {
    duration: number;
}

export function playMovie(movie?: Movie): number | undefined {
    // 1
    // if (movie) {
    //     return movie.duration;
    // }

    // 2
    // if (!movie) {
    //     return;
    // }

    // return movie.duration;

    // 3
    // return movie?.duration;

    // 4
    return movie ? movie.duration : undefined;
}

// ------------------------------------------------

function calculate(a: number | string, b: number | boolean): number | undefined {
    if (a === b) {
        return a + b;
    }

    return undefined;
}

// ------------------------------------------------

type Dog = {
    bark: () => void;
}

type Cat = {
    meow: () => void;
}

type Wolf = {
    run: () => void;
    bark: () => void;
}

function makeSomeNoise(pet: Dog | Cat | Wolf) {
    if ('bark' in pet) {
        pet.bark();

        // pet.run();
    }

    if ('meow' in pet) {
        pet.meow();
    }
}

// ------------------------------------------------

function log(date: Date | string) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(date);
    }
}

// ------------------------------------------------

type Film = {
    title: string;
    duration: number;
}

type Responce = {
    status: string;
    result: unknown;
}

function isFilm(entity: unknown): entity is Film {
    const film: Film = entity as Film;

    return (
        typeof film === 'object' &&
        typeof film.title === 'string' &&
        typeof film.duration === 'number'
    );
}

function getFilm(): Film | undefined {
    const {result}: Responce = {
        status: 'Success',
        result: {title: '', duration: 123},
    };

    if (isFilm(result)) {
        return result;
    }

    return undefined;
}

// ------------------------------------------------

type TvSeries = {
    __typename: 'TvSeries';
    seasonCount: number;
}

type TvShow = {
    __typename: 'TvShow';
    episodeCount: number;
}

type Catchup = {
    __typename: 'Catchup';
    endDate: number;
}

type Collection = {
    title: string;
    items: (TvSeries | TvShow | Catchup)[]
}

function play(collection: Collection): (number | undefined)[] {
    return collection.items.map(item => {
        if (item.__typename === 'TvShow') {
            return item.episodeCount;
        }

        if (item.__typename === 'Catchup') {
            return item.endDate;
        }

        if (item.__typename === 'TvSeries') {
            return item.seasonCount;
        }

        return undefined;
    })
}

// ------------------------------------

// satisfies

// const test: {[key: string]: string | number} = {
const test: Record<> = {
    a: 123,
    b: '',
    c: 'Str',
}

// test.a

const test = {
    a: 123,
    b: '',
    c: {d: 'str'},
} satisfies {a: string | number, b: string | number, c: {d: string}}

test.c.d

// ------------------------------------

type PickFilm = Pick<Film, 'duration'>;
type OmitFilm = Omit<Film, 'title'>;

type ExludeExaple = Exclude<'a' | 'b' | 'c' , 'a'>

type PlayResult = ReturnType<typeof play>;
type PlayParameters = Parameters<typeof play>;
