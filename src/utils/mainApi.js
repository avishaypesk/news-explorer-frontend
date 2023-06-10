class Api {
    constructor(rootUrl) {
        this._rootUrl = rootUrl;
    }

    _fetch = ({ url, method, data }) => {
        const headers = {
            'Content-Type': 'application/json',
        };

        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            headers['Authorization'] = `Bearer ${jwt}`;
        }

        return fetch(`${this._rootUrl}${url}`, {
            method,
            headers,
            body: JSON.stringify(data),
        }).then(this._handleResponse);
    };

    _handleResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

    _handleError = (err) => {
        console.error(err);
        throw err;
    };

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

    getSavedArticles = () => {
        return this._fetch({
            url: '/articles',
            method: 'GET',
        })
            .then((response) => {
                return response; 
            })
            .catch(this._handleError);
    };

    getCurrentUser = () => {
        return this._fetch({
            url: '/users/me',
            method: 'GET',

        }).catch(this._handleError);
    };

    signin = ({ email, password }) => {
        return this._fetch({
            url: '/signin',
            method: 'POST',
            data: { email, password },
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

const api = new Api('http://localhost:3000');

export default api;