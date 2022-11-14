import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log("parent constructor called")
    }
    connectedCallback(){
        console.log("parent connectedCallback called")
    }
    renderedCallback(){
        console.log("parent renderedCallback called")
    }
    isChildVisible = false
    handleClick(event){
        this.isChildVisible = !this.isChildVisible
    }
    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }
}