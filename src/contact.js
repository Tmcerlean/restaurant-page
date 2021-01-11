const renderContact = function () {

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
            const menuHeaderText = document.createTextNode("Contact");
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
            horizontalRule1Class.value = "email-hr";
            horizontalRule1.setAttributeNode(horizontalRule1Class);
            menuBottomDiv.appendChild(horizontalRule1);

            // Email Title
            const emailTitle = document.createElement("h3");
            const emailTitleText = document.createTextNode("Email");
            emailTitle.appendChild(emailTitleText);
            const emailTitleClass = document.createAttribute("class");
            emailTitleClass.value = "email-title";
            emailTitle.setAttributeNode(emailTitleClass);
            menuBottomDiv.appendChild(emailTitle);

            // Email Address
            const emailAddress = document.createElement("p");
            const emailAddressText = document.createTextNode("book@lapetit.com");
            emailAddress.appendChild(emailAddressText);
            const emailAddressClass = document.createAttribute("class");
            emailAddressClass.value = "email-address";
            emailAddress.setAttributeNode(emailAddressClass);
            menuBottomDiv.appendChild(emailAddress);

            // Horizontal Rule 2
            const horizontalRule2 = document.createElement("hr");
            const horizontalRule2Class = document.createAttribute("class");
            horizontalRule2Class.value = "email-hr";
            horizontalRule2.setAttributeNode(horizontalRule2Class);
            menuBottomDiv.appendChild(horizontalRule2);
}

export { renderContact };