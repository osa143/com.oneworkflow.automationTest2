@SAO-5760_SaleforceE2E

  #Below will need to be updated, not sure if closure will also come from salesforce side or not

  Feature:
    Scenario:

      Given user has access to Salesforce and is a support rep user
      When user creates a ticket with mandatory information and sends towards OW
      Then user validates that ticket is present within OW
      And user validates ticket information is correct
      And user validates ticket is assigned to correct team
      And user validates OW Ticket ID is seen within Salesforce
      When user changes status to pending in OW
      And user enters on hold information
      Then user saves the ticket
      And user validates ticket status as pending in OW and in Salesforce
      When user clicks the release button within OW
      Then user validates ticket status is returned to original status in both systems
      When user assigns ticket back to Salesforce
      Then user validates ticket is assigned to Salesforce and OW updates cant be made
      When user changes status in Salesforce to cleared and enters mandatory information
      Then user validates ticket status as cleared within OW
      When user changes status in Salesforce to closed and enters mandatory information
      Then user validates ticket status as closed within OW