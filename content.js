
//Pseudocode:
//Create a folder and add the required files in VS Code:
//manifest.json, content.js, index.html, icon.png
//Build the extension by writing code in manifest.json and content.js
//add icon for extension
//In Chrome, chrome://extensions
//Turn on Developer Mode
//Click "Load unpacked" and upload my FeedbackGPT folder, I have to make sure that my extension is loaded and working correctly
//Open ChatGPT and ask a simple question, like: "Give one sentence and fix the grammar.
//Get all the elements that contain ChatGPT's messages, look for class name with "markdown" 
//Display "step 1" in the console to check if the code is running and working correctly
//Change the text of the first ChatGPT message to my new message
//Replace the original ChatGPT response with my new message
//Highlight edited parts using colors (not done yet)
//few more features are still left to be developed. This is just my prototype. 


//Values, Data Types, and Operations
//Using a string value and calling a method, console.log is a function that outputs string data to the console
//Checking output in chat gpt's console
console.log("step 0");


//Working with Loops
//This is a NodeList, similar to an array, and i am looping through DOM changes via MutationObserver callbacks
const observer = new MutationObserver(() => {
  const gptMessages = document.querySelectorAll('div[class*="markdown"]');
  //Checking output in chat gpt's console
  console.log("step 1");

//Control Structures and Logic
//Using an "if" statement to check if any ChatGPT messages are found
  if (gptMessages.length > 0) {
    //Using Arrays: Accessing the first item in the array
    const firstResponse = gptMessages[0];
    //Checking output in chat gpt's console
    console.log("step 2");

    //Stringing Characters Together: Setting new string text into the element using innerText
    firstResponse.innerText = "Hello! This is my new message injected from VS Code.";

    //Changing style and content to make it editable and visible easily
    firstResponse.setAttribute("contenteditable", "true");
    firstResponse.style.border = "2px dashed green";
    //Checking output in chat gpt's console
    console.log("step 3");

    //Once done, stop observing
    observer.disconnect();
  }
});

//Start watching the page for new messages
observer.observe(document.body, {
  childList: true,
  subtree: true
});