# Homework3 :Password Generator that meets user's requirements 
Create an application that generates a random password based on user-selected criteria. 

Users select password lenth (8-128) and character types to include in (lowercase, uppercase, numeric, and/or special characters)


## Problems to solve:
### 1. Identify criteria inputs. 
*  Password length is easy, turn the prompt input into numbers. 
*  Need to identify character types requested first and then find a way to choose from them.

### 2. Validate if password generated meets criteria. 

For example, if users request all character types and length of 8, the probability of getting a password that meets only 3 criteria is pretty high: 

10 numbers, 52 alphabet characters, 33 special charecters. It is not suprising if numbers is not included in a 8 charecter password. probability = (85/95)^8 = 0.41


## Methods might work
### 1. **Create a bank with characters required, random select among, validate, re-select if not qualified.**
+ Create a Bank = "", add criterias into the bank. eg: Bank = Uppercases + numbers = "ABC...0123.."
+ Randomly pick characters by Bank[random number], generate a password.
+ Validate the password, regenrate a new one if it is not qualified 

-- **Advantages:** Script will be simple and neat.

-- **Disadvantages:** Probability of generating a bad password is pretty high, and might need to regenerate the password for multiple times.


### 2.  **Force to meet criterias first, and then let the rest ransomly choose any characters.**
+ Indentify criterias (eg:uppercase, numbers, special), and force first couple of letters to choose one from each type (first letter from uppercase: Bank[0-25], second from numbers: Bank[26-35], third from special: Bank[36-68])
+ Let the rest randomly choose from the Bank[0-68].

-- **Advantages:** Can ensure the criterias are meet.

-- **Disadvantages:** Script will be complicated to cover all kind of users selects; Fixed patterns for first couple of letters.  


### 3. **Randomly choose character type first, and random pick character within the type.(two step randomization)**
* Identify the criterias, add it to typeRequested=[]. eg: typeRequested = [upper, lower, special]
* Random pick from types above, typeRequested[random number]. eg: typeRequested[0] = upper
* Random pick within type selected. eg: upper[random number]= ....
* Repeat the steps above to generate a password
* Validate the password, regenerate if it is not qualified

-- **Advantages:** Script is much simpler than the second one. Probability of not meeting critetia is much lower than first one (around 0.1) .

-- **Disadvantages:** Script is still pretty long and complicated. 


## Final result
I used the third method above, the best solution I have so far. The test result is up to satisfaction. 

Link to the final website: https://mila-mamat.github.io/homework3/Develop/index.html


## Extra work

Attached is my preliminary pseudocode for **method 1**, before I decided to use method 3. 

![method 1 pseudocode](https://github.com/mila-mamat/homework3/blob/master/Assets/IMG_6185.jpg)

