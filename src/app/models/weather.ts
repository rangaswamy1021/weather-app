
export interface WeatherInfo {
    cod?: string;
    count?: number;
    list?: WeatherList[];
    message?: string | number;
}

export interface WeatherList {
    base?: string;
    clouds?: Clouds;
    coord?: Coord;
    dt?: any;
    dt_txt?: any;
    id?: number;
    main?: Main;
    pop?: number;
    visibility?: number;
    name?: string;
    timezone?: number;
    cod?: number;
    rain?: string | null;
    snow?: string | null;
    weather?: Weather[];
    wind?: Wind;
    sys?: Sys;
}

export interface Clouds {
    all?: number;
}

export interface Coord {
    lat?: number;
    lon?: number;
}

export interface Sys {
    country?: string;
    id?: number;
    sunrise?: any;
    sunset?: any;
    type?: number;
}

export interface Wind {
    deg?: number;
    speed?: number;
    gust?: number;
}

export interface Main {
    feels_like?: number;
    humidity?: number;
    pressure?: number;
    temp?: number;
    temp_max?: number;
    temp_min?: number;
    grnd_level?: number;
    temp_kf?: number;
    sea_level?: number;
}

export interface Weather {
    description?: string;
    icon?: string;
    id?: string;
    main?: string;
}
