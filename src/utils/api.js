import {makeApiGet, makeApiPost} from "./apiCalls";
import store from "../../store";
import {loginUser} from "../../actions/user";

const makeApiPostWrapped = (url, object, headers) => {
    return new Promise(resolve => {
        makeApiPost(url, object, headers).then((data) => {
            const user = data.user;
            if (store.getState().user !== user) {
                store.dispatch(loginUser(user));
            }
            resolve(data);
        });
    });
};

const makeApiGetWrapped = (url) => {
    return new Promise(resolve => {
        makeApiGet(url).then((data) => {
            const user = data.user;
            if (store.getState().user !== user) {
                store.dispatch(loginUser(user));
            }
            resolve(data);
        });
    });
};

export const login = (login, password) => {
    const url = "http://" + window.location.host + "/api/user/login";

    const data = {
        login: login,
        password: password
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const editEmail = (email) => {
    const url = "http://" + window.location.host + "/api/user/change-email";

    const data = {
        email: email,
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const changePassword = (oldPassword, newPassword) => {
    const url = "http://" + window.location.host + "/api/user/change-password";

    const data = {
        oldPassword: oldPassword,
        newPassword: newPassword
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const confirmResetPassword = (code, newPassword) => {
    const url = "http://" + window.location.host + "/api/user/confirm-new-reset-password";

    const data = {
        code: code,
        newPassword: newPassword
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const editPhone = (phone) => {
    const url = "http://" + window.location.host + "/api/user/change-phone";

    const data = {
        phone: phone,
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const evalRealEstate = (id, sum) => {
    const url = "http://" + window.location.host + "/api/user/evaluate-investment";

    const data = {
        realEstateId: id,
        sum: sum
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const buyRealEstate = (id, sum) => {
    const url = "http://" + window.location.host + "/api/user/invest";

    const data = {
        realEstateId: id,
        sum: sum
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const assessRealEstate = (id, price, fileName) => {
    const url = "http://" + window.location.host + "/api/agent/assess-real-estate/" + id;

    const data = {
        price: price,
        assessmentDocument: fileName
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const sellTokens = (id, count, cost) => {
    const url = "http://" + window.location.host + "/api/user/sell-tokens";

    const data = {
        stockPortfolioId: id,
        tokenCount: count,
        tokenCost: cost
    };

    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const verifyBySms = (url, data) => {
    return makeApiPostWrapped(url, JSON.stringify(data));
};

export const sendDocument = (file) => {
    const url = "http://" + window.location.host + "/api/agent/upload-document";
    let formData = new FormData();
    formData.append("files", file);
    return makeApiPostWrapped(url, formData, []);
};

export const fetchHistory = (from, to) => {
    const url = "http://" + window.location.host + "/api/user/transactions?DateFrom=" + from + '&DateTo=' + to;
    return makeApiGetWrapped(url);
};

export const fetchPortfolio = () => {
    const url = "http://" + window.location.host + "/api/user/stock-portfolio/";
    return makeApiGetWrapped(url);
};

export const fetchRealEstateListForAgent = () => {
    const url = "http://" + window.location.host + "/api/agent/real-estate/";
    return makeApiGetWrapped(url);
};

export const fetchRealEstateListForUser = () => {
    const url = "http://" + window.location.host + "/api/user/real-estate/";
    return makeApiGetWrapped(url);
};

export const fetchRealEstate = (id) => {
    const url = "http://" + window.location.host + "/api/user/real-estate/" + id;
    return makeApiGetWrapped(url);
};

export const fetchBankRequesites = () => {
    const url = "http://" + window.location.host + "api/user/money/deposit/bank-transfer";
    return makeApiGetWrapped(url);
};