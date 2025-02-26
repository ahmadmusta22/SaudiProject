import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 // Import SASS file

const Categoriess = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Placeholder Category 1',
      description: 'This is a placeholder description for Category 1.',
    },
    {
      id: 2,
      name: 'Placeholder Category 2',
      description: 'This is a placeholder description for Category 2.',
    },
    {
      id: 3,
      name: 'Placeholder 3',
      description: 'This is a placeholder description for Category 3.',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Electric Device Categories</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search categories..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Stacked Categories */}
      <div className="row">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="col-md-4 mb-4" // Adjust column width
            onClick={() => navigate(`/Vendoor/${category.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card shadow-sm h-100">
              <img
                src={`/images/categories/${category.id}.jpg`}
                alt={category.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body p-5 pb-5">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoriess;
