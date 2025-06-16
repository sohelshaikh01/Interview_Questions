# Neogcamp 30 Days Javascript Practice

1. Calculator - Medium
Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.


2. Font Resizer - Medium
Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.


3. Heading Resizer - Easy++
    Resize Heading with Buttons
Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.


4. Color Changer - Easy++
Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.


5. Highest Marks - Medium
Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?


6. Loading Gayab - Simple 
    Text (element) display block text = ""
Create a web app with a button loaded. Show a text loading... on a web app. However, hide it if I click on the button loaded.


<!-- API Related-->
7. Api working with Age - Medium
    function to return prompt text -> api
Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.
'https://api.agify.io/'

8. Api Error Message - Medium
    Showing Api Error
Here's an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message. 'https://datausa.io/api/data'

9. Password Checker App - Medium++
    Valid Password and Status
1. Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success.
2. Make the submit button disabled.
3. Make the input field green or red depending on input.
BONUS: Transfer text in password field to password protected text.


<!-- Button & CSS Styles -->
10. Simple Button - Easy
    Style the Button
- Show me your portfolio. Okay, I like the button you have made. Can you re create the button without looking at source code? You're free to Google though.


11. CSS h1 h2 & links - Easy++
    Styles and Fonts
- Create color variables in CSS. Two colors: primary and secondary. Now make your h1 of primary color, h2 of secondary color. Make two buttons, primary and secondary using the same color. Can you also set a font from Google Font?


12. Age, Name, Power & Yuga - Medium++
    Calculate Score By Adding Name Length and Power
- Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

13. Fake News Detector - Medium++
    Fake if From Selected Sites
- Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

14. Border Resizer - Easy
    Set Border Width to 5px, 10px
- Create a web app and render your name using any heading or paragraph tag.
- It should have a border of 1px around it. Create 2 buttons, '5px' and '10px' below your name. The width of border should change to 5px and 10px by clicking respective buttons.

15. Fun With Neog - Easy
    Show Text of People Who's Name Match
- Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type -
- "Tanvi" - then show, "She is the best CEO ever!"
- "Tanay" - then show, "He is our FUNNY mentor!"
- "Swapnil" - then show, "He helps us CONQUER jobs!"
- "Akanksha" - then show, "She is our CHEERFUL Interviewer!"

<!-- API Related -->
16. Movies API - Easy++
    Fetching Data with Params
- Create 2 buttons with text YJHD and ZNMD. At the click of a button, call the given API with the query as same as the button text, and display the message you get on the screen.
- Follow Up: Instead of using calling the fetch function twice in both events(clicking of buttons), enclose it in a different function so that it can be used accordingly in both areas.
- API -
https://mock-practice.prakhar10v.repl.co/bollywood?name=
- Eg - Clicking on the button YJHD will make a call to
https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD


<!-- Style Changing -->
17. Log Warn Error - Easy
    Change Text Color on Different Statuses
- Take an input from the user in text format.
- Have 3 buttons with the names of "Log" ,"Warn" and "Error".
- If user clicks on "Log" button then the text entered by user will be shown in black color.
- Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively.

<!-- API Related -->
18. API Testing - Easy++
    Show API Result Status in Box
- Here's an API Link: https://mystery-api.kushanksriraj.repl.co/get
- This API link can give two errors, either 404, or 401.
- If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.
- Follow Up question: If the status is 200 then show the message "API is working"

<!-- Password Checker 2.0 -->
19. Password Checker 2.0 - Medium
    Validate that password not contains name
Create a web app, where I input my name, and then I input a password.
If the password contains the input name in it, show an error message "Password can't have name"
**Hint provided:** use .includes function

20. Greater Input - Easy 
    Check Greater Number and Change Background
Create two input fields where users can input numbers. Highlight the input field whose value is more (You can change the background colour for highlighting).
Also, print a message saying which number is the highest.
HOW TO CODE IT WITHOUT USING BUTTON ELEMENT

<!-- API Related -->
21. OTP Validator
    Match OTP Provided By API
- Here is an API: https://otpgenerator.ishanjirety.repl.co/get-otp?name= . You will enter a name as input from your app and send this API a request with the name along with it (this will be the final URL : https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered) on button click . In the response you will get an OTP which should be shown on the screen.
- Followup1: Make another input section that asks the user to guess the OTP and for checking whether the guess is equal to the actual one or not add a button "Validate" which on clicking shows the message "Success " or "Failure" depending .  Response is coming in the form of Name-OTP format so something like Pratyush-570928.So compare the OTP value from the response as well as the input which is being entered
- Followup2: Change the color of validate message to GREEN when success comes up and change it to RED if failure comes up on click of Validate Button.

22. Twitter - Medium++
    Validate Required Text Character
- Create a web app to simulate the character counter functionality of Twitter. When user starts to type something, counter should starts to decrease from 30. When counter reaches to 15, show it in yellow till 0. When counter reaches to 0, show it in red till infinite -ve number ( no min limit ). Now create a button. On clicking the button, show the input text on web page. Also, when counter is less than 0, disable the button.

<!-- Styles Changing -->
23. Style Change
    Change Text in Different Styles
- Create an Input Element, display the text entered in it, in an outside div. Now Create three buttons, with the names `Bold`, `Italics` and `Underline`. And clicking on the button will apply the respective style to the text present in output div.

24. Text to Number - Medium
    Check for Number of not
- Take some input from the user. the input HTML element must be of type text attribute. Make the input type number, without using the type number attribute or any attribute related function.

25. Vowels and Consonants - Medium++
    Number of Vowels and Consonants in Text
- Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)

26. Color Changer - Medium++
    Auto Change Background with SetInterval
- Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.

27. Reverse String - Easy
    String Reverse Using JS Function
- Create a web app where I can input a text. Now reverse the text and on clicking the button, show the output.

28. Heading Resizer 2.0 - Easy
    Resize Heading similar as Earlier Way
- Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

<!-- API Related -->
29. Error API - Easy++
    Show Error Return By API
- Here' an API. It will give an error. Write a web app, call this API and read the error message. Show the name of the error (not whole error). API - [https://randomsuser.me/api/](https://randomsuser.me/api/)

30. Random Guesser - Easy
    Guess Number Between 1 to 10
- Create a game (Guess The Number) where user has to guess the random number range from 1 to 10. User will input a number between 1 to 10 . On clicking the button, show the user whether he/she has guess the number or not.


## Extra Questions

Question 1 - Create a web app where I can input a text. Now, If the number of characters is divisible by 3 the text color should change to red.

Question 2 - Create a counter with two buttons + and -. On clicking these buttons the number should increment and decrement respectively from the given value. Show error when you give any input other than number.

Question 3 - Create a counter app which consist of counter value with two buttons + and -. On clicking these buttons the number should increment and decrement respectively. Add on make '-' button disable while counter value is 0, only enable when the counter value is greater than 0 and again disable '-' button when counter value becomes 0.

Question 4 - Create a web app, which On the Click of a button fetches data from the provided API and from the data, displays the item with the highest price on the screen, below the button.

API - https://mock-practice.prakhar10v.repl.co/items

Question 5 - Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)

Question 6 - Create a web app, which on the click of a button fetches and show profile photo of your github profile and all your repositories in ordered list.

API - https://api.github.com/users/your_username

Question 7 - Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.
