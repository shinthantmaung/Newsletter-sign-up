export default function Confirm(props){
    function dismissHandler(){
        props.emailResetter()
        props.submitSetter()
    }
    return(
        <div className="confirm-container">
            <div className="confirm-text-container">
                <img src={process.env.PUBLIC_URL + "/images/icon-success.svg"}  id="confirm-element" className="confirm-img" alt="" />
                <h1 className="title" id="confirm-element">Thanks for subscribing!</h1>
                <p id="confirm-element">A confirmation email has been sent to <span className="email-label">{props.email}</span>.Please open it and click the button inside to confirm your subscription</p>
            </div>
            <button className="button" id="confirm-button" onClick={dismissHandler}>Dismiss message</button>
        </div>
    )
}