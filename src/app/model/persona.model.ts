export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  img: string;
  email: string;
  celular: string;
  titulo: string;
  fecha: string;
  banner: string;
  ciudad: string;
  whatsapp: string;
  linkedin: string;
  github: string;
 
  
  

    constructor(nombre: string, apellido: string, descripcion: string, img: string, email: string, celular: string, titulo: string, fecha: string, banner: string, ciudad: string, whatsapp: string, linkedin: string, github: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.email = email;
        this.celular = celular;
        this.titulo = titulo;
        this.fecha = fecha;
        this.banner = banner;
        this.ciudad = ciudad;
        this.whatsapp = whatsapp;
        this.linkedin = linkedin;
        this.github = github;

    }
    
}