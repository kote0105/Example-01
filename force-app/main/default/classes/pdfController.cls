public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
        system.debug(recordId);
        system.debug(htmlData);
        Pagereference page = Page.renderAsPDF;
        page.getParameters().put('pdfText', htmlData);

        //Contact con = new Contact(Id=recordId);
        Account con = new Account(Id=recordId);
        //List<Attachment> objAttachmentList = new list<Attachment>();
        Attachment objAttachment = new Attachment();
        objAttachment.Name='invoice.pdf';
        objAttachment.ParentId = con.Id;
        objAttachment.Body = page.getContentaspdf();
        objAttachment.IsPrivate = false;
        //objAttachmentList.add(objAttachment);
        insert objAttachment;
        return objAttachment;
    }
}