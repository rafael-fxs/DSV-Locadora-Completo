export class Endereco {
    id?: number | null = 0
    clienteId: number = 0;
    rua: string = '';
    numero: number = 0;
    bairro: string = '';
    cidade: string = '';
    estado: string = '';
    complemento: string = '';
    cep: number = 0;
}