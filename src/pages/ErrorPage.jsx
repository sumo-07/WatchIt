import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage= ()=>{
    const error= useRouteError();
    const navigate= useNavigate(); // issse jjis page ke baad  hmm error page pe gye hai, woh wps issi page pe send kr dega user ko
    const handleGoBack= ()=>{
        // navigate("/"); // isse hmm kisi bhi page pr jaaa skte hai. like now we are going to home page
        navigate(-1);
    };

    console.log(error);
    if(error.status === 404){

        return(
            <section className="error-section">
                <div className="error-text">
                    <figure>
                        <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299960.gif" alt="404 page" />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">. The page you were looking for could not be found</p>

                        <p className="p-b">... Back to previous page</p>
                    </div>
                    {/* <NavLink to="/" className="btn">
                        Go back to Home page
                    </NavLink> */}
                    <button className="btn" onClick={handleGoBack}>
                        GO Back
                    </button>
                </div>
            </section>
        );
    } 
    return <h1>The page you are looking does not exist</h1>
};