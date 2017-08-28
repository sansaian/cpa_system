import type {Dispatch} from './types';
import {fetchUsersIfNeeded} from './containers/OrderList/action';
import {fetchUserIfNeeded} from './containers/UserInfo/action';
import UserInfoPage from './containers/UserInfo';
import NotFoundPage from './containers/NotFound';
import CreateOffer from "./containers/CreateOffer";
import HomePage from "./containers/OrderList";

export default [
    {
        path: '/',
        exact: true,
        component: HomePage, // Add your route here
        loadData: (dispatch: Dispatch) => Promise.all([
            dispatch(fetchUsersIfNeeded()), // Register your server-side call action(s) here
        ]),
    },
    {
        path: '/createOffer',
        component: CreateOffer, // Add your route here
    },
    {
        path: '/UserInfo/:id',
        component: UserInfoPage,
        loadData: (dispatch: Dispatch, params: Object) => Promise.all([
            dispatch(fetchUserIfNeeded(params.id)),
        ]),
    },
    {
        path: '*',
        component: NotFoundPage,
    },
];
