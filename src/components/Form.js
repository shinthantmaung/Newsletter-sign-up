import React from "react"

export default function Form(props){
    const [errorDetected, setErrorDetected] = React.useState(false)

    function validateEmail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
    }
    
    function submitter(e){
        e.preventDefault()

        if(!validateEmail(props.email)){
            setErrorDetected(true)
            return
        }
        props.submitSetter()
    }

    return(
        <div className="form-container">
            <div className="left-container">
                <h1 className="title" id="mobile-element">Stay updated!</h1>
                <p id="mobile-element">Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="my-list" id="mobile-element">
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <form action="" className="form">
                    <div className="label-container">
                        <label htmlFor="" className="email-label">Email address</label>
                        {errorDetected && <p className="error-label">Valid email required</p>}
                    </div>
                    <input 
                     type="email"
                     value={props.email}
                     onChange={props.emailSetter}
                     className= {errorDetected ? "error-box" :"email-box" }
                     placeholder="email@company.com"
                    />
                    <button className="button" onClick={submitter}>Subscribe to monthly newsletter</button>
                </form>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/illustration-sign-up-desktop.svg'} alt="" className="right-image"/>
        </div>
    )
}