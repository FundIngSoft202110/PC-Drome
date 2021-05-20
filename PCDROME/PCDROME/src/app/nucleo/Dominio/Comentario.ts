export class Comentario{
   public CALIFICACION: number;
   public COMENTARIO: string;
   public IDPRODUCTO: string;
   public IDUSUARIO: string;
   
   constructor(calificacion: number, comentario: string, idProducto: string, idUsuario: string){
       this.CALIFICACION = calificacion;
       this.COMENTARIO = comentario;
       this.IDPRODUCTO = idProducto;
       this.IDUSUARIO = idUsuario;
   }
}