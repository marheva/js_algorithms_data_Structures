import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BigO from '../components/BigO';
import ProblemSolvingApproach from '../core/Problem/ProblemSolvingApproach';
import ProblemSolvingPatterns from '../core/Problem/ProblemSolvingPatterns';
import Recursion from '../core/Recursion/Recursion';
import Search from '../core/Search/Search';
import Layout from '../core/Layout/Layout';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path={'/'}
                    exact
                    component={() => <h1>'SignInSection'</h1>}
                />
                <Route
                    path={'/bigo'}
                    exact
                    component={() => (
                        <Layout>
                            <BigO />
                        </Layout>
                    )}
                />
                <Route
                    path={'/problemApproach'}
                    exact
                    component={() => (
                        <Layout>
                            <ProblemSolvingApproach />
                        </Layout>
                    )}
                />
                <Route
                    path={'/problemPatterns'}
                    exact
                    component={() => (
                        <Layout>
                            <ProblemSolvingPatterns />
                        </Layout>
                    )}
                />
                <Route
                    path={'/recursion'}
                    exact
                    component={() => (
                        <Layout>
                            <Recursion />
                        </Layout>
                    )}
                />
                <Route path={'/search'} exact component={() => <Search />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
