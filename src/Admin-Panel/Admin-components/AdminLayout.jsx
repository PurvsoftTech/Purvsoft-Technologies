import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { BlogProvider } from '../contexts/BlogContext';
import '../styles/admin-layout.css';
import AdminHeader from './AdminHeader';

const AdminLayout = () => {
  return (
    <>
      <BlogProvider>
      <div className="admin-layout">
        <Sidebar />
        <div className="admin-main-content">
          <AdminHeader />
          <main className="admin-content">
            <Outlet />
          </main>
        </div>
      </div>
    </BlogProvider>
    </>
  );
};

export default AdminLayout;