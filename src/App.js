import React from 'react';
import { ThemeProvider } from "styled-components";
import { Navigation, LoadingIndicator, Wrapper } from 'components';
import { useTranslation } from 'react-i18next';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import theme from "utils/theme";
import GlobalStyles from "./index.css.js";

function App() {
    const { i18n } = useTranslation();

    return (
        <>
            <GlobalStyles/>
            <Router>
                <Navigation items={
                    [
                        {to: '/', content: 'HomePage'},
                        {to: '/budget', content: 'BudgetPage'}
                    ]
                } RightElement={
                    <div>
                        <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
                        <button onClick={() => i18n.changeLanguage('en')}>en</button>
                    </div>
                }/>
                <Wrapper>
                    <Switch>
                        <Route exact path='/'>
                            HomePage
                        </Route>
                        <Route path='/budget'>
                            BudgetPage
                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        </>
    );
}

const RootApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <React.Suspense fallback={<LoadingIndicator/>}>
                <App/>
            </React.Suspense>
        </ThemeProvider>
    )
}

export default RootApp;
