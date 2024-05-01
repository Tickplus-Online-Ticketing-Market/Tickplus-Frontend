import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
    const sidebarStyles = {
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        zIndex: 1, 
    };

    const headerStyles = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 0, 
    };

    const contentWrapperStyles = {
        marginLeft: '15rem',
        position: 'relative', 
        zIndex: 2, 
    };

    const contentStyles = {
        marginTop: '6rem',
        height: 'calc(100vh - 8rem)',
        overflowY: 'auto',
    };

    return (
        <div className='relative flex flex-row h-screen w-screen bg-background'>
            <div style={sidebarStyles}>
                <Sidebar />
            </div>
            <div style={headerStyles}>
                <Header />
            </div>
            <div className='flex-1' style={contentWrapperStyles}>
                <div className='p-4' style={contentStyles}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
