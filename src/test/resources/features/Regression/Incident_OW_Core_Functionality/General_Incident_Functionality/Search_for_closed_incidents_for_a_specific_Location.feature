@Search_for_closed_incidents_for_a_specific_Location @Incident
  #passed
  #needs to create 6 tickets for different countries if necessary
  Feature: closed incident location search
    Scenario: user can search for all countries closed incident tickets

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
#      When user clicks on create trouble event
#      And user switches to window 1
#      Then user clicks on sweden checkbox under affected BU's
#      And user enters "Test Ticket - Closed Location Search(Sweden)" in Title field
#      And user selects request type as "Customer" on trouble event page
#      And user enters description as "Test Ticket - Closed Location Search(Sweden)"
#      When user clicks on location under sections
#      And user enters "SE_" within the location ID+ field
#      Then user switches to frame
#      And user selects site "SE_Site_126608"
#      And user clicks on ok button on location search
#      Then user clicks on save button
#      And ticket should be created and status should be assigned
#      When user changes status to "Cleared" on trouble event page
#      And user selects fault position as "N/A:N/A" on trouble event page
#      And user selects cause as "N/A:N/A:N/A" on trouble event page
#      And user selects action dropdown as "N/A:N/A" on trouble event page
#      And user enters closure info as "Test Ticket"
#      Then user enters event end time as current time
#      And user clicks on save button
#      Then user validates ticket status as "Cleared"
#      When user changes status to "Closed" on trouble event page
#      And user clicks on save button
#      Then user validates ticket status as "Closed"
#      Then user closes current tab
#      And user switches to window 0
#      When user clicks on create trouble event
#      And user switches to window 1
#      Then user clicks on denmark checkbox under affected BU's
#      And user enters "Test Ticket - Closed Location Search(Denmark)" in Title field
#      And user selects request type as "Customer" on trouble event page
#      And user enters description as "Test Ticket - Closed Location Search(Denmark)"
#      When user clicks on location under sections
#      And user enters "DK_" within the location ID+ field
#      Then user switches to frame
#      And user selects site "DK_Site_S0001"
#      And user clicks on ok button on location search
#      Then user clicks on save button
#      And ticket should be created and status should be assigned
#      When user changes status to "Cleared" on trouble event page
#      And user selects fault position as "N/A:N/A" on trouble event page
#      And user selects cause as "N/A:N/A:N/A" on trouble event page
#      And user selects action dropdown as "N/A:N/A" on trouble event page
#      And user enters closure info as "Test Ticket"
#      Then user enters event end time as current time
#      And user clicks on save button
#      Then user validates ticket status as "Cleared"
#      When user changes status to "Closed" on trouble event page
#      And user clicks on save button
#      Then user validates ticket status as "Closed"
#      Then user closes current tab
#      And user switches to window 0
#      When user clicks on create trouble event
#      And user switches to window 1
#      Then user clicks on estonia checkbox under affected BU's
#      And user enters "Test Ticket - Closed Location Search(Estonia)" in Title field
#      And user selects request type as "Customer" on trouble event page
#      And user enters description as "Test Ticket - Closed Location Search(Estonia)"
#      When user clicks on location under sections
#      And user enters "EE_" within the location ID+ field
#      Then user switches to frame
#      And user selects site "EE_Site_KARDL"
#      And user clicks on ok button on location search
#      Then user clicks on save button
#      And ticket should be created and status should be assigned
#      When user changes status to "Cleared" on trouble event page
#      And user selects fault position as "N/A:N/A" on trouble event page
#      And user selects cause as "N/A:N/A:N/A" on trouble event page
#      And user selects action dropdown as "N/A:N/A" on trouble event page
#      And user enters closure info as "Test Ticket"
#      Then user enters event end time as current time
#      And user clicks on save button
#      Then user validates ticket status as "Cleared"
#      When user changes status to "Closed" on trouble event page
#      And user clicks on save button
#      Then user validates ticket status as "Closed"
#      Then user closes current tab
#      And user switches to window 0
#      When user clicks on create trouble event
#      And user switches to window 1
#      Then user clicks on sweden checkbox under affected BU's
#      And user enters "Test Ticket - Closed Location Search(Norway)" in Title field
#      And user selects request type as "Customer" on trouble event page
#      And user enters description as "Test Ticket - Closed Location Search(Norway)"
#      When user clicks on location under sections
#      And user enters "NO_" within the location ID+ field
#      Then user switches to frame
#      And user selects site "NO_Site_VSF087"
#      And user clicks on ok button on location search
#      Then user clicks on save button
#      And ticket should be created and status should be assigned
#      When user changes status to "Cleared" on trouble event page
#      And user selects fault position as "N/A:N/A" on trouble event page
#      And user selects cause as "N/A:N/A:N/A" on trouble event page
#      And user selects action dropdown as "N/A:N/A" on trouble event page
#      And user enters closure info as "Test Ticket"
#      Then user enters event end time as current time
#      And user clicks on save button
#      Then user validates ticket status as "Cleared"
#      When user changes status to "Closed" on trouble event page
#      And user clicks on save button
#      Then user validates ticket status as "Closed"
#      Then user closes current tab
#      And user switches to window 0
#      When user clicks on create trouble event
#      And user switches to window 1
#      Then user clicks on sweden checkbox under affected BU's
#      And user enters "Test Ticket - Closed Location Search(Finland)" in Title field
#      And user selects request type as "Customer" on trouble event page
#      And user enters description as "Test Ticket - Closed Location Search(Finland)"
#      When user clicks on location under sections
#      And user enters "FI_" within the location ID+ field
#      Then user switches to frame
#      And user selects site "FI_Site_maarianvaara_keskus"
#      And user clicks on ok button on location search
#      Then user clicks on save button
#      And ticket should be created and status should be assigned
#      When user changes status to "Cleared" on trouble event page
#      And user selects fault position as "N/A:N/A" on trouble event page
#      And user selects cause as "N/A:N/A:N/A" on trouble event page
#      And user selects action dropdown as "N/A:N/A" on trouble event page
#      And user enters closure info as "Test Ticket"
#      Then user enters event end time as current time
#      And user clicks on save button
#      Then user validates ticket status as "Cleared"
#      When user changes status to "Closed" on trouble event page
#      And user clicks on save button
#      Then user validates ticket status as "Closed"
#      Then user closes current tab
#      And user switches to window 0
#      When user clicks on create trouble event
#      And user switches to window 1
#      Then user clicks on sweden checkbox under affected BU's
#      And user enters "Test Ticket - Closed Location Search(Lithuania)" in Title field
#      And user selects request type as "Customer" on trouble event page
#      And user enters description as "Test Ticket - Closed Location Search(Lithuania)"
#      When user clicks on location under sections
#      And user enters "LT_" within the location ID+ field
#      Then user switches to frame
#      And user selects site "LT_Site_888"
#      And user clicks on ok button on location search
#      Then user clicks on save button
#      And ticket should be created and status should be assigned
#      When user changes status to "Cleared" on trouble event page
#      And user selects fault position as "N/A:N/A" on trouble event page
#      And user selects cause as "N/A:N/A:N/A" on trouble event page
#      And user selects action dropdown as "N/A:N/A" on trouble event page
#      And user enters closure info as "Test Ticket"
#      Then user enters event end time as current time
#      And user clicks on save button
#      Then user validates ticket status as "Cleared"
#      When user changes status to "Closed" on trouble event page
#      And user clicks on save button
#      Then user validates ticket status as "Closed"
#      Then user closes current tab
#      And user switches to window 0
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      Then user should see blank trouble search form
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "SE_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "SE" tickets
      And user clicks on main page refresh
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "FI_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "FI" tickets
      And user clicks on main page refresh
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "LT_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "LT" tickets
      And user clicks on main page refresh
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "NO_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "NO" tickets
      And user clicks on main page refresh
      And user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "DK_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "DK" tickets
      And user clicks on main page refresh
      And user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "EE_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "EE" tickets


      

