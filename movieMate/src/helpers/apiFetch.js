const enterPoint = 'https://api.themoviedb.org/3';
const keyAPI = 'f24a0fd18f52218851075901c5a108a0';
//https://api.themoviedb.org/3/search/movie?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&query=Hulk

export const getUrlByInput = (query) => {
    if (query !== '') {
        return `${enterPoint}/search/movie?api_key=${
            keyAPI
        }&language=en-US&query=${query}&page=1&include_adult=false`;
    }
};

// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1

export function categoriesFilmURL () {
    const popular = 'popular';
    const topRated = 'top_rated';
    const upcoming = 'upcoming';
    const getUrl = (categories) =>
        `${enterPoint}/movie/${categories}?api_key=${
            keyAPI
        }&language=en-US&page=1`;

    return {
        pop:   getUrl(popular),
        top:   getUrl(topRated),
        upCom: getUrl(upcoming)
    };
}

export const getQueryPromise = (url) =>
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`error while fetching, ${response.statusText}`);
        })
        .catch((err) => console.log(err));
