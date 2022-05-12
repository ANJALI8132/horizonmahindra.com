/*
 TypeAhead (Modified by Piyush Jain)
 @copyright (c) 2013 Immense Networks
 @copyright (c) 2016 Piyush Jain
 @license   Licensed under MIT license
            See https://raw.githubusercontent.com/immense/immybox/master/LICENSE
 @version   1.1.2
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(b, a, c) {
    b instanceof String && (b = String(b));
    for (var e = b.length, d = 0; d < e; d++) {
        var p = b[d];
        if (a.call(c, p, d, b)) return {
            i: d,
            v: p
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, a, c) {
    b != Array.prototype && b != Object.prototype && (b[a] = c.value)
};
$jscomp.getGlobal = function(b) {
    return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(b, a, c, e) {
    if (a) {
        c = $jscomp.global;
        b = b.split(".");
        for (e = 0; e < b.length - 1; e++) {
            var d = b[e];
            d in c || (c[d] = {});
            c = c[d]
        }
        b = b[b.length - 1];
        e = c[b];
        a = a(e);
        a != e && null != a && $jscomp.defineProperty(c, b, {
            configurable: !0,
            writable: !0,
            value: a
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(b) {
    return b ? b : function(b, c) {
        return $jscomp.findInternal(this, b, c).v
    }
}, "es6", "es3");
$jscomp.arrayIteratorImpl = function(b) {
    var a = 0;
    return function() {
        return a < b.length ? {
            done: !1,
            value: b[a++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(b) {
    return {
        next: $jscomp.arrayIteratorImpl(b)
    }
};
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.SymbolClass = function(b, a) {
    this.$jscomp$symbol$id_ = b;
    $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: a
    })
};
$jscomp.SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_
};
$jscomp.Symbol = function() {
    function b(c) {
        if (this instanceof b) throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (c || "") + "_" + a++, c)
    }
    var a = 0;
    return b
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var b = $jscomp.global.Symbol.iterator;
    b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[b] && $jscomp.defineProperty(Array.prototype, b, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var b = $jscomp.global.Symbol.asyncIterator;
    b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function() {}
};
$jscomp.iteratorPrototype = function(b) {
    $jscomp.initSymbolIterator();
    b = {
        next: b
    };
    b[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return b
};
$jscomp.iteratorFromArray = function(b, a) {
    $jscomp.initSymbolIterator();
    b instanceof String && (b += "");
    var c = 0,
        e = {
            next: function() {
                if (c < b.length) {
                    var d = c++;
                    return {
                        value: a(d, b[d]),
                        done: !1
                    }
                }
                e.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return e.next()
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
};
$jscomp.polyfill("Array.prototype.values", function(b) {
    return b ? b : function() {
        return $jscomp.iteratorFromArray(this, function(b, c) {
            return c
        })
    }
}, "es8", "es3");
$jscomp.checkStringArgs = function(b, a, c) {
    if (null == b) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (a instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return b + ""
};
$jscomp.polyfill("String.prototype.startsWith", function(b) {
    return b ? b : function(b, c) {
        var a = $jscomp.checkStringArgs(this, b, "startsWith");
        b += "";
        var d = a.length,
            p = b.length;
        c = Math.max(0, Math.min(c | 0, a.length));
        for (var t = 0; t < p && c < d;)
            if (a[c++] != b[t++]) return !1;
        return t >= p
    }
}, "es6", "es3");
"function" !== typeof Object.create && (Object.create = function(b) {
    function a() {}
    a.prototype = b;
    return new a
});
(function(b, a, c) {
    var e = {
        init: function(a, c) {
            this.$elem = b(c);
            this.options = b.extend({}, b.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(b) {
                var a, d = "";
                if ("function" === typeof c.options.jsonSuccess) c.options.jsonSuccess.apply(this, [b]);
                else {
                    for (a in b.owl) b.owl.hasOwnProperty(a) && (d += b.owl[a].item);
                    c.$elem.html(d)
                }
                c.logIn()
            }
            var c = this,
                e;
            "function" === typeof c.options.beforeInit && c.options.beforeInit.apply(this, [c.$elem]);
            "string" === typeof c.options.jsonPath ?
                (e = c.options.jsonPath, b.getJSON(e, a)) : c.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay &&
                (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var b = this;
            a.setTimeout(function() {
                b.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var b = this;
            if (!1 === b.$elem.is(":visible")) b.$elem.css({
                    opacity: 0
                }),
                a.clearInterval(b.autoPlayInterval), a.clearInterval(b.checkVisible);
            else return !1;
            b.checkVisible = a.setInterval(function() {
                b.$elem.is(":visible") && (b.reload(), b.$elem.animate({
                    opacity: 1
                }, 200), a.clearInterval(b.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var b = this.$elem.hasClass(this.options.baseClass),
                a = this.$elem.hasClass(this.options.theme);
            b || this.$elem.addClass(this.options.baseClass);
            a || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            var c = b(this.options.responsiveBaseWidth).width();
            c > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(b, a) {
                        return b[0] - a[0]
                    }), a = 0; a < this.options.itemsCustom.length; a += 1) this.options.itemsCustom[a][0] <= c && (this.options.items = this.options.itemsCustom[a][1]);
            else c <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                c <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), c <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), c <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), c <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var d = this,
                c;
            if (!0 !== d.options.responsive) return !1;
            var e = b(a).width();
            d.resizer = function() {
                b(a).width() !== e && (!1 !== d.options.autoPlay && a.clearInterval(d.autoPlayInterval), a.clearTimeout(c), c = a.setTimeout(function() {
                    e = b(a).width();
                    d.updateVars()
                }, d.options.responsiveRefreshRate))
            };
            b(a).resize(d.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a =
                this,
                c = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(d) {
                var k = b(this);
                k.css({
                    width: a.itemWidth
                }).data("owl-item", Number(d));
                if (0 === d % a.options.items || d === e) d > e || (c += 1);
                k.data("owl-roundPages", c)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() /
                this.options.items)
        },
        max: function() {
            var b = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = b = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = b);
            return b
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0,
                c = 0,
                e, k;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) c += this.itemWidth, this.positionsInArray.push(-c), !0 === this.options.scrollPerPage && (k = b(this.$owlItems[e]),
                k = k.data("owl-roundPages"), k !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = k))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = b('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this,
                c = b('<div class="owl-buttons"/>');
            a.owlControls.append(c);
            a.buttonPrev =
                b("<div/>", {
                    "class": "owl-prev",
                    html: a.options.navigationText[0] || ""
                });
            a.buttonNext = b("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            c.append(a.buttonPrev).append(a.buttonNext);
            c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault()
            });
            c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(d) {
                d.preventDefault();
                b(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper =
                b('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(d) {
                d.preventDefault();
                Number(b(this).data("owl-page")) !== a.currentItem && a.goTo(Number(b(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, c, e, k;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            var m = 0;
            var f = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c %
                this.options.items && (m += 1, f === c && (a = this.itemsAmount - this.options.items), e = b("<div/>", {
                    "class": "owl-page"
                }), k = b("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? m : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), e.append(k), e.data("owl-page", f === c ? a : c), e.data("owl-roundPages", m), this.paginationWrapper.append(e));
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function() {
                b(this).data("owl-roundPages") ===
                    b(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), b(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
                this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
                this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function(b, c, e) {
            var d = this;
            if (d.isTransition) return !1;
            "function" === typeof d.options.beforeMove && d.options.beforeMove.apply(this, [d.$elem]);
            b >= d.maximumItem ? b = d.maximumItem : 0 >= b && (b = 0);
            d.currentItem = d.owl.currentItem = b;
            if (!1 !== d.options.transitionStyle && "drag" !== e && 1 === d.options.items && !0 === d.browser.support3d) return d.swapSpeed(0), !0 === d.browser.support3d ? d.transition3d(d.positionsInArray[b]) : d.css2slide(d.positionsInArray[b], 1), d.afterGo(), d.singleItemTransition(), !1;
            b = d.positionsInArray[b];
            !0 === d.browser.support3d ? (d.isCss3Finish = !1, !0 === c ? (d.swapSpeed("paginationSpeed"), a.setTimeout(function() {
                d.isCss3Finish = !0
            }, d.options.paginationSpeed)) : "rewind" === c ? (d.swapSpeed(d.options.rewindSpeed), a.setTimeout(function() {
                d.isCss3Finish = !0
            }, d.options.rewindSpeed)) : (d.swapSpeed("slideSpeed"), a.setTimeout(function() {
                    d.isCss3Finish = !0
                },
                d.options.slideSpeed)), d.transition3d(b)) : !0 === c ? d.css2slide(b, d.options.paginationSpeed) : "rewind" === c ? d.css2slide(b, d.options.rewindSpeed) : d.css2slide(b, d.options.slideSpeed);
            d.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem =
                this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            a.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var b = this;
            b.apStatus = "play";
            if (!1 === b.options.autoPlay) return !1;
            a.clearInterval(b.autoPlayInterval);
            b.autoPlayInterval = a.setInterval(function() {
                b.next(!0)
            }, b.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" +
                    a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var d = this;
            d.isCssFinish = !1;
            d.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || d.options.slideSpeed,
                complete: function() {
                    d.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var b = c.createElement("div");
            b.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            b = b.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== b && 1 === b.length,
                isTouch: "ontouchstart" in a || a.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
                !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return b(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function d(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function e(a) {
                "on" === a ? (b(c).on(m.ev_types.move, t), b(c).on(m.ev_types.end, k)) : "off" === a && (b(c).off(m.ev_types.move), b(c).off(m.ev_types.end))
            }

            function t(h) {
                h = h.originalEvent || h || a.event;
                m.newPosX = d(h).x - f.offsetX;
                m.newPosY = d(h).y - f.offsetY;
                m.newRelativeX = m.newPosX - f.relativePos;
                "function" === typeof m.options.startDragging && !0 !== f.dragging && 0 !== m.newRelativeX && (f.dragging = !0, m.options.startDragging.apply(m, [m.$elem]));
                (8 < m.newRelativeX || -8 > m.newRelativeX) && !0 === m.browser.isTouch && (void 0 !== h.preventDefault ? h.preventDefault() : h.returnValue = !1, f.sliding = !0);
                (10 < m.newPosY || -10 > m.newPosY) && !1 === f.sliding && b(c).off("touchmove.owl");
                m.newPosX = Math.max(Math.min(m.newPosX, m.newRelativeX / 5), m.maximumPixels + m.newRelativeX / 5);
                !0 === m.browser.support3d ? m.transition3d(m.newPosX) : m.css2move(m.newPosX)
            }

            function k(d) {
                d = d.originalEvent || d || a.event;
                var c;
                d.target = d.target || d.srcElement;
                f.dragging = !1;
                !0 !== m.browser.isTouch && m.$owlWrapper.removeClass("grabbing");
                m.dragDirection = 0 > m.newRelativeX ? m.owl.dragDirection = "left" : m.owl.dragDirection = "right";
                0 !== m.newRelativeX && (c = m.getNewPosition(), m.goTo(c, !1, "drag"), f.targetElement === d.target && !0 !== m.browser.isTouch && (b(d.target).on("click.disable", function(a) {
                        a.stopImmediatePropagation();
                        a.stopPropagation();
                        a.preventDefault();
                        b(a.target).off("click.disable")
                    }),
                    d = b._data(d.target, "events").click, c = d.pop(), d.splice(0, 0, c)));
                e("off")
            }
            var m = this,
                f = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            m.isCssFinish = !0;
            m.$elem.on(m.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || a.event;
                if (3 === c.which) return !1;
                if (!(m.itemsAmount <= m.options.items)) {
                    if (!1 === m.isCssFinish && !m.options.dragBeforeAnimFinish || !1 === m.isCss3Finish && !m.options.dragBeforeAnimFinish) return !1;
                    !1 !== m.options.autoPlay && a.clearInterval(m.autoPlayInterval);
                    !0 === m.browser.isTouch || m.$owlWrapper.hasClass("grabbing") || m.$owlWrapper.addClass("grabbing");
                    m.newPosX = 0;
                    m.newRelativeX = 0;
                    b(this).css(m.removeTransition());
                    var h = b(this).position();
                    f.relativePos = h.left;
                    f.offsetX = d(c).x - h.left;
                    f.offsetY = d(c).y - h.top;
                    e("on");
                    f.sliding = !1;
                    f.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
                a = 0);
            return a
        },
        closestItem: function() {
            var a = this,
                c = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                k = null;
            b.each(c, function(d, f) {
                e - a.itemWidth / 20 > c[d + 1] && e - a.itemWidth / 20 < f && "left" === a.moveDirection() ? (k = f, a.currentItem = !0 === a.options.scrollPerPage ? b.inArray(k, a.positionsInArray) : d) : e + a.itemWidth / 20 < f && e + a.itemWidth / 20 > (c[d + 1] || c[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (k = c[d + 1] || c[c.length - 1], a.currentItem = b.inArray(k, a.positionsInArray)) :
                    (k = c[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, d) {
                a.options.autoPlay = d;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, d) {
                a.goTo(d)
            });
            a.$elem.on("owl.jumpTo", function(b, d) {
                a.jumpTo(d)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }), a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, c, e;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) {
                var k = b(this.$owlItems[a]);
                "loaded" !== k.data("owl-loaded") && (c = k.data("owl-item"), e = k.find(".lazyOwl"), "string" !== typeof e.data("src") ?
                    k.data("owl-loaded", "loaded") : (void 0 === k.data("owl-loaded") && (e.hide(), k.addClass("loading").data("owl-loaded", "checked")), (!0 === this.options.lazyFollow ? c >= this.currentItem : !0) && c < this.currentItem + this.options.items && e.length && this.lazyPreload(k, e)))
            }
        },
        lazyPreload: function(b, c) {
            function d() {
                b.data("owl-loaded", "loaded").removeClass("loading");
                c.removeAttr("data-src");
                "fade" === p.options.lazyEffect ? c.fadeIn(400) : c.show();
                "function" === typeof p.options.afterLazyLoad && p.options.afterLazyLoad.apply(this, [p.$elem])
            }

            function e() {
                f += 1;
                p.completeImg(c.get(0)) || !0 === h ? d() : 100 >= f ? a.setTimeout(e, 100) : d()
            }
            var p = this,
                f = 0,
                h;
            "DIV" === c.prop("tagName") ? (c.css("background-image", "url(" + c.data("src") + ")"), h = !0) : c[0].src = c.data("src");
            e()
        },
        autoHeight: function() {
            function c() {
                var c = b(t.$owlItems[t.currentItem]).height();
                t.wrapperOuter.css("height", c + "px");
                t.wrapperOuter.hasClass("autoHeight") || a.setTimeout(function() {
                    t.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function e() {
                m += 1;
                t.completeImg(k.get(0)) ? c() : 100 >= m ? a.setTimeout(e,
                    100) : t.wrapperOuter.css("height", "")
            }
            var t = this,
                k = b(t.$owlItems[t.currentItem]).find("img"),
                m;
            void 0 !== k.get(0) ? (m = 0, e()) : c()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && b(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this,
                b = a.outClass,
                c = a.inClass,
                e = a.$owlItems.eq(a.currentItem),
                m = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                h = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": h + "px",
                "-moz-perspective-origin": h +
                    "px",
                "perspective-origin": h + "px"
            });
            m.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                m.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(m, b)
            });
            e.addClass(c).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                e.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(e, c)
            })
        },
        clearTransStyle: function(a,
            b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            b(c).off(".owl owl");
            b(a).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            a.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = b.extend({}, this.userOptions,
                a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            b = void 0 === b || -1 === b ? -1 : b;
            b >= this.$userItems.length || -1 === b ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(b).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    b.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 ===
                b(this).data("owl-init")) return !1;
            b(this).data("owl-init", !0);
            var c = Object.create(e);
            c.init(a, this);
            b.data(this, "owlCarousel", c)
        })
    };
    b.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: a,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);
(function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? b(require("jquery")) : b(window.jQuery || window.Zepto)
})(function(b) {
    var a, c = function() {},
        e = !!window.jQuery,
        d, p = b(window),
        t, k, m, f, h = function(b, c) {
            a.ev.on("mfp" + b + ".mfp", c)
        },
        l = function(a, c, d, h) {
            var g = document.createElement("div");
            return g.className = "mfp-" + a, d && (g.innerHTML = d), h ? c && c.appendChild(g) : (g = b(g), c && g.appendTo(c)), g
        },
        q = function(g, c) {
            a.ev.triggerHandler("mfp" + g, c);
            a.st.callbacks && (g = g.charAt(0).toLowerCase() +
                g.slice(1), a.st.callbacks[g] && a.st.callbacks[g].apply(a, b.isArray(c) ? c : [c]))
        },
        x = function(g) {
            g === f && a.currTemplate.closeBtn || (a.currTemplate.closeBtn = b(a.st.closeMarkup.replace("%title%", a.st.tClose)), f = g);
            return a.currTemplate.closeBtn
        },
        y = function() {
            b.magnificPopup.instance || (a = new c, a.init(), b.magnificPopup.instance = a)
        },
        G = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    c.prototype = {
        constructor: c,
        init: function() {
            var g = navigator.appVersion;
            a.isIE7 = -1 !== g.indexOf("MSIE 7.");
            a.isIE8 = -1 !== g.indexOf("MSIE 8.");
            a.isLowIE = a.isIE7 || a.isIE8;
            a.isAndroid = /android/gi.test(g);
            a.isIOS = /iphone|ipad|ipod/gi.test(g);
            a.supportsTransition = G();
            a.probablyMobile = a.isAndroid || a.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            t = b(document);
            a.popupsCache = {}
        },
        open: function(g) {
            var c;
            if (!1 === g.isObj) {
                a.items = g.items.toArray();
                a.index = 0;
                var d =
                    g.items;
                for (c = 0; c < d.length; c++) {
                    var e = d[c];
                    e.parsed && (e = e.el[0]);
                    if (e === g.el[0]) {
                        a.index = c;
                        break
                    }
                }
            } else a.items = b.isArray(g.items) ? g.items : [g.items], a.index = g.index || 0;
            if (a.isOpen) a.updateItemHTML();
            else {
                a.types = [];
                m = "";
                g.mainEl && g.mainEl.length ? a.ev = g.mainEl.eq(0) : a.ev = t;
                g.key ? (a.popupsCache[g.key] || (a.popupsCache[g.key] = {}), a.currTemplate = a.popupsCache[g.key]) : a.currTemplate = {};
                a.st = b.extend(!0, {}, b.magnificPopup.defaults, g);
                a.fixedContentPos = "auto" === a.st.fixedContentPos ? !a.probablyMobile : a.st.fixedContentPos;
                a.st.modal && (a.st.closeOnContentClick = !1, a.st.closeOnBgClick = !1, a.st.showCloseBtn = !1, a.st.enableEscapeKey = !1);
                a.bgOverlay || (a.bgOverlay = l("bg").on("click.mfp", function() {
                    a.close()
                }), a.wrap = l("wrap").attr("tabindex", -1).on("click.mfp", function(b) {
                    a._checkIfClose(b.target) && a.close()
                }), a.container = l("container", a.wrap));
                a.contentContainer = l("content");
                a.st.preloader && (a.preloader = l("preloader", a.container, a.st.tLoading));
                d = b.magnificPopup.modules;
                for (c = 0; c < d.length; c++) e = d[c], e = e.charAt(0).toUpperCase() +
                    e.slice(1), a["init" + e].call(a);
                q("BeforeOpen");
                a.st.showCloseBtn && (a.st.closeBtnInside ? (h("MarkupParse", function(a, b, g, c) {
                    g.close_replaceWith = x(c.type)
                }), m += " mfp-close-btn-in") : a.wrap.append(x()));
                a.st.alignTop && (m += " mfp-align-top");
                a.fixedContentPos ? a.wrap.css({
                    overflow: a.st.overflowY,
                    overflowX: "hidden",
                    overflowY: a.st.overflowY
                }) : a.wrap.css({
                    top: p.scrollTop(),
                    position: "absolute"
                });
                (!1 === a.st.fixedBgPos || "auto" === a.st.fixedBgPos && !a.fixedContentPos) && a.bgOverlay.css({
                    height: t.height(),
                    position: "absolute"
                });
                a.st.enableEscapeKey && t.on("keyup.mfp", function(b) {
                    27 === b.keyCode && a.close()
                });
                p.on("resize.mfp", function() {
                    a.updateSize()
                });
                a.st.closeOnContentClick || (m += " mfp-auto-cursor");
                m && a.wrap.addClass(m);
                c = a.wH = p.height();
                d = {};
                a.fixedContentPos && a._hasScrollBar(c) && (e = a._getScrollbarSize()) && (d.marginRight = e);
                a.fixedContentPos && (a.isIE7 ? b("body, html").css("overflow", "hidden") : d.overflow = "hidden");
                e = a.st.mainClass;
                return a.isIE7 && (e += " mfp-ie7"), e && a._addClassToMFP(e), a.updateItemHTML(), q("BuildControls"),
                    b("html").css(d), a.bgOverlay.add(a.wrap).prependTo(a.st.prependTo || b(document.body)), a._lastFocusedEl = document.activeElement, setTimeout(function() {
                        a.content ? (a._addClassToMFP("mfp-ready"), a._setFocus()) : a.bgOverlay.addClass("mfp-ready");
                        t.on("focusin.mfp", a._onFocusIn)
                    }, 16), a.isOpen = !0, a.updateSize(c), q("Open"), g
            }
        },
        close: function() {
            a.isOpen && (q("BeforeClose"), a.isOpen = !1, a.st.removalDelay && !a.isLowIE && a.supportsTransition ? (a._addClassToMFP("mfp-removing"), setTimeout(function() {
                    a._close()
                }, a.st.removalDelay)) :
                a._close())
        },
        _close: function() {
            q("Close");
            var g = "mfp-removing mfp-ready ";
            a.bgOverlay.detach();
            a.wrap.detach();
            a.container.empty();
            a.st.mainClass && (g += a.st.mainClass + " ");
            a._removeClassFromMFP(g);
            a.fixedContentPos && (g = {
                marginRight: ""
            }, a.isIE7 ? b("body, html").css("overflow", "") : g.overflow = "", b("html").css(g));
            t.off("keyup.mfp focusin.mfp");
            a.ev.off(".mfp");
            a.wrap.attr("class", "mfp-wrap").removeAttr("style");
            a.bgOverlay.attr("class", "mfp-bg");
            a.container.attr("class", "mfp-container");
            a.st.showCloseBtn &&
                (!a.st.closeBtnInside || !0 === a.currTemplate[a.currItem.type]) && a.currTemplate.closeBtn && a.currTemplate.closeBtn.detach();
            a._lastFocusedEl && b(a._lastFocusedEl).focus();
            a.currItem = null;
            a.content = null;
            a.currTemplate = null;
            a.prevHeight = 0;
            q("AfterClose")
        },
        updateSize: function(b) {
            a.isIOS ? (b = document.documentElement.clientWidth / window.innerWidth * window.innerHeight, a.wrap.css("height", b), a.wH = b) : a.wH = b || p.height();
            a.fixedContentPos || a.wrap.css("height", a.wH);
            q("Resize")
        },
        updateItemHTML: function() {
            var g = a.items[a.index];
            a.contentContainer.detach();
            a.content && a.content.detach();
            g.parsed || (g = a.parseEl(a.index));
            var c = g.type;
            q("BeforeChange", [a.currItem ? a.currItem.type : "", c]);
            a.currItem = g;
            if (!a.currTemplate[c]) {
                var d = a.st[c] ? a.st[c].markup : !1;
                q("FirstMarkupParse", d);
                d ? a.currTemplate[c] = b(d) : a.currTemplate[c] = !0
            }
            k && k !== g.type && a.container.removeClass("mfp-" + k + "-holder");
            d = a["get" + c.charAt(0).toUpperCase() + c.slice(1)](g, a.currTemplate[c]);
            a.appendContent(d, c);
            g.preloaded = !0;
            q("Change", g);
            k = g.type;
            a.container.prepend(a.contentContainer);
            q("AfterChange")
        },
        appendContent: function(b, c) {
            (a.content = b) ? a.st.showCloseBtn && a.st.closeBtnInside && !0 === a.currTemplate[c] ? a.content.find(".mfp-close").length || a.content.append(x()) : a.content = b: a.content = "";
            q("BeforeAppend");
            a.container.addClass("mfp-" + c + "-holder");
            a.contentContainer.append(a.content)
        },
        parseEl: function(c) {
            var g = a.items[c],
                d;
            g.tagName ? g = {
                el: b(g)
            } : (d = g.type, g = {
                data: g,
                src: g.src
            });
            if (g.el) {
                for (var e = a.types, h = 0; h < e.length; h++)
                    if (g.el.hasClass("mfp-" + e[h])) {
                        d = e[h];
                        break
                    }
                g.src = g.el.attr("data-mfp-src");
                g.src || (g.src = g.el.attr("href"))
            }
            return g.type = d || a.st.type || "inline", g.index = c, g.parsed = !0, a.items[c] = g, q("ElementParse", g), a.items[c]
        },
        addGroup: function(b, c) {
            var g = function(g) {
                g.mfpEl = this;
                a._openClick(g, b, c)
            };
            c || (c = {});
            c.mainEl = b;
            c.items ? (c.isObj = !0, b.off("click.magnificPopup").on("click.magnificPopup", g)) : (c.isObj = !1, c.delegate ? b.off("click.magnificPopup").on("click.magnificPopup", c.delegate, g) : (c.items = b, b.off("click.magnificPopup").on("click.magnificPopup", g)))
        },
        _openClick: function(c, d, e) {
            if ((void 0 !==
                    e.midClick ? e.midClick : b.magnificPopup.defaults.midClick) || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : b.magnificPopup.defaults.disableOn;
                if (g)
                    if (b.isFunction(g)) {
                        if (!g.call(a)) return !0
                    } else if (p.width() < g) return !0;
                c.type && (c.preventDefault(), a.isOpen && c.stopPropagation());
                e.el = b(c.mfpEl);
                e.delegate && (e.items = d.find(e.delegate));
                a.open(e)
            }
        },
        updateStatus: function(b, c) {
            a.preloader && (d !== b && a.container.removeClass("mfp-s-" + d), !c && "loading" === b && (c =
                a.st.tLoading), c = {
                status: b,
                text: c
            }, q("UpdateStatus", c), b = c.status, c = c.text, a.preloader.html(c), a.preloader.find("a").on("click", function(a) {
                a.stopImmediatePropagation()
            }), a.container.addClass("mfp-s-" + b), d = b)
        },
        _checkIfClose: function(c) {
            if (!b(c).hasClass("mfp-prevent-close")) {
                var g = a.st.closeOnContentClick,
                    d = a.st.closeOnBgClick;
                if (g && d || !a.content || b(c).hasClass("mfp-close") || a.preloader && c === a.preloader[0]) return !0;
                if (c !== a.content[0] && !b.contains(a.content[0], c)) {
                    if (d && b.contains(document, c)) return !0
                } else if (g) return !0;
                return !1
            }
        },
        _addClassToMFP: function(b) {
            a.bgOverlay.addClass(b);
            a.wrap.addClass(b)
        },
        _removeClassFromMFP: function(b) {
            this.bgOverlay.removeClass(b);
            a.wrap.removeClass(b)
        },
        _hasScrollBar: function(b) {
            return (a.isIE7 ? t.height() : document.body.scrollHeight) > (b || p.height())
        },
        _setFocus: function() {
            (a.st.focus ? a.content.find(a.st.focus).eq(0) : a.wrap).focus()
        },
        _onFocusIn: function(c) {
            if (c.target !== a.wrap[0] && !b.contains(a.wrap[0], c.target)) return a._setFocus(), !1
        },
        _parseMarkup: function(a, c, d) {
            var g;
            d.data && (c = b.extend(d.data,
                c));
            q("MarkupParse", [a, c, d]);
            b.each(c, function(b, c) {
                if (void 0 === c || !1 === c) return !0;
                g = b.split("_");
                if (1 < g.length) {
                    if (b = a.find(".mfp-" + g[0]), 0 < b.length) {
                        var d = g[1];
                        "replaceWith" === d ? b[0] !== c[0] && b.replaceWith(c) : "img" === d ? b.is("img") ? b.attr("src", c) : b.replaceWith('<img src="' + c + '" class="' + b.attr("class") + '" />') : b.attr(g[1], c)
                    }
                } else a.find(".mfp-" + b).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === a.scrollbarSize) {
                var b = document.createElement("div");
                b.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(b);
                a.scrollbarSize = b.offsetWidth - b.clientWidth;
                document.body.removeChild(b)
            }
            return a.scrollbarSize
        }
    };
    b.magnificPopup = {
        instance: null,
        proto: c.prototype,
        modules: [],
        open: function(a, c) {
            return y(), a ? a = b.extend(!0, {}, a) : a = {}, a.isObj = !0, a.index = c || 0, this.instance.open(a)
        },
        close: function() {
            return b.magnificPopup.instance && b.magnificPopup.instance.close()
        },
        registerModule: function(a, c) {
            c.options && (b.magnificPopup.defaults[a] = c.options);
            b.extend(this.proto, c.proto);
            this.modules.push(a)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    b.fn.magnificPopup = function(c) {
        y();
        var g = b(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var d,
                    h = e ? g.data("magnificPopup") : g[0].magnificPopup,
                    f = parseInt(arguments[1], 10) || 0;
                h.items ? d = h.items[f] : (d = g, h.delegate && (d = d.find(h.delegate)), d = d.eq(f));
                a._openClick({
                    mfpEl: d
                }, g, h)
            } else a.isOpen && a[c].apply(a, Array.prototype.slice.call(arguments, 1));
        else c = b.extend(!0, {}, c), e ? g.data("magnificPopup", c) : g[0].magnificPopup = c, a.addGroup(g, c);
        return g
    };
    var v, M, F, L = function() {
        F && (M.after(F.addClass(v)).detach(), F = null)
    };
    b.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                a.types.push("inline");
                h("Close.inline", function() {
                    L()
                })
            },
            getInline: function(c, d) {
                L();
                if (c.src) {
                    d = a.st.inline;
                    var g = b(c.src);
                    if (g.length) {
                        var e = g[0].parentNode;
                        e && e.tagName && (M || (v = d.hiddenClass, M = l(v), v = "mfp-" + v), F = g.after(M).detach().removeClass(v));
                        a.updateStatus("ready")
                    } else a.updateStatus("error", d.tNotFound), g = b("<div>");
                    return c.inlineElement = g, g
                }
                return a.updateStatus("ready"), a._parseMarkup(d, {}, c), d
            }
        }
    });
    var w, D = function() {
            w && b(document.body).removeClass(w)
        },
        E = function() {
            D();
            a.req && a.req.abort()
        };
    b.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                a.types.push("ajax");
                w = a.st.ajax.cursor;
                h("Close.ajax", E);
                h("BeforeChange.ajax", E)
            },
            getAjax: function(c) {
                w && b(document.body).addClass(w);
                a.updateStatus("loading");
                var g = b.extend({
                    url: c.src,
                    success: function(g, d, e) {
                        g = {
                            data: g,
                            xhr: e
                        };
                        q("ParseAjax", g);
                        a.appendContent(b(g.data), "ajax");
                        c.finished = !0;
                        D();
                        a._setFocus();
                        setTimeout(function() {
                            a.wrap.addClass("mfp-ready")
                        }, 16);
                        a.updateStatus("ready");
                        q("AjaxContentAdded")
                    },
                    error: function() {
                        D();
                        c.finished = c.loadError = !0;
                        a.updateStatus("error", a.st.ajax.tError.replace("%url%", c.src))
                    }
                }, a.st.ajax.settings);
                return a.req = b.ajax(g), ""
            }
        }
    });
    var C, z = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var g = a.st.image.titleSrc;
        if (g) {
            if (b.isFunction(g)) return g.call(a, c);
            if (c.el) return c.el.attr(g) || ""
        }
        return ""
    };
    b.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = a.st.image;
                a.types.push("image");
                h("Open.image", function() {
                    "image" === a.currItem.type && c.cursor && b(document.body).addClass(c.cursor)
                });
                h("Close.image", function() {
                    c.cursor && b(document.body).removeClass(c.cursor);
                    p.off("resize.mfp")
                });
                h("Resize.image", a.resizeImage);
                a.isLowIE && h("AfterChange", a.resizeImage)
            },
            resizeImage: function() {
                var b = a.currItem;
                if (b && b.img && a.st.image.verticalFit) {
                    var c = 0;
                    a.isLowIE && (c = parseInt(b.img.css("padding-top"), 10) + parseInt(b.img.css("padding-bottom"), 10));
                    b.img.css("max-height", a.wH - c)
                }
            },
            _onImageHasSize: function(b) {
                b.img && (b.hasSize = !0, C && clearInterval(C), b.isCheckingImgSize = !1, q("ImageHasSize", b), b.imgHidden &&
                    (a.content && a.content.removeClass("mfp-loading"), b.imgHidden = !1))
            },
            findImageSize: function(b) {
                var c = 0,
                    g = b.img[0],
                    d = function(e) {
                        C && clearInterval(C);
                        C = setInterval(function() {
                            0 < g.naturalWidth ? a._onImageHasSize(b) : (200 < c && clearInterval(C), c++, 3 === c ? d(10) : 40 === c ? d(50) : 100 === c && d(500))
                        }, e)
                    };
                d(1)
            },
            getImage: function(c, d) {
                var g = 0,
                    e = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === a.currItem && (a._onImageHasSize(c), a.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, q("ImageLoadComplete")) : (g++, 200 >
                            g ? setTimeout(e, 100) : h()))
                    },
                    h = function() {
                        c && (c.img.off(".mfploader"), c === a.currItem && (a._onImageHasSize(c), a.updateStatus("error", f.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    f = a.st.image,
                    B = d.find(".mfp-img");
                if (B.length) {
                    var k = document.createElement("img");
                    k.className = "mfp-img";
                    c.el && c.el.find("img").length && (k.alt = c.el.find("img").attr("alt"));
                    c.img = b(k).on("load.mfploader", e).on("error.mfploader", h);
                    k.src = c.src;
                    B.is("img") && (c.img = c.img.clone());
                    k = c.img[0];
                    0 < k.naturalWidth ?
                        c.hasSize = !0 : k.width || (c.hasSize = !1)
                }
                return a._parseMarkup(d, {
                    title: z(c),
                    img_replaceWith: c.img
                }, c), a.resizeImage(), c.hasSize ? (C && clearInterval(C), c.loadError ? (d.addClass("mfp-loading"), a.updateStatus("error", f.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), a.updateStatus("ready")), d) : (a.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), a.findImageSize(c)), d)
            }
        }
    });
    var I;
    b.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var b = a.st.zoom,
                    c;
                if (b.enabled && a.supportsTransition) {
                    var d = b.duration,
                        e = function(a) {
                            a = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
                            var c = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            };
                            return c["-webkit-transition"] = c["-moz-transition"] = c["-o-transition"] = c.transition = "all " + b.duration / 1E3 + "s " + b.easing, a.css(c), a
                        },
                        f = function() {
                            a.content.css("visibility",
                                "visible")
                        },
                        B, k;
                    h("BuildControls.zoom", function() {
                        a._allowZoom() && (clearTimeout(B), a.content.css("visibility", "hidden"), (c = a._getItemToZoom()) ? (k = e(c), k.css(a._getOffset()), a.wrap.append(k), B = setTimeout(function() {
                            k.css(a._getOffset(!0));
                            B = setTimeout(function() {
                                f();
                                setTimeout(function() {
                                    k.remove();
                                    c = k = null;
                                    q("ZoomAnimationEnded")
                                }, 16)
                            }, d)
                        }, 16)) : f())
                    });
                    h("BeforeClose.zoom", function() {
                        if (a._allowZoom()) {
                            clearTimeout(B);
                            a.st.removalDelay = d;
                            if (!c) {
                                c = a._getItemToZoom();
                                if (!c) return;
                                k = e(c)
                            }
                            k.css(a._getOffset(!0));
                            a.wrap.append(k);
                            a.content.css("visibility", "hidden");
                            setTimeout(function() {
                                k.css(a._getOffset())
                            }, 16)
                        }
                    });
                    h("Close.zoom", function() {
                        a._allowZoom() && (f(), k && k.remove(), c = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === a.currItem.type
            },
            _getItemToZoom: function() {
                return a.currItem.hasSize ? a.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                c ? d = a.currItem.img : d = a.st.zoom.opener(a.currItem.el || a.currItem);
                c = d.offset();
                var g = parseInt(d.css("padding-top"), 10),
                    h = parseInt(d.css("padding-bottom"), 10);
                c.top -= b(window).scrollTop() -
                    g;
                d = {
                    width: d.width(),
                    height: (e ? d.innerHeight() : d[0].offsetHeight) - h - g
                };
                return (void 0 === I && (I = void 0 !== document.createElement("p").style.MozTransform), I) ? d["-moz-transform"] = d.transform = "translate(" + c.left + "px," + c.top + "px)" : (d.left = c.left, d.top = c.top), d
            }
        }
    });
    var J = function(b) {
        if (a.currTemplate.iframe) {
            var c = a.currTemplate.iframe.find("iframe");
            c.length && (b || (c[0].src = "//about:blank"), a.isIE8 && c.css("display", b ? "block" : "none"))
        }
    };
    b.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                a.types.push("iframe");
                h("BeforeChange", function(a, b, c) {
                    b !== c && ("iframe" === b ? J() : "iframe" === c && J(!0))
                });
                h("Close.iframe", function() {
                    J()
                })
            },
            getIframe: function(c, d) {
                var g = c.src,
                    e = a.st.iframe;
                b.each(e.patterns, function() {
                    if (-1 <
                        g.indexOf(this.index)) return this.id && ("string" == typeof this.id ? g = g.substr(g.lastIndexOf(this.id) + this.id.length, g.length) : g = this.id.call(this, g)), g = this.src.replace("%id%", g), !1
                });
                var h = {};
                return e.srcAction && (h[e.srcAction] = g), a._parseMarkup(d, h, c), a.updateStatus("ready"), d
            }
        }
    });
    var A = function(b) {
            var c = a.items.length;
            return b > c - 1 ? b - c : 0 > b ? c + b : b
        },
        B = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    b.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = a.st.gallery,
                    d = !!b.fn.mfpFastClick;
                a.direction = !0;
                if (!c || !c.enabled) return !1;
                m += " mfp-gallery";
                h("Open.mfp-gallery", function() {
                    c.navigateByImgClick && a.wrap.on("click.mfp-gallery", ".mfp-img", function() {
                        if (1 < a.items.length) return a.next(), !1
                    });
                    t.on("keydown.mfp-gallery", function(b) {
                        37 === b.keyCode ? a.prev() : 39 === b.keyCode && a.next()
                    })
                });
                h("UpdateStatus.mfp-gallery", function(b, c) {
                    c.text && (c.text = B(c.text, a.currItem.index, a.items.length))
                });
                h("MarkupParse.mfp-gallery", function(b, d, e, g) {
                    b = a.items.length;
                    e.counter = 1 < b ? B(c.tCounter, g.index, b) : ""
                });
                h("BuildControls.mfp-gallery", function() {
                    if (1 < a.items.length && c.arrows && !a.arrowLeft) {
                        var e = c.arrowMarkup,
                            g = a.arrowLeft = b(e.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close");
                        e = a.arrowRight = b(e.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                        var h = d ? "mfpFastClick" : "click";
                        g[h](function() {
                            a.prev()
                        });
                        e[h](function() {
                            a.next()
                        });
                        a.isIE7 && (l("b", g[0], !1, !0), l("a", g[0], !1, !0), l("b", e[0], !1, !0), l("a", e[0], !1, !0));
                        a.container.append(g.add(e))
                    }
                });
                h("Change.mfp-gallery", function() {
                    a._preloadTimeout && clearTimeout(a._preloadTimeout);
                    a._preloadTimeout = setTimeout(function() {
                        a.preloadNearbyImages();
                        a._preloadTimeout = null
                    }, 16)
                });
                h("Close.mfp-gallery", function() {
                    t.off(".mfp-gallery");
                    a.wrap.off("click.mfp-gallery");
                    a.arrowLeft && d && a.arrowLeft.add(a.arrowRight).destroyMfpFastClick();
                    a.arrowRight = a.arrowLeft = null
                })
            },
            next: function() {
                a.direction = !0;
                a.index = A(a.index + 1);
                a.updateItemHTML()
            },
            prev: function() {
                a.direction = !1;
                a.index = A(a.index - 1);
                a.updateItemHTML()
            },
            goTo: function(b) {
                a.direction = b >= a.index;
                a.index = b;
                a.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var b = a.st.gallery.preload,
                    c = Math.min(b[0], a.items.length);
                b = Math.min(b[1], a.items.length);
                var d;
                for (d = 1; d <= (a.direction ? b : c); d++) a._preloadItem(a.index + d);
                for (d = 1; d <= (a.direction ? c : b); d++) a._preloadItem(a.index - d)
            },
            _preloadItem: function(c) {
                c =
                    A(c);
                if (!a.items[c].preloaded) {
                    var d = a.items[c];
                    d.parsed || (d = a.parseEl(c));
                    q("LazyLoad", d);
                    "image" === d.type && (d.img = b('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0;
                        d.loadError = !0;
                        q("LazyLoadError", d)
                    }).attr("src", d.src));
                    d.preloaded = !0
                }
            }
        }
    });
    b.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (1 < window.devicePixelRatio) {
                    var b =
                        a.st.retina,
                        c = b.ratio;
                    c = isNaN(c) ? c() : c;
                    1 < c && (h("ImageHasSize.retina", function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), h("ElementParse.retina", function(a, d) {
                        d.src = b.replaceSrc(d, c)
                    }))
                }
            }
        }
    });
    (function() {
        var a = "ontouchstart" in window,
            c = function() {
                p.off("touchmove" + d + " touchend" + d)
            },
            d = ".mfpFastClick";
        b.fn.mfpFastClick = function(e) {
            return b(this).each(function() {
                var h = b(this),
                    g;
                if (a) {
                    var k, f, B, l, A, q;
                    h.on("touchstart" + d, function(a) {
                        l = !1;
                        q = 1;
                        A = a.originalEvent ? a.originalEvent.touches[0] :
                            a.touches[0];
                        f = A.clientX;
                        B = A.clientY;
                        p.on("touchmove" + d, function(a) {
                            A = a.originalEvent ? a.originalEvent.touches : a.touches;
                            q = A.length;
                            A = A[0];
                            if (10 < Math.abs(A.clientX - f) || 10 < Math.abs(A.clientY - B)) l = !0, c()
                        }).on("touchend" + d, function(a) {
                            c();
                            l || 1 < q || (g = !0, a.preventDefault(), clearTimeout(k), k = setTimeout(function() {
                                g = !1
                            }, 1E3), e())
                        })
                    })
                }
                h.on("click" + d, function() {
                    g || e()
                })
            })
        };
        b.fn.destroyMfpFastClick = function() {
            b(this).off("touchstart" + d + " click" + d);
            a && p.off("touchmove" + d + " touchend" + d)
        }
    })();
    y()
});
window.Modernizr = function(b, a, c) {
    function e(a, b) {
        return typeof a === b
    }

    function d(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!~("" + e).indexOf("-") && h[e] !== c) return "pfx" == b ? e : !0
        }
        return !1
    }

    function p(a, b, h) {
        var g = a.charAt(0).toUpperCase() + a.slice(1),
            k = (a + " " + G.join(g + " ") + g).split(" ");
        if (e(b, "string") || e(b, "undefined")) b = d(k, b);
        else a: {
            k = (a + " " + v.join(g + " ") + g).split(" "),
            a = k;
            for (var f in a)
                if (g = b[a[f]], g !== c) {
                    b = !1 === h ? a[f] : e(g, "function") ? g.bind(h || b) : g;
                    break a
                }
            b = !1
        }
        return b
    }

    function t() {
        k.input = function(c) {
            for (var d =
                    0, e = c.length; d < e; d++) F[c[d]] = c[d] in l;
            return F.list && (F.list = !!a.createElement("datalist") && !!b.HTMLDataListElement), F
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        k.inputtypes = function(b) {
            for (var d = 0, e, h, k, f = b.length; d < f; d++) l.setAttribute("type", h = b[d]), (e = "text" !== l.type) && (l.value = q, l.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(h) && l.style.WebkitAppearance !== c ? (m.appendChild(l), k = a.defaultView, e = k.getComputedStyle && "textfield" !==
                k.getComputedStyle(l, null).WebkitAppearance && 0 !== l.offsetHeight, m.removeChild(l)) : /^(search|tel)$/.test(h) || (/^(url|email)$/.test(h) ? e = l.checkValidity && !1 === l.checkValidity() : e = l.value != q)), M[b[d]] = !!e;
            return M
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var k = {},
        m = a.documentElement,
        f = a.createElement("modernizr"),
        h = f.style,
        l = a.createElement("input"),
        q = ":)",
        x = {}.toString,
        y = " -webkit- -moz- -o- -ms- ".split(" "),
        G = ["Webkit", "Moz", "O", "ms"],
        v = ["webkit",
            "moz", "o", "ms"
        ];
    f = {};
    var M = {},
        F = {},
        L = [],
        w = L.slice,
        D, E = function(b, c, d, e) {
            var h, g, k, f = a.createElement("div"),
                B = a.body,
                l = B || a.createElement("body");
            if (parseInt(d, 10))
                for (; d--;) {
                    var p = a.createElement("div");
                    p.id = e ? e[d] : "modernizr" + (d + 1);
                    f.appendChild(p)
                }
            return h = ['&#173;<style id="smodernizr">', b, "</style>"].join(""), f.id = "modernizr", (B ? f : l).innerHTML += h, l.appendChild(f), B || (l.style.background = "", l.style.overflow = "hidden", k = m.style.overflow, m.style.overflow = "hidden", m.appendChild(l)), g = c(f, b), B ? f.parentNode.removeChild(f) :
                (l.parentNode.removeChild(l), m.style.overflow = k), !!g
        },
        C = function() {
            var b = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function(d, h) {
                h = h || a.createElement(b[d] || "div");
                d = "on" + d;
                var g = d in h;
                return g || (h.setAttribute || (h = a.createElement("div")), h.setAttribute && h.removeAttribute && (h.setAttribute(d, ""), g = e(h[d], "function"), e(h[d], "undefined") || (h[d] = c), h.removeAttribute(d))), g
            }
        }(),
        z = {}.hasOwnProperty,
        I;
    e(z, "undefined") || e(z.call, "undefined") ? I = function(a,
        b) {
        return b in a && e(a.constructor.prototype[b], "undefined")
    } : I = function(a, b) {
        return z.call(a, b)
    };
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = w.call(arguments, 1),
            d = function() {
                if (this instanceof d) {
                    var e = function() {};
                    e.prototype = b.prototype;
                    e = new e;
                    var h = b.apply(e, c.concat(w.call(arguments)));
                    return Object(h) === h ? h : e
                }
                return b.apply(a, c.concat(w.call(arguments)))
            };
        return d
    });
    f.flexbox = function() {
        return p("flexWrap")
    };
    f.flexboxlegacy =
        function() {
            return p("boxDirection")
        };
    f.canvas = function() {
        var b = a.createElement("canvas");
        return !!b.getContext && !!b.getContext("2d")
    };
    f.canvastext = function() {
        return !!k.canvas && !!e(a.createElement("canvas").getContext("2d").fillText, "function")
    };
    f.touch = function() {
        var c;
        return "ontouchstart" in b || b.DocumentTouch && a instanceof DocumentTouch ? c = !0 : E(["@media (", y.join("touch-enabled),("), "modernizr){#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = 9 === a.offsetTop
        }), c
    };
    f.postmessage = function() {
        return !!b.postMessage
    };
    f.websqldatabase = function() {
        return !!b.openDatabase
    };
    f.indexedDB = function() {
        return !!p("indexedDB", b)
    };
    f.hashchange = function() {
        return C("hashchange", b) && (a.documentMode === c || 7 < a.documentMode)
    };
    f.history = function() {
        return !!b.history && !!history.pushState
    };
    f.draganddrop = function() {
        var b = a.createElement("div");
        return "draggable" in b || "ondragstart" in b && "ondrop" in b
    };
    f.websockets = function() {
        return "WebSocket" in b || "MozWebSocket" in b
    };
    f.rgba = function() {
        h.cssText = "background-color:rgba(150,255,150,.5)";
        return !!~("" +
            h.backgroundColor).indexOf("rgba")
    };
    f.hsla = function() {
        h.cssText = "background-color:hsla(120,40%,100%,.5)";
        return !!~("" + h.backgroundColor).indexOf("rgba") || !!~("" + h.backgroundColor).indexOf("hsla")
    };
    f.multiplebgs = function() {
        h.cssText = "background:url(https://),url(https://),red url(https://)";
        return /(url\s*\(.*?){3}/.test(h.background)
    };
    f.backgroundsize = function() {
        return p("backgroundSize")
    };
    f.borderimage = function() {
        return p("borderImage")
    };
    f.borderradius = function() {
        return p("borderRadius")
    };
    f.boxshadow =
        function() {
            return p("boxShadow")
        };
    f.textshadow = function() {
        return "" === a.createElement("div").style.textShadow
    };
    f.opacity = function() {
        h.cssText = y.join("opacity:.55;") + "";
        return /^0.55$/.test(h.opacity)
    };
    f.cssanimations = function() {
        return p("animationName")
    };
    f.csscolumns = function() {
        return p("columnCount")
    };
    f.cssgradients = function() {
        h.cssText = ("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:" + y.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        return !!~("" + h.backgroundImage).indexOf("gradient")
    };
    f.cssreflections = function() {
        return p("boxReflect")
    };
    f.csstransforms = function() {
        return !!p("transform")
    };
    f.csstransforms3d = function() {
        var a = !!p("perspective");
        return a && "webkitPerspective" in m.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    };
    f.csstransitions = function() {
        return p("transition")
    };
    f.fontface = function() {
        var b;
        return E('@font-face {font-family:"font";src:url("https://")}',
            function(c, d) {
                c = a.getElementById("smodernizr");
                c = (c = c.sheet || c.styleSheet) ? c.cssRules && c.cssRules[0] ? c.cssRules[0].cssText : c.cssText || "" : "";
                b = /src/i.test(c) && 0 === c.indexOf(d.split(" ")[0])
            }), b
    };
    f.generatedcontent = function() {
        var a;
        return E(['#modernizr{font:0/0 a}#modernizr:after{content:"', q, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = 3 <= b.offsetHeight
        }), a
    };
    f.video = function() {
        var b = a.createElement("video"),
            c = !1;
        try {
            if (c = !!b.canPlayType) c = new Boolean(c), c.ogg = b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,
                ""), c.h264 = b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (g) {}
        return c
    };
    f.audio = function() {
        var b = a.createElement("audio"),
            c = !1;
        try {
            if (c = !!b.canPlayType) c = new Boolean(c), c.ogg = b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = b.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = b.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/aac;")).replace(/^no$/,
                "")
        } catch (g) {}
        return c
    };
    f.localstorage = function() {
        try {
            return localStorage.setItem("modernizr", "modernizr"), localStorage.removeItem("modernizr"), !0
        } catch (A) {
            return !1
        }
    };
    f.sessionstorage = function() {
        try {
            return sessionStorage.setItem("modernizr", "modernizr"), sessionStorage.removeItem("modernizr"), !0
        } catch (A) {
            return !1
        }
    };
    f.webworkers = function() {
        return !!b.Worker
    };
    f.applicationcache = function() {
        return !!b.applicationCache
    };
    f.svg = function() {
        return !!a.createElementNS && !!a.createElementNS("http://www.w3.org/2000/svg",
            "svg").createSVGRect
    };
    f.inlinesvg = function() {
        var b = a.createElement("div");
        return b.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == (b.firstChild && b.firstChild.namespaceURI)
    };
    f.svgclippaths = function() {
        return !!a.createElementNS && /SVGClipPath/.test(x.call(a.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    };
    for (var J in f) I(f, J) && (D = J.toLowerCase(), k[D] = f[J](), L.push((k[D] ? "" : "no-") + D));
    k.input || t();
    k.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a) I(a, d) && k.addTest(d, a[d]);
        else {
            a =
                a.toLowerCase();
            if (k[a] !== c) return k;
            b = "function" == typeof b ? b() : b;
            m.className += " dealer" + (b ? "" : "no-") + a;
            k[a] = b
        }
        return k
    };
    h.cssText = "";
    return f = l = null,
        function(a, b) {
            function c() {
                var a = y.elements;
                return "string" == typeof a ? a.split(" ") : a
            }

            function d(a) {
                var b = t[a[m]];
                return b || (b = {}, B++, a[m] = B, t[B] = b), b
            }

            function e(a, c, e) {
                c || (c = b);
                if (x) return c.createElement(a);
                e || (e = d(c));
                var n;
                return e.cache[a] ? n = e.cache[a].cloneNode() : p.test(a) ? n = (e.cache[a] = e.createElem(a)).cloneNode() : n = e.createElem(a), !n.canHaveChildren ||
                    l.test(a) || n.tagUrn ? n : e.frag.appendChild(n)
            }

            function h(a, b) {
                b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag());
                a.createElement = function(c) {
                    return y.shivMethods ? e(c, a, b) : b.createElem(c)
                };
                a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(y, b.frag)
            }

            function f(a) {
                a ||
                    (a = b);
                var c = d(a);
                if (y.shivCSS && !q && !c.hasCSS) {
                    var e = a;
                    var n = e.createElement("p");
                    e = e.getElementsByTagName("head")[0] || e.documentElement;
                    n = (n.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", e.insertBefore(n.lastChild, e.firstChild));
                    c.hasCSS = !!n
                }
                return x || h(a, c), a
            }
            var k = a.html5 || {},
                l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                q, m = "_html5shiv",
                B = 0,
                t = {},
                x;
            (function() {
                try {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>";
                    q = "hidden" in a;
                    var c;
                    if (!(c = 1 == a.childNodes.length)) {
                        b.createElement("a");
                        var d = b.createDocumentFragment();
                        c = "undefined" == typeof d.cloneNode || "undefined" == typeof d.createDocumentFragment || "undefined" == typeof d.createElement
                    }
                    x = c
                } catch (n) {
                    x = q = !0
                }
            })();
            var y = {
                elements: k.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !== k.shivCSS,
                supportsUnknownElements: x,
                shivMethods: !1 !== k.shivMethods,
                type: "default",
                shivDocument: f,
                createElement: e,
                createDocumentFragment: function(a, e) {
                    a || (a = b);
                    if (x) return a.createDocumentFragment();
                    e = e || d(a);
                    a = e.frag.cloneNode();
                    e = 0;
                    for (var h = c(), n = h.length; e < n; e++) a.createElement(h[e]);
                    return a
                }
            };
            a.html5 = y;
            f(b)
        }(this, a), k._version = "2.8.3", k._prefixes = y, k._domPrefixes = v, k._cssomPrefixes = G, k.mq = function(a) {
            var c = b.matchMedia || b.msMatchMedia;
            if (c) return c(a) && c(a).matches ||
                !1;
            var d;
            return E("@media " + a + " { #modernizr { position: absolute; } }", function(a) {
                d = "absolute" == (b.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).position
            }), d
        }, k.hasEvent = C, k.testProp = function(a) {
            return d([a])
        }, k.testAllProps = p, k.testStyles = E, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" dealerjs dealer" + L.join(" dealer")), k
}(this, this.document);
(function(b, a, c) {
    function e(a) {
        return "[object Function]" == y.call(a)
    }

    function d(a) {
        return "string" == typeof a
    }

    function p() {}

    function t(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function k() {
        var a = G.shift();
        v = 1;
        a ? a.t ? q(function() {
            ("c" == a.t ? A.injectCss : A.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), k()) : v = 0
    }

    function m(b, c, d, e, h, f, l) {
        function g(a) {
            if (!m && t(p.readyState) && (y.r = m = 1, !v && k(), p.onload = p.onreadystatechange = null, a)) {
                "img" != b && q(function() {
                    L.removeChild(p)
                }, 50);
                for (var d in z[c]) z[c].hasOwnProperty(d) &&
                    z[c][d].onload()
            }
        }
        l = l || A.errorTimeout;
        var p = a.createElement(b),
            m = 0,
            B = 0,
            y = {
                t: d,
                s: c,
                e: h,
                a: f,
                x: l
            };
        1 === z[c] && (B = 1, z[c] = []);
        "object" == b ? p.data = c : (p.src = c, p.type = b);
        p.width = p.height = "0";
        p.onerror = p.onload = p.onreadystatechange = function() {
            g.call(this, B)
        };
        G.splice(e, 0, y);
        "img" != b && (B || 2 === z[c] ? (L.insertBefore(p, F ? null : x), q(g, l)) : z[c].push(p))
    }

    function f(a, b, c, e, h) {
        return v = 0, b = b || "j", d(a) ? m("c" == b ? D : w, a, b, this.i++, c, e, h) : (G.splice(this.i++, 0, a), 1 == G.length && k()), this
    }

    function h() {
        var a = A;
        return a.loader = {
            load: f,
            i: 0
        }, a
    }
    var l = a.documentElement,
        q = b.setTimeout,
        x = a.getElementsByTagName("script")[0],
        y = {}.toString,
        G = [],
        v = 0,
        M = "MozAppearance" in l.style,
        F = M && !!a.createRange().compareNode,
        L = F ? l : x.parentNode;
    l = b.opera && "[object Opera]" == y.call(b.opera);
    l = !!a.attachEvent && !l;
    var w = M ? "object" : l ? "script" : "img",
        D = l ? "script" : w,
        E = Array.isArray || function(a) {
            return "[object Array]" == y.call(a)
        },
        C = [],
        z = {},
        I = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        },
        J;
    var A = function(a) {
        function b(a) {
            a = a.split("!");
            var b = C.length,
                c = a.pop(),
                d = a.length;
            c = {
                url: c,
                origUrl: c,
                prefixes: a
            };
            var e, h;
            for (h = 0; h < d; h++) {
                var f = a[h].split("=");
                (e = I[f.shift()]) && (c = e(c, f))
            }
            for (h = 0; h < b; h++) c = C[h](c);
            return c
        }

        function f(a, d, f, k, g) {
            var l = b(a),
                p = l.autoCallback;
            l.url.split(".").pop().split("?").shift();
            l.bypass || (d && (d = e(d) ? d : d[a] || d[k] || d[a.split("/").pop().split("?")[0]]), l.instead ? l.instead(a, d, f, k, g) : (z[l.url] ? l.noexec = !0 : z[l.url] = 1, f.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : c, l.noexec, l.attrs,
                l.timeout), (e(d) || e(p)) && f.load(function() {
                h();
                d && d(l.origUrl, g, k);
                p && p(l.origUrl, g, k);
                z[l.url] = 2
            })))
        }

        function k(a, b) {
            function c(a, c) {
                if (a)
                    if (d(a)) c || (g = function() {
                        var a = [].slice.call(arguments);
                        l.apply(this, a);
                        m()
                    }), f(a, g, b, 0, h);
                    else {
                        if (Object(a) === a)
                            for (t in q = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(t) && (!c && !--q && (e(g) ? g = function() {
                                var a = [].slice.call(arguments);
                                l.apply(this, a);
                                m()
                            } : g[t] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b);
                                    m()
                                }
                            }(l[t])), f(a[t], g, b, t, h))
                    }
                else !c && m()
            }
            var h = !!a.test,
                k = a.load || a.both,
                g = a.callback || p,
                l = g,
                m = a.complete || p,
                q, t;
            c(h ? a.yep : a.nope, !!k);
            k && c(k)
        }
        var l, q = this.yepnope.loader;
        if (d(a)) f(a, 0, q, 0);
        else if (E(a))
            for (l = 0; l < a.length; l++) {
                var m = a[l];
                d(m) ? f(m, 0, q, 0) : E(m) ? A(m) : Object(m) === m && k(m, q)
            } else Object(a) === a && k(a, q)
    };
    A.addPrefix = function(a, b) {
        I[a] = b
    };
    A.addFilter = function(a) {
        C.push(a)
    };
    A.errorTimeout = 1E4;
    null == a.readyState && a.addEventListener && (a.readyState = "loading", a.addEventListener("DOMContentLoaded",
        J = function() {
            a.removeEventListener("DOMContentLoaded", J, 0);
            a.readyState = "complete"
        }, 0));
    b.yepnope = h();
    b.yepnope.executeStack = k;
    b.yepnope.injectJs = function(b, c, d, e, h, f) {
        var g = a.createElement("script"),
            l, m;
        e = e || A.errorTimeout;
        g.src = b;
        for (m in d) g.setAttribute(m, d[m]);
        c = f ? k : c || p;
        g.onreadystatechange = g.onload = function() {
            !l && t(g.readyState) && (l = 1, c(), g.onload = g.onreadystatechange = null)
        };
        q(function() {
            l || (l = 1, c(1))
        }, e);
        h ? g.onload() : x.parentNode.insertBefore(g, x)
    };
    b.yepnope.injectCss = function(b, c, d, e, h, f) {
        e =
            a.createElement("link");
        var g;
        c = f ? k : c || p;
        e.href = b;
        e.rel = "stylesheet";
        e.type = "text/css";
        for (g in d) e.setAttribute(g, d[g]);
        h || (x.parentNode.insertBefore(e, x), q(c, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
(function(b, a) {
    function c(a, c) {
        c = c || {};
        var d = this,
            e = c.query || "> :even";
        b.extend(d, {
            $el: a,
            options: c,
            sections: [],
            isAccordion: c.accordion || !1,
            db: c.persist ? jQueryCollapseStorage(a.get(0).id) : !1
        });
        d.states = d.db ? d.db.read() : [];
        d.$el.find(e).each(function() {
            new jQueryCollapseSection(b(this), d)
        });
        (function(a) {
            d.$el.on("click", "[data-collapse-summary] " + (a.options.clickQuery || ""), b.proxy(d.handleClick, a));
            d.$el.bind("toggle close open", b.proxy(d.handleEvent, a))
        })(d)
    }

    function e(a, c) {
        c.options.clickQuery || a.wrapInner('<a href="#"/>');
        b.extend(this, {
            isOpen: !1,
            $summary: a.attr("data-collapse-summary", ""),
            $details: a.next(),
            options: c.options,
            parent: c
        });
        c.sections.push(this);
        a = c.states[this._index()];
        0 === a ? this.close(!0) : this.$summary.is(".open") || 1 === a ? this.open(!0) : this.close(!0)
    }
    c.prototype = {
        handleClick: function(a, c) {
            a.preventDefault();
            c = c || "toggle";
            for (var d = this.sections, e = d.length; e--;)
                if (b.contains(d[e].$summary[0], a.target)) {
                    d[e][c]();
                    break
                }
        },
        handleEvent: function(a) {
            if (a.target == this.$el.get(0)) return this[a.type]();
            this.handleClick(a,
                a.type)
        },
        open: function(a) {
            this._change("open", a)
        },
        close: function(a) {
            this._change("close", a)
        },
        toggle: function(a) {
            this._change("toggle", a)
        },
        _change: function(a, c) {
            if (isFinite(c)) return this.sections[c][a]();
            b.each(this.sections, function(b, c) {
                c[a]()
            })
        }
    };
    e.prototype = {
        toggle: function() {
            this.isOpen ? this.close() : this.open()
        },
        close: function(a) {
            this._changeState("close", a)
        },
        open: function(a) {
            this.options.accordion && !a && b.each(this.parent.sections, function(a, b) {
                b.close()
            });
            this._changeState("open", a)
        },
        _index: function() {
            return b.inArray(this,
                this.parent.sections)
        },
        _changeState: function(a, c) {
            this.isOpen = "open" == a;
            if (b.isFunction(this.options[a]) && !c) this.options[a].apply(this.$details);
            else this.$details[this.isOpen ? "show" : "hide"]();
            this.$summary.toggleClass("open", "close" !== a);
            this.$details.attr("aria-hidden", "close" === a);
            this.$summary.attr("aria-expanded", "open" === a);
            this.$summary.trigger("open" === a ? "opened" : "closed", this);
            this.parent.db && this.parent.db.write(this._index(), this.isOpen)
        }
    };
    b.fn.extend({
        collapse: function(a, e) {
            return (e ?
                b("body").find("[data-collapse]") : b(this)).each(function() {
                var d = e ? {} : a,
                    k = b(this).attr("data-collapse") || "";
                b.each(k.split(" "), function(a, b) {
                    b && (d[b] = !0)
                });
                new c(b(this), d)
            })
        }
    });
    a.jQueryCollapse = c;
    a.jQueryCollapseSection = e;
    b(function() {
        b.fn.collapse(!1, !0)
    })
})(window.jQuery, window);
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "undefined" !== typeof module && module.exports ? module.exports = b : b(jQuery, window, document)
})(function(b) {
    (function(a) {
        var c = "undefined" !== typeof module && module.exports,
            e = "https:" == document.location.protocol ? "https:" : "http:";
        "function" === typeof define && define.amd || (c ? require("jquery-mousewheel")(b) : b.event.special.mousewheel || b("head").append(decodeURI("%3Cscript src=" + e + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E")));
        a()
    })(function() {
        var a = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            c = 0,
            e = {},
            d = window.attachEvent && !window.addEventListener ? 1 : 0,
            p = !1,
            t, k = "mCSB_dragger_onDrag mCSB_scrollTools_onDrag mCS_img_loaded mCS_disabled mCS_destroyed mCS_no_scrollbar mCS-autoHide mCS-dir-rtl mCS_no_scrollbar_y mCS_no_scrollbar_x mCS_y_hidden mCS_x_hidden mCSB_draggerContainer mCSB_buttonUp mCSB_buttonDown mCSB_buttonLeft mCSB_buttonRight".split(" "),
            m = {
                init: function(d) {
                    d = b.extend(!0, {}, a, d);
                    var n = f.call(this);
                    if (d.live) {
                        var u = d.liveSelector || this.selector || ".mCustomScrollbar",
                            g = b(u);
                        if ("off" === d.live) {
                            l(u);
                            return
                        }
                        e[u] = setTimeout(function() {
                            g.mCustomScrollbar(d);
                            "once" === d.live && g.length && l(u)
                        }, 500)
                    } else l(u);
                    d.setWidth = d.set_width ? d.set_width : d.setWidth;
                    d.setHeight = d.set_height ? d.set_height : d.setHeight;
                    d.axis = d.horizontalScroll ? "x" : q(d.axis);
                    d.scrollInertia = 0 < d.scrollInertia && 17 > d.scrollInertia ? 17 : d.scrollInertia;
                    "object" !== typeof d.mouseWheel &&
                        1 == d.mouseWheel && (d.mouseWheel = {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: !1,
                            deltaFactor: "auto",
                            normalizeDelta: !1,
                            invert: !1
                        });
                    d.mouseWheel.scrollAmount = d.mouseWheelPixels ? d.mouseWheelPixels : d.mouseWheel.scrollAmount;
                    d.mouseWheel.normalizeDelta = d.advanced.normalizeMouseWheelDelta ? d.advanced.normalizeMouseWheelDelta : d.mouseWheel.normalizeDelta;
                    d.scrollButtons.scrollType = x(d.scrollButtons.scrollType);
                    h(d);
                    return b(n).each(function() {
                        var a = b(this);
                        if (!a.data("mCS")) {
                            a.data("mCS", {
                                idx: ++c,
                                opt: d,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: a.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var e = a.data("mCS"),
                                n = e.opt,
                                u = a.data("mcs-axis"),
                                g = a.data("mcs-scrollbar-position"),
                                f = a.data("mcs-theme");
                            u && (n.axis = u);
                            g && (n.scrollbarPosition = g);
                            f && (n.theme = f, h(n));
                            g = b(this);
                            u = g.data("mCS");
                            f = u.opt;
                            var r = f.autoExpandScrollbar ? " " + k[1] + "_expand" : "";
                            r = ["<div id='mCSB_" +
                                u.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + u.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + k[12] + "'><div id='mCSB_" + u.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + u.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + u.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + k[12] + "'><div id='mCSB_" +
                                u.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"
                            ];
                            var l = "yx" === f.axis ? "mCSB_vertical_horizontal" : "x" === f.axis ? "mCSB_horizontal" : "mCSB_vertical";
                            r = "yx" === f.axis ? r[0] + r[1] : "x" === f.axis ? r[1] : r[0];
                            var ha = "yx" === f.axis ? "<div id='mCSB_" + u.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                                q = f.autoHideScrollbar ? " " + k[6] : "",
                                p = "x" !== f.axis && "rtl" === u.langDir ? " " + k[7] : "";
                            f.setWidth && g.css("width",
                                f.setWidth);
                            f.setHeight && g.css("height", f.setHeight);
                            f.setLeft = "y" !== f.axis && "rtl" === u.langDir ? "989999px" : f.setLeft;
                            g.addClass("mCustomScrollbar _mCS_" + u.idx + q + p).wrapInner("<div id='mCSB_" + u.idx + "' class='mCustomScrollBox mCS-" + f.theme + " " + l + "'><div id='mCSB_" + u.idx + "_container' class='mCSB_container' style='position:relative; top:" + f.setTop + "; left:" + f.setLeft + ";' dir='" + u.langDir + "' /></div>");
                            l = b("#mCSB_" + u.idx);
                            q = b("#mCSB_" + u.idx + "_container");
                            "y" === f.axis || f.advanced.autoExpandHorizontalScroll ||
                                q.css("width", y(q));
                            "outside" === f.scrollbarPosition ? ("static" === g.css("position") && g.css("position", "relative"), g.css("overflow", "visible"), l.addClass("mCSB_outside").after(r)) : (l.addClass("mCSB_inside").append(r), q.wrap(ha));
                            f = b(this).data("mCS");
                            g = f.opt;
                            f = b(".mCSB_" + f.idx + "_scrollbar:first");
                            r = Q(g.scrollButtons.tabindex) ? "tabindex='" + g.scrollButtons.tabindex + "'" : "";
                            r = ["<a href='#' class='" + k[13] + "' " + r + " />", "<a href='#' class='" + k[14] + "' " + r + " />", "<a href='#' class='" + k[15] + "' " + r + " />", "<a href='#' class='" +
                                k[16] + "' " + r + " />"
                            ];
                            r = ["x" === g.axis ? r[2] : r[0], "x" === g.axis ? r[3] : r[1], r[2], r[3]];
                            g.scrollButtons.enable && f.prepend(r[0]).append(r[1]).next(".mCSB_scrollTools").prepend(r[2]).append(r[3]);
                            u = [b("#mCSB_" + u.idx + "_dragger_vertical"), b("#mCSB_" + u.idx + "_dragger_horizontal")];
                            u[0].css("min-height", u[0].height());
                            u[1].css("min-width", u[1].width());
                            e && n.callbacks.onCreate && "function" === typeof n.callbacks.onCreate && n.callbacks.onCreate.call(this);
                            b("#mCSB_" + e.idx + "_container img:not(." + k[2] + ")").addClass(k[2]);
                            m.update.call(null, a)
                        }
                    })
                },
                update: function(a, c) {
                    a = a || f.call(this);
                    return b(a).each(function() {
                        var a = b(this);
                        if (a.data("mCS")) {
                            var e = a.data("mCS"),
                                n = e.opt,
                                h = b("#mCSB_" + e.idx + "_container"),
                                f = b("#mCSB_" + e.idx),
                                g = [b("#mCSB_" + e.idx + "_dragger_vertical"), b("#mCSB_" + e.idx + "_dragger_horizontal")];
                            if (h.length) {
                                e.tweenRunning && O(a);
                                c && e && n.callbacks.onBeforeUpdate && "function" === typeof n.callbacks.onBeforeUpdate && n.callbacks.onBeforeUpdate.call(this);
                                a.hasClass(k[3]) && a.removeClass(k[3]);
                                a.hasClass(k[4]) && a.removeClass(k[4]);
                                f.css("max-height", "none");
                                f.height() !== a.height() && f.css("max-height", a.height());
                                var r = b(this).data("mCS");
                                f = r.opt;
                                r = b("#mCSB_" + r.idx + "_container");
                                if (f.advanced.autoExpandHorizontalScroll && "y" !== f.axis) {
                                    r.css({
                                        width: "auto",
                                        "min-width": 0,
                                        "overflow-x": "scroll"
                                    });
                                    var l = Math.ceil(r[0].scrollWidth);
                                    3 === f.advanced.autoExpandHorizontalScroll || 2 !== f.advanced.autoExpandHorizontalScroll && l > r.parent().width() ? r.css({
                                        width: l,
                                        "min-width": "100%",
                                        "overflow-x": "inherit"
                                    }) : r.css({
                                        "overflow-x": "inherit",
                                        position: "absolute"
                                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                        width: Math.ceil(r[0].getBoundingClientRect().right +
                                            .4) - Math.floor(r[0].getBoundingClientRect().left),
                                        "min-width": "100%",
                                        position: "relative"
                                    }).unwrap()
                                }
                                "y" === n.axis || n.advanced.autoExpandHorizontalScroll || h.css("width", y(h));
                                var q = b(this).data("mCS");
                                f = b("#mCSB_" + q.idx);
                                l = b("#mCSB_" + q.idx + "_container");
                                r = null == q.overflowed ? l.height() : l.outerHeight(!1);
                                q = null == q.overflowed ? l.width() : l.outerWidth(!1);
                                var m = l[0].scrollHeight;
                                l = l[0].scrollWidth;
                                m > r && (r = m);
                                l > q && (q = l);
                                f = [r > f.height(), q > f.width()];
                                e.overflowed = f;
                                L.call(this);
                                n.autoDraggerLength && (f = b(this).data("mCS"),
                                    r = b("#mCSB_" + f.idx), l = b("#mCSB_" + f.idx + "_container"), f = [b("#mCSB_" + f.idx + "_dragger_vertical"), b("#mCSB_" + f.idx + "_dragger_horizontal")], r = [r.height() / l.outerHeight(!1), r.width() / l.outerWidth(!1)], r = [parseInt(f[0].css("min-height")), Math.round(r[0] * f[0].parent().height()), parseInt(f[1].css("min-width")), Math.round(r[1] * f[1].parent().width())], l = d && r[3] < r[2] ? r[2] : r[3], f[0].css({
                                        height: d && r[1] < r[0] ? r[0] : r[1],
                                        "max-height": f[0].parent().height() - 10
                                    }).find(".mCSB_dragger_bar").css({
                                        "line-height": r[0] + "px"
                                    }),
                                    f[1].css({
                                        width: l,
                                        "max-width": f[1].parent().width() - 10
                                    }));
                                f = b(this).data("mCS");
                                l = b("#mCSB_" + f.idx);
                                q = b("#mCSB_" + f.idx + "_container");
                                r = [b("#mCSB_" + f.idx + "_dragger_vertical"), b("#mCSB_" + f.idx + "_dragger_horizontal")];
                                l = [q.outerHeight(!1) - l.height(), q.outerWidth(!1) - l.width()];
                                r = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                                f.scrollRatio = {
                                    y: r[0],
                                    x: r[1]
                                };
                                M.call(this);
                                h = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)];
                                "x" !== n.axis && (e.overflowed[0] ? g[0].height() >
                                    g[0].parent().height() ? v.call(this) : (K(a, h[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }), e.contentReset.y = null) : (v.call(this), "y" === n.axis ? F.call(this) : "yx" === n.axis && e.overflowed[1] && K(a, h[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    })));
                                "y" !== n.axis && (e.overflowed[1] ? g[1].width() > g[1].parent().width() ? v.call(this) : (K(a, h[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), e.contentReset.x = null) : (v.call(this), "x" === n.axis ? F.call(this) : "yx" === n.axis && e.overflowed[0] && K(a, h[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                })));
                                c && e && (2 === c && n.callbacks.onImageLoad && "function" === typeof n.callbacks.onImageLoad ? n.callbacks.onImageLoad.call(this) : 3 === c && n.callbacks.onSelectorChange && "function" === typeof n.callbacks.onSelectorChange ? n.callbacks.onSelectorChange.call(this) : n.callbacks.onUpdate && "function" === typeof n.callbacks.onUpdate && n.callbacks.onUpdate.call(this));
                                Y.call(this)
                            }
                        }
                    })
                },
                scrollTo: function(a, c) {
                    if ("undefined" != typeof a && null != a) {
                        var d = f.call(this);
                        return b(d).each(function() {
                            var d = b(this);
                            if (d.data("mCS")) {
                                var e =
                                    d.data("mCS"),
                                    n = e.opt,
                                    h = b.extend(!0, {}, {
                                        trigger: "external",
                                        scrollInertia: n.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    }, c),
                                    f = X.call(this, a),
                                    r = 0 < h.scrollInertia && 17 > h.scrollInertia ? 17 : h.scrollInertia;
                                f[0] = aa.call(this, f[0], "y");
                                f[1] = aa.call(this, f[1], "x");
                                h.moveDragger && (f[0] *= e.scrollRatio.y, f[1] *= e.scrollRatio.x);
                                h.dur = fa() ? 0 : r;
                                setTimeout(function() {
                                    null !== f[0] && "undefined" !== typeof f[0] && "x" !== n.axis && e.overflowed[0] && (h.dir =
                                        "y", h.overwrite = "all", K(d, f[0].toString(), h));
                                    null !== f[1] && "undefined" !== typeof f[1] && "y" !== n.axis && e.overflowed[1] && (h.dir = "x", h.overwrite = "none", K(d, f[1].toString(), h))
                                }, h.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var a = f.call(this);
                    return b(a).each(function() {
                        var a = b(this);
                        a.data("mCS") && O(a)
                    })
                },
                disable: function(a) {
                    var c = f.call(this);
                    return b(c).each(function() {
                        var c = b(this);
                        c.data("mCS") && (c.data("mCS"), Y.call(this, "remove"), F.call(this), a && v.call(this), L.call(this, !0), c.addClass(k[3]))
                    })
                },
                destroy: function() {
                    var a =
                        f.call(this);
                    return b(a).each(function() {
                        var c = b(this);
                        if (c.data("mCS")) {
                            var d = c.data("mCS"),
                                e = d.opt,
                                n = b("#mCSB_" + d.idx),
                                h = b("#mCSB_" + d.idx + "_container"),
                                f = b(".mCSB_" + d.idx + "_scrollbar");
                            e.live && l(e.liveSelector || b(a).selector);
                            Y.call(this, "remove");
                            F.call(this);
                            v.call(this);
                            c.removeData("mCS");
                            N(this, "mcs");
                            f.remove();
                            h.find("img." + k[2]).removeClass(k[2]);
                            n.replaceWith(h.contents());
                            c.removeClass("mCustomScrollbar _mCS_" + d.idx + " " + k[6] + " " + k[7] + " " + k[5] + " " + k[3]).addClass(k[4])
                        }
                    })
                }
            },
            f = function() {
                return "object" !==
                    typeof b(this) || 1 > b(this).length ? ".mCustomScrollbar" : this
            },
            h = function(a) {
                a.autoDraggerLength = -1 < b.inArray(a.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) ? !1 : a.autoDraggerLength;
                a.autoExpandScrollbar = -1 < b.inArray(a.theme, "rounded-dots rounded-dots-dark 3d 3d-dark 3d-thick 3d-thick-dark inset inset-dark inset-2 inset-2-dark inset-3 inset-3-dark".split(" ")) ? !1 : a.autoExpandScrollbar;
                a.scrollButtons.enable = -1 < b.inArray(a.theme, ["minimal", "minimal-dark"]) ? !1 : a.scrollButtons.enable;
                a.autoHideScrollbar = -1 < b.inArray(a.theme, ["minimal", "minimal-dark"]) ? !0 : a.autoHideScrollbar;
                a.scrollbarPosition = -1 < b.inArray(a.theme, ["minimal", "minimal-dark"]) ? "outside" : a.scrollbarPosition
            },
            l = function(a) {
                e[a] && (clearTimeout(e[a]), N(e, a))
            },
            q = function(a) {
                return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
            },
            x = function(a) {
                return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
            },
            y = function(a) {
                var c = [a[0].scrollWidth, Math.max.apply(Math, a.children().map(function() {
                    return b(this).outerWidth(!0)
                }).get())];
                a = a.parent().width();
                return c[0] > a ? c[0] : c[1] > a ? c[1] : "100%"
            },
            G = function(a, b, c) {
                c = c ? k[0] + "_expanded" : "";
                var d = a.closest(".mCSB_scrollTools");
                "active" === b ? (a.toggleClass(k[0] + " " + c), d.toggleClass(k[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(k[0]), d.removeClass(k[1])) : (a.addClass(k[0]), d.addClass(k[1])))
            },
            v = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt,
                    e = b("#mCSB_" + c.idx),
                    h = b("#mCSB_" + c.idx + "_container"),
                    f = [b("#mCSB_" + c.idx + "_dragger_vertical"), b("#mCSB_" +
                        c.idx + "_dragger_horizontal")];
                O(a);
                if ("x" !== d.axis && !c.overflowed[0] || "y" === d.axis && c.overflowed[0]) f[0].add(h).css("top", 0), K(a, "_resetY");
                if ("y" !== d.axis && !c.overflowed[1] || "x" === d.axis && c.overflowed[1]) d = dx = 0, "rtl" === c.langDir && (d = e.width() - h.outerWidth(!1), dx = Math.abs(d / c.scrollRatio.x)), h.css("left", d), f[1].css("left", dx), K(a, "_resetX")
            },
            M = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt;
                if (!c.bindEvents) {
                    D.call(this);
                    d.contentTouchScroll && E.call(this);
                    C.call(this);
                    if (d.mouseWheel.enable) {
                        var e =
                            function() {
                                h = setTimeout(function() {
                                    b.event.special.mousewheel ? (clearTimeout(h), z.call(a[0])) : e()
                                }, 100)
                            },
                            h;
                        e()
                    }
                    B.call(this);
                    ca.call(this);
                    d.advanced.autoScrollOnFocus && g.call(this);
                    d.scrollButtons.enable && da.call(this);
                    d.keyboard.enable && ea.call(this);
                    c.bindEvents = !0
                }
            },
            F = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt,
                    e = "mCS_" + c.idx,
                    h = ".mCSB_" + c.idx + "_scrollbar";
                h = b("#mCSB_" + c.idx + ",#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper," + h + " ." + k[12] + ",#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" +
                    c.idx + "_dragger_horizontal," + h + ">a");
                var f = b("#mCSB_" + c.idx + "_container");
                d.advanced.releaseDraggableSelectors && h.add(b(d.advanced.releaseDraggableSelectors));
                d.advanced.extraDraggableSelectors && h.add(b(d.advanced.extraDraggableSelectors));
                c.bindEvents && (b(document).add(b(!J() || top.document)).unbind("." + e), h.each(function() {
                    b(this).unbind("." + e)
                }), clearTimeout(a[0]._focusTimeout), N(a[0], "_focusTimeout"), clearTimeout(c.sequential.step), N(c.sequential, "step"), clearTimeout(f[0].onCompleteTimeout), N(f[0],
                    "onCompleteTimeout"), c.bindEvents = !1)
            },
            L = function(a) {
                var c = b(this),
                    d = c.data("mCS"),
                    e = d.opt,
                    h = b("#mCSB_" + d.idx + "_container_wrapper");
                h = h.length ? h : b("#mCSB_" + d.idx + "_container");
                var f = [b("#mCSB_" + d.idx + "_scrollbar_vertical"), b("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                    n = [f[0].find(".mCSB_dragger"), f[1].find(".mCSB_dragger")];
                "x" !== e.axis && (d.overflowed[0] && !a ? (f[0].add(n[0]).add(f[0].children("a")).css("display", "block"), h.removeClass(k[8] + " " + k[10])) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar &&
                    n[0].css("display", "none"), h.removeClass(k[10])) : (f[0].css("display", "none"), h.addClass(k[10])), h.addClass(k[8])));
                "y" !== e.axis && (d.overflowed[1] && !a ? (f[1].add(n[1]).add(f[1].children("a")).css("display", "block"), h.removeClass(k[9] + " " + k[11])) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && n[1].css("display", "none"), h.removeClass(k[11])) : (f[1].css("display", "none"), h.addClass(k[11])), h.addClass(k[9])));
                d.overflowed[0] || d.overflowed[1] ? c.removeClass(k[5]) : c.addClass(k[5])
            },
            w = function(a) {
                var c =
                    a.type,
                    d = a.target.ownerDocument !== document && null !== frameElement ? [b(frameElement).offset().top, b(frameElement).offset().left] : null,
                    e = J() && a.target.ownerDocument !== top.document && null !== frameElement ? [b(a.view.frameElement).offset().top, b(a.view.frameElement).offset().left] : [0, 0];
                switch (c) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return d ? [a.originalEvent.pageY - d[0] + e[0], a.originalEvent.pageX - d[1] + e[1], !1] : [a.originalEvent.pageY,
                            a.originalEvent.pageX, !1
                        ];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        return c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], d = a.originalEvent.touches.length || a.originalEvent.changedTouches.length, a.target.ownerDocument !== document ? [c.screenY, c.screenX, 1 < d] : [c.pageY, c.pageX, 1 < d];
                    default:
                        return d ? [a.pageY - d[0] + e[0], a.pageX - d[1] + e[1], !1] : [a.pageY, a.pageX, !1]
                }
            },
            D = function() {
                function a(a, b, d, f) {
                    l[0].idleTimer = 233 > h.scrollInertia ? 250 : 0;
                    if (q.attr("id") === g[1]) {
                        var n = "x";
                        a = (q[0].offsetLeft -
                            b + f) * e.scrollRatio.x
                    } else n = "y", a = (q[0].offsetTop - a + d) * e.scrollRatio.y;
                    K(c, a.toString(), {
                        dir: n,
                        drag: !0
                    })
                }
                var c = b(this),
                    e = c.data("mCS"),
                    h = e.opt,
                    f = "mCS_" + e.idx,
                    g = ["mCSB_" + e.idx + "_dragger_vertical", "mCSB_" + e.idx + "_dragger_horizontal"],
                    l = b("#mCSB_" + e.idx + "_container"),
                    k = b("#" + g[0] + ",#" + g[1]),
                    q, m, x, t = h.advanced.releaseDraggableSelectors ? k.add(b(h.advanced.releaseDraggableSelectors)) : k,
                    y = h.advanced.extraDraggableSelectors ? b(!J() || top.document).add(b(h.advanced.extraDraggableSelectors)) : b(!J() || top.document);
                k.bind("contextmenu." + f, function(a) {
                    a.preventDefault()
                }).bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(a) {
                    a.stopImmediatePropagation();
                    a.preventDefault();
                    if (!a.which || 1 === a.which) {
                        p = !0;
                        d && (document.onselectstart = function() {
                            return !1
                        });
                        A.call(l, !1);
                        O(c);
                        q = b(this);
                        var e = q.offset(),
                            f = w(a)[0] - e.top;
                        a = w(a)[1] - e.left;
                        var n = q.height() + e.top;
                        e = q.width() + e.left;
                        f < n && 0 < f && a < e && 0 < a && (m = f, x = a);
                        G(q, "active", h.autoExpandScrollbar)
                    }
                }).bind("touchmove." + f, function(b) {
                    b.stopImmediatePropagation();
                    b.preventDefault();
                    var c = q.offset(),
                        d = w(b)[0] - c.top;
                    b = w(b)[1] - c.left;
                    a(m, x, d, b)
                });
                b(document).add(y).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(b) {
                    if (q) {
                        var c = q.offset(),
                            d = w(b)[0] - c.top;
                        b = w(b)[1] - c.left;
                        m === d && x === b || a(m, x, d, b)
                    }
                }).add(t).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function(a) {
                    q && (G(q, "active", h.autoExpandScrollbar), q = null);
                    p = !1;
                    d && (document.onselectstart = null);
                    A.call(l, !0)
                })
            },
            E = function() {
                function a(a) {
                    if (!V(a) || p || w(a)[2]) t = 0;
                    else {
                        t =
                            1;
                        N = H = 0;
                        Z = 1;
                        g.removeClass("mCS_touch_action");
                        var b = x.offset();
                        G = w(a)[0] - b.top;
                        v = w(a)[1] - b.left;
                        D = [w(a)[0], w(a)[1]]
                    }
                }

                function c(a) {
                    if (V(a) && !p && !w(a)[2] && (k.documentTouchScroll || a.preventDefault(), a.stopImmediatePropagation(), (!N || H) && Z)) {
                        U = T();
                        var b = m.offset(),
                            c = w(a)[0] - b.top;
                        b = w(a)[1] - b.left;
                        B.push(c);
                        W.push(b);
                        D[2] = Math.abs(w(a)[0] - D[0]);
                        D[3] = Math.abs(w(a)[1] - D[1]);
                        if (l.overflowed[0]) {
                            var d = y[0].parent().height() - y[0].height();
                            d = 0 < G - c && c - G > -(d * l.scrollRatio.y) && (2 * D[3] < D[2] || "yx" === k.axis)
                        }
                        if (l.overflowed[1]) {
                            var e =
                                y[1].parent().width() - y[1].width();
                            e = 0 < v - b && b - v > -(e * l.scrollRatio.x) && (2 * D[2] < D[3] || "yx" === k.axis)
                        }
                        d || e ? (S || a.preventDefault(), H = 1) : (N = 1, g.addClass("mCS_touch_action"));
                        S && a.preventDefault();
                        z = "yx" === k.axis ? [G - c, v - b] : "x" === k.axis ? [null, v - b] : [G - c, null];
                        x[0].idleTimer = 250;
                        l.overflowed[0] && f(z[0], 0, "mcsLinearOut", "y", "all", !0);
                        l.overflowed[1] && f(z[1], 0, "mcsLinearOut", "x", L, !0)
                    }
                }

                function d(a) {
                    if (!V(a) || p || w(a)[2]) t = 0;
                    else {
                        t = 1;
                        a.stopImmediatePropagation();
                        O(g);
                        I = T();
                        var b = m.offset();
                        A = w(a)[0] - b.top;
                        M =
                            w(a)[1] - b.left;
                        B = [];
                        W = []
                    }
                }

                function e(a) {
                    if (V(a) && !p && !w(a)[2]) {
                        Z = 0;
                        a.stopImmediatePropagation();
                        N = H = 0;
                        F = T();
                        var b = m.offset(),
                            c = w(a)[0] - b.top;
                        b = w(a)[1] - b.left;
                        if (!(30 < F - U)) {
                            P = 1E3 / (F - I);
                            var d = (a = 2.5 > P) ? [B[B.length - 2], W[W.length - 2]] : [0, 0];
                            C = a ? [c - d[0], b - d[1]] : [c - A, b - M];
                            c = [Math.abs(C[0]), Math.abs(C[1])];
                            P = a ? [Math.abs(C[0] / 4), Math.abs(C[1] / 4)] : [P, P];
                            a = [Math.abs(x[0].offsetTop) - C[0] * h(c[0] / P[0], P[0]), Math.abs(x[0].offsetLeft) - C[1] * h(c[1] / P[1], P[1])];
                            z = "yx" === k.axis ? [a[0], a[1]] : "x" === k.axis ? [null, a[1]] : [a[0],
                                null
                            ];
                            E = [4 * c[0] + k.scrollInertia, 4 * c[1] + k.scrollInertia];
                            a = parseInt(k.contentTouchScroll) || 0;
                            z[0] = c[0] > a ? z[0] : 0;
                            z[1] = c[1] > a ? z[1] : 0;
                            l.overflowed[0] && f(z[0], E[0], "mcsEaseOut", "y", L, !1);
                            l.overflowed[1] && f(z[1], E[1], "mcsEaseOut", "x", L, !1)
                        }
                    }
                }

                function h(a, b) {
                    var c = [1.5 * b, 2 * b, b / 1.5, b / 2];
                    return 90 < a ? 4 < b ? c[0] : c[3] : 60 < a ? 3 < b ? c[3] : c[2] : 30 < a ? 8 < b ? c[1] : 6 < b ? c[0] : 4 < b ? b : c[2] : 8 < b ? b : c[3]
                }

                function f(a, b, c, d, e, h) {
                    a && K(g, a.toString(), {
                        dur: b,
                        scrollEasing: c,
                        dir: d,
                        overwrite: e,
                        drag: h
                    })
                }
                var g = b(this),
                    l = g.data("mCS"),
                    k = l.opt,
                    q = "mCS_" + l.idx,
                    m = b("#mCSB_" + l.idx),
                    x = b("#mCSB_" + l.idx + "_container"),
                    y = [b("#mCSB_" + l.idx + "_dragger_vertical"), b("#mCSB_" + l.idx + "_dragger_horizontal")],
                    Z, G, v, A, M, B = [],
                    W = [],
                    I, U, F, C, P, z, E, L = "yx" === k.axis ? "none" : "all",
                    D = [],
                    H, N, Q = x.find("iframe"),
                    R = ["touchstart." + q + " pointerdown." + q + " MSPointerDown." + q, "touchmove." + q + " pointermove." + q + " MSPointerMove." + q, "touchend." + q + " pointerup." + q + " MSPointerUp." + q],
                    S = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                x.bind(R[0], function(b) {
                    a(b)
                }).bind(R[1],
                    function(a) {
                        c(a)
                    });
                m.bind(R[0], function(a) {
                    d(a)
                }).bind(R[2], function(a) {
                    e(a)
                });
                Q.length && Q.each(function() {
                    b(this).bind("load", function() {
                        J(this) && b(this.contentDocument || this.contentWindow.document).bind(R[0], function(b) {
                            a(b);
                            d(b)
                        }).bind(R[1], function(a) {
                            c(a)
                        }).bind(R[2], function(a) {
                            e(a)
                        })
                    })
                })
            },
            C = function() {
                function a(a, b, d) {
                    h.type = d && k ? "stepped" : "stepless";
                    h.scrollAmount = 10;
                    S(c, a, b, "mcsLinearOut", d ? 60 : null)
                }
                var c = b(this),
                    d = c.data("mCS"),
                    e = d.opt,
                    h = d.sequential,
                    f = "mCS_" + d.idx,
                    g = b("#mCSB_" + d.idx + "_container"),
                    l = g.parent(),
                    k;
                g.bind("mousedown." + f, function(a) {
                    t || k || (k = 1, p = !0)
                }).add(document).bind("mousemove." + f, function(b) {
                    if (!t && k && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                        var c = g.offset(),
                            f = w(b)[0] - c.top + g[0].offsetTop;
                        b = w(b)[1] - c.left + g[0].offsetLeft;
                        0 < f && f < l.height() && 0 < b && b < l.width() ? h.step && a("off", null, "stepped") : ("x" !== e.axis && d.overflowed[0] && (0 > f ? a("on", 38) : f > l.height() && a("on", 40)), "y" !==
                            e.axis && d.overflowed[1] && (0 > b ? a("on", 37) : b > l.width() && a("on", 39)))
                    }
                }).bind("mouseup." + f + " dragend." + f, function(b) {
                    t || (k && (k = 0, a("off", null)), p = !1)
                })
            },
            z = function() {
                function a(a, f) {
                    O(c);
                    var n = c,
                        k = a.target,
                        r = k.nodeName.toLowerCase();
                    n = n.data("mCS").opt.mouseWheel.disableOver;
                    var q = ["select", "textarea"];
                    if (!(-1 < b.inArray(r, n)) || -1 < b.inArray(r, q) && !b(k).is(":focus")) {
                        n = "auto" !== h.mouseWheel.deltaFactor ? parseInt(h.mouseWheel.deltaFactor) : d && 100 > a.deltaFactor ? 100 : a.deltaFactor || 100;
                        k = h.scrollInertia;
                        if ("x" ===
                            h.axis || "x" === h.mouseWheel.axis) {
                            r = "x";
                            n = [Math.round(n * e.scrollRatio.x), parseInt(h.mouseWheel.scrollAmount)];
                            n = "auto" !== h.mouseWheel.scrollAmount ? n[1] : n[0] >= g.width() ? .9 * g.width() : n[0];
                            q = Math.abs(b("#mCSB_" + e.idx + "_container")[0].offsetLeft);
                            var u = l[1][0].offsetLeft,
                                m = l[1].parent().width() - l[1].width();
                            f = "y" === h.mouseWheel.axis ? a.deltaY || f : a.deltaX
                        } else r = "y", n = [Math.round(n * e.scrollRatio.y), parseInt(h.mouseWheel.scrollAmount)], n = "auto" !== h.mouseWheel.scrollAmount ? n[1] : n[0] >= g.height() ? .9 * g.height() :
                            n[0], q = Math.abs(b("#mCSB_" + e.idx + "_container")[0].offsetTop), u = l[0][0].offsetTop, m = l[0].parent().height() - l[0].height(), f = a.deltaY || f;
                        if (("y" !== r || e.overflowed[0]) && ("x" !== r || e.overflowed[1])) {
                            if (h.mouseWheel.invert || a.webkitDirectionInvertedFromDevice) f = -f;
                            h.mouseWheel.normalizeDelta && (f = 0 > f ? -1 : 1);
                            if (0 < f && 0 !== u || 0 > f && u !== m || h.mouseWheel.preventDefault) a.stopImmediatePropagation(), a.preventDefault();
                            5 > a.deltaFactor && !h.mouseWheel.normalizeDelta && (n = a.deltaFactor, k = 17);
                            K(c, (q - f * n).toString(), {
                                dir: r,
                                dur: k
                            })
                        }
                    }
                }
                if (b(this).data("mCS")) {
                    var c = b(this),
                        e = c.data("mCS"),
                        h = e.opt,
                        f = "mCS_" + e.idx,
                        g = b("#mCSB_" + e.idx),
                        l = [b("#mCSB_" + e.idx + "_dragger_vertical"), b("#mCSB_" + e.idx + "_dragger_horizontal")],
                        k = b("#mCSB_" + e.idx + "_container").find("iframe");
                    k.length && k.each(function() {
                        b(this).bind("load", function() {
                            J(this) && b(this.contentDocument || this.contentWindow.document).bind("mousewheel." + f, function(b, c) {
                                a(b, c)
                            })
                        })
                    });
                    g.bind("mousewheel." + f, function(b, c) {
                        a(b, c)
                    })
                }
            },
            I = {},
            J = function(a) {
                var c = !1,
                    d = null;
                void 0 === a ? c =
                    "#empty" : void 0 !== b(a).attr("id") && (c = b(a).attr("id"));
                if (!1 !== c && void 0 !== I[c]) return I[c];
                if (a) try {
                    e = a.contentDocument || a.contentWindow.document, d = e.body.innerHTML
                } catch (ia) {} else try {
                    var e = top.document;
                    d = e.body.innerHTML
                } catch (ia) {}
                a = null !== d;
                !1 !== c && (I[c] = a);
                return a
            },
            A = function(a) {
                var b = this.find("iframe");
                b.length && b.css("pointer-events", a ? "auto" : "none")
            },
            B = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = "mCS_" + c.idx,
                    e = b("#mCSB_" + c.idx + "_container"),
                    h = e.parent(),
                    f;
                b(".mCSB_" + c.idx + "_scrollbar ." +
                    k[12]).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function(a) {
                    p = !0;
                    b(a.target).hasClass("mCSB_dragger") || (f = 1)
                }).bind("touchend." + d + " pointerup." + d + " MSPointerUp." + d, function(a) {
                    p = !1
                }).bind("click." + d, function(d) {
                    if (f && (f = 0, b(d.target).hasClass(k[12]) || b(d.target).hasClass("mCSB_draggerRail"))) {
                        O(a);
                        var n = b(this),
                            g = n.find(".mCSB_dragger");
                        if (0 < n.parent(".mCSB_scrollTools_horizontal").length) {
                            if (!c.overflowed[1]) return;
                            n = "x";
                            d = d.pageX > g.offset().left ? -1 : 1;
                            d = Math.abs(e[0].offsetLeft) -
                                .9 * d * h.width()
                        } else {
                            if (!c.overflowed[0]) return;
                            n = "y";
                            d = d.pageY > g.offset().top ? -1 : 1;
                            d = Math.abs(e[0].offsetTop) - .9 * d * h.height()
                        }
                        K(a, d.toString(), {
                            dir: n,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            g = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt,
                    e = "mCS_" + c.idx,
                    h = b("#mCSB_" + c.idx + "_container"),
                    f = h.parent();
                h.bind("focusin." + e, function(c) {
                    var e = b(document.activeElement);
                    c = h.find(".mCustomScrollBox").length;
                    e.is(d.advanced.autoScrollOnFocus) && (O(a), clearTimeout(a[0]._focusTimeout), a[0]._focusTimer = c ? 17 * c : 0, a[0]._focusTimeout =
                        setTimeout(function() {
                            var b = [H(e)[0], H(e)[1]],
                                c = [h[0].offsetTop, h[0].offsetLeft];
                            c = [0 <= c[0] + b[0] && c[0] + b[0] < f.height() - e.outerHeight(!1), 0 <= c[1] + b[1] && c[0] + b[1] < f.width() - e.outerWidth(!1)];
                            var g = "yx" !== d.axis || c[0] || c[1] ? "all" : "none";
                            "x" === d.axis || c[0] || K(a, b[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: g,
                                dur: 0
                            });
                            "y" === d.axis || c[1] || K(a, b[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: g,
                                dur: 0
                            })
                        }, a[0]._focusTimer))
                })
            },
            ca = function() {
                var a = b(this).data("mCS"),
                    c = "mCS_" + a.idx,
                    d = b("#mCSB_" + a.idx + "_container").parent();
                d.bind("scroll." + c, function(c) {
                    0 === d.scrollTop() && 0 === d.scrollLeft() || b(".mCSB_" + a.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            da = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt,
                    e = c.sequential,
                    h = "mCS_" + c.idx;
                b(".mCSB_" + c.idx + "_scrollbar>a").bind("contextmenu." + h, function(a) {
                    a.preventDefault()
                }).bind("mousedown." + h + " touchstart." + h + " pointerdown." + h + " MSPointerDown." + h + " mouseup." + h + " touchend." + h + " pointerup." + h + " MSPointerUp." + h + " mouseout." + h + " pointerout." +
                    h + " MSPointerOut." + h + " click." + h,
                    function(h) {
                        function f(b, c) {
                            e.scrollAmount = d.scrollButtons.scrollAmount;
                            S(a, b, c)
                        }
                        h.preventDefault();
                        if (!h.which || 1 === h.which) {
                            var g = b(this).attr("class");
                            e.type = d.scrollButtons.scrollType;
                            switch (h.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === e.type) break;
                                    p = !0;
                                    c.tweenRunning = !1;
                                    f("on", g);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" ===
                                        e.type) break;
                                    p = !1;
                                    e.dir && f("off", g);
                                    break;
                                case "click":
                                    "stepped" !== e.type || c.tweenRunning || f("on", g)
                            }
                        }
                    })
            },
            ea = function() {
                function a(a) {
                    function f(a, b) {
                        h.type = e.keyboard.scrollType;
                        h.scrollAmount = e.keyboard.scrollAmount;
                        "stepped" === h.type && d.tweenRunning || S(c, a, b)
                    }
                    switch (a.type) {
                        case "blur":
                            d.tweenRunning && h.dir && f("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var g = a.keyCode ? a.keyCode : a.which,
                                n = "on";
                            if ("x" !== e.axis && (38 === g || 40 === g) || "y" !== e.axis && (37 === g || 39 === g))(38 !== g && 40 !== g || d.overflowed[0]) &&
                                (37 !== g && 39 !== g || d.overflowed[1]) && ("keyup" === a.type && (n = "off"), b(document.activeElement).is("input,textarea,select,datalist,keygen,[contenteditable='true']") || (a.preventDefault(), a.stopImmediatePropagation(), f(n, g)));
                            else if (33 === g || 34 === g) {
                                if (d.overflowed[0] || d.overflowed[1]) a.preventDefault(), a.stopImmediatePropagation();
                                "keyup" === a.type && (O(c), g = 34 === g ? -1 : 1, "x" === e.axis || "yx" === e.axis && d.overflowed[1] && !d.overflowed[0] ? (a = "x", g = Math.abs(l[0].offsetLeft) - .9 * g * k.width()) : (a = "y", g = Math.abs(l[0].offsetTop) -
                                    .9 * g * k.height()), K(c, g.toString(), {
                                    dir: a,
                                    scrollEasing: "mcsEaseInOut"
                                }))
                            } else if ((35 === g || 36 === g) && !b(document.activeElement).is("input,textarea,select,datalist,keygen,[contenteditable='true']")) {
                                if (d.overflowed[0] || d.overflowed[1]) a.preventDefault(), a.stopImmediatePropagation();
                                "keyup" === a.type && ("x" === e.axis || "yx" === e.axis && d.overflowed[1] && !d.overflowed[0] ? (a = "x", g = 35 === g ? Math.abs(k.width() - l.outerWidth(!1)) : 0) : (a = "y", g = 35 === g ? Math.abs(k.height() - l.outerHeight(!1)) : 0), K(c, g.toString(), {
                                    dir: a,
                                    scrollEasing: "mcsEaseInOut"
                                }))
                            }
                    }
                }
                var c = b(this),
                    d = c.data("mCS"),
                    e = d.opt,
                    h = d.sequential,
                    f = "mCS_" + d.idx,
                    g = b("#mCSB_" + d.idx),
                    l = b("#mCSB_" + d.idx + "_container"),
                    k = l.parent(),
                    q = l.find("iframe"),
                    m = ["blur." + f + " keydown." + f + " keyup." + f];
                q.length && q.each(function() {
                    b(this).bind("load", function() {
                        J(this) && b(this.contentDocument || this.contentWindow.document).bind(m[0], function(b) {
                            a(b)
                        })
                    })
                });
                g.attr("tabindex", "0").bind(m[0], function(b) {
                    a(b)
                })
            },
            S = function(a, c, d, e, h) {
                function f(b) {
                    l.snapAmount && (n.scrollAmount = l.snapAmount instanceof Array ? "x" ===
                        n.dir[0] ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount);
                    var c = "stepped" !== n.type,
                        d = h ? h : b ? c ? m / 1.5 : p : 1E3 / 60,
                        k = b ? c ? 7.5 : 40 : 2.5,
                        r = [Math.abs(q[0].offsetTop), Math.abs(q[0].offsetLeft)],
                        u = [10 < g.scrollRatio.y ? 10 : g.scrollRatio.y, 10 < g.scrollRatio.x ? 10 : g.scrollRatio.x];
                    k = "x" === n.dir[0] ? r[1] + n.dir[1] * u[1] * k : r[0] + n.dir[1] * u[0] * k;
                    u = "x" === n.dir[0] ? r[1] + n.dir[1] * parseInt(n.scrollAmount) : r[0] + n.dir[1] * parseInt(n.scrollAmount);
                    k = "auto" !== n.scrollAmount ? u : k;
                    c = e ? e : b ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear";
                    b && 17 > d &&
                        (k = "x" === n.dir[0] ? r[1] : r[0]);
                    K(a, k.toString(), {
                        dir: n.dir[0],
                        scrollEasing: c,
                        dur: d,
                        onComplete: b ? !0 : !1
                    });
                    b ? n.dir = !1 : (clearTimeout(n.step), n.step = setTimeout(function() {
                        f()
                    }, d))
                }
                var g = a.data("mCS"),
                    l = g.opt,
                    n = g.sequential,
                    q = b("#mCSB_" + g.idx + "_container"),
                    r = "stepped" === n.type ? !0 : !1,
                    m = 26 > l.scrollInertia ? 26 : l.scrollInertia,
                    p = 1 > l.scrollInertia ? 17 : l.scrollInertia;
                switch (c) {
                    case "on":
                        n.dir = [d === k[16] || d === k[15] || 39 === d || 37 === d ? "x" : "y", d === k[13] || d === k[15] || 38 === d || 37 === d ? -1 : 1];
                        O(a);
                        if (Q(d) && "stepped" === n.type) break;
                        f(r);
                        break;
                    case "off":
                        clearTimeout(n.step), N(n, "step"), O(a), (r || g.tweenRunning && n.dir) && f(!0)
                }
            },
            X = function(a) {
                var c = b(this).data("mCS").opt,
                    d = [];
                "function" === typeof a && (a = a());
                a instanceof Array ? d = 1 < a.length ? [a[0], a[1]] : "x" === c.axis ? [null, a[0]] : [a[0], null] : (d[0] = a.y ? a.y : a.x || "x" === c.axis ? null : a, d[1] = a.x ? a.x : a.y || "y" === c.axis ? null : a);
                "function" === typeof d[0] && (d[0] = d[0]());
                "function" === typeof d[1] && (d[1] = d[1]());
                return d
            },
            aa = function(a, c) {
                if (null != a && "undefined" != typeof a) {
                    var d = b(this),
                        e = d.data("mCS"),
                        h = e.opt;
                    e = b("#mCSB_" + e.idx + "_container");
                    var f = e.parent(),
                        g = typeof a;
                    c || (c = "x" === h.axis ? "x" : "y");
                    h = "x" === c ? e.outerWidth(!1) - f.width() : e.outerHeight(!1) - f.height();
                    var l = "x" === c ? e[0].offsetLeft : e[0].offsetTop,
                        k = "x" === c ? "left" : "top";
                    switch (g) {
                        case "function":
                            return a();
                        case "object":
                            a = a.jquery ? a : b(a);
                            if (!a.length) break;
                            return "x" === c ? H(a)[1] : H(a)[0];
                        case "string":
                        case "number":
                            if (Q(a)) return Math.abs(a);
                            if (-1 !== a.indexOf("%")) return Math.abs(h * parseInt(a) / 100);
                            if (-1 !== a.indexOf("-=")) return Math.abs(l -
                                parseInt(a.split("-=")[1]));
                            if (-1 !== a.indexOf("+=")) return c = l + parseInt(a.split("+=")[1]), 0 <= c ? 0 : Math.abs(c);
                            if (-1 !== a.indexOf("px") && Q(a.split("px")[0])) return Math.abs(a.split("px")[0]);
                            if ("top" === a || "left" === a) return 0;
                            if ("bottom" === a) return Math.abs(f.height() - e.outerHeight(!1));
                            if ("right" === a) return Math.abs(f.width() - e.outerWidth(!1));
                            if ("first" === a || "last" === a) return a = e.find(":" + a), "x" === c ? H(a)[1] : H(a)[0];
                            if (b(a).length) return "x" === c ? H(b(a))[1] : H(b(a))[0];
                            e.css(k, a);
                            m.update.call(null, d[0])
                    }
                }
            },
            Y = function(a) {
                function c() {
                    clearTimeout(n[0].autoUpdate);
                    0 === f.parents("html").length ? f = null : n[0].autoUpdate = setTimeout(function() {
                        if (l.advanced.updateOnSelectorChange && (g.poll.change.n = e(), g.poll.change.n !== g.poll.change.o)) {
                            g.poll.change.o = g.poll.change.n;
                            h(3);
                            return
                        }
                        if (l.advanced.updateOnContentResize && (g.poll.size.n = f[0].scrollHeight + f[0].scrollWidth + n[0].offsetHeight + f[0].offsetHeight + f[0].offsetWidth, g.poll.size.n !== g.poll.size.o)) {
                            g.poll.size.o = g.poll.size.n;
                            h(1);
                            return
                        }
                        if (l.advanced.updateOnImageLoad &&
                            ("auto" !== l.advanced.updateOnImageLoad || "y" !== l.axis) && (g.poll.img.n = n.find("img").length, g.poll.img.n !== g.poll.img.o)) {
                            g.poll.img.o = g.poll.img.n;
                            n.find("img").each(function() {
                                d(this)
                            });
                            return
                        }(l.advanced.updateOnSelectorChange || l.advanced.updateOnContentResize || l.advanced.updateOnImageLoad) && c()
                    }, l.advanced.autoUpdateTimeout)
                }

                function d(a) {
                    if (b(a).hasClass(k[2])) h();
                    else {
                        var c = new Image;
                        c.onload = function(a, b) {
                            return function() {
                                return b.apply(a, arguments)
                            }
                        }(c, function() {
                            this.onload = null;
                            b(a).addClass(k[2]);
                            h(2)
                        });
                        c.src = a.src
                    }
                }

                function e() {
                    !0 === l.advanced.updateOnSelectorChange && (l.advanced.updateOnSelectorChange = "*");
                    var a = 0,
                        b = n.find(l.advanced.updateOnSelectorChange);
                    l.advanced.updateOnSelectorChange && 0 < b.length && b.each(function() {
                        a += this.offsetHeight + this.offsetWidth
                    });
                    return a
                }

                function h(a) {
                    clearTimeout(n[0].autoUpdate);
                    m.update.call(null, f[0], a)
                }
                var f = b(this),
                    g = f.data("mCS"),
                    l = g.opt,
                    n = b("#mCSB_" + g.idx + "_container");
                a ? (clearTimeout(n[0].autoUpdate), N(n[0], "autoUpdate")) : c()
            },
            O = function(a) {
                a = a.data("mCS");
                b("#mCSB_" + a.idx + "_container,#mCSB_" + a.idx + "_container_wrapper,#mCSB_" + a.idx + "_dragger_vertical,#mCSB_" + a.idx + "_dragger_horizontal").each(function() {
                    this._mTween || (this._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var a = ["top", "left"], b = 0; b < a.length; b++) {
                        var c = a[b];
                        this._mTween[c].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(this._mTween[c].id) : clearTimeout(this._mTween[c].id), this._mTween[c].id = null, this._mTween[c].stop = 1)
                    }
                })
            },
            K = function(a, c, d) {
                function e(a) {
                    return f && g.callbacks[a] && "function" ===
                        typeof g.callbacks[a]
                }

                function h() {
                    var b = [n[0].offsetTop, n[0].offsetLeft],
                        c = [p[0].offsetTop, p[0].offsetLeft],
                        e = [n.outerHeight(!1), n.outerWidth(!1)],
                        h = [k.height(), k.width()];
                    a[0].mcs = {
                        content: n,
                        top: b[0],
                        left: b[1],
                        draggerTop: c[0],
                        draggerLeft: c[1],
                        topPct: Math.round(100 * Math.abs(b[0]) / (Math.abs(e[0]) - h[0])),
                        leftPct: Math.round(100 * Math.abs(b[1]) / (Math.abs(e[1]) - h[1])),
                        direction: d.dir
                    }
                }
                var f = a.data("mCS"),
                    g = f.opt;
                d = b.extend({
                    trigger: "internal",
                    dir: "y",
                    scrollEasing: "mcsEaseOut",
                    drag: !1,
                    dur: g.scrollInertia,
                    overwrite: "all",
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                }, d);
                var l = [d.dur, d.drag ? 0 : d.dur],
                    k = b("#mCSB_" + f.idx),
                    n = b("#mCSB_" + f.idx + "_container"),
                    q = n.parent(),
                    m = g.callbacks.onTotalScrollOffset ? X.call(a, g.callbacks.onTotalScrollOffset) : [0, 0],
                    r = g.callbacks.onTotalScrollBackOffset ? X.call(a, g.callbacks.onTotalScrollBackOffset) : [0, 0];
                f.trigger = d.trigger;
                if (0 !== q.scrollTop() || 0 !== q.scrollLeft()) b(".mCSB_" + f.idx + "_scrollbar").css("visibility", "visible"), q.scrollTop(0).scrollLeft(0);
                "_resetY" !== c ||
                    f.contentReset.y || (e("onOverflowYNone") && g.callbacks.onOverflowYNone.call(a[0]), f.contentReset.y = 1);
                "_resetX" !== c || f.contentReset.x || (e("onOverflowXNone") && g.callbacks.onOverflowXNone.call(a[0]), f.contentReset.x = 1);
                if ("_resetY" !== c && "_resetX" !== c) {
                    !f.contentReset.y && a[0].mcs || !f.overflowed[0] || (e("onOverflowY") && g.callbacks.onOverflowY.call(a[0]), f.contentReset.x = null);
                    !f.contentReset.x && a[0].mcs || !f.overflowed[1] || (e("onOverflowX") && g.callbacks.onOverflowX.call(a[0]), f.contentReset.x = null);
                    g.snapAmount &&
                        (q = g.snapAmount instanceof Array ? "x" === d.dir ? g.snapAmount[1] : g.snapAmount[0] : g.snapAmount, c = Math.round(c / q) * q - g.snapOffset);
                    switch (d.dir) {
                        case "x":
                            var p = b("#mCSB_" + f.idx + "_dragger_horizontal"),
                                x = "left",
                                t = n[0].offsetLeft,
                                y = [k.width() - n.outerWidth(!1), p.parent().width() - p.width()],
                                u = [c, 0 === c ? 0 : c / f.scrollRatio.x],
                                v = m[1],
                                w = r[1],
                                A = 0 < v ? v / f.scrollRatio.x : 0,
                                U = 0 < w ? w / f.scrollRatio.x : 0;
                            break;
                        case "y":
                            p = b("#mCSB_" + f.idx + "_dragger_vertical"), x = "top", t = n[0].offsetTop, y = [k.height() - n.outerHeight(!1), p.parent().height() -
                                p.height()
                            ], u = [c, 0 === c ? 0 : c / f.scrollRatio.y], v = m[0], w = r[0], A = 0 < v ? v / f.scrollRatio.y : 0, U = 0 < w ? w / f.scrollRatio.y : 0
                    }
                    0 > u[1] || 0 === u[0] && 0 === u[1] ? u = [0, 0] : u[1] >= y[1] ? u = [y[0], y[1]] : u[0] = -u[0];
                    a[0].mcs || (h(), e("onInit") && g.callbacks.onInit.call(a[0]));
                    clearTimeout(n[0].onCompleteTimeout);
                    ba(p[0], x, Math.round(u[1]), l[1], d.scrollEasing);
                    !f.tweenRunning && (0 === t && 0 <= u[0] || t === y[0] && u[0] <= y[0]) || ba(n[0], x, Math.round(u[0]), l[0], d.scrollEasing, d.overwrite, {
                        onStart: function() {
                            d.callbacks && d.onStart && !f.tweenRunning &&
                                (e("onScrollStart") && (h(), g.callbacks.onScrollStart.call(a[0])), f.tweenRunning = !0, G(p), f.cbOffsets = [g.callbacks.alwaysTriggerOffsets || t >= y[0] + v, g.callbacks.alwaysTriggerOffsets || t <= -w])
                        },
                        onUpdate: function() {
                            d.callbacks && d.onUpdate && e("whileScrolling") && (h(), g.callbacks.whileScrolling.call(a[0]))
                        },
                        onComplete: function() {
                            d.callbacks && d.onComplete && ("yx" === g.axis && clearTimeout(n[0].onCompleteTimeout), n[0].onCompleteTimeout = setTimeout(function() {
                                e("onScroll") && (h(), g.callbacks.onScroll.call(a[0]));
                                e("onTotalScroll") &&
                                    u[1] >= y[1] - A && f.cbOffsets[0] && (h(), g.callbacks.onTotalScroll.call(a[0]));
                                e("onTotalScrollBack") && u[1] <= U && f.cbOffsets[1] && (h(), g.callbacks.onTotalScrollBack.call(a[0]));
                                f.tweenRunning = !1;
                                n[0].idleTimer = 0;
                                G(p, "hide")
                            }, n[0].idleTimer || 0))
                        }
                    })
                }
            },
            ba = function(a, b, c, d, e, h, f) {
                function g() {
                    v.stop || (x || n.call(), x = T() - p, l(), x >= v.time && (v.time = x > v.time ? x + r - (x - v.time) : x + r - 1, v.time < x + 1 && (v.time = x + 1)), v.time < d ? v.id = y(g) : m.call())
                }

                function l() {
                    0 < d ? (v.currVal = k(v.time, u, w, d, e), t[b] = Math.round(v.currVal) + "px") : t[b] =
                        c + "px";
                    q.call()
                }

                function k(a, b, c, d, e) {
                    switch (e) {
                        case "linear":
                        case "mcsLinear":
                            return c * a / d + b;
                        case "mcsLinearOut":
                            return a /= d, a--, c * Math.sqrt(1 - a * a) + b;
                        case "easeInOutSmooth":
                            a /= d / 2;
                            if (1 > a) return c / 2 * a * a + b;
                            a--;
                            return -c / 2 * (a * (a - 2) - 1) + b;
                        case "easeInOutStrong":
                            a /= d / 2;
                            if (1 > a) return c / 2 * Math.pow(2, 10 * (a - 1)) + b;
                            a--;
                            return c / 2 * (-Math.pow(2, -10 * a) + 2) + b;
                        case "easeInOut":
                        case "mcsEaseInOut":
                            a /= d / 2;
                            if (1 > a) return c / 2 * a * a * a + b;
                            a -= 2;
                            return c / 2 * (a * a * a + 2) + b;
                        case "easeOutSmooth":
                            return a /= d, a--, -c * (a * a * a * a - 1) + b;
                        case "easeOutStrong":
                            return c *
                                (-Math.pow(2, -10 * a / d) + 1) + b;
                        default:
                            return d = (a /= d) * a, e = d * a, b + c * (.499999999999997 * e * d + -2.5 * d * d + 5.5 * e + -6.5 * d + 4 * a)
                    }
                }
                a._mTween || (a._mTween = {
                    top: {},
                    left: {}
                });
                f = f || {};
                var n = f.onStart || function() {},
                    q = f.onUpdate || function() {},
                    m = f.onComplete || function() {},
                    p = T(),
                    r, x = 0,
                    u = a.offsetTop,
                    t = a.style,
                    y, v = a._mTween[b];
                "left" === b && (u = a.offsetLeft);
                var w = c - u;
                v.stop = 0;
                "none" !== h && null != v.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(v.id) : clearTimeout(v.id), v.id = null);
                (function() {
                    r = 1E3 / 60;
                    v.time = x + r;
                    y = window.requestAnimationFrame ?
                        window.requestAnimationFrame : function(a) {
                            l();
                            return setTimeout(a, .01)
                        };
                    v.id = y(g)
                })()
            },
            T = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            N = function(a, b) {
                try {
                    delete a[b]
                } catch (u) {
                    a[b] = null
                }
            },
            V = function(a) {
                a = a.originalEvent.pointerType;
                return !(a && "touch" !== a && 2 !== a)
            },
            Q = function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            H = function(a) {
                var b =
                    a.parents(".mCSB_container");
                return [a.offset().top - b.offset().top, a.offset().left - b.offset().left]
            },
            fa = function() {
                var a = function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var b = 0; b < a.length; b++)
                        if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                    return null
                }();
                return a ? document[a] : !1
            };
        b.fn.mCustomScrollbar = function(a) {
            if (m[a]) return m[a].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" !== typeof a && a) b.error("Method " + a + " does not exist");
            else return m.init.apply(this,
                arguments)
        };
        b.mCustomScrollbar = function(a) {
            if (m[a]) return m[a].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" !== typeof a && a) b.error("Method " + a + " does not exist");
            else return m.init.apply(this, arguments)
        };
        b.mCustomScrollbar.defaults = a;
        window.mCustomScrollbar = !0;
        b(window).bind("load", function() {
            b(".mCustomScrollbar").mCustomScrollbar();
            b.extend(b.expr[":"], {
                mcsInView: b.expr[":"].mcsInView || function(a) {
                    a = b(a);
                    var c = a.parents(".mCSB_container");
                    if (c.length) {
                        var d = c.parent();
                        c = [c[0].offsetTop,
                            c[0].offsetLeft
                        ];
                        return 0 <= c[0] + H(a)[0] && c[0] + H(a)[0] < d.height() - a.outerHeight(!1) && 0 <= c[1] + H(a)[1] && c[1] + H(a)[1] < d.width() - a.outerWidth(!1)
                    }
                },
                mcsInSight: b.expr[":"].mcsInSight || function(a, c, d) {
                    c = b(a);
                    a = c.parents(".mCSB_container");
                    var e = "exact" === d[3] ? [
                        [1, 0],
                        [1, 0]
                    ] : [
                        [.9, .1],
                        [.6, .4]
                    ];
                    if (a.length) return d = [c.outerHeight(!1), c.outerWidth(!1)], c = [a[0].offsetTop + H(c)[0], a[0].offsetLeft + H(c)[1]], a = [a.parent()[0].offsetHeight, a.parent()[0].offsetWidth], e = [d[0] < a[0] ? e[0] : e[1], d[1] < a[1] ? e[0] : e[1]], 0 > c[0] -
                        a[0] * e[0][0] && 0 <= c[0] + d[0] - a[0] * e[0][1] && 0 > c[1] - a[1] * e[1][0] && 0 <= c[1] + d[1] - a[1] * e[1][1]
                },
                mcsOverflow: b.expr[":"].mcsOverflow || function(a) {
                    if (a = b(a).data("mCS")) return a.overflowed[0] || a.overflowed[1]
                }
            })
        })
    })
});
$(document).ready(function() {
    function b(a) {
        var b = parseInt(a.children(".cd-tabs-navigation").width()),
            c = parseInt(a.width());
        a.scrollLeft() >= b - c ? a.parent(".cd-tabs").addClass("is-ended") : a.parent(".cd-tabs").removeClass("is-ended")
    }
    $(".img-gallery1,.img-gallery2").magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    });
    $("#testimslider").owlCarousel({
        autoPlay: !1,
        items: 3,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768,
            1
        ],
        itemsMobile: [479, 1],
        autoplayHoverPause: !0,
        mouseDrag: !1
    });
    var a = $("#variant_tabs");
    a.each(function() {
        var a = $(this),
            c = a.find("ul.cd-tabs-navigation"),
            e = a.children("ul.cd-tabs-content");
        a = a.find("nav");
        c.on("click", "a", function(a) {
            a.preventDefault();
            a = $(this);
            if (!a.hasClass("selected")) {
                var b = a.data("content"),
                    d = e.find('li[data-content="' + b + '"]'),
                    h = d.innerHeight();
                c.find("a.selected").removeClass("selected");
                a.addClass("selected");
                d.addClass("selected").siblings("li").removeClass("selected");
                e.animate({
                        height: h
                    },
                    "auto");
                $(".modelpictures div.tabbutton li").click(function() {
                    d = e.find('li[data-content="' + b + '"]');
                    h = d.innerHeight();
                    e.animate({
                        height: h
                    }, auto)
                })
            }
        });
        b(a);
        a.on("scroll", function() {
            b($(this))
        })
    });
    $(window).on("resize", function() {
        a.each(function() {
            var a = $(this);
            b(a.find("nav"));
            a.find(".cd-tabs-content").css("height", "auto")
        })
    });
    $("#modelpictab .picgallery").fadeOut(0);
    $("#modelpictab .picgallery:first").fadeIn(0);
    $(".toptabmain li:first").addClass("tabnavactive");
    $(".toptabmain a").on("click", function(a) {
        a.preventDefault();
        $(".toptabmain li").removeClass("tabnavactive");
        $(this).parent().addClass("tabnavactive");
        $("#modelpictab .picgallery").fadeOut(0);
        $($(this).attr("href")).fadeIn("fast")
    });
    $("#interior").magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    });
    $("#exterior").magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    });
    var c = $("#sync1"),
        e = $("#sync2");
    c.owlCarousel({
        singleItem: !0,
        slideSpeed: 1E3,
        navigation: !0,
        pagination: !1,
        afterAction: function(a) {
            var b = this.currentItem;
            $("#sync2").find(".owl-item").removeClass("synced").eq(b).addClass("synced");
            if (void 0 !== $("#sync2").data("owlCarousel")) {
                a = e.data("owlCarousel").owl.visibleItems;
                var c = !1,
                    d;
                for (d in a) b === a[d] && (c = !0);
                !1 === c ? b > a[a.length - 1] ? e.trigger("owl.goTo", b - a.length + 2) : (-1 === b - 1 && (b = 0), e.trigger("owl.goTo", b)) : b === a[a.length - 1] ? e.trigger("owl.goTo", a[1]) : b === a[0] && e.trigger("owl.goTo", b - 1)
            }
        },
        responsiveRefreshRate: 200
    });
    e.owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsTablet: [1006, 3],
        itemsTabletSmall: [767, 3],
        itemsMobile: [479, 1],
        pagination: !1,
        responsiveRefreshRate: 100,
        afterInit: function(a) {
            a.find(".owl-item").eq(0).addClass("synced")
        }
    });
    $("#sync2").on("click", ".owl-item", function(a) {
        a.preventDefault();
        a = $(this).data("owlItem");
        c.trigger("owl.goTo", a)
    });
    $(".slidersectionleft .owl-prev ").html('<span class="sprite leftarrow"></span>');
    $(".slidersectionleft .owl-next").html('<span class="sprite rightarrow"></span>');
    $("#newprice_varintslide").owlCarousel({
        items: 3,
        itemsDesktop: [1180, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 3],
        itemsTabletSmall: [600, 2],
        itemsMobile: [479, 1],
        navigation: !0,
        pagination: !1
    });
    $("#newprice_varintslide .owl-item:first-child").addClass("first");
    $("#newprice_varintslide .owl-prev").html('<span class="sprite leftarrow"></span>');
    $("#newprice_varintslide .owl-next").html('<span class="sprite rightarrow"></span>');
    $("#ModelVariant_NameSlider").owlCarousel({
        items: 5,
        itemsDesktop: [1180, 2],
        itemsDesktopSmall: [979,
            2
        ],
        itemsTablet: [768, 3],
        itemsTabletSmall: [600, 2],
        itemsMobile: [479, 1],
        navigation: !0,
        pagination: !1,
        afterAction: function(a) {
            this.$owlItems.find("li").removeClass("active");
            this.$owlItems.find("li").eq(this.currentItem).addClass("active");
            this.$owlItems.find("li").eq(this.currentItem).click()
        }
    });
    $("#ModelVariant_NameSlider .owl-item:first-child").addClass("first");
    $("#ModelVariant_NameSlider .owl-item:first-child").click();
    $("#ModelVariant_NameSlider .owl-prev").html('<span class="sprite leftarrow"></span>');
    $("#ModelVariant_NameSlider .owl-next").html('<span class="sprite rightarrow"></span>');
    $("#ModelVariant_NameSlider li").click(function(a) {
        $("#ModelVariant_NameSlider li.active").removeClass("active");
        $(this).addClass("active")
    })
});
$(document).ready(function() {
    $("#newusedslide").show();
    var b = !0,
        a = !0;
    1024 > window.screen.availWidth && (a = b = !1);
    $(window).bind("load", function() {
        $("#newusedslide").gsp_carousel({
            item: 1,
            loop: !0,
            pager: !1,
            thumbItem: 4,
            thumbMargin: 15,
            showCounter: !0,
            counterText: "{current} of {total}",
            gallery: b,
            speed: 1E3,
            auto: !1,
            controls: a,
            prevHtml: '<div class="owl-prev newusedsprite"></div>',
            nextHtml: '<div class="owl-next newusedsprite"></div>',
            onSliderLoad: function(a, b) {
                1024 <= window.screen.availWidth && $(".zoomimage").each(function() {
                    $(this).ImageZoom({
                        type: "standard",
                        zoomSize: [480, 300],
                        bigImageSrc: $(this).data("zoom-image"),
                        zoomViewerClass: "standardViewer"
                    })
                })
            },
            onAfterSlide: function(a, b, d) {},
            responsive: [{
                breakpoint: 768,
                settings: {
                    item: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    item: 1,
                    pager: !1
                }
            }, {
                breakpoint: 320,
                settings: {
                    item: 1,
                    pager: !1
                }
            }]
        })
    })
});
$(document).ready(function() {
    var b = $("#customformpopup").text(),
        a = $("#popuppageurls").text(),
        c = [];
    a && (c = $.parseJSON(a));
    a = window.location.protocol + "//" + window.location.hostname + window.location.pathname;
    if (b) var e = -1 == $.inArray(a, c) || "" == c ? "/customer-profile/customform" : "";
    e && setTimeout(function() {
        $.get(lang + e, {}).done(function(a) {
            $("#popup_data").html(a);
            mypopup = new DLRPopup("popcontact", "popcontactbg");
            mypopup.openPopup()
        })
    }, 5E3);
    $("a[href^='tel:']").each(function() {
        navigator.userAgent.match(/(mobile)/gi) ||
            (this.href = "javascript:;")
    })
});
0 < $(".desktoptionprice").length && $(".checkoptionprice").click(function() {
    $(".checkoptionprice").is(":checked") ? ($(".optional_price").show(), $(".onroad_price").hide()) : ($(".optional_price").hide(), $(".onroad_price").show())
});

function showoptionprice(b) {
    $(".checkoptionpricemobi" + b).is(":checked") ? ($(".optional_price" + b).show(), $(".onroad_price" + b).hide()) : ($(".optional_price" + b).hide(), $(".onroad_price" + b).show())
}
$(document).ready(function(b) {
    767 < screen.width && $(function() {
        var a = 0;
        0 < $("#stickyheader").length && (a = $("#stickyheader").offset().top);
        $(window).scroll(function() {
            $(window).scrollTop() > a ? ($("#stickyheader").css({
                position: "fixed",
                top: "0px"
            }).addClass("headershadow"), $(".nav-item.stickyiconsheader").fadeIn("slow"), $(".topbuttons").fadeOut("slow")) : ($("#stickyheader").css({
                position: "relative",
                top: "0px"
            }).removeClass("headershadow"), $(".nav-item.stickyiconsheader").fadeOut("slow"), $(".topbuttons").fadeIn("slow"))
        })
    });
    $("#menu .burger-menu").click(function() {
        $("#menu ul.menu_aberto").slideToggle("slow")
    });
    var a = null;
    $(".burger-click-region").on("click", function() {
        if (null === a) {
            var b = $(this);
            b.toggleClass("active");
            b.parent().toggleClass("is-open");
            b.hasClass("active") || b.addClass("closing");
            a = setTimeout(function() {
                b.removeClass("closing");
                clearTimeout(a);
                a = null
            }, 500)
        }
    });
    1006 > screen.width && ($(".submenulist, .moremenu").on("click", function() {
            0 < $(this).find(".pcnavactive").length && $(this).find(".pcnavactive").slideToggle("slow")
        }),
        $(".moresubmenu").on("click", function(a) {
            0 < $(this).find(".moresubmenulist").length && (a.stopPropagation(), $(this).find(".moresubmenulist").slideToggle("slow"))
        }), $(".submenu").find("li  ul").hide(), $(".submenu").find("li a").on("click", function(a) {
            a.stopPropagation();
            $(this).parent().find("ul").slideToggle("slow")
        }), $(".newproductmenu").on("click", function() {
            $(".newproductmenu .productlist").slideToggle("slow")
        }));
    1007 < screen.width && ($(".menu_aberto li.moremenu, .menu_aberto li.submenulist").on("mouseover",
        function(a) {
            $(this).find(".pcnavactive").show()
        }), $(".menu_aberto li.moremenu,.menu_aberto li.submenulist").on("mouseleave", function(a) {
        $(this).find(".pcnavactive").hide()
    }), $(".menu_aberto li.newproductmenu").on("mouseover", function(a) {
        $(this).find(".productlist").show()
    }), $(".menu_aberto li.newproductmenu").on("mouseleave", function(a) {
        $(this).find(".productlist").hide()
    }));
    $(".menu_aberto li.newcarmenu").on("click", function() {
        $(".menu_aberto .shownewcars").slideToggle("slow")
    });
    $("html").click(function(a) {
        0 ===
            $(a.target).closest(".shownewcars, .newcarmenu").length && ($(".shownewcars").slideUp("slow"), $(".newcarmenu").removeClass("active"))
    });
    $(".custom-select").each(function(a) {
        $(this).parent().hasClass("select-wrapper") || $(this).wrap("<span class='select-wrapper'></span>");
        $(this).after("<span class='holder'></span>")
    });
    $(".custom-select").change(function(a) {
        a = $(this).find(":selected").text();
        $(this).parents(".select-wrapper").find(".holder").text(a)
    });
    $(".holder").each(function(a) {
        $(this).text($(this).parent().find("select").find(":selected").text())
    });
    $(".mobdots").click(function() {
        $(".toplink").slideToggle(200)
    });
    0 < $(".clickcall").length && ($(".clickcall").addClass("grow").delay(5E3).queue(function() {
        $(this).removeClass("grow").dequeue()
    }), $(".clickcall").click(function() {
        $("body").addClass("callbgnoscroll");
        $(".callpopupbg").fadeIn(500);
        $(".callparenttab").fadeIn(500)
    }), $(".callparenttab a").click(function() {
        var a = $(this).attr("data-id"),
            b = $("#count_outlet_" + a).val();
        $("#" + a).gsp_modal({
            border: !1,
            width: "auto",
            onOpen: function() {
                $("#show_connecto_popup").text("false");
                $(".gsc_modal_wrapper").addClass("borderradius5");
                10 > b ? $(".gsc_modal_wrapper").addClass("nosearchmrgn") : $(".gsc_modal_wrapper").removeClass("nosearchmrgn")
            },
            onClose: function() {
                $("#show_connecto_popup").text("true");
                $("body").removeClass("callbgnoscroll");
                $(".callpopup").trigger("gse_modal.close");
                $(".callparenttab").fadeOut(500);
                $(".callpopupbg").hide();
                $(".callpopup").find("#search").val("");
                $(".userdetail").show()
            }
        });
        $("#" + a).trigger("gse_modal.open");
        $(".callparenttab").fadeOut(500)
    }), $(".callpclose").click(function() {
        $("body").removeClass("callbgnoscroll");
        $(".callpopup").trigger("gse_modal.close");
        $(".callparenttab").fadeOut(500);
        $(".callpopupbg").fadeOut(500);
        $(".callpopup").find("#search").val("");
        $(".userdetail").show()
    }), $(".callpopupbg").click(function() {
        $("body").removeClass("callbgnoscroll");
        $(".callpopup").trigger("gse_modal.close");
        $(".callparenttab").fadeOut(500);
        $(".callpopupbg").hide();
        $(".callpopup").find("#search").val("");
        $(".userdetail").show()
    }))
});

function validateRegistrationNumber(b) {
    b = window.event ? b.keyCode : b.which;
    return 64 < b && 91 > b || 96 < b && 123 > b || 32 == b || 8 == b || 127 == b || 46 == b || 9 == b || 8 == b || 46 == b || 39 == b || 45 == b || 47 == b ? !0 : 48 > b || 57 < b ? !1 : !0
}

function showvariantlist(b, a) {
    $(".specresult").hide();
    $("#specresult" + b).append("<div id='variant_loader' class='overlay' style='position: absolute;background: rgba(255,255,255,.8);top: 0;left: 0;width: 100%;height: 100%;'></div>");
    $("#specresult" + b).show();
    setTimeout(function() {
        $("#variant_loader").remove()
    }, 500)
}

function setupLabel() {
    $(".label_check input").length && ($(".label_check ").each(function() {
        $(this).removeClass("c_on")
    }), $(".label_check input:checked").each(function() {
        $(this).parent("div").addClass("c_on")
    }));
    $(".label_radio input").length && ($(".label_radio").each(function() {
        $(this).removeClass("r_on")
    }), $(".label_radio input:checked").each(function() {
        $(this).parent("div").addClass("r_on")
    }))
}
$(".chkhold").addClass("has-js");
$(".chkholdradio").addClass("has-js");
$(".label_check, .label_radio").click(function() {
    setupLabel()
});
setupLabel();
$(document).ready(function() {
    $("#model_car1").click();
    $("#bannerslider").owlCarousel({
        navigation: !0,
        pagination: !1,
        slideSpeed: 300,
        singleItem: !0,
        lazyLoad: !0,
        autoPlay: 5E3
    });
    $("#bannerslider .owl-prev").attr("title", "Previous").html('<i class="sprite leftarrow"></i>');
    $("#bannerslider .owl-next").attr("title", "Next").html('<i class="sprite rightarrow"></i>');
    $("#carmodelgallery").owlCarousel({
        items: 6,
        itemsDesktop: [1180, 4],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        itemsTabletSmall: [600, 2],
        itemsMobile: [479,
            1
        ],
        navigation: !0,
        pagination: !1,
        afterAction: function(b) {
            this.$owlItems.find("li").eq(this.currentItem).click();
            $(this).addClass("active")
        }
    });
    $("#carmodelgallery .owl-item:first-child").addClass("first");
    $("#carmodelgallery .owl-prev").html('<span class="sprite leftarrow"></span>');
    $("#carmodelgallery .owl-next").html('<span class="sprite rightarrow"></span>');
    $("#carmodelgallery li").click(function(b) {
        $("#carmodelgallery li.active").removeClass("active");
        $(this).addClass("active")
    })
});

function StopCarouselWhenVideoPlay() {
    $("#bannerslider").trigger("owl.stop")
}

function PlayCarouselWhenVideoPause() {
    $("#bannerslider").trigger("owl.play", 5E3)
}



$(document).ready(function() {
    $("#model_car1").click();
    $("#testimonialslider").owlCarousel({
        navigation: !0,
        pagination: !1,
        slideSpeed: 300,
        singleItem: !0,
        lazyLoad: !0,
        autoPlay: false,
    });
    $("#testimonialslider .owl-prev").attr("title", "Previous").html('<i class="sprite leftarrow"></i>');
    $("#testimonialslider .owl-next").attr("title", "Next").html('<i class="sprite rightarrow"></i>');
    $("#carmodelgallery").owlCarousel({
        items: 4,
        itemsDesktop: [1180, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: [600, 3],
        itemsMobile: [479,
            1
        ],
        navigation: !0,
        pagination: !1,
        afterAction: function(b) {
            this.$owlItems.find("li").eq(this.currentItem).click();
            $(this).addClass("active")
        }
    });
    $("#carmodelgallery .owl-item:first-child").addClass("first");
    $("#carmodelgallery .owl-prev").html('<span class="sprite leftarrow"></span>');
    $("#carmodelgallery .owl-next").html('<span class="sprite rightarrow"></span>');
    $("#carmodelgallery li").click(function(b) {
        $("#carmodelgallery li.active").removeClass("active");
        $(this).addClass("active")
    })
});

function StopCarouselWhenVideoPlay() {
    $("#testimonialslider").trigger("owl.stop")
}

function PlayCarouselWhenVideoPause() {
    $("#testimonialslider").trigger("owl.play", 5E3)
}









function display_model_car(b, a) {
    a.addClass("active");
    $.ajax({
        type: "get",
        url: lang + "/site/model-car",
        data: {
            model_id: b
        },
        beforeSend: function() {
            $("#car_detail").append("<div class='overlay' style='position: absolute;background: rgba(255,255,255,.8);top: 0;left: 0;width: 100%;height: 100%;'></div>")
        },
        success: function(a) {
            $("#car_detail").html(a);
            $("img").gsp_lazyload()
        }
    })
}
$container = $('<div id="thankyou-popup"><div class="close-icon"><span data-icon="close"></span></div><div class="popup-body"><div class="popupcontent"></div></div></div><div class="overlapebg" style="display: none;"></div>');
$(document).ready(function() {
    $(".videosecurl").find("iframe").hide();
    $(".videosecurl").on("click", function() {
        var b = $(this),
            a = b.data("embed"),
            c = document.createElement("iframe");
        c.setAttribute("frameborder", "0");
        c.setAttribute("width", "100%");
        c.setAttribute("allow", "autoplay; encrypted-media");
        c.setAttribute("allowfullscreen", "");
        c.setAttribute("src", b.data("embed"));
        $container.find(".popupcontent").html("");
        $container.find(".popupcontent").append(c);
        b = 1 == /[?]/.test(a) ? a + "&autoplay=1" : a + "?autoplay=1";
        $container.find("iframe").attr("src", b).show();
        $container.find(".overlapebg").fadeIn();
        $container.fadeIn();
        $("body").append($container);
        $container.find(".close-icon").click(function() {
            $container.remove()
        })
    })
});
$(document).ready(function() {
    var b = location.hash;
    hashValue1 = b.replace(/^#/, "");
    b = hashValue1.replace("&360view", "");
    "" != b && 0 < $("li[rel=" + b + "]").length && ("tab3&360view" == hashValue1 && $(".modelpictures li#ftc_tab a").click(), $("li[rel=" + b + "] a").click());
    0 < $(".modelcolor").find("ul[class^=colorrow]").find("li").length && $(".modelcolor").find("ul[class^=colorrow]").find("li").click(function(a) {
        $(this).parents(".modelcolor").find("li").removeClass("active");
        $(this).addClass("active");
        $(".modelcolor  .modeimg").find("img").attr("src",
            $(this).data("src"));
        $(".modelcolor  .modeimg").find("span").html($(this).data("color"))
    });
    0 < $("#stockcolor").find("ul").find("li").length && $("#stockcolor").find("ul").find("li").click(function(a) {
        $(this).parents("#stockcolor").find("li").removeClass("active");
        $(this).addClass("active");
        $("#colorId").val($(this).data("color-id"))
    });
    0 < $(".modeloverview  .color").length && $(".modeloverview").find(".color div").click(function(a) {
        $(this).parents(".color").find("div").removeClass("active");
        $(this).addClass("active");
        $(".modeloverview  .modeimg").find("img").attr("src", $(this).data("src"));
        $(".modeloverview  .modeimg").find("span").html($(this).data("color"))
    });
    $("#stockcolor li").click(function() {
        $("#stockNotAvailable").css("display", "none");
        $("#stockAvailable").css("display", "none")
    });
    $("#stockVariantId").change(function() {
        $("#stockNotAvailable").css("display", "none");
        $("#stockAvailable").css("display", "none")
    })
});

function ftc_image(b) {
    "interior" == b ? ($("#owl-picture1").css("display", "none"), $("#int-owl-picture2").css("display", "block"), $(".ftctab span.exterior").removeClass("active"), $(".ftctab span.interior").addClass("active")) : ($("#owl-picture1").css("display", "block"), $("#int-owl-picture2").css("display", "none"), $(".ftctab span.exterior").addClass("active"), $(".ftctab span.interior").removeClass("active"))
}
0 < $(".comparedetail").length && $(".comparedetail").find("li a").click(function() {
    $(".comparedetail").find("li a").removeClass("selected");
    $(this).addClass("selected");
    $(".overviewresult").find("li").removeClass("selected");
    $(".overviewresult").find("[data-content='" + $(this).attr("data-content") + "']").addClass("selected")
});

function checkStock() {
    $.ajax({
        url: lang + "/cust-car-info/check-stock-availablity",
        type: "post",
        data: $("#stockForm").serialize(),
        beforeSend: function() {
            $(".popupbutton").append('<div class="loader" style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; text-align: center; box-sizing: border-box; padding-top: 10px; background: rgba(255, 255, 255, 0.7) none repeat scroll 0px 0px;"><img src="/themes/mahindra-rise/image/loader.gif" /></div>')
        },
        success: function(b) {
            $(".loader").css("display",
                "none");
            void 0 == b.status || "true" != b.status && 1 != b.status ? ($("#stockAvailable").css("display", "none"), $("#stockNotAvailable").css("display", "block")) : ($("#stockNotAvailable").css("display", "none"), $("#stockAvailable").css("display", "block"))
        }
    });
    return !1
}
var mypopup;
$(document).on("click", "a[data-popup='custom-popup']", function(b) {
    b.preventDefault();
    b = $(this).data("url") ? $(this).data("url") : $(this).attr("href");
    $.get(b, {}).done(function(a) {
        $("#popup_data").html(a);
        mypopup = new DLRPopup("popup_data", "popcontact", "popcontactbg");
        mypopup.openPopup();
        $("#popup_data").find(".close").bind("click", function() {
            mypopup.closePopup()
        })
    })
});

function DLRPopup(b, a, c) {
    this.divContainer = $("#" + b).find("#" + a);
    this.background = $("#" + b).find("#" + c);
    this.openPopup = function() {
        $("#show_connecto_popup").text("false");
        this.divContainer.is(":visible") ? ($("body").removeClass("no_scroll"), this.divContainer.hide(), this.background.hide()) : ($("body").addClass("no_scroll"), this.divContainer.show(), this.background.show(), $("body").scrollTop(0));
        window.onkeydown = function(a) {
            27 === a.keyCode && (this.divContainer.hide(), this.background.hide())
        }
    };
    this.closePopup =
        function() {
            $("#show_connecto_popup").text("true");
            $("body").removeClass("no_scroll");
            this.divContainer.hide();
            this.background.hide()
        }
}

function validateFunction(b) {
    var a = $("#popup_type").val();
    $.ajax({
        url: lang + "/customer-profile/create-service?type=" + a,
        type: "post",
        async: !1,
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            void 0 != a.redirect ? ($form = $("<form style='display:none;' action='" + lang + "/customer-profile/redirect' method='get'></form>"), $form.append('<input type="hidden" name="redirect" value="' + a.redirect + '">'), $form.append('<input type="submit" value="button">'),
                $("body").append($form), $form.submit()) : ($("#popup_data").html(a), mypopup = new DLRPopup("popup_data", "popcontact", "popcontactbg"), mypopup.openPopup(), $("#popup_data").find(".close").bind("click", function() {
                mypopup.closePopup()
            }))
        }
    });
    return !1
}

function validatePopupNumber(b) {
    b = $("#popup_type").val();
    var a = $("#eventaction").val(),
        c = "";
    a && (c = "&eventaction=" + a);
    $.ajax({
        url: lang + "/customer-profile/verify-number?type=" + b + c,
        type: "post",
        async: !1,
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {},
        success: function(a) {
            "success" == a.status ? void 0 != a.content ? ($("#popup_data").html(a.content), mypopup.openPopup()) : void 0 != a.redirect && ($form = $("<form style='' action='" + lang + "/customer-profile/redirect' method='get'></form>"), $form.append('<input type="hidden" name="redirect" value="' +
                a.redirect + '">'), $form.append('<input type="submit" value="button">'), $("body").append($form), $form.submit()) : alert(a.error)
        }
    });
    return !1
}

function validateaMobileNo(b) {
    var a = $("#popup_type").val(),
        c = $("#customerprofile-update_mobileno").val(),
        e = /^[6-9][0-9]{9}$/;
    $.ajax({
        url: lang + "/customer-profile/updateno?type=" + a,
        type: "post",
        async: !1,
        data: $("#popup_form1").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            mypopup = new DLRPopup("popup_data", "popcontact", "popcontactbg");
            mypopup.openPopup();
            $("#popup_data").find(".close").bind("click", function() {
                mypopup.closePopup()
            });
            c && e.test(c) || ($("#popup_form1").show(), $("#popup_form").hide());
            $("#customerprofile-update_mobileno").val("")
        }
    });
    return !1
}

function GetAnotherOtp(b) {
    b = $("#popup_type").val();
    var a = $("#customerprofile-cust_id").val();
    $.get(lang + "/customer-profile/resend-otp", {
        cust_id: a,
        type: b
    }).done(function(a) {
        $("#popup_data").html(a);
        mypopup = new DLRPopup("popup_data", "popcontact", "popcontactbg");
        mypopup.openPopup();
        $("#popup_data").find(".close").bind("click", function() {
            mypopup.closePopup()
        })
    })
}

function popup(b, a, c) {
    $.ajax({
        url: lang + "/used-cars/popup?id=" + a + "&variant_name=" + c,
        type: "post",
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            mypopup = new DLRPopup("popup_data", "popcontact", "popcontactbg");
            mypopup.openPopup();
            $("#popup_data").find(".close").bind("click", function() {
                mypopup.closePopup()
            })
        }
    });
    return !1
}

function validateOfferPopup(b) {
    var a = $("#offer_id").val();
    $.ajax({
        url: lang + "/offers/popup?offer_id=" + a,
        type: "post",
        async: !1,
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            mypopup.openPopup()
        }
    });
    return !0
}

function validateTestimonialPopup(b) {
    var a = new FormData($("#popup_form")[0]);
    $.ajax({
        url: lang + "/testimonial/popup",
        type: "post",
        async: !1,
        data: a,
        processData: !1,
        contentType: !1,
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $(".button2").prop("disabled", "disabled")
        },
        success: function(a) {
            $("#popup_data").html(a);
            $(".button2").removeAttr("disabled");
            mypopup = new DLRPopup("popup_data", "popcontact", "popcontactbg");
            mypopup.openPopup();
            $("#popup_data").find(".close").bind("click", function() {
                mypopup.closePopup()
            })
        }
    });
    return !0
}

function validateCustomForm(b) {
    $.ajax({
        url: lang + "/customer-profile/customform",
        type: "post",
        async: !1,
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            mypopup.openPopup()
        }
    });
    return !0
}

function get_model_variant(b) {
    b && $.get(lang + "/customer-profile/model-link", {
        model_id: b
    }).done(function(a) {
        $("#customerprofile-variant_link_rewrite").val(a)
    })
}

function outlet_popup(b, a) {
    $.ajax({
        url: lang + "/outlet/popup?id=" + a,
        type: "post",
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            $(".popupwrap").show();
            $(".popupbg").show();
            return !1
        }
    });
    return !1
}
$(document).ready(function() {
    0 < $("#outlet-outlet_type").length && $(window).bind("load", function() {
        $("#outlet-outlet_type").change()
    });
    $("#outlet-outlet_type").change(function() {
        select_city()
    });
    $("#outlet-city").change(function() {
        select_area()
    });
    $("#outlet-area").change(function() {
        0 < $("#page_val").length && "home" == $("#page_val").val() && select_data()
    });
    $(".nout-viewgal").click(function() {
        $(".nout-showgal").fadeIn();
        $(".nout-viewgal").fadeOut()
    });
    $(".nout-btn1").click(function() {
        $(".mobi-modisearch").slideToggle();
        $(".noutmobi-bgtrans").fadeIn()
    });
    $(".mobi-outbtn").click(function() {
        0 < $(".success").length && ($(".success").text(""), $(".success").hide());
        $(".mobi-modisearch").slideToggle();
        $(".noutmobi-bgtrans").fadeIn()
    });
    $(".modiclose").click(function() {
        $(".mobi-modisearch").slideToggle();
        $(".noutmobi-bgtrans").fadeOut()
    });
    $(".nout-close").click(function() {
        $(".nout-popupbg").fadeOut();
        $(".nout-popupwrap").fadeOut()
    });
    $("a.mobi-outseemore").on("click", function(b) {
        b.preventDefault();
        $(".daywise").slideToggle(function(a) {
            $(".daywise").is(":visible") ?
                ($(".mobi-outseemore").removeClass("outplus"), $(".mobi-outseemore").addClass("outminus")) : ($(".mobi-outseemore").addClass("outplus"), $(".mobi-outseemore").removeClass("outminus"))
        })
    });
    0 < $("#googleMap").length && setTimeout(function() {
        var b = 0;
        0 < $(".newoutlet-detail").length && (b = 1);
        $.fn.google_map({
            type_val: $("#outlet-outlet_type").val(),
            city_val: $("#outlet-city").val(),
            my_lat: $("#mylat").val(),
            my_long: $("#mylong").val(),
            brand: $("#outlet-outlet_brand").val(),
            show_single: b
        })
    }, 200);
    0 < $("#scrollhere").length &&
        $("html, body").animate({
            scrollTop: $("#scrollhere").offset().top
        }, 1E3)
});

function select_variant(b, a) {
    $("select[id ^='variant_" + a + "']").parent().hide();
    $("#variant_" + a + "_" + b.val()).parent().show()
}

function select_city() {
    var b = $("#outlet-outlet_type").val(),
        a = $("#outlet-outlet_brand").val(),
        c = $("#hidden_selected_city").val(),
        e = "no";
    if (0 < $(".noutdetailwrap").length && 0 < $(".newoutlet-mobiview").length || 0 < $(".outletshome").length) e = "yes";
    $.get(lang + "/outlet/city", {
        outlet_type: b,
        outlet_brand: a,
        selected_city: c,
        is_first_selected: e
    }).done(function(a) {
        $("#outlet-city").html(a);
        $("#outlet-city").next(".holder").text(c);
        $("#outlet-city").change()
    })
}

function select_area() {
    var b = $("#outlet-city").val(),
        a = $("#outlet-outlet_brand").val(),
        c = $("#outlet-outlet_type").val(),
        e = $("#hidden_selected_area").val();
    b != $("#hidden_selected_city").val() && (e = "");
    var d = "no";
    if (0 < $(".noutdetailwrap").length && 0 < $(".newoutlet-mobiview").length || 0 < $(".outletshome").length) d = "yes";
    $.get(lang + "/outlet/area", {
        outlet_city: b,
        outlet_type_val: c,
        outlet_brand: a,
        selected_area: e,
        is_first_selected: d
    }).done(function(a) {
        "" == c && (a = '<option value="">Locality</option>');
        $("#outlet-area").html(a);
        e || (e = $("#outlet-area").find(":selected").text());
        $("#outlet-area").next(".holder").text(e);
        $("#outlet-area").change()
    })
}

function select_data(b) {
    var a = $("#outlet-outlet_type").val(),
        c = $("#outlet-outlet_brand").val();
    void 0 == c && (c = "");
    var e = $("#outlet-city").val(),
        d = $("#outlet-area").val();
    b || (b = 1);
    var p = $("#page_val").val();
    void 0 == p && (p = "");
    $.ajax({
        url: lang + "/outlet/data?outlet_type=" + a + "&city=" + e + "&area=" + encodeURIComponent(d) + "&page=" + b + "&outlet_brand=" + c + "&page_type=" + p,
        type: "get",
        beforeSend: function(a) {
            $(".lodingimg").show()
        },
        success: function(b) {
            $("#outlet_data").html(b);
            $(".lodingimg").hide();
            "" == p && $(window).scrollTop(0);
            "home" != p && $.get(lang + "/outlet/generate-url-with-title?outlet_type=" + a + "&city=" + e, function(a) {
                "" != a && ($("#heading").html(a.page_heading), history.pushState(window.location.href + "/", "new_page", a.url))
            });
            0 < $("#outlet-model_id").length && $("#outlet-model_id").change();
            $("a[href^='tel:']").each(function() {
                navigator.userAgent.match(/(mobile)/gi) || (this.href = "javascript:;")
            });
            void 0 != p && "home" == p && $.fn.google_map({
                type_val: $("#outlet-outlet_type").val(),
                city_val: $("#outlet-city").val(),
                my_lat: $("#mylat").val(),
                my_long: $("#mylong").val(),
                scroll: 0,
                brand: c
            })
        }
    })
}

function outlet_filter() {
    var b = $("#outlet-outlet_type").val(),
        a = $("#outlet-outlet_brand").val(),
        c = $("#outlet-city").val(),
        e = $("#outlet-area").val(),
        d = $("#page_val").val();
    b ? $.get(lang + "/outlet/outletlink", {
        outlet_type: b,
        city: c,
        area: e,
        page: d,
        outlet_brand: a
    }).done(function(a) {
        window.location.href = a ? lang + "/outlet/" + a + ".html" : lang + "/outlet.html"
    }) : window.location.href = lang + "/outlet.html";
    return !1
}

function search_outlet(b) {
    var a, c;
    var e = $("#" + b).find("#search").val().toUpperCase();
    var d = 0;
    $("#" + b).find(".outlet_list").find(".userdetail").each(function(b) {
        a = $(this).find(".landmark").text();
        c = $(this).find(".addrs").text(); - 1 < a.toUpperCase().indexOf(e) || -1 < c.toUpperCase().indexOf(e) ? (d += 1, $(this).show()) : $(this).hide()
    });
    d ? $(".no_data").hide() : $(".no_data").show()
}

function showWorkingHours(b) {
    $("#daywise" + b).slideToggle(function() {
        1 == $(this).is(":visible") ? ($(".workingslide").removeClass("nout-plus"), $(".workingslide").addClass("nout-minus")) : ($(".workingslide").removeClass("nout-minus"), $(".workingslide").addClass("nout-plus"))
    })
}

function outlet_popup(b, a) {
    $.ajax({
        url: lang + "/outlet/popup?id=" + a,
        type: "post",
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            $(".popupwrap").show();
            $(".popupbg").show();
            return !1
        }
    });
    return !1
}

function submitRating(b) {
    $.ajax({
        url: lang + "/outlet/outlet-detail?link_rewrite=" + b,
        type: "post",
        data: $("#outlet_detail").serialize(),
        beforeSend: function(a) {
            $(".nout-viewbtn").prop("disabled", "disabled")
        },
        success: function(a) {
            "1" != a ? ($(".nout-viewbtn").removeAttr("disabled"), errors = $.parseJSON(a), $.each(errors, function(a, b) {
                $("#outletrating-" + a).parent().addClass("has-error");
                $("#outletrating-" + a).parent().find(".help-block").text(b)
            })) : ($(".nout-viewbtn").removeAttr("disabled"), 0 < $(".newoutlet-desktopview").length ?
                ($(".success").show(), $("#outlet_detail")[0].reset(), $("#outletrating-undefined").parent().removeClass("has-error"), $("#outletrating-undefined").parent().find(".help-block").text(""), $(".rate_me").find("span").addClass("star-unselect"), $("#outletrating-rating").val(" ")) : location.reload())
        }
    });
    return !1
}

function select_data_outletmobile() {
    select_data();
    setTimeout(function() {
        $(".noutmobi-bgtrans").css("display", "none")
    }, 10)
}

function service_popup(b, a) {
    $.ajax({
        url: lang + "/outlet/service-popup?id=" + a,
        type: "post",
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            $(".popupwrap").show();
            $(".popupbg").show();
            return !1
        }
    });
    return !0
}

function driving_popup(b, a) {
    $.ajax({
        url: lang + "/outlet/driving-popup?id=" + a,
        type: "post",
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            $(".popupwrap").show();
            $(".popupbg").show();
            return !1
        }
    });
    return !0
}

function getRatings(b, a, c) {
    $.ajax({
        url: lang + "/outlet/getratings?outlet_id=" + b + "&page=" + a + "&exclude_ids=" + c,
        type: "get",
        success: function(a) {
            $.trim(a) && $("#rating_data").append(a)
        }
    })
}

function book_test_drive_popup(b, a) {
    $.ajax({
        url: lang + "/outlet/book-test-drive-popup?id=" + a,
        type: "post",
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            $(".popupwrap").show();
            $(".popupbg").show()
        }
    });
    return !0
}

function openRatingPopup() {
    $(".nout-popupbg").fadeIn();
    $(".nout-popupwrap").fadeIn()
}
$(document).ready(function() {
    0 < $("#bookservice-service_date").length && $("#bookservice-service_date").datepicker({
        clearBtn: !0,
        minDate: 1,
        dateFormat: "dd/mm/yy",
        onClose: function(b, a) {
            $("#bookservice-service_date").parent().parent().addClass("nbook-selectdate");
            $(".service_timeslots").show()
        }
    });
    0 < $("#bookservice-city").length && $("#bookservice-city").change();
    0 < $("#bookservice-service_date").length && $("#bookservice-service_date").datepicker({
        clearBtn: !0,
        minDate: 1,
        dateFormat: "dd/mm/yy"
    });
    $("#bookservice_mobistep1").on("beforeValidate",
        function() {
            $(this).find("button").prop("disabled", "disabled")
        }).on("afterValidate", function(b, a, c) {
        c.length && $(this).find("button").removeAttr("disabled")
    }).on("beforeSubmit", function(b, a, c) {
        $.ajax({
            url: lang + "/book-service/saveservicedata",
            type: "post",
            data: $("#bookservice_mobistep1").serialize(),
            success: function(a) {
                $("#lead_id").val(a);
                ga_event({
                    event: "leadsubmit",
                    eventCategory: "enquiry",
                    eventAction: "submit",
                    form_field: "submit",
                    formName: "book-service"
                });
                $(".nb-serresult").fadeIn();
                $(".nb-persresult").fadeOut();
                $(".servicemobitab span").fadeOut();
                $(".basicmobitab span").fadeIn()
            }
        });
        return !1
    });
    $("#bookservice_mobistep2").on("beforeValidate", function() {
        $(this).find("button").prop("disabled", "disabled")
    }).on("afterValidate", function(b, a, c) {
        c.length && $(this).find("button").removeAttr("disabled")
    }).on("beforeSubmit", function(b, a, c) {
        "" == $("#bookservice-car_no").val() ? ($(this).find("button").removeAttr("disabled"), $("#bookservice-car_no").next().text("Please enter registration no."), $(".nb-shareresult").slideToggle()) :
            $.ajax({
                url: lang + "/book-service/saveservicedata",
                type: "post",
                data: $("#bookservice_mobistep2, #bookservice_mobistep1").serialize(),
                success: function(a) {
                    location.reload()
                }
            });
        return !1
    });
    $('input[name="BookService[pickup_required]"]').click(function() {
        "Yes" == $(this).val() ? $(".nb-addresspick").fadeIn() : $(".nb-addresspick").fadeOut()
    })
});

function select_drop_outlet() {
    2 == $("select#customerprofile-outlet_name option").length && ($("#customerprofile-outlet_name option:nth(1)").attr("selected", "selected"), $("#customerprofile-outlet_name option[value='']").remove(), 1 == $("#customerprofile-outlet_name option").length && getTimeSlot())
}

function validateNumber(b) {
    var a = String.fromCharCode(b.which),
        c = $("#bookservice-kilometer_done").val(),
        e = window.event ? b.keyCode : b.which;
    return 8 == b.keyCode || 39 == b.keyCode ? !0 : 48 > e || 57 < e ? !1 : "0" == a && 0 == c.length ? !1 : !0
}
$("#bookservice-kilometer_done").on("keypress keyup blur", function(b) {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    (48 > b.which || 57 < b.which) && b.preventDefault()
});
var timeslot;

function getTimeSlot() {
    var b = $("#customerprofile-outlet_name").val();
    "" != b && $.ajax({
        url: lang + "/mahindra/get-time-slots?outlet_id=" + b,
        type: "get",
        success: function(a) {
            $("#iframe_data").html(a)
        }
    })
}
$(document).ready(function() {
    $("#contact_service").hide()
});
$("#carousel-tab").gsp_tab({
    content_wrap: "#carousel-tab-container",
    responsive: !1,
    layout: "auto"
});
var $tabs = $("#carousel-in-tab *[data-gstab]");
$tabs.one("gse_tab_click", function(b, a, c) {}).on("gse_tab_click", function(b, a, c) {
    setTimeout(function() {
        var a = $("#carousel-tab").find(".gsc-ta-active")[0].getBoundingClientRect();
        a = a.left + a.width / 2;
        var b = window.innerWidth / 2;
        a = $("#carousel-tab").offset().left - (a - b);
        0 > a ? $("#carousel-tab").animate({
            left: a
        }) : $("#carousel-tab").animate({
            left: 0
        })
    }, 1)
});
var lead_type = "contactus_newcar";

function getleadtype(b) {
    lead_type = b;
    "contactus_newcar" == lead_type ? ($("#contact_service").hide(), $("#contact_sales").show()) : "contactus_service" == lead_type ? ($("#contact_sales").hide(), $("#contact_service").show()) : "contactus_others" == lead_type ? ($("#contact_service").hide(), $("#contact_sales").show()) : "contactus_feedback" == lead_type && ($("#contact_service").hide(), $("#contact_sales").show(), $("#customerprofile-query").parent().parent().find("label").html("Your Query<sup>*</sup>"))
}

function calltocontactus() {
    $("#show_contactus").show();
    $("body").addClass("pnoscroll");
    "contactus_service" == lead_type ? ($(".popuptitle").text("Service No."), $("#service_phone").show(), $("#new_car").hide()) : ($(".popuptitle").text("Sales No."), $("#new_car").show(), $("#service_phone").hide())
}
0 < $(".newcontact").find(".contact_rate").find("span").length && $(".newcontact").find(".contact_rate").find("span").click(function() {
    var b = $(this).index() + 1;
    $(".contact_rate").find(".star-fullselect").addClass("star-unselect");
    $(".contact_rate").find(".star-fullselect").removeClass("star-fullselect");
    $(".contact_rate").children().slice(0, b).removeClass("star-unselect");
    $(".contact_rate").children().slice(0, b).addClass("star-fullselect");
    $("#customerprofile-rating").val(b)
});

function closePopup() {
    $("#show_contactus").hide();
    $("body").removeClass("pnoscroll")
}
$(".doctabs li a").click(function(b) {
    $(".doctabs li a.active").removeClass("active");
    $(this).addClass("active")
});
display("salaried");
$(".financetab li a").click(function(b) {
    $(".financetab li a.active").removeClass("active");
    $(this).addClass("active")
});
financemaintab("forloan");

function display(b) {
    $("div.blockdiv").hide();
    $("div#" + b + ".blockdiv").fadeIn("slow")
}

function financemaintab(b) {
    $("li.blockdiv").hide();
    $("li#" + b + ".blockdiv").fadeIn("slow")
}
$(document).ready(function() {
    0 < $(".sdescribe").length && showOffer()
});

function submit_offer_form(b, a) {
    var c = $("#offers-model_name");
    variant_data($("#variant_" + c.val()), c, b);
    "mobile" == a && $(".soffer-selectbtn").click()
}

function variant_data(b, a, c) {
    b = b.val();
    a = a.val();
    var e = $("#offer_type").val(),
        d = $("#offers-city").val();
    c = c ? c : $("#page_no").val();
    $.get(lang + "/offers/variantdetail", {
        model_id: a,
        variant_id: b,
        type: e,
        page: c,
        city_id: d
    }).done(function(a) {
        $("#offerproduct").html(a);
        $(".offer_terms").gsp_popup({
            inline: !0,
            onOpen: function() {
                $("#show_connecto_popup").text("false");
                $("body").addClass("pnoscroll")
            },
            onClosed: function() {
                $("#show_connecto_popup").text("true");
                $("body").removeClass("pnoscroll")
            }
        });
        showOffer()
    })
}
1007 < screen.width && ($("#offer_type").change(function() {
    console.log("test");
    variant_data($("#variant_" + $("#offers-model_name").val()), $("#offers-model_name"))
}), $("select[id ^='variant_']").change(function() {
    $(this).is(":visible") && variant_data($("#variant_" + $("#offers-model_name").val()), $("#offers-model_name"))
}));

function select_variant_offer(b) {
    $("select[id ^='variant_']").parent().hide();
    $("#variant_" + b.val()).parent().show();
    b.val() && b.val();
    1007 < screen.width && variant_data($("#variant_" + b.text()), b)
}

function showOffer() {
    $(".sdescribe").click(function() {
        var b = $(this).data("count");
        $('div[class^="soffer-des"]').not(".soffer-des" + b).slideUp();
        $(".soffer-des" + $(this).data("count")).slideToggle(700);
        $(".sdescribe" + $(this).data("count")).addClass("active");
        $("#sofferlist" + $(this).data("count")).addClass("sofselected")
    });
    $(".soff-close").click(function() {
        $(".soffer-des" + $(this).data("count")).slideToggle(700);
        $(".sdescribe" + $(this).data("count")).removeClass("active");
        $("#sofferlist" + $(this).data("count")).removeClass("sofselected")
    });
    $(".spoffertab").click(function() {
        $(".spoffer-result").fadeIn();
        $(".corofferresult").fadeOut();
        $(".spoffertab").addClass("active");
        $(".coroffertab").removeClass("active")
    })
}

function validateOfferPopup(b) {
    var a = $("#offer_id").val();
    $.ajax({
        url: lang + "/offers/popup?offer_id=" + a,
        type: "post",
        async: !1,
        data: $("#popup_form").serialize(),
        beforeSend: function(a) {
            b.attr("disabled", !0);
            $("#loading_img").show()
        },
        success: function(a) {
            $("#popup_data").html(a);
            mypopup = new DLRPopup("popup_data", "popcontact", "popcontactbg");
            mypopup.openPopup();
            $("#popup_data").find(".close").bind("click", function() {
                mypopup.closePopup()
            })
        }
    });
    return !0
}

function getPrice(b, a) {
    $.get(lang + "/used-cars/get-price", {
        brand_id: b,
        searched_price: a
    }).done(function(a) {
        $("#price").html(a);
        $("#price").change();
        $("#price1").html(a);
        $("#price1").change()
    })
}

function resetUsedcars() {
    $("#model").val("");
    $("#city").val("");
    $("#usedcar_km").val("");
    $("#usedcar_year").val("");
    $("#fuel").val("");
    $("#custom_price").val("");
    $(".brandlist").find("input[type=checkbox]").each(function() {
        this.checked = !1
    });
    $(".pricelist").find("input[type=radio]").each(function() {
        this.checked = !1
    })
}

function sortByprice(b, a) {
    $.ajax({
        type: "get",
        url: lang + "/used-cars/index",
        data: {
            sorted_price: b,
            type: a
        },
        success: function(a) {
            location.reload()
        }
    })
}

function getusedcars(b) {
    var a = getUrlParameter("type"),
        c = window.location.href;
    void 0 === a ? window.location.href = window.location.pathname + "?type=" + b : (b = c.replace("type=" + a, "type=" + b), window.location.href = b)
}

function getUrlParameter(b) {
    var a = decodeURIComponent(window.location.search.substring(1)).split("&"),
        c;
    for (c = 0; c < a.length; c++) {
        var e = a[c].split("=");
        if (e[0] === b) return void 0 === e[1] ? !0 : e[1]
    }
}

function getBrandModels(b, a, c) {
    $.get(lang + "/cust-car-info/brand-models", {
        id_brand: b,
        expire: c
    }).done(function(b) {
        $("#" + a).html(b);
        $("#" + a).next(".holder").text($("#" + a).find(":selected").text());
        b = a.substr(a.length - 1);
        c ? getModelVariantsId("", "usedcars-variant_id") : getModelVariants("", "custcarinfo-variant" + b)
    });
    "" == b && (b = a.substr(a.length - 1), c ? getModelVariantsId("", "usedcars-variant_id") : getModelVariants("", "custcarinfo-variant" + b), $("#compare1").submit())
}

function getModelVariantsId(b, a) {
    $.get(lang + "/used-cars/model-variants", {
        id_model: b
    }).done(function(b) {
        $("#" + a).html(b);
        $("#" + a).change()
    })
}

function getModelVariants(b, a) {
    $.get(lang + "/cust-car-info/model-variants", {
        id_model: b
    }).done(function(b) {
        $("#" + a).html(b);
        $("select[id^='custcarinfo-variant']").each(function() {
            a != $(this).attr("id") && "" != $(this).val() && $("#" + a).find("option[value='" + $(this).val() + "']").remove()
        });
        $("#" + a).next(".holder").text($("#" + a).find(":selected").text())
    });
    "" == b && $("#custcarinfo-variant" + a).change()
}
var minval = "100000",
    maxval = "3000000";
$(document).ready(function() {
    $(".filterclick").click(function() {
        $(".leftfilter").show()
    });
    $(".filtermobi-close").click(function() {
        $(".leftfilter").hide()
    });
    $("#content-1").mCustomScrollbar({
        autoHideScrollbar: !1,
        theme: "rounded"
    });
    $("#content-2").mCustomScrollbar({
        autoHideScrollbar: !1,
        theme: "rounded"
    });
    if (0 < $(".usedcarwrap").length && (" " != $("#custom_price").val() && getSliderVal($("#custom_price").val()), $("#content-1").find("input[name='price_range']:checked").val())) {
        var b = $("#content-1").find("input[name='price_range']:checked").val();
        if ("above-30-lakh" == b || "below-1-lakh" == b) minval = "100000", maxval = "3000000", $(".range_val").text("1 Lakh to 30 Lakh")
    }
});
0 < $(".usedcar_range_slider").length && $(function() {
    $(".usedcar_range_slider").slider({
        range: !0,
        min: 1E5,
        max: 3E6,
        step: 1E3,
        values: [minval, maxval],
        slide: function(b, a) {
            b = (a.values[0] / 1E5).toFixed(1);
            var c = (a.values[1] / 1E5).toFixed(1);
            $("#custom_price").val(b + "-lakh-to-" + c + "-lakh");
            $("#custom_price").attr("checked", !0);
            $(".range_val").text(b + " Lakh to " + c + " Lakh  ");
            $(".ui-slider-handle:first").html('<div class="tooltip top slider-tip current-time"><div class="tooltip-arrow"></div><div class="tooltip-inner actual-time ng-binding">' + a.values[0] +
                " </div></div>");
            $(".ui-slider-handle:last").html('<div class="tooltip top slider-tip current-time"><div class="tooltip-arrow"></div><div class="tooltip-inner actual-time ng-binding">' + a.values[1] + " </div></div>")
        },
        change: function(b, a) {}
    })
});

function getSliderVal(b) {
    b = b.split("-");
    minval = Math.round(1E5 * b[0]);
    maxval = Math.round(1E5 * b[3]);
    $(".range_val").text(b[0] + " Lakh to " + b[3] + " Lakh  ")
}! function(b) {
    var a = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        c = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    ! function(b, d) {
        var e = {
            choices: [],
            maxResults: -1,
            showArrow: !1,
            minLength: 0,
            highlight: !1,
            matchAny: !0,
            removeSingleHeader: !1,
            allowDirty: !1,
            allowBlank: !0,
            autoSelectFirst: !0,
            emptyRecordMessage: "No record found",
            attr: {
                nameAttr: "text",
                valueAttr: "value",
                disableAttr: "disable",
                headerAttr: "header",
                nosearchAttr: "nosearch",
                groupAttr: "group",
                groupParentAttr: "group-parent"
            },
            ajax: {
                jsonp: !1,
                url: "",
                lazyload: !0,
                cache: !1,
                delay: 200,
                data: {},
                qString: "q",
                type: "get",
                noFilter: !1
            },
            defaultSelectedValue: void 0,
            pageSize: 10,
            resultPosition: {
                forcePosition: void 0,
                scrollTop: -1
            },
            resultContainer: "",
            _isKeySelection: !1,
            _mouseCoords: {
                x: 0,
                y: 0
            },
            onOpen: function() {},
            onClose: function() {},
            onSelect: function(a) {},
            onUpdate: function(a) {},
            onSuccess: function(a) {
                return a
            },
            onSearch: function(a) {},
            filterFn: function(a) {
                var b = this,
                    c = !1,
                    d = void 0;
                return function(e) {
                    if (void 0 !== e[b.attr.nameAttr] &&
                        void 0 !== e[b.attr.valueAttr]) {
                        if (a) {
                            var h = e[b.attr.nosearchAttr];
                            if (e[b.attr.headerAttr] && (c = h), c) return b.removeSingleHeader = !0, !1;
                            if (h) return !1
                        }
                        h = e[b.attr.nameAttr].toLowerCase();
                        return b.matchAny ? 0 <= h.indexOf(a.toLowerCase()) ? (e[b.attr.groupAttr] && (d = e[b.attr.valueAttr]), !0) : d && e[b.attr.groupParentAttr] == d ? !0 : !(!e[b.attr.headerAttr] && !e[b.attr.groupAttr]) : h.startsWith(a.toLowerCase())
                    }
                    throw Error(b.attr.nameAttr + " or " + b.attr.valueAttr + " is undefined");
                }
            },
            formatChoice: function(a) {
                var b, c = this;
                return function(d) {
                    return a && c.highlight && !d[c.attr.headerAttr] ? (b = new RegExp(a.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&"), "gi"), d[c.attr.nameAttr].replace(b, '<span class="highlight">$&</span>')) : d[c.attr.nameAttr]
                }
            }
        };
        var t = function() {
            var a = 0;
            return function(b, c) {
                clearTimeout(a);
                a = setTimeout(b, c)
            }
        }();
        Function.prototype.method = function(a, b) {
            this.prototype[a] || (this.prototype[a] = b)
        };
        var k = [];
        var m = function() {
            function c(c, f) {
                this._reposition = a(this._reposition, this);
                this._revert = a(this._revert, this);
                this._openResults =
                    a(this._openResults, this);
                this._doSelection = a(this._doSelection, this);
                this._prepareForQuery = a(this._prepareForQuery, this);
                this._keyController = a(this._keyController, this);
                this._onClickElement = a(this._onClickElement, this);
                var h, l = this;
                this.element = b(c);
                this.element.addClass("gs_ta");
                this.element.attr("autocomplete", "off");
                this._element = c;
                this.options = b.extend(!0, {}, e, f);
                this._attr = this.options.attr;
                this._selectedChoice = null;
                this._qCache = !1;
                0 == this.options.minLength ? this.options.choices.length ? (this.choices =
                    this.options.choices, this._selectDefaultValue(), this.options.ajax.lazyload = !1) : this._isAjax() && !this.options.ajax.lazyload && (this._prepareForQuery(!0), this.options.choices = []) : this._isAjax() ? this.options.choices = [] : (this.choices = this.options.choices, this._selectDefaultValue());
                this._val = this.element.val().trim();
                this.options.showArrow && this.element.addClass("gs_ta_witharrow");
                this.element.on("click", this._onClickElement);
                this.queryResultArea = b("<div class='gs_ta_results'></div>");
                "function" == typeof(h =
                    this.queryResultArea).scrollLock && h.scrollLock();
                this.queryResultAreaVisible = !1;
                this.oldQuery = this._val;
                this.queryResultArea.on("click", "li.gs_ta_choice", function() {
                    var a = b(this),
                        c = a.data("name");
                    a = a.data("value");
                    l.selectChoiceByValue(a, c);
                    l.options.onSelect(b(this));
                    l._hideResults();
                    l._val = l.element.val().trim();
                    l.element.focus()
                });
                this.queryResultArea.on("mouseenter", "li.gs_ta_choice", function() {
                    var a = b(this);
                    l.options._isKeySelection || (l.queryResultArea.find("li.gs_ta_choice.active").removeClass("active"),
                        a.addClass("active"))
                });
                this.element.on("keyup change search", this._keyController);
                this.element.on("keydown", this._doSelection);
                var k = 0;
                this.queryResultArea.on("mousemove", "li.gs_ta_choice", function(a) {
                    var c = b(this),
                        e = l.options;
                    clearTimeout(k);
                    a = a || d.event;
                    k = setTimeout(function() {
                        0 < e._mouseCoords.x && e._mouseCoords.x == a.clientX && 0 < e._mouseCoords.y && e._mouseCoords.y == a.clientY || (e._mouseCoords.x = a.clientX, e._mouseCoords.y = a.clientY, c.is(".active") || (e._isKeySelection = !1, l.queryResultArea.find("li.gs_ta_choice.active").removeClass("active"),
                            c.addClass("active")))
                    }, 5)
                })
            }
            return c.prototype._onClickElement = function(a) {
                    a.stopPropagation();
                    this.element.select();
                    this.oldQuery = "";
                    this._revertOtherInstances();
                    a = this.options.resultPosition.scrollTop;
                    this._isSearch() && this._openResults(); - 1 < a && b("html, body").animate({
                        scrollTop: this.element.offset().top - a
                    }, 600)
                }, c.prototype._keyController = function() {
                    var a = this;
                    this._val !== this.element.val().trim() && (0 < this.options.ajax.delay ? t(function() {
                        a._prepareForQuery(this)
                    }, this.options.ajax.delay) : a._prepareForQuery(this))
                },
                c.prototype._isSearch = function() {
                    return this.element.val().trim().length >= this.options.minLength
                }, c.prototype._selectDefaultValue = function() {
                    var a = this;
                    this.choices = this.options.choices;
                    (this.defaultSelectedChoice = null !== this.options.defaultSelectedValue ? this.choices.filter(function(b) {
                        return b[a._attr.nameAttr] === a.options.defaultSelectedValue
                    })[0] || null : this.options.defaultSelectedValue) && (this.element.val(this.defaultSelectedChoice[this._attr.nameAttr]), this._selectedChoice = this.defaultSelectedChoice)
                },
                c.prototype._isAjax = function() {
                    return "undefined" !== this.options.ajax.url && "" !== this.options.ajax.url.trim()
                }, c.prototype._isQcache = function() {
                    return (new RegExp("^" + this._qCache, "i")).test(this.element.val().trim()) && !1 !== this._qCache
                }, c.prototype._isCache = function() {
                    return this.options.ajax.cache
                }, c.prototype._doQuery = function() {
                    var a = this.element.val().trim();
                    this.oldQuery = this._val = a;
                    "" === a && 0 < this.options.minLength ? (this._hideResults(), this.selectChoiceByValue(null)) : this.insertFilteredChoiceElements(a)
                },
                c.prototype._doSelection = function(a) {
                    if (27 === a.which && (this.display(), this._hideResults()), this.queryResultAreaVisible) switch (a.which) {
                        case 9:
                            this._selectHighlightedChoice();
                            break;
                        case 13:
                            a.preventDefault();
                            this._selectHighlightedChoice();
                            break;
                        case 38:
                            a.preventDefault();
                            this.options._isKeySelection = !0;
                            this._highlightPreviousChoice();
                            this.scroll();
                            break;
                        case 40:
                            a.preventDefault(), this.options._isKeySelection = !0, this._highlightNextChoice(), this.scroll()
                    } else switch (a.which) {
                        case 40:
                            a.preventDefault();
                            this._insertElements();
                            break;
                        case 9:
                            this._revert()
                    }
                }, c.prototype._insertElements = function() {
                    this.insertFilteredChoiceElements(this.oldQuery)
                }, c.prototype._openResults = function() {
                    var a = this;
                    a._isAjax() && a.options.ajax.lazyload && !a.choices ? (a.options.ajax.lazyload = !1, a._fetchRemoteData().done(function(b) {
                        b && (a.choices = a.options.onSuccess(b) || b, a.choices && (a._qCache = a._isCache() ? a.element.val() : a._qCache, a._insertElements()))
                    })) : a._insertElements()
                }, c.prototype._revert = function() {
                    this.options.allowBlank &&
                        "" === this.element.val() && this.selectChoiceByValue(null);
                    this.queryResultAreaVisible && this._hideResults();
                    this.options.allowDirty || this.display()
                }, c.prototype._reposition = function() {
                    this.queryResultAreaVisible && this.positionResultsArea()
                }, c.prototype.insertFilteredChoiceElements = function(a) {
                    var c = this;
                    var d = a ? this.choices.filter(this.options.filterFn(this.oldQuery)) : this.choices;
                    this._isAjax() && c.options.ajax.noFilter && (d = this.choices);
                    d || (d = []);
                    0 < a.length && this.options.onSearch(d);
                    var e = 0 < this.options.maxResults ?
                        d.slice(0, this.options.maxResults) : d;
                    var h = this.options.formatChoice(a);
                    var f, k = 0,
                        m = 0,
                        p = [],
                        t = void 0,
                        w = !1,
                        D = void 0,
                        E = 0;
                    d = e.map(function() {
                        return function(d) {
                            var e, l;
                            return d[c._attr.headerAttr] ? (l = "gs_ta_header", f == l ? (p.push(m - 1), t == m - 1 && (t = m)) : (k++, t = void 0 === t ? m : t)) : d[c._attr.groupAttr] ? (D && p.push(E), D = d[c._attr.valueAttr], E = m, l = "gs_ta_group") : l = d[c._attr.groupParentAttr] ? "gs_ta_choice gs_ta_group-child" : d[c._attr.disableAttr] ? "gs_ta_disable" : "gs_ta_choice", D && m > E && (d[c._attr.groupParentAttr] != D &&
                                p.push(E), D = void 0, E = 0), e = b("<li class='" + l + "'></li>"), e.attr("data-value", d[c._attr.valueAttr]), e.attr("data-name", d[c._attr.nameAttr]), e.html(h(d, a)), void 0 !== c._selectedChoice && c._selectedChoice == d ? (e.addClass("active"), w = !0) : c.defaultSelectedChoice == d && (e.addClass("active"), w = !0), f = l, m++, e
                        }
                    }(this));
                    var C = e.length - 1;
                    if (0 < C && (e[C][c._attr.headerAttr] ? (k--, p.push(C)) : e[C][c._attr.groupAttr] && p.push(C)), k == m) d = {};
                    else {
                        this.options.removeSingleHeader && 1 == k && p.push(t);
                        for (var z in p) delete d[p[z]]
                    }
                    z =
                        "";
                    e = this.element;
                    if (void 0 !== e.data("gsta-id") && "" != b.trim(e.data("gsta-id")) && (z = e.data("gsta-id")), this.queryResultArea.attr("data-gsta-res-id", z), b.isEmptyObject(d)) {
                        d = this.options.emptyRecordMessage;
                        c = this;
                        if ("" == b.trim(d) || void 0 === d || !d) return void setTimeout(function() {
                            c._hideResults()
                        }, 10);
                        d = b("<p class='gs_ta_noresults'>" + d + "</p>");
                        this.queryResultArea.empty().append(d)
                    } else d = b("<ul></ul>").append(d), this.queryResultArea.empty().append(d), this.options.onOpen(), !w && this.options.autoSelectFirst &&
                        this._highlightNextChoice();
                    this._showResults()
                }, c.prototype.scroll = function() {
                    var a, b, c;
                    var d = this.queryResultArea.height();
                    var e = this.queryResultArea.scrollTop();
                    var f = e + d;
                    var k = this.getHighlightedChoice();
                    null !== k && (b = k.outerHeight(), c = k.position().top + e, a = c + b, e > c && this.queryResultArea.scrollTop(c), a > f && this.queryResultArea.scrollTop(a - d))
                }, c.prototype.positionResultsArea = function() {
                    var a = this.element.offset();
                    var c = this.element.outerHeight();
                    var e = this.element.outerWidth();
                    var f = b(d).height() +
                        b(d).scrollTop();
                    var k = this.queryResultArea.find("li.gs_ta_choice:eq(0)").outerHeight();
                    this.queryResultArea.outerWidth(e);
                    this.queryResultArea.css({
                        left: a.left,
                        "max-height": this.options.pageSize * k || 19
                    });
                    k = this.queryResultArea.outerHeight();
                    e = a.top + c + k;
                    k = a.top - k;
                    var m = a.top + c;
                    c = -1 !== ["top", "bottom"].indexOf(this.options.resultPosition.forcePosition) ? "top" == this.options.resultPosition.forcePosition ? k : m : f - (a.top + c) > a.top - b(d).scrollTop() || f > e ? m : k;
                    this.queryResultArea.css({
                        top: c
                    })
                }, c.prototype.getHighlightedChoice =
                function() {
                    var a;
                    return a = this.queryResultArea.find("li.gs_ta_choice.active"), 1 === a.length ? a : null
                }, c.prototype._highlightNextChoice = function() {
                    var a, c;
                    var d = this.getHighlightedChoice();
                    null !== d ? (c = d.nextAll("li.gs_ta_choice:first"), 1 === c.length && (d.removeClass("active"), c.addClass("active"))) : (a = this.queryResultArea.find("li.gs_ta_choice"), a.length && b(a[0]).addClass("active"))
                }, c.prototype._highlightPreviousChoice = function() {
                    var a, c;
                    var d = this.getHighlightedChoice();
                    null !== d ? (c = d.prevAll("li.gs_ta_choice:first"),
                        1 === c.length && (d.removeClass("active"), c.addClass("active"))) : (a = this.queryResultArea.find("li.gs_ta_choice"), a.length && b(a[a.length - 1]).addClass("active"))
                }, c.prototype._selectHighlightedChoice = function() {
                    var a, b;
                    var c = this.getHighlightedChoice();
                    null !== c ? (b = c.data("name"), a = c.data("value"), this.selectChoiceByValue(a, b), this._val = this.element.val().trim(), this._hideResults(), this.options.onSelect(c)) : this._revert()
                }, c.prototype.display = function() {
                    this._selectedChoice ? this.element.val(this._selectedChoice[this._attr.nameAttr]) :
                        this.element.val("");
                    this._val = this.element.val().trim()
                }, c.prototype.selectChoiceByValue = function(a, b) {
                    var c, d, e, f = this;
                    if (d = this.getValue(), a && this.choices ? (c = this.choices.filter(function(c) {
                            return void 0 !== b ? c[f._attr.valueAttr] == a && c[f._attr.nameAttr] == b : c[f._attr.valueAttr] == a
                        }), null !== c[0] ? this._selectedChoice = c[0] : this._selectedChoice = null) : this._selectedChoice = null, e = this.getValue(), e !== d) {
                        var h = this.element;
                        h.trigger("update", [e]);
                        setTimeout(function() {
                            h.trigger("change.validate")
                        }, 10);
                        c ?
                            (this.element.data("gsTaVal", c[0]), this.options.onUpdate(c[0])) : (this.element.data("gsTaVal", [e]), this.options.onUpdate([e]))
                    }
                    this.display()
                }, c.prototype._revertOtherInstances = function() {
                    var a;
                    var b = 0;
                    for (a = k.length; a > b; b++) {
                        var c = k[b];
                        c !== this && c._revert()
                    }
                }, c.prototype._showResults = function() {
                    var a = b(this.options.resultContainer);
                    a = a.length ? a : b("body");
                    a.append(this.queryResultArea);
                    this.queryResultAreaVisible = !0;
                    this.scroll();
                    this.positionResultsArea()
                }, c.prototype._hideResults = function() {
                    this.options.onClose();
                    this.queryResultArea.detach();
                    this.queryResultAreaVisible = !1
                }, c.prototype.getChoices = function() {
                    return this.choices
                }, c.prototype.setChoices = function(a) {
                    return this.choices = a, null !== this._selectedChoice && this.selectChoiceByValue(this._selectedChoice[this._attr.valueAttr]), void 0 != this.queryResultArea && this.queryResultArea.is(":visible") && this.insertFilteredChoiceElements(!1), this.oldQuery = "", a
                }, c.prototype.getValue = function() {
                    return this._selectedChoice ? this._selectedChoice[this._attr.valueAttr] : null
                },
                c.prototype.getAttr = function(a) {
                    return this._selectedChoice ? this._selectedChoice[a] : null
                }, c.prototype.setValue = function(a, b) {
                    var c;
                    return void 0 !== b && (this._selectedChoice = null), c = this.getValue(), c !== a ? (void 0 !== b ? this.selectChoiceByValue(a, b) : this.selectChoiceByValue(a), this.oldQuery = "", this.getValue()) : c
                }, c.prototype.destroy = function() {
                    this.element.off("keyup change search", this._keyController);
                    this.element.off("keydown", this._doSelection);
                    1 > this.options.minLength && this.element.off("click", this._onClickElement);
                    this.element.val("");
                    this.element.removeClass("gs_ta");
                    this.queryResultArea.remove();
                    b.removeData(this.element[0], "plugin_gs_ta");
                    k = k.filter(function(a) {
                        return function(b) {
                            return b !== a
                        }
                    }(this))
                }, c.prototype._fetchRemoteData = function() {
                    var a = {},
                        c;
                    for (c in this.options.ajax.data) void 0 !== this.options.ajax.data[c].selector ? a[c] = this.options.ajax.data[c].val() : "function" == typeof this.options.ajax.data[c] ? a[c] = this.options.ajax.data[c]() : a[c] = this.options.ajax.data[c];
                    return a[this.options.ajax.qString ||
                        "q"] = this.element.val(), b.ajax({
                        url: this.options.ajax.url,
                        type: this.options.ajax.type,
                        crossDomain: this.options.crossDomain,
                        dataType: this.options.ajax.jsonp ? "jsonp" : "json",
                        data: a
                    })
                }, c.prototype._prepareForQuery = function() {
                    var a = this;
                    this._isSearch() ? a._isAjax() && !a._isQcache() ? a._fetchRemoteData().done(function(b) {
                        b && (a.choices = a.options.onSuccess(b) || b, a.choices && (a._qCache = a._isCache() ? a.element.val() : a._qCache, a._doQuery()))
                    }) : a._doQuery() : (this._val = a.element.val().trim(), this._hideResults())
                },
                c.prototype.publicMethods = "getValue getAttr setValue getChoices setChoices destroy".split(" "), c
        }();
        b("html").on("click", function(a) {
            if (!b(a.target).is("li.gs_ta_disable") && !b(a.target).is("li.gs_ta_header")) {
                var c;
                a = 0;
                for (c = k.length; c > a; a++) {
                    var d = k[a];
                    d._revert()
                }
            }
        });
        b(d).on("resize scroll", function() {
            var a;
            var b = 0;
            for (a = k.length; a > b; b++) {
                var c = k[b];
                c.queryResultAreaVisible && c._reposition()
            }
        });
        b.fn.gsp_typeahead = function(a) {
            var d, e;
            return d = Array.prototype.slice.call(arguments, 1), e = [], this.each(function() {
                var f,
                    h;
                if (b.data(this, "plugin_gs_ta")) {
                    if (null !== a && "string" == typeof a) {
                        if (h = b.data(this, "plugin_gs_ta"), f = a, !(0 <= c.call(h.publicMethods, f))) throw Error("gsp_typeahead has no method '" + f + "'");
                        e.push(h[f].apply(h, d))
                    }
                } else f = new m(this, a), k.push(f), e.push(b.data(this, "plugin_gs_ta", f))
            }), e
        }
    }(jQuery, window)
}(jQuery);
String.prototype.startsWith || (String.prototype.startsWith = function(b, a) {
    return a = a || 0, this.substr(a, b.length) === b
});
window.dataLayer = window.dataLayer || [];
(function(b) {
    b.fn.tracking = function(a) {
        defaults = {
            open: !1,
            clicked: !1,
            formId: "",
            location: "",
            openType: "clicked"
        };
        a = b.extend({}, b.fn.tracking.defaults, a);
        if (a.formId) {
            var c = b("#" + a.formId);
            c.find(":input")
        }
        void 0 == a.location && (a.location = "");
        a.formId && void 0 != c.attr("name") && (c = c.attr("name"), void 0 == c && (c = ""), "autoopen" == a.openType && (c = a.openType + "-" + c), a.open ? dataLayer.push({
            event: "leadbuttonclick",
            eventCategory: "enquiry",
            eventAction: "open",
            formName: c
        }) : a.clicked && ("autoopen" == a.openType ? dataLayer.push({
            event: "leadformopen",
            eventCategory: "enquiry",
            eventAction: "autoopen",
            formName: c
        }) : dataLayer.push({
            event: "leadbuttonclick",
            eventCategory: "enquiry",
            eventAction: "clicked",
            formName: c,
            location: a.location
        })))
    }
})(jQuery);
$(document).ready(function() {
    $("form").each(function() {
        "fuel_form" != $(this).attr("id") && $.fn.tracking({
            open: !0,
            formId: $(this).attr("id")
        })
    })
});
var position = "";
$(document).on("click", "a", function(b, a) {
    position = $(this).attr("data-position")
});
$(document).ajaxComplete(function(b, a, c) {
    if (b = $("<div>" + a.responseText + "</div>").find("form")) {
        var e = "";
        c = c.url.substring(1).split("&");
        for (a = 0; a < c.length; a++) {
            var d = c[a].split("=");
            "eventaction" == d[0] && (e = d[1])
        }
        b.each(function() {
            $.fn.tracking({
                clicked: !0,
                formId: $(this).attr("id"),
                location: position,
                openType: e
            })
        })
    }
});

function ga_event(b) {
    var a = "",
        c = "",
        e = "";
    b.eventLabel && (a = b.eventLabel);
    b.form_field && (c = b.form_field);
    b.formName && (e = b.formName);
    dataLayer.push({
        event: b.event,
        eventCategory: b.eventCategory,
        eventAction: b.eventAction,
        eventLabel: a,
        form_field: c,
        formName: e
    })
};