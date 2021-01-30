export class Empleado{
    constructor(
        public id: number,
        public puesto_id: number,
        public sucursal_id: number,
        public nombre: string,
        public apellido: string,
        public nchecador: number,
        public descripcion: string
    ){}
}