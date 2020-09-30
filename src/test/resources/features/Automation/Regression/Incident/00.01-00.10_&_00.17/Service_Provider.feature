@Service_Provider_Validation

  Feature: Service provider field validation
    Scenario: Service provider field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      #Then user validates service provider availbility
      Then multiple statuses "Agile Network Systems:SOC Common:Tech Mahindra:Telia Company" should be available in "Service Provider" dropdown