import Layout from '../components/layout/layoutNav';
import NewPTO from '../components/pto/newPTO';
import OldPTO from '../components/pto/oldPTO'

export default function PTO() {
    return(
        <Layout>
            <NewPTO />
            <OldPTO />
        </Layout>
    )
}