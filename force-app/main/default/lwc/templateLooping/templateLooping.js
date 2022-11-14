import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
  carsList=['Tata','Kia','Hundyi','Toyoto','Mahendra']  

  ceoList=[
    {
      id:1,
      company:'Google',
      name:'Sudara pichai'
    },
    {
      id:2,
      company:'Apple Inc',
      name:'Tim cook'
    },
    {
      id:3,
      company:'Facebook',
      name:'Mark zuckerberg'
    }
    
  ]
}
