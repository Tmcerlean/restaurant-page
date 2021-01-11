const renderTab = function () {

    // Content Div
    const contentDiv = document.querySelector("#content");

    // Tab Container
    const tabContainerDiv = document.createElement("div");
    const tabContainerDivClass = document.createAttribute("class");
    tabContainerDivClass.value = "tab-container";
    tabContainerDiv.setAttributeNode(tabContainerDivClass);
    contentDiv.appendChild(tabContainerDiv);
}

export { renderTab };