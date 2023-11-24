export class AuthenticationResponse {
    email: string;
    token: string;
    idCliente: number;
    nombre: string;

    constructor() {
        this.email = "";
        this.token = "";
        this.idCliente = 0;
        this.nombre = ""
    }
}
