import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withAlcoService } from '../hoc';

import { fetchItems } from '../../actions';
import AlcoListItem from '../alco-list-item';
import Spinner from '../spinner';

import './alco-list.css';


const AlcoList = ({ items, onSelect }) => {
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

// export default AlcoList;
const mapStateToProps = ({ items : { items, loading, error }}) => {
    return { items, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { alcoService } = ownProps;

    return {
        fetchItems: fetchItems(alcoService, dispatch)
    };
}

export default withAlcoService()(
    connect(mapStateToProps, mapDispatchToProps )(AlcoListContainer)
    );