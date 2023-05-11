export const exerciseOptions = {
    ethod: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'a28f6fa87fmshc9b79b36f623d0fp1685aajsn44eae0743ed0',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    params: {
      id: 'UCE_M8A5yxnLfW0KghEeajjw'
    },
    headers: {
      'X-RapidAPI-Key': 'a28f6fa87fmshc9b79b36f623d0fp1685aajsn44eae0743ed0',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };