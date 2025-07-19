//async function fetchData() {  // creating async function to fetch data and from the API
//}

document.getElementById("sendBtn").addEventListener("click", () => {
  const newText = document.getElementById("newText").value;

  if (!newText.trim()) {
    alert("Please enter some text.");
    return;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.tabs.sendMessage(tab.id, {
      action: "updateContent",
      text: newText
    });
  });
});