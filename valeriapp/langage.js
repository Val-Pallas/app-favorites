// Get the dropdown menu and language-specific content elements
var dropdownMenu = document.querySelector(".dropdown-menu");
var languageContent = document.querySelectorAll(".language-content");

// Add an event listener to handle language selection
dropdownMenu.addEventListener("click", function(event) {
  if (event.target.classList.contains("dropdown-item")) {
    // Get the selected language
    var selectedLanguage = event.target.textContent.toLowerCase();
    
    // Hide all language-specific content
    languageContent.forEach(function(content) {
      content.style.display = "none";
    });
    
    // Show the selected language content
    var selectedContent = document.getElementById(selectedLanguage + "Content");
    if (selectedContent) {
      selectedContent.style.display = "block";
    }
  }
});
