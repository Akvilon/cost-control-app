import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "./components/Layout";
import {ThemeProvider} from "react-jss";
import {lightTheme} from "./styles";

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <ThemeProvider theme={lightTheme}>
                <Layout>
                    <App/>
                </Layout>
            </ThemeProvider>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);

