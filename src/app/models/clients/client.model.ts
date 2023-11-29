

export class ClientModel {
    id_cliente: number;
    nombre: string;
    correo: string;
    telefono: string;
    direccionfacturacion: string;
   
    constructor() {
      this.id_cliente = 0;
      this.nombre = '';
      this.correo = '';
      this.telefono = '';
      this.direccionfacturacion = '';
    }
  }