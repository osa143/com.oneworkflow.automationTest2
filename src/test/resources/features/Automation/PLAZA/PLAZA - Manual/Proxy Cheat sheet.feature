@ProxyCheatsheet
  Feature: Proxy Cheat sheet plaza form test
    Scenario: Proxy Cheat sheet plaza form test

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      And user enters "Proxy" in plaza search box
      And user clicks on the search button
      And user clicks on generally button
#      Then user validates "Forward proxy for servers cheat sheet" form opens
