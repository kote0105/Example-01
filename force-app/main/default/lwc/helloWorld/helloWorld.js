import { LightningElement ,track } from 'lwc';
export default class HelloWorld extends LightningElement {
  fullname ='pramod'
  designation = 'Developer'

  changeHandler(event){
     this.designation = event.target.value
  }
   @track address={
    city:'Hyderabad',
    state:'Telangana',
    pin:'560037'
   } 
   trackHandler(event){
    this.address.city = event.target.value
   }

   users=['hari','kumar','prem']
   num1 = 10
   num2 = 20
   get username (){
    return this.users[0]
   }
   get multiply (){
    return this.num1*this.num2
   }
}