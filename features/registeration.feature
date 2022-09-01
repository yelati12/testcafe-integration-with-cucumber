Feature: Registration Feature

As a vistor I can create a new account by the registration form

Scenario: New User Registration E2E Scenario
Given I open the registration page
When I select the gender
And  I enter First Name "Moataz"
And I enter Last Name "Nabil"
And I select Date of Birthday "5"
And I select Month of Birthday "May"
And I select Year Of Birth "1983"
And I enter Email "moataz222@test.com"
And I enter Password "123456"
And I enter Confirm Passowrd "123456"
And I click register button
Then successfull messgae is displayed












