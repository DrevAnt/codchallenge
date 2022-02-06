import React from "react";
import { useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";

function FetchData() {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="element">
      <h2>User Data</h2>

      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Website:</strong> {userData.website}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
    </div>
  );
}

export default FetchData;
