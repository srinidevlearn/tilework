import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  createDb() {
    let heroes = [
      {
        id: 1, title: 'Modular Kitchen', 
        category: 'painting',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab sunt non nam impedit velit fuga repudiandae laudantium aliquam. Iure excepturi nisi magnam aliquam nemo facilis, eligendi aliquid dolore sint.`,
        fileExtensions: 'img',
        url: `https://images.pexels.com/photos/4119835/pexels-photo-4119835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
      },

      {
        id: 2, title: 'Interior Design', 
        category: 'painting',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab sunt non nam impedit velit fuga repudiandae laudantium aliquam. Iure excepturi nisi magnam aliquam nemo facilis, eligendi aliquid dolore sint.`,
        fileExtensions: 'img',
        url: `https://images.pexels.com/photos/6969834/pexels-photo-6969834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
      },
      {
        id: 3, title: 'Wall Painiting', 
        category: 'painting',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab sunt non nam impedit velit fuga repudiandae laudantium aliquam. Iure excepturi nisi magnam aliquam nemo facilis, eligendi aliquid dolore sint.`,
        fileExtensions: 'img',
        url: `https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
      },
      {
        id: 4, title: 'Home Painiting', 
        category: 'painting',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab sunt non nam impedit velit fuga repudiandae laudantium aliquam. Iure excepturi nisi magnam aliquam nemo facilis, eligendi aliquid dolore sint.`,
        fileExtensions: 'img',
        url: `https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
      },
      {
        id: 1, title: 'Home Painiting', 
        category: 'painting',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab sunt non nam impedit velit fuga repudiandae laudantium aliquam. Iure excepturi nisi magnam aliquam nemo facilis, eligendi aliquid dolore sint.`,
        fileExtensions: 'img',
        url: `https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
      },
    ];
    return { heroes };
  }
}
