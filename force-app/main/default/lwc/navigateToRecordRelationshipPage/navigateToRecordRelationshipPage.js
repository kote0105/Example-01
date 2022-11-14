import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToRecordRelationshipPage extends NavigationMixin(LightningElement) {
    navigateToRecordRelationshipPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0015g00000QPG2WAAX',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        }) 
    }
}