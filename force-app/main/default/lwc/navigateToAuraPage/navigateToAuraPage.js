import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToAuraPage extends NavigationMixin(LightningElement) {
    navigateToAura(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__component',
            attributes: { 
                componentName:"c__AuraNavigation"
            },
            state:{
                "c__id":"78956564215"
            }
        })
    }
}