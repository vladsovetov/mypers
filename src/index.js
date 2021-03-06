import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import messagesEn from "./i18n/en.json";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom";


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


addLocaleData([...localeEn]);
const messages = {
    'en': messagesEn
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#1f2d3a',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <IntlProvider locale={language} messages={messages[language]}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </IntlProvider>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
