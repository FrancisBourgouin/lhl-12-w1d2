# W1D2 - The Dev Workflow

## Review of the curriculum

Slides ! : https://docs.google.com/presentation/d/1m3R_aN4S5YoCBmXRbjaZQGatygWyZXYLcN-fkcP_HWA/edit?usp=sharing

## How to approach a problem

- Properly define our problem
- Make smaller goals out of the original one
- Don't stress if your original solution is not the best code written
- Refactor once your code is working, and make sure it keeps working

## Live coding !

We want to build a script that reads arguments in the terminal and gives us the sum.

- How many numbers ? (0 - big number (not infinite))
- How to capture arguments ? process.argv
- Return or print ? Functions should return a result, then we output that using console.log
- What language ? JavaScript ! :D
- Node vs JS ? Node will interpret the JavaScript code.

### What you should while I code

In a live demo, it's always better to look & understand the code being written and to participate in it's creation since it's more important to understand the why and how more than replicate without understanding what's happening.

### Demo with process.argv

Let's make our script, and refactor once we have a functionning script ! See file demo.js

### Why are you coding this ?

When you write code, it's important to understand why we are writing it. So don't hesitate to write your pseudo-code in comments then fill your pseudo code with working code. Also, sometimes it's tempting to use code found on the internet, but if you cannot explain simply in english what the method or function does, try to find another way or take the time to understand said method or function.

### Uh oh, errors :/

Errors are a part of a coder's life. They are there to help so take the time to read what the error is telling you, and understand what caused it to find the solution.

### How to search aka. how to word a problem

Once you encounter a problem, don't panic, it's normal, then explain to yourself the problem and use that explanation to formulate a good search to help you find a solution.

## Git workflow

Don't forget that your github account is your coder's portfolio, so it's always a good idea to commit often and write meaningful commit messages. A classic workflow from the creation of your project folder to publishing your changes is :

- git init (in your project folder)
- git remote add origin *URLOFYOURGITHUBREPOSITORY*
- git add . (to add everything, or name of the file instead of the .)
- git commit -m "MEANINGFUL MESSAGE"
- git push origin master

The last two steps should be done frequently, every time you completed a small goal in your project. 