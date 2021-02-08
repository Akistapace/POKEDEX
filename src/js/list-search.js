// filterSelection('all')
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filter");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     removeClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
//   }
// }

// Show filtered elements
// function addClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// Hide elements that are not selected
// function removeClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// Get the container element
// var btnContainer = document.getElementById("ListCard");
// Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btn");
// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   }
// };
var swiper = new Swiper('#types-card', {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 32
    100: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    250: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    359: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 5.5,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5.5,
      spaceBetween: 40
    }
  }
  // teste
});