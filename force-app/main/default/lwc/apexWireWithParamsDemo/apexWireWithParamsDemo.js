import { LightningElement, wire} from 'lwc';
import filterAccountType from '@salesforce/apex/AccountController.filterAccountType'
export default class ApexWireWithParamsDemo extends LightningElement {
    selectedType = ''
    @wire(filterAccountType,{type:'$selectedType'})
    filteredAccounts

    get optionsType(){
        return [
            { label: 'Customer - Channel', value: 'Customer - Channel' },
            { label: 'Customer - Direct', value: 'Customer - Direct' }
        ];
    }
    handleChange(event) {
        this.selectedType = event.detail.value;
    }
}