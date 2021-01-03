import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import Footer from '../footer';
import AlcoService from '../../service/alco-service';
import { AlcoServiceProvider } from '../alco-service-context'; 

import store from '../../store';

const alcoService = new AlcoService();


const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundry>
                <AlcoServiceProvider value={ alcoService }>
                    <Header />
                    <Router>
                        Los Page
                    </Router>
                    <Footer />
                </AlcoServiceProvider>
            </ErrorBoundry>
        </Provider>
    );
};

export default App;
