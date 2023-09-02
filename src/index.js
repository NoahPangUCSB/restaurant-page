import displayHome from "./home";
import header from "./header";
import footer from "./footer";
import './css/style.css';

function displayHeader() {
    const headerContent = header();

    return headerContent;
}

function displayContent() {
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";

    const homeContent = displayHome();

    console.log("h")
    contentDiv.appendChild(homeContent);

    return contentDiv;
}

function displayFooter() {
    const footerContent = footer();

    return footerContent;
}

document.body.appendChild(displayHeader());
document.body.appendChild(displayContent());
document.body.appendChild(displayFooter());