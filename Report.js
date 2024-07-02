import React, { useEffect, useState } from 'react';
import api from '../api';
import { Bar } from 'react-chartjs-2';

const Report = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('/problemStatements');
            setData(result.data);
        };
        fetchData();
    }, []);

    const chartData = {
        labels: data.map(item => item.title),
        datasets: [{
            label: 'Problem Statements',
            data: data.map(item => item.status === 'open' ? 1 : 0),
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
    };

    return (
        <div>
            <h2>Problem Statements Report</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default Report;
