import {makeAutoObservable} from 'mobx';


export default class DeviceStore  {
    constructor() { 
        this._types = [
            {id:1, name: "Холодильники"},
            {id:2, name: "Сартфоны"},
            {id:3, name: "Компютеры"},
            {id:4, name: "Телевизоры"}
        ];
        this._brands = [
            {id:1, name: "Samsung"},
            {id:2, name: "Apple"},
            {id:3, name: "Lenovo"},
            {id:4, name: "Asus"},

        ];
        this._devices = [
            {id:1, name:'Iphone 12 pro 64gb', price: 27999, rating: 4.8, img:"https://i.citrus.ua/imgcache/size_800/uploads/shop/9/6/9601bc1ab5df854d950ccbc255a6b5ec.jpg" },
            {id:2, name:'Iphone 12 pro 112gb', price: 28999, rating: 4.8, img:"https://i.citrus.ua/imgcache/size_800/uploads/shop/9/6/9601bc1ab5df854d950ccbc255a6b5ec.jpg" },
            {id:3, name:'Iphone 12 pro 8gb ', price: 29999, rating: 4.8, img:"https://i.citrus.ua/imgcache/size_800/uploads/shop/9/6/9601bc1ab5df854d950ccbc255a6b5ec.jpg" },
            {id:4, name:'Iphone 12 pro 16gb', price: 22999, rating: 4.8, img:"https://i.citrus.ua/imgcache/size_800/uploads/shop/9/6/9601bc1ab5df854d950ccbc255a6b5ec.jpg" },
            {id:5, name:'Iphone 12 pro 32gb', price: 23999, rating: 4.8, img:"https://i.citrus.ua/imgcache/size_800/uploads/shop/9/6/9601bc1ab5df854d950ccbc255a6b5ec.jpg" },
            {id:6, name:'Iphone 12 pro 256gb', price: 24999, rating: 4.8, img:"https://i.citrus.ua/imgcache/size_800/uploads/shop/9/6/9601bc1ab5df854d950ccbc255a6b5ec.jpg" },
        ];


        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
     
        makeAutoObservable(this)
    }
    
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }


};
