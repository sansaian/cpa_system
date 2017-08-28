import * as Xhr from "./xhr";

export let makeApiGet = (url) => {
    return new Promise((resolve) => {
        const xhr = Xhr.get(
            url,
            []
        );

        xhr.then(
            (data) => {
                const result = JSON.parse(data.text);
                resolve(result);
            }
        );
    }, err => console.log(err));
};

export let makeApiPost = (url, object, headers = [new Xhr.Header("Content-Type", "application/json")]) => {
    return new Promise((resolve) => {
        const xhr = Xhr.post(
            url,
            object,
            headers
        );

        xhr.then(
            (data) => {
                const result = JSON.parse(data.text);
                resolve(result);
            }
        );
    }, err => console.log(err));
};