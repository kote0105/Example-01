import { LightningElement } from 'lwc';
import DESC_ONE from '@salesforce/label/c.DescriptionOne'
import DESC_TWO from '@salesforce/label/c.DescriptionTwo'
export default class CustomLabelDemo extends LightningElement {

    LABELS ={
        DescriptionOne:DESC_ONE,
        DescriptionTwo:DESC_TWO
    }
}