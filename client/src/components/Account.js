import React, { useEffect, useState } from "react";

function Account() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setUser({});
      return;
    }

    fetch("https://vector-engineering.onrender.com/api/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("USER DATA:", data);
        setUser(data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        setUser({});
      });
  }, [token]);

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold mb-4">My Account</h1>

      {user === null ? (
        <p>Loading...</p>
      ) : user.name ? (
        <>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
        </>
      ) : (
        <p>Not logged in ❌</p>
      )}
    </div>
  );
}

export default Account;