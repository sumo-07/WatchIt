export const getMovieDetails= async({params, request})=>{

    // console.log(params);
    const id= params.movieId;
    // console.log("id= ", id);
    // const url= new URL(request.url);
    // console.log("url= ",url);
    // const query= (url.searchParams.get("q") || "Avengers").toLowerCase();
    // console.log("query is ",query);
    try{
        // const res= await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`);

        const res= await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);

        const data= await res.json();
        // console.log("newData= ",data);

        if(data.Response === "False") {
            return null;
        }
        return data;

        // const rawData= data.description.find((currEl)=> {
        //     if(currEl.imdbID===id){
        //         return currEl;
        //     }
        // });
        // console.log("rawData= ", rawData);
        // return rawData;
    }catch(error){
        console.log(error);
        return null;
    }

    
};