import Link from 'next/link';

const sideNav = function() {
    return(
        <div className='ui sidebar inverted vertical icon menu visible'>
            <Link href="/timeCard">
                <a className='item'>
                    <i className='clock outline icon'></i>
                    Time Cards
                </a>
            </Link>
            <Link href="/PTO">
                <a className='item'>
                    <i className='calendar alternate icon'></i>
                    Paid Time Off
                </a>
            </Link>
            <Link href="/expense">
                <a className='item'>
                    <i className='shopping cart icon'></i>
                    Expenses
                </a>
            </Link>
            <Link href="/citation">
                <a className='item'>
                    <i className='eye icon'></i>
                    Citations
                </a>
            </Link>
        </div>
    )
}

export default sideNav