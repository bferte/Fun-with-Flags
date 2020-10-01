import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                {/* <div className="content">
                    <h1>KuniQuizz</h1>
                    <h3>à qui appartient ce drapeau ?</h3>
                </div> */}
            </div>
        </div>
    );
};

export default Home;