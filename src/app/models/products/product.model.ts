import { ProductStockModel } from "./product-stock.model";

export class ProductModel {

    descripcion: string;
    id_estado: number;
    id_producto: number;
    valor: number;
    stock: ProductStockModel;

    constructor() {
        this.descripcion = "";
        this.id_estado = 0;
        this.id_producto = 0;
        this.valor = 0;
        this.stock = new ProductStockModel();
    }
}


