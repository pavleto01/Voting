public with sharing class NominationController {

    @AuraEnabled
    public static Nomination__c CreateNomination(string Name, string Description, string Type){
      Nomination__c Nomination = new Nomination__c();
      Nomination.Name=Name;
      Nomination.Nomination_Description__c=Description;
      Nomination.Nomination_Type__c=Type;
        insert Nomination;
        return Nomination;
    }
  
  }