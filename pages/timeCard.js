import Layout from '../components/layoutNav';
import NewTimeCard from '../components/newTimeCard';
import OldTimeCards from '../components/oldTimeCards';

export default function timeCard() {
    return(
        <Layout>
            <NewTimeCard />
            <OldTimeCards />
        </Layout>
    )
}