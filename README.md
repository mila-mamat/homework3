# Homework3 :Password Generator that meets user's requirements 
Create an application that generates a random password based on user-selected criteria. 

Users select password lenth (8-128) and character types to include in (lowercase, uppercase, numeric, and/or special characters)

## Problems to solve:
1. Identify criteria inputs. 
*  Password length is easy, turn the prompt input into numbers. 
*  Need to identify character types requested first and then find a way to choose from them.

2. Validate if password generated meets criteria. 
For example, if users request all character types and length of 8, the probability of getting a password that meets only 3 criteria is pretty high. 
* 10 numbers, 52 alphabet characters, 33 special charecters. it is not suprising if numbers is not included in a 8 charecter password. probability = (85/95)^8 = 0.41


## Methods might work
1. Generate first, validate later, redo if not qualified.
* Create a Bank = "", add criterias into the bank. eg: Bank = Uppercases + Special = "ABC...)&*"
* Randomly pick characters by Bank[random number], generate a password.
* Validate the password, regenrate a new one if it is not qualified 

Advantages: Script will be simple and neat.

Disadvantages: Probability of generating a bad password is pretty high, and need to repeat the method for many times.


2.  Force to meet criterias first, and then let the rest ransomly choose any types. .
* Indentify criterias (eg:uppercase, numbers, special), and force first couple words to choose one from each (first word from uppercase: Bank[0-25], second from numbers Bank[26-35], third from special Bank[36-68])
* Let the rest randomly choose from the Bank[0-68].

Advantages: Can ensure criterias are meet.

Disadvantages: Script will be complicated to cover all kind of users selects; Fixed patterns for first couple words.  


3. Randomly choose character type first, and random pick within the type.(two step randomization)
* Identify criterias, add it to typeRequested=[]. eg: typeRequested = [upper, lower, special]
* Random pick from types, typeRequested[random number]. eg: typeRequested[0] = upper
* Random pick within type above. eg: upper[4]=D
* Repeat the stapes above to generate password
* Validate the password, regenerate if not qualified

Advantages: Script is much simpler than the second one. Probability of not meeting critetia is much lower than first one. 

Disadvantages: Script is still pretty long and complicated. 


## Final result
I used the third method above, the best solution I have so far. The test result is up to satisfaction. 



