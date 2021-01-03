export default class AlcoService {
    
    _baseUrl = '';

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

    setRequest = async (postData) => {
        const uurl = `${this._baseUrl}/booking/request.php?jsonData=` + JSON.stringify(postData);
        const res = await fetch(uurl);
          
        return await res.json();
    };
}