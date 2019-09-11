@Pollux-PROD @PLAZA
  Feature: Pollux prod plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management" button
      And user clicks on "Order" button
      And user clicks "Storage & Data Protection" button
      Then user should see "Storage & Data Protection" IT Pebbles
      When user clicks on "Pollux" pebble
      Then user should see "Pollux" form
      When user selects Role dropdown as "Application Operation Engineer"
      And user enters Pollux request as "Pollux-PROD - Test/Request"
      And user selects "Configuration" in the select request field
      And user selects all in the Environment field
      
