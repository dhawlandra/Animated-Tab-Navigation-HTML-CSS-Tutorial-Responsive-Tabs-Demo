// script.js
function openTab(event, tabName) {
    var i, tabContent, tabLinks;
  
    // Hide all tab contents
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
      tabContent[i].classList.remove("active", "from-bottom", "from-left", "from-right");
    }
  
    // Remove the active class from all tab links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    // Show the current tab content and add an active class to the button that opened the tab
    var currentTabContent = document.getElementById(tabName);
    currentTabContent.style.display = "block";
    currentTabContent.classList.add("active");
  
    if (tabName === "Tab1") {
      currentTabContent.classList.add("from-bottom");
    } else if (tabName === "Tab2") {
      currentTabContent.classList.add("from-left");
    } else if (tabName === "Tab3") {
      currentTabContent.classList.add("from-right");
    }
  
    event.currentTarget.className += " active";
  }
  

  // Existing openTab function remains unchanged

function showThankYou() {
    var i, tabContent, tabLinks;
  
    // Hide all tab contents
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
      tabContent[i].classList.remove("active", "from-bottom", "from-left", "from-right");
    }
  
    // Remove the active class from all tab links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    // Show the Thank You tab content and add an active class to the button
    var thankYouContent = document.getElementById("ThankYou");
    thankYouContent.style.display = "block";
    thankYouContent.classList.add("active");
  
    // Update the active class for the Thank You button
    var thankYouButton = document.querySelector(".tab-link.thank-you");
    thankYouButton.classList.add("active");
  }
  