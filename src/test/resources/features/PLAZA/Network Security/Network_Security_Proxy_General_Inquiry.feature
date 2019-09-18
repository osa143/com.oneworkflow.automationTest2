@Network_Security_General_Inquiry @PLAZA
  Feature: Network Security General Inquiry
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks "Firewall & Network"
      When user clicks on "Proxy" pebble
      Then user should see "Proxy" form
      When user selects role dropdown as "Application Operation Engineer"
      And user selects Service Request as "Resource Request"
      And user enters Network Security Proxy Inquiry request as "Test1 Network Security Proxy/Request"
      Then user enters Network Security Proxy Inquiry description as "Test1 Network Security Proxy/Description"
      And user enters additional comments as "Network Security Proxy - Test1/AC"