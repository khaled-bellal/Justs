let header = document.createElement("div");
let logo = document.createElement("span");
let logoText = document.createTextNode("Elzero");
let allMenu = document.createElement("div");
let createUl = document.createElement("ul");
let headText = ["Home", "About", "Service", "Contact"];

for (let i = 0; i < headText.length; i++) {
  let createLi = document.createElement("li");
  createLi.style = "color: #4d4d4d;";
  let liText = document.createTextNode(headText[i]);
  createLi.appendChild(liText);
  createUl.appendChild(createLi);
}

createUl.style.cssText =
  "list-style: none;display:flex;gap:10px;align-items:center";
header.className = "websit-header";
logo.className = "logo";
allMenu.className = "menu";

logo.appendChild(logoText);
header.appendChild(logo);
allMenu.appendChild(createUl);
header.appendChild(allMenu);

document.body.appendChild(header);

// add file of CSS
header.style.cssText =
  "display: flex; align-items: center; justify-content: space-between; margin: 0px 15px; border-bottom: groove";
logo.style.cssText =
  "font-size: 24px; padding: 10px ;background-color: #777; font-weight : bold";

let parentDiv = document.createElement("div");
parentDiv.className = "content";
parentDiv.style.cssText =
  "display:flex;padding:20px;flex-wrap:wrap;justify-content:center;gap:20px;min-height:calc(100vh - 142px);box-sizing:border-box;";
header.after(parentDiv);

for (let i = 0; i < 15; i++) {
  let childDiv = document.createElement("div");
  childDiv.style.cssText =
    "padding:20px;background-color:rgb(0,255,255);border:2px solid rgb(255,200,221);width:calc((100% - 40px) / 3);box-sizing:border-box;text-align:center;color:rgb(136,136,136);borer-radius:6px;";
  childDiv.className = "product";
  let h2 = document.createElement("h2");
  h2.style.color = "black";
  let textH2 = document.createTextNode(i + 1);
  h2.appendChild(textH2);
  let spanNam = document.createElement("span");
  let textProd = document.createTextNode("Product");

  spanNam.appendChild(textProd);
  parentDiv.appendChild(childDiv);
  childDiv.prepend(h2);
  childDiv.append(spanNam);
}

let footer = document.createElement("div");
footer.className = "footer-class";
footer.style.cssText =
  "color:white;background-color:#00ac73; text-align:center;padding:20px;font-size:20px;";
let footerText = document.createTextNode("Copyright 2022");
footer.appendChild(footerText);
document.body.append(footer);
