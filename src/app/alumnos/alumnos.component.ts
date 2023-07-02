import { Component } from '@angular/core';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  
    alumnos = [
      { 
        "id":1,
        "nombre": "Juan Pérez",
        "edad": 20,
        "curso": "Ingeniería de Software"
      },
      { "id": 2,
        "nombre": "María López",
        "edad": 19,
        "curso": "",
      },
      { "id": 3,
        "nombre": "Carlos García",
        "edad": 17,
        "curso": "Diseño Gráfico"
      },
      { "id": 4,
        "nombre": "Laura Rodríguez",
        "edad": null,
        "curso": "Arquitectura"
      },
      { "id": 5,
        "nombre": "Pedro Ramírez",
        "edad": 23,
        "curso": "Ingeniería Industrial"
      },
      { "id": 6,
        "nombre": "Ana Torres",
        "edad": 17,
        "curso": "Medicina"
      },
      { "id": 7,
        "nombre": "",
        "edad": undefined,
        "curso": "Administración de Empresas"
      },
      { "id": 8,
        "nombre": "Javier Mendoza",
        "edad": 17,
        "curso": "Comunicación Social"
      }
    ]
    
  }
