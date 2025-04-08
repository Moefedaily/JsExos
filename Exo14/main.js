window.onscroll = function () {
  scrollIndicator();
};

function scrollIndicator() {
  let windowScroll = document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (windowScroll / height) * 100;

  document.getElementById("bar").style.width = scrolled + "%";
}
