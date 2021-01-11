const renderMenu = function () {

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
            const menuHeaderText = document.createTextNode("Menu");
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
            menuBottomDiv.appendChild(horizontalRule1);

            // Food Title 1
            const foodTitle1 = document.createElement("h3");
            const foodTitle1Text = document.createTextNode("Boeuf Bourguignon");
            foodTitle1.appendChild(foodTitle1Text);
            const foodTitle1Class = document.createAttribute("class");
            foodTitle1Class.value = "food-title";
            foodTitle1.setAttributeNode(foodTitle1Class);
            menuBottomDiv.appendChild(foodTitle1);

            // Food Description 1
            const foodDescription1 = document.createElement("p");
            const foodDescription1Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet.");
            foodDescription1.appendChild(foodDescription1Text);
            const foodDescription1Class = document.createAttribute("class");
            foodDescription1Class.value = "food-description";
            foodDescription1.setAttributeNode(foodDescription1Class);
            menuBottomDiv.appendChild(foodDescription1);

            // Food Price 1
            const foodPrice1 = document.createElement("p");
            const foodTitle1Price = document.createTextNode("$35");
            foodPrice1.appendChild(foodTitle1Price);
            const foodPrice1Class = document.createAttribute("class");
            foodPrice1Class.value = "food-description";
            foodPrice1.setAttributeNode(foodPrice1Class);
            menuBottomDiv.appendChild(foodPrice1);

            // Horizontal Rule 2
            const horizontalRule2 = document.createElement("hr");
            menuBottomDiv.appendChild(horizontalRule2);

            // Food Title 2
            const foodTitle2 = document.createElement("h3");
            const foodTitle2Text = document.createTextNode("Coq au Vin");
            foodTitle2.appendChild(foodTitle2Text);
            const foodTitle2Class = document.createAttribute("class");
            foodTitle2Class.value = "food-title";
            foodTitle2.setAttributeNode(foodTitle2Class);
            menuBottomDiv.appendChild(foodTitle2);

            // Food Description 2
            const foodDescription2 = document.createElement("p");
            const foodDescription2Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet.");
            foodDescription2.appendChild(foodDescription2Text);
            const foodDescription2Class = document.createAttribute("class");
            foodDescription2Class.value = "food-description";
            foodDescription2.setAttributeNode(foodDescription2Class);
            menuBottomDiv.appendChild(foodDescription2);

            // Food Price 2
            const foodPrice2 = document.createElement("p");
            const foodTitle2Price = document.createTextNode("$40");
            foodPrice2.appendChild(foodTitle2Price);
            const foodPrice2Class = document.createAttribute("class");
            foodPrice2Class.value = "food-description";
            foodPrice2.setAttributeNode(foodPrice2Class);
            menuBottomDiv.appendChild(foodPrice2);

            // Horizontal Rule 3
            const horizontalRule3 = document.createElement("hr");
            menuBottomDiv.appendChild(horizontalRule3);

            // Food Title 3
            const foodTitle3 = document.createElement("h3");
            const foodTitle3Text = document.createTextNode("Potatoes Dauphinoise");
            foodTitle3.appendChild(foodTitle3Text);
            const foodTitle3Class = document.createAttribute("class");
            foodTitle3Class.value = "food-title";
            foodTitle3.setAttributeNode(foodTitle3Class);
            menuBottomDiv.appendChild(foodTitle3);

            // Food Description 3
            const foodDescription3 = document.createElement("p");
            const foodDescription3Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet.");
            foodDescription3.appendChild(foodDescription3Text);
            const foodDescription3Class = document.createAttribute("class");
            foodDescription3Class.value = "food-description";
            foodDescription3.setAttributeNode(foodDescription3Class);
            menuBottomDiv.appendChild(foodDescription3);

            // Food Price 3
            const foodPrice3 = document.createElement("p");
            const foodTitle3Price = document.createTextNode("$25");
            foodPrice3.appendChild(foodTitle3Price);
            const foodPrice3Class = document.createAttribute("class");
            foodPrice3Class.value = "food-description";
            foodPrice3.setAttributeNode(foodPrice3Class);
            menuBottomDiv.appendChild(foodPrice3);

            // Horizontal Rule 4
            const horizontalRule4 = document.createElement("hr");
            menuBottomDiv.appendChild(horizontalRule4);
}

export { renderMenu };