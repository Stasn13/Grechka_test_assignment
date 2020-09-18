import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Redux from './Redux';
import Layout from './Layout';

function App(): any {
    return (
        <Redux>
            <Router>
                <Layout />
            </Router>
        </Redux>
    );
}

export default App;
