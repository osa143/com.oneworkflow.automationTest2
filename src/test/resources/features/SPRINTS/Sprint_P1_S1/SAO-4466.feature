@SAO-4466

  Feature: Update the mobile Priority Matrix
    Scenario Outline: Update the mobile Priority Matrix

      Given user has access to FM system
      When user generates "<Alarm>"
      And user logs into FM system with valid username/password
      Then user should see generated alarm
      When user generates a ticket towards OW from this alarm
      And user logs into OW with valid username/password
      Then user searches for ticket with generated alarm
      And user validates alarm impact as "<Impact>"
      And user validates CI importance as "<Importance>"
      And user validates ticket priority as "<Priority>"

      Examples:
      |Alarm|Impact|Importance|Priority|
      |     |      |          |        |

