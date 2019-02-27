function stickyEl() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("r-box").classList.add("el-fixed");
  } else {
    document.getElementById("r-box").classList.remove("el-fixed");
  }
}
window.onscroll = function() {stickyEl()};