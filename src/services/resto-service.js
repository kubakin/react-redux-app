export default class RestoService {
    constructor() {
        this._baseURL = 'http://localhost:3000/'
    }
    async getResource(url) {
        const data = await fetch(`${this._baseURL}${url}`);
        if (!data.ok) {
            throw new Error('Error');
        }
        return await data.json()
    }
    async getMenuItems() {
        const data = await this.getResource('menu')
        return data;
    }
    async getMenuItem(id=1) {
        const data = await this.getResource(`menu/${id}`);
        return data
    }
    
}