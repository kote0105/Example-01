import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToExternalWebPage extends NavigationMixin(LightningElement) {
    navigateToExternalWebPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
               url:'http://www.google.com/'
            }
        }) 
    }
}