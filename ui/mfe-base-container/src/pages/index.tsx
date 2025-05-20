import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best products at unbeatable prices!</p>
      </header>
      <main>
        <section style={{ marginBottom: '40px' }}>
          <h2>Featured Products</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
           <Link href="/home">Go to home</Link>
          </div>
        </section>
        <section>
          <h2>Why Shop With Us?</h2>
          <ul>
            <li>Wide range of products</li>
            <li>Affordable prices</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer service</li>
          </ul>
        </section>
      </main>
      <footer style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;