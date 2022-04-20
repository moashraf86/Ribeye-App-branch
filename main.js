// Run dropdown menu
const menuBtn = document.querySelectorAll('#menu-button');
menuBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    const nextElem = this.nextElementSibling;
    nextElem.classList.toggle('hidden');
    this.classList.toggle('focused');
    this.parentElement.classList.toggle('relative')
  })
});

// close dropdown when click any where else on the page
document.addEventListener('click', function(e) {
  if(e.target.id !== 'menu-button') {
    const menuBtn = document.querySelectorAll('#menu-button');
    menuBtn.forEach(btn => {
        const nextElem = btn.nextElementSibling;
        nextElem.classList.add('hidden');
        btn.classList.remove('focused');
        btn.parentElement.classList.remove('relative')
    });
  } else {
    return 1
  }
});

// Collapsing section
const accordionHeader = document.querySelectorAll('.accordion-header');

accordionHeader.forEach(header => {
  header.addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('hidden');
    this.classList.toggle('active')
  })
});

//show popup message on hovering the questnio mark icon
const questionIcon = document.querySelectorAll('.question');
questionIcon.forEach(ques => {
  ques.addEventListener('mouseenter', function() {
    this.nextElementSibling.classList.remove('hidden')
  })
  ques.addEventListener('mouseleave', function() {
    this.nextElementSibling.classList.add('hidden')
  })
})