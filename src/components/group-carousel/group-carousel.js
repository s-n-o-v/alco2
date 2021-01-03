import React from 'react';
import './group-carousel.css';

const GroupCarousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class=""></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class=""></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img className="d-block w-100" src="http://placehold.it/966x350" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="http://placehold.it/966x350" alt="Second slide" />
                </div>
                <div className="carousel-item active">
                    <img className="d-block w-100" src="http://placehold.it/966x350" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
};

export default GroupCarousel;