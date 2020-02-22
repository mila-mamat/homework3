# Homework3 :Password Generator meets criteria 
Create an application that generates a random password based on user-selected criteria. 

Users select password lenth (8-128) and character types to include in (lowercase, uppercase, numeric, and/or special characters)

## Thoughts before I start
There are 2 problems to solve:
1. Identify criteria inputs. 
*  Password length is easy, turn the prompt input into numbers. 
*  Need to identify character types requested first and then find a way to choose from types selected.

2. Validate if password generated meets criteria. 
For example, if users request all char type and length of 8, the probability of getting a password that meets only 3 criteria is pretty high. 
* 10 numbers, 52 alphabet characters, 33 special charecters. it is not suprising if numbers is not included in a 8 charecter password. probability = (85/95)^8 = 0.41


## Methods might work
1. Generate first, validate later, redo if not qualified.
* Create a Bank = "", add criterias into the bank. eg: Bank = Uppercases +Special = "ABC...)&*"
* Randomly pick characters by Bank[random], generate passwords.
* Validate the password, regenrate a new one if not qualified 

Advantages: script will be simple and neat.

Disadvantages: probability of regenerating password is pretty high.


2.  force to meet criterias first, and then let the rest ransomly choose any types. .
* indentify criterias (eg:uppercase, numbers, special), and force first couple words to choose one from each (first word from uppercase: Bank[0-25], second from numbers Bank[26-35], third from special Bank[36-68])
* let the rest randomly choose from the Bank[0-68].

Advantages: Ensure criterias are meet.

Disadvantages: Script will be complicated to cover all kind of users selects; Fixed patterns for first couple words.  


3. randomly choose character type first, and random pick within the type.(two step randomization)
* identify criterias, add it to type=[]. eg: type = [upper, lower, special]
* Random pick from types, type[random]. eg: type[0] = upper
* random pick within type above. eg: upper[4]=D
* repeat the stapes above to generate password
* validate the password, regenerate if not qualified

Advantages: script is much simpler than the second one. probability of not meeting critetia is really low. 

Disadvantages: Script is still pretty long and complicated. 



