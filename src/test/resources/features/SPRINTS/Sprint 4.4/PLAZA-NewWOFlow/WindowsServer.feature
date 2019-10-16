@WindowsServer @PlazaWONew
  #Have added ID's for the fields as well, should be correct

Feature: New WO flow Plaza
  Scenario: Windows Server - New WO flow Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    When user enters "Ask" in plaza search box
    And user opens internal case form
    Then user should see internal case form appear
      #select2-chosen-203
    And user selects "IT Infrastructure" under Service area dropdown
      #select2-chosen-204
    And user selects "Compute & Operating System" under Service area category dropdown
      #sp_formfield_sr_gen_v_request
    And user enters "Test Request" in the plaza request field
      #s2id_sp_formfield_sr_gen_v_add_ci
    And user enters "cc100cgas001" in the plaza CI field
      #select2-chosen-218
    And user selects "Windows Server" under type of server dropdown
      #sp_formfield_sr_gen_v_description
    And user enters "Test Description" in the plaza description field
      #Not sure if there's an ID for submit button
      #//div[@class='ng-scope']//button[@name='submit'][contains(text(),'Submit')]
    Then user clicks on the plaza submit button
    And user should see ICM number and stores value
      #reqnum
    Then user clicks on ICM number
    And user validates internal case management form opens
      #post-input
    When user enters "Test update" in the ticket timeline
      #//div[@class='input-group']//span[@class='input-group-btn']
    And user clicks on plaza send button
      #//div[@class='timeline-panel']
    Then user validates plaza ticket has update to timeline

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user switches to window 1
    Then user should see blank work order form
    When user enters ticket id as ""
    Then user should see plaza work order
      #will need to get the information plaza is sending to validate if its correct
    And user validates ticket information
