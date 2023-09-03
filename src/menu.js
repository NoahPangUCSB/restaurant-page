import sushiroImg from "./img/sushiro.jpg";
import danbingImg from "./img/danbing.jpg";
import hainan_chickenImg from "./img/hainan_chicken.jpg";
import hotpotImg from "./img/hotpot.jpg";
import padkrapowImg from "./img/padkrapow.jpg";
import thai_noodlesImg from "./img/thai_noodles.jpg";

const menuItem = (name, img, desc) => {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const itemName = document.createElement("span");
    itemName.classList.add("menu-item-name");
    itemName.textContent = name;

    const itemImg = document.createElement("img");
    itemImg.classList.add("menu-item-img");
    itemImg.src = img;

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("menu-item-desc");
    itemDesc.textContent = desc;

    item.appendChild(itemName);
    item.appendChild(itemImg);
    item.appendChild(itemDesc);

    return item
}

export default function display() {
    const menuContent = document.createElement("div")
    menuContent.classList.add("menu-content");

    const menuItems = [];

    const sushiro = menuItem("Sushiro", sushiroImg, "A wonderful medley of sushi.");
    menuItems.push(sushiro);

    const danbing = menuItem("蛋餅、總匯三明治", danbingImg, "培根蛋餅跟總匯三明治營養又多味道又美，真是滿意。");
    menuItems.push(danbing);

    const hainan_chicken = menuItem("海南雞肉", hainan_chickenImg, "新加坡的海南雞肉啦, how perfect one!");
    menuItems.push(hainan_chicken);

    const hotpot = menuItem("火鍋", hotpotImg, "火鍋，錢都。不用再說了。");
    menuItems.push(hotpot);

    const padkrapow = menuItem("Pad Krapow and Mango Sticky Rice", padkrapowImg, "It's Pad Krapow and Mango Sticky Rice, what more could you want? The perfect Thai food combo.");
    menuItems.push(padkrapow);

    const thai_noodles = menuItem("泰式泰奶酸辣豬肉麵", thai_noodlesImg, "就是師大旁邊的那個《皇泰泰》，又便宜又好吃，真是經典，好想念。。。");
    menuItems.push(thai_noodles);

    for(let i = 0; i < menuItems.length; i++) {
        menuContent.appendChild(menuItems[i]);
    }
    return menuContent;
}