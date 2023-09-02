export default function footer() {
    const footerContent = document.createElement("div");
    footerContent.classList.add("footer");

    const rightsText = document.createElement("span");
    rightsText.classList.add("rights-text");
    rightsText.textContent = "All rights reserved. Noah P. 2023.";

    footerContent.appendChild(rightsText);

    return footerContent;
}