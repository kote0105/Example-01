import { LightningElement,api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title

    callAura(){
        const event = new CustomEvent ('sendMsg',{
            detail:{
                "msg":"This is from LWC"
            }
        })
        this.dispatchEvent(event)
    }
    
}