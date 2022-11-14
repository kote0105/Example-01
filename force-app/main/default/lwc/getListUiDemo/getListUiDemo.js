import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import TITLE_FIELD  from '@salesforce/schema/Contact.Title'
export default class GetListUiDemo extends LightningElement {
    contacts =[]
    pageToken = null
    perviousPageToken = null
    nextPageToken = null
    @wire(getListUi,{
        objectApiName: CONTACT_OBJECT,
        listViewApiName:'AllContacts',
        pageSize:10,
        sortBy:TITLE_FIELD,
        pageToken:'$pageToken'
    })
    listViewHandler({data,error}){
        if(data){
            console.log(data)
            this.contacts = data.records.records
            this.nextPageToken = data.records.nextPageToken
            this.perviousPageToken = data.records.perviousPageToken
        }
        if(error){
            console.log(error)
        }
    }
    previousPageHandler(){
       this.pageToken = this.perviousPageToken 
    }
    nextPageHandler(){
        this.pageToken = this.nextPageToken 
    }
}