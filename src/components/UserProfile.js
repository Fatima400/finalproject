import React from 'react';

const UserProfile = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  // Check if userData is null or undefined
  if (!userData) {
    return <div>No user data found</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Weight: {userData.weight}</p>
      <p>Height: {userData.height}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default UserProfile;
