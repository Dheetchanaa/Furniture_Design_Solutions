var menulist = [
    { name: "Home", link: "http://localhost/Furniture%20Design%20Solutions/index.html"},
    { name: "About", link: "http://localhost/Furniture%20Design%20Solutions/about.html" },
    { name: "Service", link: "http://localhost/Furniture%20Design%20Solutions/service.html" },
    { name: "Contact", link: "http://localhost/Furniture%20Design%20Solutions/contact.html" }
  ];
  const menu = document.getElementById("menu");
  const menuli = document.getElementById("menuli");
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.className.search("active") > 0) {
      menuli.style.width = "8.3%";
    }
    else {
      menuli.style.width = "0%";
    }
  });
  menulist.map((data, index) => {
    menuli.innerHTML += `<a href="${data.link}" onmouseenter="menuaction(${index})" onmouseleave="menuclose(${index})">${data.name}</a>`;
  });
  function menuaction(index) {
    let num = menuli.childNodes;
    for (var i = 0; i < num.length; i++) {
      if (i == index) {
        num[i].style.transform = "scale(1.2)";
        continue;
      }
      if (i % 2 == 0) {
        num[i].style.transform = "translate(70px)";
        num[i].style.animation = "fademenu 0.3s forwards ease-in-out";
      }
      else {
        num[i].style.transform = "translate(-70px)";
        num[i].style.animation = "fademenu 0.3s forwards ease-in-out";
      }
    }
  }
  function menuclose(index) {
    let num = menuli.childNodes;
    for (var i = 0; i < num.length; i++) {
      if (i == index) {
        num[i].style.transform = "scale(1)";
        continue; ś
      }
      else {
        num[i].style.transform = "translate(0px)";
        num[i].style.animation = "showmenu 0.3s forwards ease-in-out";
      }
    }
  }
  function navi(index) {
    const nav = document.getElementById("nav");
    const navchild = nav.children;
    for (var i = 0; i < navchild.length; i++) {
      navchild[i].className = "";
    }
    navchild[index].className = "active";
  }
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav").children;
    const content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
      var offtop = content[i].getBoundingClientRect().top;
      console.log(offtop);
      if (i == 0 && offtop > 250) {
        for (var j = 0; j < nav.length; j++) {
          nav[j].className = "";
        }
      } else
        if (i == 0 && offtop <= 250) {
          for (var j = 0; j < nav.length; j++) {
            nav[j].className = "";
          }
          nav[i].className = "active";
        }
        else
          if (i == 1 && offtop <= 250) {
            for (var j = 0; j < nav.length; j++) {
              nav[j].className = "";
            }
            nav[i].className = "active";
          }
          else
            if (i == 2 && offtop <= 250) {
              for (var j = 0; j < nav.length; j++) {
                nav[j].className = "";
              }
              nav[i].className = "active";
            }
            else
              if (i == 3 && offtop <= -64) {
                for (var j = 0; j < nav.length; j++) {
                  nav[j].className = "";
                }
                nav[i].className = "active";
              }
              else
                if (i == 4 && offtop <= -64) {
                  for (var j = 0; j < nav.length; j++) {
                    nav[j].className = "";
                  }
                  nav[i].className = "active";
                }
    }
  });
  let slideindex1 = 0;
  showslide1();
  function showslide1() {
    let i;
    let slides1 = document.getElementsByClassName("slides1");
    let dots1 = document.getElementsByClassName("dots1");
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    slideindex1++;
    if (slideindex1 > slides1.length) {
      slideindex1 = 1;
    }
    for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideindex1 - 1].style.display = "block";
    dots1[slideindex1 - 1].className += " active";
    setTimeout(showslide1, 2000);
  };
  let slideindex2 = 0;
  showslide2();
  function showslide2() {
    let i;
    let slides2 = document.getElementsByClassName("slides2");
    let dots2 = document.getElementsByClassName("dots2");
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    slideindex2++;
    if (slideindex2 > slides2.length) {
      slideindex2 = 1;
    }
    for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideindex2 - 1].style.display = "block";
    dots2[slideindex2 - 1].className += " active";
    setTimeout(showslide2, 2000);
  };
  let slideindex3 = 0;
  showslide3();
  function showslide3() {
    let i;
    let slides3 = document.getElementsByClassName("slides3");
    let dots3 = document.getElementsByClassName("dots3");
    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
    }
    slideindex3++;
    if (slideindex3 > slides3.length) {
      slideindex3 = 1;
    }
    for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideindex3 - 1].style.display = "block";
    dots3[slideindex3 - 1].className += " active";
    setTimeout(showslide3, 2000);
  };
  let slideindex4 = 0;
  showslide4();
  function showslide4() {
    let i;
    let slides4 = document.getElementsByClassName("slides4");
    let dots4 = document.getElementsByClassName("dots4");
    for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
    }
    slideindex4++;
    if (slideindex4 > slides4.length) {
      slideindex4 = 1;
    }
    for (i = 0; i < dots4.length; i++) {
      dots4[i].className = dots4[i].className.replace(" active", "");
    }
    slides4[slideindex4 - 1].style.display = "block";
    dots4[slideindex4 - 1].className += " active";
    setTimeout(showslide4, 2000);
  };