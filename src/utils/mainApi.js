class Api {
    constructor(auth, rootUrl) {
        this._authToken = auth;
        this._rootUrl = rootUrl;
    }

    _fetch = ({ url, method, data }) => {
        return fetch(`${this._rootUrl}${url}`, {
            method,
            headers: {
                authorization: `Bearer ${this._authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(this._handleResponse);
    };

    _handleResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

    _handleError = (err) => Promise.reject(err);

    saveArticle = (article) => {
        return this._fetch({
            url: '/articles',
            method: 'POST',
            data: article,
        }).catch(this._handleError);
    };

    deleteArticle = (articleId) => {
        return this._fetch({
            url: `/articles/${articleId}`,
            method: 'DELETE',
        }).catch(this._handleError);
    };

    signin = ({ email, password }) => {
        return this._fetch({
            url: '/signin',
            method: 'POST',
            data: { email, password }
        }).catch(this._handleError);
    };

    signup = ({ email, password, name }) => {
        return this._fetch({
            url: '/signup',
            method: 'POST',
            data: { email, password, name },
        }).catch(this._handleError);
    };
}


const jwt = localStorage.getItem('jwt');
const api = new Api(jwt, 'https://api.avishaypesk-news.crabdance.com');

export default api;