interface Movie {
    title: string;
    director: string;
    awards?: string[];
    readonly description: string;
}

type PropertyValue = Movie['awards']

type MovieKeys = keyof Movie; // 'title' | 'director' | 'awards'
type MovieKeysCapitalize = Capitalize<keyof Movie>; // 'Title' | 'Director' | 'Awards'

type MovieValues = Movie[MovieKeys];

type MovieCopy = {
    [Propery in MovieKeys]: Movie[Propery];
}

/**
 * const MovieKeys = Object.keys(Movie);
 * 
 * const MovieCopy = MovieKeys.reduce(
 *      (MovieCopyAcc, Propery) => ({...MovieCopyAcc, [Propery]: Movie[Propery]}),
 *      {},
 * )
 */

const size: ('s' | 'm' | 'l')[] = ['s', 'm', 'l'];

type Size = (typeof size)[number];

type SizeMap = {
    [Property in Size]: string;
}

type SizeByMap = SizeMap[keyof SizeMap];

type OptionalMovie = {
    [Key in keyof Movie]?: Movie[Key];
}

// Посмотреть устранение опциональности
type RequiredMovie = {
    [Key in keyof Movie]-?: Movie[Key];
}

type ReadonlyMovie = {
    readonly [Key in keyof Movie]: Movie[Key];
}

type EditableMovie = {
    -readonly [Key in keyof Movie]: Movie[Key];
}

type MovieSetters = {
    [Key in (keyof Movie) as `set${Capitalize<Key>}`]-?: (value: Movie[Key]) => void;
}

type MovieGetters = {
    [Key in (keyof Movie) as `get${Capitalize<Key>}`]-?: () => Movie[Key];
}

type CompletedMovie = Movie & MovieGetters & MovieSetters;

// class MovieClass implements CompletedMovie {
//     title: string;
//     director: string;
//     awards?: string[] | undefined;
//     description: string;
//     getTitle: () => string;
//     getDirector: () => string;
//     getAwards: () => string[] | undefined;
//     getDescription: () => string;
//     setTitle: (value: string) => void;
//     setDirector: (value: string) => void;
//     setAwards: (value: string[] | undefined) => void;
//     setDescription: (value: string) => void;
// }

type Stages =
    | 'play'
    | 'pause'
    | 'end'
    | 'ready'

type StageSwitchers = {
    [Stage in Stages as `switchTo${Capitalize<Stage>}`]: () => Stages;
};

function createStageMachine(): {currentStage: Stages} & StageSwitchers {
    // logic

    return {
        currentStage: 'ready',
        switchToEnd: () => 'end',
        switchToPlay: () => 'play',
        switchToReady: () => 'ready',
        switchToPause: () => 'pause',
    }
}
