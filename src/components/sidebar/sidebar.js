import React from 'react';
import { connect } from 'react-redux';
import { withAlcoService } from '../hoc';
import { Tree, Divider  } from 'antd';
import { fetchItems } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './sidebar.css';
import 'antd/dist/antd.css';

class Sidebar extends React.Component {

    state = {
        loading: true,
        data: null,
        error: false
    };

    componentDidMount() {
        console.log(this.props);
        const { alcoService } = this.props;

        alcoService.getCategories()
            .then((data) => {
                console.log('received data: ', data);
                const new_data = rebase_data(data, null);
                console.log('new data: ', new_data);
                this.setState({
                    loading: false,
                    data: new_data,
                    error: false
                });
            })
            .catch((data) => {
                this.setState({
                    loading: false,
                    data: null,
                    error: true
                });
            });
    }

    onSelect = (selectedKeys, info) => {
        const param = {
            categoryId: selectedKeys[0]
        };
        console.log('selected', param);
        // this.props.fetchItems(param);
    };
    
    render() {
        const { data, loading, error } = this.state; 

        if (loading) {
            return <Spinner />;
        }
        if (error) {
            return <ErrorIndicator />;
        } 

        return (
            <div>
                <h1 className="my-4">Categories</h1>
                <Tree
                    defaultExpandedKeys={[1, 2]}
                    onSelect={this.onSelect}
                    treeData={this.state.data}
                />
                <Divider />
            </div>
        );
    }
};

const getData = (data, lvl) => data.filter(i => i.parentId == lvl);
    
const rebase_data = (data, lvl) => {
    const arr = getData(data, lvl);
    let aaa = [];
    arr.forEach((elem) => {
        const a = {
            title: elem.name,
            key: elem.id
        };

        const children = rebase_data(data, elem.id);

        if (children.length > 0) {
            a.children = children;
        }
        aaa.push(a);
    });
    return aaa;
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { alcoService } = ownProps;
    return {
        // fetchItems: (param) => fetchItems(param, alcoService, dispatch)
    };
}


export default withAlcoService()(
    connect(mapStateToProps, mapDispatchToProps )(Sidebar)
);
