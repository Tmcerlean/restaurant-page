const renderAbout = function () {

    // Tab
    let selectTab = document.querySelector(".tab-container");

    // Menu
    const menuDiv = document.createElement("div");
    const menuDivClass = document.createAttribute("class");
    menuDivClass.value = "menu";
    menuDiv.setAttributeNode(menuDivClass);
    selectTab.appendChild(menuDiv);

        // Menu Top
        const menuTopDiv = document.createElement("div");
        const menuTopDivClass = document.createAttribute("class");
        menuTopDivClass.value = "menu-top";
        menuTopDiv.setAttributeNode(menuTopDivClass);
        menuDiv.appendChild(menuTopDiv);

            // Menu Header
            const menuHeader = document.createElement("h2");
            const menuHeaderText = document.createTextNode("About");
            menuHeader.appendChild(menuHeaderText);
            const menuHeaderClass = document.createAttribute("class");
            menuHeaderClass.value = "menu-header";
            menuHeader.setAttributeNode(menuHeaderClass);
            menuTopDiv.appendChild(menuHeader);

        // Menu Bottom
        const menuBottomDiv = document.createElement("div");
        const menuBottomDivClass = document.createAttribute("class");
        menuBottomDivClass.value = "menu-bottom";
        menuBottomDiv.setAttributeNode(menuBottomDivClass);
        menuDiv.appendChild(menuBottomDiv);

            // Horizontal Rule 1
            const horizontalRule1 = document.createElement("hr");
            const horizontalRule1Class = document.createAttribute("class");
            horizontalRule1Class.value = "about-hr";
            horizontalRule1.setAttributeNode(horizontalRule1Class);
            menuBottomDiv.appendChild(horizontalRule1);

            // About Description
            const aboutDescription = document.createElement("p");
            const aboutDescriptionText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
            aboutDescription.appendChild(aboutDescriptionText);
            const aboutDescriptionClass = document.createAttribute("class");
            aboutDescriptionClass.value = "about-description";
            aboutDescription.setAttributeNode(aboutDescriptionClass);
            menuBottomDiv.appendChild(aboutDescription);

            // Horizontal Rule 2
            const horizontalRule2 = document.createElement("hr");
            const horizontalRule2Class = document.createAttribute("class");
            horizontalRule2Class.value = "about-hr";
            horizontalRule2.setAttributeNode(horizontalRule2Class);
            menuBottomDiv.appendChild(horizontalRule2);
}

export { renderAbout };