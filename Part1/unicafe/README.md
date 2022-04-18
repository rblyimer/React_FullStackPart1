## Exercises 1.6.-1.14.

Submit your solutions to the exercises by first pushing your code to GitHub and then marking the completed exercises into the exercise submission system.

Remember, submit all the exercises of one part in a single submission. Once you have submitted your solutions for one part, you cannot submit more exercises to that part any more.

Some of the exercises work on the same application. In these cases, it is sufficient to submit just the final version of the application. If you wish, you can make a commit after every finished exercise, but it is not mandatory.

WARNING create-react-app will automatically turn your project into a git-repository unless you create your application inside of an existing git repository. Most likely you do not want each of your projects to be a separate repository, so simply run the rm -rf .git command at the root of your application.

In some situations you may also have to run the command below from the root of the project:
rm -rf node_modules/ && npm i

## 1.6: unicafe step1
Like most companies, Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.
Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

## 1.7: unicafe step2
Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

## 1.8: unicafe step3
Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

Remember that components should not be defined inside other components:

## 1.9: unicafe step4
Change your application to display statistics only once feedback has been gathered.

## 1.10: unicafe step5
Let's continue refactoring the application. Extract the following two components:

Button for defining the buttons used for submitting feedback
StatisticLine for displaying a single statistic, e.g. the average score.
To be clear: the StatisticLine component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:

## 1.11*: unicafe step6
Display the statistics in an HTML table, so that your application looks roughly like this: