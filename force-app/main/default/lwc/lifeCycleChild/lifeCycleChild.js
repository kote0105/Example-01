import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super()
        console.log("child constructor called")
    }
    connectedCallback(){
        console.log("child connectedCallback called")
        throw new Error("child connectedCallback failed")
    }
    renderedCallback(){
        console.log("child renderedCallback called")
    }
    disconnectedCallback(){
        alert("disconnectedCallback is called..!")
    }
}