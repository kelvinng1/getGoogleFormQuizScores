# Get Quiz Scores from Google Form

Purpose of this Google Script is to extract the Scores of each question per each response from Google Form / Quiz.
This function is **NOT available** in Google Form nor in any add-on. As of 2020-10-16, Google Form can only provide the total score per response in Google Sheets.

**Installation**

To use the script, you need to copy this script into the *Script Editor* of the Form.
The first time you install the script in the form you will need to give permissions to run the script. Permissions included reading data from your form, writing file to your Google Drive, etc.

**Usage**

Simply execute the script **function getGoogleFormQuizScores()** inside the *Script Editor* and it will create a file named *<your form name> Scores.csv* file. This file is in CSV (Comma Separated Values) format.

Inside this CSV file, it will list out either the answer or the score of the question and separte them by a comma. Each response will be separated by a newline. All the commas **","** inside an answer will be converted to a dash **"-"**.


If the answer of the question do not count as a score (Max Score = 0), the script will return the answer insead of the score of the question. This can be used for questions like : your name, your email address ... etc.

**Reference:**

This Script is based on **How to Get the Quiz Score in Google Forms with Apps Script** 
https://www.labnol.org/code/google-quiz-score-200301

*current folder name in google script, google drive? How?*
https://stackoverflow.com/questions/52196752/current-folder-name-in-google-script-google-drive-how

*how to update google drive text file via google script?*
https://stackoverflow.com/questions/35865273/how-to-update-google-drive-text-file-via-google-script

