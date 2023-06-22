import React from 'react';

const HomePage = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div>
      
      <p> Datum: {formattedDate}</p>
    </div>
  );
};

export default HomePage;