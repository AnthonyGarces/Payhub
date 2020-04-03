import Link from 'next/link';

const sideNav = function() {
    return(
        <div className='ui sidebar vertical icon menu visible' id="sidenav">
            <Link href="/home">
                <a className='item'>
                    <i className='building outline icon'></i>
                    Home
                </a>
            </Link>
            <Link href="/timeCard">
                <a className='item'>
                    <i className='clock outline icon'></i>
                    Time Cards
                </a>
            </Link>
            <Link href="/PTO">
                <a className='item'>
                    <i className='calendar alternate outline icon'></i>
                    Paid Time Off
                </a>
            </Link>
            <Link href="/expense">
                <a className='item'>
                    <i className='money bill alternate outline icon'></i>
                    Expenses
                </a>
            </Link>
            <Link href="/team">
                <a className='item'>
                    <i className='id badge outline icon'></i>
                    Team
                </a>
            </Link>
            <Link href="/citation">
                <a className='item'>
                    <i className='flag outline icon'></i>
                    Citations
                </a>
            </Link>

            <style jsx>{`
            #sidenav {
                background-color: #33690e;
                font-weight: bold;
                color: #FFFFFF;
            };

            a {
                color: #FFFFFF;
            }
            `}</style>
        </div>
    )
}

export default sideNav