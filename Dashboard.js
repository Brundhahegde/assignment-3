import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProblemStatements from './ProblemStatements';
import Report from './Report';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    <ProblemStatements />
                </Col>
                <Col md={4}>
                    <Report />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
