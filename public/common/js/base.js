window.requestAnimFrame = (function (callback) {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    }
  );
})();

window.cancelAnimFrame = (function (_id) {
  return (
    window.cancelAnimationFrame ||
    window.cancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    function (_id) {
      window.clearTimeout(id);
    }
  );
})();

var FirstView = function () {
  this._header = document.getElementsByTagName("header")[0];
  this._mainContent = document.querySelector(".main_content");
  this.init();
};
FirstView.prototype = {
  init: function () {
    var _self = this;
    this._header.classList.add("top");
    setTimeout(function () {
      _self._header.classList.add("active");
    }, 50);
    window.addEventListener(
      "scroll",
      function () {
        _self.scrollLeft();
      },
      false
    );
  },
  scrollLeft: function () {
    var _left =
      (document.documentElement && document.documentElement.scrollLeft) ||
      document.body.scrollLeft;
    this._header.style.left = -_left + "px";
  },
};

var MenuLine = function () {
  this._navLine = document.getElementById("nav_global");
  this._line = document.getElementById("line");
  this._navLineItem = this._navLine.getElementsByTagName("li");
  this._width = 0;
  this._flag = false;
  if (!this._navLine) return;
  this.init();
};

MenuLine.prototype = {
  init: function () {
    var _self = this,
      _delay = 150;
    this._line.style.opacity = 0;
    setTimeout(function () {
      _self._line.style.opacity = 1;
    }, _delay * this._navLineItem.length);

    for (i = 0; i < this._navLineItem.length; i = (i + 1) | 0) {
      this._navLineItem[i].style.opacity = 0;
      Velocity(
        this._navLineItem[i],
        { opacity: 1, translateY: [0, -40] },
        { duration: 450, delay: _delay * i, queue: false, easing: "ease" }
      );
      this._navLineItem[i].addEventListener(
        "mouseenter",
        function (e) {
          _self.onMouseOver({ currentTarget: e.currentTarget });
        },
        false
      );
      this._navLine.addEventListener(
        "mouseleave",
        function (e) {
          _self.onMouseOut({ currentTarget: e.currentTarget });
        },
        false
      );
    }
  },
  onMouseOver: function (e) {
    this._flag = true;
    this.handleLine(e.currentTarget);
  },
  onMouseOut: function (e) {
    for (z = 0; z < this._navLineItem.length; z++) {
      if (this._navLineItem[z].classList.contains("active") && this._flag) {
        this.handleLine(this._navLineItem[z]);
      }
    }
    this._flag = false;
  },
  handleLine: function (_item) {
    var index = Array.prototype.indexOf.call(this._navLineItem, _item);
    this._width = 0;
    for (j = 0; j < index; j++) {
      this._width += this._navLineItem[j].offsetWidth;
    }
    this._line.style.width = _item.offsetWidth - 1 + "px";
    this._line.style.transform = "translateX(" + this._width + "px" + ")";
  },
};

var Landing = function () {
  this._section = document.getElementsByClassName("section");
  this._sectionHome = document.getElementById("home");
  this._navScroll = document.getElementById("nav_global");
  this._navScrollItem = this._navScroll.getElementsByTagName("li");
  this._lineScroll = document.getElementById("line");
  this._elementList;
  this._element;
  this._offsetSection;
  this._offsetSectionBottom;
  this._windownH;
  this._windownW;
  this._flag;
  this._iStart;
  this._durationIn;
  this._durationOut;
  this._transX;
  this._disEffSp = true;
  this._animateSection = false;
  if (!this._section.length) return;
  this.init();
};

