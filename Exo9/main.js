window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let navbar = document.getElementById("navbar");

  if (scrollTop > 100) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-50px";
  }
};
