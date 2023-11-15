export class Avaliacao {
    id: number | null = 0;
    clienteId: number = 0;
    dataCriacao: Date | undefined;
    classificacao: number = 0;
    comentario: string = '';
    pedidoId: number = 0;
}