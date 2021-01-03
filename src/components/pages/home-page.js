import React from 'react';
import AlcoList from '../alco-list';
import GroupCarousel from '../group-carousel';

const HomePage = () => {
    return (
        <div>
            <GroupCarousel />
            <AlcoList />
        </div>
    );
};

export default HomePage;