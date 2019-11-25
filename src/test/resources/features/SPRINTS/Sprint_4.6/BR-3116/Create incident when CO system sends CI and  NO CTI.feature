Feature: Today in the customer operations interface,
  when a create incident message is sent to one workflow with both the CTI values and a CI,
  then the incident is created with the CTI values first (and assignment rules trigger)
  but then the CTI values get updated based on the CI attached.
  It is requested that if a customer operations send CTI values that they do not get overwritten.


Scenario: Create incident when CO system sends NO CTI Details and with  CI
Given user have access to CO system and Ow
When user sends create incident message No CTI and with CI details
Then incident should be created in OW
And CTI details are derived from the CI details
And CTI detilas should be same as primary CI CTI details