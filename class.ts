class Car {
    model:string;
    price:number;
    private _millage : number;
    constructor(model:string, price:number){
        this.model = model;
        this.price = price;
        this._millage = 1000;
    }
    getActualMillage(){
        const realMillage = this._millage + 5000;
        return realMillage;
    }
    getTotalPrice(tax:number): number{
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('toyota', 2000000);
const totalprice: number = toyota.getTotalPrice(25);