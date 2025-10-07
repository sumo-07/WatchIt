import { Form } from "react-router-dom";

export const contactData = async ({request})=>{
    try{
        const res= await request.formData();
        const data= Object.fromEntries(res);
        console.log(data);
        
    }catch(error){
        console.log(error);
    }
};


export const Contact = () => {
    return (
        <>
            <div className="maincard-container">
                <div className="card-container">
                    <h1>Contact Form</h1>
                    <Form method= "POST" action="/contact" >
                        <label htmlFor="userName">UserName</label>
                        <input type="text" id="userName" name="userName" required autoComplete="off"   />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required autoComplete="off"   />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" required autoComplete="off" rows="6"   ></textarea>

                        <button type="submit">Send Message</button>
                    </Form>
                </div>
            </div>
        </>
    );
};
