@Login_BMC_Helix
Feature: BMCHelixLogin
  In order to create or modify different tickets
  I want to login to BMC Helix


    Background: Common Steps
    Given I navigate to login page

  @Login_Positive @Regression
  Scenario: Login to BMC Helix Positive

    When I enter username and password
    And I click on login button
    Then I should see BMC helix homepage
    When I click on logout
    Then I should be logged out successfully

  @Login_Alternate @Regression
  Scenario: Login to BMC Helix Alternative

    When I enter username as "Allen" and password as "@A9P-WwA7_DDMTJ_"
    And I click on login button
    Then I should see BMC helix homepage
    When I click on logout
    Then I should be logged out successfully

  @Login_Negative
  Scenario: Login to BMC Helix Negative
            In order to create or modify different tickets
            I want to login to BMC Helix with different users
    When I enter username as "Allen" and password as "A9P-WwA7_DDMTJ_"
    And I click on login button
    Then I should see error message









