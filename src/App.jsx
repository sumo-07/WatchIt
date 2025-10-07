import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import "./App.css"
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./components/layout/UI/MovieDetails";
import { getMovieDetails } from "./api/getMovieDetails";
export const App = () => {

  /// new method

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          //movie ke baad colon ka mtlb yeh hai ki ab jo bhi likhoge woh dynamic ho jayega
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: getMovieDetails,
          
        },
      ],
    },



  ]);


  //router helper function ---> old method
  // const router= createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/movie" element={<Movie />} />
  //     </Route>
  //   )
  // );


  return <RouterProvider router={router} />
}