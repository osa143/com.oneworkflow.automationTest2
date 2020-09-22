@AssignmentProfile

  Feature:
    Scenario:

      #Create TrueSight ticket with stub messages
      Given user is on OW login page and logs in with valid user
      Then agent console should be displayed
      And user opens ticket created from TrueSight
      Then user assigns ticket to "Backup"
      And user clicks save button
      Then assignment profile should be remain as "Backup" after saving

      #User creates second ticket from TrueSight

      Given user is on OW login page and logs in with valid user
      Then agent console should be displayed
      And user opens ticket created from TrueSight
      Then user clicks ack button
      And user assigns ticket to "Backup"
      Then user clicks save button
      And user validates assignment profile is saved as "Backup"