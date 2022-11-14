import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class ToastNotification extends LightningElement {

    successHandler(){
        this.showToast('Success','{0} Created Successfully {1}','success')
    }
    errorHandler(){
        this.showToast('error','Creation failed','error')
    }
    warningHandler(){
        this.showToast('Warning','Creation Warning','Warning')
    }
    infoHandler(){
        this.showToast('info','Creation info','info')
    }
    showToast(title,message,variant){
        const event = new ShowToastEvent({
        title,
        message,
        variant,
        messageData:['salesforce',{
            url:'http://www.salesforce.com/',
            label:'Click here'
        }],
        mode:'sticky'
    })
    this.dispatchEvent(event)
    }
    
}