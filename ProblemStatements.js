import React, { useEffect, useState } from 'react';
import api from '../api'; // Make sure the path is correct

const ProblemStatements = () => {
    const [problemStatements, setProblemStatements] = useState([]);

    useEffect(() => {
        const fetchProblemStatements = async () => {
            try {
                const response = await api.get('/problemStatements');
                setProblemStatements(response.data);
            } catch (error) {
                console.error('Error fetching problem statements', error);
            }
        };

        fetchProblemStatements();
    }, []);

    return (
        <div>
            <h2>Problem Statements</h2>
            <ul>
                {problemStatements.map((ps) => (
                    <li key={ps._id}>{ps.title} - {ps.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProblemStatements;
