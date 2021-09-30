@PLAZA_PDB_E2E_Incident2 @PLAZA_Incident_Flow
  #Ticket ID to come from Plaza
  #below scenario also covers SAO- 5205, when creating a Major ticket from Plaza for PDB validate Importance, impact logic follow.
Feature: Plaza PDB
  Scenario Outline: Plaza PDB create, update, cleared and closed E2E

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
    And user selects affected persons as "<Number of Persons>"
    And user selects plaza affected persons as other
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
    And user validates "<PDB Affected Country>" BU is added automatically
    And user validates PDB title field as "<Title>"
#    And user validates PDB description same as Plaza
    And user validates ticket priority as "<Priority>"
    And user validates plaza pdb impact as "<Impact>"
    And user validates plaza pdb importance as "<Importance>"
    And change should also be reflected in the timeline as "Test Update" on row 1
    Then user clicks on assignment under sections
    And user clicks on owner under sections
#      And user validates owner profile as "PDB Control Center"
#      And user validates owner as "PDBCC"
    And user should see assigned profile as "<AssignedProfile>"
    When user enters "Test OW Update" in the timeline text box
    And user clicks on public radio button
    And user clicks on add button
    Then change should also be reflected in the timeline as "Test OW Update"
    And user switches to window 1
    And user waits 6 secs
    And user clicks on main page refresh
#    And user should see OW manual notification in plaza ticket as "Test OW Update"
    And user switches to window 3
#      When user changes status to "Pending"
#      And user enters on hold to date 2 minutes in the future
#      And user selects on hold reason as "Waiting for Customer Info"
#      Then user clicks on save button
#      And user validates ticket status as "Pending"
#      And user switches to window 1
#      And user should see "pending" update in plaza ticket
#      And user switches to window 3
#      Then user waits for 2 minutes
#      And user clicks on ticket refresh button
#      And user validates ticket status as "Assigned"
    Then user selects assignment profile dropdown as "External:ANS:OW_ANS"
    And user enters "fhr501" in assignee
    Then user clicks on save button
    And user validates assignee is "fhr501"
    Then user switches to window 1
    And user waits 6 secs
    And user clicks on main page refresh
    And user should see OW manual notification in plaza ticket as "OW_ANS"
    Then user switches to window 3
    When user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    Then user switches to window 1
    And user waits 6 secs
    And user clicks on main page refresh
    And user should see OW manual notification in plaza ticket as "The Incident State has been moved to Work In Progress in OWF"
    Then user switches to window 3
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Ticket"
    Then user enters event end time as current time
    And user clicks on save button
    Then user validates ticket status as "Cleared"
    Then user switches to window 1
    And user waits 6 secs
    And user clicks on main page refresh
    And user should see OW manual notification in plaza ticket as "Order has been completed"
    Then user switches to window 3
    And user clicks on ticket refresh button
    Then user validates ticket status as "Closed"



    Examples:
      |PDB Affected Country             |Number of Persons|Title                                                          |Priority|Impact|Importance|AssignedProfile  |
#      |Other (or more than one country)|Yes              |Personal Data Breach \| Other Other (or more than one country) |Major   |Major |  High    |PDB Control Center|
#      |Telia Carrier                   |Yes              |Personal Data Breach \| Telia Carrier                          |Major   |Major |  High    |PDB Control Center|
#      |Sweden                          |Yes              |Personal Data Breach \| Sweden                                 |Major   |Major |  High    |PDB Control Center|
#      |Finland                         |Yes              |Personal Data Breach \| Finland                                |Major   |Major |  High    |PDB Control Center|
#      |Norway                          |Yes              |Personal Data Breach \| Norway                                 |Major   |Major |  High    |PDB Control Center|
#      |Denmark                         |Yes              |Personal Data Breach \| Denmark                                |Major   |Major |  High    |PDB Control Center|
#      |Estonia                         |Yes              |Personal Data Breach \| Estonia                                |Major   |Major |  High    |PDB Control Center|
#      |Lithuania                       |Yes              |Personal Data Breach \| Lithuania                              |Major   |Major |  High    |PDB Control Center|
#      |Other (or more than one country)|No               |Personal Data Breach \| Other Other (or more than one country) |Minor   |Minor |	Low      |                 |
#      |Telia Carrier                   |No               |Personal Data Breach \| Telia Carrier                          |Minor   |Minor |	Low      |PDB Carrier      |
#      |Sweden                          |No               |Personal Data Breach \| Sweden                                 |Minor   |Minor |	Low      |PDB SE           |
#      |Finland                         |No               |Personal Data Breach \| Finland                                |Minor   |Minor |	Low      |PDB FI           |
#      |Norway                          |No              |Personal Data Breach \| Norway                                 |Minor    |Minor |	Low     |PDB NO           |
#      |Denmark                         |No               |Personal Data Breach \| Denmark                                |Minor   |Minor |	Low      |PDB DK           |
#      |Estonia                         |No               |Personal Data Breach \| Estonia                                |Minor   |Minor |	Low      |PDB EE           |
      |Lithuania                       |No               |Personal Data Breach \| Lithuania                              |Minor   |Minor |	Low      |PDB LT           |

#  @PlazaPDBPending
#  Scenario Outline: Plaza PDB Pending
#
#    Given user is on the Plaza login page
#    When user enters username "testauto" and password as "test123" and clicks on login
#    Then user should see the plaza home page
#    And user clicks on plaza portal
#    When user clicks support on plaza homepage
#    And user clicks on "SUBMIT A TICKET"
#    And user switches to window 1
#    Then user validates PDB submit form opens
#    And user selects service area as "Security"
#    And user selects service as "Personal Data Breach"
#    Then user enters PDB date and time as current date and time
#    And user selects PDB effected country "<PDB Affected Country>"
#    And user selects nature and content as "Address"
#    And user selects affected persons as "<Number of Persons>"
#    And user selects plaza affected persons as other
#    And user enters "Test Data" under Affected persons name and unique id
#    And user clicks on submit button on plaza form
#    And user gets plaza request id
#    And user clicks on plaza request id
#    And user validates internal case management form opens
#    And user waits 40 secs
#    And user clicks on main page refresh
#    Then user should see incident ticket update in plaza
#    Then user opens new tab
#    And user switches to window 2
#    Given user is on the OneWorkflow login page
#    When user logs in with valid username "PlazaTest" and password as "Test@1234"
#    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user selects search menu as "Open Search Form:Trouble Event"
#    And user switches to window 3
#    Then user should see blank trouble search form
#    When user enters plaza incident ticket
#    And user should see plaza incident ticket
#    When user changes status to "Pending"
#    And user enters on hold to date 2 minutes in the future
#    And user selects on hold reason as "Waiting for Customer Info"
#    Then user clicks on save button
#    And user validates ticket status as "Pending"
#    And user switches to window 1
#    And user waits 6 secs
#    And user clicks on main page refresh
#    And user should see OW manual notification in plaza ticket as "Waiting for Customer Info"
#    And user switches to window 3
#    Then user waits for 9 minutes
#    And user clicks on ticket refresh button
#    And user validates ticket status as "Assigned"
#
#    Examples:
#      |PDB Affected Country             |Number of Persons|Title                                                          |Priority|Impact|Importance|AssignedProfile  |
##      |Sweden                          |Yes              |Personal Data Breach \| Sweden                                 |Major   |Major |  High    |PDB Control Center|
#      |Sweden                          |No               |Personal Data Breach \| Sweden                                 |Minor   |Minor |	Low      |PDB SE           |
#
#
#
#



