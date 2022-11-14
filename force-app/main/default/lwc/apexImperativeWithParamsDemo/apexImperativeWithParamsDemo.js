import { LightningElement } from 'lwc';
import findAccount from '@salesforce/apex/AccountController.findAccount'
export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchAccount = ''
    accounts
    timer
    searchHandler(event){
        window.clearTimeout(this.timer)
        this.searchAccount = event.target.value
        this.timer = setTimeout(()=>{
                        this.callApex()
                     },1000)
    }
    callApex(){
        findAccount({searchKey:this.searchAccount}).then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}