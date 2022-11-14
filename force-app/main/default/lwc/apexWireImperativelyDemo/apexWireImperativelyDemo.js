import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class ApexWireImperativelyDemo extends LightningElement {
    accounts
    changeHandler(){
        getAccountList().then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}