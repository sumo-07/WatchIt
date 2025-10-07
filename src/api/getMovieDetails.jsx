export const getMovieDetails= async({params, request})=>{

    // console.log(params);
    const id= params.movieId;
    // console.log("id= ", id);
    const url= new URL(request.url);
    // console.log("url= ",url);
    const query= (url.searchParams.get("q") || "Avengers").toLowerCase();
    // console.log("query is ",query);
    try{
        const res= await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`);
        const data= await res.json();
        // console.log("newData= ",data);
        const rawData= data.description.find((currEl)=> {
            if(currEl["#IMDB_ID"]===id){
                return currEl;
            }
        });
        // console.log("rawData= ", rawData);

        return rawData;
    }catch(error){
        console.log(error);
    }

    
};