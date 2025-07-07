Feature: Parabank BillPay
  As a registered user of Parabank
  I want to log in to the banking portal
  So that I can access my account dashboard
  and Pay Bill

  Background:
    Given I am on the request loan Service page


  Scenario: User successfully Apply for loan and fill form with valid data
    Given the user navigates to the request loan page
    When the user fills out loan amount 100 and Apply for loan
    Then Loan Status should be Approved
    Then Congratulations, your loan has been approved is Displayed

