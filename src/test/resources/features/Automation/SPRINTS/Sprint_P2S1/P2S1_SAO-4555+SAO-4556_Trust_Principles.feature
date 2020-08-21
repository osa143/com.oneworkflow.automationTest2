@SAO-4555_SAO-4556

  Feature: User Profile Development - User forms and workflow
    Scenario: Verify user Profile Development - User forms and workflow

      Given user is on the OneWorkflow login page
      When user logs in with valid username "fhr501" and password as "C0vidbadger"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects "Administration" as "People:Users"
      And user switches to window 1
      Then user console should be opened in new window
      When user selects user "adg862" in user table
      And user clicks open user button
      Then user information window should be opened
      When user clicks on "Trust Principles" tab
      Then user should see available trust principles as countries "Sweden:Finland:Denmark:Norway:Lithuania:Estonia"
      When user selects country "Denmark"
      And user clicks add right button
      Then user should see "Denmark" under selected trust principles
      And user closes user information window
      When user selects user "adg862" in user table
      And user clicks open user button
      And user clicks on "Trust Principles" tab
      Then  user should see "Denmark" under selected trust principles
      When user clicks remove left button
      Then user shouldn't see "Denmark" under selected trust principles
      And user closes user information window

