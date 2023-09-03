import displayHome from "./home";
import displayMenu from "./menu";
import displayContact from "./contact";
import header from "./header";
import footer from "./footer";
import { displayController as headerDisplay } from "./header";
import './css/style.css';

function displayHeader() {
    const headerContent = header();
    

    return headerContent;
}

function displayContent(contentComponent, replace=false) {
    let contentDiv = null;
    if(replace) {
        contentDiv = document.getElementById("content");
    } else {
        contentDiv = document.createElement("div");
        contentDiv.id = "content";
    }

    const content = contentComponent();

    contentDiv.replaceChildren(content);

    return contentDiv;
}

function displayFooter() {
    const footerContent = footer();

    return footerContent;
}

const displayController = (() => {
    document.body.appendChild(displayHeader());
    document.body.appendChild(displayContent(displayHome));
    document.body.appendChild(displayFooter());

    headerDisplay.displaySelectedTab();
    headerDisplay.displayHoveredTab();

    const switchTab = (e) => {
        const btnClassList = e.srcElement.classList;
        const tabDisplays = {
            "home-btn": displayHome,
            "menu-btn": displayMenu,
            "contact-btn": displayContact
        }

        let tabDisplay = null

        for(const className in tabDisplays) {
            if(btnClassList.contains(className)) {
                tabDisplay = tabDisplays[className];
            }
        }

        if(!tabDisplay) {
            displayContent(displayHome, true);
        } else {
            displayContent(tabDisplay, true);
        }
    }

    const switchTabController = () => {
        const tabButtons = headerDisplay.getTabs();
        tabButtons.forEach(element => {
            element.addEventListener("click", switchTab)
        });
    }

    switchTabController();
})();


