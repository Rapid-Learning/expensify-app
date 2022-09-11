import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/404';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName='is-active' exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to="/edit" activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/create" component={AddExpense} />  
                <Route path="/edit" component={EditExpense} /> 
                <Route path="/help" component={Help} /> 
                <Route component={NotFound} />
            </Switch> 
        </div>
    </BrowserRouter>
);

export default AppRouter; 