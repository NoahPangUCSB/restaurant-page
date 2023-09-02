import mainImg from "./img/xlq_zjm.jpg";
import createSVG from "./svg";

export default function display() {
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const restaurantName = document.createElement("div");
  restaurantName.classList.add("restaurant-name");

  const restaurantNameSpan = document.createElement("span");
  restaurantNameSpan.textContent = "Noah's House of Good Eats";
  restaurantName.appendChild(restaurantNameSpan);

  const br = document.createElement("br");
  restaurantNameSpan.appendChild(br);
  
  const chefIcon = document.createElement("img");
  chefIcon.classList.add("chef-icon")
  chefIcon.src = "https://img.icons8.com/windows/96/cook-male.png";
  restaurantNameSpan.appendChild(chefIcon);

  const homeMainImg = document.createElement("img");
  homeMainImg.classList.add("home-main-img");
  homeMainImg.src = mainImg;

  homeContent.appendChild(restaurantName);
  homeContent.appendChild(homeMainImg);

  return homeContent;
}
