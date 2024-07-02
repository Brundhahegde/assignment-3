import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-4">
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content area for logged-in users.</p>
            {/* Add more content here */}
        </Container>
    );
};

export default Home;
