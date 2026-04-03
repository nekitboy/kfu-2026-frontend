import React from 'react';
import Header from "../../features/header";

const HomePage = () => {
    return <>
        <Header/>
        <main className="container">
            <div className="banners-grid">
                <div className="banner"></div>
                <div className="banner"></div>
                <div className="banner"></div>
            </div>
        </main>
    </>
}

export default HomePage