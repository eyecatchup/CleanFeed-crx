/**
 * Remove sponsored stories.
 */
function sponsoredStories() {
  for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    var b = c[a];
    if(typeof(b.getAttribute("href")) == "string" && b.getAttribute("href").toString().indexOf("/about/ads") != -1) {
        b.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
        console.log('Removed 1 Sponsored Story.');
    }
  }
}
;
/**
 * Remove suggested posts.
 */
function suggestedPosts() {
  for(var c = document.getElementsByTagName("li"), a = 0;a < c.length;a++) {
    var b = c[a];
    if(typeof(b.getAttribute("data-ft")) == "string" && b.getAttribute("data-ft").toString().indexOf("\"ei\"") != -1) {
        b.style.display = "none";
        console.log('Removed 1 Suggested Post.');
    }
  }
}
;
/**
 * Remove sidebar ads.
 */
function rightCol() {
    if (document.getElementById("pagelet_advertiser_panel")) {
        document.getElementById("pagelet_advertiser_panel").style.display = "none";
    }
    if (document.getElementById("pagelet_ego_pane_w")) {
        document.getElementById("pagelet_ego_pane_w").style.visibility = "hidden";
    }
    if (document.getElementById("pagelet_side_ads")) {
        document.getElementById("pagelet_side_ads").style.display = "none";
    }
}
;

/**
 * Simulate a "onScrollAfter" event to handle async loaded feed content.
 */
var scrollTimer = -1;
function winScroll() {
    if (scrollTimer != -1) {
        clearTimeout(scrollTimer);
    }

    scrollTimer = window.setTimeout("cleanFeed()", 250);
}
;
window.onscroll = winScroll;

/**
 * Clean the shit..
 */
function cleanFeed() {
    rightCol();
    sponsoredStories();
    suggestedPosts();
}
;

cleanFeed(); // execute once on load