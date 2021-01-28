import React from 'react';
import './alco-list-item.css';

const AlcoListItem = ( { item, onSelect } ) => {
    const { name, img, cat, description, rate, total } = item;
    return (
        <div className="col-lg-4 col-md-6 mb-4" cat={cat}>
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src={img} alt={name} /></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{name}</a>
                    </h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{showRate(rate)}</small>
                    <div style={{float:"right"}}>{total}</div>
                </div>
            </div>
        </div>
    );
}

const showRate = (idx) => {
    switch(idx) {
        case 0:
            return '☆ ☆ ☆ ☆ ☆';
            break;
        case 1:
            return '★ ☆ ☆ ☆ ☆';
            break;
        case 2:
            return '★ ★ ☆ ☆ ☆';
            break;
        case 3:
            return '★ ★ ★ ☆ ☆';
            break;
        case 4:
            return '★ ★ ★ ★ ☆';
            break;
        case 5:
            return '★ ★ ★ ★ ★';
            break;
    }
}

export default AlcoListItem;