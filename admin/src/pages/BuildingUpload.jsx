import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BuildingUpload.css';

const BuildingUpload = () => {
  const [apartman, setApartman] = useState('');
  const [gorseller, setGorseller] = useState([]);
  const [buildings, setBuildings] = useState([]);

  const fetchBuildings = async () => {
    const res = await axios.get('http://localhost:3001/api/buildings');
    setBuildings(res.data);
  };

  useEffect(() => {
    fetchBuildings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('apartman', apartman);
    for (let i = 0; i < gorseller.length; i++) {
      formData.append('gorseller', gorseller[i]);
    }

    await axios.post('http://localhost:3001/api/buildings/upload', formData);
    setApartman('');
    setGorseller([]);
    fetchBuildings();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/buildings/${id}`);
    fetchBuildings();
  };

  return (
    <div className="building-upload">
      <h2>Proje Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Apartman Adı"
          value={apartman}
          onChange={(e) => setApartman(e.target.value)}
          required
        />
        <input
          type="file"
          multiple
          onChange={(e) => setGorseller(e.target.files)}
        />
        <button type="submit">Ekle</button>
      </form>

      <h2>Projeler</h2>
      <ul>
        {buildings.map((b) => (
          <li key={b._id}>
            {b.apartman}
            <button onClick={() => handleDelete(b._id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuildingUpload;

