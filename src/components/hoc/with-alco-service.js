import React from 'react';
import { AlcoServiceConsumer } from '../alco-service-context';

const withAlcoService = () => (Wrapped) => {
    return (props) => {
        return (
            <AlcoServiceConsumer>
                {
                    (alcoService) => {
                        return (
                            <Wrapped {...props} alcoService={alcoService} />
                        );
                    }
                }
            </AlcoServiceConsumer>
        );
    };
}

export default withAlcoService;
