import Layout from '../components/layout/layoutNav';
import NewTimeCard from '../components/timecards/newTimeCard';
import OldTimeCards from '../components/timecards/oldTimeCards';

export default function timeCard() {
    return(
        <Layout>
            <NewTimeCard />
            <OldTimeCards />
        </Layout>
    )
}