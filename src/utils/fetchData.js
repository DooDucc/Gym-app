export const fetchData = async (url, options) => {
    const res = await fetch(url, options);

    const data = await res.json();

    return data;
};

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '87e73812d6msh44c28339374eb4bp1a11edjsn6acb94a3fe4a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};

export const ytbOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
        'X-RapidAPI-Key': '87e73812d6msh44c28339374eb4bp1a11edjsn6acb94a3fe4a',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
};
