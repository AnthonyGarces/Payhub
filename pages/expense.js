import Layout from '../components/layout/layoutNav';
import NewExpense from '../components/expense/newExpense';
import OldExpense from  '../components/expense/oldExpenses';

export default function expense() {
    return(
        <Layout>
            <NewExpense />
            <OldExpense />
        </Layout>
    )
}