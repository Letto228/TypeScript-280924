// function sum(a: number, b: number): number {
//     return a + b;
// }

// type Film = {
//     title: string;
//     duration: number;
// }

// // interface Responce<Result = unknown> {
// //     isSeccess: boolean;
// //     result: Result;
// // }

// type ResponceStatuses = 'success' | 'error' | 'pending';

// type Responce<Result = unknown, Status = ResponceStatuses> = {
//     isSeccess: boolean;
//     status: Status;
//     result: Result;
// }

// // type FilmResponce = Responce & {
// //     result: Film;
// // }

// // type FilmsResponce = Responce & {
// //     result: Film[];
// // }

// // function getFilm(): FilmResponce {
// //     throw 'getFilm';
// // }

// // function getFilms(): FilmsResponce {
// //     throw 'getFilms';
// // }

// function getFilm(): Responce<Film> {
//     throw 'getFilm';
// }

// function getFilms(): Responce<Film[]> {
//     throw 'getFilms';
// }

// // ----------------------------------------

// function playMovie<Movie>(movie: Movie): Movie {
//     return movie
// }

// playMovie<Film>({title: 'str'});

// interface BaseMovie<Director> {
//     title: string;
//     director: Director;
// }

// interface TvSeries<Episode, Director> extends BaseMovie<Director> {
//     episodes: Episode[];
// }

// type BaseEpisode = {
//     duration: number;
// }

// function polayTvSeries<Episode = BaseEpisode, Movie = TvSeries<Episode, string>>(movie: Movie): Movie {
//     return movie;
// }

// const tvSeries = polayTvSeries<{title: string, count: number}>({
//     episodes: [{title: 'str', count: 123}],
//     title: 'Title',
//     director: 'Director',
// });

// const playEpisode = <Episode>(episode: Episode): Episode => {
//     return episode;
// }

// // ------------------------------------

// function getProperty<Entity extends object, Key extends keyof Entity = keyof Entity>(
//     entity: Entity,
//     key: Key,
// ): Entity[Key] {
//     return entity[key];
// }

// getProperty<Film>({title: 'str', duration: 123}, 'duration');

// // ------------------------------------

// // type EntitySetters<Entity extends object> = {
// //     [Key in (keyof Entity) as `set${Capitalize<Key & string>}`]-?: (value: Entity[Key]) => void;
// // }

// // type EntityGetters<Entity extends object> = {
// //     [Key in (keyof Entity) as `get${Capitalize<Key & string>}`]-?: () => Entity[Key];
// // }

// // type CompletedEntity<Entity extends object> = Entity & EntitySetters<Entity> & EntityGetters<Entity>;

// // class CompletedFilm implements CompletedEntity<Film> {
// //     title: string;
// //     duration: number;
// //     setTitle: (value: string) => void;
// //     setDuration: (value: number) => void;
// //     getTitle: () => string;
// //     getDuration: () => number;
// // }

// // class CompletedTvSeries implements CompletedEntity<TvSeries<BaseEpisode, string>> {
// //     episodes: BaseEpisode[];
// //     title: string;
// //     director: string;
// //     setTitle: (value: string) => void;
// //     setEpisodes: (value: BaseEpisode[]) => void;
// //     setDirector: (value: string) => void;
// //     getTitle: () => string;
// //     getEpisodes: () => BaseEpisode[];
// //     getDirector: () => string;
// // }

// // ------------------------------------------

// type TransformedProperty = 'a' | 'b' | 'c';

// // type EntityFilter<Entity extends object, TransformedProperty extends keyof Entity> = {
// //     [Key in keyof Entity as Uppercase<Key & TransformedProperty & string>]: Entity[Key]
// // }
// type EntityFilter<Entity extends object, TransformedProperty extends keyof Entity> = {
//     [Key in keyof Entity as Key & TransformedProperty]: Entity[Key]
// }

// type FilteredTvSeries = EntityFilter<TvSeries<BaseEpisode, string>, 'director' | 'title'>;
// type Filtered = EntityFilter<{a: string, b: string, s: string, d: string, c: string}, TransformedProperty>;
