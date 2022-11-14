 import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
export default class Internationalization extends LightningElement {

    number = 65252578.528
    formattedNumber = new Intl.NumberFormat(LOCALE,{
        style:'currency',
        currency:CURRENCY,
        cuurncyDisplay:'symbol'
    }).format(this.number)
}