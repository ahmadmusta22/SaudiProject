import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteMalfunction = () => {
    const [malfunctions, setMalfunctions] = useState([]);
    const [malfunctionId, setMalfunctionId] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch malfunctions when the component loads
    useEffect(() => {
        const fetchMalfunctions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/malfunctions');
                setMalfunctions(response.data);
            } catch (error) {
                console.error('Error fetching malfunctions:', error);
                setMessage('Failed to fetch malfunctions.');
            }
        };

        fetchMalfunctions();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // Ensure malfunctionId is not empty
        if (!malfunctionId) {
            setMessage('Please enter a valid malfunction ID.');
            setLoading(false);
            return;
        }

        try {
            // Attempt to delete the malfunction
            await axios.delete(`http://localhost:8080/api/malfunctions/${malfunctionId}`);
            setMessage('Malfunction deleted successfully!');
            setMalfunctionId('');

            // Refresh malfunctions list after deletion
            const response = await axios.get('http://localhost:8080/api/malfunctions');
            setMalfunctions(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error deleting malfunction:', error);

            // Check for specific error and handle accordingly
            if (error.response) {
                if (error.response.status === 404) {
                    setMessage('Malfunction not found!');
                } else if (error.response.status === 500) {
                    setMessage('Server error, please try again later.');
                } else {
                    setMessage('An error occurred while deleting the malfunction.');
                }
            } else {
                setMessage('Network error, please check your connection.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow-lg w-50">
                <h2 className="card-title text-center mb-4">Delete Malfunction</h2>
                {message && (
                    <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="malfunctionId" className="form-label">
                            Malfunction ID:
                        </label>
                        <input
                            type="text"
                            id="malfunctionId"
                            value={malfunctionId}
                            onChange={(e) => setMalfunctionId(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`btn btn-danger w-100 ${loading ? 'disabled' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Deleting...' : 'Delete Malfunction'}
                    </button>
                </form>

                <h3 className="mt-4 mb-3">Malfunctions</h3>
                <ul className="list-group">
                    {malfunctions.length > 0 ? (
                        malfunctions.map((malfunction) => (
                            <li key={malfunction.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{malfunction.id}: {malfunction.description}</span>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No malfunctions available.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DeleteMalfunction;
