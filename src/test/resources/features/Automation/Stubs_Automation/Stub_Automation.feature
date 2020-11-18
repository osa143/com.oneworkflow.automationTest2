@Run_Stub
   Feature: Stub automation
    Scenario: Send the request and get OP ticket


     Given user has access to Rest URL
     When user sends request to create incident
     Then OP ticket should be created
