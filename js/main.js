DOM.select(".btn-demos").addEventListener("click", function() {
  Animate.scrollTo(document, DOM.offset(DOM.select(".demos")).top, 500);
});
