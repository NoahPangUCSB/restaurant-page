export default function header() {
  const headerContent = document.createElement("div");
  headerContent.classList.add("header");

  const tabWrapper = document.createElement("div");
  tabWrapper.classList.add("tab-wrapper");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-btn");
  homeBtn.classList.add("selected-tab");
  homeBtn.textContent = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  menuBtn.classList.add("unselected-tab");
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("contact-btn");
  contactBtn.classList.add("unselected-tab");
  contactBtn.textContent = "Contact";

  tabWrapper.appendChild(homeBtn);
  tabWrapper.appendChild(menuBtn);
  tabWrapper.appendChild(contactBtn);

  headerContent.appendChild(tabWrapper);

  return headerContent;
}

export const displayController = (() => {
    let tabButtons = null;
    const _getTabs = () => {
        tabButtons = document.querySelectorAll("button");
    }

    const _removeSelectedTabClass = () => {
        tabButtons.forEach(element => {
            element.classList.remove("selected-tab");
            element.classList.add("unselected-tab");
        });
    }

    const _removeHoveredTabClass = (e) => {
        e.srcElement.classList.remove("hovered-tab");
    }

    const displaySelectedTab = () => {
        if(!tabButtons) {
            _getTabs();
        }

        tabButtons.forEach(element => {
            element.addEventListener("click", () => {
                _removeSelectedTabClass();
                element.classList.add("selected-tab");
            })
        });
    }

    const displayHoveredTab = () => {
        if(!tabButtons) {
            _getTabs();
        }

        tabButtons.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.classList.add("hovered-tab");
            })
        });

        tabButtons.forEach(element => {
            element.addEventListener("mouseout", _removeHoveredTabClass);
        });
    }
    
    return { displaySelectedTab, displayHoveredTab };
})();
