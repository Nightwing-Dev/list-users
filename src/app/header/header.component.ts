import { Component, } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  imgCollection: Array<object> = [
    {
      image: '../../assets/estudiantes.jpg',
      thumbImage: '../../assets/estudiantes.jpg',
      alt: 'Estudiantes Del Campus',
      title: 'Usuarios De la Pagina'
    }, {
      image: '../../assets/Negocios.jpg.jpg',
      thumbImage: '../../assets/Negocios.jpg',
      title: 'Negocios',
      alt: 'Negocios'
    }, {
      image: '../../assets/university.jpg',
      thumbImage: '../../assets/university.jpg',
      title: 'University',
      alt: 'University'
    }, {
      image: '../../assets/Carnaval.jpg',
      thumbImage: '../../assets/Carnaval.jpg',
      title: 'Carnaval Campus',
      alt: 'Carnaval Campus'
    }, {
      image: '../../assets/top-developers.jpg',
      thumbImage: '../../assets/top-developers.jpg',
      title: 'Developers',
      alt: 'Developers'
    }
];

}
