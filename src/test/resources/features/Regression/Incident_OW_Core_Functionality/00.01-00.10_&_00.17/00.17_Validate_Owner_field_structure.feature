@00.17_Validate_Owner_field_structure #@Incident

Feature: validation of impact field availability and structure

  Scenario: user validates impact field availability and structure


    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on owner under sections
    And user validates owner profile field availability
    Then multiple values should be available in "Owner Profile*" dropdown
    And User selects "Owner Profile*" as dropdownValue and should see values for "notreadonly"

      | DropdownValue | DropdownValuesToBePresent|
      | Access network:Mobile:RAN:Common | Mobile Services-DS:NW Radio Quality-NO:RAN Customer Tickets SE |
      | Access network:Mobile:RAN:Customer | RAN Engineering Customer-DK                                  |
      | Access network:Mobile:RAN:Deployment | NW RAN Deployment-DK:Roll Out BTB-DK:Roll Out build Eltel-DK:Roll Out orbion-DK:Roll Out Rbld & Rplmnt-DK:Roll Out Relacom-DK|




    #And User selects "Owner Profile*" as "Access network:Mobile:RAN:Common" and should see "Mobile Services-DS:NW Radio Quality-NO:RAN Customer Tickets SE"
    #And User selects "Owner Profile*" as "Access network:Mobile:RAN:Customer" and should see "RAN Engineering Customer-DK"

