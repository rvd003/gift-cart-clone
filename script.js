function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelector("#myDropdown");
    // var i;
    // for (i = 0; i < dropdowns.length; i++) {
    //   var openDropdown = dropdowns[i];
      if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
      }
    }
//   }
}

function myfun()
{
    var divs=document.querySelector("#content");
    divs.classList.toggle("shower")

    window.onclick=function(event)
    {
        if(!event.target.matches("#clicks"))
        {
            var removeShow=document.querySelector("#content");
            if(removeShow.classList.contains('shower'))
            {
                removeShow.classList.remove("shower")
            }
        }
    }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// -------------------------------------

"use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}



// --------------------------------


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// ------------------------------------------

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".redMenu_container");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}






var x=JSON.parse(localStorage.getItem('userDetails')) || [];







if(x.length==0)
{
  setTimeout(() => {
    window.location.href="#popup1"; 
  }, 5000);
}


var customer_name=document.querySelector("#clicks").innerText;

// console.log(customer_name)


if(x.length==0)
{
  customer_name="Hello, Sign In"
}
else if(x.length>0)
{
  customer_name=x.name;
  // console.log(customer_name)
}


if(x.length>0)
{
  x.map(function (element) {
    // console.log(element.name)
    
  
    
   var span= document.createElement("span")
   span.innerText=element.name;
  
   document.querySelector("#clicks").append(span);
  
  
  })
}
else if(x.length==0)
{
  var spn=document.createElement("span")
  span.innerText='Sign In';

  document.querySelector("#clicks").append(spn);
}






// -------------------------------------------------------------floating cart-----

var ber=JSON.parse(localStorage.getItem("cart1")) || [];

console.log(ber.length)

badge=document.createElement("span");
badge.innerText=ber.length;
badge.setAttribute('id',"counter_num")

document.querySelector('.float_button').append(badge)






