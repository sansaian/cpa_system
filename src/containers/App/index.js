/* @flow */

import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';
import _ from 'lodash';
import config from '../../config';
import routes from '../../routes';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

export default () => {
    // Use it when sub routes are added to any route it'll work
    const routeWithSubRoutes = route => (
        <Route
            key={_.uniqueId()}
            exact={route.exact || false}
            path={route.path}
            render={props => (
                // Pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes || null}/>
            )}
        />
    );

    return (
        <div>
            <Helmet {...config.app} />
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">CPA Demo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <li><Link to={ "/" }>Список заказов</Link></li>
                        <li><Link to={ "/createOffer" }>Создать заказ</Link></li>
                        <li><a>Добро пожаловать, Рекламодатель!<b className="caret"/></a></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                {routes.map(route => routeWithSubRoutes(route))}
            </Switch>
        </div>
    );
};


