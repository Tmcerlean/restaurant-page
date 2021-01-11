const render = function () {

    // Content Div
    const contentDiv = document.querySelector("#content");

    // Wrapper
    const wrapperDiv = document.createElement("div");
    const wrapperDivClass = document.createAttribute("class");
    wrapperDivClass.value = "wrapper-container";
    wrapperDiv.setAttributeNode(wrapperDivClass);
    contentDiv.appendChild(wrapperDiv);

    // Sidebar Container
    const sidebarContainerDiv = document.createElement("div");
    const sidebarContainerDivClass = document.createAttribute("class");
    sidebarContainerDivClass.value = "sidebar-container";
    sidebarContainerDiv.setAttributeNode(sidebarContainerDivClass);
    wrapperDiv.appendChild(sidebarContainerDiv);

        // Sidebar Container Top
        const sidebarContainerTopDiv = document.createElement("div");
        const sidebarContainerTopDivClass = document.createAttribute("class");
        sidebarContainerTopDivClass.value = "sidebar-container-top";
        sidebarContainerTopDiv.setAttributeNode(sidebarContainerTopDivClass);
        sidebarContainerDiv.appendChild(sidebarContainerTopDiv);

            // H1
            const restaurantH1 = document.createElement("h1");
            const restaurantH1Text = document.createTextNode("La Petit");
            restaurantH1.appendChild(restaurantH1Text);
            const restaurantH1Class = document.createAttribute("class");
            restaurantH1Class.value = "menu-logo";
            restaurantH1.setAttributeNode(restaurantH1Class);
            sidebarContainerTopDiv.appendChild(restaurantH1);

        // Sidebar Container Bottom
        const sidebarContainerBottomDiv = document.createElement("div");
        const sidebarContainerBottomDivClass = document.createAttribute("class");
        sidebarContainerBottomDivClass.value = "sidebar-container-bottom";
        sidebarContainerBottomDiv.setAttributeNode(sidebarContainerBottomDivClass);
        sidebarContainerDiv.appendChild(sidebarContainerBottomDiv);

            // Menu Item 1
            const menuItem1Paragraph = document.createElement("p");
            const menuItem1Text = document.createTextNode("Menu");
            menuItem1Paragraph.appendChild(menuItem1Text);
            const menuItem1ParagraphClass = document.createAttribute("class");
            menuItem1ParagraphClass.value = "menu-item";
            menuItem1Paragraph.setAttributeNode(menuItem1ParagraphClass);
            sidebarContainerBottomDiv.appendChild(menuItem1Paragraph);

            // Menu Item 2
            const menuItem2Paragraph = document.createElement("p");
            const menuItem2Text = document.createTextNode("About");
            menuItem2Paragraph.appendChild(menuItem2Text);
            const menuItem2ParagraphClass = document.createAttribute("class");
            menuItem2ParagraphClass.value = "menu-item";
            menuItem2Paragraph.setAttributeNode(menuItem2ParagraphClass);
            sidebarContainerBottomDiv.appendChild(menuItem2Paragraph);

            // Menu Item 3
            const menuItem3Paragraph = document.createElement("p");
            const menuItem3Text = document.createTextNode("Contact");
            menuItem3Paragraph.appendChild(menuItem3Text);
            const menuItem3ParagraphClass = document.createAttribute("class");
            menuItem3ParagraphClass.value = "menu-item";
            menuItem3Paragraph.setAttributeNode(menuItem3ParagraphClass);
            sidebarContainerBottomDiv.appendChild(menuItem3Paragraph);

    // Main Container
    const mainContainerDiv = document.createElement("div");
    const mainContainerDivClass = document.createAttribute("class");
    mainContainerDivClass.value = "main-container";
    mainContainerDiv.setAttributeNode(mainContainerDivClass);
    wrapperDiv.appendChild(mainContainerDiv);

    // Start Button Container
    const startButtonContainerDiv = document.createElement("div");
    const startButtonContainerDivClass = document.createAttribute("class");
    startButtonContainerDivClass.value = "start-button-container";
    startButtonContainerDiv.setAttributeNode(startButtonContainerDivClass);
    wrapperDiv.appendChild(startButtonContainerDiv);

        // Start Button
        const startButton = document.createElement("div");
        const startButtonText = document.createTextNode("Explore");
        startButton.appendChild(startButtonText);
        const startButtonClass = document.createAttribute("class");
        startButtonClass.value = "start-button";
        startButton.setAttributeNode(startButtonClass);
        startButtonContainerDiv.appendChild(startButton);
        startButton.addEventListener("mouseover", startButtonAnimation);
}

const startButtonAnimation = function () {

    // Elements
    const startButton = document.querySelector(".start-button");
    const sideNavigation = document.querySelector(".sidebar-container")

    // Add class to start button / sidebar on button hover
    startButton.classList.add("button-hovered");
    sideNavigation.classList.add("start-button-transition");
}

export { render, startButtonAnimation };