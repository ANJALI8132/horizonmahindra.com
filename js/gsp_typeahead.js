/*! 
 * TypeAhead (Modified by Piyush Jain)
 * @copyright (c) 2013 Immense Networks
 * @copyright (c) 2016 Piyush Jain
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/immense/immybox/master/LICENSE
 * @version   1.1.2
 */
!function(t){"use strict";var e=function(t,e){return function(){return t.apply(e,arguments)}},i=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};!function(t,s){var o,r,h,n="gsp_typeahead",a="gs_ta";r={choices:[],maxResults:-1,showArrow:!1,minLength:0,highlight:!1,matchAny:!0,removeSingleHeader:!1,allowDirty:!1,allowBlank:!0,autoSelectFirst:!0,emptyRecordMessage:"No record found",attr:{nameAttr:"text",valueAttr:"value",disableAttr:"disable",headerAttr:"header",nosearchAttr:"nosearch",groupAttr:"group",groupParentAttr:"group-parent"},ajax:{jsonp:!1,url:"",lazyload:!0,cache:!1,delay:200,data:{},qString:"q",type:"get",noFilter:!1},defaultSelectedValue:void 0,pageSize:10,resultPosition:{forcePosition:void 0,scrollTop:-1},resultContainer:"",_isKeySelection:!1,_mouseCoords:{x:0,y:0},onOpen:function(){},onClose:function(){},onSelect:function(t){},onUpdate:function(t){},onSuccess:function(t){return t},onSearch:function(t){},filterFn:function(t){var e=this,i=!1,s=void 0;return function(o){if(void 0!==o[e.attr.nameAttr]&&void 0!==o[e.attr.valueAttr]){if(t){var r=o[e.attr.nosearchAttr];if(o[e.attr.headerAttr]&&(i=r),i)return e.removeSingleHeader=!0,!1;if(r)return!1}var h=o[e.attr.nameAttr].toLowerCase();return e.matchAny?h.indexOf(t.toLowerCase())>=0?(o[e.attr.groupAttr]&&(s=o[e.attr.valueAttr]),!0):s&&o[e.attr.groupParentAttr]==s?!0:!(!o[e.attr.headerAttr]&&!o[e.attr.groupAttr]):h.startsWith(t.toLowerCase())}throw Error(e.attr.nameAttr+" or "+e.attr.valueAttr+" is undefined")}},formatChoice:function(t){var e,i=this;return function(s){return t&&i.highlight&&!s[i.attr.headerAttr]?(e=new RegExp(t.replace(/[#-.]|[[-^]|[?|{}]/g,"\\$&"),"gi"),s[i.attr.nameAttr].replace(e,'<span class="highlight">$&</span>')):s[i.attr.nameAttr]}}};var l=function(){var t=0;return function(e,i){clearTimeout(t),t=setTimeout(e,i)}}();Function.prototype.method=function(t,e){this.prototype[t]||(this.prototype[t]=e)},h=[],o=function(){function i(i,o){this._reposition=e(this._reposition,this),this._revert=e(this._revert,this),this._openResults=e(this._openResults,this),this._doSelection=e(this._doSelection,this),this._prepareForQuery=e(this._prepareForQuery,this),this._keyController=e(this._keyController,this),this._onClickElement=e(this._onClickElement,this);var h,n=this;this.element=t(i),this.element.addClass(a),this.element.attr("autocomplete","off"),this._element=i,this.options=t.extend(!0,{},r,o),this._attr=this.options.attr,this._selectedChoice=null,this._qCache=!1,0==this.options.minLength?this.options.choices.length?(this.choices=this.options.choices,this._selectDefaultValue(),this.options.ajax.lazyload=!1):this._isAjax()&&!this.options.ajax.lazyload&&(this._prepareForQuery(!0),this.options.choices=[]):this._isAjax()?this.options.choices=[]:(this.choices=this.options.choices,this._selectDefaultValue()),this._val=this.element.val().trim(),this.options.showArrow&&this.element.addClass(a+"_witharrow"),this.element.on("click",this._onClickElement),this.queryResultArea=t("<div class='"+a+"_results'></div>"),"function"==typeof(h=this.queryResultArea).scrollLock&&h.scrollLock(),this.queryResultAreaVisible=!1,this.oldQuery=this._val,this.queryResultArea.on("click","li."+a+"_choice",function(){var e=t(this),i=e.data("name"),s=e.data("value");n.selectChoiceByValue(s,i),n.options.onSelect(t(this)),n._hideResults(),n._val=n.element.val().trim(),n.element.focus()}),this.queryResultArea.on("mouseenter","li."+a+"_choice",function(){var e=t(this);n.options._isKeySelection||(n.queryResultArea.find("li."+a+"_choice.active").removeClass("active"),e.addClass("active"))}),this.element.on("keyup change search",this._keyController),this.element.on("keydown",this._doSelection);var l=0;this.queryResultArea.on("mousemove","li."+a+"_choice",function(e){var i=t(this),o=n.options;clearTimeout(l),e=e||s.event,l=setTimeout(function(){o._mouseCoords.x>0&&o._mouseCoords.x==e.clientX&&o._mouseCoords.y>0&&o._mouseCoords.y==e.clientY||(o._mouseCoords.x=e.clientX,o._mouseCoords.y=e.clientY,i.is(".active")||(o._isKeySelection=!1,n.queryResultArea.find("li."+a+"_choice.active").removeClass("active"),i.addClass("active")))},5)})}return i.prototype._onClickElement=function(e){e.stopPropagation(),this.element.select(),this.oldQuery="",this._revertOtherInstances();var i=this.options.resultPosition.scrollTop;this._isSearch()&&this._openResults(),i>-1&&t("html, body").animate({scrollTop:this.element.offset().top-i},600)},i.prototype._keyController=function(){var t=this;this._val!==this.element.val().trim()&&(this.options.ajax.delay>0?l(function(){t._prepareForQuery(this)},this.options.ajax.delay):t._prepareForQuery(this))},i.prototype._isSearch=function(){return this.element.val().trim().length>=this.options.minLength},i.prototype._selectDefaultValue=function(){var t=this;this.choices=this.options.choices,this.defaultSelectedChoice=null!==this.options.defaultSelectedValue?this.choices.filter(function(e){return e[t._attr.nameAttr]===t.options.defaultSelectedValue})[0]||null:this.options.defaultSelectedValue,this.defaultSelectedChoice&&(this.element.val(this.defaultSelectedChoice[this._attr.nameAttr]),this._selectedChoice=this.defaultSelectedChoice)},i.prototype._isAjax=function(){return"undefined"!==this.options.ajax.url&&""!==this.options.ajax.url.trim()},i.prototype._isQcache=function(){var t=new RegExp("^"+this._qCache,"i");return t.test(this.element.val().trim())&&this._qCache!==!1},i.prototype._isCache=function(){return this.options.ajax.cache},i.prototype._doQuery=function(){var t=this.element.val().trim();this._val=t,this.oldQuery=t,""===t&&this.options.minLength>0?(this._hideResults(),this.selectChoiceByValue(null)):this.insertFilteredChoiceElements(t)},i.prototype._doSelection=function(t){if(27===t.which&&(this.display(),this._hideResults()),this.queryResultAreaVisible)switch(t.which){case 9:this._selectHighlightedChoice();break;case 13:t.preventDefault(),this._selectHighlightedChoice();break;case 38:t.preventDefault(),this.options._isKeySelection=!0,this._highlightPreviousChoice(),this.scroll();break;case 40:t.preventDefault(),this.options._isKeySelection=!0,this._highlightNextChoice(),this.scroll()}else switch(t.which){case 40:t.preventDefault(),this._insertElements();break;case 9:this._revert()}},i.prototype._insertElements=function(){this.insertFilteredChoiceElements(this.oldQuery)},i.prototype._openResults=function(){var t=this;t._isAjax()&&t.options.ajax.lazyload&&!t.choices?(t.options.ajax.lazyload=!1,t._fetchRemoteData().done(function(e){e&&(t.choices=t.options.onSuccess(e)||e,t.choices&&(t._qCache=t._isCache()?t.element.val():t._qCache,t._insertElements()))})):t._insertElements()},i.prototype._revert=function(){this.options.allowBlank&&""===this.element.val()&&this.selectChoiceByValue(null),this.queryResultAreaVisible&&this._hideResults(),this.options.allowDirty||this.display()},i.prototype._reposition=function(){this.queryResultAreaVisible&&this.positionResultsArea()},i.prototype.insertFilteredChoiceElements=function(e){var i,s,o,r,h,n,l=this;i=e?this.choices.filter(this.options.filterFn(this.oldQuery)):this.choices,this._isAjax()&&l.options.ajax.noFilter&&(i=this.choices),i||(i=[]),e.length>0&&this.options.onSearch(i);var c=this.options.maxResults;n=c>0?i.slice(0,this.options.maxResults):i,s=this.options.formatChoice(e);var u,p=0,d=0,_=[],f=void 0,y=!1,v=void 0,m=0;h=n.map(function(){return function(i){var o,r;return i[l._attr.headerAttr]?(r=a+"_header",u==r?(_.push(d-1),f==d-1&&(f=d)):(p++,f=void 0===f?d:f)):i[l._attr.groupAttr]?(v&&_.push(m),v=i[l._attr.valueAttr],m=d,r=a+"_group"):r=i[l._attr.groupParentAttr]?a+"_choice "+a+"_group-child":i[l._attr.disableAttr]?a+"_disable":a+"_choice",v&&d>m&&(i[l._attr.groupParentAttr]!=v&&_.push(m),v=void 0,m=0),o=t("<li class='"+r+"'></li>"),o.attr("data-value",i[l._attr.valueAttr]),o.attr("data-name",i[l._attr.nameAttr]),o.html(s(i,e)),void 0!==l._selectedChoice&&l._selectedChoice==i?(o.addClass("active"),y=!0):l.defaultSelectedChoice==i&&(o.addClass("active"),y=!0),u=r,d++,o}}(this));var g=n.length-1;if(g>0&&(n[g][l._attr.headerAttr]?(p--,_.push(g)):n[g][l._attr.groupAttr]&&_.push(g)),p==d)h={};else{this.options.removeSingleHeader&&1==p&&_.push(f);for(var C in _)delete h[_[C]]}var A="",R=this.element;if(void 0!==R.data("gsta-id")&&""!=t.trim(R.data("gsta-id"))&&(A=R.data("gsta-id")),this.queryResultArea.attr("data-gsta-res-id",A),t.isEmptyObject(h)){var x=this.options.emptyRecordMessage,l=this;if(""==t.trim(x)||void 0===x||!x)return void setTimeout(function(){l._hideResults()},10);o=t("<p class='"+a+"_noresults'>"+x+"</p>"),this.queryResultArea.empty().append(o)}else r=t("<ul></ul>").append(h),this.queryResultArea.empty().append(r),this.options.onOpen(),!y&&this.options.autoSelectFirst&&this._highlightNextChoice();this._showResults()},i.prototype.scroll=function(){var t,e,i,s,o,r,h;r=this.queryResultArea.height(),h=this.queryResultArea.scrollTop(),o=h+r,t=this.getHighlightedChoice(),null!==t&&(i=t.outerHeight(),s=t.position().top+h,e=s+i,h>s&&this.queryResultArea.scrollTop(s),e>o&&this.queryResultArea.scrollTop(e-r))},i.prototype.positionResultsArea=function(){var e,i,o,r,h,n,l,c,u,p,d=["top","bottom"];i=this.element.offset(),e=this.element.outerHeight(),o=this.element.outerWidth(),n=t(s).height()+t(s).scrollTop(),p=this.queryResultArea.find("li."+a+"_choice:eq(0)").outerHeight(),this.queryResultArea.outerWidth(o),this.queryResultArea.css({left:i.left,"max-height":this.options.pageSize*p||19}),h=this.queryResultArea.outerHeight(),r=i.top+e+h,c=i.top-h,u=i.top+e,l=-1!==d.indexOf(this.options.resultPosition.forcePosition)?"top"==this.options.resultPosition.forcePosition?c:u:n-(i.top+e)>i.top-t(s).scrollTop()||n>r?u:c,this.queryResultArea.css({top:l})},i.prototype.getHighlightedChoice=function(){var t;return t=this.queryResultArea.find("li."+a+"_choice.active"),1===t.length?t:null},i.prototype._highlightNextChoice=function(){var e,i,s;i=this.getHighlightedChoice(),null!==i?(s=i.nextAll("li."+a+"_choice:first"),1===s.length&&(i.removeClass("active"),s.addClass("active"))):(e=this.queryResultArea.find("li."+a+"_choice"),e.length&&t(e[0]).addClass("active"))},i.prototype._highlightPreviousChoice=function(){var e,i,s;i=this.getHighlightedChoice(),null!==i?(s=i.prevAll("li."+a+"_choice:first"),1===s.length&&(i.removeClass("active"),s.addClass("active"))):(e=this.queryResultArea.find("li."+a+"_choice"),e.length&&t(e[e.length-1]).addClass("active"))},i.prototype._selectHighlightedChoice=function(){var t,e,i;t=this.getHighlightedChoice(),null!==t?(i=t.data("name"),e=t.data("value"),this.selectChoiceByValue(e,i),this._val=this.element.val().trim(),this._hideResults(),this.options.onSelect(t)):this._revert()},i.prototype.display=function(){this._selectedChoice?this.element.val(this._selectedChoice[this._attr.nameAttr]):this.element.val(""),this._val=this.element.val().trim()},i.prototype.selectChoiceByValue=function(t,e){var i,s,o,r=this;if(s=this.getValue(),t&&this.choices?(i=this.choices.filter(function(i){return void 0!==e?i[r._attr.valueAttr]==t&&i[r._attr.nameAttr]==e:i[r._attr.valueAttr]==t}),null!==i[0]?this._selectedChoice=i[0]:this._selectedChoice=null):this._selectedChoice=null,o=this.getValue(),o!==s){var h=this.element;h.trigger("update",[o]),setTimeout(function(){h.trigger("change.validate")},10),i?(this.element.data("gsTaVal",i[0]),this.options.onUpdate(i[0])):(this.element.data("gsTaVal",[o]),this.options.onUpdate([o]))}this.display()},i.prototype._revertOtherInstances=function(){var t,e,i;for(t=0,e=h.length;e>t;t++)i=h[t],i!==this&&i._revert()},i.prototype._showResults=function(){var e=t(this.options.resultContainer);e=e.length?e:t("body"),e.append(this.queryResultArea),this.queryResultAreaVisible=!0,this.scroll(),this.positionResultsArea()},i.prototype._hideResults=function(){this.options.onClose(),this.queryResultArea.detach(),this.queryResultAreaVisible=!1},i.prototype.getChoices=function(){return this.choices},i.prototype.setChoices=function(t){return this.choices=t,null!==this._selectedChoice&&this.selectChoiceByValue(this._selectedChoice[this._attr.valueAttr]),void 0!=this.queryResultArea&&this.queryResultArea.is(":visible")&&this.insertFilteredChoiceElements(!1),this.oldQuery="",t},i.prototype.getValue=function(){return this._selectedChoice?this._selectedChoice[this._attr.valueAttr]:null},i.prototype.getAttr=function(t){return this._selectedChoice?this._selectedChoice[t]:null},i.prototype.setValue=function(t,e){var i;return void 0!==e&&(this._selectedChoice=null),i=this.getValue(),i!==t?(void 0!==e?this.selectChoiceByValue(t,e):this.selectChoiceByValue(t),this.oldQuery="",this.getValue()):i},i.prototype.destroy=function(){this.element.off("keyup change search",this._keyController),this.element.off("keydown",this._doSelection),this.options.minLength<1&&this.element.off("click",this._onClickElement),this.element.val(""),this.element.removeClass(a),this.queryResultArea.remove(),t.removeData(this.element[0],"plugin_"+a),h=h.filter(function(t){return function(e){return e!==t}}(this))},i.prototype._fetchRemoteData=function(){var e={};for(var i in this.options.ajax.data)void 0!==this.options.ajax.data[i].selector?e[i]=this.options.ajax.data[i].val():"function"==typeof this.options.ajax.data[i]?e[i]=this.options.ajax.data[i]():e[i]=this.options.ajax.data[i];return e[this.options.ajax.qString||"q"]=this.element.val(),t.ajax({url:this.options.ajax.url,type:this.options.ajax.type,crossDomain:this.options.crossDomain,dataType:this.options.ajax.jsonp?"jsonp":"json",data:e})},i.prototype._prepareForQuery=function(){var t=this;this._isSearch()?t._isAjax()&&!t._isQcache()?t._fetchRemoteData().done(function(e){e&&(t.choices=t.options.onSuccess(e)||e,t.choices&&(t._qCache=t._isCache()?t.element.val():t._qCache,t._doQuery()))}):t._doQuery():(this._val=t.element.val().trim(),this._hideResults())},i.prototype.publicMethods=["getValue","getAttr","setValue","getChoices","setChoices","destroy"],i}(),t("html").on("click",function(e){if(!t(e.target).is("li."+a+"_disable")&&!t(e.target).is("li."+a+"_header")){var i,s,o;for(i=0,s=h.length;s>i;i++)o=h[i],o._revert()}}),t(s).on("resize scroll",function(){var t,e,i;for(t=0,e=h.length;e>t;t++)i=h[t],i.queryResultAreaVisible&&i._reposition()}),t.fn[n]=function(e){var s,r;return s=Array.prototype.slice.call(arguments,1),r=[],this.each(function(){var l,c,u;if(t.data(this,"plugin_"+a)){if(null!==e&&"string"==typeof e){if(u=t.data(this,"plugin_"+a),l=e,!(i.call(u.publicMethods,l)>=0))throw new Error(n+" has no method '"+l+"'");r.push(u[l].apply(u,s))}}else c=new o(this,e),h.push(c),r.push(t.data(this,"plugin_"+a,c))}),r}}(jQuery,window)}(jQuery),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t});