import noahImg from "./img/noah_looking_at_menu.jpg";
import createSVG from "./svg";

export default function display() {
    const emailSVG = "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z";
    const phoneSVG = "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z";

    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const contactTitle = document.createElement("span");
    contactTitle.classList.add("contact-title");
    contactTitle.textContent = "Contact Us";

    const contactEmail = document.createElement("span");
    contactEmail.classList.add("contact-email");
    createSVG(contactEmail, emailSVG);
    const contactEmailTxt = document.createElement("p");
    contactEmailTxt.textContent = "noahp@realemail.com";
    contactEmail.appendChild(contactEmailTxt);

    const contactPhone = document.createElement("span");
    contactPhone.classList.add("contact-phone");
    createSVG(contactPhone, phoneSVG);
    const contactPhoneTxt = document.createElement("p");
    contactPhoneTxt.textContent = "(123)-456-7890";
    contactPhone.appendChild(contactPhoneTxt);

    contactInfo.appendChild(contactTitle);
    contactInfo.appendChild(contactEmail);
    contactInfo.appendChild(contactPhone);

    const contactImg = document.createElement("img");
    contactImg.classList.add("contact-img");
    contactImg.src = noahImg;

    contactContent.appendChild(contactInfo);
    contactContent.appendChild(contactImg);

    return contactContent;
}

{/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"></path> </g></svg> */}