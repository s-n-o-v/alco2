import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withAlcoService } from '../hoc';

import { itemsLoaded, itemsError, itemsRequested } from '../../actions';
import AlcoListItem from '../alco-list-item';
import Spinner from '../spinner';

import './alco-list.css';


const AlcoList = ({ items }) => {
    return (
        <div className="row">
            {
                items.map( (item) => {
                    return (
                        <AlcoListItem key={item.id} item={item} />
                    );
                })
            }
        </div>
    );
};

class AlcoListContainer extends Component {
    componentDidMount() {
        console.log('requesting...');
        this.props.fetchItems();
    }

    render() {
        const { items, loading, error } = this.props;
        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <AlcoList items={items} />;
    }
}

const mapStateToProps = ({ items : { items, loading, error }}) => {
    // console.log('items', items);
    return { items, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { alcoService } = ownProps;

    return {
        fetchItems: () => {
            dispatch(itemsRequested());

            alcoService.getItems(null)
                .then((data) => {
                    dispatch(itemsLoaded(data));
                })
                .catch(err => {
                    dispatch(itemsError(err));
                });
        }
    };
}

export default withAlcoService()(
    connect(mapStateToProps, mapDispatchToProps )(AlcoListContainer)
    );