const profile = function() {
    
    //put the below in once the dumb hooks issue is resolved
    const name = localStorage.getItem('name');

    return(
        <div className="container">
            <h2>Welcome {name}</h2>
            <br />
            <h5>Here is where I would put some company news if this was a real company</h5>
            <br />
            <h5>Reminders</h5>
            <ul>
                <li>Please remember to submit time cards by the end of week, midnight or your payouts may be delayed</li>
                <li>All expense reports and PTO submissions take a minimum of 3 business days before approval, barring emergencies</li>
                <li>Take care of yourself! You're a valuable employee!</li>
            </ul>
        
        <style jsx>{`
        div {
            height: 200px;
            width: 100%;
            padding-left: 30px;
            padding-top: 30px;
            padding-bottom: 890px;
            margin-left: 110px;
            margin-top: 80px;
            background-color: #e8f3d4
        }
        `}</style>
        </div>
    )
};

export default profile