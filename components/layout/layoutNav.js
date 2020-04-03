import HeaderNav from './headerNav';
import FooterNav from './footerNav';
import Head from 'next/head';
import SideNav from './sideNav';

export default function Layout(props) {
   return (
    <div>
        <Head>
          <title>Payhub</title>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
          <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
        </Head>
        <SideNav />
        <div className='pusher'>
            <HeaderNav />
            {props.children}
            <FooterNav />
        </div>
        <style jsx>{`
        body {
            background-color: #e8f3d4;
        }
        `}</style>
    </div>
   )
};

