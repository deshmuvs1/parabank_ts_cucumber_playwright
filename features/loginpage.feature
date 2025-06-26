Feature: Parabank Login Functionality

  As a registered user of Parabank
  I want to log in to the banking portal
  So that I can access my account dashboard

  Background:
    Given I am on the Parabank login page

  Scenario: Successful login with valid credentials
    When I enter valid username "playwright@test.com" and I enter valid password "playwright@test.com"
    And I click on the login button
    Then I should be redirected to the account overview page
    And I should see Accounts Overview

  # Scenario: Unsuccessful login with invalid credentials
  #   When I enter invalid username "wronguser"
  #   And I enter invalid password "wrongpass"
  #   And I click on the login button
  #   Then I should see an error message "The username and password could not be verified."

  # Scenario: Attempt login with blank credentials
  #   When I leave username and password fields blank
  #   And I click on the login button
  #   Then I should see an error message "Please enter a username and password."
