Feature: Parabank BillPay
  As a registered user of Parabank
  I want to log in to the banking portal
  So that I can access my account dashboard
  and Pay Bill

  Background:
    Given I am on the Bill Payment Service page


  Scenario: User successfully submits the Bill Payment form with valid data
    Given the user navigates to the Bill Payment page
    When the user fills out the form with valid details
    And the user clicks on the "Send Payment" button
    Then the payment should be submitted successfully