export const getMoviesData = async ({request}) => {
    const url= new URL(request.url);
    // console.log("url= ", url);
    const query= (url.searchParams.get("q") || "Avengers").toLowerCase();
    try {
        // const res= await fetch(`http://www.omdbapi.com/?i=tt0145487&apikey=${import.meta.env.VITE_API_KEY}`)

        const res = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`);


        const data = await res.json();
        
        return data;
    } catch (error) {
        console.log(error);
    }


};