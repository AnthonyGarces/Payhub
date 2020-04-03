const headerNav = () => (
    <div className='ui fluid container'>
        <h1 className='ui header'>Payhub</h1>
        <h3 className='ui left floated header' id="subhead">Keeping employees connected</h3>
        <h3 className='ui right floated header' id="logout">Logout</h3>
            
    <style jsx>{`
    div {
        background-color: #D9BF77;
        position: fixed;
        top: 0px;
    }
    h1 {
        position: relative;
        left: 140px;
    }
    #subhead {
        position: relative;
        left: 140px;
    }
    #logout {
        position: relative;
        top: -15px
    }
    `}</style>
    </div>
)

export default headerNav;