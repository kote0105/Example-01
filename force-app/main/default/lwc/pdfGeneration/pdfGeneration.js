import { LightningElement, api, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';
import SBI_IMAGE from '@salesforce/resourceUrl/Sbi_img'
import generatePDF from '@salesforce/apex/pdfController.generatePDF'
export default class PdfGeneration extends LightningElement {
    @api recordId 
    sbiLogo = SBI_IMAGE
    formFields = [
        {"fieldName":"Name", "label":"Name"},
        {"fieldName":"Phone", "label":"Phone"},
        {"fieldName":"AccountNumber", "label":"Account Number"},
        {"fieldName":"AnnualRevenue", "label":"Annual Revenue"},
        {"fieldName":"Industry", "label":"Industry"},
        {"fieldName":"Type", "label":"Type"},
        {"fieldName":"Website", "label":"Website"},
        {"fieldName":"BillingStreet", "label":"Billing Street"},
        {"fieldName":"BillingCity", "label":"Billing City"},
        {"fieldName":"BillingState", "label":"Billing State/Province"},
        {"fieldName":"BillingCountry", "label":"Billing Country"},
        {"fieldName":"BillingPostalCode", "label":"Billing Zip/Postal Code"}
    ]

    @wire(getRecordUi,{recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
    accountHandler({data,error}){
        if(data){
            console.log(data)
            this.formFields = this.formFields.map(item=>{
                return{...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.error(error)
        }
    }
    pdfHandler(){
        let content = this.template.querySelector('.container')
        console.log(content.outerHTML)
        generatePDF({ recordId:this.recordId, htmlData:content.outerHTML}).then(result=>{
            console.log("attachment id", result)
            window.open(`https://tscom-a-dev-ed.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`)
        }).catch(error=>{
            console.error(error)
        })
    }
}