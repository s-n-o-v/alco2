import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import HomePage from '../pages/home-page';
import AlcoService from '../../service/alco-service';
import DummyService from '../../service/dummy-alco-service';
import { AlcoServiceProvider } from '../alco-service-context'; 

import store from '../../store';
import './app.css';

// const alcoService = new AlcoService();
const alcoService = new DummyService();

const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundry>
                <AlcoServiceProvider value={ alcoService }>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <Sidebar />
                            </div>
                            <div className="col-lg-9">
                                <Router>
                                    <Switch>
                                        <Route path="/" component={ HomePage } exact />
                                        {/* <Route path="/cart" component={ CartPage } exact /> */}
                                    </Switch>
                                </Router>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </AlcoServiceProvider>
            </ErrorBoundry>
        </Provider>
    );
};

export default App;
