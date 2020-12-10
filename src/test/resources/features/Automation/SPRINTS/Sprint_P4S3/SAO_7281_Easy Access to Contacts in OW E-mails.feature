@7181

  Feature:  Ow Emails
    Scenario: SAO-7281- Easy access to contacts

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects actions dropdown as "Email > Outgoing"
      And user switches to frame
      And user clicks "Add Person - free text" tab
      And user enters add person first name as "Test"
      And user enters add person last name as "User"
      And user enters add person email address as "testuser@test.com"
      And user clicks add button for add person
      Then contact "testuser@test.com" should be added under "Send Notification To"
      And dropdown values "Test User [testuser@test.com]" should be available in "Select a Previously Used Contact (use Autofill or the Menu):" dropdown
      And user clicks cancel button on new notification window




