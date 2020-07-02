@SAO-4555_SAO-4556

  Feature: User Profile Development - User forms and workflow
    Scenario: User Profile Development - User forms and workflow

      Given user is on the OneWorkflow login page
      When user logs in with valid username "fhr501" and password as "2020B@dger"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Then user selects "Administration" as "People:Users"
      And user switches to window 1
      Then user console should be opened in new window
      Then user selects user "adg862" in user table
      And user clicks open user button
      And user information window should be opened
      Then user clicks on "Trust Principles" tab
     # And user validates countries "Sweden:Finland:Denmark:Norway:Lithuania:Estonia" are present
      Then user selects country "Denmark"
      And user clicks add right button
      #Then user validates "" has been added to selected trust principles
      Then user closes user information window
      Then user selects user "adg862" in user table
      And user clicks open user button
      Then user clicks on "Trust Principles" tab
      And user validates country "Denmark" has been added to trust principles table
      Then user clicks remove left button
      And user validates "" has been removed

