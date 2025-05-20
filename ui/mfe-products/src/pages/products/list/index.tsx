import { GetServerSideProps } from 'next';
import Link from 'next/link';
import styles from './list.module.css';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

interface ProductsPageProps {
    products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Product List</h1>
            <div className={styles.productList}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h2 className={styles.productName}>{product.name}</h2>
                        <p className={styles.productPrice}>{product.price}</p>
                    </div>
                ))}
            </div>
            <Link href="/home">
                <button className={styles.backButton}>Back to Home</button>
            </Link>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    // Mock data for products
    const products: Product[] = [
        { id: 1, name: 'Product 1', price: '$10', image: '/images/product1.jpg' },
        { id: 2, name: 'Product 2', price: '$20', image: '/images/product2.jpg' },
        { id: 3, name: 'Product 3', price: '$30', image: '/images/product3.jpg' },
    ];

    return {
        props: {
            products,
        },
    };
};

export default ProductsPage;