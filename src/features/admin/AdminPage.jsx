import React, { useState, useEffect }  from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import AuthService from "../../services/authService";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setIsAdmin(user.role === "admin");
    }
  }, []);

  return (
    isAdmin ?
      <h1>Admin page</h1> :
      <h1>Not allowed to view this page</h1>
  )
};

export { AdminPage }