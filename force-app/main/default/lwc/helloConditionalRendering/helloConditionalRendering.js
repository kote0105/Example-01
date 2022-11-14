import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name
    handleClick(){
        this.isVisible = true
    }
    getterHandler(event){
        this.name = event.target.value
    }
    get name(){
        return this.name ==='hello'
    }
}