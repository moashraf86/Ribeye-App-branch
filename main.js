// Run dropdown menu
const menuBtn = document.querySelectorAll("#menu-button");
menuBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const nextElem = this.nextElementSibling;
    nextElem.classList.toggle("hidden");
    this.classList.toggle("focused");
    this.parentElement.classList.toggle("relative");
  });
});

// close dropdown when click any where else on the page
document.addEventListener("click", function (e) {
  if ((e.target.id !== "menu-button") & (e.target.id !== "search")) {
    const menuBtn = document.querySelectorAll("#menu-button");
    menuBtn.forEach((btn) => {
      const nextElem = btn.nextElementSibling;
      nextElem.classList.add("hidden");
      btn.classList.remove("focused");
      btn.parentElement.classList.remove("relative");
    });
  } else {
    return 1;
  }
});

// Collapsing section
const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("hidden");
    this.classList.toggle("selected");
  });
});

//show popup message on hovering the questnio mark icon
const questionIcon = document.querySelectorAll(".question");
questionIcon.forEach((ques) => {
  ques.addEventListener("mouseenter", function () {
    this.nextElementSibling.classList.remove("hidden");
  });
  ques.addEventListener("mouseleave", function () {
    this.nextElementSibling.classList.add("hidden");
  });
});

const tableBtn = document.querySelectorAll('button[data-id="table-btn"]');
tableBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    Array.from(this.parentElement.children).forEach((child) => {
      child.classList.remove("selected");
    });
    this.classList.add("selected");
    const targetTable = document.querySelector(
      `#${this.getAttribute("data-select")}`
    );
    Array.from(targetTable.parentElement.children).forEach((table) => {
      table.classList.add("hidden");
    });
    targetTable.classList.remove("hidden");
  });
});

// give table head title active stateon clciking
const tableTitle = document.querySelectorAll(".table-head-title");
tableTitle.forEach((title) => {
  title.addEventListener("click", function () {
    this.classList.toggle("selected");
    Array.from(this.children).forEach((img) => {
      img.classList.toggle("sm:block");
    });
  });
});

var slider = tns({
  container: ".my-slider",
  items: 5,
  gutter: 16,
  loop: false,
  nav: false,
  controlsText: "",
  controls: false,
  clone: false,
  slideBy: "1",
  autoWidth: true,
  mouseDrag: true,
  responsive: {
    640: {
      gutter: 20,
      items: 2,
    },
    768: {
      gutter: 20,
    },
    1280: {
      items: 6,
      gutter: 28,
      loop: false,
    },
    1530: {
      items: 9,
      gutter: 28,
      loop: false,
    },
  },
});
