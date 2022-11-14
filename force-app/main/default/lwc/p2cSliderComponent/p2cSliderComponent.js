import { LightningElement , api} from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 20;
    changeHandler(event){
        this.val=event.target.value
    }
    @api resetHandler(){
       this.val=50 
    }
}