import React from 'react';
import {ThemeProvider} from "styled-components";
import {Navigation} from 'components';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import theme from "utils/theme";
import Wrapper from "./components/Wrapper";
import GlobalStyles from "./index.css.js";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Router>
                <Navigation items={
                    [
                        {to: '/', content: 'HomePage'},
                        {to: '/budget', content: 'BudgetPage'}
                    ]
                } RightElement={
                    <div>
                        <button>pl</button>
                        <button>en</button>
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
        </ThemeProvider>
    );
}

export default App;
