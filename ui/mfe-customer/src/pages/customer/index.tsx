import { GetServerSideProps } from 'next';
import Link from 'next/link';
import styles from './customer.module.css';

interface CustomerProps {
    customer: {
        id: number;
        name: string;
        email: string;
    };
}

const CustomerPage = ({ customer }: CustomerProps) => {
    return (
        <div>
            <h1>Customer Details</h1>
            <p><strong>ID:</strong> {customer.id}</p>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <div style={{ marginTop: '20px' }}>

                <h2>Customer Actions</h2>
                <button onClick={() => alert(`Editing customer ${customer.id}`)}>Edit</button>
                <button onClick={() => alert(`Deleting customer ${customer.id}`)}>Delete</button>
            </div>
           
            <Link href="/home">
                <button className={styles.backButton}>Back to Home</button>
            </Link>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Simulate fetching customer data from an API or database
    const customer = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
    };

    return {
        props: {
            customer,
        },
    };
};

export default CustomerPage;