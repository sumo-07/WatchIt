import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { Card } from "../components/layout/UI/Card";
import { useEffect, useRef, useState } from "react";
import { getMoviesData } from "../api/GetApiData";

export const Movie = () => {

    // const [query, setQuery]= useState("");
    const query= useRef();
    // const navigate= useNavigate();
    const initialData= useLoaderData();
    const [moviesData, setMoviesData]= useState(initialData);
    console.log("fetching= ",moviesData); // yeh hr key press pe re render hora hai. jisse yeh baar baar console pr print hora hai
    // console.log("query= ",query.current?.value); // return empty string if the user have not typed anything

    const [loading, setLoading]= useState(false);
    
    const handleSubmit =  async(e)=>{
        e.preventDefault();
        const search= query.current.value.trim() || "Avengers";
        setLoading(true);
        const data= await getMoviesData({request: {url: `http://dummy?q=${search}` }});
        console.log("API called for search:", query.current?.value);

        setMoviesData(data);
        setLoading(false);

        
    };

    
    


    
    return (
        <>
            <div className="search-container">
                <Form onSubmit={handleSubmit} className="search-form">
                    <input type="text"  ref={query} placeholder="Search Movies..."  className="search-input" />
                    <button type="submit" className="search-button">Search</button> 
                </Form>
            </div>

            {loading && <div className="loader"></div>}

            <ul className="movie-list">
                {!loading && moviesData.map((currMovie) => {
                    { return <Card key={currMovie.imdbID} currMovie={currMovie} query={query.current?.value}/> }
                })} 
            </ul>
        </>
    );
};