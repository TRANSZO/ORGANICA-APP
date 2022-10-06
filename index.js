"use strict";

const NavOpenBtn = document.querySelector(".nav-open-btn");
const navBar = document.querySelector(".navbar");
const navCloseBtn = document.querySelector(".nav-close-btn");

const navElements = [NavOpenBtn, navCloseBtn];

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", (e) => {
    navBar.classList.toggle("active");
  });
}

const searchWraper = document.querySelector(".search-wraper");
const searchIcon = document.querySelector(".header-action-btn");

searchIcon.addEventListener("click", (e) => {
  searchWraper.classList.toggle("active");
});

const sidePanelDatas1 = document.querySelector(".sidepanel1");
const sidePanelDatas2 = document.querySelector(".sidepanel2");

const wishPanelClose = document.querySelector(".wishclosebtn");
const cartPanelClose = document.querySelector(".cartclosebtn");

const wishBtn = document.querySelector(".whishbtn");
const cartBtn = document.querySelector(".cartbtn");

wishBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("whishbtn")) {
    sidePanelDatas1.classList.toggle("active");
  }
});

wishPanelClose.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("active")) {
    e.target.parentNode.classList.remove("active");
  }
});

cartBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("cartbtn")) {
    sidePanelDatas2.classList.toggle("active");
  }
});

cartPanelClose.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("active")) {
    e.target.parentNode.classList.remove("active");
  }
});
