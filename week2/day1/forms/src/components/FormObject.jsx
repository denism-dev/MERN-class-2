import React, { useState } from 'react';

function FormObject() {
  const [application, setApplication] = useState({
    homeName: '',
    offer: 0,
  });

  const [errors, setErrors] = useState({
    homeName: '',
    offer: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleVals = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' });
    if (name === 'homeName' && value.length < 3) {
      setErrors({ ...errors, homeName: 'Home name must be at least 3 characters long' });
    }
    setApplication({ ...application, [name]: value });
  };

  const buyHome = (e) => {
    e.preventDefault();
    if (application.homeName.length < 3) {
      setErrors({ ...errors, homeName: 'Home name must be at least 3 characters long' });
      return;
    }
    console.log('Submitted:', application);
    setSubmittedData(application);
    setApplication({
      homeName: '',
      offer: 0,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Buy a home!</h1>
      <form onSubmit={buyHome}>
        <div className="form-group">
          <label>Home:</label>
          <input
            type="text"
            className="form-control"
            value={application.homeName}
            name="homeName"
            onChange={handleVals}
          />
          {errors.homeName && <p className="text-danger">{errors.homeName}</p>}
        </div>
        <div className="form-group">
          <label>Offer:</label>
          <input
            type="number"
            className="form-control"
            value={application.offer}
            name="offer"
            onChange={handleVals}
          />
          {errors.offer && <p className="text-danger">{errors.offer}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {submittedData && (
        <div className="mt-4">
          <h2>Submitted Data:</h2>
          <p><strong>Home Name:</strong> {submittedData.homeName}</p>
          <p><strong>Offer:</strong> {submittedData.offer}</p>
        </div>
      )}
    </div>
  );
}

export default FormObject;
