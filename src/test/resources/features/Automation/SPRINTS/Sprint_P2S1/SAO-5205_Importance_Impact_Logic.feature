@PLAZA_PDB_Importance_Impact_logic

  Feature: Plaza PDB
    Scenario Outline: when creating a Major ticket from Plaza for PDB validate
                      Importance, impact logic follow.

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      And user clicks on plaza portal
      When user clicks support on plaza homepage
      And user clicks on "SUBMIT A TICKET"
      And user switches to window 1
      Then user validates PDB submit form opens
      And user selects service area as "Security"
      And user selects service as "Personal Data Breach"
      Then user enters PDB date and time as current date and time
      And user selects PDB effected country "<PDB Affected Country>"
      And user selects nature and content as "Address"
      And user selects affected persons as "<Number of Persons more than 10>"
      And user selects affected person type as "Enterprise customer"
      And user enters "Test Data" under Affected persons name and unique id
      And user clicks on submit button on plaza form
      And user gets plaza request id
      And user clicks on plaza request id
      And user validates internal case management form opens
      And user waits 40 secs
      And user clicks on main page refresh
      Then user should see incident ticket update in plaza
      When user enters "Test Update" in the ticket timeline
      And user clicks on plaza send button
      Then user opens new tab
      And user switches to window 2
      Given user is on the OneWorkflow login page
      When user logs in with valid username "PlazaTest" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 3
      Then user should see blank trouble search form
      When user enters plaza incident ticket
      And user should see plaza incident ticket
      And user validates source field as "PLAZA"
      And user validates source ID field contains ICM number
      And user validates service provider as "Data Breach"
      And user validates "<Affected BU>" BU is added automatically
#      And user validates PDB description same as Plaza
      Then user clicks on assignment under sections
      And user clicks on owner under sections
      And user validates owner profile as "PDB Control Center"
      And user validates owner as "PDBCC"
      And user should see assigned profile as "<AssignedProfile>"
      And user validates ticket priority as "<Priority>"
      And user validates Impact as "<Impact>"
      And user validates importance as "<Importance>"



      Examples:
      |PDB Affected Country|Number of Persons more than 10|Priority|Impact|Importance|AssignedProfile|Affected BU|
      |Sweden             |Yes                           |Major   |Major |  High    |PDB Control Center|Sweden   |
#     |Sweden             |No                            |Minor   |Minor |	Low     |PDB SE            |Sweden   |











