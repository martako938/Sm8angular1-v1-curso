export class Pc{
    constructor(
        public id: number,
        public empleado_id: number,
        public serietag: string,
        public marca: string,
        public modelo: string,
        public tipo: string,
        public sistema: string,
        public office: string,
        public procesador: string,
        public disco: string,
        public descripcion: string
    ){}
}