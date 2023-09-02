export default function header() {
  const headerContent = document.createElement("div");
  headerContent.classList.add("header");

  const tabWrapper = document.createElement("div");
  tabWrapper.classList.add("tab-wrapper");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-btn");
  homeBtn.textContent = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("contact-btn");
  contactBtn.textContent = "Contact";

  tabWrapper.appendChild(homeBtn);
  tabWrapper.appendChild(menuBtn);
  tabWrapper.appendChild(contactBtn);

  headerContent.appendChild(tabWrapper);

  return headerContent;
}
