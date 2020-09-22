@ClearedBackToCCIT

  Feature:
    Scenario:

      #Creates TrueSight ticket with stubs

      Given user is on OW login page and logs in with valid user
      Then agent console should be displayed
      And user opens ticket created from TrueSight
      Then user assigns ticket to "Backup"
      And user clicks save button
      And user validates assignment profile is saved as "Backup"
      And user validates assignment timeline notification and assignment change in the agent console
      Then user changes status to cleared
      And user enters mandatory fields the clicks save
      Then user validates assignment as "Backup"
      And user validates assignment in agent console as "Backup"

#Creates TrueSight ticket with stubs

      Given user is on OW login page and logs in with valid user
      Then agent console should be displayed
      And user opens ticket created from TrueSight
      Then user assigns ticket to "Backup"
      And user clicks save button
      And user validates assignment profile is saved as "Backup"
      And user validates assignment timeline notification and assignment change in the agent console
      Then user clicks ack button
      And user changes status to cleared
      Then user enters mandatory fields and clicks save button
      Then user validates assignment as "Backup"
      And user validates assignment in agent console as "Backup"