Landing.prototype = {
  init: function () {
    var _self = this;
    this.reset();
    window.addEventListener(
      "load",
      function () {
        _self.onScroll();
      },
      false
    );
    window.addEventListener(
      "scroll",
      function () {
        _self.onScroll();
      },
      false
    );
    window.addEventListener(
      "resize",
      function () {
        _self.onScroll();
      },
      false
    );
  },
  onScroll: function () {
    for (var i = 0; i < this._section.length; i++) {
      this.activeScreen(this._section[i]);
    }
  },
  activeScreen: function (_sec) {
    this._windownH = window.innerHeight;
    this._windownW = window.innerWidth;
    this._offsetSection = _sec.getBoundingClientRect().top;
    this._offsetSectionBottom = _sec.getBoundingClientRect().bottom;
    this._element = _sec.getElementsByClassName("element");
    this._elementList = _sec.querySelectorAll(".element_list dd");
    //set point animate pc or sp;
    this.setPoint();
    // customer start point for section
    _sec.classList.contains("company") ? (this._iStart = 0) : "";
    _sec.classList.contains("contact") ? (this._iStart = 150) : "";

    if (this._offsetSection - (this._windownH - this._iStart) < 0) {
      if (!_sec.classList.contains("active")) {
        _sec.classList.add("active");

        // animate for section
        this._animateSection
          ? this.animate(
              _sec,
              _sec.classList.contains("active"),
              this.returnPc()
            )
          : "";
        // handling element
        for (var j = 0; j < this._element.length; j++) {
          this._flag = true;
          this.animate(this._element[j], this._flag, this.returnPc());
        }
        // handling element List
        for (var z = 0; z < this._elementList.length; z++) {
          !this._disEffSp || this.returnPc()
            ? Velocity(
                this._elementList[z],
                { opacity: 1, translateY: [0, this._transX] },
                {
                  duration: 500,
                  delay: z * 150,
                  queue: false,
                  easing: "linear",
                }
              )
            : (this._elementList[z].style.opacity = "1");
        }
      }
    } else {
      // this for animate Out
      // if (_sec.classList.contains('active')) {
      //   _sec.classList.remove('active');
      // }
    }

    // active Nav global item
    var _offsetBottom = this._offsetSectionBottom - (this._windownH / 3) * 2,
      _offsetBottomHeight =
        this._offsetSectionBottom -
        (this._windownH / 3) * 2 -
        _sec.offsetHeight,
      _offsetHome = this._sectionHome.getBoundingClientRect().top,
      _idScreen = _sec.getAttribute("class").split(" ");

    if (_offsetBottom > 0 && _offsetBottomHeight < 0) {
      for (var o = 0; o < this._navScrollItem.length; o++) {
        var _item = this._navScrollItem[o],
          _itemChild = _item.firstElementChild
            .getAttribute("href")
            .replace("#", "");

        if (_itemChild == _idScreen[1]) {
          _item.classList.add("active");
          var index = Array.prototype.indexOf.call(this._navScrollItem, _item);
          this._width = 0;
          for (j = 0; j < index; j++) {
            this._width += this._navScrollItem[j].offsetWidth;
          }
          this._lineScroll.style.width = _item.offsetWidth - 1 + "px";
          this._lineScroll.style.transform =
            "translateX(" + this._width + "px" + ")";
        } else {
          _item.classList.remove("active");
        }
      }
    }
    // active section Home
    if (_offsetHome + 170 > 0) {
      for (var n = 0; n < this._navScrollItem.length; n++) {
        this._navScrollItem[n].classList.remove("active");
      }
      this._navScrollItem[0].classList.add("active");
      this._lineScroll.style.width =
        this._navScrollItem[0].offsetWidth - 1 + "px";
      this._lineScroll.style.transform = "translateX(" + 0 + "px" + ")";
    }
  },
  setPoint: function () {
    this.point = function (_iStart, _durationIn, _durationOut, _transX) {
      this._iStart = _iStart;
      this._durationIn = _durationIn;
      this._durationOut = _durationOut;
      this._transX = _transX;
    };
    this.returnPc()
      ? this.point(500, 400, 300, 60)
      : this.point(50, 400, 400, 50);
  },
  returnPc: function () {
    var _pc;
    this._windownW = window.innerWidth;
    this._windownW > 768 ? (_pc = true) : (_pc = false);
    return _pc;
  },
  animate: function (_ele, _status, _pc) {
    if (/translateleft/.test(_ele.className)) {
      this.translateleft(_ele, _status, this._disEffSp, _pc);
    } else if (/translateright/.test(_ele.className)) {
      this.translateright(_ele, _status, this._disEffSp, _pc);
    } else if (/translateup/.test(_ele.className)) {
      this.translateUp(_ele, _status, this._disEffSp, _pc);
    } else if (/scale/.test(_ele.className)) {
      this.scale(_ele, _status, this._disEffSp, _pc);
    } else {
      this.fade(_ele, _status, this._disEffSp, _pc);
    }
  },
  fade: function (_item, _status, _effSp, _pc) {
    if (!_effSp || _pc) {
      _status
        ? Velocity(
            _item,
            { opacity: 1 },
            {
              duration: this._durationIn,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          )
        : Velocity(
            _item,
            { opacity: 0 },
            {
              duration: this._durationOut,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          );
    } else {
      _item.style.opacity = "1";
    }
  },
  translateright: function (_item, _status, _effSp, _pc) {
    if (!_effSp || _pc) {
      _status
        ? Velocity(
            _item,
            { opacity: 1, translateX: [0, this._transX] },
            {
              duration: this._durationIn,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          )
        : Velocity(
            _item,
            { opacity: 0, translateX: [this._transX, 0] },
            {
              duration: this._durationOut,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          );
    } else {
      _item.style.opacity = "1";
    }
  },
  translateleft: function (_item, _status, _effSp, _pc) {
    if (!_effSp || _pc) {
      _status
        ? Velocity(
            _item,
            { opacity: 1, translateX: [0, -this._transX] },
            {
              duration: this._durationIn,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          )
        : Velocity(
            _item,
            { opacity: 0, translateX: [-this._transX, 0] },
            {
              duration: this._durationOut,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          );
    } else {
      _item.style.opacity = "1";
    }
  },
  translateUp: function (_item, _status, _effSp, _pc) {
    if (!_effSp || _pc) {
      _status
        ? Velocity(
            _item,
            { opacity: 1, translateY: [0, this._transX] },
            {
              duration: this._durationIn,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          )
        : Velocity(
            _item,
            { opacity: 0, translateY: [this._transX, 0] },
            {
              duration: this._durationOut,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          );
    } else {
      _item.style.opacity = "1";
    }
  },
  scale: function (_item, _status, _effSp, _pc) {
    if (!_effSp || _pc) {
      _status
        ? Velocity(
            _item,
            { opacity: 1, scale: [1, 0.2] },
            {
              duration: this._durationIn,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          )
        : Velocity(
            _item,
            { opacity: 0, scale: [0, 1] },
            {
              duration: this._durationOut,
              delay: 0,
              queue: false,
              easing: "linear",
            }
          );
    } else {
      _item.style.opacity = "1";
    }
  },
  reset: function () {
    var _ele = document.getElementsByClassName("element"),
      _eleList = document.querySelectorAll(".element_list dd");
    for (var i = 0; i < this._section.length; i++) {
      this._disEffSp && !this._animateSection
        ? (this._section[i].style.opacity = "1")
        : (this._section[i].style.opacity = "0");
    }
    for (var j = 0; j < _ele.length; j++) {
      this._disEffSp && !this.returnPc()
        ? (_ele[j].style.opacity = "1")
        : (_ele[j].style.opacity = "0");
    }
    for (var n = 0; n < _eleList.length; n++) {
      this._disEffSp && !this.returnPc()
        ? (_eleList[n].style.opacity = "1")
        : (_eleList[n].style.opacity = "0");
    }
  },
};

var AutoHover = function (_type) {
  this._type = _type;
  this._targets = document.getElementsByClassName(this._type);
  if (!this._targets.length) return;
  this.init();
};
AutoHover.prototype = {
  init: function () {
    var _self = this;
    var i = 0 | 0;
    for (i = 0; i < this._targets.length; i = (i + 1) | 0) {
      this._targets[i].addEventListener(
        "mouseenter",
        function (e) {
          _self.onMouseOver({ currentTarget: e.currentTarget, self: _self });
        },
        false
      );
      this._targets[i].addEventListener(
        "mouseleave",
        function (e) {
          _self.onMouseOut({ currentTarget: e.currentTarget, self: _self });
        },
        false
      );
    }
  },
  onMouseOver: function (e) {
    if (e.self._type === "img_ovr") {
      e.currentTarget.setAttribute(
        "src",
        e.currentTarget.getAttribute("src").replace(/_off/gi, "_on")
      );
      return;
    }
    Velocity(e.currentTarget, "stop");
    Velocity(
      e.currentTarget,
      { opacity: 0.7 },
      { duration: 300, delay: 0, easing: "easeOutSine" }
    );
  },
  onMouseOut: function (e) {
    if (e.self._type === "img_ovr") {
      e.currentTarget.setAttribute(
        "src",
        e.currentTarget.getAttribute("src").replace(/_on/gi, "_off")
      );
      return;
    }
    Velocity(e.currentTarget, "stop");
    Velocity(
      e.currentTarget,
      { opacity: 1 },
      { duration: 300, delay: 0, easing: "easeInSine" }
    );
  },
};

var Menusp = function () {
  this._hamburger = document.getElementById("menu");
  this._menu = document.querySelector(".nav_global");
  this._menuItem = document.querySelectorAll(".nav_global li");
  this._body = document.querySelector("body");
  this._flag = true;
  this._winW = window.innerWidth;
  this._heightMenu = 0;
  if (!this._hamburger) return;
  this.init();
};
Menusp.prototype = {
  init: function () {
    var _self = this;
    window.addEventListener(
      "load",
      function () {
        _self.Handl();
      },
      true
    );
    window.addEventListener(
      "resize",
      function () {
        _self.reset();
      },
      true
    );
  },
  Handl: function () {
    var _h = this;
    this._winW < 769 ? this.reset() : "";
    this._hamburger.addEventListener(
      "click",
      function () {
        _h.onClick();
      },
      false
    );
  },
  onClick: function () {
    var _o = this;
    if (this._flag) {
      this._menu.classList.add("active");
      this._hamburger.classList.add("active");
      this._body.style.overflow = "hidden";

      for (var i = 0; i < this._menuItem.length; i++) {
        this._menuItem[i].style.opacity = "0";
        Velocity(
          this._menuItem[i],
          { opacity: 1, translateX: [0, -80] },
          { duration: 250, delay: i * 65, queue: false, easing: "easeOutSine" }
        );
        this._menuItem[i].children[0].addEventListener(
          "click",
          function () {
            _o.close();
          },
          false
        );
      }
      this._flag = false;
    } else {
      this.close();
    }
  },
  close: function () {
    var c = this;
    if (this._winW < 769) {
      this._body.style.overflow = "";
      for (var i = this._menuItem.length - 1; i >= 0; i--) {
        // inverts layer and Delay from last Element;
        var count = Math.max(this._menuItem.length - 1 - i, 0.01) * 75;
        Velocity(
          this._menuItem[i],
          { opacity: 0, translateX: [-80, 0] },
          {
            duration: 300,
            delay: count,
            queue: false,
            easing: "easeOutSine",
            complete: function () {
              c._menu.classList.remove("active");
              c._hamburger.classList.remove("active");
            },
          }
        );
      }
      this._flag = true;
    }
  },
  reset: function () {
    this._hamburger.classList.remove("active");
    this._menu.classList.remove("active");
    this._menu.removeAttribute("style");
    this._body.style.overflow = "";
    this._winW = window.innerWidth;
    this._flag = true;
    for (var i = 0; i < this._menuItem.length; i++) {
      this._menuItem[i].removeAttribute("style");
    }
  },
};

var PageTop = function () {
  this._targets = document.getElementsByClassName("pagetop");
  if (!this._targets.length) return;
  this.init();
};
PageTop.prototype = {
  _isShow: false,
  init: function () {
    var _self = this;
    window.addEventListener(
      "scroll",
      _.debounce(function () {
        _self.onScroll();
      }, 50),
      false
    );
  },
  onScroll: function () {
    var _top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    _top > 0 ? this.show() : this.hide();
  },
  show: function () {
    if (this._isShow) return;
    this._isShow = true;
    this.setVisible(1);
  },
  hide: function () {
    if (!this._isShow) return;
    this._isShow = false;
    this.setVisible(0);
  },
  setVisible: function (_opacity) {
    var i = 0 | 0;
    for (i = 0; i < this._targets.length; i = (i + 1) | 0) {
      Velocity(this._targets[i], "stop");
      Velocity(
        this._targets[i],
        { opacity: _opacity },
        { duration: 300, delay: 0, easing: "easeOutSine" }
      );
    }
  },
};

var AnchorLink = function () {
  this._targets = document.querySelectorAll('a[href^="#"]');
  this._header = document.getElementsByTagName("header")[0];
  this._navItem = document.querySelectorAll('.nav_global a[href^="#"]');
  this._mainContent = document.querySelector(".main_content");
  if (!this._targets.length) return;
  this.init();
};
AnchorLink.prototype = {
  init: function () {
    var _self = this;
    var i = 0 | 0;
    for (i = 0; i < this._targets.length; i = (i + 1) | 0) {
      this._targets[i].addEventListener(
        "click",
        function (e) {
          _self.onClickHD(e);
        },
        false
      );
    }
  },
  onClickHD: function (_e) {
    var _hash = _e.currentTarget.getAttribute("href").replace("#", ""),
      _headerH = this._header.clientHeight;
    Velocity(document.getElementById(_hash), "scroll", {
      queue: false,
      duration: 750,
      offset: -_headerH - 75,
      delay: 0,
      easing: "easeInOutSine",
    });
    _e.preventDefault();
  },
};

window.addEventListener("DOMContentLoaded", function () {
  if (window.jQuery) window.Velocity = window.jQuery.fn.velocity;
  new AutoHover("img_ovr");
  new AutoHover("alpha_ovr");
  new PageTop();
  new AnchorLink();
  new FirstView();
  new Landing();
  new Menusp();
  new MenuLine();
});

particlesJS("bg", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#b61924" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#b61924",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
