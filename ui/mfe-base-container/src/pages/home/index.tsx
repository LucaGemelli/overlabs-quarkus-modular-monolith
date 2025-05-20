import Link from 'next/link';
import { GetServerSideProps } from 'next';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/products/list">Products List</Link>
                    </li>
                    <li>
                        <Link href="/customer">Customers</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    // You can fetch data here if needed
    return {
        props: {}, // Pass any props to the page component
    };
};

export default HomePage;