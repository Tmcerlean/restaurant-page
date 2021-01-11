// Module Imports
import { render, startButtonAnimation } from "./homepage";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";
import { renderContact } from "./contact";
import { renderTab } from "./tab";


// Elements
const tab = document.querySelector(".tab-container");
const startButton = document.querySelector(".start-button");


// Functions
const removeTabContent = function () {
    tab.textContent = '';
}


// Imported Module Functions
render();
renderTab();
startButtonAnimation;
renderMenu;
renderAbout;
renderContact;


// Menu Event listener
document.addEventListener("click", (e) => {

    startButton.style.display = "none";

    if ((e.target.className == 'menu-item') && (e.target.innerHTML == 'Menu')) {

        if (tab.classList.contains("transition-on")) {

            // Remove tab content
            removeTabContent();

            // Populate with content
            renderMenu();
            
        }
        else {

            // Remove tab content
            removeTabContent();

            // Populate with content
            renderMenu();

            tab.classList.add("transition-on");

        }
    }
    else if ((e.target.className == 'menu-item') && (e.target.innerHTML == 'About')) {

        if (tab.classList.contains("transition-on")) {

            // Remove tab content
            removeTabContent();

            // Populate with content
            renderAbout();
            
        }
        else {

            // Remove tab content
            removeTabContent();

            // Populate with content
            renderAbout();

            tab.classList.add("transition-on");

        }
    }
    else if ((e.target.className == 'menu-item') && (e.target.innerHTML == 'Contact')) {
        
        if (tab.classList.contains("transition-on")) {

            // Remove tab content
            removeTabContent();

            // Populate with content
            renderContact();
            
        }
        else {

            // Remove tab content
            removeTabContent();

            // Populate with content
            renderContact();

            tab.classList.add("transition-on");

        }
    }
    else {
        return;
    }
})

