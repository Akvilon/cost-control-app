import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "./components/Layout";
import {ThemeProvider} from "react-jss";
import {lightTheme} from "./styles";
import {Provider} from "react-redux";
import createStore from './store';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <React.StrictMode>
                <ThemeProvider theme={lightTheme}>
                    <Layout>
                        <App/>
                    </Layout>
                </ThemeProvider>
            </React.StrictMode>
        </Router>
    </Provider>,
    document.getElementById('root')
);

