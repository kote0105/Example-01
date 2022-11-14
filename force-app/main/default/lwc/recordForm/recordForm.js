import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUALREVENUE from '@salesforce/schema/Account.AnnualRevenue'
import TYPE from '@salesforce/schema/Account.Type'
import INDUSTRY from '@salesforce/schema/Account.Industry'

export default class RecordForm extends LightningElement {
    @api recordId
    @api objectApiName
    objectName = ACCOUNT_OBJECT
    fieldList = [NAME_FIELD,ANNUALREVENUE,TYPE,INDUSTRY]

    successHandler(event){
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title:'Account Created',
            message:'Record ID :'+event.detail.id,
            variant:'success'
        })
        this.dispatchEvent(toastEvent)
    }
}