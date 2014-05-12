var tab = {
  init: function(){
  var tabs = this.setup.tabs;
  var pages = this.setup.pages;
  var len = pages.length;

    for(var i = 0; i < len; i++) {
      if(i !== 0) pages[i].style.display = 'none';
      tabs[i].onclick = function(){
        tab.showpage(this);
        return false;
      };
    }
  },

  showpage: function(obj){
  var tabs = this.setup.tabs;
  var pages = this.setup.pages;
  var num;
  var len = pages.length;

    for(num = 0, tLen = tabs.length; num < tLen; num++) {
      if(tabs[num] === obj) break;
    }

    for(var i = 0; i < len; i++) {
      if(i == num) {
        pages[num].style.display = 'block';
        tabs[num].className = 'tabOn';
      } else {
        pages[i].style.display = 'none';
        tabs[i].className = 'tabOff';
      }
    }
  }
}