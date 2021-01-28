export default class AlcoService {
    
    _baseUrl = 'http://localhost:5001/api';

    getResource = async (url) => {
        const res = await fetch(this ._baseUrl + url, { cache: "reload" });
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._baseUrl}${url}, recieved ${res.status}`);
        }
        return await res.json();
    };

    getRequest = async (url) => {
        const res = await this.getResource(url);
        return res;
    };

    setRequest = async (url, postData) => {
        const uurl = `${this._baseUrl}/booking/request.php?jsonData=` + JSON.stringify(postData);
        const res = await fetch(uurl);
          
        return await res.json();
    };
    
    getCategories = async () => {
        const request_url = `/category/`;
        const res = await this.getResource(request_url);
        return res;
    }

    getItems = async (param) => {
        let request_url = `/drinks`;
        if (param) {
            request_url += '?';
            if (param.categoryId) {
                request_url += 'categoryId=' + param.categoryId;
            }
        }
        console.log('requested url: ', request_url);
        const res = await this.getResource(request_url);
        return res;
    }
}