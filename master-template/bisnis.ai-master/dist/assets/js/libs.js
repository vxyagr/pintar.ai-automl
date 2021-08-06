/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! Select2 4.0.6-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=a('<span class="select2-selection__clear">&times;</span>');c.StoreData(e[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(e)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"â’¶":"A","ï¼¡":"A","Ã€":"A","Ã":"A","Ã‚":"A","áº¦":"A","áº¤":"A","áºª":"A","áº¨":"A","Ãƒ":"A","Ä€":"A","Ä‚":"A","áº°":"A","áº®":"A","áº´":"A","áº²":"A","È¦":"A","Ç ":"A","Ã„":"A","Çž":"A","áº¢":"A","Ã…":"A","Çº":"A","Ç":"A","È€":"A","È‚":"A","áº ":"A","áº¬":"A","áº¶":"A","á¸€":"A","Ä„":"A","Èº":"A","â±¯":"A","êœ²":"AA","Ã†":"AE","Ç¼":"AE","Ç¢":"AE","êœ´":"AO","êœ¶":"AU","êœ¸":"AV","êœº":"AV","êœ¼":"AY","â’·":"B","ï¼¢":"B","á¸‚":"B","á¸„":"B","á¸†":"B","Éƒ":"B","Æ‚":"B","Æ":"B","â’¸":"C","ï¼£":"C","Ä†":"C","Äˆ":"C","ÄŠ":"C","ÄŒ":"C","Ã‡":"C","á¸ˆ":"C","Æ‡":"C","È»":"C","êœ¾":"C","â’¹":"D","ï¼¤":"D","á¸Š":"D","ÄŽ":"D","á¸Œ":"D","á¸":"D","á¸’":"D","á¸Ž":"D","Ä":"D","Æ‹":"D","ÆŠ":"D","Æ‰":"D","ê¹":"D","Ç±":"DZ","Ç„":"DZ","Ç²":"Dz","Ç…":"Dz","â’º":"E","ï¼¥":"E","Ãˆ":"E","Ã‰":"E","ÃŠ":"E","á»€":"E","áº¾":"E","á»„":"E","á»‚":"E","áº¼":"E","Ä’":"E","á¸”":"E","á¸–":"E","Ä”":"E","Ä–":"E","Ã‹":"E","áºº":"E","Äš":"E","È„":"E","È†":"E","áº¸":"E","á»†":"E","È¨":"E","á¸œ":"E","Ä˜":"E","á¸˜":"E","á¸š":"E","Æ":"E","ÆŽ":"E","â’»":"F","ï¼¦":"F","á¸ž":"F","Æ‘":"F","ê»":"F","â’¼":"G","ï¼§":"G","Ç´":"G","Äœ":"G","á¸ ":"G","Äž":"G","Ä ":"G","Ç¦":"G","Ä¢":"G","Ç¤":"G","Æ“":"G","êž ":"G","ê½":"G","ê¾":"G","â’½":"H","ï¼¨":"H","Ä¤":"H","á¸¢":"H","á¸¦":"H","Èž":"H","á¸¤":"H","á¸¨":"H","á¸ª":"H","Ä¦":"H","â±§":"H","â±µ":"H","êž":"H","â’¾":"I","ï¼©":"I","ÃŒ":"I","Ã":"I","ÃŽ":"I","Ä¨":"I","Äª":"I","Ä¬":"I","Ä°":"I","Ã":"I","á¸®":"I","á»ˆ":"I","Ç":"I","Èˆ":"I","ÈŠ":"I","á»Š":"I","Ä®":"I","á¸¬":"I","Æ—":"I","â’¿":"J","ï¼ª":"J","Ä´":"J","Éˆ":"J","â“€":"K","ï¼«":"K","á¸°":"K","Ç¨":"K","á¸²":"K","Ä¶":"K","á¸´":"K","Æ˜":"K","â±©":"K","ê€":"K","ê‚":"K","ê„":"K","êž¢":"K","â“":"L","ï¼¬":"L","Ä¿":"L","Ä¹":"L","Ä½":"L","á¸¶":"L","á¸¸":"L","Ä»":"L","á¸¼":"L","á¸º":"L","Å":"L","È½":"L","â±¢":"L","â± ":"L","êˆ":"L","ê†":"L","êž€":"L","Ç‡":"LJ","Çˆ":"Lj","â“‚":"M","ï¼­":"M","á¸¾":"M","á¹€":"M","á¹‚":"M","â±®":"M","Æœ":"M","â“ƒ":"N","ï¼®":"N","Ç¸":"N","Åƒ":"N","Ã‘":"N","á¹„":"N","Å‡":"N","á¹†":"N","Å…":"N","á¹Š":"N","á¹ˆ":"N","È ":"N","Æ":"N","êž":"N","êž¤":"N","ÇŠ":"NJ","Ç‹":"Nj","â“„":"O","ï¼¯":"O","Ã’":"O","Ã“":"O","Ã”":"O","á»’":"O","á»":"O","á»–":"O","á»”":"O","Ã•":"O","á¹Œ":"O","È¬":"O","á¹Ž":"O","ÅŒ":"O","á¹":"O","á¹’":"O","ÅŽ":"O","È®":"O","È°":"O","Ã–":"O","Èª":"O","á»Ž":"O","Å":"O","Ç‘":"O","ÈŒ":"O","ÈŽ":"O","Æ ":"O","á»œ":"O","á»š":"O","á» ":"O","á»ž":"O","á»¢":"O","á»Œ":"O","á»˜":"O","Çª":"O","Ç¬":"O","Ã˜":"O","Ç¾":"O","Æ†":"O","ÆŸ":"O","êŠ":"O","êŒ":"O","Æ¢":"OI","êŽ":"OO","È¢":"OU","â“…":"P","ï¼°":"P","á¹”":"P","á¹–":"P","Æ¤":"P","â±£":"P","ê":"P","ê’":"P","ê”":"P","â“†":"Q","ï¼±":"Q","ê–":"Q","ê˜":"Q","ÉŠ":"Q","â“‡":"R","ï¼²":"R","Å”":"R","á¹˜":"R","Å˜":"R","È":"R","È’":"R","á¹š":"R","á¹œ":"R","Å–":"R","á¹ž":"R","ÉŒ":"R","â±¤":"R","êš":"R","êž¦":"R","êž‚":"R","â“ˆ":"S","ï¼³":"S","áºž":"S","Åš":"S","á¹¤":"S","Åœ":"S","á¹ ":"S","Å ":"S","á¹¦":"S","á¹¢":"S","á¹¨":"S","È˜":"S","Åž":"S","â±¾":"S","êž¨":"S","êž„":"S","â“‰":"T","ï¼´":"T","á¹ª":"T","Å¤":"T","á¹¬":"T","Èš":"T","Å¢":"T","á¹°":"T","á¹®":"T","Å¦":"T","Æ¬":"T","Æ®":"T","È¾":"T","êž†":"T","êœ¨":"TZ","â“Š":"U","ï¼µ":"U","Ã™":"U","Ãš":"U","Ã›":"U","Å¨":"U","á¹¸":"U","Åª":"U","á¹º":"U","Å¬":"U","Ãœ":"U","Ç›":"U","Ç—":"U","Ç•":"U","Ç™":"U","á»¦":"U","Å®":"U","Å°":"U","Ç“":"U","È”":"U","È–":"U","Æ¯":"U","á»ª":"U","á»¨":"U","á»®":"U","á»¬":"U","á»°":"U","á»¤":"U","á¹²":"U","Å²":"U","á¹¶":"U","á¹´":"U","É„":"U","â“‹":"V","ï¼¶":"V","á¹¼":"V","á¹¾":"V","Æ²":"V","êž":"V","É…":"V","ê ":"VY","â“Œ":"W","ï¼·":"W","áº€":"W","áº‚":"W","Å´":"W","áº†":"W","áº„":"W","áºˆ":"W","â±²":"W","â“":"X","ï¼¸":"X","áºŠ":"X","áºŒ":"X","â“Ž":"Y","ï¼¹":"Y","á»²":"Y","Ã":"Y","Å¶":"Y","á»¸":"Y","È²":"Y","áºŽ":"Y","Å¸":"Y","á»¶":"Y","á»´":"Y","Æ³":"Y","ÉŽ":"Y","á»¾":"Y","â“":"Z","ï¼º":"Z","Å¹":"Z","áº":"Z","Å»":"Z","Å½":"Z","áº’":"Z","áº”":"Z","Æµ":"Z","È¤":"Z","â±¿":"Z","â±«":"Z","ê¢":"Z","â“":"a","ï½":"a","áºš":"a","Ã ":"a","Ã¡":"a","Ã¢":"a","áº§":"a","áº¥":"a","áº«":"a","áº©":"a","Ã£":"a","Ä":"a","Äƒ":"a","áº±":"a","áº¯":"a","áºµ":"a","áº³":"a","È§":"a","Ç¡":"a","Ã¤":"a","ÇŸ":"a","áº£":"a","Ã¥":"a","Ç»":"a","ÇŽ":"a","È":"a","Èƒ":"a","áº¡":"a","áº­":"a","áº·":"a","á¸":"a","Ä…":"a","â±¥":"a","É":"a","êœ³":"aa","Ã¦":"ae","Ç½":"ae","Ç£":"ae","êœµ":"ao","êœ·":"au","êœ¹":"av","êœ»":"av","êœ½":"ay","â“‘":"b","ï½‚":"b","á¸ƒ":"b","á¸…":"b","á¸‡":"b","Æ€":"b","Æƒ":"b","É“":"b","â“’":"c","ï½ƒ":"c","Ä‡":"c","Ä‰":"c","Ä‹":"c","Ä":"c","Ã§":"c","á¸‰":"c","Æˆ":"c","È¼":"c","êœ¿":"c","â†„":"c","â““":"d","ï½„":"d","á¸‹":"d","Ä":"d","á¸":"d","á¸‘":"d","á¸“":"d","á¸":"d","Ä‘":"d","ÆŒ":"d","É–":"d","É—":"d","êº":"d","Ç³":"dz","Ç†":"dz","â“”":"e","ï½…":"e","Ã¨":"e","Ã©":"e","Ãª":"e","á»":"e","áº¿":"e","á»…":"e","á»ƒ":"e","áº½":"e","Ä“":"e","á¸•":"e","á¸—":"e","Ä•":"e","Ä—":"e","Ã«":"e","áº»":"e","Ä›":"e","È…":"e","È‡":"e","áº¹":"e","á»‡":"e","È©":"e","á¸":"e","Ä™":"e","á¸™":"e","á¸›":"e","É‡":"e","É›":"e","Ç":"e","â“•":"f","ï½†":"f","á¸Ÿ":"f","Æ’":"f","ê¼":"f","â“–":"g","ï½‡":"g","Çµ":"g","Ä":"g","á¸¡":"g","ÄŸ":"g","Ä¡":"g","Ç§":"g","Ä£":"g","Ç¥":"g","É ":"g","êž¡":"g","áµ¹":"g","ê¿":"g","â“—":"h","ï½ˆ":"h","Ä¥":"h","á¸£":"h","á¸§":"h","ÈŸ":"h","á¸¥":"h","á¸©":"h","á¸«":"h","áº–":"h","Ä§":"h","â±¨":"h","â±¶":"h","É¥":"h","Æ•":"hv","â“˜":"i","ï½‰":"i","Ã¬":"i","Ã­":"i","Ã®":"i","Ä©":"i","Ä«":"i","Ä­":"i","Ã¯":"i","á¸¯":"i","á»‰":"i","Ç":"i","È‰":"i","È‹":"i","á»‹":"i","Ä¯":"i","á¸­":"i","É¨":"i","Ä±":"i","â“™":"j","ï½Š":"j","Äµ":"j","Ç°":"j","É‰":"j","â“š":"k","ï½‹":"k","á¸±":"k","Ç©":"k","á¸³":"k","Ä·":"k","á¸µ":"k","Æ™":"k","â±ª":"k","ê":"k","êƒ":"k","ê…":"k","êž£":"k","â“›":"l","ï½Œ":"l","Å€":"l","Äº":"l","Ä¾":"l","á¸·":"l","á¸¹":"l","Ä¼":"l","á¸½":"l","á¸»":"l","Å¿":"l","Å‚":"l","Æš":"l","É«":"l","â±¡":"l","ê‰":"l","êž":"l","ê‡":"l","Ç‰":"lj","â“œ":"m","ï½":"m","á¸¿":"m","á¹":"m","á¹ƒ":"m","É±":"m","É¯":"m","â“":"n","ï½Ž":"n","Ç¹":"n","Å„":"n","Ã±":"n","á¹…":"n","Åˆ":"n","á¹‡":"n","Å†":"n","á¹‹":"n","á¹‰":"n","Æž":"n","É²":"n","Å‰":"n","êž‘":"n","êž¥":"n","ÇŒ":"nj","â“ž":"o","ï½":"o","Ã²":"o","Ã³":"o","Ã´":"o","á»“":"o","á»‘":"o","á»—":"o","á»•":"o","Ãµ":"o","á¹":"o","È­":"o","á¹":"o","Å":"o","á¹‘":"o","á¹“":"o","Å":"o","È¯":"o","È±":"o","Ã¶":"o","È«":"o","á»":"o","Å‘":"o","Ç’":"o","È":"o","È":"o","Æ¡":"o","á»":"o","á»›":"o","á»¡":"o","á»Ÿ":"o","á»£":"o","á»":"o","á»™":"o","Ç«":"o","Ç­":"o","Ã¸":"o","Ç¿":"o","É”":"o","ê‹":"o","ê":"o","Éµ":"o","Æ£":"oi","È£":"ou","ê":"oo","â“Ÿ":"p","ï½":"p","á¹•":"p","á¹—":"p","Æ¥":"p","áµ½":"p","ê‘":"p","ê“":"p","ê•":"p","â“ ":"q","ï½‘":"q","É‹":"q","ê—":"q","ê™":"q","â“¡":"r","ï½’":"r","Å•":"r","á¹™":"r","Å™":"r","È‘":"r","È“":"r","á¹›":"r","á¹":"r","Å—":"r","á¹Ÿ":"r","É":"r","É½":"r","ê›":"r","êž§":"r","êžƒ":"r","â“¢":"s","ï½“":"s","ÃŸ":"s","Å›":"s","á¹¥":"s","Å":"s","á¹¡":"s","Å¡":"s","á¹§":"s","á¹£":"s","á¹©":"s","È™":"s","ÅŸ":"s","È¿":"s","êž©":"s","êž…":"s","áº›":"s","â“£":"t","ï½”":"t","á¹«":"t","áº—":"t","Å¥":"t","á¹­":"t","È›":"t","Å£":"t","á¹±":"t","á¹¯":"t","Å§":"t","Æ­":"t","Êˆ":"t","â±¦":"t","êž‡":"t","êœ©":"tz","â“¤":"u","ï½•":"u","Ã¹":"u","Ãº":"u","Ã»":"u","Å©":"u","á¹¹":"u","Å«":"u","á¹»":"u","Å­":"u","Ã¼":"u","Çœ":"u","Ç˜":"u","Ç–":"u","Çš":"u","á»§":"u","Å¯":"u","Å±":"u","Ç”":"u","È•":"u","È—":"u","Æ°":"u","á»«":"u","á»©":"u","á»¯":"u","á»­":"u","á»±":"u","á»¥":"u","á¹³":"u","Å³":"u","á¹·":"u","á¹µ":"u","Ê‰":"u","â“¥":"v","ï½–":"v","á¹½":"v","á¹¿":"v","Ê‹":"v","êŸ":"v","ÊŒ":"v","ê¡":"vy","â“¦":"w","ï½—":"w","áº":"w","áºƒ":"w","Åµ":"w","áº‡":"w","áº…":"w","áº˜":"w","áº‰":"w","â±³":"w","â“§":"x","ï½˜":"x","áº‹":"x","áº":"x","â“¨":"y","ï½™":"y","á»³":"y","Ã½":"y","Å·":"y","á»¹":"y","È³":"y","áº":"y","Ã¿":"y","á»·":"y","áº™":"y","á»µ":"y","Æ´":"y","É":"y","á»¿":"y","â“©":"z","ï½š":"z","Åº":"z","áº‘":"z","Å¼":"z","Å¾":"z","áº“":"z","áº•":"z","Æ¶":"z","È¥":"z","É€":"z","â±¬":"z","ê£":"z","Î†":"Î‘","Îˆ":"Î•","Î‰":"Î—","ÎŠ":"Î™","Îª":"Î™","ÎŒ":"ÎŸ","ÎŽ":"Î¥","Î«":"Î¥","Î":"Î©","Î¬":"Î±","Î­":"Îµ","Î®":"Î·","Î¯":"Î¹","ÏŠ":"Î¹","Î":"Î¹","ÏŒ":"Î¿","Ï":"Ï…","Ï‹":"Ï…","Î°":"Ï…","Ï‰":"Ï‰","Ï‚":"Ïƒ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more resultsâ€¦"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searchingâ€¦"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,d.GetData(a[0])):d.GetData(a[0]);var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('sifter', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Sifter = factory();
	}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count, nesting;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;
		nesting     = search.options.nesting;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(getattr(data, fields[0], nesting), token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(getattr(data, fields[i], nesting), token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field = function(name, result) {
			if (name === '$score') return result.score;
			return getattr(self.items[result.id], name, options.nesting);
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
					get_field(field, a),
					get_field(field, b)
				);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = asciifold(String(a || ''));
		b = asciifold(String(b || ''));
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	/**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @param  {Boolean} nesting Handle nesting or not
	 * @return {Object}          The resolved property value
	 */
	var getattr = function(obj, name, nesting) {
	    if (!obj || !name) return;
	    if (!nesting) return obj[name];
	    var names = name.split(".");
	    while(names.length && (obj = obj[names.shift()]));
	    return obj;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
		return Object.prototype.toString.call(object) === '[object Array]';
	};

	var DIACRITICS = {
		'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
		'b': '[b␢βΒB฿𐌁ᛒ]',
		'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
		'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
		'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
		'f': '[fƑƒḞḟ]',
		'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
		'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
		'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
		'j': '[jȷĴĵɈɉʝɟʲ]',
		'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
		'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
		'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
		'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
		'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
		'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
		'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
		's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
		't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
		'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
		'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
		'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
		'x': '[xẌẍẊẋχ]',
		'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
		'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
	};

	var asciifold = (function() {
		var i, n, k, chunk;
		var foreignletters = '';
		var lookup = {};
		for (k in DIACRITICS) {
			if (DIACRITICS.hasOwnProperty(k)) {
				chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
				foreignletters += chunk;
				for (i = 0, n = chunk.length; i < n; i++) {
					lookup[chunk.charAt(i)] = k;
				}
			}
		}
		var regexp = new RegExp('[' +  foreignletters + ']', 'g');
		return function(str) {
			return str.replace(regexp, function(foreignletter) {
				return lookup[foreignletter];
			}).toLowerCase();
		};
	})();


	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('microplugin', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.MicroPlugin = factory();
	}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/**
 * selectize.js (v0.12.6)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('selectize', ['jquery','sifter','microplugin'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
	} else {
		root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
	}
}(this, function($, Sifter, MicroPlugin) {
	'use strict';

	var highlight = function($element, pattern) {
		if (typeof pattern === 'string' && !pattern.length) return;
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
	
		var highlight = function(node) {
			var skip = 0;
			// Wrap matching part of text node with highlighting <span>, e.g.
			// Soccer  ->  <span class="highlight">Soc</span>cer  for regex = /soc/i
			if (node.nodeType === 3) {
				var pos = node.data.search(regex);
				if (pos >= 0 && node.data.length > 0) {
					var match = node.data.match(regex);
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(match[0].length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} 
			// Recurse element node, looking for child text nodes to highlight, unless element 
			// is childless, <script>, <style>, or already highlighted: <span class="hightlight">
			else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && ( node.className !== 'highlight' || node.tagName !== 'SPAN' )) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += highlight(node.childNodes[i]);
				}
			}
			return skip;
		};
	
		return $element.each(function() {
			highlight(this);
		});
	};
	
	/**
	 * removeHighlight fn copied from highlight v5 and
	 * edited to remove with() and pass js strict mode
	 */
	$.fn.removeHighlight = function() {
		return this.find("span.highlight").each(function() {
			this.parentNode.firstChild.nodeName;
			var parent = this.parentNode;
			parent.replaceChild(this.firstChild, this);
			parent.normalize();
		}).end();
	};
	
	
	var MicroEvent = function() {};
	MicroEvent.prototype = {
		on: function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		},
		off: function(event, fct){
			var n = arguments.length;
			if (n === 0) return delete this._events;
			if (n === 1) return delete this._events[event];
	
			this._events = this._events || {};
			if (event in this._events === false) return;
			this._events[event].splice(this._events[event].indexOf(fct), 1);
		},
		trigger: function(event /* , args... */){
			this._events = this._events || {};
			if (event in this._events === false) return;
			for (var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}
	};
	
	/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */
	MicroEvent.mixin = function(destObject){
		var props = ['on', 'off', 'trigger'];
		for (var i = 0; i < props.length; i++){
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
		}
	};
	
	var IS_MAC        = /Mac/.test(navigator.userAgent);
	
	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;
	
	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;
	
	// for now, android support in general is too spotty to support validity
	var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;
	
	
	var isset = function(object) {
		return typeof object !== 'undefined';
	};
	
	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string|null}
	 */
	var hash_key = function(value) {
		if (typeof value === 'undefined' || value === null) return null;
		if (typeof value === 'boolean') return value ? '1' : '0';
		return value + '';
	};
	
	/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_html = function(str) {
		return (str + '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	};
	
	/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_replace = function(str) {
		return (str + '').replace(/\$/g, '$$$$');
	};
	
	var hook = {};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.before = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			fn.apply(self, arguments);
			return original.apply(self, arguments);
		};
	};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.after = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			var result = original.apply(self, arguments);
			fn.apply(self, arguments);
			return result;
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */
	var once = function(fn) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			fn.apply(this, arguments);
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */
	var debounce = function(fn, delay) {
		var timeout;
		return function() {
			var self = this;
			var args = arguments;
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function() {
				fn.apply(self, args);
			}, delay);
		};
	};
	
	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */
	var debounce_events = function(self, types, fn) {
		var type;
		var trigger = self.trigger;
		var event_args = {};
	
		// override trigger method
		self.trigger = function() {
			var type = arguments[0];
			if (types.indexOf(type) !== -1) {
				event_args[type] = arguments;
			} else {
				return trigger.apply(self, arguments);
			}
		};
	
		// invoke provided function
		fn.apply(self, []);
		self.trigger = trigger;
	
		// trigger queued events
		for (type in event_args) {
			if (event_args.hasOwnProperty(type)) {
				trigger.apply(self, event_args[type]);
			}
		}
	};
	
	/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */
	var watchChildEvent = function($parent, event, selector, fn) {
		$parent.on(event, selector, function(e) {
			var child = e.target;
			while (child && child.parentNode !== $parent[0]) {
				child = child.parentNode;
			}
			e.currentTarget = child;
			return fn.apply(this, [e]);
		});
	};
	
	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */
	var getSelection = function(input) {
		var result = {};
		if ('selectionStart' in input) {
			result.start = input.selectionStart;
			result.length = input.selectionEnd - result.start;
		} else if (document.selection) {
			input.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			result.start = sel.text.length - selLen;
			result.length = selLen;
		}
		return result;
	};
	
	/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */
	var transferStyles = function($from, $to, properties) {
		var i, n, styles = {};
		if (properties) {
			for (i = 0, n = properties.length; i < n; i++) {
				styles[properties[i]] = $from.css(properties[i]);
			}
		} else {
			styles = $from.css();
		}
		$to.css(styles);
	};
	
	/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */
	var measureString = function(str, $parent) {
		if (!str) {
			return 0;
		}
	
		if (!Selectize.$testInput) {
			Selectize.$testInput = $('<span />').css({
				position: 'absolute',
				top: -99999,
				left: -99999,
				width: 'auto',
				padding: 0,
				whiteSpace: 'pre'
			}).appendTo('body');
		}
	
		Selectize.$testInput.text(str);
	
		transferStyles($parent, Selectize.$testInput, [
			'letterSpacing',
			'fontSize',
			'fontFamily',
			'fontWeight',
			'textTransform'
		]);
	
		return Selectize.$testInput.width();
	};
	
	/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */
	var autoGrow = function($input) {
		var currentWidth = null;
	
		var update = function(e, options) {
			var value, keyCode, printable, placeholder, width;
			var shift, character, selection;
			e = e || window.event || {};
			options = options || {};
	
			if (e.metaKey || e.altKey) return;
			if (!options.force && $input.data('grow') === false) return;
	
			value = $input.val();
			if (e.type && e.type.toLowerCase() === 'keydown') {
				keyCode = e.keyCode;
				printable = (
					(keyCode >= 48 && keyCode <= 57)  || // 0-9
					(keyCode >= 65 && keyCode <= 90)   || // a-z
					(keyCode >= 96 && keyCode <= 111)  || // numpad 0-9, numeric operators
					(keyCode >= 186 && keyCode <= 222) || // semicolon, equal, comma, dash, etc.
					keyCode === 32 // space
				);
	
				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
					selection = getSelection($input[0]);
					if (selection.length) {
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
					} else if (keyCode === KEY_BACKSPACE && selection.start) {
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);
					}
				} else if (printable) {
					shift = e.shiftKey;
					character = String.fromCharCode(e.keyCode);
					if (shift) character = character.toUpperCase();
					else character = character.toLowerCase();
					value += character;
				}
			}
	
			placeholder = $input.attr('placeholder');
			if (!value && placeholder) {
				value = placeholder;
			}
	
			width = measureString(value, $input) + 4;
			if (width !== currentWidth) {
				currentWidth = width;
				$input.width(width);
				$input.triggerHandler('resize');
			}
		};
	
		$input.on('keydown keyup update blur', update);
		update();
	};
	
	var domToString = function(d) {
		var tmp = document.createElement('div');
	
		tmp.appendChild(d.cloneNode(true));
	
		return tmp.innerHTML;
	};
	
	var logError = function(message, options){
		if(!options) options = {};
		var component = "Selectize";
	
		console.error(component + ": " + message)
	
		if(options.explanation){
			// console.group is undefined in <IE11
			if(console.group) console.group();
			console.error(options.explanation);
			if(console.group) console.groupEnd();
		}
	}
	
	
	var Selectize = function($input, settings) {
		var key, i, n, dir, input, self = this;
		input = $input[0];
		input.selectize = self;
	
		// detect rtl environment
		var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
		dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';
	
		// setup default state
		$.extend(self, {
			order            : 0,
			settings         : settings,
			$input           : $input,
			tabIndex         : $input.attr('tabindex') || '',
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
			rtl              : /rtl/i.test(dir),
	
			eventNS          : '.selectize' + (++Selectize.count),
			highlightedValue : null,
			isBlurring       : false,
			isOpen           : false,
			isDisabled       : false,
			isRequired       : $input.is('[required]'),
			isInvalid        : false,
			isLocked         : false,
			isFocused        : false,
			isInputHidden    : false,
			isSetup          : false,
			isShiftDown      : false,
			isCmdDown        : false,
			isCtrlDown       : false,
			ignoreFocus      : false,
			ignoreBlur       : false,
			ignoreHover      : false,
			hasOptions       : false,
			currentResults   : null,
			lastValue        : '',
			caretPos         : 0,
			loading          : 0,
			loadedSearches   : {},
	
			$activeOption    : null,
			$activeItems     : [],
	
			optgroups        : {},
			options          : {},
			userOptions      : {},
			items            : [],
			renderCache      : {},
			onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
		});
	
		// search system
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
	
		// build options table
		if (self.settings.options) {
			for (i = 0, n = self.settings.options.length; i < n; i++) {
				self.registerOption(self.settings.options[i]);
			}
			delete self.settings.options;
		}
	
		// build optgroup table
		if (self.settings.optgroups) {
			for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
				self.registerOptionGroup(self.settings.optgroups[i]);
			}
			delete self.settings.optgroups;
		}
	
		// option-dependent defaults
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
		if (typeof self.settings.hideSelected !== 'boolean') {
			self.settings.hideSelected = self.settings.mode === 'multi';
		}
	
		self.initializePlugins(self.settings.plugins);
		self.setupCallbacks();
		self.setupTemplates();
		self.setup();
	};
	
	// mixins
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	MicroEvent.mixin(Selectize);
	
	if(typeof MicroPlugin !== "undefined"){
		MicroPlugin.mixin(Selectize);
	}else{
		logError("Dependency MicroPlugin is missing",
			{explanation:
				"Make sure you either: (1) are using the \"standalone\" "+
				"version of Selectize, or (2) require MicroPlugin before you "+
				"load Selectize."}
		);
	}
	
	
	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	$.extend(Selectize.prototype, {
	
		/**
		 * Creates all elements and sets up event bindings.
		 */
		setup: function() {
			var self      = this;
			var settings  = self.settings;
			var eventNS   = self.eventNS;
			var $window   = $(window);
			var $document = $(document);
			var $input    = self.$input;
	
			var $wrapper;
			var $control;
			var $control_input;
			var $dropdown;
			var $dropdown_content;
			var $dropdown_parent;
			var inputMode;
			var timeout_blur;
			var timeout_focus;
			var classes;
			var classes_plugins;
			var inputId;
	
			inputMode         = self.settings.mode;
			classes           = $input.attr('class') || '';
	
			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
	
			if(inputId = $input.attr('id')) {
				$control_input.attr('id', inputId + '-selectized');
				$("label[for='"+inputId+"']").attr('for', inputId + '-selectized');
			}
	
			if(self.settings.copyClassesToDropdown) {
				$dropdown.addClass(classes);
			}
	
			$wrapper.css({
				width: $input[0].style.width
			});
	
			if (self.plugins.names.length) {
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
				$wrapper.addClass(classes_plugins);
				$dropdown.addClass(classes_plugins);
			}
	
			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
				$input.attr('multiple', 'multiple');
			}
	
			if (self.settings.placeholder) {
				$control_input.attr('placeholder', settings.placeholder);
			}
	
			// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
			if (!self.settings.splitOn && self.settings.delimiter) {
				var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
				self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
			}
	
			if ($input.attr('autocorrect')) {
				$control_input.attr('autocorrect', $input.attr('autocorrect'));
			}
	
			if ($input.attr('autocapitalize')) {
				$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
			}
			$control_input[0].type = $input[0].type;
	
			self.$wrapper          = $wrapper;
			self.$control          = $control;
			self.$control_input    = $control_input;
			self.$dropdown         = $dropdown;
			self.$dropdown_content = $dropdown_content;
	
			$dropdown.on('mouseenter mousedown click', '[data-disabled]>[data-selectable]', function(e) { e.stopImmediatePropagation(); });
			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);
	
			$control.on({
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },
				click     : function() { return self.onClick.apply(self, arguments); }
			});
	
			$control_input.on({
				mousedown : function(e) { e.stopPropagation(); },
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },
				resize    : function() { self.positionDropdown.apply(self, []); },
				blur      : function() { return self.onBlur.apply(self, arguments); },
				focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
				paste     : function() { return self.onPaste.apply(self, arguments); }
			});
	
			$document.on('keydown' + eventNS, function(e) {
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
				self.isShiftDown = e.shiftKey;
			});
	
			$document.on('keyup' + eventNS, function(e) {
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;
			});
	
			$document.on('mousedown' + eventNS, function(e) {
				if (self.isFocused) {
					// prevent events on the dropdown scrollbar from causing the control to blur
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
						return false;
					}
					// blur on click outside
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
						self.blur(e.target);
					}
				}
			});
	
			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
				if (self.isOpen) {
					self.positionDropdown.apply(self, arguments);
				}
			});
			$window.on('mousemove' + eventNS, function() {
				self.ignoreHover = false;
			});
	
			// store original children and tab index so that they can be
			// restored when the destroy() method is called.
			this.revertSettings = {
				$children : $input.children().detach(),
				tabindex  : $input.attr('tabindex')
			};
	
			$input.attr('tabindex', -1).hide().after(self.$wrapper);
	
			if ($.isArray(settings.items)) {
				self.setValue(settings.items);
				delete settings.items;
			}
	
			// feature detect for the validation API
			if (SUPPORTS_VALIDITY_API) {
				$input.on('invalid' + eventNS, function(e) {
					e.preventDefault();
					self.isInvalid = true;
					self.refreshState();
				});
			}
	
			self.updateOriginalInput();
			self.refreshItems();
			self.refreshState();
			self.updatePlaceholder();
			self.isSetup = true;
	
			if ($input.is(':disabled')) {
				self.disable();
			}
	
			self.on('change', this.onChange);
	
			$input.data('selectize', self);
			$input.addClass('selectized');
			self.trigger('initialize');
	
			// preload options
			if (settings.preload === true) {
				self.onSearchChange('');
			}
	
		},
	
		/**
		 * Sets up default rendering functions.
		 */
		setupTemplates: function() {
			var self = this;
			var field_label = self.settings.labelField;
			var field_optgroup = self.settings.optgroupLabelField;
	
			var templates = {
				'optgroup': function(data) {
					return '<div class="optgroup">' + data.html + '</div>';
				},
				'optgroup_header': function(data, escape) {
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
				},
				'option': function(data, escape) {
					return '<div class="option">' + escape(data[field_label]) + '</div>';
				},
				'item': function(data, escape) {
					return '<div class="item">' + escape(data[field_label]) + '</div>';
				},
				'option_create': function(data, escape) {
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
				}
			};
	
			self.settings.render = $.extend({}, templates, self.settings.render);
		},
	
		/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */
		setupCallbacks: function() {
			var key, fn, callbacks = {
				'initialize'      : 'onInitialize',
				'change'          : 'onChange',
				'item_add'        : 'onItemAdd',
				'item_remove'     : 'onItemRemove',
				'clear'           : 'onClear',
				'option_add'      : 'onOptionAdd',
				'option_remove'   : 'onOptionRemove',
				'option_clear'    : 'onOptionClear',
				'optgroup_add'    : 'onOptionGroupAdd',
				'optgroup_remove' : 'onOptionGroupRemove',
				'optgroup_clear'  : 'onOptionGroupClear',
				'dropdown_open'   : 'onDropdownOpen',
				'dropdown_close'  : 'onDropdownClose',
				'type'            : 'onType',
				'load'            : 'onLoad',
				'focus'           : 'onFocus',
				'blur'            : 'onBlur'
			};
	
			for (key in callbacks) {
				if (callbacks.hasOwnProperty(key)) {
					fn = this.settings[callbacks[key]];
					if (fn) this.on(key, fn);
				}
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onClick: function(e) {
			var self = this;
	
			// necessary for mobile webkit devices (manual focus triggering
			// is ignored unless invoked within a click event)
	    // also necessary to reopen a dropdown that has been closed by
	    // closeAfterSelect
			if (!self.isFocused || !self.isOpen) {
				self.focus();
				e.preventDefault();
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onMouseDown: function(e) {
			var self = this;
			var defaultPrevented = e.isDefaultPrevented();
			var $target = $(e.target);
	
			if (self.isFocused) {
				// retain focus by preventing native handling. if the
				// event target is the input it should not be modified.
				// otherwise, text selection within the input won't work.
				if (e.target !== self.$control_input[0]) {
					if (self.settings.mode === 'single') {
						// toggle dropdown
						self.isOpen ? self.close() : self.open();
					} else if (!defaultPrevented) {
						self.setActiveItem(null);
					}
					return false;
				}
			} else {
				// give control focus
				if (!defaultPrevented) {
					window.setTimeout(function() {
						self.focus();
					}, 0);
				}
			}
		},
	
		/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */
		onChange: function() {
			this.$input.trigger('change');
		},
	
		/**
		 * Triggered on <input> paste.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onPaste: function(e) {
			var self = this;
	
			if (self.isFull() || self.isInputHidden || self.isLocked) {
				e.preventDefault();
				return;
			}
	
			// If a regex or string is included, this will split the pasted
			// input and create Items for each separate value
			if (self.settings.splitOn) {
	
				// Wait for pasted text to be recognized in value
				setTimeout(function() {
					var pastedText = self.$control_input.val();
					if(!pastedText.match(self.settings.splitOn)){ return }
	
					var splitInput = $.trim(pastedText).split(self.settings.splitOn);
					for (var i = 0, n = splitInput.length; i < n; i++) {
						self.createItem(splitInput[i]);
					}
				}, 0);
			}
		},
	
		/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyPress: function(e) {
			if (this.isLocked) return e && e.preventDefault();
			var character = String.fromCharCode(e.keyCode || e.which);
			if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
				this.createItem();
				e.preventDefault();
				return false;
			}
		},
	
		/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyDown: function(e) {
			var isInput = e.target === this.$control_input[0];
			var self = this;
	
			if (self.isLocked) {
				if (e.keyCode !== KEY_TAB) {
					e.preventDefault();
				}
				return;
			}
	
			switch (e.keyCode) {
				case KEY_A:
					if (self.isCmdDown) {
						self.selectAll();
						return;
					}
					break;
				case KEY_ESC:
					if (self.isOpen) {
						e.preventDefault();
						e.stopPropagation();
						self.close();
					}
					return;
				case KEY_N:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_DOWN:
					if (!self.isOpen && self.hasOptions) {
						self.open();
					} else if (self.$activeOption) {
						self.ignoreHover = true;
						var $next = self.getAdjacentOption(self.$activeOption, 1);
						if ($next.length) self.setActiveOption($next, true, true);
					}
					e.preventDefault();
					return;
				case KEY_P:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_UP:
					if (self.$activeOption) {
						self.ignoreHover = true;
						var $prev = self.getAdjacentOption(self.$activeOption, -1);
						if ($prev.length) self.setActiveOption($prev, true, true);
					}
					e.preventDefault();
					return;
				case KEY_RETURN:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
						e.preventDefault();
					}
					return;
				case KEY_LEFT:
					self.advanceSelection(-1, e);
					return;
				case KEY_RIGHT:
					self.advanceSelection(1, e);
					return;
				case KEY_TAB:
					if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
	
						// Default behaviour is to jump to the next field, we only want this
						// if the current field doesn't accept any more entries
						if (!self.isFull()) {
							e.preventDefault();
						}
					}
					if (self.settings.create && self.createItem()) {
						e.preventDefault();
					}
					return;
				case KEY_BACKSPACE:
				case KEY_DELETE:
					self.deleteSelection(e);
					return;
			}
	
			if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
				e.preventDefault();
				return;
			}
		},
	
		/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyUp: function(e) {
			var self = this;
	
			if (self.isLocked) return e && e.preventDefault();
			var value = self.$control_input.val() || '';
			if (self.lastValue !== value) {
				self.lastValue = value;
				self.onSearchChange(value);
				self.refreshOptions();
				self.trigger('type', value);
			}
		},
	
		/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadThrottle` milliseconds)
		 *
		 * @param {string} value
		 */
		onSearchChange: function(value) {
			var self = this;
			var fn = self.settings.load;
			if (!fn) return;
			if (self.loadedSearches.hasOwnProperty(value)) return;
			self.loadedSearches[value] = true;
			self.load(function(callback) {
				fn.apply(self, [value, callback]);
			});
		},
	
		/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		onFocus: function(e) {
			var self = this;
			var wasFocused = self.isFocused;
	
			if (self.isDisabled) {
				self.blur();
				e && e.preventDefault();
				return false;
			}
	
			if (self.ignoreFocus) return;
			self.isFocused = true;
			if (self.settings.preload === 'focus') self.onSearchChange('');
	
			if (!wasFocused) self.trigger('focus');
	
			if (!self.$activeItems.length) {
				self.showInput();
				self.setActiveItem(null);
				self.refreshOptions(!!self.settings.openOnFocus);
			}
	
			self.refreshState();
		},
	
		/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @param {Element} dest
		 */
		onBlur: function(e, dest) {
			var self = this;
			if (!self.isFocused) return;
			self.isFocused = false;
	
			if (self.ignoreFocus) {
				return;
			} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
				// necessary to prevent IE closing the dropdown when the scrollbar is clicked
				self.ignoreBlur = true;
				self.onFocus(e);
				return;
			}
	
			var deactivate = function() {
				self.close();
				self.setTextboxValue('');
				self.setActiveItem(null);
				self.setActiveOption(null);
				self.setCaret(self.items.length);
				self.refreshState();
	
				// IE11 bug: element still marked as active
				dest && dest.focus && dest.focus();
	
				self.isBlurring = false;
				self.ignoreFocus = false;
				self.trigger('blur');
			};
	
			self.isBlurring = true;
			self.ignoreFocus = true;
			if (self.settings.create && self.settings.createOnBlur) {
				self.createItem(null, false, deactivate);
			} else {
				deactivate();
			}
		},
	
		/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionHover: function(e) {
			if (this.ignoreHover) return;
			this.setActiveOption(e.currentTarget, false);
		},
	
		/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionSelect: function(e) {
			var value, $target, $option, self = this;
	
			if (e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}
	
			$target = $(e.currentTarget);
			if ($target.hasClass('create')) {
				self.createItem(null, function() {
					if (self.settings.closeAfterSelect) {
						self.close();
					}
				});
			} else {
				value = $target.attr('data-value');
				if (typeof value !== 'undefined') {
					self.lastQuery = null;
					self.setTextboxValue('');
					self.addItem(value);
					if (self.settings.closeAfterSelect) {
						self.close();
					} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
						self.setActiveOption(self.getOption(value));
					}
				}
			}
		},
	
		/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onItemSelect: function(e) {
			var self = this;
	
			if (self.isLocked) return;
			if (self.settings.mode === 'multi') {
				e.preventDefault();
				self.setActiveItem(e.currentTarget, e);
			}
		},
	
		/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */
		load: function(fn) {
			var self = this;
			var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);
	
			self.loading++;
			fn.apply(self, [function(results) {
				self.loading = Math.max(self.loading - 1, 0);
				if (results && results.length) {
					self.addOption(results);
					self.refreshOptions(self.isFocused && !self.isInputHidden);
				}
				if (!self.loading) {
					$wrapper.removeClass(self.settings.loadingClass);
				}
				self.trigger('load', results);
			}]);
		},
	
		/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */
		setTextboxValue: function(value) {
			var $input = this.$control_input;
			var changed = $input.val() !== value;
			if (changed) {
				$input.val(value).triggerHandler('update');
				this.lastValue = value;
			}
		},
	
		/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */
		getValue: function() {
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
				return this.items;
			} else {
				return this.items.join(this.settings.delimiter);
			}
		},
	
		/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */
		setValue: function(value, silent) {
			var events = silent ? [] : ['change'];
	
			debounce_events(this, events, function() {
				this.clear(silent);
				this.addItems(value, silent);
			});
		},
	
		/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */
		setActiveItem: function($item, e) {
			var self = this;
			var eventName;
			var i, idx, begin, end, item, swap;
			var $last;
	
			if (self.settings.mode === 'single') return;
			$item = $($item);
	
			// clear the active selection
			if (!$item.length) {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [];
				if (self.isFocused) {
					self.showInput();
				}
				return;
			}
	
			// modify selection
			eventName = e && e.type.toLowerCase();
	
			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
				$last = self.$control.children('.active:last');
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
				if (begin > end) {
					swap  = begin;
					begin = end;
					end   = swap;
				}
				for (i = begin; i <= end; i++) {
					item = self.$control[0].childNodes[i];
					if (self.$activeItems.indexOf(item) === -1) {
						$(item).addClass('active');
						self.$activeItems.push(item);
					}
				}
				e.preventDefault();
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
					$item.removeClass('active');
				} else {
					self.$activeItems.push($item.addClass('active')[0]);
				}
			} else {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [$item.addClass('active')[0]];
			}
	
			// ensure control has focus
			self.hideInput();
			if (!this.isFocused) {
				self.focus();
			}
		},
	
		/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */
		setActiveOption: function($option, scroll, animate) {
			var height_menu, height_item, y;
			var scroll_top, scroll_bottom;
			var self = this;
	
			if (self.$activeOption) self.$activeOption.removeClass('active');
			self.$activeOption = null;
	
			$option = $($option);
			if (!$option.length) return;
	
			self.$activeOption = $option.addClass('active');
	
			if (scroll || !isset(scroll)) {
	
				height_menu   = self.$dropdown_content.height();
				height_item   = self.$activeOption.outerHeight(true);
				scroll        = self.$dropdown_content.scrollTop() || 0;
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
				scroll_top    = y;
				scroll_bottom = y - height_menu + height_item;
	
				if (y + height_item > height_menu + scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
				} else if (y < scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
				}
	
			}
		},
	
		/**
		 * Selects all items (CTRL + A).
		 */
		selectAll: function() {
			var self = this;
			if (self.settings.mode === 'single') return;
	
			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
			if (self.$activeItems.length) {
				self.hideInput();
				self.close();
			}
			self.focus();
		},
	
		/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */
		hideInput: function() {
			var self = this;
	
			self.setTextboxValue('');
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
			self.isInputHidden = true;
		},
	
		/**
		 * Restores input visibility.
		 */
		showInput: function() {
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});
			this.isInputHidden = false;
		},
	
		/**
		 * Gives the control focus.
		 */
		focus: function() {
			var self = this;
			if (self.isDisabled) return;
	
			self.ignoreFocus = true;
			self.$control_input[0].focus();
			window.setTimeout(function() {
				self.ignoreFocus = false;
				self.onFocus();
			}, 0);
		},
	
		/**
		 * Forces the control out of focus.
		 *
		 * @param {Element} dest
		 */
		blur: function(dest) {
			this.$control_input[0].blur();
			this.onBlur(null, dest);
		},
	
		/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */
		getScoreFunction: function(query) {
			return this.sifter.getScoreFunction(query, this.getSearchOptions());
		},
	
		/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */
		getSearchOptions: function() {
			var settings = this.settings;
			var sort = settings.sortField;
			if (typeof sort === 'string') {
				sort = [{field: sort}];
			}
	
			return {
				fields      : settings.searchField,
				conjunction : settings.searchConjunction,
				sort        : sort,
				nesting     : settings.nesting
			};
		},
	
		/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */
		search: function(query) {
			var i, value, score, result, calculateScore;
			var self     = this;
			var settings = self.settings;
			var options  = this.getSearchOptions();
	
			// validate user-provided result scoring function
			if (settings.score) {
				calculateScore = self.settings.score.apply(this, [query]);
				if (typeof calculateScore !== 'function') {
					throw new Error('Selectize "score" setting must be a function that returns a function');
				}
			}
	
			// perform search
			if (query !== self.lastQuery) {
				self.lastQuery = query;
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
				self.currentResults = result;
			} else {
				result = $.extend(true, {}, self.currentResults);
			}
	
			// filter out selected items
			if (settings.hideSelected) {
				for (i = result.items.length - 1; i >= 0; i--) {
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
						result.items.splice(i, 1);
					}
				}
			}
	
			return result;
		},
	
		/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */
		refreshOptions: function(triggerDropdown) {
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;
	
			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}
	
			var self              = this;
			var query             = $.trim(self.$control_input.val());
			var results           = self.search(query);
			var $dropdown_content = self.$dropdown_content;
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
	
			// build markup
			n = results.items.length;
			if (typeof self.settings.maxOptions === 'number') {
				n = Math.min(n, self.settings.maxOptions);
			}
	
			// render and group available options individually
			groups = {};
			groups_order = [];
	
			for (i = 0; i < n; i++) {
				option      = self.options[results.items[i].id];
				option_html = self.render('option', option);
				optgroup    = option[self.settings.optgroupField] || '';
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
	
				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
					optgroup = optgroups[j];
					if (!self.optgroups.hasOwnProperty(optgroup)) {
						optgroup = '';
					}
					if (!groups.hasOwnProperty(optgroup)) {
						groups[optgroup] = document.createDocumentFragment();
						groups_order.push(optgroup);
					}
					groups[optgroup].appendChild(option_html);
				}
			}
	
			// sort optgroups
			if (this.settings.lockOptgroupOrder) {
				groups_order.sort(function(a, b) {
					var a_order = self.optgroups[a].$order || 0;
					var b_order = self.optgroups[b].$order || 0;
					return a_order - b_order;
				});
			}
	
			// render optgroup headers & join groups
			html = document.createDocumentFragment();
			for (i = 0, n = groups_order.length; i < n; i++) {
				optgroup = groups_order[i];
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
					// render the optgroup header and options within it,
					// then pass it to the wrapper template
					html_children = document.createDocumentFragment();
					html_children.appendChild(self.render('optgroup_header', self.optgroups[optgroup]));
					html_children.appendChild(groups[optgroup]);
	
					html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
						html: domToString(html_children),
						dom:  html_children
					})));
				} else {
					html.appendChild(groups[optgroup]);
				}
			}
	
			$dropdown_content.html(html);
	
			// highlight matching terms inline
			if (self.settings.highlight) {
				$dropdown_content.removeHighlight();
				if (results.query.length && results.tokens.length) {
					for (i = 0, n = results.tokens.length; i < n; i++) {
						highlight($dropdown_content, results.tokens[i].regex);
					}
				}
			}
	
			// add "selected" class to selected options
			if (!self.settings.hideSelected) {
				for (i = 0, n = self.items.length; i < n; i++) {
					self.getOption(self.items[i]).addClass('selected');
				}
			}
	
			// add create option
			has_create_option = self.canCreate(query);
			if (has_create_option) {
				$dropdown_content.prepend(self.render('option_create', {input: query}));
				$create = $($dropdown_content[0].childNodes[0]);
			}
	
			// activate
			self.hasOptions = results.items.length > 0 || has_create_option;
			if (self.hasOptions) {
				if (results.items.length > 0) {
					$active_before = active_before && self.getOption(active_before);
					if ($active_before && $active_before.length) {
						$active = $active_before;
					} else if (self.settings.mode === 'single' && self.items.length) {
						$active = self.getOption(self.items[0]);
					}
					if (!$active || !$active.length) {
						if ($create && !self.settings.addPrecedence) {
							$active = self.getAdjacentOption($create, 1);
						} else {
							$active = $dropdown_content.find('[data-selectable]:first');
						}
					}
				} else {
					$active = $create;
				}
				self.setActiveOption($active);
				if (triggerDropdown && !self.isOpen) { self.open(); }
			} else {
				self.setActiveOption(null);
				if (triggerDropdown && self.isOpen) { self.close(); }
			}
		},
	
		/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object|array} data
		 */
		addOption: function(data) {
			var i, n, value, self = this;
	
			if ($.isArray(data)) {
				for (i = 0, n = data.length; i < n; i++) {
					self.addOption(data[i]);
				}
				return;
			}
	
			if (value = self.registerOption(data)) {
				self.userOptions[value] = true;
				self.lastQuery = null;
				self.trigger('option_add', value, data);
			}
		},
	
		/**
		 * Registers an option to the pool of options.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOption: function(data) {
			var key = hash_key(data[this.settings.valueField]);
			if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
			data.$order = data.$order || ++this.order;
			this.options[key] = data;
			return key;
		},
	
		/**
		 * Registers an option group to the pool of option groups.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOptionGroup: function(data) {
			var key = hash_key(data[this.settings.optgroupValueField]);
			if (!key) return false;
	
			data.$order = data.$order || ++this.order;
			this.optgroups[key] = data;
			return key;
		},
	
		/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */
		addOptionGroup: function(id, data) {
			data[this.settings.optgroupValueField] = id;
			if (id = this.registerOptionGroup(data)) {
				this.trigger('optgroup_add', id, data);
			}
		},
	
		/**
		 * Removes an existing option group.
		 *
		 * @param {string} id
		 */
		removeOptionGroup: function(id) {
			if (this.optgroups.hasOwnProperty(id)) {
				delete this.optgroups[id];
				this.renderCache = {};
				this.trigger('optgroup_remove', id);
			}
		},
	
		/**
		 * Clears all existing option groups.
		 */
		clearOptionGroups: function() {
			this.optgroups = {};
			this.renderCache = {};
			this.trigger('optgroup_clear');
		},
	
		/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */
		updateOption: function(value, data) {
			var self = this;
			var $item, $item_new;
			var value_new, index_item, cache_items, cache_options, order_old;
	
			value     = hash_key(value);
			value_new = hash_key(data[self.settings.valueField]);
	
			// sanity checks
			if (value === null) return;
			if (!self.options.hasOwnProperty(value)) return;
			if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
	
			order_old = self.options[value].$order;
	
			// update references
			if (value_new !== value) {
				delete self.options[value];
				index_item = self.items.indexOf(value);
				if (index_item !== -1) {
					self.items.splice(index_item, 1, value_new);
				}
			}
			data.$order = data.$order || order_old;
			self.options[value_new] = data;
	
			// invalidate render cache
			cache_items = self.renderCache['item'];
			cache_options = self.renderCache['option'];
	
			if (cache_items) {
				delete cache_items[value];
				delete cache_items[value_new];
			}
			if (cache_options) {
				delete cache_options[value];
				delete cache_options[value_new];
			}
	
			// update the item if it's selected
			if (self.items.indexOf(value_new) !== -1) {
				$item = self.getItem(value);
				$item_new = $(self.render('item', data));
				if ($item.hasClass('active')) $item_new.addClass('active');
				$item.replaceWith($item_new);
			}
	
			// invalidate last query because we might have updated the sortField
			self.lastQuery = null;
	
			// update dropdown contents
			if (self.isOpen) {
				self.refreshOptions(false);
			}
		},
	
		/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		removeOption: function(value, silent) {
			var self = this;
			value = hash_key(value);
	
			var cache_items = self.renderCache['item'];
			var cache_options = self.renderCache['option'];
			if (cache_items) delete cache_items[value];
			if (cache_options) delete cache_options[value];
	
			delete self.userOptions[value];
			delete self.options[value];
			self.lastQuery = null;
			self.trigger('option_remove', value);
			self.removeItem(value, silent);
		},
	
		/**
		 * Clears all options.
		 */
		clearOptions: function() {
			var self = this;
	
			self.loadedSearches = {};
			self.userOptions = {};
			self.renderCache = {};
			var options = self.options;
			$.each(self.options, function(key, value) {
				if(self.items.indexOf(key) == -1) {
					delete options[key];
				}
			});
			self.options = self.sifter.items = options;
			self.lastQuery = null;
			self.trigger('option_clear');
		},
	
		/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getOption: function(value) {
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
		},
	
		/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */
		getAdjacentOption: function($option, direction) {
			var $options = this.$dropdown.find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		},
	
		/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */
		getElementWithValue: function(value, $els) {
			value = hash_key(value);
	
			if (typeof value !== 'undefined' && value !== null) {
				for (var i = 0, n = $els.length; i < n; i++) {
					if ($els[i].getAttribute('data-value') === value) {
						return $($els[i]);
					}
				}
			}
	
			return $();
		},
	
		/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getItem: function(value) {
			return this.getElementWithValue(value, this.$control.children());
		},
	
		/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItems: function(values, silent) {
			this.buffer = document.createDocumentFragment();
	
			var childNodes = this.$control[0].childNodes;
			for (var i = 0; i < childNodes.length; i++) {
				this.buffer.appendChild(childNodes[i]);
			}
	
			var items = $.isArray(values) ? values : [values];
			for (var i = 0, n = items.length; i < n; i++) {
				this.isPending = (i < n - 1);
				this.addItem(items[i], silent);
			}
	
			var control = this.$control[0];
			control.insertBefore(this.buffer, control.firstChild);
	
			this.buffer = null;
		},
	
		/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItem: function(value, silent) {
			var events = silent ? [] : ['change'];
	
			debounce_events(this, events, function() {
				var $item, $option, $options;
				var self = this;
				var inputMode = self.settings.mode;
				var i, active, value_next, wasFull;
				value = hash_key(value);
	
				if (self.items.indexOf(value) !== -1) {
					if (inputMode === 'single') self.close();
					return;
				}
	
				if (!self.options.hasOwnProperty(value)) return;
				if (inputMode === 'single') self.clear(silent);
				if (inputMode === 'multi' && self.isFull()) return;
	
				$item = $(self.render('item', self.options[value]));
				wasFull = self.isFull();
				self.items.splice(self.caretPos, 0, value);
				self.insertAtCaret($item);
				if (!self.isPending || (!wasFull && self.isFull())) {
					self.refreshState();
				}
	
				if (self.isSetup) {
					$options = self.$dropdown_content.find('[data-selectable]');
	
					// update menu / remove the option (if this is not one item being added as part of series)
					if (!self.isPending) {
						$option = self.getOption(value);
						value_next = self.getAdjacentOption($option, 1).attr('data-value');
						self.refreshOptions(self.isFocused && inputMode !== 'single');
						if (value_next) {
							self.setActiveOption(self.getOption(value_next));
						}
					}
	
					// hide the menu if the maximum number of items have been selected or no options are left
					if (!$options.length || self.isFull()) {
						self.close();
					} else if (!self.isPending) {
						self.positionDropdown();
					}
	
					self.updatePlaceholder();
					self.trigger('item_add', value, $item);
	
					if (!self.isPending) {
						self.updateOriginalInput({silent: silent});
					}
				}
			});
		},
	
		/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */
		removeItem: function(value, silent) {
			var self = this;
			var $item, i, idx;
	
			$item = (value instanceof $) ? value : self.getItem(value);
			value = hash_key($item.attr('data-value'));
			i = self.items.indexOf(value);
	
			if (i !== -1) {
				$item.remove();
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
				}
	
				self.items.splice(i, 1);
				self.lastQuery = null;
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
					self.removeOption(value, silent);
				}
	
				if (i < self.caretPos) {
					self.setCaret(self.caretPos - 1);
				}
	
				self.refreshState();
				self.updatePlaceholder();
				self.updateOriginalInput({silent: silent});
				self.positionDropdown();
				self.trigger('item_remove', value, $item);
			}
		},
	
		/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @param {string} value
		 * @param {boolean} [triggerDropdown]
		 * @param {function} [callback]
		 * @return {boolean}
		 */
		createItem: function(input, triggerDropdown) {
			var self  = this;
			var caret = self.caretPos;
			input = input || $.trim(self.$control_input.val() || '');
	
			var callback = arguments[arguments.length - 1];
			if (typeof callback !== 'function') callback = function() {};
	
			if (typeof triggerDropdown !== 'boolean') {
				triggerDropdown = true;
			}
	
			if (!self.canCreate(input)) {
				callback();
				return false;
			}
	
			self.lock();
	
			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
				var data = {};
				data[self.settings.labelField] = input;
				data[self.settings.valueField] = input;
				return data;
			};
	
			var create = once(function(data) {
				self.unlock();
	
				if (!data || typeof data !== 'object') return callback();
				var value = hash_key(data[self.settings.valueField]);
				if (typeof value !== 'string') return callback();
	
				self.setTextboxValue('');
				self.addOption(data);
				self.setCaret(caret);
				self.addItem(value);
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
				callback(data);
			});
	
			var output = setup.apply(this, [input, create]);
			if (typeof output !== 'undefined') {
				create(output);
			}
	
			return true;
		},
	
		/**
		 * Re-renders the selected item lists.
		 */
		refreshItems: function() {
			this.lastQuery = null;
	
			if (this.isSetup) {
				this.addItem(this.items);
			}
	
			this.refreshState();
			this.updateOriginalInput();
		},
	
		/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */
		refreshState: function() {
			this.refreshValidityState();
			this.refreshClasses();
		},
	
		/**
		 * Update the `required` attribute of both input and control input.
		 *
		 * The `required` property needs to be activated on the control input
		 * for the error to be displayed at the right place. `required` also
		 * needs to be temporarily deactivated on the input since the input is
		 * hidden and can't show errors.
		 */
		refreshValidityState: function() {
			if (!this.isRequired) return false;
	
			var invalid = !this.items.length;
	
			this.isInvalid = invalid;
			this.$control_input.prop('required', invalid);
			this.$input.prop('required', !invalid);
		},
	
		/**
		 * Updates all state-dependent CSS classes.
		 */
		refreshClasses: function() {
			var self     = this;
			var isFull   = self.isFull();
			var isLocked = self.isLocked;
	
			self.$wrapper
				.toggleClass('rtl', self.rtl);
	
			self.$control
				.toggleClass('focus', self.isFocused)
				.toggleClass('disabled', self.isDisabled)
				.toggleClass('required', self.isRequired)
				.toggleClass('invalid', self.isInvalid)
				.toggleClass('locked', isLocked)
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)
				.toggleClass('dropdown-active', self.isOpen)
				.toggleClass('has-options', !$.isEmptyObject(self.options))
				.toggleClass('has-items', self.items.length > 0);
	
			self.$control_input.data('grow', !isFull && !isLocked);
		},
	
		/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */
		isFull: function() {
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
		},
	
		/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */
		updateOriginalInput: function(opts) {
			var i, n, options, label, self = this;
			opts = opts || {};
	
			if (self.tagType === TAG_SELECT) {
				options = [];
				for (i = 0, n = self.items.length; i < n; i++) {
					label = self.options[self.items[i]][self.settings.labelField] || '';
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
				}
				if (!options.length && !this.$input.attr('multiple')) {
					options.push('<option value="" selected="selected"></option>');
				}
				self.$input.html(options.join(''));
			} else {
				self.$input.val(self.getValue());
				self.$input.attr('value',self.$input.val());
			}
	
			if (self.isSetup) {
				if (!opts.silent) {
					self.trigger('change', self.$input.val());
				}
			}
		},
	
		/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */
		updatePlaceholder: function() {
			if (!this.settings.placeholder) return;
			var $input = this.$control_input;
	
			if (this.items.length) {
				$input.removeAttr('placeholder');
			} else {
				$input.attr('placeholder', this.settings.placeholder);
			}
			$input.triggerHandler('update', {force: true});
		},
	
		/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */
		open: function() {
			var self = this;
	
			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
			self.focus();
			self.isOpen = true;
			self.refreshState();
			self.$dropdown.css({visibility: 'hidden', display: 'block'});
			self.positionDropdown();
			self.$dropdown.css({visibility: 'visible'});
			self.trigger('dropdown_open', self.$dropdown);
		},
	
		/**
		 * Closes the autocomplete dropdown menu.
		 */
		close: function() {
			var self = this;
			var trigger = self.isOpen;
	
			if (self.settings.mode === 'single' && self.items.length) {
				self.hideInput();
	
				// Do not trigger blur while inside a blur event,
				// this fixes some weird tabbing behavior in FF and IE.
				// See #1164
				if (!self.isBlurring) {
					self.$control_input.blur(); // close keyboard on iOS
				}
			}
	
			self.isOpen = false;
			self.$dropdown.hide();
			self.setActiveOption(null);
			self.refreshState();
	
			if (trigger) self.trigger('dropdown_close', self.$dropdown);
		},
	
		/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */
		positionDropdown: function() {
			var $control = this.$control;
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
			offset.top += $control.outerHeight(true);
	
			this.$dropdown.css({
				width : $control[0].getBoundingClientRect().width,
				top   : offset.top,
				left  : offset.left
			});
		},
	
		/**
		 * Resets / clears all selected items
		 * from the control.
		 *
		 * @param {boolean} silent
		 */
		clear: function(silent) {
			var self = this;
	
			if (!self.items.length) return;
			self.$control.children(':not(input)').remove();
			self.items = [];
			self.lastQuery = null;
			self.setCaret(0);
			self.setActiveItem(null);
			self.updatePlaceholder();
			self.updateOriginalInput({silent: silent});
			self.refreshState();
			self.showInput();
			self.trigger('clear');
		},
	
		/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */
		insertAtCaret: function($el) {
			var caret = Math.min(this.caretPos, this.items.length);
			var el = $el[0];
			var target = this.buffer || this.$control[0];
	
			if (caret === 0) {
				target.insertBefore(el, target.firstChild);
			} else {
				target.insertBefore(el, target.childNodes[caret]);
			}
	
			this.setCaret(caret + 1);
		},
	
		/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		deleteSelection: function(e) {
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
			var self = this;
	
			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
			selection = getSelection(self.$control_input[0]);
	
			if (self.$activeOption && !self.settings.hideSelected) {
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
			}
	
			// determine items that will be removed
			values = [];
	
			if (self.$activeItems.length) {
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
				caret = self.$control.children(':not(input)').index($tail);
				if (direction > 0) { caret++; }
	
				for (i = 0, n = self.$activeItems.length; i < n; i++) {
					values.push($(self.$activeItems[i]).attr('data-value'));
				}
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
				if (direction < 0 && selection.start === 0 && selection.length === 0) {
					values.push(self.items[self.caretPos - 1]);
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {
					values.push(self.items[self.caretPos]);
				}
			}
	
			// allow the callback to abort
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;
			}
	
			// perform removal
			if (typeof caret !== 'undefined') {
				self.setCaret(caret);
			}
			while (values.length) {
				self.removeItem(values.pop());
			}
	
			self.showInput();
			self.positionDropdown();
			self.refreshOptions(true);
	
			// select previous option
			if (option_select) {
				$option_select = self.getOption(option_select);
				if ($option_select.length) {
					self.setActiveOption($option_select);
				}
			}
	
			return true;
		},
	
		/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceSelection: function(direction, e) {
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;
			var self = this;
	
			if (direction === 0) return;
			if (self.rtl) direction *= -1;
	
			tail = direction > 0 ? 'last' : 'first';
			selection = getSelection(self.$control_input[0]);
	
			if (self.isFocused && !self.isInputHidden) {
				valueLength = self.$control_input.val().length;
				cursorAtEdge = direction < 0
					? selection.start === 0 && selection.length === 0
					: selection.start === valueLength;
	
				if (cursorAtEdge && !valueLength) {
					self.advanceCaret(direction, e);
				}
			} else {
				$tail = self.$control.children('.active:' + tail);
				if ($tail.length) {
					idx = self.$control.children(':not(input)').index($tail);
					self.setActiveItem(null);
					self.setCaret(direction > 0 ? idx + 1 : idx);
				}
			}
		},
	
		/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceCaret: function(direction, e) {
			var self = this, fn, $adj;
	
			if (direction === 0) return;
	
			fn = direction > 0 ? 'next' : 'prev';
			if (self.isShiftDown) {
				$adj = self.$control_input[fn]();
				if ($adj.length) {
					self.hideInput();
					self.setActiveItem($adj);
					e && e.preventDefault();
				}
			} else {
				self.setCaret(self.caretPos + direction);
			}
		},
	
		/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */
		setCaret: function(i) {
			var self = this;
	
			if (self.settings.mode === 'single') {
				i = self.items.length;
			} else {
				i = Math.max(0, Math.min(self.items.length, i));
			}
	
			if(!self.isPending) {
				// the input must be moved by leaving it in place and moving the
				// siblings, due to the fact that focus cannot be restored once lost
				// on mobile webkit devices
				var j, n, fn, $children, $child;
				$children = self.$control.children(':not(input)');
				for (j = 0, n = $children.length; j < n; j++) {
					$child = $($children[j]).detach();
					if (j <  i) {
						self.$control_input.before($child);
					} else {
						self.$control.append($child);
					}
				}
			}
	
			self.caretPos = i;
		},
	
		/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */
		lock: function() {
			this.close();
			this.isLocked = true;
			this.refreshState();
		},
	
		/**
		 * Re-enables user input on the control.
		 */
		unlock: function() {
			this.isLocked = false;
			this.refreshState();
		},
	
		/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */
		disable: function() {
			var self = this;
			self.$input.prop('disabled', true);
			self.$control_input.prop('disabled', true).prop('tabindex', -1);
			self.isDisabled = true;
			self.lock();
		},
	
		/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */
		enable: function() {
			var self = this;
			self.$input.prop('disabled', false);
			self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
			self.isDisabled = false;
			self.unlock();
		},
	
		/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */
		destroy: function() {
			var self = this;
			var eventNS = self.eventNS;
			var revertSettings = self.revertSettings;
	
			self.trigger('destroy');
			self.off();
			self.$wrapper.remove();
			self.$dropdown.remove();
	
			self.$input
				.html('')
				.append(revertSettings.$children)
				.removeAttr('tabindex')
				.removeClass('selectized')
				.attr({tabindex: revertSettings.tabindex})
				.show();
	
			self.$control_input.removeData('grow');
			self.$input.removeData('selectize');
	
			if (--Selectize.count == 0 && Selectize.$testInput) {
				Selectize.$testInput.remove();
				Selectize.$testInput = undefined;
			}
	
			$(window).off(eventNS);
			$(document).off(eventNS);
			$(document.body).off(eventNS);
	
			delete self.$input[0].selectize;
		},
	
		/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */
		render: function(templateName, data) {
			var value, id, label;
			var html = '';
			var cache = false;
			var self = this;
			var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
	
			if (templateName === 'option' || templateName === 'item') {
				value = hash_key(data[self.settings.valueField]);
				cache = !!value;
			}
	
			// pull markup from cache if it exists
			if (cache) {
				if (!isset(self.renderCache[templateName])) {
					self.renderCache[templateName] = {};
				}
				if (self.renderCache[templateName].hasOwnProperty(value)) {
					return self.renderCache[templateName][value];
				}
			}
	
			// render markup
			html = $(self.settings.render[templateName].apply(this, [data, escape_html]));
	
			// add mandatory attributes
			if (templateName === 'option' || templateName === 'option_create') {
				if (!data[self.settings.disabledField]) {
					html.attr('data-selectable', '');
				}
			}
			else if (templateName === 'optgroup') {
				id = data[self.settings.optgroupValueField] || '';
				html.attr('data-group', id);
				if(data[self.settings.disabledField]) {
					html.attr('data-disabled', '');
				}
			}
			if (templateName === 'option' || templateName === 'item') {
				html.attr('data-value', value || '');
			}
	
			// update cache
			if (cache) {
				self.renderCache[templateName][value] = html[0];
			}
	
			return html[0];
		},
	
		/**
		 * Clears the render cache for a template. If
		 * no template is given, clears all render
		 * caches.
		 *
		 * @param {string} templateName
		 */
		clearCache: function(templateName) {
			var self = this;
			if (typeof templateName === 'undefined') {
				self.renderCache = {};
			} else {
				delete self.renderCache[templateName];
			}
		},
	
		/**
		 * Determines whether or not to display the
		 * create item prompt, given a user input.
		 *
		 * @param {string} input
		 * @return {boolean}
		 */
		canCreate: function(input) {
			var self = this;
			if (!self.settings.create) return false;
			var filter = self.settings.createFilter;
			return input.length
				&& (typeof filter !== 'function' || filter.apply(self, [input]))
				&& (typeof filter !== 'string' || new RegExp(filter).test(input))
				&& (!(filter instanceof RegExp) || filter.test(input));
		}
	
	});
	
	
	Selectize.count = 0;
	Selectize.defaults = {
		options: [],
		optgroups: [],
	
		plugins: [],
		delimiter: ',',
		splitOn: null, // regexp or string for splitting up values from a paste command
		persist: true,
		diacritics: true,
		create: false,
		createOnBlur: false,
		createFilter: null,
		highlight: true,
		openOnFocus: true,
		maxOptions: 1000,
		maxItems: null,
		hideSelected: null,
		addPrecedence: false,
		selectOnTab: false,
		preload: false,
		allowEmptyOption: false,
		closeAfterSelect: false,
	
		scrollDuration: 60,
		loadThrottle: 300,
		loadingClass: 'loading',
	
		dataAttr: 'data-data',
		optgroupField: 'optgroup',
		valueField: 'value',
		labelField: 'text',
		disabledField: 'disabled',
		optgroupLabelField: 'label',
		optgroupValueField: 'value',
		lockOptgroupOrder: false,
	
		sortField: '$order',
		searchField: ['text'],
		searchConjunction: 'and',
	
		mode: null,
		wrapperClass: 'selectize-control',
		inputClass: 'selectize-input',
		dropdownClass: 'selectize-dropdown',
		dropdownContentClass: 'selectize-dropdown-content',
	
		dropdownParent: null,
	
		copyClassesToDropdown: true,
	
		/*
		load                 : null, // function(query, callback) { ... }
		score                : null, // function(search) { ... }
		onInitialize         : null, // function() { ... }
		onChange             : null, // function(value) { ... }
		onItemAdd            : null, // function(value, $item) { ... }
		onItemRemove         : null, // function(value) { ... }
		onClear              : null, // function() { ... }
		onOptionAdd          : null, // function(value, data) { ... }
		onOptionRemove       : null, // function(value) { ... }
		onOptionClear        : null, // function() { ... }
		onOptionGroupAdd     : null, // function(id, data) { ... }
		onOptionGroupRemove  : null, // function(id) { ... }
		onOptionGroupClear   : null, // function() { ... }
		onDropdownOpen       : null, // function($dropdown) { ... }
		onDropdownClose      : null, // function($dropdown) { ... }
		onType               : null, // function(str) { ... }
		onDelete             : null, // function(values) { ... }
		*/
	
		render: {
			/*
			item: null,
			optgroup: null,
			optgroup_header: null,
			option: null,
			option_create: null
			*/
		}
	};
	
	
	$.fn.selectize = function(settings_user) {
		var defaults             = $.fn.selectize.defaults;
		var settings             = $.extend({}, defaults, settings_user);
		var attr_data            = settings.dataAttr;
		var field_label          = settings.labelField;
		var field_value          = settings.valueField;
		var field_disabled       = settings.disabledField;
		var field_optgroup       = settings.optgroupField;
		var field_optgroup_label = settings.optgroupLabelField;
		var field_optgroup_value = settings.optgroupValueField;
	
		/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_textbox = function($input, settings_element) {
			var i, n, values, option;
	
			var data_raw = $input.attr(attr_data);
	
			if (!data_raw) {
				var value = $.trim($input.val() || '');
				if (!settings.allowEmptyOption && !value.length) return;
				values = value.split(settings.delimiter);
				for (i = 0, n = values.length; i < n; i++) {
					option = {};
					option[field_label] = values[i];
					option[field_value] = values[i];
					settings_element.options.push(option);
				}
				settings_element.items = values;
			} else {
				settings_element.options = JSON.parse(data_raw);
				for (i = 0, n = settings_element.options.length; i < n; i++) {
					settings_element.items.push(settings_element.options[i][field_value]);
				}
			}
		};
	
		/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_select = function($input, settings_element) {
			var i, n, tagName, $children, order = 0;
			var options = settings_element.options;
			var optionsMap = {};
	
			var readData = function($el) {
				var data = attr_data && $el.attr(attr_data);
				if (typeof data === 'string' && data.length) {
					return JSON.parse(data);
				}
				return null;
			};
	
			var addOption = function($option, group) {
				$option = $($option);
	
				var value = hash_key($option.val());
				if (!value && !settings.allowEmptyOption) return;
	
				// if the option already exists, it's probably been
				// duplicated in another optgroup. in this case, push
				// the current group to the "optgroup" property on the
				// existing option so that it's rendered in both places.
				if (optionsMap.hasOwnProperty(value)) {
					if (group) {
						var arr = optionsMap[value][field_optgroup];
						if (!arr) {
							optionsMap[value][field_optgroup] = group;
						} else if (!$.isArray(arr)) {
							optionsMap[value][field_optgroup] = [arr, group];
						} else {
							arr.push(group);
						}
					}
					return;
				}
	
				var option             = readData($option) || {};
				option[field_label]    = option[field_label] || $option.text();
				option[field_value]    = option[field_value] || value;
				option[field_disabled] = option[field_disabled] || $option.prop('disabled');
				option[field_optgroup] = option[field_optgroup] || group;
	
				optionsMap[value] = option;
				options.push(option);
	
				if ($option.is(':selected')) {
					settings_element.items.push(value);
				}
			};
	
			var addGroup = function($optgroup) {
				var i, n, id, optgroup, $options;
	
				$optgroup = $($optgroup);
				id = $optgroup.attr('label');
	
				if (id) {
					optgroup = readData($optgroup) || {};
					optgroup[field_optgroup_label] = id;
					optgroup[field_optgroup_value] = id;
					optgroup[field_disabled] = $optgroup.prop('disabled');
					settings_element.optgroups.push(optgroup);
				}
	
				$options = $('option', $optgroup);
				for (i = 0, n = $options.length; i < n; i++) {
					addOption($options[i], id);
				}
			};
	
			settings_element.maxItems = $input.attr('multiple') ? null : 1;
	
			$children = $input.children();
			for (i = 0, n = $children.length; i < n; i++) {
				tagName = $children[i].tagName.toLowerCase();
				if (tagName === 'optgroup') {
					addGroup($children[i]);
				} else if (tagName === 'option') {
					addOption($children[i]);
				}
			}
		};
	
		return this.each(function() {
			if (this.selectize) return;
	
			var instance;
			var $input = $(this);
			var tag_name = this.tagName.toLowerCase();
			var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
			if (!placeholder && !settings.allowEmptyOption) {
				placeholder = $input.children('option[value=""]').text();
			}
	
			var settings_element = {
				'placeholder' : placeholder,
				'options'     : [],
				'optgroups'   : [],
				'items'       : []
			};
	
			if (tag_name === 'select') {
				init_select($input, settings_element);
			} else {
				init_textbox($input, settings_element);
			}
	
			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
		});
	};
	
	$.fn.selectize.defaults = Selectize.defaults;
	$.fn.selectize.support = {
		validity: SUPPORTS_VALIDITY_API
	};
	
	
	Selectize.define('drag_drop', function(options) {
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
		if (this.settings.mode !== 'multi') return;
		var self = this;
	
		self.lock = (function() {
			var original = self.lock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.disable();
				return original.apply(self, arguments);
			};
		})();
	
		self.unlock = (function() {
			var original = self.unlock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.enable();
				return original.apply(self, arguments);
			};
		})();
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(this, arguments);
	
				var $control = self.$control.sortable({
					items: '[data-value]',
					forcePlaceholderSize: true,
					disabled: self.isLocked,
					start: function(e, ui) {
						ui.placeholder.css('width', ui.helper.css('width'));
						$control.css({overflow: 'visible'});
					},
					stop: function() {
						$control.css({overflow: 'hidden'});
						var active = self.$activeItems ? self.$activeItems.slice() : null;
						var values = [];
						$control.children('[data-value]').each(function() {
							values.push($(this).attr('data-value'));
						});
						self.setValue(values);
						self.setActiveItem(active);
					}
				});
			};
		})();
	
	});
	
	Selectize.define('dropdown_header', function(options) {
		var self = this;
	
		options = $.extend({
			title         : 'Untitled',
			headerClass   : 'selectize-dropdown-header',
			titleRowClass : 'selectize-dropdown-header-title',
			labelClass    : 'selectize-dropdown-header-label',
			closeClass    : 'selectize-dropdown-header-close',
	
			html: function(data) {
				return (
					'<div class="' + data.headerClass + '">' +
						'<div class="' + data.titleRowClass + '">' +
							'<span class="' + data.labelClass + '">' + data.title + '</span>' +
							'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
						'</div>' +
					'</div>'
				);
			}
		}, options);
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(self, arguments);
				self.$dropdown_header = $(options.html(options));
				self.$dropdown.prepend(self.$dropdown_header);
			};
		})();
	
	});
	
	Selectize.define('optgroup_columns', function(options) {
		var self = this;
	
		options = $.extend({
			equalizeWidth  : true,
			equalizeHeight : true
		}, options);
	
		this.getAdjacentOption = function($option, direction) {
			var $options = $option.closest('[data-group]').find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, $option, $options, $optgroup;
	
				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
					self.ignoreHover = true;
					$optgroup = this.$activeOption.closest('[data-group]');
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);
	
					if(e.keyCode === KEY_LEFT) {
						$optgroup = $optgroup.prev('[data-group]');
					} else {
						$optgroup = $optgroup.next('[data-group]');
					}
	
					$options = $optgroup.find('[data-selectable]');
					$option  = $options.eq(Math.min($options.length - 1, index));
					if ($option.length) {
						this.setActiveOption($option);
					}
					return;
				}
	
				return original.apply(this, arguments);
			};
		})();
	
		var getScrollbarWidth = function() {
			var div;
			var width = getScrollbarWidth.width;
			var doc = document;
	
			if (typeof width === 'undefined') {
				div = doc.createElement('div');
				div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
				div = div.firstChild;
				doc.body.appendChild(div);
				width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
				doc.body.removeChild(div);
			}
			return width;
		};
	
		var equalizeSizes = function() {
			var i, n, height_max, width, width_last, width_parent, $optgroups;
	
			$optgroups = $('[data-group]', self.$dropdown_content);
			n = $optgroups.length;
			if (!n || !self.$dropdown_content.width()) return;
	
			if (options.equalizeHeight) {
				height_max = 0;
				for (i = 0; i < n; i++) {
					height_max = Math.max(height_max, $optgroups.eq(i).height());
				}
				$optgroups.css({height: height_max});
			}
	
			if (options.equalizeWidth) {
				width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
				width = Math.round(width_parent / n);
				$optgroups.css({width: width});
				if (n > 1) {
					width_last = width_parent - width * (n - 1);
					$optgroups.eq(n - 1).css({width: width_last});
				}
			}
		};
	
		if (options.equalizeHeight || options.equalizeWidth) {
			hook.after(this, 'positionDropdown', equalizeSizes);
			hook.after(this, 'refreshOptions', equalizeSizes);
		}
	
	
	});
	
	Selectize.define('remove_button', function(options) {
		options = $.extend({
				label     : '&times;',
				title     : 'Remove',
				className : 'remove',
				append    : true
			}, options);
	
			var singleClose = function(thisRef, options) {
	
				options.className = 'remove-single';
	
				var self = thisRef;
				var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
				/**
				 * Appends an element as a child (with raw HTML).
				 *
				 * @param {string} html_container
				 * @param {string} html_element
				 * @return {string}
				 */
				var append = function(html_container, html_element) {
					return $('<span>').append(html_container)
						.append(html_element);
				};
	
				thisRef.setup = (function() {
					var original = self.setup;
					return function() {
						// override the item rendering method to add the button to each
						if (options.append) {
							var id = $(self.$input.context).attr('id');
							var selectizer = $('#'+id);
	
							var render_item = self.settings.render.item;
							self.settings.render.item = function(data) {
								return append(render_item.apply(thisRef, arguments), html);
							};
						}
	
						original.apply(thisRef, arguments);
	
						// add event listener
						thisRef.$control.on('click', '.' + options.className, function(e) {
							e.preventDefault();
							if (self.isLocked) return;
	
							self.clear();
						});
	
					};
				})();
			};
	
			var multiClose = function(thisRef, options) {
	
				var self = thisRef;
				var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
				/**
				 * Appends an element as a child (with raw HTML).
				 *
				 * @param {string} html_container
				 * @param {string} html_element
				 * @return {string}
				 */
				var append = function(html_container, html_element) {
					var pos = html_container.search(/(<\/[^>]+>\s*)$/);
					return html_container.substring(0, pos) + html_element + html_container.substring(pos);
				};
	
				thisRef.setup = (function() {
					var original = self.setup;
					return function() {
						// override the item rendering method to add the button to each
						if (options.append) {
							var render_item = self.settings.render.item;
							self.settings.render.item = function(data) {
								return append(render_item.apply(thisRef, arguments), html);
							};
						}
	
						original.apply(thisRef, arguments);
	
						// add event listener
						thisRef.$control.on('click', '.' + options.className, function(e) {
							e.preventDefault();
							if (self.isLocked) return;
	
							var $item = $(e.currentTarget).parent();
							self.setActiveItem($item);
							if (self.deleteSelection()) {
								self.setCaret(self.items.length);
							}
						});
	
					};
				})();
			};
	
			if (this.settings.mode === 'single') {
				singleClose(this, options);
				return;
			} else {
				multiClose(this, options);
			}
	});
	
	
	Selectize.define('restore_on_backspace', function(options) {
		var self = this;
	
		options.text = options.text || function(option) {
			return option[this.settings.labelField];
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, option;
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
					index = this.caretPos - 1;
					if (index >= 0 && index < this.items.length) {
						option = this.options[this.items[index]];
						if (this.deleteSelection(e)) {
							this.setTextboxValue(options.text.apply(this, [option]));
							this.refreshOptions(true);
						}
						e.preventDefault();
						return;
					}
				}
				return original.apply(this, arguments);
			};
		})();
	});
	

	return Selectize;
}));
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t,n){return(o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var t="SweetAlert2:",p=function(e){return Array.prototype.slice.call(e)},q=function(e){console.warn("".concat(t," ").concat(e))},H=function(e){console.error("".concat(t," ").concat(e))},i=[],j=function(e){return"function"==typeof e?e():e},R=function(e){return e&&Promise.resolve(e)===e},e=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),n=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},I=n(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),f=n(["success","warning","info","question","error"]),m={previousBodyPadding:null},g=function(e,t){return e.classList.contains(t)},N=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},h=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},D=function(e,t){h(e,t,!0)},U=function(e,t){h(e,t,!1)},_=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(g(e.childNodes[n],t))return e.childNodes[n]},z=function(e){e.style.opacity="",e.style.display=e.id===I.content?"block":"flex"},W=function(e){e.style.opacity="",e.style.display="none"},K=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},v=function(){return document.body.querySelector("."+I.container)},b=function(e){var t=v();return t?t.querySelector("."+e):null},y=function(){return b(I.popup)},w=function(){var e=y();return p(e.querySelectorAll("."+I.icon))},C=function(){return b(I.title)},k=function(){return b(I.content)},B=function(){return b(I.image)},x=function(){return b(I.progresssteps)},A=function(){return b(I["validation-message"])},S=function(){return b(I.confirm)},P=function(){return b(I.cancel)},L=function(){return b(I.actions)},F=function(){return b(I.footer)},Z=function(){return b(I.close)},Q=function(){var e=p(y().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=p(y().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e){return"-1"!==e.getAttribute("tabindex")});return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t)).filter(function(e){return K(e)})},E=function(){return!T()&&!document.body.classList.contains(I["no-backdrop"])},T=function(){return document.body.classList.contains(I["toast-shown"])},O=function(){return"undefined"==typeof window||"undefined"==typeof document},M='\n <div aria-labelledby="'.concat(I.title,'" aria-describedby="').concat(I.content,'" class="').concat(I.popup,'" tabindex="-1">\n   <div class="').concat(I.header,'">\n     <ul class="').concat(I.progresssteps,'"></ul>\n     <div class="').concat(I.icon," ").concat(f.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(I.icon," ").concat(f.question,'">\n       <span class="').concat(I["icon-text"],'">?</span>\n      </div>\n     <div class="').concat(I.icon," ").concat(f.warning,'">\n       <span class="').concat(I["icon-text"],'">!</span>\n      </div>\n     <div class="').concat(I.icon," ").concat(f.info,'">\n       <span class="').concat(I["icon-text"],'">i</span>\n      </div>\n     <div class="').concat(I.icon," ").concat(f.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(I.image,'" />\n     <h2 class="').concat(I.title,'" id="').concat(I.title,'"></h2>\n     <button type="button" class="').concat(I.close,'">×</button>\n   </div>\n   <div class="').concat(I.content,'">\n     <div id="').concat(I.content,'"></div>\n     <input class="').concat(I.input,'" />\n     <input type="file" class="').concat(I.file,'" />\n     <div class="').concat(I.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(I.select,'"></select>\n     <div class="').concat(I.radio,'"></div>\n     <label for="').concat(I.checkbox,'" class="').concat(I.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(I.label,'"></span>\n     </label>\n     <textarea class="').concat(I.textarea,'"></textarea>\n     <div class="').concat(I["validation-message"],'" id="').concat(I["validation-message"],'"></div>\n   </div>\n   <div class="').concat(I.actions,'">\n     <button type="button" class="').concat(I.confirm,'">OK</button>\n     <button type="button" class="').concat(I.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(I.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Y=function(e){var t=v();if(t&&(t.parentNode.removeChild(t),U([document.documentElement,document.body],[I["no-backdrop"],I["toast-shown"],I["has-column"]])),!O()){var n=document.createElement("div");n.className=I.container,n.innerHTML=M;var o="string"==typeof e.target?document.querySelector(e.target):e.target;o.appendChild(n);var i,r=y(),a=k(),s=_(a,I.input),c=_(a,I.file),u=a.querySelector(".".concat(I.range," input")),l=a.querySelector(".".concat(I.range," output")),d=_(a,I.select),p=a.querySelector(".".concat(I.checkbox," input")),f=_(a,I.textarea);r.setAttribute("role",e.toast?"alert":"dialog"),r.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||r.setAttribute("aria-modal","true"),"rtl"===window.getComputedStyle(o).direction&&D(v(),I.rtl);var m=function(e){Pe.isVisible()&&i!==e.target.value&&Pe.resetValidationMessage(),i=e.target.value};return s.oninput=m,c.onchange=m,d.onchange=m,p.onchange=m,f.oninput=m,u.oninput=function(e){m(e),l.value=u.value},u.onchange=function(e){m(e),u.nextSibling.value=u.value},r}H("SweetAlert2 requires document to initialize")},$=function(e,t){if(!e)return W(t);if(e instanceof HTMLElement)t.appendChild(e);else if("object"===V(e))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);z(t)},J=function(){if(O())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),X=function(e){var t=L(),n=S(),o=P();if(e.showConfirmButton||e.showCancelButton?z(t):W(t),e.showCancelButton?o.style.display="inline-block":W(o),e.showConfirmButton?n.style.removeProperty("display"):W(n),n.innerHTML=e.confirmButtonText,o.innerHTML=e.cancelButtonText,n.setAttribute("aria-label",e.confirmButtonAriaLabel),o.setAttribute("aria-label",e.cancelButtonAriaLabel),n.className=I.confirm,D(n,e.confirmButtonClass),o.className=I.cancel,D(o,e.cancelButtonClass),e.buttonsStyling){D([n,o],I.styled),e.confirmButtonColor&&(n.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(o.style.backgroundColor=e.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else U([n,o],I.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""},G=function(e){var t=k().querySelector("#"+I.content);e.html?$(e.html,t):e.text?(t.textContent=e.text,z(t)):W(t)},ee=function(e){for(var t=w(),n=0;n<t.length;n++)W(t[n]);if(e.type)if(-1!==Object.keys(f).indexOf(e.type)){var o=Pe.getPopup().querySelector(".".concat(I.icon,".").concat(f[e.type]));z(o),e.animation&&D(o,"swal2-animate-".concat(e.type,"-icon"))}else H('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))},te=function(e){var t=B();e.imageUrl?(t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),z(t),e.imageWidth?t.setAttribute("width",e.imageWidth):t.removeAttribute("width"),e.imageHeight?t.setAttribute("height",e.imageHeight):t.removeAttribute("height"),t.className=I.image,e.imageClass&&D(t,e.imageClass)):W(t)},ne=function(i){var r=x(),a=parseInt(null===i.currentProgressStep?Pe.getQueueStep():i.currentProgressStep,10);i.progressSteps&&i.progressSteps.length?(z(r),r.innerHTML="",a>=i.progressSteps.length&&q("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(D(n,I.progresscircle),n.innerHTML=e,t===a&&D(n,I.activeprogressstep),r.appendChild(n),t!==i.progressSteps.length-1){var o=document.createElement("li");D(o,I.progressline),i.progressStepsDistance&&(o.style.width=i.progressStepsDistance),r.appendChild(o)}})):W(r)},oe=function(e){var t=C();e.titleText?t.innerText=e.titleText:e.title&&("string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),$(e.title,t))};var ie=[],re=function(){var e=y();e||Pe(""),e=y();var t=L(),n=S(),o=P();z(t),z(n),D([e,t],I.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},ae={},se={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null},ce=[],ue=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],le=function(e){return se.hasOwnProperty(e)},de=function(e){return-1!==ce.indexOf(e)},pe=Object.freeze({isValidParameter:le,isUpdatableParameter:function(e){return-1!==["title","titleText","text","html","type","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","confirmButtonClass","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","cancelButtonClass","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeigth","imageAlt","imageClass","progressSteps","currentProgressStep"].indexOf(e)},isDeprecatedParameter:de,argsToParams:function(n){var o={};switch(V(n[0])){case"object":s(o,n[0]);break;default:["title","html","type"].forEach(function(e,t){switch(V(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:H("Unexpected type of ".concat(e,'! Expected "string", got ').concat(V(n[t])))}})}return o},isVisible:function(){return!!y()},clickConfirm:function(){return S().click()},clickCancel:function(){return P().click()},getContainer:v,getPopup:y,getTitle:C,getContent:k,getImage:B,getIcons:w,getCloseButton:Z,getActions:L,getConfirmButton:S,getCancelButton:P,getFooter:F,getFocusableElements:Q,getValidationMessage:A,isLoading:function(){return y().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o(this,t)},mixin:function(i){return function(e){function t(){return a(this,t),l(this,c(t).apply(this,arguments))}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),r((n=t).prototype,[{key:"_main",value:function(e){return d(c(t.prototype),"_main",this).call(this,s({},i,e))}}]),o&&r(n,o),t}(this)},queue:function(e){var r=this;ie=e;var a=function(){ie=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(i){!function t(n,o){n<ie.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(ie[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),i({dismiss:e.dismiss}))})):(a(),i({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<ie.length?ie.splice(t,0,e):ie.push(e)},deleteQueueStep:function(e){void 0!==ie[e]&&ie.splice(e,1)},showLoading:re,enableLoading:re,getTimerLeft:function(){return ae.timeout&&ae.timeout.getTimerLeft()},stopTimer:function(){return ae.timeout&&ae.timeout.stop()},resumeTimer:function(){return ae.timeout&&ae.timeout.start()},toggleTimer:function(){var e=ae.timeout;return e&&(e.running?e.stop():e.start())},increaseTimer:function(e){return ae.timeout&&ae.timeout.increase(e)},isTimerRunning:function(){return ae.timeout&&ae.timeout.isRunning()}}),fe={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};function me(){var e=fe.innerParams.get(this),t=fe.domCache.get(this);e.showConfirmButton||(W(t.confirmButton),e.showCancelButton||W(t.actions)),U([t.popup,t.actions],I.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}var ge=function(){null===m.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(m.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=m.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},he=function(){return!!window.MSInputMethodContext&&!!document.documentMode},ve=function(){var e=v(),t=y();e.style.removeProperty("align-items"),t.offsetTop<0&&(e.style.alignItems="flex-start")},be={swalPromiseResolve:new WeakMap};function ye(e){var t=v(),n=y(),o=fe.innerParams.get(this),i=be.swalPromiseResolve.get(this),r=o.onClose,a=o.onAfterClose;if(n){null!==r&&"function"==typeof r&&r(n),U(n,I.show),D(n,I.hide);var s=function(){T()?we(a):(new Promise(function(e){var t=window.scrollX,n=window.scrollY;ae.restoreFocusTimeout=setTimeout(function(){ae.previousActiveElement&&ae.previousActiveElement.focus?(ae.previousActiveElement.focus(),ae.previousActiveElement=null):document.body&&document.body.focus(),e()},100),void 0!==t&&void 0!==n&&window.scrollTo(t,n)}).then(function(){return we(a)}),ae.keydownTarget.removeEventListener("keydown",ae.keydownHandler,{capture:ae.keydownListenerCapture}),ae.keydownHandlerAdded=!1),t.parentNode&&t.parentNode.removeChild(t),U([document.documentElement,document.body],[I.shown,I["height-auto"],I["no-backdrop"],I["toast-shown"],I["toast-column"]]),E()&&(null!==m.previousBodyPadding&&(document.body.style.paddingRight=m.previousBodyPadding,m.previousBodyPadding=null),function(){if(g(document.body,I.iosfix)){var e=parseInt(document.body.style.top,10);U(document.body,I.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}(),"undefined"!=typeof window&&he()&&window.removeEventListener("resize",ve),p(document.body.children).forEach(function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))};J&&!g(n,I.noanimation)?n.addEventListener(J,function e(){n.removeEventListener(J,e),g(n,I.hide)&&s()}):s(),i(e||{})}}var we=function(e){null!==e&&"function"==typeof e&&setTimeout(function(){e()})};var Ce=function e(t,n){a(this,e);var o,i,r=n;this.running=!1,this.start=function(){return this.running||(this.running=!0,i=new Date,o=setTimeout(t,r)),r},this.stop=function(){return this.running&&(this.running=!1,clearTimeout(o),r-=new Date-i),r},this.increase=function(e){var t=this.running;return t&&this.stop(),r+=e,t&&this.start(),r},this.getTimerLeft=function(){return this.running&&(this.stop(),this.start()),r},this.isRunning=function(){return this.running},this.start()},ke={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")}};var Be=function(e){var t=v(),n=y();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(D(n,I.show),D(t,I.fade),U(n,I.hide)):U(n,I.fade),z(n),t.style.overflowY="hidden",J&&!g(n,I.noanimation)?n.addEventListener(J,function e(){n.removeEventListener(J,e),t.style.overflowY="auto"}):t.style.overflowY="auto",D([document.documentElement,document.body,t],I.shown),e.heightAuto&&e.backdrop&&!e.toast&&D([document.documentElement,document.body],I["height-auto"]),E()&&(ge(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!g(document.body,I.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",D(document.body,I.iosfix)}}(),"undefined"!=typeof window&&he()&&(ve(),window.addEventListener("resize",ve)),p(document.body.children).forEach(function(e){e===v()||function(e,t){if("function"==typeof e.contains)return e.contains(t)}(e,v())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}),setTimeout(function(){t.scrollTop=0})),T()||ae.previousActiveElement||(ae.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var xe,Ae=Object.freeze({hideLoading:me,disableLoading:me,getInput:function(e){var t=fe.innerParams.get(this),n=fe.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return _(n.content,I[e]);case"checkbox":return n.popup.querySelector(".".concat(I.checkbox," input"));case"radio":return n.popup.querySelector(".".concat(I.radio," input:checked"))||n.popup.querySelector(".".concat(I.radio," input:first-child"));case"range":return n.popup.querySelector(".".concat(I.range," input"));default:return _(n.content,I.input)}},close:ye,closePopup:ye,closeModal:ye,closeToast:ye,enableButtons:function(){var e=fe.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=fe.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){fe.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){fe.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationMessage:function(e){var t=fe.domCache.get(this);t.validationMessage.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),t.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),z(t.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",I["validation-message"]),N(o),D(o,I.inputerror))},resetValidationMessage:function(){var e=fe.domCache.get(this);e.validationMessage&&W(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),U(t,I.inputerror))},getProgressSteps:function(){return fe.innerParams.get(this).progressSteps},setProgressSteps:function(e){var t=s({},fe.innerParams.get(this),{progressSteps:e});fe.innerParams.set(this,t),ne(t)},showProgressSteps:function(){var e=fe.domCache.get(this);z(e.progressSteps)},hideProgressSteps:function(){var e=fe.domCache.get(this);W(e.progressSteps)},_main:function(e){var E=this;!function(e){for(var t in e)le(t)||q('Unknown parameter "'.concat(t,'"')),e.toast&&-1!==ue.indexOf(t)&&q('The parameter "'.concat(t,'" is incompatible with toasts')),de(t)&&(n='The parameter "'.concat(t,'" is deprecated and will be removed in the next major release.'),-1===i.indexOf(n)&&(i.push(n),q(n)));var n}(e);var T=s({},se,e);!function(t){var e;t.inputValidator||Object.keys(ke).forEach(function(e){t.input===e&&(t.inputValidator=ke[e])}),(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(q('Target parameter is not valid, defaulting to "body"'),t.target="body"),"function"==typeof t.animation&&(t.animation=t.animation.call());var n=y(),o="string"==typeof t.target?document.querySelector(t.target):t.target;e=n&&o&&n.parentNode!==o.parentNode?Y(t):n||Y(t),t.width&&(e.style.width="number"==typeof t.width?t.width+"px":t.width),t.padding&&(e.style.padding="number"==typeof t.padding?t.padding+"px":t.padding),t.background&&(e.style.background=t.background);for(var i=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<r.length;a++)r[a].style.backgroundColor=i;var s=v(),c=Z(),u=F();if(oe(t),G(t),"string"==typeof t.backdrop?v().style.background=t.backdrop:t.backdrop||D([document.documentElement,document.body],I["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&q('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in I?D(s,I[t.position]):(q('The "position" parameter is not valid, defaulting to "center"'),D(s,I.center)),t.grow&&"string"==typeof t.grow){var l="grow-"+t.grow;l in I&&D(s,I[l])}t.showCloseButton?(c.setAttribute("aria-label",t.closeButtonAriaLabel),z(c)):W(c),e.className=I.popup,t.toast?(D([document.documentElement,document.body],I["toast-shown"]),D(e,I.toast)):D(e,I.modal),t.customClass&&D(e,t.customClass),t.customContainerClass&&D(s,t.customContainerClass),ne(t),ee(t),te(t),X(t),$(t.footer,u),!0===t.animation?U(e,I.noanimation):D(e,I.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&q("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(T),Object.freeze(T),fe.innerParams.set(this,T),ae.timeout&&(ae.timeout.stop(),delete ae.timeout),clearTimeout(ae.restoreFocusTimeout);var O={popup:y(),container:v(),content:k(),actions:L(),confirmButton:S(),cancelButton:P(),closeButton:Z(),validationMessage:A(),progressSteps:x()};fe.domCache.set(this,O);var M=this.constructor;return new Promise(function(e){var n=function(e){E.closePopup({value:e})},s=function(e){E.closePopup({dismiss:e})};be.swalPromiseResolve.set(E,e),T.timer&&(ae.timeout=new Ce(function(){s("timer"),delete ae.timeout},T.timer)),T.input&&setTimeout(function(){var e=E.getInput();e&&N(e)},0);for(var c=function(t){T.showLoaderOnConfirm&&M.showLoading(),T.preConfirm?(E.resetValidationMessage(),Promise.resolve().then(function(){return T.preConfirm(t,T.validationMessage)}).then(function(e){K(O.validationMessage)||!1===e?E.hideLoading():n(e||t)})):n(t)},t=function(e){var t=e.target,n=O.confirmButton,o=O.cancelButton,i=n&&(n===t||n.contains(t)),r=o&&(o===t||o.contains(t));switch(e.type){case"click":if(i&&M.isVisible())if(E.disableButtons(),T.input){var a=function(){var e=E.getInput();if(!e)return null;switch(T.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return T.inputAutoTrim?e.value.trim():e.value}}();T.inputValidator?(E.disableInput(),Promise.resolve().then(function(){return T.inputValidator(a,T.validationMessage)}).then(function(e){E.enableButtons(),E.enableInput(),e?E.showValidationMessage(e):c(a)})):E.getInput().checkValidity()?c(a):(E.enableButtons(),E.showValidationMessage(T.validationMessage))}else c(!0);else r&&M.isVisible()&&(E.disableButtons(),s(M.DismissReason.cancel))}},o=O.popup.querySelectorAll("button"),i=0;i<o.length;i++)o[i].onclick=t,o[i].onmouseover=t,o[i].onmouseout=t,o[i].onmousedown=t;if(O.closeButton.onclick=function(){s(M.DismissReason.close)},T.toast)O.popup.onclick=function(){T.showConfirmButton||T.showCancelButton||T.showCloseButton||T.input||s(M.DismissReason.close)};else{var r=!1;O.popup.onmousedown=function(){O.container.onmouseup=function(e){O.container.onmouseup=void 0,e.target===O.container&&(r=!0)}},O.container.onmousedown=function(){O.popup.onmouseup=function(e){O.popup.onmouseup=void 0,(e.target===O.popup||O.popup.contains(e.target))&&(r=!0)}},O.container.onclick=function(e){r?r=!1:e.target===O.container&&j(T.allowOutsideClick)&&s(M.DismissReason.backdrop)}}T.reverseButtons?O.confirmButton.parentNode.insertBefore(O.cancelButton,O.confirmButton):O.confirmButton.parentNode.insertBefore(O.confirmButton,O.cancelButton);var a=function(e,t){for(var n=Q(T.focusCancel),o=0;o<n.length;o++)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),n[e].focus();O.popup.focus()};ae.keydownHandlerAdded&&(ae.keydownTarget.removeEventListener("keydown",ae.keydownHandler,{capture:ae.keydownListenerCapture}),ae.keydownHandlerAdded=!1),T.toast||(ae.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target,o=Q(t.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}e.shiftKey?a(i,-1):a(i,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===O.confirmButton&&K(O.cancelButton)?O.cancelButton.focus():document.activeElement===O.cancelButton&&K(O.confirmButton)&&O.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==j(t.allowEscapeKey)||(e.preventDefault(),s(M.DismissReason.esc));else if(e.target&&E.getInput()&&e.target.outerHTML===E.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;M.clickConfirm(),e.preventDefault()}}(e,T)},ae.keydownTarget=T.keydownListenerCapture?window:O.popup,ae.keydownListenerCapture=T.keydownListenerCapture,ae.keydownTarget.addEventListener("keydown",ae.keydownHandler,{capture:ae.keydownListenerCapture}),ae.keydownHandlerAdded=!0),E.enableButtons(),E.hideLoading(),E.resetValidationMessage(),T.toast&&(T.input||T.footer||T.showCloseButton)?D(document.body,I["toast-column"]):U(document.body,I["toast-column"]);for(var u,l,d=["input","file","range","select","radio","checkbox","textarea"],p=function(e){e.placeholder&&!T.inputPlaceholder||(e.placeholder=T.inputPlaceholder)},f=0;f<d.length;f++){var m=I[d[f]],g=_(O.content,m);if(u=E.getInput(d[f])){for(var h in u.attributes)if(u.attributes.hasOwnProperty(h)){var v=u.attributes[h].name;"type"!==v&&"value"!==v&&u.removeAttribute(v)}for(var b in T.inputAttributes)"range"===d[f]&&"placeholder"===b||u.setAttribute(b,T.inputAttributes[b])}g.className=m,T.inputClass&&D(g,T.inputClass),W(g)}switch(T.input){case"text":case"email":case"password":case"number":case"tel":case"url":u=_(O.content,I.input),"string"==typeof T.inputValue||"number"==typeof T.inputValue?u.value=T.inputValue:R(T.inputValue)||q('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(V(T.inputValue),'"')),p(u),u.type=T.input,z(u);break;case"file":p(u=_(O.content,I.file)),u.type=T.input,z(u);break;case"range":var y=_(O.content,I.range),w=y.querySelector("input"),C=y.querySelector("output");w.value=T.inputValue,w.type=T.input,C.value=T.inputValue,z(y);break;case"select":var k=_(O.content,I.select);if(k.innerHTML="",T.inputPlaceholder){var B=document.createElement("option");B.innerHTML=T.inputPlaceholder,B.value="",B.disabled=!0,B.selected=!0,k.appendChild(B)}l=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("option");o.value=t,o.innerHTML=n,T.inputValue.toString()===t.toString()&&(o.selected=!0),k.appendChild(o)}),z(k),k.focus()};break;case"radio":var x=_(O.content,I.radio);x.innerHTML="",l=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=I.radio,o.value=t,T.inputValue.toString()===t.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=I.label,i.appendChild(o),i.appendChild(r),x.appendChild(i)}),z(x);var t=x.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var A=_(O.content,I.checkbox),S=E.getInput("checkbox");S.type="checkbox",S.value=1,S.id=I.checkbox,S.checked=Boolean(T.inputValue),A.querySelector("span").innerHTML=T.inputPlaceholder,z(A);break;case"textarea":var P=_(O.content,I.textarea);P.value=T.inputValue,p(P),z(P);break;case null:break;default:H('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(T.input,'"'))}if("select"===T.input||"radio"===T.input){var L=function(e){return l((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};R(T.inputOptions)?(M.showLoading(),T.inputOptions.then(function(e){E.hideLoading(),L(e)})):"object"===V(T.inputOptions)?L(T.inputOptions):H("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(V(T.inputOptions)))}else-1!==["text","email","number","tel","textarea"].indexOf(T.input)&&R(T.inputValue)&&(M.showLoading(),W(u),T.inputValue.then(function(e){u.value="number"===T.input?parseFloat(e)||0:e+"",z(u),u.focus(),E.hideLoading()}).catch(function(e){H("Error in inputValue promise: "+e),u.value="",z(u),u.focus(),E.hideLoading()}));Be(T),T.toast||(j(T.allowEnterKey)?T.focusCancel&&K(O.cancelButton)?O.cancelButton.focus():T.focusConfirm&&K(O.confirmButton)?O.confirmButton.focus():a(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),O.container.scrollTop=0})},update:function(t){var n={};Object.keys(t).forEach(function(e){Pe.isUpdatableParameter(e)?n[e]=t[e]:q('Invalid parameter to update: "'.concat(e,'". Updatable params are listed here: TODO (@limonte) add link'))});var e=s({},fe.innerParams.get(this),n);X(e),G(e),ee(e),te(e),ne(e),oe(e),fe.innerParams.set(this,e)}});function Se(){if("undefined"!=typeof window){"undefined"==typeof Promise&&H("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),xe=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var i=this._main(this.params);fe.promise.set(this,i)}}Se.prototype.then=function(e){return fe.promise.get(this).then(e)},Se.prototype.finally=function(e){return fe.promise.get(this).finally(e)},s(Se.prototype,Ae),s(Se,pe),Object.keys(Ae).forEach(function(t){Se[t]=function(){var e;if(xe)return(e=xe)[t].apply(e,arguments)}}),Se.DismissReason=e;var Pe=Se;return Pe.default=Pe}),"undefined"!=typeof window&&window.Sweetalert2&&(window.Sweetalert2.version="8.0.1",window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs/dt-1.10.18/af-2.3.2/r-2.2.2/sc-1.5.0/sl-1.2.6
 *
 * Included libraries:
 *   DataTables 1.10.18, AutoFill 2.3.2, Responsive 2.2.2, Scroller 1.5.0, Select 1.2.6
 */

/*!
 DataTables 1.10.18
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Z(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Z(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Z(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Ca(a){var b=n.defaults.oLanguage,c=b.sDecimal;c&&Da(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&(d&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(d&&"Loading..."===b.sLoadingRecords)&&F(a,
a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Da(a)}}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(n.models.oSearch,a[b])}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function gb(a){if(!n.__browser){var b={};n.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,
overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,n.__browser);a.oScroll.iBarWidth=n.__browser.barWidth}
function hb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ea(a,b){var c=n.defaults.column,d=a.aoColumns.length,c=h.extend({},n.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},n.models.oSearch,c[d]);ka(a,d,h(b).data())}function ka(a,b,c){var b=a.aoColumns[b],
d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),J(n.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=S(g),i=b.mRender?
S(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return N(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,
b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function $(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Fa(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&la(a);r(a,null,"column-sizing",[a])}function aa(a,b){var c=ma(a,"bVisible");return"number"===
typeof c[b]?c[b]:null}function ba(a,b){var c=ma(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function V(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function ma(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ga(a){var b=a.aoColumns,c=a.aoData,d=n.ext.type.detect,e,f,g,j,i,h,l,q,t;e=0;for(f=b.length;e<f;e++)if(l=b[e],t=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<
j;g++){i=0;for(h=c.length;i<h;i++){t[i]===k&&(t[i]=B(a,i,e,"type"));q=d[g](t[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function ib(a,b,c,d){var e,f,g,j,i,m,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){m=b[e];var q=m.targets!==k?m.targets:m.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ea(a);d(q[f],m)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],m);else if("string"===
typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,m)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function O(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},n.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ha(a,e,c,d);return e}function na(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,
e){c=Ia(a,e);return O(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function jb(a,
b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function Ja(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function S(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=S(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||
-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=Ja(f);for(var i=0,m=j.length;i<m;i++){f=j[i].match(ca);g=j[i].match(W);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(m=a.length;i<m;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(W,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}
function N(a){if(h.isPlainObject(a))return N(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=Ja(e),f;f=e[e.length-1];for(var g,j,i=0,m=e.length-1;i<m;i++){g=e[i].match(ca);j=e[i].match(W);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(m=d.length;j<m;j++)f={},b(f,d[j],g),
a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(W,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(W))a[f.replace(W,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ka(a){return D(a.aoData,"_aData")}function oa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function pa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,
1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ia(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;La(a,e)}}function Ia(a,b,c,d){var e=[],f=b.firstChild,g,
j,i=0,m,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],t=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),N(a)(d,b.getAttribute(c)))}},G=function(a){if(c===k||c===i)j=l[i],m=h.trim(a.innerHTML),j&&j._bAttrSrc?(N(j.mData._)(d,m),t(j.mData.sort,a),t(j.mData.type,a),t(j.mData.filter,a)):q?(j._setter||(j._setter=N(j.mData)),j._setter(d,m)):d[i]=m;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)G(f),e.push(f);f=f.nextSibling}else{e=b.anCells;
f=0;for(g=e.length;f<g;f++)G(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&N(a.rowId)(d,b);return{data:d,cells:e}}function Ha(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,m,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;La(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){m=a.aoColumns[l];i=c?d[l]:H.createElement(m.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||m.mRender||m.mData!==l)&&(!h.isPlainObject(m.mData)||m.mData._!==l+".display"))i.innerHTML=
B(a,b,l,"display");m.sClass&&(i.className+=" "+m.sClass);m.bVisible&&!c?j.appendChild(i):!m.bVisible&&c&&i.parentNode.removeChild(i);m.fnCreatedCell&&m.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}r(a,"aoRowCreatedCallback",null,[j,f,b,g])}e.nTr.setAttribute("role","row")}function La(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?qa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function kb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,m=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Ma(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Na(a,"header")(a,d,
f,m);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,m;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=
0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(m=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+m]!==k&&g[d][f].cell==g[d][f+m].cell;){for(c=0;c<i;c++)j[d+c][f+m]=1;m++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",m)}}}}function P(a){var b=r(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=
d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,m=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!lb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:m;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ha(a,l);var t=q.nTr;if(0!==e){var G=d[c%e];q._sRowStripe!=G&&(h(t).removeClass(q._sRowStripe).addClass(G),
q._sRowStripe=G)}r(a,"aoRowCallback",null,[t,q._aData,c,j,l]);b.push(t);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:V(a),"class":a.oClasses.sRowEmpty}).html(c))[0];r(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ka(a),g,m,i]);r(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ka(a),g,m,i]);d=h(a.nTBody);d.children().detach();
d.append(h(b));r(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&mb(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;P(a);a._drawHold=!1}function nb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=
a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,m,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];m=f[k+1];if("'"==m||'"'==m){l="";for(q=2;f[k+q]!=m;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(m=l.split("."),i.id=m[0].substr(1,m[0].length-1),i.className=m[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=ob(a);else if("f"==j&&
d.bFilter)g=pb(a);else if("r"==j&&d.bProcessing)g=qb(a);else if("t"==j)g=rb(a);else if("i"==j&&d.bInfo)g=sb(a);else if("p"==j&&d.bPaginate)g=tb(a);else if(0!==n.ext.feature.length){i=n.ext.feature;q=0;for(m=i.length;q<m;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,m,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<
i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;m=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][m+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ra(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||
!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function sa(a,b,c){r(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){r(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var m="function"===typeof f?f(b,a):f,b="function"===typeof f&&m?m:h.extend(!0,b,m);delete g.data}m={data:b,success:function(b){var c=
b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=r(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;r(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(m,{url:g||a.sAjaxSource})):
"function"===typeof g?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(m,g)),g.data=f)}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),sa(a,ub(a),function(b){vb(a,b)}),!1):!0}function ub(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,m,l,k=X(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var t=function(a,b){j.push({name:a,value:b})};t("sEcho",a.iDraw);t("iColumns",c);t("sColumns",D(b,"sName").join(","));t("iDisplayStart",g);t("iDisplayLength",
i);var G={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)m=b[g],l=f[g],i="function"==typeof m.mData?"function":m.mData,G.columns.push({data:i,name:m.sName,searchable:m.bSearchable,orderable:m.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),t("mDataProp_"+g,i),d.bFilter&&(t("sSearch_"+g,l.sSearch),t("bRegex_"+g,l.bRegex),t("bSearchable_"+g,m.bSearchable)),d.bSort&&t("bSortable_"+g,m.bSortable);d.bFilter&&(t("sSearch",e.sSearch),t("bRegex",
e.bRegex));d.bSort&&(h.each(k,function(a,b){G.order.push({column:b.col,dir:b.dir});t("iSortCol_"+a,b.col);t("sSortDir_"+a,b.dir)}),t("iSortingCols",k.length));b=n.ext.legacy.ajax;return null===b?a.sAjaxSource?j:G:b?j:G}function vb(a,b){var c=ta(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}oa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,
10);d=0;for(e=c.length;d<e;d++)O(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;P(a);a._bInitComplete||ua(a,b);a.bAjaxDataGet=!0;C(a,!1)}function ta(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?S(c)(b):b}function pb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",
g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,P(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Oa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",
c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ga(a);if("ssp"!=y(a)){wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,
e[b].bSmart,e[b].bCaseInsensitive);yb(a)}else f(b);a.bFiltered=!0;r(a,null,"search",[a])}function yb(a){for(var b=n.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,m=c.length;i<m;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function xb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Pa(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function wb(a,b,c,d,e,f){var d=Pa(b,
d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==n.ext.search.length&&(c=!0);j=zb(a);if(0>=b.length)a.aiDisplay=g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Pa(a,b,c,d){a=b?a:Qa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',
"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function zb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=n.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(va.innerHTML=i,i=Wb?va.textContent:va.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);
h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Ab(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",
b+"_info"));return d[0]}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Db(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Db(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,
c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Fa(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));r(a,null,"preInit",[a]);T(a);e=
y(a);if("ssp"!=e||g)"ajax"==e?sa(a,[],function(c){var f=ta(a,c);for(b=0;b<f.length;b++)O(a,f[b]);a.iInitDisplayStart=d;T(a);C(a,!1);ua(a,c)},a):(C(a,!1),ua(a))}else setTimeout(function(){ha(a)},200)}function ua(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&$(a);r(a,null,"plugin-init",[a,b]);r(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);r(a,null,"length",[a,c])}function ob(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=
e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ra(a,h(this).val());P(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===
c&&h("select",i).val(d)});return i[0]}function tb(a){var b=a.sPaginationType,c=n.ext.pager[b],d="function"===typeof c,e=function(a){P(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Na(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,
e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(r(a,null,"page",[a]),c&&P(a));return b}function qb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}
function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");r(a,null,"processing",[a,b])}function rb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),m=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",
position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],t=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(t.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=t;a.aoDrawCallback.push({fn:la,sName:"scrolling"});return i[0]}function la(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,
f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,m=j.children("table"),j=a.nScrollBody,l=h(j),q=j.style,t=h(a.nScrollFoot).children("div"),n=t.children("table"),o=h(a.nTHead),p=h(a.nTable),s=p[0],r=s.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,Xb=D(a.aoColumns,"nTh"),Q,L,R,w,Ua=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==
L&&a.scrollBarVis!==k)a.scrollBarVis=L,$(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();u&&(R=u.clone().prependTo(p),Q=u.find("tr"),R=R.find("tr"));w=o.clone().prependTo(p);o=o.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ra(a,w),function(b,c){B=aa(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},R);f=p.outerWidth();if(""===c){r.width="100%";if(U&&(p.find("tbody").height()>j.offsetHeight||
"scroll"==l.css("overflow-y")))r.width=v(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(r.width=v(d),f=p.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Ua.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,Xb)!==-1)a.style.width=Ua[b]},o);h(L).height(0);u&&(I(C,R),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},R),I(function(a,b){a.style.width=y[b]},Q),h(R).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+z[b]+"</div>";a.childNodes[0].style.height=
"0";a.childNodes[0].style.overflow="hidden";a.style.width=Ua[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+A[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=y[b]},R);if(p.outerWidth()<f){Q=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(Q-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else Q="100%";q.width=v(Q);
g.width=v(Q);u&&(a.nScrollFoot.style.width=v(Q));!e&&U&&(q.height=v(s.offsetHeight+b));c=p.outerWidth();m[0].style.width=v(c);i.width=v(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(n[0].style.width=v(c),t[0].style.width=v(c),t[0].style[e]=d?b+"px":"0px");p.children("colgroup").insertBefore(p.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,
f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Fa(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=ma(a,"bVisible"),m=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,t=!1,n,o,p=a.oBrowser,d=p.bScrollOversize;(n=b.style.width)&&-1!==n.indexOf("%")&&(l=n);for(n=0;n<i.length;n++)o=c[i[n]],null!==o.sWidth&&(o.sWidth=Eb(o.sWidthOrig,k),t=!0);if(d||
!t&&!f&&!e&&j==V(a)&&j==m.length)for(n=0;n<j;n++)i=aa(a,n),null!==i&&(c[i].sWidth=v(m.eq(n).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var s=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");m=ra(a,j.find("thead")[0]);for(n=0;n<i.length;n++)o=c[i[n]],m[n].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?v(o.sWidthOrig):
"",o.sWidthOrig&&f&&h(m[n]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(n=0;n<i.length;n++)t=i[n],o=c[t],h(Fb(a,t)).clone(!1).append(o.sContentPadding).appendTo(s);h("[name]",j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):
l&&j.width(l);for(n=e=0;n<i.length;n++)k=h(m[n]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(m[n].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[n]].sWidth=v(k-g);b.style.width=v(e);o.remove()}l&&(b.style.width=v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Oa(function(){$(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Eb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Fb(a,
b){var c=Gb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Gb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(Yb,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function X(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var m=[];f=function(a){a.length&&
!h.isArray(a[0])?m.push(a):h.merge(m,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<m.length;a++){i=m[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",m[a]._idx===k&&(m[a]._idx=h.inArray(m[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:m[a][1],index:m[a]._idx,type:j,formatter:n.ext.type.order[j+"-pre"]})}return d}function mb(a){var b,c,d=[],e=n.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ga(a);h=X(a);b=0;for(c=h.length;b<
c;b++)j=h[b],j.formatter&&g++,Hb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,n=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=n[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,n=f[a]._aSortData,o=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=n[i.col],g=o[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],
c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Ib(a){for(var b,c,d=a.aoColumns,e=X(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Va(a,
b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==
typeof d&&d(a)}function Ma(a,b,c,d){var e=a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,d))})}function wa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=X(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+
(2>e?e+1:3))}a.aLastSort=d}function Hb(a,b){var c=a.aoColumns[b],d=n.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=n.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function xa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),
columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[d])}})};r(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Jb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=r(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&
(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==k&&h.extend(a.oPreviousSearch,Bb(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Bb(g.search))}r(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=
a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function ya(a){var b=n.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=n.ext,b=b.sErrMode||b.errMode,a&&r(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==
typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Xa(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Wa(a,b,c){h(a).on("click.DT",b,function(b){h(a).blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",
function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function r(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Na(a,b){var c=a.renderer,d=n.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===
typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Kb.numbers_length,d=Math.floor(c/2);b<=c?c=Y(0,b):a<=d?(c=Y(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=Y(b-(c-2),b):(c=Y(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function Da(a){h.each({num:function(b){return za(b,a)},"num-fmt":function(b){return za(b,a,Ya)},"html-num":function(b){return za(b,
a,Aa)},"html-num-fmt":function(b){return za(b,a,Aa,Ya)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Lb(a){return function(){var b=[ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.ext.internal[a].apply(this,b)}}var n=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new s(ya(this[x.iApiIndex])):new s(this)};
this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&la(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,
b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():
c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};
this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return ya(this[x.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();
(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in n.ext.internal)e&&(this[e]=Lb(e));this.each(function(){var e={},g=1<d?Xa(e,a,!0):a,j=0,i,e=this.getAttribute("id"),m=!1,l=n.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);fb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var t=n.settings,
j=0;for(i=t.length;j<i;j++){var o=t[j];if(o.nTable==this||o.nTHead&&o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var s=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||s)return o.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){o.oInstance.fnDestroy();break}else{K(o,0,"Cannot reinitialise DataTable",3);return}}if(o.sTableId==this.id){t.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+n.ext._unique++;var p=h.extend(!0,{},n.models.oSettings,{sDestroyWidth:q[0].style.width,
sInstance:e,sTableId:e});p.nTable=this;p.oApi=b.internal;p.oInit=g;t.push(p);p.oInstance=1===b.length?b:q.dataTable();eb(g);Ca(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=Xa(h.extend(!0,{},l),g);F(p.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(p,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod",
"aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);F(p.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(p.oLanguage,g,"fnInfoCallback");
z(p,"aoDrawCallback",g.fnDrawCallback,"user");z(p,"aoServerParams",g.fnServerParams,"user");z(p,"aoStateSaveParams",g.fnStateSaveParams,"user");z(p,"aoStateLoadParams",g.fnStateLoadParams,"user");z(p,"aoStateLoaded",g.fnStateLoaded,"user");z(p,"aoRowCallback",g.fnRowCallback,"user");z(p,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(p,"aoHeaderCallback",g.fnHeaderCallback,"user");z(p,"aoFooterCallback",g.fnFooterCallback,"user");z(p,"aoInitComplete",g.fnInitComplete,"user");z(p,"aoPreDrawCallback",
g.fnPreDrawCallback,"user");p.rowIdFn=S(g.rowId);gb(p);var u=p.oClasses;h.extend(u,n.ext.classes,g.oClasses);q.addClass(u.sTable);p.iInitDisplayStart===k&&(p.iInitDisplayStart=g.iDisplayStart,p._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(p.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),p._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,p._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=p.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Ca(a);
J(l.oLanguage,a);h.extend(true,v,a);ha(p)},error:function(){ha(p)}}),m=!0);null===g.asStripeClasses&&(p.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=p.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),p.asDestroyStripes=e.slice());e=[];t=this.getElementsByTagName("thead");0!==t.length&&(ea(p.aoHeader,t[0]),e=ra(p));if(null===g.aoColumns){t=[];j=0;for(i=e.length;j<i;j++)t.push(null)}else t=
g.aoColumns;j=0;for(i=t.length;j<i;j++)Ea(p,e?e[j]:null);ib(p,g.aoColumnDefs,t,function(a,b){ka(p,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=p.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ka(p,a)}}})}var U=p.oFeatures,
e=function(){if(g.aaSorting===k){var a=p.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=p.aoColumns[j].asSorting[0]}wa(p);U.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=X(p),b={};h.each(a,function(a,c){b[c.src]=c.dir});r(p,null,"order",[p,a,b]);Ib(p)}});z(p,"aoDrawCallback",function(){(p.bSorted||y(p)==="ssp"||U.bDeferRender)&&wa(p)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
p.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));p.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(p.oScroll.sX!==""||p.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){p.nTFoot=b[0];ea(p.aoFooter,p.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)O(p,g.aaData[j]);else(p.bDeferLoading||y(p)=="dom")&&na(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();
p.bInitialised=true;m===false&&ha(p)};g.bStateSave?(U.bStateSave=!0,z(p,"aoDrawCallback",xa,"state_save"),Jb(p,g,e)):e()}});b=null;return this},x,s,o,u,Za={},Mb=/[\r\n]/g,Aa=/<.*?>/g,Zb=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,$b=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Ya=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Nb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
isFinite(a)?b:null},Ob=function(a,b){Za[b]||(Za[b]=RegExp(Qa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Za[b],"."):a},$a=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Ob(a,b));c&&d&&(a=a.replace(Ya,""));return!isNaN(parseFloat(a))&&isFinite(a)},Pb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:$a(a.replace(Aa,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},Y=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Qb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},qa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};n.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}},escapeRegex:function(a){return a.replace($b,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,W=/\(\)$/,Qa=n.util.escapeRegex,va=h("<div>")[0],Wb=va.textContent!==k,Yb=
/<.*?>/g,Oa=n.util.throttle,Rb=[],w=Array.prototype,ac=function(a){var b,c,d=n.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};s=function(a,b){if(!(this instanceof
s))return new s(a,b);var c=[],d=function(a){(a=ac(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=qa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};s.extend(this,this,Rb)};n.Api=s;h.extend(s.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new s(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new s(this.context,b)},flatten:function(){var a=[];return new s(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,j,h,m,l=this.context,
n,o,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(j=l.length;g<j;g++){var r=new s(l[g]);if("table"===b)f=c.call(r,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(r,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[g];"column-rows"===b&&(n=Ba(l[g],u.opts));h=0;for(m=o.length;h<m;h++)f=o[h],f="cell"===b?c.call(r,l[g],f.row,f.column,g,h):c.call(r,l[g],f,g,h,n),f!==k&&e.push(f)}}return e.length||d?(a=new s(l,a?
e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new s(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return hb(this,a,b,0,this.length,
1)},reduceRight:w.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new s(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new s(this.context,qa(this))},unshift:w.unshift});s.extend=function(a,b,c){if(c.length&&b&&(b instanceof s||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
b.apply(a,arguments);s.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,s.extend(a,b[f.name],f.propExt)}};s.register=o=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)s.register(a[c],b);else for(var e=a.split("."),f=Rb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var m=f.length;i<m;i++)if(f[i].name===g){i=
f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};s.registerPlural=u=function(a,b,c){s.register(a,c);s.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof s?a.length?h.isArray(a[0])?new s(a.context,a[0]):a[0]:k:a})};o("tables()",function(a){var b;if(a){b=s;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
d);return c[a]}).toArray();b=new b(a)}else b=this;return b});o("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new s(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
"table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});o("draw()",function(a){return this.iterator("table",function(b){"page"===a?P(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});o("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});o("page.info()",function(){if(0===
this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});o("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Sb=function(a,b,c){if(c){var d=new s(a);
d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();sa(a,[],function(c){oa(a);for(var c=ta(a,c),d=0,e=c.length;d<e;d++)O(a,c[d]);T(a,b);C(a,!1)})}};o("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});o("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});o("ajax.reload()",function(a,b){return this.iterator("table",function(c){Sb(c,!1===b,a)})});o("ajax.url()",function(a){var b=
this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});o("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Sb(c,!1===b,a)})});var ab=function(a,b,c,d,e){var f=[],g,j,i,m,l,n;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(m=b.length;i<m;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
[b[i]];l=0;for(n=j.length;l<n;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(m=a.length;i<m;i++)f=a[i](d,e,f)}return qa(f)},bb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},cb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Ba=function(a,b){var c,
d,e,f=[],g=a.aiDisplay;e=a.aiDisplayMaster;var j=b.search;c=b.order;d=b.page;if("ssp"==y(a))return"removed"===j?[]:Y(0,e.length);if("current"==d){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==c||"applied"==c)if("none"==j)f=e.slice();else if("applied"==j)f=g.slice();else{if("removed"==j){var i={};c=0;for(d=g.length;c<d;c++)i[g[c]]=null;f=h.map(e,function(a){return!i.hasOwnProperty(a)?a:null})}}else if("index"==c||"original"==c){c=0;for(d=a.aoData.length;c<d;c++)"none"==
j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};o("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=b,f;return ab("row",a,function(a){var b=Nb(a),i=c.aoData;if(b!==null&&!e)return[b];f||(f=Ba(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var c=i[b];return a(b,c._aData,c.nTr)?b:null});if(a.nodeName){var b=
a._DT_RowIndex,m=a._DT_CellIndex;if(b!==k)return i[b]&&i[b].nTr===a?[b]:[];if(m)return i[m.row]&&i[m.row].nTr===a?[m.row]:[];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){b=c.aIds[a.replace(/^#/,"")];if(b!==k)return[b.idx]}b=Qb(ja(c.aoData,f,"nTr"));return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});o("rows().nodes()",function(){return this.iterator("row",
function(a,b){return a.aoData[b].nTr||k},1)});o("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",
function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new s(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,m,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(m=
l.length;i<m;i++)l[i]._DT_CellIndex.row=g}pa(b.aiDisplayMaster,c);pa(b.aiDisplay,c);pa(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});o("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(na(b,c)[0]):h.push(O(b,c));return h},
1),c=this.rows(-1);c.pop();h.merge(c,b);return c});o("row()",function(a,b){return cb(this.rows(a,b))});o("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;var c=b[0].aoData[this[0]];c._aData=a;h.isArray(a)&&c.nTr.id&&N(b[0].rowId)(a,c.nTr.id);da(b[0],this[0],"data");return this});o("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});o("row.add()",function(a){a instanceof h&&
a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?na(b,a)[0]:O(b,a)});return this.row(b[0])});var db=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Tb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new s(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=V(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&db(f,c)}))}}};o("row().child()",function(a,b){var c=
this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)db(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=V(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);
c._detailsShow&&c._details.insertAfter(c.nTr)}return this});o(["row().child.show()","row().child().show()"],function(){Tb(this,!0);return this});o(["row().child.hide()","row().child().hide()"],function(){Tb(this,!1);return this});o(["row().child.remove()","row().child().remove()"],function(){db(this);return this});o("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var bc=/^([^:]+):(name|visIdx|visible)$/,Ub=function(a,b,
c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};o("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return ab("column",e,function(a){var b=Nb(a);if(a==="")return Y(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Ba(c,f);return h.map(g,function(b,f){return a(f,Ub(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(bc):
"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var n=h.map(g,function(a,b){return a.bVisible?b:null});return[n[n.length+b]]}return[aa(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},
1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Ub,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},
1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,
i,m,l;if(a!==k&&g.bVisible!==a){if(a){var n=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(m=j.length;i<m;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[n]||null)}else h(D(b.aoData,"anCells",c)).detach();g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);b.aiDisplay.length||h(b.nTBody).find("td[colspan]").attr("colspan",V(b));xa(b)}});a!==k&&(this.iterator("column",function(c,e){r(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",
function(a){return this.iterator("column",function(b,c){return"visible"===a?ba(b,c):c},1)});o("columns.adjust()",function(){return this.iterator("table",function(a){$(a)},1)});o("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return aa(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b)}});o("column()",function(a,b){return cb(this.columns(a,b))});o("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));
h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=bb(c),f=b.aoData,g=Ba(b,e),j=Qb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,m=b.aoColumns.length,n,o,u,s,r,v;return ab("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){n=[];o=0;for(u=g.length;o<u;o++){l=g[o];for(s=0;s<m;s++){r={row:l,column:s};if(c){v=f[l];a(r,B(b,l,s),v.anCells?v.anCells[s]:null)&&n.push(r)}else n.push(r)}}return n}if(h.isPlainObject(a))return a.column!==
k&&a.row!==k&&h.inArray(a.row,g)!==-1?[a]:[];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b),e=this.rows(a),f,g,j,i,m;this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(m=d[b].length;i<m;i++)f.push({row:e[b][g],column:d[b][i]})}},1);var l=this.cells(f,
c);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});o("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",
function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ba(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});o("cell()",function(a,b,c){return cb(this.cells(a,b,c))});o("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],
c[0].row,c[0].column):k;jb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});o("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});o("order.listener()",function(a,b,c){return this.iterator("table",function(d){Ma(d,a,b,c)})});o("order.fixed()",function(a){if(!a){var b=
this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});o(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});o("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,
h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});o("state()",function(){return this.context.length?this.context[0].oSavedState:
null});o("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});o("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});o("state.save()",function(){return this.iterator("table",function(a){xa(a)})});n.versionCheck=n.fnVersionCheck=function(a){for(var b=n.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};n.isDataTable=
n.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof n.Api)return!0;h.each(n.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};n.tables=n.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(n.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new s(c):c};n.camelToHungarian=J;o("$()",function(a,b){var c=
this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){o(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});o("clear()",function(){return this.iterator("table",function(a){oa(a)})});o("settings()",function(){return new s(this.context,this.context)});o("init()",function(){var a=
this.context;return a.length?a[0].oInit:null});o("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});o("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),o;b.bDestroying=!0;r(b,"aoDestroyCallback","destroy",[b]);a||(new s(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");
h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];wa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),
(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o])}));c=h.inArray(b,n.settings);-1!==c&&n.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){o(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});o("i18n()",function(a,b,c){var d=this.context[0],a=S(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:
a._);return a.replace("%d",c)});n.version="1.10.18";n.settings=[];n.models={};n.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};n.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};n.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,
sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};n.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,
bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+
a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},
oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},
n.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Z(n.defaults);n.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
Z(n.defaults.column);n.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],
aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",
iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:
this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};n.ext=x={buttons:{},
classes:{},build:"bs/dt-1.10.18/af-2.3.2/r-2.2.2/sc-1.5.0/sl-1.2.6",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:n.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:n.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});
h.extend(n.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var Kb=n.ext.pager;h.extend(Kb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,n.ext.renderer,{pageButton:{_:function(a,b,c,d,e,
f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,n=0,o=function(b,d){var k,s,u,r,v=function(b){Ta(a,b.data.action,true)};k=0;for(s=d.length;k<s;k++){r=d[k];if(h.isArray(r)){u=h("<"+(r.DT_el||"div")+"/>").appendTo(b);o(u,r)}else{m=null;l="";switch(r){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=
j.sNext;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=r+1;l=e===r?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[r],"data-dt-idx":n,tabindex:a.iTabIndex,id:c===0&&typeof r==="string"?a.sTableId+"_"+r:null}).html(m).appendTo(b);Wa(u,{action:r},v);n++}}}},s;try{s=h(b).find(H.activeElement).data("dt-idx")}catch(u){}o(h(b).empty(),d);s!==k&&h(b).find("[data-dt-idx="+
s+"]").focus()}}});h.extend(n.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!Zb.test(a))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||
"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(n.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Mb," ").replace(Aa,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Mb," "):a}});var za=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Ob(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return M(a)?
"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});Da("");h.extend(!0,n.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:
c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]==
"asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Vb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};n.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Vb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
a)+f+(e||"")}}},text:function(){return{display:Vb}}};h.extend(n.ext.internal,{_fnExternApiFunc:Lb,_fnBuildAjax:sa,_fnAjaxUpdate:lb,_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:ta,_fnAddColumn:Ea,_fnColumnOptions:ka,_fnAdjustColumnSizing:$,_fnVisibleToColumnIndex:aa,_fnColumnIndexToVisible:ba,_fnVisbleColumns:V,_fnGetColumns:ma,_fnColumnTypes:Ga,_fnApplyColumnDefs:ib,_fnHungarianMap:Z,_fnCamelToHungarian:J,_fnLanguageCompat:Ca,_fnBrowserDetect:gb,_fnAddData:O,_fnAddTr:na,_fnNodeToDataIndex:function(a,
b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:jb,_fnSplitObjNotation:Ja,_fnGetObjectDataFn:S,_fnSetObjectDataFn:N,_fnGetDataMaster:Ka,_fnClearTable:oa,_fnDeleteIndex:pa,_fnInvalidate:da,_fnGetRowElements:Ia,_fnCreateTr:Ha,_fnBuildHead:kb,_fnDrawHead:fa,_fnDraw:P,_fnReDraw:T,_fnAddOptionsHtml:nb,_fnDetectHeader:ea,_fnGetUniqueThs:ra,_fnFeatureHtmlFilter:pb,_fnFilterComplete:ga,_fnFilterCustom:yb,
_fnFilterColumn:xb,_fnFilter:wb,_fnFilterCreateSearch:Pa,_fnEscapeRegex:Qa,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,_fnInfoMacros:Db,_fnInitialise:ha,_fnInitComplete:ua,_fnLengthChange:Ra,_fnFeatureHtmlLength:ob,_fnFeatureHtmlPaginate:tb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:la,_fnApplyToChildren:I,_fnCalculateColumnWidths:Fa,_fnThrottle:Oa,_fnConvertToWidth:Eb,_fnGetWidestNode:Fb,_fnGetMaxLenString:Gb,_fnStringToCss:v,
_fnSortFlatten:X,_fnSort:mb,_fnSortAria:Ib,_fnSortListener:Va,_fnSortAttachListener:Ma,_fnSortingClasses:wa,_fnSortData:Hb,_fnSaveState:xa,_fnLoadState:Jb,_fnSettingsFromNode:ya,_fnLog:K,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:z,_fnCallbackFire:r,_fnLengthOverflow:Sa,_fnRenderer:Na,_fnDataSource:y,_fnRowAttributes:La,_fnExtend:Xa,_fnCalculateEnd:function(){}});h.fn.dataTable=n;n.$=h;h.fn.dataTableSettings=n.settings;h.fn.dataTableExt=n.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};
h.each(n,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});


/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});b.extend(f.ext.classes,
{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};
l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",{"class":t.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#",
"aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});


/*!
   Copyright 2010-2018 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 AutoFill 2.3.2
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,h,f){b!=Array.prototype&&b!=Object.prototype&&(b[h]=f.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var b=0;return function(h){return $jscomp.SYMBOL_PREFIX+(h||"")+b++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.iterator;b||(b=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&$jscomp.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.asyncIterator;b||(b=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.arrayIterator=function(b){var h=0;return $jscomp.iteratorPrototype(function(){return h<b.length?{done:!1,value:b[h++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();b={next:b};b[$jscomp.global.Symbol.iterator]=function(){return this};return b};$jscomp.iteratorFromArray=function(b,h){$jscomp.initSymbolIterator();b instanceof String&&(b+="");var f=0,l={next:function(){if(f<b.length){var k=f++;return{value:h(k,b[k]),done:!1}}l.next=function(){return{done:!0,value:void 0}};return l.next()}};l[Symbol.iterator]=function(){return l};return l};
$jscomp.polyfill=function(b,h,f,l){if(h){f=$jscomp.global;b=b.split(".");for(l=0;l<b.length-1;l++){var k=b[l];k in f||(f[k]={});f=f[k]}b=b[b.length-1];l=f[b];h=h(l);h!=l&&null!=h&&$jscomp.defineProperty(f,b,{configurable:!0,writable:!0,value:h})}};$jscomp.polyfill("Array.prototype.keys",function(b){return b?b:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6","es3");
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(h){return b(h,window,document)}):"object"===typeof exports?module.exports=function(h,f){h||(h=window);f&&f.fn.dataTable||(f=require("datatables.net")(h,f).$);return b(f,h,h.document)}:b(jQuery,window,document)})(function(b,h,f,l){var k=b.fn.dataTable,x=0,m=function(a,d){if(!k.versionCheck||!k.versionCheck("1.10.8"))throw"Warning: AutoFill requires DataTables 1.10.8 or greater";this.c=b.extend(!0,{},k.defaults.autoFill,
m.defaults,d);this.s={dt:new k.Api(a),namespace:".autoFill"+x++,scroll:{},scrollInterval:null,handle:{height:0,width:0},enabled:!1};this.dom={handle:b('<div class="dt-autofill-handle"/>'),select:{top:b('<div class="dt-autofill-select top"/>'),right:b('<div class="dt-autofill-select right"/>'),bottom:b('<div class="dt-autofill-select bottom"/>'),left:b('<div class="dt-autofill-select left"/>')},background:b('<div class="dt-autofill-background"/>'),list:b('<div class="dt-autofill-list">'+this.s.dt.i18n("autoFill.info",
"")+"<ul/></div>"),dtScroll:null,offsetParent:null};this._constructor()};b.extend(m.prototype,{enabled:function(){return this.s.enabled},enable:function(a){var d=this;if(!1===a)return this.disable();this.s.enabled=!0;this._focusListener();this.dom.handle.on("mousedown",function(a){d._mousedown(a);return!1});return this},disable:function(){this.s.enabled=!1;this._focusListenerRemove();return this},_constructor:function(){var a=this,d=this.s.dt,c=b("div.dataTables_scrollBody",this.s.dt.table().container());
d.settings()[0].autoFill=this;c.length&&(this.dom.dtScroll=c,"static"===c.css("position")&&c.css("position","relative"));!1!==this.c.enable&&this.enable();d.on("destroy.autoFill",function(){a._focusListenerRemove()})},_attach:function(a){var d=this.s.dt,c=d.cell(a).index(),g=this.dom.handle,e=this.s.handle;c&&-1!==d.columns(this.c.columns).indexes().indexOf(c.column)?(this.dom.offsetParent||(this.dom.offsetParent=b(d.table().node()).offsetParent()),e.height&&e.width||(g.appendTo("body"),e.height=
g.outerHeight(),e.width=g.outerWidth()),d=this._getPosition(a,this.dom.offsetParent),this.dom.attachedTo=a,g.css({top:d.top+a.offsetHeight-e.height,left:d.left+a.offsetWidth-e.width}).appendTo(this.dom.offsetParent)):this._detach()},_actionSelector:function(a){var d=this,c=this.s.dt,g=m.actions,e=[];b.each(g,function(d,b){b.available(c,a)&&e.push(d)});if(1===e.length&&!1===this.c.alwaysAsk){var n=g[e[0]].execute(c,a);this._update(n,a)}else{var f=this.dom.list.children("ul").empty();e.push("cancel");
b.each(e,function(e,n){f.append(b("<li/>").append('<div class="dt-autofill-question">'+g[n].option(c,a)+"<div>").append(b('<div class="dt-autofill-button">').append(b('<button class="'+m.classes.btn+'">'+c.i18n("autoFill.button","&gt;")+"</button>").on("click",function(){var e=g[n].execute(c,a,b(this).closest("li"));d._update(e,a);d.dom.background.remove();d.dom.list.remove()}))))});this.dom.background.appendTo("body");this.dom.list.appendTo("body");this.dom.list.css("margin-top",this.dom.list.outerHeight()/
2*-1)}},_detach:function(){this.dom.attachedTo=null;this.dom.handle.detach()},_drawSelection:function(a,d){var c=this.s.dt;d=this.s.start;var g=b(this.dom.start),e={row:this.c.vertical?c.rows({page:"current"}).nodes().indexOf(a.parentNode):d.row,column:this.c.horizontal?b(a).index():d.column};a=c.column.index("toData",e.column);var n=c.row(":eq("+e.row+")",{page:"current"});n=b(c.cell(n.index(),a).node());if(c.cell(n).any()&&-1!==c.columns(this.c.columns).indexes().indexOf(a)){this.s.end=e;c=d.row<
e.row?g:n;var f=d.row<e.row?n:g;a=d.column<e.column?g:n;g=d.column<e.column?n:g;c=this._getPosition(c).top;a=this._getPosition(a).left;d=this._getPosition(f).top+f.outerHeight()-c;g=this._getPosition(g).left+g.outerWidth()-a;e=this.dom.select;e.top.css({top:c,left:a,width:g});e.left.css({top:c,left:a,height:d});e.bottom.css({top:c+d,left:a,width:g});e.right.css({top:c,left:a+g,height:d})}},_editor:function(a){var d=this.s.dt,c=this.c.editor;if(c){for(var b={},e=[],n=c.fields(),f=0,h=a.length;f<h;f++)for(var k=
0,m=a[f].length;k<m;k++){var q=a[f][k],r=d.settings()[0].aoColumns[q.index.column],t=r.editField;if(t===l){r=r.mData;for(var u=0,p=n.length;u<p;u++){var w=c.field(n[u]);if(w.dataSrc()===r){t=w.name();break}}}if(!t)throw"Could not automatically determine field data. Please see https://datatables.net/tn/11";b[t]||(b[t]={});r=d.row(q.index.row).id();b[t][r]=q.set;e.push(q.index)}c.bubble(e,!1).multiSet(b).submit()}},_emitEvent:function(a,d){this.s.dt.iterator("table",function(c,g){b(c.nTable).triggerHandler(a+
".dt",d)})},_focusListener:function(){var a=this,d=this.s.dt,c=this.s.namespace,g=null!==this.c.focus?this.c.focus:d.init().keys||d.settings()[0].keytable?"focus":"hover";if("focus"===g)d.on("key-focus.autoFill",function(c,d,b){a._attach(b.node())}).on("key-blur.autoFill",function(c,d,b){a._detach()});else if("click"===g)b(d.table().body()).on("click"+c,"td, th",function(c){a._attach(this)}),b(f.body).on("click"+c,function(c){b(c.target).parents().filter(d.table().body()).length||a._detach()});else b(d.table().body()).on("mouseenter"+
c,"td, th",function(c){a._attach(this)}).on("mouseleave"+c,function(c){b(c.relatedTarget).hasClass("dt-autofill-handle")||a._detach()})},_focusListenerRemove:function(){var a=this.s.dt;a.off(".autoFill");b(a.table().body()).off(this.s.namespace);b(f.body).off(this.s.namespace)},_getPosition:function(a,d){a=b(a);var c=0,g=0;d||(d=b(b(this.s.dt.table().node())[0].offsetParent));do{var e=a.position();var f=b(a[0].offsetParent);c+=e.top+f.scrollTop();g+=e.left+f.scrollLeft();c+=1*parseInt(f.css("margin-top"));
c+=1*parseInt(f.css("border-top-width"));if("body"===a.get(0).nodeName.toLowerCase())break;a=f}while(f.get(0)!==d.get(0));return{top:c,left:g}},_mousedown:function(a){var d=this,c=this.s.dt;this.dom.start=this.dom.attachedTo;this.s.start={row:c.rows({page:"current"}).nodes().indexOf(b(this.dom.start).parent()[0]),column:b(this.dom.start).index()};b(f.body).on("mousemove.autoFill",function(a){d._mousemove(a)}).on("mouseup.autoFill",function(a){d._mouseup(a)});var g=this.dom.select;c=b(c.table().node()).offsetParent();
g.top.appendTo(c);g.left.appendTo(c);g.right.appendTo(c);g.bottom.appendTo(c);this._drawSelection(this.dom.start,a);this.dom.handle.css("display","none");a=this.dom.dtScroll;this.s.scroll={windowHeight:b(h).height(),windowWidth:b(h).width(),dtTop:a?a.offset().top:null,dtLeft:a?a.offset().left:null,dtHeight:a?a.outerHeight():null,dtWidth:a?a.outerWidth():null}},_mousemove:function(a){var d=a.target.nodeName.toLowerCase();if("td"===d||"th"===d)this._drawSelection(a.target,a),this._shiftScroll(a)},_mouseup:function(a){b(f.body).off(".autoFill");
var d=this,c=this.s.dt,g=this.dom.select;g.top.remove();g.left.remove();g.right.remove();g.bottom.remove();this.dom.handle.css("display","block");g=this.s.start;var e=this.s.end;if(g.row!==e.row||g.column!==e.column){var h=c.cell(":eq("+g.row+")",g.column+":visible",{page:"current"});if(b("div.DTE",h.node()).length){var k=c.editor();k.on("submitSuccess.dtaf",function(){k.off(".dtaf");setTimeout(function(){d._mouseup(a)},100)}).on("submitComplete.dtaf preSubmitCancelled.dtaf",function(){k.off(".dtaf")});
k.submit()}else{var m=this._range(g.row,e.row);g=this._range(g.column,e.column);e=[];for(var v=c.settings()[0],p=v.aoColumns,q=0;q<m.length;q++)e.push(b.map(g,function(a){var d=c.row(":eq("+m[q]+")",{page:"current"});a=c.cell(d.index(),a+":visible");d=a.data();var b=a.index(),g=p[b.column].editField;g!==l&&(d=v.oApi._fnGetObjectDataFn(g)(c.row(b.row).data()));return{cell:a,data:d,label:a.data(),index:b}}));this._actionSelector(e);clearInterval(this.s.scrollInterval);this.s.scrollInterval=null}}},
_range:function(a,d){var c=[];if(a<=d)for(;a<=d;a++)c.push(a);else for(;a>=d;a--)c.push(a);return c},_shiftScroll:function(a){var d=this,c=this.s.scroll,b=!1,e=a.pageY-f.body.scrollTop,h=a.pageX-f.body.scrollLeft,k,l,m,p;65>e?k=-5:e>c.windowHeight-65&&(k=5);65>h?l=-5:h>c.windowWidth-65&&(l=5);null!==c.dtTop&&a.pageY<c.dtTop+65?m=-5:null!==c.dtTop&&a.pageY>c.dtTop+c.dtHeight-65&&(m=5);null!==c.dtLeft&&a.pageX<c.dtLeft+65?p=-5:null!==c.dtLeft&&a.pageX>c.dtLeft+c.dtWidth-65&&(p=5);k||l||m||p?(c.windowVert=
k,c.windowHoriz=l,c.dtVert=m,c.dtHoriz=p,b=!0):this.s.scrollInterval&&(clearInterval(this.s.scrollInterval),this.s.scrollInterval=null);!this.s.scrollInterval&&b&&(this.s.scrollInterval=setInterval(function(){c.windowVert&&(f.body.scrollTop+=c.windowVert);c.windowHoriz&&(f.body.scrollLeft+=c.windowHoriz);if(c.dtVert||c.dtHoriz){var a=d.dom.dtScroll[0];c.dtVert&&(a.scrollTop+=c.dtVert);c.dtHoriz&&(a.scrollLeft+=c.dtHoriz)}},20))},_update:function(a,d){if(!1!==a){a=this.s.dt;this._emitEvent("preAutoFill",
[a,d]);this._editor(d);if(null!==this.c.update?this.c.update:!this.c.editor){for(var c=0,b=d.length;c<b;c++)for(var e=0,f=d[c].length;e<f;e++){var h=d[c][e];h.cell.data(h.set)}a.draw(!1)}this._emitEvent("autoFill",[a,d])}}});m.actions={increment:{available:function(a,b){a=b[0][0].label;return!isNaN(a-parseFloat(a))},option:function(a,b){return a.i18n("autoFill.increment",'Increment / decrement each cell by: <input type="number" value="1">')},execute:function(a,d,c){a=1*d[0][0].data;c=1*b("input",
c).val();for(var g=0,e=d.length;g<e;g++)for(var f=0,h=d[g].length;f<h;f++)d[g][f].set=a,a+=c}},fill:{available:function(a,b){return!0},option:function(a,b){return a.i18n("autoFill.fill","Fill all cells with <i>"+b[0][0].label+"</i>")},execute:function(a,b,c){a=b[0][0].data;c=0;for(var d=b.length;c<d;c++)for(var e=0,f=b[c].length;e<f;e++)b[c][e].set=a}},fillHorizontal:{available:function(a,b){return 1<b.length&&1<b[0].length},option:function(a,b){return a.i18n("autoFill.fillHorizontal","Fill cells horizontally")},
execute:function(a,b,c){a=0;for(c=b.length;a<c;a++)for(var d=0,e=b[a].length;d<e;d++)b[a][d].set=b[a][0].data}},fillVertical:{available:function(a,b){return 1<b.length&&1<b[0].length},option:function(a,b){return a.i18n("autoFill.fillVertical","Fill cells vertically")},execute:function(a,b,c){a=0;for(c=b.length;a<c;a++)for(var d=0,e=b[a].length;d<e;d++)b[a][d].set=b[0][d].data}},cancel:{available:function(){return!1},option:function(a){return a.i18n("autoFill.cancel","Cancel")},execute:function(){return!1}}};
m.version="2.3.2";m.defaults={alwaysAsk:!1,focus:null,columns:"",enable:!0,update:null,editor:null,vertical:!0,horizontal:!0};m.classes={btn:"btn"};var p=b.fn.dataTable.Api;p.register("autoFill()",function(){return this});p.register("autoFill().enabled()",function(){var a=this.context[0];return a.autoFill?a.autoFill.enabled():!1});p.register("autoFill().enable()",function(a){return this.iterator("table",function(b){b.autoFill&&b.autoFill.enable(a)})});p.register("autoFill().disable()",function(){return this.iterator("table",
function(a){a.autoFill&&a.autoFill.disable()})});b(f).on("preInit.dt.autofill",function(a,d,c){"dt"===a.namespace&&(a=d.oInit.autoFill,c=k.defaults.autoFill,a||c)&&(c=b.extend({},a,c),!1!==a&&new m(d,c))});k.AutoFill=m;return k.AutoFill=m});


/*!
 Bootstrap integration for DataTables' AutoFill
 ©2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs","datatables.net-autofill"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,c){a||(a=window);c&&c.fn.dataTable||(c=require("datatables.net-bs")(a,c).$);c.fn.dataTable.AutoFill||require("datatables.net-autofill")(a,c);return b(c,a,a.document)}:b(jQuery,window,document)})(function(b,a,c,d){b=b.fn.dataTable;b.AutoFill.classes.btn="btn btn-primary";return b});


/*!
 Responsive 2.2.2
 2014-2018 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(l){return d(l,window,document)}):"object"===typeof exports?module.exports=function(l,j){l||(l=window);if(!j||!j.fn.dataTable)j=require("datatables.net")(l,j).$;return d(j,l,l.document)}:d(jQuery,window,document)})(function(d,l,j,q){function t(a,b,c){var e=b+"-"+c;if(n[e])return n[e];for(var d=[],a=a.cell(b,c).node().childNodes,b=0,c=a.length;b<c;b++)d.push(a[b]);return n[e]=d}function r(a,b,d){var e=b+
"-"+d;if(n[e]){for(var a=a.cell(b,d).node(),d=n[e][0].parentNode.childNodes,b=[],f=0,g=d.length;f<g;f++)b.push(d[f]);d=0;for(f=b.length;d<f;d++)a.appendChild(b[d]);n[e]=q}}var o=d.fn.dataTable,i=function(a,b){if(!o.versionCheck||!o.versionCheck("1.10.10"))throw"DataTables Responsive requires DataTables 1.10.10 or newer";this.s={dt:new o.Api(a),columns:[],current:[]};this.s.dt.settings()[0].responsive||(b&&"string"===typeof b.details?b.details={type:b.details}:b&&!1===b.details?b.details={type:!1}:
b&&!0===b.details&&(b.details={type:"inline"}),this.c=d.extend(!0,{},i.defaults,o.defaults.responsive,b),a.responsive=this,this._constructor())};d.extend(i.prototype,{_constructor:function(){var a=this,b=this.s.dt,c=b.settings()[0],e=d(l).width();b.settings()[0]._responsive=this;d(l).on("resize.dtr orientationchange.dtr",o.util.throttle(function(){var b=d(l).width();b!==e&&(a._resize(),e=b)}));c.oApi._fnCallbackReg(c,"aoRowCreatedCallback",function(e){-1!==d.inArray(!1,a.s.current)&&d(">td, >th",
e).each(function(e){e=b.column.index("toData",e);!1===a.s.current[e]&&d(this).css("display","none")})});b.on("destroy.dtr",function(){b.off(".dtr");d(b.table().body()).off(".dtr");d(l).off("resize.dtr orientationchange.dtr");d.each(a.s.current,function(b,e){!1===e&&a._setColumnVis(b,!0)})});this.c.breakpoints.sort(function(a,b){return a.width<b.width?1:a.width>b.width?-1:0});this._classLogic();this._resizeAuto();c=this.c.details;!1!==c.type&&(a._detailsInit(),b.on("column-visibility.dtr",function(){a._timer&&
clearTimeout(a._timer);a._timer=setTimeout(function(){a._timer=null;a._classLogic();a._resizeAuto();a._resize();a._redrawChildren()},100)}),b.on("draw.dtr",function(){a._redrawChildren()}),d(b.table().node()).addClass("dtr-"+c.type));b.on("column-reorder.dtr",function(){a._classLogic();a._resizeAuto();a._resize()});b.on("column-sizing.dtr",function(){a._resizeAuto();a._resize()});b.on("preXhr.dtr",function(){var e=[];b.rows().every(function(){this.child.isShown()&&e.push(this.id(true))});b.one("draw.dtr",
function(){a._resizeAuto();a._resize();b.rows(e).every(function(){a._detailsDisplay(this,false)})})});b.on("init.dtr",function(){a._resizeAuto();a._resize();d.inArray(false,a.s.current)&&b.columns.adjust()});this._resize()},_columnsVisiblity:function(a){var b=this.s.dt,c=this.s.columns,e,f,g=c.map(function(a,b){return{columnIdx:b,priority:a.priority}}).sort(function(a,b){return a.priority!==b.priority?a.priority-b.priority:a.columnIdx-b.columnIdx}),h=d.map(c,function(e,c){return!1===b.column(c).visible()?
"not-visible":e.auto&&null===e.minWidth?!1:!0===e.auto?"-":-1!==d.inArray(a,e.includeIn)}),m=0;e=0;for(f=h.length;e<f;e++)!0===h[e]&&(m+=c[e].minWidth);e=b.settings()[0].oScroll;e=e.sY||e.sX?e.iBarWidth:0;m=b.table().container().offsetWidth-e-m;e=0;for(f=h.length;e<f;e++)c[e].control&&(m-=c[e].minWidth);var s=!1;e=0;for(f=g.length;e<f;e++){var k=g[e].columnIdx;"-"===h[k]&&(!c[k].control&&c[k].minWidth)&&(s||0>m-c[k].minWidth?(s=!0,h[k]=!1):h[k]=!0,m-=c[k].minWidth)}g=!1;e=0;for(f=c.length;e<f;e++)if(!c[e].control&&
!c[e].never&&!1===h[e]){g=!0;break}e=0;for(f=c.length;e<f;e++)c[e].control&&(h[e]=g),"not-visible"===h[e]&&(h[e]=!1);-1===d.inArray(!0,h)&&(h[0]=!0);return h},_classLogic:function(){var a=this,b=this.c.breakpoints,c=this.s.dt,e=c.columns().eq(0).map(function(a){var b=this.column(a),e=b.header().className,a=c.settings()[0].aoColumns[a].responsivePriority;a===q&&(b=d(b.header()).data("priority"),a=b!==q?1*b:1E4);return{className:e,includeIn:[],auto:!1,control:!1,never:e.match(/\bnever\b/)?!0:!1,priority:a}}),
f=function(a,b){var c=e[a].includeIn;-1===d.inArray(b,c)&&c.push(b)},g=function(d,c,g,k){if(g)if("max-"===g){k=a._find(c).width;c=0;for(g=b.length;c<g;c++)b[c].width<=k&&f(d,b[c].name)}else if("min-"===g){k=a._find(c).width;c=0;for(g=b.length;c<g;c++)b[c].width>=k&&f(d,b[c].name)}else{if("not-"===g){c=0;for(g=b.length;c<g;c++)-1===b[c].name.indexOf(k)&&f(d,b[c].name)}}else e[d].includeIn.push(c)};e.each(function(a,e){for(var c=a.className.split(" "),f=!1,i=0,l=c.length;i<l;i++){var j=d.trim(c[i]);
if("all"===j){f=!0;a.includeIn=d.map(b,function(a){return a.name});return}if("none"===j||a.never){f=!0;return}if("control"===j){f=!0;a.control=!0;return}d.each(b,function(a,b){var d=b.name.split("-"),c=j.match(RegExp("(min\\-|max\\-|not\\-)?("+d[0]+")(\\-[_a-zA-Z0-9])?"));c&&(f=!0,c[2]===d[0]&&c[3]==="-"+d[1]?g(e,b.name,c[1],c[2]+c[3]):c[2]===d[0]&&!c[3]&&g(e,b.name,c[1],c[2]))})}f||(a.auto=!0)});this.s.columns=e},_detailsDisplay:function(a,b){var c=this,e=this.s.dt,f=this.c.details;if(f&&!1!==f.type){var g=
f.display(a,b,function(){return f.renderer(e,a[0],c._detailsObj(a[0]))});(!0===g||!1===g)&&d(e.table().node()).triggerHandler("responsive-display.dt",[e,a,g,b])}},_detailsInit:function(){var a=this,b=this.s.dt,c=this.c.details;"inline"===c.type&&(c.target="td:first-child, th:first-child");b.on("draw.dtr",function(){a._tabIndexes()});a._tabIndexes();d(b.table().body()).on("keyup.dtr","td, th",function(a){a.keyCode===13&&d(this).data("dtr-keyboard")&&d(this).click()});var e=c.target;d(b.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",
"string"===typeof e?e:"td, th",function(c){if(d(b.table().node()).hasClass("collapsed")&&d.inArray(d(this).closest("tr").get(0),b.rows().nodes().toArray())!==-1){if(typeof e==="number"){var g=e<0?b.columns().eq(0).length+e:e;if(b.cell(this).index().column!==g)return}g=b.row(d(this).closest("tr"));c.type==="click"?a._detailsDisplay(g,false):c.type==="mousedown"?d(this).css("outline","none"):c.type==="mouseup"&&d(this).blur().css("outline","")}})},_detailsObj:function(a){var b=this,c=this.s.dt;return d.map(this.s.columns,
function(e,d){if(!e.never&&!e.control)return{title:c.settings()[0].aoColumns[d].sTitle,data:c.cell(a,d).render(b.c.orthogonal),hidden:c.column(d).visible()&&!b.s.current[d],columnIndex:d,rowIndex:a}})},_find:function(a){for(var b=this.c.breakpoints,c=0,e=b.length;c<e;c++)if(b[c].name===a)return b[c]},_redrawChildren:function(){var a=this,b=this.s.dt;b.rows({page:"current"}).iterator("row",function(c,e){b.row(e);a._detailsDisplay(b.row(e),!0)})},_resize:function(){var a=this,b=this.s.dt,c=d(l).width(),
e=this.c.breakpoints,f=e[0].name,g=this.s.columns,h,m=this.s.current.slice();for(h=e.length-1;0<=h;h--)if(c<=e[h].width){f=e[h].name;break}var i=this._columnsVisiblity(f);this.s.current=i;e=!1;h=0;for(c=g.length;h<c;h++)if(!1===i[h]&&!g[h].never&&!g[h].control&&!1===!b.column(h).visible()){e=!0;break}d(b.table().node()).toggleClass("collapsed",e);var k=!1,j=0;b.columns().eq(0).each(function(b,c){!0===i[c]&&j++;i[c]!==m[c]&&(k=!0,a._setColumnVis(b,i[c]))});k&&(this._redrawChildren(),d(b.table().node()).trigger("responsive-resize.dt",
[b,this.s.current]),0===b.page.info().recordsDisplay&&d("td",b.table().body()).eq(0).attr("colspan",j))},_resizeAuto:function(){var a=this.s.dt,b=this.s.columns;if(this.c.auto&&-1!==d.inArray(!0,d.map(b,function(a){return a.auto}))){d.isEmptyObject(n)||d.each(n,function(b){b=b.split("-");r(a,1*b[0],1*b[1])});a.table().node();var c=a.table().node().cloneNode(!1),e=d(a.table().header().cloneNode(!1)).appendTo(c),f=d(a.table().body()).clone(!1,!1).empty().appendTo(c),g=a.columns().header().filter(function(b){return a.column(b).visible()}).to$().clone(!1).css("display",
"table-cell").css("min-width",0);d(f).append(d(a.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display","");if(f=a.table().footer()){var f=d(f.cloneNode(!1)).appendTo(c),h=a.columns().footer().filter(function(b){return a.column(b).visible()}).to$().clone(!1).css("display","table-cell");d("<tr/>").append(h).appendTo(f)}d("<tr/>").append(g).appendTo(e);"inline"===this.c.details.type&&d(c).addClass("dtr-inline collapsed");d(c).find("[name]").removeAttr("name");d(c).css("position","relative");
c=d("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(c);c.insertBefore(a.table().node());g.each(function(c){c=a.column.index("fromVisible",c);b[c].minWidth=this.offsetWidth||0});c.remove()}},_setColumnVis:function(a,b){var c=this.s.dt,e=b?"":"none";d(c.column(a).header()).css("display",e);d(c.column(a).footer()).css("display",e);c.column(a).nodes().to$().css("display",e);d.isEmptyObject(n)||c.cells(null,a).indexes().each(function(a){r(c,a.row,a.column)})},_tabIndexes:function(){var a=
this.s.dt,b=a.cells({page:"current"}).nodes().to$(),c=a.settings()[0],e=this.c.details.target;b.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");"number"===typeof e?a.cells(null,e,{page:"current"}).nodes().to$().attr("tabIndex",c.iTabIndex).data("dtr-keyboard",1):("td:first-child, th:first-child"===e&&(e=">td:first-child, >th:first-child"),d(e,a.rows({page:"current"}).nodes()).attr("tabIndex",c.iTabIndex).data("dtr-keyboard",1))}});i.breakpoints=[{name:"desktop",width:Infinity},{name:"tablet-l",
width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];i.display={childRow:function(a,b,c){if(b){if(d(a.node()).hasClass("parent"))return a.child(c(),"child").show(),!0}else{if(a.child.isShown())return a.child(!1),d(a.node()).removeClass("parent"),!1;a.child(c(),"child").show();d(a.node()).addClass("parent");return!0}},childRowImmediate:function(a,b,c){if(!b&&a.child.isShown()||!a.responsive.hasHidden())return a.child(!1),d(a.node()).removeClass("parent"),
!1;a.child(c(),"child").show();d(a.node()).addClass("parent");return!0},modal:function(a){return function(b,c,e){if(c)d("div.dtr-modal-content").empty().append(e());else{var f=function(){g.remove();d(j).off("keypress.dtr")},g=d('<div class="dtr-modal"/>').append(d('<div class="dtr-modal-display"/>').append(d('<div class="dtr-modal-content"/>').append(e())).append(d('<div class="dtr-modal-close">&times;</div>').click(function(){f()}))).append(d('<div class="dtr-modal-background"/>').click(function(){f()})).appendTo("body");
d(j).on("keyup.dtr",function(a){27===a.keyCode&&(a.stopPropagation(),f())})}a&&a.header&&d("div.dtr-modal-content").prepend("<h2>"+a.header(b)+"</h2>")}}};var n={};i.renderer={listHiddenNodes:function(){return function(a,b,c){var e=d('<ul data-dtr-index="'+b+'" class="dtr-details"/>'),f=!1;d.each(c,function(b,c){c.hidden&&(d('<li data-dtr-index="'+c.columnIndex+'" data-dt-row="'+c.rowIndex+'" data-dt-column="'+c.columnIndex+'"><span class="dtr-title">'+c.title+"</span> </li>").append(d('<span class="dtr-data"/>').append(t(a,
c.rowIndex,c.columnIndex))).appendTo(e),f=!0)});return f?e:!1}},listHidden:function(){return function(a,b,c){return(a=d.map(c,function(a){return a.hidden?'<li data-dtr-index="'+a.columnIndex+'" data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><span class="dtr-title">'+a.title+'</span> <span class="dtr-data">'+a.data+"</span></li>":""}).join(""))?d('<ul data-dtr-index="'+b+'" class="dtr-details"/>').append(a):!1}},tableAll:function(a){a=d.extend({tableClass:""},a);return function(b,
c,e){b=d.map(e,function(a){return'<tr data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><td>'+a.title+":</td> <td>"+a.data+"</td></tr>"}).join("");return d('<table class="'+a.tableClass+' dtr-details" width="100%"/>').append(b)}}};i.defaults={breakpoints:i.breakpoints,auto:!0,details:{display:i.display.childRow,renderer:i.renderer.listHidden(),target:0,type:"inline"},orthogonal:"display"};var p=d.fn.dataTable.Api;p.register("responsive()",function(){return this});p.register("responsive.index()",
function(a){a=d(a);return{column:a.data("dtr-index"),row:a.parent().data("dtr-index")}});p.register("responsive.rebuild()",function(){return this.iterator("table",function(a){a._responsive&&a._responsive._classLogic()})});p.register("responsive.recalc()",function(){return this.iterator("table",function(a){a._responsive&&(a._responsive._resizeAuto(),a._responsive._resize())})});p.register("responsive.hasHidden()",function(){var a=this.context[0];return a._responsive?-1!==d.inArray(!1,a._responsive.s.current):
!1});p.registerPlural("columns().responsiveHidden()","column().responsiveHidden()",function(){return this.iterator("column",function(a,b){return a._responsive?a._responsive.s.current[b]:!1},1)});i.version="2.2.2";d.fn.dataTable.Responsive=i;d.fn.DataTable.Responsive=i;d(j).on("preInit.dt.dtr",function(a,b){if("dt"===a.namespace&&(d(b.nTable).hasClass("responsive")||d(b.nTable).hasClass("dt-responsive")||b.oInit.responsive||o.defaults.responsive)){var c=b.oInit.responsive;!1!==c&&new i(b,d.isPlainObject(c)?
c:{})}});return i});


/*!
 Bootstrap integration for DataTables' Responsive
 ©2015-2016 SpryMedia Ltd - datatables.net/license
*/
(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs","datatables.net-responsive"],function(a){return c(a,window,document)}):"object"===typeof exports?module.exports=function(a,b){a||(a=window);if(!b||!b.fn.dataTable)b=require("datatables.net-bs")(a,b).$;b.fn.dataTable.Responsive||require("datatables.net-responsive")(a,b);return c(b,a,a.document)}:c(jQuery,window,document)})(function(c){var a=c.fn.dataTable,b=a.Responsive.display,g=b.modal,e=c('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
b.modal=function(a){return function(b,d,f){if(c.fn.modal){if(!d){if(a&&a.header){var d=e.find("div.modal-header"),h=d.find("button").detach();d.empty().append('<h4 class="modal-title">'+a.header(b)+"</h4>").prepend(h)}e.find("div.modal-body").empty().append(f());e.appendTo("body").modal()}}else g(b,d,f)}};return a.Responsive});


/*!
 Scroller 1.5.0
 ©2011-2018 SpryMedia Ltd - datatables.net/license
*/
(function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(h){return e(h,window,document)}):"object"===typeof exports?module.exports=function(h,i){h||(h=window);if(!i||!i.fn.dataTable)i=require("datatables.net")(h,i).$;return e(i,h,h.document)}:e(jQuery,window,document)})(function(e,h,i,l){var m=e.fn.dataTable,g=function(a,b){if(this instanceof g){b===l&&(b={});var c=e.fn.dataTable.Api(a);this.s={dt:c.settings()[0],dtApi:c,tableTop:0,tableBottom:0,redrawTop:0,
redrawBottom:0,autoHeight:!0,viewportRows:0,stateTO:null,drawTO:null,heights:{jump:null,page:null,virtual:null,scroll:null,row:null,viewport:null},topRowFloat:0,scrollDrawDiff:null,loaderVisible:!1,forceReposition:!1};this.s=e.extend(this.s,g.oDefaults,b);this.s.heights.row=this.s.rowHeight;this.dom={force:i.createElement("div"),scroller:null,table:null,loader:null};this.s.dt.oScroller||(this.s.dt.oScroller=this,this._fnConstruct())}else alert("Scroller warning: Scroller must be initialised with the 'new' keyword.")};
e.extend(g.prototype,{fnRowToPixels:function(a,b,c){a-=this.s.baseRowTop;c=c?this._domain("virtualToPhysical",this.s.baseScrollTop):this.s.baseScrollTop;c+=a*this.s.heights.row;return b||b===l?parseInt(c,10):c},fnPixelsToRow:function(a,b,c){a-=this.s.baseScrollTop;c=c?(this._domain("physicalToVirtual",this.s.baseScrollTop)+a)/this.s.heights.row:a/this.s.heights.row+this.s.baseRowTop;return b||b===l?parseInt(c,10):c},fnScrollToRow:function(a,b){var c=this,d=!1,f=this.fnRowToPixels(a),j=a-(this.s.displayBuffer-
1)/2*this.s.viewportRows;0>j&&(j=0);if((f>this.s.redrawBottom||f<this.s.redrawTop)&&this.s.dt._iDisplayStart!==j)d=!0,f=this._domain("virtualToPhysical",a*this.s.heights.row),this.s.redrawTop<f&&f<this.s.redrawBottom&&(this.s.forceReposition=!0,b=!1);"undefined"==typeof b||b?(this.s.ani=d,e(this.dom.scroller).animate({scrollTop:f},function(){setTimeout(function(){c.s.ani=!1},25)})):e(this.dom.scroller).scrollTop(f)},fnMeasure:function(a){this.s.autoHeight&&this._fnCalcRowHeight();var b=this.s.heights;
b.row&&(b.viewport=e.contains(i,this.dom.scroller)?e(this.dom.scroller).height():this._parseHeight(e(this.dom.scroller).css("height")),b.viewport||(b.viewport=this._parseHeight(e(this.dom.scroller).css("max-height"))),this.s.viewportRows=parseInt(b.viewport/b.row,10)+1,this.s.dt._iDisplayLength=this.s.viewportRows*this.s.displayBuffer);(a===l||a)&&this.s.dt.oInstance.fnDraw(!1)},fnPageInfo:function(){var a=this.dom.scroller.scrollTop,b=this.s.dt.fnRecordsDisplay(),c=Math.ceil(this.fnPixelsToRow(a+
this.s.heights.viewport,!1,this.s.ani));return{start:Math.floor(this.fnPixelsToRow(a,!1,this.s.ani)),end:b<c?b-1:c-1}},_fnConstruct:function(){var a=this,b=this.s.dtApi;if(this.s.dt.oFeatures.bPaginate){this.dom.force.style.position="relative";this.dom.force.style.top="0px";this.dom.force.style.left="0px";this.dom.force.style.width="1px";this.dom.scroller=e("div."+this.s.dt.oClasses.sScrollBody,this.s.dt.nTableWrapper)[0];this.dom.scroller.appendChild(this.dom.force);this.dom.scroller.style.position=
"relative";this.dom.table=e(">table",this.dom.scroller)[0];this.dom.table.style.position="absolute";this.dom.table.style.top="0px";this.dom.table.style.left="0px";e(b.table().container()).addClass("DTS");this.s.loadingIndicator&&(this.dom.loader=e('<div class="dataTables_processing DTS_Loading">'+this.s.dt.oLanguage.sLoadingRecords+"</div>").css("display","none"),e(this.dom.scroller.parentNode).css("position","relative").append(this.dom.loader));this.s.heights.row&&"auto"!=this.s.heights.row&&(this.s.autoHeight=
!1);this.fnMeasure(!1);this.s.ingnoreScroll=!0;this.s.stateSaveThrottle=this.s.dt.oApi._fnThrottle(function(){a.s.dtApi.state.save()},500);e(this.dom.scroller).on("scroll.dt-scroller",function(){a._fnScroll.call(a)});e(this.dom.scroller).on("touchstart.dt-scroller",function(){a._fnScroll.call(a)});e(h).on("resize.dt-scroller",function(){a.fnMeasure(false);a._fnInfo()});var c=!0,d=b.state.loaded();b.on("stateSaveParams.scroller",function(b,e,g){g.scroller={topRow:c&&d&&d.scroller?d.scroller.topRow:
a.s.topRowFloat,baseScrollTop:a.s.baseScrollTop,baseRowTop:a.s.baseRowTop};c=false});d&&d.scroller&&(this.s.topRowFloat=d.scroller.topRow,this.s.baseScrollTop=d.scroller.baseScrollTop,this.s.baseRowTop=d.scroller.baseRowTop);b.on("init.scroller",function(){a.fnMeasure(false);a._fnDrawCallback();b.on("draw.scroller",function(){a._fnDrawCallback()})});b.on("preDraw.dt.scroller",function(){a._fnScrollForce()});b.on("destroy.scroller",function(){e(h).off("resize.dt-scroller");e(a.dom.scroller).off(".dt-scroller");
e(a.s.dt.nTable).off(".scroller");e(a.s.dt.nTableWrapper).removeClass("DTS");e("div.DTS_Loading",a.dom.scroller.parentNode).remove();a.dom.table.style.position="";a.dom.table.style.top="";a.dom.table.style.left=""})}else this.s.dt.oApi._fnLog(this.s.dt,0,"Pagination must be enabled for Scroller")},_fnScroll:function(){var a=this,b=this.s.heights,c=this.dom.scroller.scrollTop,d;if(!this.s.skip&&!this.s.ingnoreScroll)if(this.s.dt.bFiltered||this.s.dt.bSorted)this.s.lastScrollTop=0;else{this._fnInfo();
clearTimeout(this.s.stateTO);this.s.stateTO=setTimeout(function(){a.s.dtApi.state.save()},250);if(this.s.forceReposition||c<this.s.redrawTop||c>this.s.redrawBottom){var f=Math.ceil((this.s.displayBuffer-1)/2*this.s.viewportRows);d=parseInt(this._domain("physicalToVirtual",c)/b.row,10)-f;this.s.topRowFloat=this._domain("physicalToVirtual",c)/b.row;this.s.forceReposition=!1;0>=d?d=0:d+this.s.dt._iDisplayLength>this.s.dt.fnRecordsDisplay()?(d=this.s.dt.fnRecordsDisplay()-this.s.dt._iDisplayLength,0>
d&&(d=0)):0!==d%2&&d++;if(d!=this.s.dt._iDisplayStart&&(this.s.tableTop=e(this.s.dt.nTable).offset().top,this.s.tableBottom=e(this.s.dt.nTable).height()+this.s.tableTop,b=function(){if(a.s.scrollDrawReq===null)a.s.scrollDrawReq=c;a.s.dt._iDisplayStart=d;a.s.dt.oApi._fnDraw(a.s.dt)},this.s.dt.oFeatures.bServerSide?(clearTimeout(this.s.drawTO),this.s.drawTO=setTimeout(b,this.s.serverWait)):b(),this.dom.loader&&!this.s.loaderVisible))this.dom.loader.css("display","block"),this.s.loaderVisible=!0}else this.s.topRowFloat=
this.fnPixelsToRow(c,!1,!0);this.s.lastScrollTop=c;this.s.stateSaveThrottle()}},_domain:function(a,b){var c=this.s.heights,d;if(c.virtual===c.scroll)return b;var e=(c.scroll-c.viewport)/2,j=(c.virtual-c.viewport)/2;d=j/(e*e);if("virtualToPhysical"===a){if(b<j)return Math.pow(b/d,0.5);b=2*j-b;return 0>b?c.scroll:2*e-Math.pow(b/d,0.5)}if("physicalToVirtual"===a){if(b<e)return b*b*d;b=2*e-b;return 0>b?c.virtual:2*j-b*b*d}},_parseHeight:function(a){var b,c=/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(px|em|rem|vh)$/.exec(a);
if(null===c)return 0;a=parseFloat(c[1]);c=c[2];"px"===c?b=a:"vh"===c?b=a/100*e(h).height():"rem"===c?b=a*parseFloat(e(":root").css("font-size")):"em"===c&&(b=a*parseFloat(e("body").css("font-size")));return b?b:0},_fnDrawCallback:function(){var a=this,b=this.s.heights,c=this.dom.scroller.scrollTop,d=e(this.s.dt.nTable).height(),f=this.s.dt._iDisplayStart,j=this.s.dt._iDisplayLength,g=this.s.dt.fnRecordsDisplay();this.s.skip=!0;if((this.s.dt.bSorted||this.s.dt.bFiltered)&&0===f)this.s.topRowFloat=
0;c=0===f?this.s.topRowFloat*b.row:f+j>=g?b.scroll-(g-this.s.topRowFloat)*b.row:this._domain("virtualToPhysical",this.s.topRowFloat*b.row);this.dom.scroller.scrollTop=c;this.s.baseScrollTop=c;this.s.baseRowTop=this.s.topRowFloat;var h=c-(this.s.topRowFloat-f)*b.row;0===f?h=0:f+j>=g&&(h=b.scroll-d);this.dom.table.style.top=h+"px";this.s.tableTop=h;this.s.tableBottom=d+this.s.tableTop;d=(c-this.s.tableTop)*this.s.boundaryScale;this.s.redrawTop=c-d;this.s.redrawBottom=c+d>b.scroll-b.viewport-b.row?b.scroll-
b.viewport-b.row:c+d;this.s.skip=!1;this.s.dt.oFeatures.bStateSave&&null!==this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.iScroller?((c=(this.s.dt.sAjaxSource||a.s.dt.ajax)&&!this.s.dt.oFeatures.bServerSide?!0:!1)&&2==this.s.dt.iDraw||!c&&1==this.s.dt.iDraw)&&setTimeout(function(){e(a.dom.scroller).scrollTop(a.s.dt.oLoadedState.iScroller);a.s.redrawTop=a.s.dt.oLoadedState.iScroller-b.viewport/2;setTimeout(function(){a.s.ingnoreScroll=!1},0)},0):a.s.ingnoreScroll=!1;this.s.dt.oFeatures.bInfo&&
setTimeout(function(){a._fnInfo.call(a)},0);this.dom.loader&&this.s.loaderVisible&&(this.dom.loader.css("display","none"),this.s.loaderVisible=!1)},_fnScrollForce:function(){var a=this.s.heights;a.virtual=a.row*this.s.dt.fnRecordsDisplay();a.scroll=a.virtual;1E6<a.scroll&&(a.scroll=1E6);this.dom.force.style.height=a.scroll>this.s.heights.row?a.scroll+"px":this.s.heights.row+"px"},_fnCalcRowHeight:function(){var a=this.s.dt,b=a.nTable,c=b.cloneNode(!1),d=e("<tbody/>").appendTo(c),f=e('<div class="'+
a.oClasses.sWrapper+' DTS"><div class="'+a.oClasses.sScrollWrapper+'"><div class="'+a.oClasses.sScrollBody+'"></div></div></div>');for(e("tbody tr:lt(4)",b).clone().appendTo(d);3>e("tr",d).length;)d.append("<tr><td>&nbsp;</td></tr>");e("div."+a.oClasses.sScrollBody,f).append(c);a=this.s.dt.nHolding||b.parentNode;e(a).is(":visible")||(a="body");f.appendTo(a);this.s.heights.row=e("tr",d).eq(1).outerHeight();f.remove()},_fnInfo:function(){if(this.s.dt.oFeatures.bInfo){var a=this.s.dt,b=a.oLanguage,c=
this.dom.scroller.scrollTop,d=Math.floor(this.fnPixelsToRow(c,!1,this.s.ani)+1),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),c=Math.ceil(this.fnPixelsToRow(c+this.s.heights.viewport,!1,this.s.ani)),c=g<c?g:c,h=a.fnFormatNumber(d),i=a.fnFormatNumber(c),k=a.fnFormatNumber(f),l=a.fnFormatNumber(g),h=0===a.fnRecordsDisplay()&&a.fnRecordsDisplay()==a.fnRecordsTotal()?b.sInfoEmpty+b.sInfoPostFix:0===a.fnRecordsDisplay()?b.sInfoEmpty+" "+b.sInfoFiltered.replace("_MAX_",k)+b.sInfoPostFix:a.fnRecordsDisplay()==
a.fnRecordsTotal()?b.sInfo.replace("_START_",h).replace("_END_",i).replace("_MAX_",k).replace("_TOTAL_",l)+b.sInfoPostFix:b.sInfo.replace("_START_",h).replace("_END_",i).replace("_MAX_",k).replace("_TOTAL_",l)+" "+b.sInfoFiltered.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()))+b.sInfoPostFix;(b=b.fnInfoCallback)&&(h=b.call(a.oInstance,a,d,c,f,g,h));d=a.aanFeatures.i;if("undefined"!=typeof d){f=0;for(g=d.length;f<g;f++)e(d[f]).html(h)}e(a.nTable).triggerHandler("info.dt")}}});g.defaults={trace:!1,
rowHeight:"auto",serverWait:200,displayBuffer:9,boundaryScale:0.5,loadingIndicator:!1};g.oDefaults=g.defaults;g.version="1.5.0";"function"==typeof e.fn.dataTable&&"function"==typeof e.fn.dataTableExt.fnVersionCheck&&e.fn.dataTableExt.fnVersionCheck("1.10.0")?e.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b=a.oInit;new g(a,b.scroller||b.oScroller||{})},cFeature:"S",sFeature:"Scroller"}):alert("Warning: Scroller requires DataTables 1.10.0 or greater - www.datatables.net/download");e(i).on("preInit.dt.dtscroller",
function(a,b){if("dt"===a.namespace){var c=b.oInit.scroller,d=m.defaults.scroller;if(c||d)d=e.extend({},c,d),!1!==c&&new g(b,d)}});e.fn.dataTable.Scroller=g;e.fn.DataTable.Scroller=g;var k=e.fn.dataTable.Api;k.register("scroller()",function(){return this});k.register("scroller().rowToPixels()",function(a,b,c){var d=this.context;if(d.length&&d[0].oScroller)return d[0].oScroller.fnRowToPixels(a,b,c)});k.register("scroller().pixelsToRow()",function(a,b,c){var d=this.context;if(d.length&&d[0].oScroller)return d[0].oScroller.fnPixelsToRow(a,
b,c)});k.register(["scroller().scrollToRow()","scroller.toPosition()"],function(a,b){this.iterator("table",function(c){c.oScroller&&c.oScroller.fnScrollToRow(a,b)});return this});k.register("row().scrollTo()",function(a){var b=this;this.iterator("row",function(c,d){if(c.oScroller){var e=b.rows({order:"applied",search:"applied"}).indexes().indexOf(d);c.oScroller.fnScrollToRow(e,a)}});return this});k.register("scroller.measure()",function(a){this.iterator("table",function(b){b.oScroller&&b.oScroller.fnMeasure(a)});
return this});k.register("scroller.page()",function(){var a=this.context;if(a.length&&a[0].oScroller)return a[0].oScroller.fnPageInfo()});return g});


/*!
 Select for DataTables 1.2.6
 2015-2018 SpryMedia Ltd - datatables.net/license/mit
*/
(function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(i){return e(i,window,document)}):"object"===typeof exports?module.exports=function(i,l){i||(i=window);if(!l||!l.fn.dataTable)l=require("datatables.net")(i,l).$;return e(l,i,i.document)}:e(jQuery,window,document)})(function(e,i,l,h){function u(a,c,b){var d;d=function(b,c){if(b>c)var d=c,c=b,b=d;var f=!1;return a.columns(":visible").indexes().filter(function(a){a===b&&(f=!0);return a===c?(f=!1,!0):f})};var f=
function(b,c){var d=a.rows({search:"applied"}).indexes();if(d.indexOf(b)>d.indexOf(c))var f=c,c=b,b=f;var e=!1;return d.filter(function(a){a===b&&(e=!0);return a===c?(e=!1,!0):e})};!a.cells({selected:!0}).any()&&!b?(d=d(0,c.column),b=f(0,c.row)):(d=d(b.column,c.column),b=f(b.row,c.row));b=a.cells(b,d).flatten();a.cells(c,{selected:!0}).any()?a.cells(b).deselect():a.cells(b).select()}function q(a){var c=a.settings()[0]._select.selector;e(a.table().container()).off("mousedown.dtSelect",c).off("mouseup.dtSelect",
c).off("click.dtSelect",c);e("body").off("click.dtSelect"+a.table().node().id)}function x(a){var c=e(a.table().container()),b=a.settings()[0],d=b._select.selector,f;c.on("mousedown.dtSelect",d,function(b){if(b.shiftKey||b.metaKey||b.ctrlKey)c.css("-moz-user-select","none").one("selectstart.dtSelect",d,function(){return!1});i.getSelection&&(f=i.getSelection())}).on("mouseup.dtSelect",d,function(){c.css("-moz-user-select","")}).on("click.dtSelect",d,function(b){var c=a.select.items();if(i.getSelection){var d=
i.getSelection();if((!d.anchorNode||e(d.anchorNode).closest("table")[0]===a.table().node())&&d!==f)return}var d=a.settings()[0],g=a.settings()[0].oClasses.sWrapper.replace(/ /g,".");if(e(b.target).closest("div."+g)[0]==a.table().container()&&(g=a.cell(e(b.target).closest("td, th")),g.any())){var h=e.Event("user-select.dt");j(a,h,[c,g,b]);h.isDefaultPrevented()||(h=g.index(),"row"===c?(c=h.row,r(b,a,d,"row",c)):"column"===c?(c=g.index().column,r(b,a,d,"column",c)):"cell"===c&&(c=g.index(),r(b,a,d,
"cell",c)),d._select_lastCell=h)}});e("body").on("click.dtSelect"+a.table().node().id,function(c){b._select.blurable&&!e(c.target).parents().filter(a.table().container()).length&&(0!==e(c.target).parents("html").length&&!e(c.target).parents("div.DTE").length)&&o(b,!0)})}function j(a,c,b,d){if(!d||a.flatten().length)"string"===typeof c&&(c+=".dt"),b.unshift(a),e(a.table().node()).trigger(c,b)}function y(a){var c=a.settings()[0];if(c._select.info&&c.aanFeatures.i&&"api"!==a.select.style()){var b=a.rows({selected:!0}).flatten().length,
d=a.columns({selected:!0}).flatten().length,f=a.cells({selected:!0}).flatten().length,k=function(b,c,d){b.append(e('<span class="select-item"/>').append(a.i18n("select."+c+"s",{_:"%d "+c+"s selected","0":"",1:"1 "+c+" selected"},d)))};e.each(c.aanFeatures.i,function(c,a){var a=e(a),g=e('<span class="select-info"/>');k(g,"row",b);k(g,"column",d);k(g,"cell",f);var h=a.children("span.select-info");h.length&&h.remove();""!==g.text()&&a.append(g)})}}function z(a,c,b,d){var f=a[c+"s"]({search:"applied"}).indexes(),
d=e.inArray(d,f),k=e.inArray(b,f);if(!a[c+"s"]({selected:!0}).any()&&-1===d)f.splice(e.inArray(b,f)+1,f.length);else{if(d>k)var g=k,k=d,d=g;f.splice(k+1,f.length);f.splice(0,d)}a[c](b,{selected:!0}).any()?(f.splice(e.inArray(b,f),1),a[c+"s"](f).deselect()):a[c+"s"](f).select()}function o(a,c){if(c||"single"===a._select.style){var b=new g.Api(a);b.rows({selected:!0}).deselect();b.columns({selected:!0}).deselect();b.cells({selected:!0}).deselect()}}function r(a,c,b,d,f){var e=c.select.style(),g=c[d](f,
{selected:!0}).any();"os"===e?a.ctrlKey||a.metaKey?c[d](f).select(!g):a.shiftKey?"cell"===d?u(c,f,b._select_lastCell||null):z(c,d,f,b._select_lastCell?b._select_lastCell[d]:null):(a=c[d+"s"]({selected:!0}),g&&1===a.flatten().length?c[d](f).deselect():(a.deselect(),c[d](f).select())):"multi+shift"==e?a.shiftKey?"cell"===d?u(c,f,b._select_lastCell||null):z(c,d,f,b._select_lastCell?b._select_lastCell[d]:null):c[d](f).select(!g):c[d](f).select(!g)}function p(a,c){return function(b){return b.i18n("buttons."+
a,c)}}function s(a){a=a._eventNamespace;return"draw.dt.DT"+a+" select.dt.DT"+a+" deselect.dt.DT"+a}var g=e.fn.dataTable;g.select={};g.select.version="1.2.6";g.select.init=function(a){var c=a.settings()[0],b=c.oInit.select,d=g.defaults.select,b=b===h?d:b,d="row",f="api",k=!1,v=!0,w="td, th",i="selected",j=!1;c._select={};if(!0===b)f="os",j=!0;else if("string"===typeof b)f=b,j=!0;else if(e.isPlainObject(b)&&(b.blurable!==h&&(k=b.blurable),b.info!==h&&(v=b.info),b.items!==h&&(d=b.items),b.style!==h&&
(f=b.style,j=!0),b.selector!==h&&(w=b.selector),b.className!==h))i=b.className;a.select.selector(w);a.select.items(d);a.select.style(f);a.select.blurable(k);a.select.info(v);c._select.className=i;e.fn.dataTable.ext.order["select-checkbox"]=function(b,c){return this.api().column(c,{order:"index"}).nodes().map(function(c){return"row"===b._select.items?e(c).parent().hasClass(b._select.className):"cell"===b._select.items?e(c).hasClass(b._select.className):!1})};!j&&e(a.table().node()).hasClass("selectable")&&
a.select.style("os")};e.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(a,c){g.ext.selector[c.type].push(function(b,a,f){var a=a.selected,e,g=[];if(!0!==a&&!1!==a)return f;for(var h=0,i=f.length;h<i;h++)e=b[c.prop][f[h]],(!0===a&&!0===e._select_selected||!1===a&&!e._select_selected)&&g.push(f[h]);return g})});g.ext.selector.cell.push(function(a,c,b){var c=c.selected,d,f=[];if(c===h)return b;for(var e=0,g=b.length;e<g;e++)d=a.aoData[b[e].row],(!0===c&&d._selected_cells&&
!0===d._selected_cells[b[e].column]||!1===c&&(!d._selected_cells||!d._selected_cells[b[e].column]))&&f.push(b[e]);return f});var m=g.Api.register,n=g.Api.registerPlural;m("select()",function(){return this.iterator("table",function(a){g.select.init(new g.Api(a))})});m("select.blurable()",function(a){return a===h?this.context[0]._select.blurable:this.iterator("table",function(c){c._select.blurable=a})});m("select.info()",function(a){return y===h?this.context[0]._select.info:this.iterator("table",function(c){c._select.info=
a})});m("select.items()",function(a){return a===h?this.context[0]._select.items:this.iterator("table",function(c){c._select.items=a;j(new g.Api(c),"selectItems",[a])})});m("select.style()",function(a){return a===h?this.context[0]._select.style:this.iterator("table",function(c){c._select.style=a;if(!c._select_init){var b=new g.Api(c);c.aoRowCreatedCallback.push({fn:function(b,a,d){a=c.aoData[d];a._select_selected&&e(b).addClass(c._select.className);b=0;for(d=c.aoColumns.length;b<d;b++)(c.aoColumns[b]._select_selected||
a._selected_cells&&a._selected_cells[b])&&e(a.anCells[b]).addClass(c._select.className)},sName:"select-deferRender"});b.on("preXhr.dt.dtSelect",function(){var a=b.rows({selected:!0}).ids(!0).filter(function(b){return b!==h}),c=b.cells({selected:!0}).eq(0).map(function(c){var a=b.row(c.row).id(!0);return a?{row:a,column:c.column}:h}).filter(function(b){return b!==h});b.one("draw.dt.dtSelect",function(){b.rows(a).select();c.any()&&c.each(function(c){b.cells(c.row,c.column).select()})})});b.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",
function(){y(b)});b.on("destroy.dtSelect",function(){q(b);b.off(".dtSelect")})}var d=new g.Api(c);q(d);"api"!==a&&x(d);j(new g.Api(c),"selectStyle",[a])})});m("select.selector()",function(a){return a===h?this.context[0]._select.selector:this.iterator("table",function(c){q(new g.Api(c));c._select.selector=a;"api"!==c._select.style&&x(new g.Api(c))})});n("rows().select()","row().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("row",function(b,c){o(b);b.aoData[c]._select_selected=
!0;e(b.aoData[c].nTr).addClass(b._select.className)});this.iterator("table",function(b,a){j(c,"select",["row",c[a]],!0)});return this});n("columns().select()","column().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("column",function(b,c){o(b);b.aoColumns[c]._select_selected=!0;var a=(new g.Api(b)).column(c);e(a.header()).addClass(b._select.className);e(a.footer()).addClass(b._select.className);a.nodes().to$().addClass(b._select.className)});this.iterator("table",
function(b,a){j(c,"select",["column",c[a]],!0)});return this});n("cells().select()","cell().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("cell",function(b,c,a){o(b);c=b.aoData[c];c._selected_cells===h&&(c._selected_cells=[]);c._selected_cells[a]=!0;c.anCells&&e(c.anCells[a]).addClass(b._select.className)});this.iterator("table",function(b,a){j(c,"select",["cell",c[a]],!0)});return this});n("rows().deselect()","row().deselect()",function(){var a=this;this.iterator("row",
function(c,b){c.aoData[b]._select_selected=!1;e(c.aoData[b].nTr).removeClass(c._select.className)});this.iterator("table",function(c,b){j(a,"deselect",["row",a[b]],!0)});return this});n("columns().deselect()","column().deselect()",function(){var a=this;this.iterator("column",function(c,b){c.aoColumns[b]._select_selected=!1;var a=new g.Api(c),f=a.column(b);e(f.header()).removeClass(c._select.className);e(f.footer()).removeClass(c._select.className);a.cells(null,b).indexes().each(function(b){var a=
c.aoData[b.row],d=a._selected_cells;a.anCells&&(!d||!d[b.column])&&e(a.anCells[b.column]).removeClass(c._select.className)})});this.iterator("table",function(c,b){j(a,"deselect",["column",a[b]],!0)});return this});n("cells().deselect()","cell().deselect()",function(){var a=this;this.iterator("cell",function(a,b,d){b=a.aoData[b];b._selected_cells[d]=!1;b.anCells&&!a.aoColumns[d]._select_selected&&e(b.anCells[d]).removeClass(a._select.className)});this.iterator("table",function(c,b){j(a,"deselect",
["cell",a[b]],!0)});return this});var t=0;e.extend(g.ext.buttons,{selected:{text:p("selected","Selected"),className:"buttons-selected",limitTo:["rows","columns","cells"],init:function(a,c,b){var d=this;b._eventNamespace=".select"+t++;a.on(s(b),function(){d.enable(-1!==e.inArray("rows",b.limitTo)&&a.rows({selected:!0}).any()||-1!==e.inArray("columns",b.limitTo)&&a.columns({selected:!0}).any()||-1!==e.inArray("cells",b.limitTo)&&a.cells({selected:!0}).any()?!0:!1)});this.disable()},destroy:function(a,
c,b){a.off(b._eventNamespace)}},selectedSingle:{text:p("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(a,c,b){var d=this;b._eventNamespace=".select"+t++;a.on(s(b),function(){var b=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;d.enable(1===b)});this.disable()},destroy:function(a,c,b){a.off(b._eventNamespace)}},selectAll:{text:p("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+
"s"]().select()}},selectNone:{text:p("selectNone","Deselect all"),className:"buttons-select-none",action:function(){o(this.settings()[0],!0)},init:function(a,c,b){var d=this;b._eventNamespace=".select"+t++;a.on(s(b),function(){var b=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;d.enable(0<b)});this.disable()},destroy:function(a,c,b){a.off(b._eventNamespace)}}});e.each(["Row","Column","Cell"],function(a,c){var b=c.toLowerCase();
g.ext.buttons["select"+c+"s"]={text:p("select"+c+"s","Select "+b+"s"),className:"buttons-select-"+b+"s",action:function(){this.select.items(b)},init:function(a){var c=this;a.on("selectItems.dt.DT",function(a,d,e){c.active(e===b)})}}});e(l).on("preInit.dt.dtSelect",function(a,c){"dt"===a.namespace&&g.select.init(new g.Api(c))});return g.select});


/**
 * 穿梭框
 */
var Transfer = (function ($) {
    // 全局变量，已选择项个数
    var selected_total_num = 0;
    // 当前时间，作为 id 使用
    var currentTimeStr = (new Date()).getTime() + parseInt(10000 * Math.random());
    // input 的 id
    var inputId = "";

    /**
     * 构造穿梭框
     * @param settings 设置项
     */
    function transfer(settings) {

        inputId = settings.inputId;
        // 数据项的名称
        var itemName = settings.itemName;
        // 分组的名称
        var groupItemName = settings.groupItemName;
        // 分组的列表名称
        var groupListName = settings.groupListName;
        // 值的名称
        var valueName = settings.valueName;
        // 容器
        var container = "." + settings.container;
        // 数据变化的回调函数
        var callable = settings.callable;
        // 穿梭框
        var transferId = "#transfer_double_" + inputId;

        // 接收选中项文本框
        var selectInputId = "#" + inputId;

        // 列表数据
        var data = settings.data || [];
        // 分组列表数据
        var groupData = settings.groupData || [];

        // 数据项总个数
        var total_num = settings.data.length;
        // 总个数显示文本
        var total_num_str = settings.data.length + " Items";

        // 分组总个数
        var total_group_num = getGroupNum(groupData, groupListName);
        // 分组总个数显示文本
        var total_group_num_str = total_group_num + " Items";

        // 新的总个数
        var new_total_num = 0;
        // 新的分组总个数
        var new_group_total_num = 0;

        // 标签页
        var tabItemName = ".tab-item-name-" + currentTimeStr;
        // 标签页内容
        var transferDoubleList = ".transfer-double-list-" + currentTimeStr;

        // 左侧搜索框 id
        var listSearchId = "#listSearch_" + currentTimeStr;
        // 左侧分组搜索框 id
        var groupListSearchId = "#groupListSearch_" + currentTimeStr;
        // 右侧搜索框 id
        var selectedListSearchId = "#selectedListSearch_" + currentTimeStr;

        // 左侧未选中项内容
        var tabContentFirst = ".tab-content-first-" + currentTimeStr;
        // 左侧未选中项列表 ul
        var transferDoubleListUl = ".transfer-double-list-ul-" + currentTimeStr;
        // 左侧未选中项列表 li
        var transferDoubleListLi = ".transfer-double-list-li-" + currentTimeStr;
        // 左侧列表项 checkbox
        var checkboxItem = ".checkbox-item-" + currentTimeStr;
        // 左侧列表项名称
        var checkboxName = ".checkbox-name-" + currentTimeStr;
        // 左侧总个数显示元素
        var totalNum = ".total_num_" + currentTimeStr;
        // 左侧未选中项列表全选 id
        var selectAllId = "#selectAll_" + currentTimeStr;

        // 左侧分组列表 ul
        var transferDoubleGroupListUl = ".transfer-double-group-list-ul-" + currentTimeStr;
        // 左侧分组列表 li
        var transferDoubleGroupListLi = ".transfer-double-group-list-li-" + currentTimeStr;
        // 左侧分组列表分组全选，是分组全选，不是全选
        var groupSelectAll = ".group-select-all-" + currentTimeStr;
        // 左侧分组列表分组名称
        var groupName = ".group-name-" + currentTimeStr;
        // 左侧不同分组 ul
        var transferDoubleGroupListLiUl = ".transfer-double-group-list-li-ul-" + currentTimeStr;
        // 左侧不同分组 li
        var transferDoubleGroupListLiUlLi = ".transfer-double-group-list-li-ul-li-" + currentTimeStr;
        // 左侧不同分组 checkbox
        var groupCheckboxItem = ".group-checkbox-item-" + currentTimeStr;
        // 左侧不同分组选项名称
        var groupCheckboxName = ".group-checkbox-name-" + currentTimeStr;
        // 左侧分组总个数显示元素
        var groupTotalNum = ".group_total_num_" + currentTimeStr;
        // 左侧未选中分组列表全选 id
        var groupsSelectAllId = "#groupsSelectAll_" + currentTimeStr;

        // 右侧列表 ul
        var transferDoubleSelectedListUl = ".transfer-double-selected-list-ul-" + currentTimeStr;
        // 右侧列表 li
        var transferDoubleSelectedListLi = ".transfer-double-selected-list-li-" + currentTimeStr;
        // 右侧列表选中项
        var checkboxSelectedItem = ".checkbox-selected-item-" + currentTimeStr;
        // 右侧列表选中项名称
        var checkboxSelectedName = ".checkbox-selected-name-" + currentTimeStr;
        // 右侧全选 id，留待后续使用
        var selectedAllId = "#selectedAll_" + currentTimeStr;
        // 右侧总个数显示元素
        var selectedTotalNum = ".selected_total_num_" + currentTimeStr;

        // 往右添加按钮
        var addSelected = "#add_selected_" + currentTimeStr;
        // 往左添加按钮
        var deleteSelected = "#delete_selected_" + currentTimeStr;


        // 穿梭框渲染
        $(container).append(generateTransfer(inputId, currentTimeStr));

        /**
         * 数据渲染
         */
        $(transferId).find(transferDoubleListUl).empty();
        $(transferId).find(transferDoubleListUl).append(generateLeftList(currentTimeStr, data, itemName, valueName));
        $(transferId).find(totalNum).empty();
        $(transferId).find(totalNum).append(total_num_str);

        $(transferId).find(transferDoubleGroupListUl).empty();
        $(transferId).find(transferDoubleGroupListUl).append(generateLeftGroupList(currentTimeStr, groupData, itemName, groupListName, groupItemName, valueName));
        $(transferId).find(groupTotalNum).empty();
        $(transferId).find(groupTotalNum).append(total_group_num_str);

        /**
         * 点击标签页切换
         */
        $(transferId).find(tabItemName).on("click", function () {
            $(selectAllId).prop("checked", false);
            if (!$(this).is(".tab-active")) {
                $(this).addClass("tab-active").siblings().removeClass("tab-active");
                $(transferDoubleList).eq($(transferId).find(tabItemName).index(this)).addClass("tab-content-active").siblings().removeClass("tab-content-active");
                $(transferId).find(".checkbox-normal").each(function () {
                    $(this).prop("checked", false);
                });
                $(addSelected).removeClass("btn-arrow-active");
                $(transferId).find(transferDoubleSelectedListUl).empty();
                // 清空右侧数量
                $(transferId).find(selectedTotalNum).text("共0 Items");
                // 未选中项
                if ($(transferId).find(tabContentFirst).css("display") != "none") {
                    $(transferId).find(transferDoubleGroupListLiUlLi).each(function () {
                        $(this).css('display', 'block');
                    });
                    $(transferId).find(groupCheckboxItem).each(function () {
                        $(this).prop("checked", false);
                    });

                    $(transferId).find(selectAllId).prop("disabled", "");

                    $(transferId).find(groupTotalNum).empty();
                    $(transferId).find(groupTotalNum).append($(transferId).find(transferDoubleGroupListLiUlLi).length + " Items");
                } else {
                    // 分组

                    // 清空 disabled
                    for (var j = 0; j < $(transferId).find(groupSelectAll).length; j++) {
                        $(transferId).find(groupSelectAll).eq(j).prop("disabled", "");
                    }
                    $(transferId).find(groupsSelectAllId).prop("disabled", "");

                    $(transferId).find(transferDoubleListLi).each(function () {
                        $(this).css('display', 'block');
                    });
                    $(transferId).find(checkboxItem).each(function () {
                        $(this).prop("checked", false);
                    });
                    $(transferId).find(totalNum).empty();
                    $(transferId).find(totalNum).append($(transferId).find(transferDoubleListLi).length + " Items");
                }
                // 数据变化触发回调
                callable.call(this, getSelected(), getSelectedName());
                // 标签切换按钮修改为未激活
                $(addSelected).removeClass("btn-arrow-active");
                $(deleteSelected).removeClass("btn-arrow-active");
            }
        });

        /**
         * 监听左侧未选中项 checkBox 是否被选中
         */
        $(transferId).on("click", checkboxItem, function () {
            var selected_num = 0;
            for (var i = 0; i < $(transferId).find(checkboxItem).length; i++) {
                if ($(transferId).find(transferDoubleListLi).eq(i).css('display') != "none" && $(transferId).find(checkboxItem).eq(i).is(':checked')) {
                    selected_num++;
                }
            }
            if (selected_num > 0) {
                $(addSelected).addClass("btn-arrow-active");
            } else {
                $(addSelected).removeClass("btn-arrow-active");
            }
        });

        /**
         * 监听左侧分组 checkBox 是否被选中
         */
        $(transferId).on("click", groupCheckboxItem, function () {
            var selected_num = 0;
            for (var i = 0; i < $(transferId).find(groupCheckboxItem).length; i++) {
                if ($(transferId).find(transferDoubleGroupListLiUlLi).eq(i).css('display') != "none" && $(transferId).find(groupCheckboxItem).eq(i).is(':checked')) {
                    selected_num++;
                }
            }
            if (selected_num > 0) {
                $(addSelected).addClass("btn-arrow-active");
            } else {
                $(addSelected).removeClass("btn-arrow-active");
            }
        });

        // 监听右侧未选中项 checkBox 是否被选中
        $(transferId).on("click", checkboxSelectedItem, function () {
            var deleted_num = 0;
            for (var i = 0; i < $(transferId).find(checkboxSelectedItem).length; i++) {
                if ($(transferId).find(checkboxSelectedItem).eq(i).is(':checked')) {
                    deleted_num++;
                }
            }
            if (deleted_num > 0) {
                $(deleteSelected).addClass("btn-arrow-active");
            } else {
                $(deleteSelected).removeClass("btn-arrow-active");
            }
        });

        // 选中或者反选分组中的所有未选中项
        $(groupSelectAll).on("click", function () {
            // 分组索引
            var groupIndex = ($(this).attr("id")).split("_")[1];
            // 某个分组被选中
            if ($(this).is(':checked')) {
                // 激活按钮
                $(addSelected).addClass("btn-arrow-active");
                for (var i = 0; i < $(transferId).find(".belongs-group-" + groupIndex + "-" + currentTimeStr).length; i++) {
                    if (!$(transferId).find(".belongs-group-" + groupIndex + "-" + currentTimeStr).eq(i).is(':checked') && $(transferId).find(".belongs-group-" + groupIndex + "-" + currentTimeStr).eq(i).parent().parent().css("display") != "none") {
                        // 此处如果用 attr，会出现第三次失效的情况
                        $(transferId).find(".belongs-group-" + groupIndex + "-" + currentTimeStr).eq(i).prop("checked", true);
                    }
                }
                var groupCheckedNum = 0;
                $(transferId).find(groupSelectAll).each(function () {
                    if ($(this).is(":checked")) {
                        groupCheckedNum = groupCheckedNum + 1;
                    }
                });
                if (groupCheckedNum == $(transferId).find(groupSelectAll).length) {
                    $(groupsSelectAllId).prop("checked", true);
                }
            } else {
                for (var j = 0; j < $(transferId).find(".belongs-group-" + groupIndex + "-" + currentTimeStr).length; j++) {
                    if ($(transferId).find(".belongs-group-" + groupIndex + "-" + currentTimeStr).eq(j).is(':checked') && $(transferId).find(".belongs-group-" + groupIndex + "-" + currentTimeStr).eq(i).parent().parent().css("display") != "none") {
                        $(transferId).find(".belongs-group-" + groupIndex + "-" + currentTimeStr).eq(j).prop("checked", false);
                    }
                }
                var groupCheckedNum = 0;
                $(transferId).find(groupSelectAll).each(function () {
                    if ($(this).is(":checked")) {
                        groupCheckedNum = groupCheckedNum + 1;
                    }
                });
                if (groupCheckedNum != $(transferId).find(groupSelectAll).length) {
                    $(groupsSelectAllId).prop("checked", false);
                }
                if (groupCheckedNum == 0) {
                    $(addSelected).removeClass("btn-arrow-active");
                }
            }
        });

        /**
         * 列表全选
         */
        $(selectAllId).on("click", function () {
            if ($(this).is(':checked')) {
                for (var i = 0; i < $(transferId).find(checkboxItem).length; i++) {
                    if ($(transferId).find(transferDoubleListLi).eq(i).css('display') != "none" && !$(transferId).find(checkboxItem).eq(i).is(':checked')) {
                        //此处如果用attr，会出现第三次失效的情况
                        $(transferId).find(checkboxItem).eq(i).prop("checked", true);
                    }
                }
                $(addSelected).addClass("btn-arrow-active");
            } else {
                for (var i = 0; i < $(transferId).find(checkboxItem).length; i++) {
                    if ($(transferId).find(transferDoubleListLi).eq(i).css('display') != "none" && $(transferId).find(checkboxItem).eq(i).is(':checked')) {
                        $(transferId).find(checkboxItem).eq(i).prop("checked", false);
                    }
                }
                $(addSelected).removeClass("btn-arrow-active");
            }
        });

        /**
         * 分组全选
         */
        $(groupsSelectAllId).on("click", function () {
            if ($(this).is(':checked')) {
                for (var i = 0; i < $(transferId).find(groupCheckboxItem).length; i++) {
                    if ($(transferId).find(transferDoubleGroupListLiUlLi).eq(i).css('display') != "none" && !$(transferId).find(groupCheckboxItem).eq(i).is(':checked')) {
                        // 此处如果用 attr，会出现第三次失效的情况
                        $(transferId).find(groupCheckboxItem).eq(i).prop("checked", true);
                    }
                    if (!$(transferId).find(groupSelectAll).eq(i).is(':checked')) {
                        $(transferId).find(groupSelectAll).eq(i).prop("checked", true);
                    }
                }
                $(addSelected).addClass("btn-arrow-active");
            } else {
                for (var i = 0; i < $(transferId).find(groupCheckboxItem).length; i++) {
                    if ($(transferId).find(transferDoubleGroupListLiUlLi).eq(i).css('display') != "none" && $(transferId).find(groupCheckboxItem).eq(i).is(':checked')) {
                        $(transferId).find(groupCheckboxItem).eq(i).prop("checked", false);
                    }
                    if ($(transferId).find(groupSelectAll).eq(i).is(':checked')) {
                        $(transferId).find(groupSelectAll).eq(i).prop("checked", false);
                    }
                }
                $(addSelected).removeClass("btn-arrow-active");
            }
        });

        /**
         * 将选中项添加至右侧
         */
        $(addSelected).on("click", function () {
            var listHtmlStr = "";
            var selectedItemNum = 0;
            // 分组
            if ($(transferId).find(tabContentFirst).css("display") != "none") {
                for (var i = 0; i < $(transferId).find(groupCheckboxItem).length; i++) {
                    if ($(transferId).find(groupCheckboxItem).eq(i).is(':checked')) {
                        var checkboxItemId = $(transferId).find(groupCheckboxItem).eq(i).attr("id");
                        var checkboxItemArray = checkboxItemId.split("_");
                        var groupIdIndex = checkboxItemArray[1];
                        var idIndex = checkboxItemArray[3];
                        var val = $(transferId).find(groupCheckboxName).eq(i).text();
                        var value = $(transferId).find(groupCheckboxItem).eq(i).val();
                        $(transferId).find(transferDoubleGroupListLiUlLi).eq(i).css('display', 'none');
                        listHtmlStr = listHtmlStr + '<li class="transfer-double-selected-list-li transfer-double-selected-list-li-' + currentTimeStr + ' .clearfix">' +
                            '<div class="checkbox-group">' +
                            '<input type="checkbox" value="' + value + '" class="checkbox-normal checkbox-selected-item-' + currentTimeStr + '" id="group_' + groupIdIndex + '_selectedCheckbox_' + idIndex + '_' + currentTimeStr + '">' +
                            '<label class="checkbox-selected-name-' + currentTimeStr + '" for="group_' + groupIdIndex + '_selectedCheckbox_' + idIndex + '_' + currentTimeStr + '">' + val + '</label>' +
                            '</div>' +
                            '</li>'
                        selectedItemNum = selectedItemNum + 1;
                    }
                }
                for (var j = 0; j < $(transferId).find(groupSelectAll).length; j++) {
                    if ($(transferId).find(groupSelectAll).eq(j).is(":checked")) {
                        $(transferId).find(groupSelectAll).eq(j).prop("disabled", "disabled");
                    }
                }
                $(transferId).find(groupTotalNum).empty();
                // 计算左侧总数
                new_group_total_num = total_group_num - selectedItemNum;
                // 计算右侧总数
                selected_total_num = selectedItemNum;
                var new_total_num_str = new_group_total_num + " Items";
                // 左侧数量
                $(transferId).find(groupTotalNum).append(new_total_num_str);
                // 右侧数量
                $(transferId).find(selectedTotalNum).text(selected_total_num + " Items");
                if (new_group_total_num == 0) {
                    $(groupsSelectAllId).prop("checked", true);
                    $(groupsSelectAllId).prop("disabled", "disabled");
                }
            } else {
                // 未选中项
                for (var i = 0; i < $(transferId).find(checkboxItem).length; i++) {
                    if ($(transferId).find(checkboxItem).eq(i).is(':checked')) {
                        var checkboxItemId = $(transferId).find(checkboxItem).eq(i).attr("id");
                        var idIndex = checkboxItemId.split("_")[1];
                        var val = $(transferId).find(checkboxName).eq(i).text();
                        var value = $(transferId).find(checkboxItem).eq(i).val();
                        $(transferId).find(transferDoubleListLi).eq(i).css('display', 'none');
                        listHtmlStr = listHtmlStr + '<li class="transfer-double-selected-list-li  transfer-double-selected-list-li-' + currentTimeStr + ' .clearfix">' +
                            '<div class="checkbox-group">' +
                            '<input type="checkbox" value="' + value + '" class="checkbox-normal checkbox-selected-item-' + currentTimeStr + '" id="selectedCheckbox_' + idIndex + '_' + currentTimeStr + '">' +
                            '<label class="checkbox-selected-name-' + currentTimeStr + '" for="selectedCheckbox_' + idIndex + '_' + currentTimeStr + '">' + val + '</label>' +
                            '</div>' +
                            '</li>';
                        selectedItemNum = selectedItemNum + 1;
                    }
                }
                $(transferId).find(totalNum).empty();
                // 计算新的左侧总数
                new_total_num = total_num - selectedItemNum;
                // 计算右侧总数
                selected_total_num = selectedItemNum;
                var new_total_num_str = new_total_num + " Items";
                // 左侧数量
                $(transferId).find(totalNum).append(new_total_num_str);
                // 右侧数量
                $(transferId).find(selectedTotalNum).text(selected_total_num + " Items");
                if (new_total_num == 0) {
                    $(selectAllId).prop("checked", true);
                    $(selectAllId).prop("disabled", "disabled");
                }
            }
            $(addSelected).removeClass("btn-arrow-active");
            $(transferId).find(transferDoubleSelectedListUl).empty();
            $(transferId).find(transferDoubleSelectedListUl).append(listHtmlStr);
            // 数据变化触发回调
            callable.call(this, getSelected(), getSelectedName());
        });

        /**
         * 删除选中项，回到左侧
         */
        $(deleteSelected).on("click", function () {
            var deleteItemNum = 0;
            // 分组
            if ($(transferId).find(tabContentFirst).css("display") != "none") {
                for (var i = 0; i < $(transferId).find(checkboxSelectedItem).length;) {
                    if ($(transferId).find(checkboxSelectedItem).eq(i).is(':checked')) {
                        var checkboxSelectedItemId = $(transferId).find(checkboxSelectedItem).eq(i).attr("id");
                        var groupItemIdArray = checkboxSelectedItemId.split("_")
                        var groupId = groupItemIdArray[1];
                        var idIndex = groupItemIdArray[3];
                        $(transferId).find(transferDoubleSelectedListLi).eq(i).remove();
                        $(transferId).find("#group_" + groupId + "_" + currentTimeStr).prop("checked", false);
                        $(transferId).find("#group_" + groupId + "_" + currentTimeStr).removeAttr("disabled");
                        $(transferId).find("#group_" + groupId + "_checkbox_" + idIndex + "_" + currentTimeStr).prop("checked", false);
                        $(transferId).find("#group_" + groupId + "_checkbox_" + idIndex + "_" + currentTimeStr).parent().parent().css('display', 'block');
                        deleteItemNum = deleteItemNum + 1;
                    } else {
                        i++;
                    }
                }
                $(transferId).find(groupTotalNum).empty();
                // 计算左侧总数
                new_group_total_num = new_group_total_num + deleteItemNum;
                // 计算右侧总数
                selected_total_num -= deleteItemNum;
                var new_total_num_str = new_group_total_num + " Items";
                // 左侧总数
                $(transferId).find(groupTotalNum).append(new_total_num_str);
                // 右侧总数
                $(transferId).find(selectedTotalNum).text(selected_total_num + " Items");
                if ($(groupsSelectAllId).is(':checked')) {
                    $(groupsSelectAllId).prop("checked", false);
                    $(groupsSelectAllId).removeAttr("disabled");
                }
            } else {
                // 未选中项
                for (var i = 0; i < $(transferId).find(checkboxSelectedItem).length;) {
                    if ($(transferId).find(checkboxSelectedItem).eq(i).is(':checked')) {
                        var checkboxSelectedItemId = $(transferId).find(checkboxSelectedItem).eq(i).attr("id");
                        var idIndex = checkboxSelectedItemId.split("_")[1];
                        var val = $(transferId).find(checkboxSelectedName).eq(i).text();
                        $(transferId).find(transferDoubleSelectedListLi).eq(i).remove();
                        $(transferId).find(checkboxItem).eq(idIndex).prop("checked", false);
                        $(transferId).find(transferDoubleListLi).eq(idIndex).css('display', 'block');
                        deleteItemNum = deleteItemNum + 1;
                    } else {
                        i++;
                    }
                }
                $(transferId).find(totalNum).empty();
                // 计算左侧总数
                new_total_num = new_total_num + deleteItemNum;
                // 计算右侧总数
                selected_total_num -= deleteItemNum;
                var new_total_num_str = new_total_num + " Items";
                // 左侧总数
                $(transferId).find(totalNum).append(new_total_num_str);
                // 右侧总数
                $(transferId).find(selectedTotalNum).text(selected_total_num + " Items");
                if ($(selectAllId).is(':checked')) {
                    $(selectAllId).prop("checked", false);
                    $(selectAllId).removeAttr("disabled");
                }
            }
            $(deleteSelected).removeClass("btn-arrow-active");
            // 数据变化触发回调
            callable.call(this, getSelected(), getSelectedName());
        });

        /**
         * 左侧模糊查询
         */
        $(listSearchId).on("keyup", function () {
            // 只要输入就显示列表框
            $(transferId).find(transferDoubleListUl).css('display', 'block');
            // 如果什么都没填，保持全部显示状态
            if ($(listSearchId).val() == "") {
                for (var i = 0; i < $(transferId).find(checkboxItem).length; i++) {
                    if (!$(transferId).find(checkboxItem).eq(i).is(':checked')) {
                        $(transferId).find(transferDoubleListLi).eq(i).css('display', 'block');
                    }
                }
                return;
            }

            // 如果填了，先将所有的选项隐藏
            $(transferId).find(transferDoubleListLi).css('display', 'none');

            for (var j = 0; j < $(transferId).find(transferDoubleListLi).length; j++) {
                // 模糊匹配，将所有匹配项显示
                if (!$(transferId).find(checkboxItem).eq(j).is(':checked')
                    && $(transferId).find(transferDoubleListLi).eq(j).text()
                        .substr(0, $(listSearchId).val().length).toLowerCase() == $(listSearchId).val().toLowerCase()) {
                    $(transferId).find(transferDoubleListLi).eq(j).css('display', 'block');
                }
            }
        });

        /**
         * 左侧分组模糊查询
         */
        $(groupListSearchId).on("keyup", function () {
            // 只要输入就显示列表框
            $(transferId).find(transferDoubleGroupListUl).css('display', 'block');
            // 如果什么都没填，保持全部显示状态
            if ($(groupListSearchId).val() == "") {
                for (var i = 0; i < $(transferId).find(groupCheckboxItem).length; i++) {
                    if (!$(transferId).find(checkboxItem).eq(i).is(':checked')) {
                        // 分组 li 改为显示
                        $(transferId).find(transferDoubleGroupListLiUlLi).eq(i).parent().parent().css('display', 'block');
                        // 分组下每个 li 改为显示
                        $(transferId).find(transferDoubleGroupListLiUlLi).eq(i).css('display', 'block');
                    }
                }
                return;
            }

            // 如果填了，先将所有的选项隐藏
            $(transferId).find(transferDoubleGroupListLi).css('display', 'none');
            $(transferId).find(transferDoubleGroupListLiUlLi).css('display', 'none');

            for (var j = 0; j < $(transferId).find(transferDoubleGroupListLiUlLi).length; j++) {
                // 模糊匹配，将所有匹配项显示
                if (!$(transferId).find(groupCheckboxItem).eq(j).is(':checked')
                    && $(transferId).find(transferDoubleGroupListLiUlLi).eq(j).text()
                        .substr(0, $(groupListSearchId).val().length).toLowerCase() == $(groupListSearchId).val().toLowerCase()) {
                    // 分组 li 改为显示
                    $(transferId).find(transferDoubleGroupListLiUlLi).eq(j).parent().parent().css('display', 'block');
                    $(transferId).find(transferDoubleGroupListLiUlLi).eq(j).css('display', 'block');
                }
            }
        });

        /**
         * 右侧模糊查询
         */
        $(selectedListSearchId).keyup(function () {
            // 只要输入就显示列表框
            $(transferId).find(transferDoubleSelectedListUl).css('display', 'block');

            // 如果什么都没填,保持全部显示状态
            if ($(selectedListSearchId).val() == "") {
                $(transferId).find(transferDoubleSelectedListLi).css('display', 'block');
                return;
            }
            $(transferId).find(transferDoubleSelectedListLi).css('display', 'none');

            for (var i = 0; i < $(transferId).find(transferDoubleSelectedListLi).length; i++) {
                // 模糊匹配，将所有匹配项显示
                if ($(transferId).find(transferDoubleSelectedListLi).eq(i).text()
                        .substr(0, $(selectedListSearchId).val().length).toLowerCase() == $(selectedListSearchId).val().toLowerCase()) {
                    $(transferId).find(transferDoubleSelectedListLi).eq(i).css('display', 'block');
                }
            }
        });
    }

    /**
     * 左侧列表渲染
     * @param currentTimeStr
     * @param data
     * @returns {string}
     */
    function generateLeftList(currentTimeStr, data, itemName, valueName) {
        var listHtmlStr = "";
        for (var i = 0; i < data.length; i++) {
            listHtmlStr = listHtmlStr +
                '<li class="transfer-double-list-li transfer-double-list-li-' + currentTimeStr + '">' +
                '<div class="checkbox-group">' +
                '<input type="checkbox" value="' + data[i][valueName] + '" class="checkbox-normal checkbox-item-' + currentTimeStr + '" id="itemCheckbox_' + i + '_' + currentTimeStr + '">' +
                '<label class="checkbox-name-' + currentTimeStr + '" for="itemCheckbox_' + i + '_' + currentTimeStr + '">' + data[i][itemName] + '</label>' +
                '</div>' +
                '</li>'
        }
        return listHtmlStr;
    }

    /**
     * 左侧分组列表渲染
     * @param currentTimeStr
     * @param data
     * @returns {string}
     */
    function generateLeftGroupList(currentTimeStr, data, itemName, groupListName, groupItemName, valueName) {
        var listHtmlStr = "";
        for (var i = 0; i < data.length; i++) {
            listHtmlStr = listHtmlStr +
                '<li class="transfer-double-group-list-li transfer-double-group-list-li-' + currentTimeStr + '">'
                + '<div class="checkbox-group">' +
                '<input type="checkbox" class="checkbox-normal group-select-all-' + currentTimeStr + '" id="group_' + i + '_' + currentTimeStr + '">' +
                '<label for="group_' + i + '_' + currentTimeStr + '" class="group-name-' + currentTimeStr + '">' + data[i][groupItemName] + '</label>' +
                '</div>';
            if (data[i][groupListName].length > 0) {
                listHtmlStr = listHtmlStr + '<ul class="transfer-double-group-list-li-ul transfer-double-group-list-li-ul-' + currentTimeStr + '">'
                for (var j = 0; j < data[i][groupListName].length; j++) {
                    listHtmlStr = listHtmlStr + '<li class="transfer-double-group-list-li-ul-li transfer-double-group-list-li-ul-li-' + currentTimeStr + '">' +
                        '<div class="checkbox-group">' +
                        '<input type="checkbox" value="' + data[i][groupListName][j][valueName] + '" class="checkbox-normal group-checkbox-item-' + currentTimeStr + ' belongs-group-' + i + '-' + currentTimeStr + '" id="group_' + i + '_checkbox_' + j + '_' + currentTimeStr + '">' +
                        '<label for="group_' + i + '_checkbox_' + j + '_' + currentTimeStr + '" class="group-checkbox-name-' + currentTimeStr + '">' + data[i][groupListName][j][itemName] + '</label>' +
                        '</div>' +
                        '</li>';
                }
                listHtmlStr = listHtmlStr + '</ul>'
            } else {
                listHtmlStr = listHtmlStr + '</li>';
            }
            listHtmlStr = listHtmlStr + '</li>';
        }
        return listHtmlStr;
    }

    /**
     * 获取分组中项个数
     * @param data
     * @returns {number}
     */
    function getGroupNum(data, groupListName) {
        var total_group_num = 0;
        for (var i = 0; i < data.length; i++) {
            var groupData = data[i][groupListName];
            if (groupData.length > 0) {
                total_group_num = total_group_num + groupData.length;
            }
        }
        return total_group_num;
    }


    /**
     * 返回选中的项目 value 数组
     * @returns {Array}
     */
    function getSelected() {
        // 穿梭框
        var transferId = "#transfer_double_" + inputId;
        var selected = [];
        var transferDoubleSelectedListLi = ".transfer-double-selected-list-li-" + currentTimeStr;

        for (var i = 0; i < $(transferId).find(transferDoubleSelectedListLi).length; i++) {
            // 模糊匹配，将所有匹配项显示
            var value = $(transferId).find(transferDoubleSelectedListLi).eq(i).find(".checkbox-group").find("input").val();
            selected.push(value);
        }
        return selected;
    }

    /**
     * 返回选中的项目名称数组
     * @returns {Array}
     */
    function getSelectedName() {
        // 穿梭框
        var transferId = "#transfer_double_" + inputId;
        var selected = [];
        var transferDoubleSelectedListLi = ".transfer-double-selected-list-li-" + currentTimeStr;

        for (var i = 0; i < $(transferId).find(transferDoubleSelectedListLi).length; i++) {
            // 模糊匹配，将所有匹配项显示
            var value = $(transferId).find(transferDoubleSelectedListLi).eq(i).find(".checkbox-group").find("label").text();
            selected.push(value);
        }
        return selected;
    }

    /**
     * 渲染穿梭框
     * @param inputId
     * @param currentTimeStr
     * @returns {string}
     */
    function generateTransfer(inputId, currentTimeStr) {
        var htmlStr =
            '<div class="transfer-double" id="transfer_double_' + inputId + '">'
            + '<div class="transfer-double-header"></div>'
            + '<div class="transfer-double-content clearfix">'
            + '<div class="transfer-double-content-left">'
            + '<div class="transfer-double-content-tabs">'
            + '<div class="tab-item-name tab-item-name-' + currentTimeStr + ' tab-active">Items</div>'
            + '</div>'

            + '<div class="transfer-double-list transfer-double-list-' + currentTimeStr + ' tab-content-first-' + currentTimeStr + '">'
            + '<div class="transfer-double-list-header">'
            + '<div class="transfer-double-list-search">'
            + '<input class="transfer-double-list-search-input" type="text" id="groupListSearch_' + currentTimeStr + '" placeholder="Search" value="" />'
            + '</div>'
            + '</div>'
            + '<div class="transfer-double-list-content">'
            + '<div class="transfer-double-list-main">'
            + '<ul class="transfer-double-group-list-ul transfer-double-group-list-ul-' + currentTimeStr + '">'
            + '</ul>'
            + '</div>'
            + '</div>'
            + '<div class="transfer-double-list-footer">'
            + '<div class="checkbox-group">'
            + '<input type="checkbox" class="checkbox-normal" id="groupsSelectAll_' + currentTimeStr + '"><label for="groupsSelectAll_' + currentTimeStr + '" class="group_total_num_' + currentTimeStr + '"></label>'
            + '</div>'
            + '</div>'
            + '</div>'

            + '<div class="transfer-double-list transfer-double-list-' + currentTimeStr + ' tab-content-active">'
            + '<div class="transfer-double-list-header">'
            + '<div class="transfer-double-list-search">'
            + '<input class="transfer-double-list-search-input" type="text" id="listSearch_' + currentTimeStr + '" placeholder="Search Column" value="" />'
            + '</div>'
            + '</div>'
            + '<div class="transfer-double-list-content">'
            + '<div class="transfer-double-list-main">'
            + '<ul class="transfer-double-list-ul transfer-double-list-ul-' + currentTimeStr + '">'
            + '</ul>'
            + '</div>'
            + '</div>'
            + '<div class="transfer-double-list-footer">'
            + '<div class="checkbox-group">'
            + '<input type="checkbox" class="checkbox-normal" id="selectAll_' + currentTimeStr + '"><label for="selectAll_' + currentTimeStr + '" class="total_num_' + currentTimeStr + '"></label>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>'

            + '<div class="transfer-double-content-middle">'
            + '<div class="btn-select-arrow" id="add_selected_' + currentTimeStr + '"><i class="iconfont icon-forward"></i></div>'
            + '<div class="btn-select-arrow" id="delete_selected_' + currentTimeStr + '"><i class="iconfont icon-back"></i></div>'
            + '</div>'
            + '<div class="transfer-double-content-right">'
            + '<div class="transfer-double-content-param">'
            + '<div class="param-item">Selected</div>'
            + '</div>'
            + '<div class="transfer-double-selected-list">'
            + '<div class="transfer-double-selected-list-header">'
            + '<div class="transfer-double-selected-list-search">'
            + '<input class="transfer-double-selected-list-search-input" type="text" id="selectedListSearch_' + currentTimeStr + '" placeholder="Search" value="" />'
            + '</div>'
            + '</div>'
            + '<div class="transfer-double-selected-list-content">'
            + '<div class="transfer-double-selected-list-main">'
            + '<ul class="transfer-double-selected-list-ul transfer-double-selected-list-ul-' + currentTimeStr + '">'
            + '</ul>'
            + '</div>'
            + '</div>'
            + '<div class="transfer-double-list-footer">'
            + '<label class="selected_total_num_' + currentTimeStr + '">0 Item</label>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '<div class="transfer-double-footer">'
            + '</div>'
            + '</div>';
        return htmlStr;
    }

    return {
        transfer: transfer
    }
})($);

!function(i){var e={delimiter:",",divideThousand:!0,delimiterRegExp:/[\.\,\s]/g},n=i.fn.val;i.fn.val=function(i){var e=this.data("divided");return"undefined"==typeof i?e?e.value:n.call(this):e?n.call(this,i).change():n.call(this,i)},i.fn.divide=function(n){function t(i){return!i.is("input, textarea")}function a(i){return!isNaN(i)}function d(i){if(i=i.replace(options.delimiterRegExp,""),!a(i)&&i.length>0)return console.warn(i+" is not a number"),-1;for(var e="",n=i.length;n>3;){if(4==i.length){e=(options.divideThousand?options.delimiter:"")+i.substring(1),n=1;break}n-=3,e=options.delimiter+i.substring(n,n+3)+e}return i.substring(0,n)+e}return options=i.extend({},e,n),this.each(function(){var e=i(this);!t(e)&&e.data("divided")&&e.unbind(".divide")}),this.each(function(){var e=i(this);if(t(e)){var n=d(e.text());return void(n!=-1&&e.text(n))}e.bind("input.divide change.divide",function(){var i=this.value.replace(options.delimiterRegExp,""),n=d(i),t=e.data("divided");if(n!=-1){if(!t){t={};var a=e.attr("name");void 0!=a?(e.attr("name",""),e.parent().append("<input type='hidden' name='"+a+"'>"),t.name=a):t.name=null}t.value=i,this.value=n,e.data("divided",t),t.name&&e.parent().children("input[name="+t.name+"]").val(i)}}),e.change()}),this}}(jQuery);
// https://d3js.org v5.9.1 Copyright 2019 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){var e;return 1===t.length&&(e=t,t=function(t,r){return n(e(t),r)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}var r=e(n),i=r.right,o=r.left;function a(t,n){return[t,n]}function u(t){return null===t?NaN:+t}function c(t,n){var e,r,i=t.length,o=0,a=-1,c=0,f=0;if(null==n)for(;++a<i;)isNaN(e=u(t[a]))||(f+=(r=e-c)*(e-(c+=r/++o)));else for(;++a<i;)isNaN(e=u(n(t[a],a,t)))||(f+=(r=e-c)*(e-(c+=r/++o)));if(o>1)return f/(o-1)}function f(t,n){var e=c(t,n);return e?Math.sqrt(e):e}function s(t,n){var e,r,i,o=t.length,a=-1;if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}var l=Array.prototype,h=l.slice,d=l.map;function p(t){return function(){return t}}function v(t){return t}function g(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}var y=Math.sqrt(50),_=Math.sqrt(10),b=Math.sqrt(2);function m(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=x(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a;return r&&o.reverse(),o}function x(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=y?10:o>=_?5:o>=b?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=y?10:o>=_?5:o>=b?2:1)}function w(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=y?i*=10:o>=_?i*=5:o>=b&&(i*=2),n<t?-i:i}function M(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function N(t,n,e){if(null==e&&(e=u),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t);return a+(+e(t[o+1],o+1,t)-a)*(i-o)}}function A(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r}function T(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}function S(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function k(t){if(!(i=t.length))return[];for(var n=-1,e=S(t,E),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function E(t){return t.length}var C=Array.prototype.slice;function P(t){return t}var z=1,R=2,D=3,q=4,L=1e-6;function U(t){return"translate("+(t+.5)+",0)"}function O(t){return"translate(0,"+(t+.5)+")"}function B(){return!this.__axis}function Y(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,c=t===z||t===q?-1:1,f=t===q||t===R?"x":"y",s=t===z||t===D?U:O;function l(l){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,d=null==i?n.tickFormat?n.tickFormat.apply(n,e):P:i,p=Math.max(o,0)+u,v=n.range(),g=+v[0]+.5,y=+v[v.length-1]+.5,_=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),b=l.selection?l.selection():l,m=b.selectAll(".domain").data([null]),x=b.selectAll(".tick").data(h,n).order(),w=x.exit(),M=x.enter().append("g").attr("class","tick"),N=x.select("line"),A=x.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(M),N=N.merge(M.append("line").attr("stroke","currentColor").attr(f+"2",c*o)),A=A.merge(M.append("text").attr("fill","currentColor").attr(f,c*p).attr("dy",t===z?"0em":t===D?"0.71em":"0.32em")),l!==b&&(m=m.transition(l),x=x.transition(l),N=N.transition(l),A=A.transition(l),w=w.transition(l).attr("opacity",L).attr("transform",function(t){return isFinite(t=_(t))?s(t):this.getAttribute("transform")}),M.attr("opacity",L).attr("transform",function(t){var n=this.parentNode.__axis;return s(n&&isFinite(n=n(t))?n:_(t))})),w.remove(),m.attr("d",t===q||t==R?a?"M"+c*a+","+g+"H0.5V"+y+"H"+c*a:"M0.5,"+g+"V"+y:a?"M"+g+","+c*a+"V0.5H"+y+"V"+c*a:"M"+g+",0.5H"+y),x.attr("opacity",1).attr("transform",function(t){return s(_(t))}),N.attr(f+"2",c*o),A.attr(f,c*p).text(d),b.filter(B).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===R?"start":t===q?"end":"middle"),b.each(function(){this.__axis=_})}return l.scale=function(t){return arguments.length?(n=t,l):n},l.ticks=function(){return e=C.call(arguments),l},l.tickArguments=function(t){return arguments.length?(e=null==t?[]:C.call(t),l):e.slice()},l.tickValues=function(t){return arguments.length?(r=null==t?null:C.call(t),l):r&&r.slice()},l.tickFormat=function(t){return arguments.length?(i=t,l):i},l.tickSize=function(t){return arguments.length?(o=a=+t,l):o},l.tickSizeInner=function(t){return arguments.length?(o=+t,l):o},l.tickSizeOuter=function(t){return arguments.length?(a=+t,l):a},l.tickPadding=function(t){return arguments.length?(u=+t,l):u},l}var F={value:function(){}};function I(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new j(r)}function j(t){this._=t}function H(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function X(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=F,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}j.prototype=I.prototype={constructor:j,on:function(t,n){var e,r,i=this._,o=(r=i,(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");if(e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})),a=-1,u=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++a<u;)if(e=(t=o[a]).type)i[e]=X(i[e],t.name,n);else if(null==n)for(e in i)i[e]=X(i[e],t.name,null);return this}for(;++a<u;)if((e=(t=o[a]).type)&&(e=H(i[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new j(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var G="http://www.w3.org/1999/xhtml",V={svg:"http://www.w3.org/2000/svg",xhtml:G,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function $(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),V.hasOwnProperty(n)?{space:V[n],local:t}:t}function W(t){var n=$(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===G&&n.documentElement.namespaceURI===G?n.createElement(t):n.createElementNS(e,t)}})(n)}function Z(){}function Q(t){return null==t?Z:function(){return this.querySelector(t)}}function J(){return[]}function K(t){return null==t?J:function(){return this.querySelectorAll(t)}}function tt(t){return function(){return this.matches(t)}}function nt(t){return new Array(t.length)}function et(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}et.prototype={constructor:et,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var rt="$";function it(t,n,e,r,i,o){for(var a,u=0,c=n.length,f=o.length;u<f;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new et(t,o[u]);for(;u<c;++u)(a=n[u])&&(i[u]=a)}function ot(t,n,e,r,i,o,a){var u,c,f,s={},l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(c=n[u])&&(d[u]=f=rt+a.call(c,c.__data__,u,n),f in s?i[u]=c:s[f]=c);for(u=0;u<h;++u)(c=s[f=rt+a.call(t,o[u],u,o)])?(r[u]=c,c.__data__=o[u],s[f]=null):e[u]=new et(t,o[u]);for(u=0;u<l;++u)(c=n[u])&&s[d[u]]===c&&(i[u]=c)}function at(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function ut(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ct(t,n){return t.style.getPropertyValue(n)||ut(t).getComputedStyle(t,null).getPropertyValue(n)}function ft(t){return t.trim().split(/^|\s+/)}function st(t){return t.classList||new lt(t)}function lt(t){this._node=t,this._names=ft(t.getAttribute("class")||"")}function ht(t,n){for(var e=st(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function dt(t,n){for(var e=st(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function pt(){this.textContent=""}function vt(){this.innerHTML=""}function gt(){this.nextSibling&&this.parentNode.appendChild(this)}function yt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function _t(){return null}function bt(){var t=this.parentNode;t&&t.removeChild(this)}function mt(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function xt(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}lt.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var wt={};(t.event=null,"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(wt={mouseenter:"mouseover",mouseleave:"mouseout"}));function Mt(t,n,e){return t=Nt(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function Nt(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function At(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function Tt(t,n,e){var r=wt.hasOwnProperty(t.type)?Mt:Nt;return function(i,o,a){var u,c=this.__on,f=r(n,o,a);if(c)for(var s=0,l=c.length;s<l;++s)if((u=c[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=f,u.capture=e),void(u.value=n);this.addEventListener(t.type,f,e),u={type:t.type,name:t.name,value:n,listener:f,capture:e},c?c.push(u):this.__on=[u]}}function St(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function kt(t,n,e){var r=ut(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var Et=[null];function Ct(t,n){this._groups=t,this._parents=n}function Pt(){return new Ct([[document.documentElement]],Et)}function zt(t){return"string"==typeof t?new Ct([[document.querySelector(t)]],[document.documentElement]):new Ct([[t]],Et)}Ct.prototype=Pt.prototype={constructor:Ct,select:function(t){"function"!=typeof t&&(t=Q(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],c=u.length,f=r[i]=new Array(c),s=0;s<c;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),f[s]=a);return new Ct(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=K(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],c=u.length,f=0;f<c;++f)(a=u[f])&&(r.push(t.call(a,a.__data__,f,u)),i.push(a));return new Ct(r,i)},filter:function(t){"function"!=typeof t&&(t=tt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Ct(r,this._parents)},data:function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e,r=n?ot:it,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var a=o.length,u=new Array(a),c=new Array(a),f=new Array(a),s=0;s<a;++s){var l=i[s],h=o[s],d=h.length,p=t.call(l,l&&l.__data__,s,i),v=p.length,g=c[s]=new Array(v),y=u[s]=new Array(v);r(l,h,g,y,f[s]=new Array(d),p,n);for(var _,b,m=0,x=0;m<v;++m)if(_=g[m]){for(m>=x&&(x=m+1);!(b=y[x])&&++x<v;);_._next=b||null}}return(u=new Ct(u,i))._enter=c,u._exit=f,u},enter:function(){return new Ct(this._enter||this._groups.map(nt),this._parents)},exit:function(){return new Ct(this._exit||this._groups.map(nt),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Ct(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=at);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],c=u.length,f=i[o]=new Array(c),s=0;s<c;++s)(a=u[s])&&(f[s]=a);f.sort(n)}return new Ct(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=$(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):ct(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=ft(t+"");if(arguments.length<2){for(var r=st(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?ht:dt)(this,t)}}:n?function(t){return function(){ht(this,t)}}:function(t){return function(){dt(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?pt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?vt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(gt)},lower:function(){return this.each(yt)},append:function(t){var n="function"==typeof t?t:W(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:W(t),r=null==n?_t:"function"==typeof n?n:Q(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(bt)},clone:function(t){return this.select(t?xt:mt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?Tt:At,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var c,f=0,s=u.length;f<s;++f)for(r=0,c=u[f];r<a;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return kt(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return kt(this,t,n)}})(t,n))}};var Rt=0;function Dt(){return new qt}function qt(){this._="@"+(++Rt).toString(36)}function Lt(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function Ut(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function Ot(t){var n=Lt();return n.changedTouches&&(n=n.changedTouches[0]),Ut(t,n)}function Bt(t,n,e){arguments.length<3&&(e=n,n=Lt().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Ut(t,r);return null}function Yt(){t.event.stopImmediatePropagation()}function Ft(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function It(t){var n=t.document.documentElement,e=zt(t).on("dragstart.drag",Ft,!0);"onselectstart"in n?e.on("selectstart.drag",Ft,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function jt(t,n){var e=t.document.documentElement,r=zt(t).on("dragstart.drag",null);n&&(r.on("click.drag",Ft,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function Ht(t){return function(){return t}}function Xt(t,n,e,r,i,o,a,u,c,f){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=c,this._=f}function Gt(){return!t.event.button}function Vt(){return this.parentNode}function $t(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Wt(){return"ontouchstart"in this}function Zt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Qt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Jt(){}qt.prototype=Dt.prototype={constructor:qt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},Xt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var Kt="\\s*([+-]?\\d+)\\s*",tn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",nn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",en=/^#([0-9a-f]{3})$/,rn=/^#([0-9a-f]{6})$/,on=new RegExp("^rgb\\("+[Kt,Kt,Kt]+"\\)$"),an=new RegExp("^rgb\\("+[nn,nn,nn]+"\\)$"),un=new RegExp("^rgba\\("+[Kt,Kt,Kt,tn]+"\\)$"),cn=new RegExp("^rgba\\("+[nn,nn,nn,tn]+"\\)$"),fn=new RegExp("^hsl\\("+[tn,nn,nn]+"\\)$"),sn=new RegExp("^hsla\\("+[tn,nn,nn,tn]+"\\)$"),ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function hn(t){var n;return t=(t+"").trim().toLowerCase(),(n=en.exec(t))?new yn((n=parseInt(n[1],16))>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):(n=rn.exec(t))?dn(parseInt(n[1],16)):(n=on.exec(t))?new yn(n[1],n[2],n[3],1):(n=an.exec(t))?new yn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=un.exec(t))?pn(n[1],n[2],n[3],n[4]):(n=cn.exec(t))?pn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=fn.exec(t))?bn(n[1],n[2]/100,n[3]/100,1):(n=sn.exec(t))?bn(n[1],n[2]/100,n[3]/100,n[4]):ln.hasOwnProperty(t)?dn(ln[t]):"transparent"===t?new yn(NaN,NaN,NaN,0):null}function dn(t){return new yn(t>>16&255,t>>8&255,255&t,1)}function pn(t,n,e,r){return r<=0&&(t=n=e=NaN),new yn(t,n,e,r)}function vn(t){return t instanceof Jt||(t=hn(t)),t?new yn((t=t.rgb()).r,t.g,t.b,t.opacity):new yn}function gn(t,n,e,r){return 1===arguments.length?vn(t):new yn(t,n,e,null==r?1:r)}function yn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function _n(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function bn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new xn(t,n,e,r)}function mn(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof xn)return new xn(t.h,t.s,t.l,t.opacity);if(t instanceof Jt||(t=hn(t)),!t)return new xn;if(t instanceof xn)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,c=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=c<.5?o+i:2-o-i,a*=60):u=c>0&&c<1?0:a,new xn(a,u,c,t.opacity)}(t):new xn(t,n,e,null==r?1:r)}function xn(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function wn(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Zt(Jt,hn,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),Zt(yn,gn,Qt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new yn(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new yn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+_n(this.r)+_n(this.g)+_n(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Zt(xn,mn,Qt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new xn(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new xn(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new yn(wn(t>=240?t-240:t+120,i,r),wn(t,i,r),wn(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Mn=Math.PI/180,Nn=180/Math.PI,An=.96422,Tn=1,Sn=.82521,kn=4/29,En=6/29,Cn=3*En*En,Pn=En*En*En;function zn(t){if(t instanceof Dn)return new Dn(t.l,t.a,t.b,t.opacity);if(t instanceof Fn){if(isNaN(t.h))return new Dn(t.l,0,0,t.opacity);var n=t.h*Mn;return new Dn(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof yn||(t=vn(t));var e,r,i=On(t.r),o=On(t.g),a=On(t.b),u=qn((.2225045*i+.7168786*o+.0606169*a)/Tn);return i===o&&o===a?e=r=u:(e=qn((.4360747*i+.3850649*o+.1430804*a)/An),r=qn((.0139322*i+.0971045*o+.7141733*a)/Sn)),new Dn(116*u-16,500*(e-u),200*(u-r),t.opacity)}function Rn(t,n,e,r){return 1===arguments.length?zn(t):new Dn(t,n,e,null==r?1:r)}function Dn(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function qn(t){return t>Pn?Math.pow(t,1/3):t/Cn+kn}function Ln(t){return t>En?t*t*t:Cn*(t-kn)}function Un(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function On(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Bn(t){if(t instanceof Fn)return new Fn(t.h,t.c,t.l,t.opacity);if(t instanceof Dn||(t=zn(t)),0===t.a&&0===t.b)return new Fn(NaN,0,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*Nn;return new Fn(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Yn(t,n,e,r){return 1===arguments.length?Bn(t):new Fn(t,n,e,null==r?1:r)}function Fn(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}Zt(Dn,Rn,Qt(Jt,{brighter:function(t){return new Dn(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Dn(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new yn(Un(3.1338561*(n=An*Ln(n))-1.6168667*(t=Tn*Ln(t))-.4906146*(e=Sn*Ln(e))),Un(-.9787684*n+1.9161415*t+.033454*e),Un(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Zt(Fn,Yn,Qt(Jt,{brighter:function(t){return new Fn(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Fn(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return zn(this).rgb()}}));var In=-.14861,jn=1.78277,Hn=-.29227,Xn=-.90649,Gn=1.97294,Vn=Gn*Xn,$n=Gn*jn,Wn=jn*Hn-Xn*In;function Zn(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof Qn)return new Qn(t.h,t.s,t.l,t.opacity);t instanceof yn||(t=vn(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(Wn*r+Vn*n-$n*e)/(Wn+Vn-$n),o=r-i,a=(Gn*(e-i)-Hn*o)/Xn,u=Math.sqrt(a*a+o*o)/(Gn*i*(1-i)),c=u?Math.atan2(a,o)*Nn-120:NaN;return new Qn(c<0?c+360:c,u,i,t.opacity)}(t):new Qn(t,n,e,null==r?1:r)}function Qn(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Jn(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function Kn(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return Jn((e-r/n)*n,a,i,o,u)}}function te(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return Jn((e-r/n)*n,i,o,a,u)}}function ne(t){return function(){return t}}function ee(t,n){return function(e){return t+e*n}}function re(t,n){var e=n-t;return e?ee(t,e>180||e<-180?e-360*Math.round(e/360):e):ne(isNaN(t)?n:t)}function ie(t){return 1==(t=+t)?oe:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):ne(isNaN(n)?e:n)}}function oe(t,n){var e=n-t;return e?ee(t,e):ne(isNaN(t)?n:t)}Zt(Qn,Zn,Qt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Qn(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Qn(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Mn,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new yn(255*(n+e*(In*r+jn*i)),255*(n+e*(Hn*r+Xn*i)),255*(n+e*(Gn*r)),this.opacity)}}));var ae=function t(n){var e=ie(n);function r(t,n){var r=e((t=gn(t)).r,(n=gn(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=oe(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function ue(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=gn(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var ce=ue(Kn),fe=ue(te);function se(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=ye(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function le(t,n){var e=new Date;return n-=t=+t,function(r){return e.setTime(t+n*r),e}}function he(t,n){return n-=t=+t,function(e){return t+n*e}}function de(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=ye(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var pe=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ve=new RegExp(pe.source,"g");function ge(t,n){var e,r,i,o=pe.lastIndex=ve.lastIndex=0,a=-1,u=[],c=[];for(t+="",n+="";(e=pe.exec(t))&&(r=ve.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,c.push({i:a,x:he(e,r)})),o=ve.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)u[(e=c[r]).i]=e.x(t);return u.join("")})}function ye(t,n){var e,r=typeof n;return null==n||"boolean"===r?ne(n):("number"===r?he:"string"===r?(e=hn(n))?(n=e,ae):ge:n instanceof hn?ae:n instanceof Date?le:Array.isArray(n)?se:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?de:he)(t,n)}function _e(t,n){return n-=t=+t,function(e){return Math.round(t+n*e)}}var be,me,xe,we,Me=180/Math.PI,Ne={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ae(t,n,e,r,i,o){var a,u,c;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,c/=u),t*r<n*e&&(t=-t,n=-n,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Me,skewX:Math.atan(c)*Me,scaleX:a,scaleY:u}}function Te(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],c=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var c=a.push("translate(",null,n,null,e);u.push({i:c-4,x:he(t,i)},{i:c-2,x:he(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,c),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:he(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,c),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:he(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,c),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:he(t,e)},{i:u-2,x:he(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,c),o=a=null,function(t){for(var n,e=-1,r=c.length;++e<r;)u[(n=c[e]).i]=n.x(t);return u.join("")}}}var Se=Te(function(t){return"none"===t?Ne:(be||(be=document.createElement("DIV"),me=document.documentElement,xe=document.defaultView),be.style.transform=t,t=xe.getComputedStyle(me.appendChild(be),null).getPropertyValue("transform"),me.removeChild(be),Ae(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),ke=Te(function(t){return null==t?Ne:(we||(we=document.createElementNS("http://www.w3.org/2000/svg","g")),we.setAttribute("transform",t),(t=we.transform.baseVal.consolidate())?Ae((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Ne)},", ",")",")"),Ee=Math.SQRT2,Ce=2,Pe=4,ze=1e-12;function Re(t){return((t=Math.exp(t))+1/t)/2}function De(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],c=n[1],f=n[2],s=u-i,l=c-o,h=s*s+l*l;if(h<ze)r=Math.log(f/a)/Ee,e=function(t){return[i+t*s,o+t*l,a*Math.exp(Ee*t*r)]};else{var d=Math.sqrt(h),p=(f*f-a*a+Pe*h)/(2*a*Ce*d),v=(f*f-a*a-Pe*h)/(2*f*Ce*d),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-g)/Ee,e=function(t){var n,e=t*r,u=Re(g),c=a/(Ce*d)*(u*(n=Ee*e+g,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(g));return[i+c*s,o+c*l,a*u/Re(Ee*e+g)]}}return e.duration=1e3*r,e}function qe(t){return function(n,e){var r=t((n=mn(n)).h,(e=mn(e)).h),i=oe(n.s,e.s),o=oe(n.l,e.l),a=oe(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Le=qe(re),Ue=qe(oe);function Oe(t){return function(n,e){var r=t((n=Yn(n)).h,(e=Yn(e)).h),i=oe(n.c,e.c),o=oe(n.l,e.l),a=oe(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Be=Oe(re),Ye=Oe(oe);function Fe(t){return function n(e){function r(n,r){var i=t((n=Zn(n)).h,(r=Zn(r)).h),o=oe(n.s,r.s),a=oe(n.l,r.l),u=oe(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}var Ie=Fe(re),je=Fe(oe);var He,Xe,Ge=0,Ve=0,$e=0,We=1e3,Ze=0,Qe=0,Je=0,Ke="object"==typeof performance&&performance.now?performance:Date,tr="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function nr(){return Qe||(tr(er),Qe=Ke.now()+Je)}function er(){Qe=0}function rr(){this._call=this._time=this._next=null}function ir(t,n,e){var r=new rr;return r.restart(t,n,e),r}function or(){nr(),++Ge;for(var t,n=He;n;)(t=Qe-n._time)>=0&&n._call.call(null,t),n=n._next;--Ge}function ar(){Qe=(Ze=Ke.now())+Je,Ge=Ve=0;try{or()}finally{Ge=0,function(){var t,n,e=He,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:He=n);Xe=t,cr(r)}(),Qe=0}}function ur(){var t=Ke.now(),n=t-Ze;n>We&&(Je-=n,Ze=t)}function cr(t){Ge||(Ve&&(Ve=clearTimeout(Ve)),t-Qe>24?(t<1/0&&(Ve=setTimeout(ar,t-Ke.now()-Je)),$e&&($e=clearInterval($e))):($e||(Ze=Ke.now(),$e=setInterval(ur,We)),Ge=1,tr(ar)))}function fr(t,n,e){var r=new rr;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}rr.prototype=ir.prototype={constructor:rr,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?nr():+e)+(null==n?0:+n),this._next||Xe===this||(Xe?Xe._next=this:He=this,Xe=this),this._call=t,this._time=e,cr()},stop:function(){this._call&&(this._call=null,this._time=1/0,cr())}};var sr=I("start","end","cancel","interrupt"),lr=[],hr=0,dr=1,pr=2,vr=3,gr=4,yr=5,_r=6;function br(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(c){var f,s,l,h;if(e.state!==dr)return u();for(f in i)if((h=i[f]).name===e.name){if(h.state===vr)return fr(o);h.state===gr?(h.state=_r,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[f]):+f<n&&(h.state=_r,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[f])}if(fr(function(){e.state===vr&&(e.state=gr,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=pr,e.on.call("start",t,t.__data__,e.index,e.group),e.state===pr){for(e.state=vr,r=new Array(l=e.tween.length),f=0,s=-1;f<l;++f)(h=e.tween[f].value.call(t,t.__data__,e.index,e.group))&&(r[++s]=h);r.length=s+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=yr,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);e.state===yr&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=_r,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=ir(function(t){e.state=dr,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:sr,tween:lr,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:hr})}function mr(t,n){var e=wr(t,n);if(e.state>hr)throw new Error("too late; already scheduled");return e}function xr(t,n){var e=wr(t,n);if(e.state>vr)throw new Error("too late; already running");return e}function wr(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Mr(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>pr&&e.state<yr,e.state=_r,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function Nr(t,n,e){var r=t._id;return t.each(function(){var t=xr(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return wr(t,r).value[n]}}function Ar(t,n){var e;return("number"==typeof n?he:n instanceof hn?ae:(e=hn(n))?(n=e,ae):ge)(t,n)}var Tr=Pt.prototype.constructor;function Sr(t){return function(){this.style.removeProperty(t)}}var kr=0;function Er(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Cr(t){return Pt().transition(t)}function Pr(){return++kr}var zr=Pt.prototype;function Rr(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Dr(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}Er.prototype=Cr.prototype={constructor:Er,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Q(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,c,f=r[a],s=f.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=f[h])&&(c=t.call(u,u.__data__,h,f))&&("__data__"in u&&(c.__data__=u.__data__),l[h]=c,br(l[h],n,e,h,l,wr(u,e)));return new Er(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=K(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var c,f=r[u],s=f.length,l=0;l<s;++l)if(c=f[l]){for(var h,d=t.call(c,c.__data__,l,f),p=wr(c,e),v=0,g=d.length;v<g;++v)(h=d[v])&&br(h,n,e,v,d,p);o.push(d),a.push(c)}return new Er(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=tt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Er(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Er(a,this._parents,this._name,this._id)},selection:function(){return new Tr(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Pr(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)if(a=u[f]){var s=wr(a,n);br(a,t,e,f,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new Er(r,this._parents,t,e)},call:zr.call,nodes:zr.nodes,node:zr.node,size:zr.size,empty:zr.empty,each:zr.each,on:function(t,n){var e=this._id;return arguments.length<2?wr(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?mr:xr;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=$(t),r="transform"===e?ke:Ar;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttribute(t))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttribute(t)}})(e,r,Nr(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}:function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}})(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=$(t);return this.tween(e,(r.local?function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n(e))}}(t,i)),e}return i._value=n,i}:function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n(e))}}(t,i)),e}return i._value=n,i})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?Se:Ar;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=ct(this,t),a=(this.style.removeProperty(t),ct(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,Sr(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var a=ct(this,t),u=e(this),c=u+"";return null==u&&(this.style.removeProperty(t),c=u=ct(this,t)),a===c?null:a===r&&c===i?o:(i=c,o=n(r=a,u))}}(t,r,Nr(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var c=xr(this,t),f=c.on,s=null==c.value[a]?o||(o=Sr(n)):void 0;f===e&&i===s||(r=(e=f).copy()).on(u,i=s),c.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var a=ct(this,t);return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n(r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(Nr(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",(t=this._id,function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}));var t},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=wr(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=xr(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=xr(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},c=0,f=i.length;c<f;++c)if(i[c].name===n){i[c]=u;break}c===f&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){mr(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){mr(this,t).delay=n}})(n,t)):wr(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){xr(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){xr(this,t).duration=n}})(n,t)):wr(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){xr(this,t).ease=n}}(n,t)):wr(this.node(),n).ease},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},c={value:function(){0==--i&&o()}};e.each(function(){var e=xr(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(c)),e.on=n})})}};var qr=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Lr=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Ur=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Or=Math.PI,Br=Or/2;function Yr(t){return(1-Math.cos(Or*t))/2}function Fr(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Ir(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var jr=4/11,Hr=6/11,Xr=8/11,Gr=.75,Vr=9/11,$r=10/11,Wr=.9375,Zr=21/22,Qr=63/64,Jr=1/jr/jr;function Kr(t){return(t=+t)<jr?Jr*t*t:t<Xr?Jr*(t-=Hr)*t+Gr:t<$r?Jr*(t-=Vr)*t+Wr:Jr*(t-=Zr)*t+Qr}var ti=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),ni=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),ei=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),ri=2*Math.PI,ii=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=ri);function i(t){return n*Math.pow(2,10*--t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*ri)},i.period=function(e){return t(n,e)},i}(1,.3),oi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=ri);function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*ri)},i.period=function(e){return t(n,e)},i}(1,.3),ai=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=ri);function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*ri)},i.period=function(e){return t(n,e)},i}(1,.3),ui={time:null,delay:0,duration:250,ease:Dr};function ci(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return ui.time=nr(),ui;return e}Pt.prototype.interrupt=function(t){return this.each(function(){Mr(this,t)})},Pt.prototype.transition=function(t){var n,e;t instanceof Er?(n=t._id,t=t._name):(n=Pr(),(e=ui).time=nr(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)(a=u[f])&&br(a,t,n,f,u,e||ci(a,n));return new Er(r,this._parents,t,n)};var fi=[null];function si(t){return function(){return t}}function li(t,n,e){this.target=t,this.type=n,this.selection=e}function hi(){t.event.stopImmediatePropagation()}function di(){t.event.preventDefault(),t.event.stopImmediatePropagation()}var pi={name:"drag"},vi={name:"space"},gi={name:"handle"},yi={name:"center"},_i={name:"x",handles:["e","w"].map(Ti),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},bi={name:"y",handles:["n","s"].map(Ti),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},mi={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(Ti),input:function(t){return t},output:function(t){return t}},xi={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},wi={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},Mi={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Ni={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Ai={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function Ti(t){return{type:t}}function Si(){return!t.event.button}function ki(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Ei(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Ci(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Pi(n){var e,r=ki,i=Si,o=I(u,"start","brush","end"),a=6;function u(t){var e=t.property("__brush",h).selectAll(".overlay").data([Ti("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",xi.overlay).merge(e).each(function(){var t=Ei(this).extent;zt(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Ti("selection")]).enter().append("rect").attr("class","selection").attr("cursor",xi.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=t.selectAll(".handle").data(n.handles,function(t){return t.type});r.exit().remove(),r.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return xi[t.type]}),t.each(c).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",l)}function c(){var t=zt(this),n=Ei(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-a/2:n[0][0]-a/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-a/2:n[0][1]-a/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+a:a}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+a:a})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function f(t,n){return t.__brush.emitter||new s(t,n)}function s(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function l(){if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return di()}else if(e)return;if(i.apply(this,arguments)){var r,o,a,u,s,l,h,d,p,v,g,y,_,b=this,m=t.event.target.__data__.type,x="selection"===(t.event.metaKey?m="overlay":m)?pi:t.event.altKey?yi:gi,w=n===bi?null:Ni[m],M=n===_i?null:Ai[m],N=Ei(b),A=N.extent,T=N.selection,S=A[0][0],k=A[0][1],E=A[1][0],C=A[1][1],P=w&&M&&t.event.shiftKey,z=Ot(b),R=z,D=f(b,arguments).beforestart();"overlay"===m?N.selection=T=[[r=n===bi?S:z[0],a=n===_i?k:z[1]],[s=n===bi?E:r,h=n===_i?C:a]]:(r=T[0][0],a=T[0][1],s=T[1][0],h=T[1][1]),o=r,u=a,l=s,d=h;var q=zt(b).attr("pointer-events","none"),L=q.selectAll(".overlay").attr("cursor",xi[m]);if(t.event.touches)q.on("touchmove.brush",O,!0).on("touchend.brush touchcancel.brush",Y,!0);else{var U=zt(t.event.view).on("keydown.brush",function(){switch(t.event.keyCode){case 16:P=w&&M;break;case 18:x===gi&&(w&&(s=l-p*w,r=o+p*w),M&&(h=d-v*M,a=u+v*M),x=yi,B());break;case 32:x!==gi&&x!==yi||(w<0?s=l-p:w>0&&(r=o-p),M<0?h=d-v:M>0&&(a=u-v),x=vi,L.attr("cursor",xi.selection),B());break;default:return}di()},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:P&&(y=_=P=!1,B());break;case 18:x===yi&&(w<0?s=l:w>0&&(r=o),M<0?h=d:M>0&&(a=u),x=gi,B());break;case 32:x===vi&&(t.event.altKey?(w&&(s=l-p*w,r=o+p*w),M&&(h=d-v*M,a=u+v*M),x=yi):(w<0?s=l:w>0&&(r=o),M<0?h=d:M>0&&(a=u),x=gi),L.attr("cursor",xi[m]),B());break;default:return}di()},!0).on("mousemove.brush",O,!0).on("mouseup.brush",Y,!0);It(t.event.view)}hi(),Mr(b),c.call(b),D.start()}function O(){var t=Ot(b);!P||y||_||(Math.abs(t[0]-R[0])>Math.abs(t[1]-R[1])?_=!0:y=!0),R=t,g=!0,di(),B()}function B(){var t;switch(p=R[0]-z[0],v=R[1]-z[1],x){case vi:case pi:w&&(p=Math.max(S-r,Math.min(E-s,p)),o=r+p,l=s+p),M&&(v=Math.max(k-a,Math.min(C-h,v)),u=a+v,d=h+v);break;case gi:w<0?(p=Math.max(S-r,Math.min(E-r,p)),o=r+p,l=s):w>0&&(p=Math.max(S-s,Math.min(E-s,p)),o=r,l=s+p),M<0?(v=Math.max(k-a,Math.min(C-a,v)),u=a+v,d=h):M>0&&(v=Math.max(k-h,Math.min(C-h,v)),u=a,d=h+v);break;case yi:w&&(o=Math.max(S,Math.min(E,r-p*w)),l=Math.max(S,Math.min(E,s+p*w))),M&&(u=Math.max(k,Math.min(C,a-v*M)),d=Math.max(k,Math.min(C,h+v*M)))}l<o&&(w*=-1,t=r,r=s,s=t,t=o,o=l,l=t,m in wi&&L.attr("cursor",xi[m=wi[m]])),d<u&&(M*=-1,t=a,a=h,h=t,t=u,u=d,d=t,m in Mi&&L.attr("cursor",xi[m=Mi[m]])),N.selection&&(T=N.selection),y&&(o=T[0][0],l=T[1][0]),_&&(u=T[0][1],d=T[1][1]),T[0][0]===o&&T[0][1]===u&&T[1][0]===l&&T[1][1]===d||(N.selection=[[o,u],[l,d]],c.call(b),D.brush())}function Y(){if(hi(),t.event.touches){if(t.event.touches.length)return;e&&clearTimeout(e),e=setTimeout(function(){e=null},500),q.on("touchmove.brush touchend.brush touchcancel.brush",null)}else jt(t.event.view,g),U.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);q.attr("pointer-events","all"),L.attr("cursor",xi.overlay),N.selection&&(T=N.selection),Ci(T)&&(N.selection=null,c.call(b)),D.end()}}function h(){var t=this.__brush||{selection:null};return t.extent=r.apply(this,arguments),t.dim=n,t}return u.move=function(t,e){t.selection?t.on("start.brush",function(){f(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){f(this,arguments).end()}).tween("brush",function(){var t=this,r=t.__brush,i=f(t,arguments),o=r.selection,a=n.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=ye(o,a);function s(n){r.selection=1===n&&Ci(a)?null:u(n),c.call(t),i.brush()}return o&&a?s:s(1)}):t.each(function(){var t=arguments,r=this.__brush,i=n.input("function"==typeof e?e.apply(this,t):e,r.extent),o=f(this,t).beforestart();Mr(this),r.selection=null==i||Ci(i)?null:i,c.call(this),o.start().brush().end()})},s.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){St(new li(u,t,n.output(this.state.selection)),o.apply,o,[t,this.that,this.args])}},u.extent=function(t){return arguments.length?(r="function"==typeof t?t:si([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),u):r},u.filter=function(t){return arguments.length?(i="function"==typeof t?t:si(!!t),u):i},u.handleSize=function(t){return arguments.length?(a=+t,u):a},u.on=function(){var t=o.on.apply(o,arguments);return t===o?u:t},u}var zi=Math.cos,Ri=Math.sin,Di=Math.PI,qi=Di/2,Li=2*Di,Ui=Math.max;var Oi=Array.prototype.slice;function Bi(t){return function(){return t}}var Yi=Math.PI,Fi=2*Yi,Ii=Fi-1e-6;function ji(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Hi(){return new ji}function Xi(t){return t.source}function Gi(t){return t.target}function Vi(t){return t.radius}function $i(t){return t.startAngle}function Wi(t){return t.endAngle}ji.prototype=Hi.prototype={constructor:ji,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,c=r-n,f=o-t,s=a-n,l=f*f+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*u-c*f)>1e-6&&i){var h=e-o,d=r-a,p=u*u+c*c,v=h*h+d*d,g=Math.sqrt(p),y=Math.sqrt(l),_=i*Math.tan((Yi-Math.acos((p+l-v)/(2*g*y)))/2),b=_/y,m=_/g;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*f)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>f*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),c=t+a,f=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+f:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+c+","+f),e&&(l<0&&(l=l%Fi+Fi),l>Ii?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=c)+","+(this._y1=f):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Yi)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};function Zi(){}function Qi(t,n){var e=new Zi;if(t instanceof Zi)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function Ji(){return{}}function Ki(t,n,e){t[n]=e}function to(){return Qi()}function no(t,n,e){t.set(n,e)}function eo(){}Zi.prototype=Qi.prototype={constructor:Zi,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var ro=Qi.prototype;function io(t,n){var e=new eo;if(t instanceof eo)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}eo.prototype=io.prototype={constructor:eo,has:ro.has,add:function(t){return this["$"+(t+="")]=t,this},remove:ro.remove,clear:ro.clear,values:ro.keys,size:ro.size,empty:ro.empty,each:ro.each};var oo=Array.prototype.slice;function ao(t,n){return t-n}function uo(t){return function(){return t}}function co(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=fo(t,n[r]))return e;return 0}function fo(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var c=t[o],f=c[0],s=c[1],l=t[u],h=l[0],d=l[1];if(so(c,l,n))return 0;s>r!=d>r&&e<(h-f)*(r-s)/(d-s)+f&&(i=-i)}return i}function so(t,n,e){var r,i,o,a;return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function lo(){}var ho=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function po(){var t=1,n=1,e=M,r=u;function i(t){var n=e(t);if(Array.isArray(n))n=n.slice().sort(ao);else{var r=s(t),i=r[0],a=r[1];n=w(i,a,n),n=g(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map(function(n){return o(t,n)})}function o(e,i){var o=[],u=[];return function(e,r,i){var o,u,c,f,s,l,h=new Array,d=new Array;o=u=-1,f=e[0]>=r,ho[f<<1].forEach(p);for(;++o<t-1;)c=f,f=e[o+1]>=r,ho[c|f<<1].forEach(p);ho[f<<0].forEach(p);for(;++u<n-1;){for(o=-1,f=e[u*t+t]>=r,s=e[u*t]>=r,ho[f<<1|s<<2].forEach(p);++o<t-1;)c=f,f=e[u*t+t+o+1]>=r,l=s,s=e[u*t+o+1]>=r,ho[c|f<<1|s<<2|l<<3].forEach(p);ho[f|s<<3].forEach(p)}o=-1,s=e[u*t]>=r,ho[s<<2].forEach(p);for(;++o<t-1;)l=s,s=e[u*t+o+1]>=r,ho[s<<2|l<<3].forEach(p);function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],c=[t[1][0]+o,t[1][1]+u],f=a(r),s=a(c);(n=d[f])?(e=h[s])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(c),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(c),d[n.end=s]=n):(n=h[s])?(e=d[f])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(c),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=f]=n):h[f]=d[s]={start:f,end:s,ring:[r,c]}}ho[s<<3].forEach(p)}(e,i,function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(t)>0?o.push([t]):u.push(t)}),u.forEach(function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==co((n=o[e])[0],t))return void n.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach(function(e){var o,a=e[0],u=e[1],c=0|a,f=0|u,s=r[f*t+c];a>0&&a<t&&c===a&&(o=r[f*t+c-1],e[0]=a+(i-o)/(s-o)-.5),u>0&&u<n&&f===u&&(o=r[(f-1)*t+c],e[1]=u+(i-o)/(s-o)-.5)})}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n];var r=Math.ceil(e[0]),o=Math.ceil(e[1]);if(!(r>0&&o>0))throw new Error("invalid size");return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?uo(oo.call(t)):uo(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:lo,i):r===u},i}function vo(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,c=0;u<r+e;++u)u<r&&(c+=t.data[u+a*r]),u>=e&&(u>=o&&(c-=t.data[u-o+a*r]),n.data[u-e+a*r]=c/Math.min(u+1,r-1+o-u,o))}function go(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,c=0;u<i+e;++u)u<i&&(c+=t.data[a+u*r]),u>=e&&(u>=o&&(c-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=c/Math.min(u+1,i-1+o-u,o))}function yo(t){return t[0]}function _o(t){return t[1]}function bo(){return 1}var mo={},xo={},wo=34,Mo=10,No=13;function Ao(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function To(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function So(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function ko(t){var n,e=t.getUTCHours(),r=t.getUTCMinutes(),i=t.getUTCSeconds(),o=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((n=t.getUTCFullYear())<0?"-"+So(-n,6):n>9999?"+"+So(n,6):So(n,4))+"-"+So(t.getUTCMonth()+1,2)+"-"+So(t.getUTCDate(),2)+(o?"T"+So(e,2)+":"+So(r,2)+":"+So(i,2)+"."+So(o,3)+"Z":i?"T"+So(e,2)+":"+So(r,2)+":"+So(i,2)+"Z":r||e?"T"+So(e,2)+":"+So(r,2)+"Z":"")}function Eo(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,i=[],o=t.length,a=0,u=0,c=o<=0,f=!1;function s(){if(c)return xo;if(f)return f=!1,mo;var n,r,i=a;if(t.charCodeAt(i)===wo){for(;a++<o&&t.charCodeAt(a)!==wo||t.charCodeAt(++a)===wo;);return(n=a)>=o?c=!0:(r=t.charCodeAt(a++))===Mo?f=!0:r===No&&(f=!0,t.charCodeAt(a)===Mo&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if((r=t.charCodeAt(n=a++))===Mo)f=!0;else if(r===No)f=!0,t.charCodeAt(a)===Mo&&++a;else if(r!==e)continue;return t.slice(i,n)}return c=!0,t.slice(i,o)}for(t.charCodeAt(o-1)===Mo&&--o,t.charCodeAt(o-1)===No&&--o;(r=s())!==xo;){for(var l=[];r!==mo&&r!==xo;)l.push(r),r=s();n&&null==(l=n(l,u++))||i.push(l)}return i}function i(n,e){return n.map(function(n){return e.map(function(t){return a(n[t])}).join(t)})}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?ko(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,function(t,r){if(e)return e(t,r-1);i=t,e=n?function(t,n){var e=Ao(t);return function(r,i){return n(e(r),i,t)}}(t,n):Ao(t)});return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=To(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=To(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")}}}var Co=Eo(","),Po=Co.parse,zo=Co.parseRows,Ro=Co.format,Do=Co.formatBody,qo=Co.formatRows,Lo=Eo("\t"),Uo=Lo.parse,Oo=Lo.parseRows,Bo=Lo.format,Yo=Lo.formatBody,Fo=Lo.formatRows;function Io(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function jo(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function Ho(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function Xo(t,n){return fetch(t,n).then(Ho)}function Go(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),Xo(n,e).then(function(n){return t(n,r)})}}var Vo=Go(Po),$o=Go(Uo);function Wo(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}function Zo(t){return function(n,e){return Xo(n,e).then(function(n){return(new DOMParser).parseFromString(n,t)})}}var Qo=Zo("application/xml"),Jo=Zo("text/html"),Ko=Zo("image/svg+xml");function ta(t){return function(){return t}}function na(){return 1e-6*(Math.random()-.5)}function ea(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,c,f,s,l,h,d=t._root,p={data:r},v=t._x0,g=t._y0,y=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a,i=d,!(d=d[l=s<<1|f]))return i[l]=p,t;if(u=+t._x.call(null,d.data),c=+t._y.call(null,d.data),n===u&&e===c)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a}while((l=s<<1|f)==(h=(c>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function ra(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function ia(t){return t[0]}function oa(t){return t[1]}function aa(t,n,e){var r=new ua(null==n?ia:n,null==e?oa:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function ua(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function ca(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var fa=aa.prototype=ua.prototype;function sa(t){return t.x+t.vx}function la(t){return t.y+t.vy}function ha(t){return t.index}function da(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function pa(t){return t.x}function va(t){return t.y}fa.copy=function(){var t,n,e=new ua(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=ca(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=ca(n));return e},fa.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return ea(this.cover(n,e),n,e,t)},fa.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),c=1/0,f=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<c&&(c=r),r>s&&(s=r),i<f&&(f=i),i>l&&(l=i));if(c>s||f>l)return this;for(this.cover(c,f).cover(s,l),e=0;e<o;++e)ea(this,a[e],u[e],t[e]);return this},fa.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var a,u,c=i-e,f=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=f,f=a,c*=2,u){case 0:i=e+c,o=r+c;break;case 1:e=i-c,o=r+c;break;case 2:i=e+c,r=o-c;break;case 3:e=i-c,r=o-c}this._root&&this._root.length&&(this._root=f)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},fa.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},fa.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},fa.find=function(t,n,e){var r,i,o,a,u,c,f,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],v=this._root;for(v&&p.push(new ra(v,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);c=p.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>d||(a=c.x1)<s||(u=c.y1)<l))if(v.length){var g=(i+a)/2,y=(o+u)/2;p.push(new ra(v[3],g,y,a,u),new ra(v[2],i,y,g,u),new ra(v[1],g,o,a,y),new ra(v[0],i,o,g,y)),(f=(n>=y)<<1|t>=g)&&(c=p[p.length-1],p[p.length-1]=p[p.length-1-f],p[p.length-1-f]=c)}else{var _=t-+this._x.call(null,v.data),b=n-+this._y.call(null,v.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=v.data}}return r},fa.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,c,f,s,l,h,d=this._root,p=this._x0,v=this._y0,g=this._x1,y=this._y1;if(!d)return this;if(d.length)for(;;){if((f=o>=(u=(p+g)/2))?p=u:g=u,(s=a>=(c=(v+y)/2))?v=c:y=c,n=d,!(d=d[l=s<<1|f]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},fa.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},fa.root=function(){return this._root},fa.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},fa.visit=function(t){var n,e,r,i,o,a,u=[],c=this._root;for(c&&u.push(new ra(c,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&c.length){var f=(r+o)/2,s=(i+a)/2;(e=c[3])&&u.push(new ra(e,f,s,o,a)),(e=c[2])&&u.push(new ra(e,r,s,f,a)),(e=c[1])&&u.push(new ra(e,f,i,o,s)),(e=c[0])&&u.push(new ra(e,r,i,f,s))}return this},fa.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new ra(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,c=n.x1,f=n.y1,s=(a+c)/2,l=(u+f)/2;(o=i[0])&&e.push(new ra(o,a,u,s,l)),(o=i[1])&&e.push(new ra(o,s,u,c,l)),(o=i[2])&&e.push(new ra(o,a,l,s,f)),(o=i[3])&&e.push(new ra(o,s,l,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},fa.x=function(t){return arguments.length?(this._x=t,this):this._x},fa.y=function(t){return arguments.length?(this._y=t,this):this._y};var ga=10,ya=Math.PI*(3-Math.sqrt(5));function _a(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function ba(t){return(t=_a(Math.abs(t)))?t[1]:NaN}var ma,xa=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function wa(t){return new Ma(t)}function Ma(t){if(!(n=xa.exec(t)))throw new Error("invalid format: "+t);var n;this.fill=n[1]||" ",this.align=n[2]||">",this.sign=n[3]||"-",this.symbol=n[4]||"",this.zero=!!n[5],this.width=n[6]&&+n[6],this.comma=!!n[7],this.precision=n[8]&&+n[8].slice(1),this.trim=!!n[9],this.type=n[10]||""}function Na(t,n){var e=_a(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}wa.prototype=Ma.prototype,Ma.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Aa={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Na(100*t,n)},r:Na,s:function(t,n){var e=_a(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(ma=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+_a(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function Ta(t){return t}var Sa,ka=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ea(t){var n,e,r=t.grouping&&t.thousands?(n=t.grouping,e=t.thousands,function(t,r){for(var i=t.length,o=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),o.push(t.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(e)}):Ta,i=t.currency,o=t.decimal,a=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):Ta,u=t.percent||"%";function c(t){var n=(t=wa(t)).fill,e=t.align,c=t.sign,f=t.symbol,s=t.zero,l=t.width,h=t.comma,d=t.precision,p=t.trim,v=t.type;"n"===v?(h=!0,v="g"):Aa[v]||(null==d&&(d=12),p=!0,v="g"),(s||"0"===n&&"="===e)&&(s=!0,n="0",e="=");var g="$"===f?i[0]:"#"===f&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",y="$"===f?i[1]:/[%p]/.test(v)?u:"",_=Aa[v],b=/[defgprs%]/.test(v);function m(t){var i,u,f,m=g,x=y;if("c"===v)x=_(t)+x,t="";else{var w=(t=+t)<0;if(t=_(Math.abs(t),d),p&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(i>0){if(!+t[r])break t;i=0}}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),w&&0==+t&&(w=!1),m=(w?"("===c?c:"-":"-"===c||"("===c?"":c)+m,x=("s"===v?ka[8+ma/3]:"")+x+(w&&"("===c?")":""),b)for(i=-1,u=t.length;++i<u;)if(48>(f=t.charCodeAt(i))||f>57){x=(46===f?o+t.slice(i+1):t.slice(i))+x,t=t.slice(0,i);break}}h&&!s&&(t=r(t,1/0));var M=m.length+t.length+x.length,N=M<l?new Array(l-M+1).join(n):"";switch(h&&s&&(t=r(N+t,N.length?l-x.length:1/0),N=""),e){case"<":t=m+t+x+N;break;case"=":t=m+N+t+x;break;case"^":t=N.slice(0,M=N.length>>1)+m+t+x+N.slice(M);break;default:t=N+m+t+x}return a(t)}return d=null==d?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,d)):Math.max(0,Math.min(20,d)),m.toString=function(){return t+""},m}return{format:c,formatPrefix:function(t,n){var e=c(((t=wa(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(ba(n)/3))),i=Math.pow(10,-r),o=ka[8+r/3];return function(t){return e(i*t)+o}}}}function Ca(n){return Sa=Ea(n),t.format=Sa.format,t.formatPrefix=Sa.formatPrefix,Sa}function Pa(t){return Math.max(0,-ba(Math.abs(t)))}function za(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(ba(n)/3)))-ba(Math.abs(t)))}function Ra(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,ba(n)-ba(t))+1}function Da(){return new qa}function qa(){this.reset()}Ca({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),qa.prototype={constructor:qa,reset:function(){this.s=this.t=0},add:function(t){Ua(La,t,this.t),Ua(this,La.s,this.s),this.s?this.t+=La.t:this.s=La.t},valueOf:function(){return this.s}};var La=new qa;function Ua(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}var Oa=1e-6,Ba=1e-12,Ya=Math.PI,Fa=Ya/2,Ia=Ya/4,ja=2*Ya,Ha=180/Ya,Xa=Ya/180,Ga=Math.abs,Va=Math.atan,$a=Math.atan2,Wa=Math.cos,Za=Math.ceil,Qa=Math.exp,Ja=Math.log,Ka=Math.pow,tu=Math.sin,nu=Math.sign||function(t){return t>0?1:t<0?-1:0},eu=Math.sqrt,ru=Math.tan;function iu(t){return t>1?0:t<-1?Ya:Math.acos(t)}function ou(t){return t>1?Fa:t<-1?-Fa:Math.asin(t)}function au(t){return(t=tu(t/2))*t}function uu(){}function cu(t,n){t&&su.hasOwnProperty(t.type)&&su[t.type](t,n)}var fu={Feature:function(t,n){cu(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)cu(e[r].geometry,n)}},su={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){lu(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)lu(e[r],n,0)},Polygon:function(t,n){hu(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)hu(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)cu(e[r],n)}};function lu(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function hu(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)lu(t[e],n,1);n.polygonEnd()}function du(t,n){t&&fu.hasOwnProperty(t.type)?fu[t.type](t,n):cu(t,n)}var pu,vu,gu,yu,_u,bu=Da(),mu=Da(),xu={point:uu,lineStart:uu,lineEnd:uu,polygonStart:function(){bu.reset(),xu.lineStart=wu,xu.lineEnd=Mu},polygonEnd:function(){var t=+bu;mu.add(t<0?ja+t:t),this.lineStart=this.lineEnd=this.point=uu},sphere:function(){mu.add(ja)}};function wu(){xu.point=Nu}function Mu(){Au(pu,vu)}function Nu(t,n){xu.point=Au,pu=t,vu=n,gu=t*=Xa,yu=Wa(n=(n*=Xa)/2+Ia),_u=tu(n)}function Au(t,n){var e=(t*=Xa)-gu,r=e>=0?1:-1,i=r*e,o=Wa(n=(n*=Xa)/2+Ia),a=tu(n),u=_u*a,c=yu*o+u*Wa(i),f=u*r*tu(i);bu.add($a(f,c)),gu=t,yu=o,_u=a}function Tu(t){return[$a(t[1],t[0]),ou(t[2])]}function Su(t){var n=t[0],e=t[1],r=Wa(e);return[r*Wa(n),r*tu(n),tu(e)]}function ku(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Eu(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Cu(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function Pu(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function zu(t){var n=eu(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}var Ru,Du,qu,Lu,Uu,Ou,Bu,Yu,Fu,Iu,ju,Hu,Xu,Gu,Vu,$u,Wu,Zu,Qu,Ju,Ku,tc,nc,ec,rc,ic,oc=Da(),ac={point:uc,lineStart:fc,lineEnd:sc,polygonStart:function(){ac.point=lc,ac.lineStart=hc,ac.lineEnd=dc,oc.reset(),xu.polygonStart()},polygonEnd:function(){xu.polygonEnd(),ac.point=uc,ac.lineStart=fc,ac.lineEnd=sc,bu<0?(Ru=-(qu=180),Du=-(Lu=90)):oc>Oa?Lu=90:oc<-Oa&&(Du=-90),Iu[0]=Ru,Iu[1]=qu}};function uc(t,n){Fu.push(Iu=[Ru=t,qu=t]),n<Du&&(Du=n),n>Lu&&(Lu=n)}function cc(t,n){var e=Su([t*Xa,n*Xa]);if(Yu){var r=Eu(Yu,e),i=Eu([r[1],-r[0],0],r);zu(i),i=Tu(i);var o,a=t-Uu,u=a>0?1:-1,c=i[0]*Ha*u,f=Ga(a)>180;f^(u*Uu<c&&c<u*t)?(o=i[1]*Ha)>Lu&&(Lu=o):f^(u*Uu<(c=(c+360)%360-180)&&c<u*t)?(o=-i[1]*Ha)<Du&&(Du=o):(n<Du&&(Du=n),n>Lu&&(Lu=n)),f?t<Uu?pc(Ru,t)>pc(Ru,qu)&&(qu=t):pc(t,qu)>pc(Ru,qu)&&(Ru=t):qu>=Ru?(t<Ru&&(Ru=t),t>qu&&(qu=t)):t>Uu?pc(Ru,t)>pc(Ru,qu)&&(qu=t):pc(t,qu)>pc(Ru,qu)&&(Ru=t)}else Fu.push(Iu=[Ru=t,qu=t]);n<Du&&(Du=n),n>Lu&&(Lu=n),Yu=e,Uu=t}function fc(){ac.point=cc}function sc(){Iu[0]=Ru,Iu[1]=qu,ac.point=uc,Yu=null}function lc(t,n){if(Yu){var e=t-Uu;oc.add(Ga(e)>180?e+(e>0?360:-360):e)}else Ou=t,Bu=n;xu.point(t,n),cc(t,n)}function hc(){xu.lineStart()}function dc(){lc(Ou,Bu),xu.lineEnd(),Ga(oc)>Oa&&(Ru=-(qu=180)),Iu[0]=Ru,Iu[1]=qu,Yu=null}function pc(t,n){return(n-=t)<0?n+360:n}function vc(t,n){return t[0]-n[0]}function gc(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var yc={sphere:uu,point:_c,lineStart:mc,lineEnd:Mc,polygonStart:function(){yc.lineStart=Nc,yc.lineEnd=Ac},polygonEnd:function(){yc.lineStart=mc,yc.lineEnd=Mc}};function _c(t,n){t*=Xa;var e=Wa(n*=Xa);bc(e*Wa(t),e*tu(t),tu(n))}function bc(t,n,e){Xu+=(t-Xu)/++ju,Gu+=(n-Gu)/ju,Vu+=(e-Vu)/ju}function mc(){yc.point=xc}function xc(t,n){t*=Xa;var e=Wa(n*=Xa);ec=e*Wa(t),rc=e*tu(t),ic=tu(n),yc.point=wc,bc(ec,rc,ic)}function wc(t,n){t*=Xa;var e=Wa(n*=Xa),r=e*Wa(t),i=e*tu(t),o=tu(n),a=$a(eu((a=rc*o-ic*i)*a+(a=ic*r-ec*o)*a+(a=ec*i-rc*r)*a),ec*r+rc*i+ic*o);Hu+=a,$u+=a*(ec+(ec=r)),Wu+=a*(rc+(rc=i)),Zu+=a*(ic+(ic=o)),bc(ec,rc,ic)}function Mc(){yc.point=_c}function Nc(){yc.point=Tc}function Ac(){Sc(tc,nc),yc.point=_c}function Tc(t,n){tc=t,nc=n,t*=Xa,n*=Xa,yc.point=Sc;var e=Wa(n);ec=e*Wa(t),rc=e*tu(t),ic=tu(n),bc(ec,rc,ic)}function Sc(t,n){t*=Xa;var e=Wa(n*=Xa),r=e*Wa(t),i=e*tu(t),o=tu(n),a=rc*o-ic*i,u=ic*r-ec*o,c=ec*i-rc*r,f=eu(a*a+u*u+c*c),s=ou(f),l=f&&-s/f;Qu+=l*a,Ju+=l*u,Ku+=l*c,Hu+=s,$u+=s*(ec+(ec=r)),Wu+=s*(rc+(rc=i)),Zu+=s*(ic+(ic=o)),bc(ec,rc,ic)}function kc(t){return function(){return t}}function Ec(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Cc(t,n){return[Ga(t)>Ya?t+Math.round(-t/ja)*ja:t,n]}function Pc(t,n,e){return(t%=ja)?n||e?Ec(Rc(t),Dc(n,e)):Rc(t):n||e?Dc(n,e):Cc}function zc(t){return function(n,e){return[(n+=t)>Ya?n-ja:n<-Ya?n+ja:n,e]}}function Rc(t){var n=zc(t);return n.invert=zc(-t),n}function Dc(t,n){var e=Wa(t),r=tu(t),i=Wa(n),o=tu(n);function a(t,n){var a=Wa(n),u=Wa(t)*a,c=tu(t)*a,f=tu(n),s=f*e+u*r;return[$a(c*i-s*o,u*e-f*r),ou(s*i+c*o)]}return a.invert=function(t,n){var a=Wa(n),u=Wa(t)*a,c=tu(t)*a,f=tu(n),s=f*i-c*o;return[$a(c*i+f*o,u*e+s*r),ou(s*e-u*r)]},a}function qc(t){function n(n){return(n=t(n[0]*Xa,n[1]*Xa))[0]*=Ha,n[1]*=Ha,n}return t=Pc(t[0]*Xa,t[1]*Xa,t.length>2?t[2]*Xa:0),n.invert=function(n){return(n=t.invert(n[0]*Xa,n[1]*Xa))[0]*=Ha,n[1]*=Ha,n},n}function Lc(t,n,e,r,i,o){if(e){var a=Wa(n),u=tu(n),c=r*e;null==i?(i=n+r*ja,o=n-c/2):(i=Uc(a,i),o=Uc(a,o),(r>0?i<o:i>o)&&(i+=r*ja));for(var f,s=i;r>0?s>o:s<o;s-=c)f=Tu([a,-u*Wa(s),-u*tu(s)]),t.point(f[0],f[1])}}function Uc(t,n){(n=Su(n))[0]-=t,zu(n);var e=iu(-n[1]);return((-n[2]<0?-e:e)+ja-Oa)%ja}function Oc(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:uu,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function Bc(t,n){return Ga(t[0]-n[0])<Oa&&Ga(t[1]-n[1])<Oa}function Yc(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Fc(t,n,e,r,i){var o,a,u=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(Bc(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else u.push(e=new Yc(r,t,null,!0)),c.push(e.o=new Yc(r,null,e,!1)),u.push(e=new Yc(a,t,null,!1)),c.push(e.o=new Yc(a,null,e,!0))}}),u.length){for(c.sort(n),Ic(u),Ic(c),o=0,a=c.length;o<a;++o)c[o].e=e=!e;for(var f,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;f=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=f.length;o<a;++o)i.point((s=f[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(d)for(f=h.p.z,o=f.length-1;o>=0;--o)i.point((s=f[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p}f=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function Ic(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}Cc.invert=Cc;var jc=Da();function Hc(t,n){var e=n[0],r=n[1],i=tu(r),o=[tu(e),-Wa(e),0],a=0,u=0;jc.reset(),1===i?r=Fa+Oa:-1===i&&(r=-Fa-Oa);for(var c=0,f=t.length;c<f;++c)if(l=(s=t[c]).length)for(var s,l,h=s[l-1],d=h[0],p=h[1]/2+Ia,v=tu(p),g=Wa(p),y=0;y<l;++y,d=b,v=x,g=w,h=_){var _=s[y],b=_[0],m=_[1]/2+Ia,x=tu(m),w=Wa(m),M=b-d,N=M>=0?1:-1,A=N*M,T=A>Ya,S=v*x;if(jc.add($a(S*N*tu(A),g*w+S*Wa(A))),a+=T?M+N*ja:M,T^d>=e^b>=e){var k=Eu(Su(h),Su(_));zu(k);var E=Eu(o,k);zu(E);var C=(T^M>=0?-1:1)*ou(E[2]);(r>C||r===C&&(k[0]||k[1]))&&(u+=T^M>=0?1:-1)}}return(a<-Oa||a<Oa&&jc<-Oa)^1&u}function Xc(t,n,e,r){return function(i){var o,a,u,c=n(i),f=Oc(),s=n(f),l=!1,h={point:d,lineStart:v,lineEnd:g,polygonStart:function(){h.point=y,h.lineStart=_,h.lineEnd=b,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=v,h.lineEnd=g,a=T(a);var t=Hc(o,r);a.length?(l||(i.polygonStart(),l=!0),Fc(a,Vc,t,e,i)):t&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){c.point(t,n)}function v(){h.point=p,c.lineStart()}function g(){h.point=d,c.lineEnd()}function y(t,n){u.push([t,n]),s.point(t,n)}function _(){s.lineStart(),u=[]}function b(){y(u[0][0],u[0][1]),s.lineEnd();var t,n,e,r,c=s.clean(),h=f.result(),d=h.length;if(u.pop(),o.push(u),u=null,d)if(1&c){if((n=(e=h[0]).length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else d>1&&2&c&&h.push(h.pop().concat(h.shift())),a.push(h.filter(Gc))}return h}}function Gc(t){return t.length>1}function Vc(t,n){return((t=t.x)[0]<0?t[1]-Fa-Oa:Fa-t[1])-((n=n.x)[0]<0?n[1]-Fa-Oa:Fa-n[1])}var $c=Xc(function(){return!0},function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?Ya:-Ya,c=Ga(o-e);Ga(c-Ya)<Oa?(t.point(e,r=(r+a)/2>0?Fa:-Fa),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&c>=Ya&&(Ga(e-i)<Oa&&(e-=i*Oa),Ga(o-u)<Oa&&(o-=u*Oa),r=function(t,n,e,r){var i,o,a=tu(t-e);return Ga(a)>Oa?Va((tu(n)*(o=Wa(r))*tu(e)-tu(r)*(i=Wa(n))*tu(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*Fa,r.point(-Ya,i),r.point(0,i),r.point(Ya,i),r.point(Ya,0),r.point(Ya,-i),r.point(0,-i),r.point(-Ya,-i),r.point(-Ya,0),r.point(-Ya,i);else if(Ga(t[0]-n[0])>Oa){var o=t[0]<n[0]?Ya:-Ya;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])},[-Ya,-Fa]);function Wc(t){var n=Wa(t),e=6*Xa,r=n>0,i=Ga(n)>Oa;function o(t,e){return Wa(t)*Wa(e)>n}function a(t,e,r){var i=[1,0,0],o=Eu(Su(t),Su(e)),a=ku(o,o),u=o[0],c=a-u*u;if(!c)return!r&&t;var f=n*a/c,s=-n*u/c,l=Eu(i,o),h=Pu(i,f);Cu(h,Pu(o,s));var d=l,p=ku(h,d),v=ku(d,d),g=p*p-v*(ku(h,h)-1);if(!(g<0)){var y=eu(g),_=Pu(d,(-p-y)/v);if(Cu(_,h),_=Tu(_),!r)return _;var b,m=t[0],x=e[0],w=t[1],M=e[1];x<m&&(b=m,m=x,x=b);var N=x-m,A=Ga(N-Ya)<Oa;if(!A&&M<w&&(b=w,w=M,M=b),A||N<Oa?A?w+M>0^_[1]<(Ga(_[0]-m)<Oa?w:M):w<=_[1]&&_[1]<=M:N>Ya^(m<=_[0]&&_[0]<=x)){var T=Pu(d,(-p+y)/v);return Cu(T,h),[_,Tu(T)]}}}function u(n,e){var i=r?t:Ya-t,o=0;return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return Xc(o,function(t){var n,e,c,f,s;return{lineStart:function(){f=c=!1,s=1},point:function(l,h){var d,p=[l,h],v=o(l,h),g=r?v?0:u(l,h):v?u(l+(l<0?Ya:-Ya),h):0;if(!n&&(f=c=v)&&t.lineStart(),v!==c&&(!(d=a(n,p))||Bc(n,d)||Bc(p,d))&&(p[0]+=Oa,p[1]+=Oa,v=o(p[0],p[1])),v!==c)s=0,v?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1]),t.lineEnd()),n=d;else if(i&&n&&r^v){var y;g&e||!(y=a(p,n,!0))||(s=0,r?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&Bc(n,p)||t.point(p[0],p[1]),n=p,c=v,e=g},lineEnd:function(){c&&t.lineEnd(),n=null},clean:function(){return s|(f&&c)<<1}}},function(n,r,i,o){Lc(o,t,e,i,n,r)},r?[0,-t]:[-Ya,t-Ya])}var Zc=1e9,Qc=-Zc;function Jc(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,f){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||c(i,o)<0^u>0)do{f.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+u+4)%4)!==l);else f.point(o[0],o[1])}function a(r,i){return Ga(r[0]-t)<Oa?i>0?0:3:Ga(r[0]-e)<Oa?i>0?2:1:Ga(r[1]-n)<Oa?i>0?1:0:i>0?3:2}function u(t,n){return c(t.x,n.x)}function c(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var c,f,s,l,h,d,p,v,g,y,_,b=a,m=Oc(),x={point:w,lineStart:function(){x.point=M,f&&f.push(s=[]);y=!0,g=!1,p=v=NaN},lineEnd:function(){c&&(M(l,h),d&&g&&m.rejoin(),c.push(m.result()));x.point=w,g&&b.lineEnd()},polygonStart:function(){b=m,c=[],f=[],_=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=f.length;e<i;++e)for(var o,a,u=f[e],c=1,s=u.length,l=u[0],h=l[0],d=l[1];c<s;++c)o=h,a=d,l=u[c],h=l[0],d=l[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=_&&n,i=(c=T(c)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&Fc(c,u,n,o,a),a.polygonEnd());b=a,c=f=s=null}};function w(t,n){i(t,n)&&b.point(t,n)}function M(o,a){var u=i(o,a);if(f&&s.push([o,a]),y)l=o,h=a,d=u,y=!1,u&&(b.lineStart(),b.point(o,a));else if(u&&g)b.point(o,a);else{var c=[p=Math.max(Qc,Math.min(Zc,p)),v=Math.max(Qc,Math.min(Zc,v))],m=[o=Math.max(Qc,Math.min(Zc,o)),a=Math.max(Qc,Math.min(Zc,a))];!function(t,n,e,r,i,o){var a,u=t[0],c=t[1],f=0,s=1,l=n[0]-u,h=n[1]-c;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>f&&(f=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-c,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}if(a=o-c,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<s&&(s=a)}return f>0&&(t[0]=u+f*l,t[1]=c+f*h),s<1&&(n[0]=u+s*l,n[1]=c+s*h),!0}}}}}(c,m,t,n,e,r)?u&&(b.lineStart(),b.point(o,a),_=!1):(g||(b.lineStart(),b.point(c[0],c[1])),b.point(m[0],m[1]),u||b.lineEnd(),_=!1)}p=o,v=a,g=u}return x}}var Kc,tf,nf,ef=Da(),rf={sphere:uu,point:uu,lineStart:function(){rf.point=af,rf.lineEnd=of},lineEnd:uu,polygonStart:uu,polygonEnd:uu};function of(){rf.point=rf.lineEnd=uu}function af(t,n){Kc=t*=Xa,tf=tu(n*=Xa),nf=Wa(n),rf.point=uf}function uf(t,n){t*=Xa;var e=tu(n*=Xa),r=Wa(n),i=Ga(t-Kc),o=Wa(i),a=r*tu(i),u=nf*e-tf*r*o,c=tf*e+nf*r*o;ef.add($a(eu(a*a+u*u),c)),Kc=t,tf=e,nf=r}function cf(t){return ef.reset(),du(t,rf),+ef}var ff=[null,null],sf={type:"LineString",coordinates:ff};function lf(t,n){return ff[0]=t,ff[1]=n,cf(sf)}var hf={Feature:function(t,n){return pf(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(pf(e[r].geometry,n))return!0;return!1}},df={Sphere:function(){return!0},Point:function(t,n){return vf(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(vf(e[r],n))return!0;return!1},LineString:function(t,n){return gf(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(gf(e[r],n))return!0;return!1},Polygon:function(t,n){return yf(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(yf(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(pf(e[r],n))return!0;return!1}};function pf(t,n){return!(!t||!df.hasOwnProperty(t.type))&&df[t.type](t,n)}function vf(t,n){return 0===lf(t,n)}function gf(t,n){var e=lf(t[0],t[1]);return lf(t[0],n)+lf(n,t[1])<=e+Oa}function yf(t,n){return!!Hc(t.map(_f),bf(n))}function _f(t){return(t=t.map(bf)).pop(),t}function bf(t){return[t[0]*Xa,t[1]*Xa]}function mf(t,n,e){var r=g(t,n-Oa,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function xf(t,n,e){var r=g(t,n-Oa,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function wf(){var t,n,e,r,i,o,a,u,c,f,s,l,h=10,d=h,p=90,v=360,y=2.5;function _(){return{type:"MultiLineString",coordinates:b()}}function b(){return g(Za(r/p)*p,e,p).map(s).concat(g(Za(u/v)*v,a,v).map(l)).concat(g(Za(n/h)*h,t,h).filter(function(t){return Ga(t%p)>Oa}).map(c)).concat(g(Za(o/d)*d,i,d).filter(function(t){return Ga(t%v)>Oa}).map(f))}return _.lines=function(){return b().map(function(t){return{type:"LineString",coordinates:t}})},_.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(l(a).slice(1),s(e).reverse().slice(1),l(u).reverse().slice(1))]}},_.extent=function(t){return arguments.length?_.extentMajor(t).extentMinor(t):_.extentMinor()},_.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),_.precision(y)):[[r,u],[e,a]]},_.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),_.precision(y)):[[n,o],[t,i]]},_.step=function(t){return arguments.length?_.stepMajor(t).stepMinor(t):_.stepMinor()},_.stepMajor=function(t){return arguments.length?(p=+t[0],v=+t[1],_):[p,v]},_.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],_):[h,d]},_.precision=function(h){return arguments.length?(y=+h,c=mf(o,i,90),f=xf(n,t,y),s=mf(u,a,90),l=xf(r,e,y),_):y},_.extentMajor([[-180,-90+Oa],[180,90-Oa]]).extentMinor([[-180,-80-Oa],[180,80+Oa]])}function Mf(t){return t}var Nf,Af,Tf,Sf,kf=Da(),Ef=Da(),Cf={point:uu,lineStart:uu,lineEnd:uu,polygonStart:function(){Cf.lineStart=Pf,Cf.lineEnd=Df},polygonEnd:function(){Cf.lineStart=Cf.lineEnd=Cf.point=uu,kf.add(Ga(Ef)),Ef.reset()},result:function(){var t=kf/2;return kf.reset(),t}};function Pf(){Cf.point=zf}function zf(t,n){Cf.point=Rf,Nf=Tf=t,Af=Sf=n}function Rf(t,n){Ef.add(Sf*t-Tf*n),Tf=t,Sf=n}function Df(){Rf(Nf,Af)}var qf=1/0,Lf=qf,Uf=-qf,Of=Uf,Bf={point:function(t,n){t<qf&&(qf=t);t>Uf&&(Uf=t);n<Lf&&(Lf=n);n>Of&&(Of=n)},lineStart:uu,lineEnd:uu,polygonStart:uu,polygonEnd:uu,result:function(){var t=[[qf,Lf],[Uf,Of]];return Uf=Of=-(Lf=qf=1/0),t}};var Yf,Ff,If,jf,Hf=0,Xf=0,Gf=0,Vf=0,$f=0,Wf=0,Zf=0,Qf=0,Jf=0,Kf={point:ts,lineStart:ns,lineEnd:is,polygonStart:function(){Kf.lineStart=os,Kf.lineEnd=as},polygonEnd:function(){Kf.point=ts,Kf.lineStart=ns,Kf.lineEnd=is},result:function(){var t=Jf?[Zf/Jf,Qf/Jf]:Wf?[Vf/Wf,$f/Wf]:Gf?[Hf/Gf,Xf/Gf]:[NaN,NaN];return Hf=Xf=Gf=Vf=$f=Wf=Zf=Qf=Jf=0,t}};function ts(t,n){Hf+=t,Xf+=n,++Gf}function ns(){Kf.point=es}function es(t,n){Kf.point=rs,ts(If=t,jf=n)}function rs(t,n){var e=t-If,r=n-jf,i=eu(e*e+r*r);Vf+=i*(If+t)/2,$f+=i*(jf+n)/2,Wf+=i,ts(If=t,jf=n)}function is(){Kf.point=ts}function os(){Kf.point=us}function as(){cs(Yf,Ff)}function us(t,n){Kf.point=cs,ts(Yf=If=t,Ff=jf=n)}function cs(t,n){var e=t-If,r=n-jf,i=eu(e*e+r*r);Vf+=i*(If+t)/2,$f+=i*(jf+n)/2,Wf+=i,Zf+=(i=jf*t-If*n)*(If+t),Qf+=i*(jf+n),Jf+=3*i,ts(If=t,jf=n)}function fs(t){this._context=t}fs.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,ja)}},result:uu};var ss,ls,hs,ds,ps,vs=Da(),gs={point:uu,lineStart:function(){gs.point=ys},lineEnd:function(){ss&&_s(ls,hs),gs.point=uu},polygonStart:function(){ss=!0},polygonEnd:function(){ss=null},result:function(){var t=+vs;return vs.reset(),t}};function ys(t,n){gs.point=_s,ls=ds=t,hs=ps=n}function _s(t,n){ds-=t,ps-=n,vs.add(eu(ds*ds+ps*ps)),ds=t,ps=n}function bs(){this._string=[]}function ms(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function xs(t){return function(n){var e=new ws;for(var r in t)e[r]=t[r];return e.stream=n,e}}function ws(){}function Ms(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),du(e,t.stream(Bf)),n(Bf.result()),null!=r&&t.clipExtent(r),t}function Ns(t,n,e){return Ms(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])},e)}function As(t,n,e){return Ns(t,[[0,0],n],e)}function Ts(t,n,e){return Ms(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])},e)}function Ss(t,n,e){return Ms(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])},e)}bs.prototype={_radius:4.5,_circle:ms(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=ms(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},ws.prototype={constructor:ws,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var ks=16,Es=Wa(30*Xa);function Cs(t,n){return+n?function(t,n){function e(r,i,o,a,u,c,f,s,l,h,d,p,v,g){var y=f-r,_=s-i,b=y*y+_*_;if(b>4*n&&v--){var m=a+h,x=u+d,w=c+p,M=eu(m*m+x*x+w*w),N=ou(w/=M),A=Ga(Ga(w)-1)<Oa||Ga(o-l)<Oa?(o+l)/2:$a(x,m),T=t(A,N),S=T[0],k=T[1],E=S-r,C=k-i,P=_*E-y*C;(P*P/b>n||Ga((y*E+_*C)/b-.5)>.3||a*h+u*d+c*p<Es)&&(e(r,i,o,a,u,c,S,k,A,m/=M,x/=M,w,v,g),g.point(S,k),e(S,k,A,m,x,w,f,s,l,h,d,p,v,g))}}return function(n){var r,i,o,a,u,c,f,s,l,h,d,p,v={point:g,lineStart:y,lineEnd:b,polygonStart:function(){n.polygonStart(),v.lineStart=m},polygonEnd:function(){n.polygonEnd(),v.lineStart=y}};function g(e,r){e=t(e,r),n.point(e[0],e[1])}function y(){s=NaN,v.point=_,n.lineStart()}function _(r,i){var o=Su([r,i]),a=t(r,i);e(s,l,f,h,d,p,s=a[0],l=a[1],f=r,h=o[0],d=o[1],p=o[2],ks,n),n.point(s,l)}function b(){v.point=g,n.lineEnd()}function m(){y(),v.point=x,v.lineEnd=w}function x(t,n){_(r=t,n),i=s,o=l,a=h,u=d,c=p,v.point=_}function w(){e(s,l,f,h,d,p,i,o,r,a,u,c,ks,n),v.lineEnd=b,b()}return v}}(t,n):function(t){return xs({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var Ps=xs({point:function(t,n){this.stream.point(t*Xa,n*Xa)}});function zs(t,n,e,r){var i=Wa(r),o=tu(r),a=i*t,u=o*t,c=i/t,f=o/t,s=(o*e-i*n)/t,l=(o*n+i*e)/t;function h(t,r){return[a*t-u*r+n,e-u*t-a*r]}return h.invert=function(t,n){return[c*t-f*n+s,l-f*t-c*n]},h}function Rs(t){return Ds(function(){return t})()}function Ds(t){var n,e,r,i,o,a,u,c,f,s,l=150,h=480,d=250,p=0,v=0,g=0,y=0,_=0,b=0,m=null,x=$c,w=null,M=Mf,N=.5;function A(t){return c(t[0]*Xa,t[1]*Xa)}function T(t){return(t=c.invert(t[0],t[1]))&&[t[0]*Ha,t[1]*Ha]}function S(){var t=zs(l,0,0,b).apply(null,n(p,v)),r=(b?zs:function(t,n,e){function r(r,i){return[n+t*r,e-t*i]}return r.invert=function(r,i){return[(r-n)/t,(e-i)/t]},r})(l,h-t[0],d-t[1],b);return e=Pc(g,y,_),u=Ec(n,r),c=Ec(e,u),a=Cs(u,N),k()}function k(){return f=s=null,A}return A.stream=function(t){return f&&s===t?f:f=Ps(function(t){return xs({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(e)(x(a(M(s=t)))))},A.preclip=function(t){return arguments.length?(x=t,m=void 0,k()):x},A.postclip=function(t){return arguments.length?(M=t,w=r=i=o=null,k()):M},A.clipAngle=function(t){return arguments.length?(x=+t?Wc(m=t*Xa):(m=null,$c),k()):m*Ha},A.clipExtent=function(t){return arguments.length?(M=null==t?(w=r=i=o=null,Mf):Jc(w=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),k()):null==w?null:[[w,r],[i,o]]},A.scale=function(t){return arguments.length?(l=+t,S()):l},A.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],S()):[h,d]},A.center=function(t){return arguments.length?(p=t[0]%360*Xa,v=t[1]%360*Xa,S()):[p*Ha,v*Ha]},A.rotate=function(t){return arguments.length?(g=t[0]%360*Xa,y=t[1]%360*Xa,_=t.length>2?t[2]%360*Xa:0,S()):[g*Ha,y*Ha,_*Ha]},A.angle=function(t){return arguments.length?(b=t%360*Xa,S()):b*Ha},A.precision=function(t){return arguments.length?(a=Cs(u,N=t*t),k()):eu(N)},A.fitExtent=function(t,n){return Ns(A,t,n)},A.fitSize=function(t,n){return As(A,t,n)},A.fitWidth=function(t,n){return Ts(A,t,n)},A.fitHeight=function(t,n){return Ss(A,t,n)},function(){return n=t.apply(this,arguments),A.invert=n.invert&&T,S()}}function qs(t){var n=0,e=Ya/3,r=Ds(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*Xa,e=t[1]*Xa):[n*Ha,e*Ha]},i}function Ls(t,n){var e=tu(t),r=(e+tu(n))/2;if(Ga(r)<Oa)return function(t){var n=Wa(t);function e(t,e){return[t*n,tu(e)/n]}return e.invert=function(t,e){return[t/n,ou(e*n)]},e}(t);var i=1+e*(2*r-e),o=eu(i)/r;function a(t,n){var e=eu(i-2*r*tu(n))/r;return[e*tu(t*=r),o-e*Wa(t)]}return a.invert=function(t,n){var e=o-n;return[$a(t,Ga(e))/r*nu(e),ou((i-(t*t+e*e)*r*r)/(2*r))]},a}function Us(){return qs(Ls).scale(155.424).center([0,33.6442])}function Os(){return Us().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Bs(t){return function(n,e){var r=Wa(n),i=Wa(e),o=t(r*i);return[o*i*tu(n),o*tu(e)]}}function Ys(t){return function(n,e){var r=eu(n*n+e*e),i=t(r),o=tu(i),a=Wa(i);return[$a(n*o,r*a),ou(r&&e*o/r)]}}var Fs=Bs(function(t){return eu(2/(1+t))});Fs.invert=Ys(function(t){return 2*ou(t/2)});var Is=Bs(function(t){return(t=iu(t))&&t/tu(t)});function js(t,n){return[t,Ja(ru((Fa+n)/2))]}function Hs(t){var n,e,r,i=Rs(t),o=i.center,a=i.scale,u=i.translate,c=i.clipExtent,f=null;function s(){var o=Ya*a(),u=i(qc(i.rotate()).invert([0,0]));return c(null==f?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===js?[[Math.max(u[0]-o,f),n],[Math.min(u[0]+o,e),r]]:[[f,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),s()):a()},i.translate=function(t){return arguments.length?(u(t),s()):u()},i.center=function(t){return arguments.length?(o(t),s()):o()},i.clipExtent=function(t){return arguments.length?(null==t?f=n=e=r=null:(f=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),s()):null==f?null:[[f,n],[e,r]]},s()}function Xs(t){return ru((Fa+t)/2)}function Gs(t,n){var e=Wa(t),r=t===n?tu(t):Ja(e/Wa(n))/Ja(Xs(n)/Xs(t)),i=e*Ka(Xs(t),r)/r;if(!r)return js;function o(t,n){i>0?n<-Fa+Oa&&(n=-Fa+Oa):n>Fa-Oa&&(n=Fa-Oa);var e=i/Ka(Xs(n),r);return[e*tu(r*t),i-e*Wa(r*t)]}return o.invert=function(t,n){var e=i-n,o=nu(r)*eu(t*t+e*e);return[$a(t,Ga(e))/r*nu(e),2*Va(Ka(i/o,1/r))-Fa]},o}function Vs(t,n){return[t,n]}function $s(t,n){var e=Wa(t),r=t===n?tu(t):(e-Wa(n))/(n-t),i=e/r+t;if(Ga(r)<Oa)return Vs;function o(t,n){var e=i-n,o=r*t;return[e*tu(o),i-e*Wa(o)]}return o.invert=function(t,n){var e=i-n;return[$a(t,Ga(e))/r*nu(e),i-nu(r)*eu(t*t+e*e)]},o}Is.invert=Ys(function(t){return t}),js.invert=function(t,n){return[t,2*Va(Qa(n))-Fa]},Vs.invert=Vs;var Ws=1.340264,Zs=-.081106,Qs=893e-6,Js=.003796,Ks=eu(3)/2;function tl(t,n){var e=ou(Ks*tu(n)),r=e*e,i=r*r*r;return[t*Wa(e)/(Ks*(Ws+3*Zs*r+i*(7*Qs+9*Js*r))),e*(Ws+Zs*r+i*(Qs+Js*r))]}function nl(t,n){var e=Wa(n),r=Wa(t)*e;return[e*tu(t)/r,tu(n)/r]}function el(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?Mf:xs({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function rl(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function il(t,n){return[Wa(n)*tu(t),tu(n)]}function ol(t,n){var e=Wa(n),r=1+Wa(t)*e;return[e*tu(t)/r,tu(n)/r]}function al(t,n){return[Ja(ru((Fa+n)/2)),-t]}function ul(t,n){return t.parent===n.parent?1:2}function cl(t,n){return t+n.x}function fl(t,n){return Math.max(t,n.y)}function sl(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function ll(t,n){var e,r,i,o,a,u=new vl(t),c=+t.value&&(u.value=t.value),f=[u];for(null==n&&(n=hl);e=f.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)f.push(r=e.children[o]=new vl(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(pl)}function hl(t){return t.children}function dl(t){t.data=t.data.data}function pl(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function vl(t){this.data=t,this.depth=this.height=0,this.parent=null}tl.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(Ws+Zs*i+o*(Qs+Js*i))-n)/(Ws+3*Zs*i+o*(7*Qs+9*Js*i)))*r)*i*i,!(Ga(e)<Ba));++a);return[Ks*t*(Ws+3*Zs*i+o*(7*Qs+9*Js*i))/Wa(r),ou(tu(r)/Ks)]},nl.invert=Ys(Va),rl.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(Ga(e)>Oa&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},il.invert=Ys(ou),ol.invert=Ys(function(t){return 2*Va(t)}),al.invert=function(t,n){return[-n,2*Va(Qa(t))-Fa]},vl.prototype=ll.prototype={constructor:vl,count:function(){return this.eachAfter(sl)},each:function(t){var n,e,r,i,o=this,a=[o];do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n)}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n},copy:function(){return ll(this).eachBefore(dl)}};var gl=Array.prototype.slice;function yl(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(gl.call(t))).length,o=[];r<i;)n=t[r],e&&ml(e,n)?++r:(e=wl(o=_l(o,n)),r=0);return e}function _l(t,n){var e,r;if(xl(n,t))return[n];for(e=0;e<t.length;++e)if(bl(n,t[e])&&xl(Ml(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(bl(Ml(t[e],t[r]),n)&&bl(Ml(t[e],n),t[r])&&bl(Ml(t[r],n),t[e])&&xl(Nl(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function bl(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function ml(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function xl(t,n){for(var e=0;e<n.length;++e)if(!ml(t,n[e]))return!1;return!0}function wl(t){switch(t.length){case 1:return{x:(n=t[0]).x,y:n.y,r:n.r};case 2:return Ml(t[0],t[1]);case 3:return Nl(t[0],t[1],t[2])}var n}function Ml(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,c=o-e,f=a-r,s=u-i,l=Math.sqrt(c*c+f*f);return{x:(e+o+c/l*s)/2,y:(r+a+f/l*s)/2,r:(l+i+u)/2}}function Nl(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,c=n.r,f=e.x,s=e.y,l=e.r,h=r-a,d=r-f,p=i-u,v=i-s,g=c-o,y=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+c*c,m=_-f*f-s*s+l*l,x=d*p-h*v,w=(p*m-v*b)/(2*x)-r,M=(v*g-p*y)/x,N=(d*b-h*m)/(2*x)-i,A=(h*y-d*g)/x,T=M*M+A*A-1,S=2*(o+w*M+N*A),k=w*w+N*N-o*o,E=-(T?(S+Math.sqrt(S*S-4*T*k))/(2*T):k/S);return{x:r+w+M*E,y:i+N+A*E,r:E}}function Al(t,n,e){var r,i,o,a,u=t.x-n.x,c=t.y-n.y,f=u*u+c*c;f?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(f+a-i)/(2*f),o=Math.sqrt(Math.max(0,a/f-r*r)),e.x=t.x-r*u-o*c,e.y=t.y-r*c+o*u):(r=(f+i-a)/(2*f),o=Math.sqrt(Math.max(0,i/f-r*r)),e.x=n.x+r*u-o*c,e.y=n.y+r*c+o*u)):(e.x=n.x+e.r,e.y=n.y)}function Tl(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Sl(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function kl(t){this._=t,this.next=null,this.previous=null}function El(t){if(!(i=t.length))return 0;var n,e,r,i,o,a,u,c,f,s,l;if((n=t[0]).x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Al(e,n,r=t[2]),n=new kl(n),e=new kl(e),r=new kl(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){Al(n._,e._,r=t[u]),r=new kl(r),c=e.next,f=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(Tl(c._,r._)){e=c,n.next=e,e.previous=n,--u;continue t}s+=c._.r,c=c.next}else{if(Tl(f._,r._)){(n=f).next=e,e.previous=n,--u;continue t}l+=f._.r,f=f.previous}}while(c!==f.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=Sl(n);(r=r.next)!==e;)(a=Sl(r))<o&&(n=r,o=a);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=yl(n),u=0;u<i;++u)(n=t[u]).x-=r.x,n.y-=r.y;return r.r}function Cl(t){if("function"!=typeof t)throw new Error;return t}function Pl(){return 0}function zl(t){return function(){return t}}function Rl(t){return Math.sqrt(t.value)}function Dl(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function ql(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=El(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function Ll(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function Ul(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function Ol(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(r-n)/t.value;++u<c;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*f}var Bl="$",Yl={depth:-1},Fl={};function Il(t){return t.id}function jl(t){return t.parentId}function Hl(t,n){return t.parent===n.parent?1:2}function Xl(t){var n=t.children;return n?n[0]:t.t}function Gl(t){var n=t.children;return n?n[n.length-1]:t.t}function Vl(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function $l(t,n,e){return t.a.parent===n.parent?t.a:e}function Wl(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function Zl(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(i-e)/t.value;++u<c;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*f}Wl.prototype=Object.create(vl.prototype);var Ql=(1+Math.sqrt(5))/2;function Jl(t,n,e,r,i,o){for(var a,u,c,f,s,l,h,d,p,v,g,y=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){c=i-e,f=o-r;do{s=_[m++].value}while(!s&&m<x);for(l=h=s,g=s*s*(v=Math.max(f/c,c/f)/(w*t)),p=Math.max(h/g,g/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),g=s*s*v,(d=Math.max(h/g,g/l))>p){s-=u;break}p=d}y.push(a={value:s,dice:c<f,children:_.slice(b,m)}),a.dice?Ol(a,e,r,i,w?r+=f*s/w:o):Zl(a,e,r,w?e+=c*s/w:i,o),w-=s,b=m}return y}var Kl=function t(n){function e(t,e,r,i,o){Jl(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Ql);var th=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,c,f,s,l=-1,h=a.length,d=t.value;++l<h;){for(c=(u=a[l]).children,f=u.value=0,s=c.length;f<s;++f)u.value+=c[f].value;u.dice?Ol(u,e,r,i,r+=(o-r)*u.value/d):Zl(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value}else t._squarify=a=Jl(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Ql);function nh(t,n){return t[0]-n[0]||t[1]-n[1]}function eh(t){for(var n,e,r,i=t.length,o=[0,1],a=2,u=2;u<i;++u){for(;a>1&&(n=t[o[a-2]],e=t[o[a-1]],r=t[u],(e[0]-n[0])*(r[1]-n[1])-(e[1]-n[1])*(r[0]-n[0])<=0);)--a;o[a++]=u}return o.slice(0,a)}function rh(){return Math.random()}var ih=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(rh),oh=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(rh),ah=function t(n){function e(){var t=oh.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(rh),uh=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(rh),ch=function t(n){function e(t){var e=uh.source(n)(t);return function(){return e()/t}}return e.source=t,e}(rh),fh=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(rh);function sh(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function lh(t,n){switch(arguments.length){case 0:break;case 1:this.interpolator(t);break;default:this.interpolator(n).domain(t)}return this}var hh=Array.prototype,dh=hh.map,ph=hh.slice,vh={name:"implicit"};function gh(){var t=Qi(),n=[],e=[],r=vh;function i(i){var o=i+"",a=t.get(o);if(!a){if(r!==vh)return r;t.set(o,a=n.push(i))}return e[(a-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice();n=[],t=Qi();for(var r,o,a=-1,u=e.length;++a<u;)t.has(o=(r=e[a])+"")||t.set(o,n.push(r));return i},i.range=function(t){return arguments.length?(e=ph.call(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return gh(n,e).unknown(r)},sh.apply(i,arguments),i}function yh(){var t,n,e=gh().unknown(void 0),r=e.domain,i=e.range,o=[0,1],a=!1,u=0,c=0,f=.5;function s(){var e=r().length,s=o[1]<o[0],l=o[s-0],h=o[1-s];t=(h-l)/Math.max(1,e-u+2*c),a&&(t=Math.floor(t)),l+=(h-l-t*(e-u))*f,n=t*(1-u),a&&(l=Math.round(l),n=Math.round(n));var d=g(e).map(function(n){return l+t*n});return i(s?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),s()):r()},e.range=function(t){return arguments.length?(o=[+t[0],+t[1]],s()):o.slice()},e.rangeRound=function(t){return o=[+t[0],+t[1]],a=!0,s()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,s()):a},e.padding=function(t){return arguments.length?(u=Math.min(1,c=+t),s()):u},e.paddingInner=function(t){return arguments.length?(u=Math.min(1,t),s()):u},e.paddingOuter=function(t){return arguments.length?(c=+t,s()):c},e.align=function(t){return arguments.length?(f=Math.max(0,Math.min(1,t)),s()):f},e.copy=function(){return yh(r(),o).round(a).paddingInner(u).paddingOuter(c).align(f)},sh.apply(s(),arguments)}function _h(t){return+t}var bh=[0,1];function mh(t){return t}function xh(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e});var e}function wh(t){var n,e=t[0],r=t[t.length-1];return e>r&&(n=e,e=r,r=n),function(t){return Math.max(e,Math.min(r,t))}}function Mh(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=xh(i,r),o=e(a,o)):(r=xh(r,i),o=e(o,a)),function(t){return o(r(t))}}function Nh(t,n,e){var r=Math.min(t.length,n.length)-1,o=new Array(r),a=new Array(r),u=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<r;)o[u]=xh(t[u],t[u+1]),a[u]=e(n[u],n[u+1]);return function(n){var e=i(t,n,1,r)-1;return a[e](o[e](n))}}function Ah(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Th(){var t,n,e,r,i,o,a=bh,u=bh,c=ye,f=mh;function s(){return r=Math.min(a.length,u.length)>2?Nh:Mh,i=o=null,l}function l(n){return isNaN(n=+n)?e:(i||(i=r(a.map(t),u,c)))(t(f(n)))}return l.invert=function(e){return f(n((o||(o=r(u,a.map(t),he)))(e)))},l.domain=function(t){return arguments.length?(a=dh.call(t,_h),f===mh||(f=wh(a)),s()):a.slice()},l.range=function(t){return arguments.length?(u=ph.call(t),s()):u.slice()},l.rangeRound=function(t){return u=ph.call(t),c=_e,s()},l.clamp=function(t){return arguments.length?(f=t?wh(a):mh,l):f!==mh},l.interpolate=function(t){return arguments.length?(c=t,s()):c},l.unknown=function(t){return arguments.length?(e=t,l):e},function(e,r){return t=e,n=r,s()}}function Sh(t,n){return Th()(t,n)}function kh(n,e,r,i){var o,a=w(n,e,r);switch((i=wa(null==i?",f":i)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(e));return null!=i.precision||isNaN(o=za(a,u))||(i.precision=o),t.formatPrefix(i,u);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=Ra(a,Math.max(Math.abs(n),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=Pa(a))||(i.precision=o-2*("%"===i.type))}return t.format(i)}function Eh(t){var n=t.domain;return t.ticks=function(t){var e=n();return m(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return kh(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i=n(),o=0,a=i.length-1,u=i[o],c=i[a];return c<u&&(r=u,u=c,c=r,r=o,o=a,a=r),(r=x(u,c,e))>0?r=x(u=Math.floor(u/r)*r,c=Math.ceil(c/r)*r,e):r<0&&(r=x(u=Math.ceil(u*r)/r,c=Math.floor(c*r)/r,e)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(c/r)*r,n(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(c*r)/r,n(i)),t},t}function Ch(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Ph(t){return Math.log(t)}function zh(t){return Math.exp(t)}function Rh(t){return-Math.log(-t)}function Dh(t){return-Math.exp(-t)}function qh(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Lh(t){return function(n){return-t(-n)}}function Uh(n){var e,r,i=n(Ph,zh),o=i.domain,a=10;function u(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(a),r=function(t){return 10===t?qh:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(a),o()[0]<0?(e=Lh(e),r=Lh(r),n(Rh,Dh)):n(Ph,zh),i}return i.base=function(t){return arguments.length?(a=+t,u()):a},i.domain=function(t){return arguments.length?(o(t),u()):o()},i.ticks=function(t){var n,i=o(),u=i[0],c=i[i.length-1];(n=c<u)&&(h=u,u=c,c=h);var f,s,l,h=e(u),d=e(c),p=null==t?10:+t,v=[];if(!(a%1)&&d-h<p){if(h=Math.round(h)-1,d=Math.round(d)+1,u>0){for(;h<d;++h)for(s=1,f=r(h);s<a;++s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else for(;h<d;++h)for(s=a-1,f=r(h);s>=1;--s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else v=m(h,d,Math.min(d-h,p)).map(r);return n?v.reverse():v},i.tickFormat=function(n,o){if(null==o&&(o=10===a?".0e":","),"function"!=typeof o&&(o=t.format(o)),n===1/0)return o;null==n&&(n=10);var u=Math.max(1,a*n/i.ticks().length);return function(t){var n=t/r(Math.round(e(t)));return n*a<a-.5&&(n*=a),n<=u?o(t):""}},i.nice=function(){return o(Ch(o(),{floor:function(t){return r(Math.floor(e(t)))},ceil:function(t){return r(Math.ceil(e(t)))}}))},i}function Oh(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function Bh(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function Yh(t){var n=1,e=t(Oh(n),Bh(n));return e.constant=function(e){return arguments.length?t(Oh(n=+e),Bh(n)):n},Eh(e)}function Fh(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function Ih(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function jh(t){return t<0?-t*t:t*t}function Hh(t){var n=t(mh,mh),e=1;return n.exponent=function(n){return arguments.length?1===(e=+n)?t(mh,mh):.5===e?t(Ih,jh):t(Fh(e),Fh(1/e)):e},Eh(n)}function Xh(){var t=Hh(Th());return t.copy=function(){return Ah(t,Xh()).exponent(t.exponent())},sh.apply(t,arguments),t}var Gh=new Date,Vh=new Date;function $h(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=function(e){return $h(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return Gh.setTime(+n),Vh.setTime(+r),t(Gh),t(Vh),Math.floor(e(Gh,Vh))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var Wh=$h(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});Wh.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?$h(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):Wh:null};var Zh=Wh.range,Qh=6e4,Jh=6048e5,Kh=$h(function(t){t.setTime(t-t.getMilliseconds())},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),td=Kh.range,nd=$h(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds())},function(t,n){t.setTime(+t+n*Qh)},function(t,n){return(n-t)/Qh},function(t){return t.getMinutes()}),ed=nd.range,rd=$h(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds()-t.getMinutes()*Qh)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),id=rd.range,od=$h(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Qh)/864e5},function(t){return t.getDate()-1}),ad=od.range;function ud(t){return $h(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Qh)/Jh})}var cd=ud(0),fd=ud(1),sd=ud(2),ld=ud(3),hd=ud(4),dd=ud(5),pd=ud(6),vd=cd.range,gd=fd.range,yd=sd.range,_d=ld.range,bd=hd.range,md=dd.range,xd=pd.range,wd=$h(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Md=wd.range,Nd=$h(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});Nd.every=function(t){return isFinite(t=Math.floor(t))&&t>0?$h(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var Ad=Nd.range,Td=$h(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Qh)},function(t,n){return(n-t)/Qh},function(t){return t.getUTCMinutes()}),Sd=Td.range,kd=$h(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),Ed=kd.range,Cd=$h(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),Pd=Cd.range;function zd(t){return $h(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/Jh})}var Rd=zd(0),Dd=zd(1),qd=zd(2),Ld=zd(3),Ud=zd(4),Od=zd(5),Bd=zd(6),Yd=Rd.range,Fd=Dd.range,Id=qd.range,jd=Ld.range,Hd=Ud.range,Xd=Od.range,Gd=Bd.range,Vd=$h(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),$d=Vd.range,Wd=$h(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});Wd.every=function(t){return isFinite(t=Math.floor(t))&&t>0?$h(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var Zd=Wd.range;function Qd(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Jd(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Kd(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function tp(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,c=t.shortMonths,f=cp(i),s=fp(i),l=cp(o),h=fp(o),d=cp(a),p=fp(a),v=cp(u),g=fp(u),y=cp(c),_=fp(c),b={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:Ep,e:Ep,f:Dp,H:Cp,I:Pp,j:zp,L:Rp,m:qp,M:Lp,p:function(t){return i[+(t.getHours()>=12)]},Q:sv,s:lv,S:Up,u:Op,U:Bp,V:Yp,w:Fp,W:Ip,x:null,X:null,y:jp,Y:Hp,Z:Xp,"%":fv},m={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:Gp,e:Gp,f:Qp,H:Vp,I:$p,j:Wp,L:Zp,m:Jp,M:Kp,p:function(t){return i[+(t.getUTCHours()>=12)]},Q:sv,s:lv,S:tv,u:nv,U:ev,V:rv,w:iv,W:ov,x:null,X:null,y:av,Y:uv,Z:cv,"%":fv},x={a:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.w=p[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.w=h[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=y.exec(n.slice(e));return r?(t.m=_[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=v.exec(n.slice(e));return r?(t.m=g[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return N(t,n,e,r)},d:bp,e:bp,f:Ap,H:xp,I:xp,j:mp,L:Np,m:_p,M:wp,p:function(t,n,e){var r=f.exec(n.slice(e));return r?(t.p=s[r[0].toLowerCase()],e+r[0].length):-1},Q:Sp,s:kp,S:Mp,u:lp,U:hp,V:dp,w:sp,W:pp,x:function(t,n,r){return N(t,e,n,r)},X:function(t,n,e){return N(t,r,n,e)},y:gp,Y:vp,Z:yp,"%":Tp};function w(t,n){return function(e){var r,i,o,a=[],u=-1,c=0,f=t.length;for(e instanceof Date||(e=new Date(+e));++u<f;)37===t.charCodeAt(u)&&(a.push(t.slice(c,u)),null!=(i=ep[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),c=u+1);return a.push(t.slice(c,u)),a.join("")}}function M(t,n){return function(e){var r,i,o=Kd(1900);if(N(o,t,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("p"in o&&(o.H=o.H%12+12*o.p),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=Jd(Kd(o.y))).getUTCDay(),r=i>4||0===i?Dd.ceil(r):Dd(r),r=Cd.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=n(Kd(o.y))).getDay(),r=i>4||0===i?fd.ceil(r):fd(r),r=od.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?Jd(Kd(o.y)).getUTCDay():n(Kd(o.y)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,Jd(o)):n(o)}}function N(t,n,e,r){for(var i,o,a=0,u=n.length,c=e.length;a<u;){if(r>=c)return-1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=x[i in ep?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return b.x=w(e,b),b.X=w(r,b),b.c=w(n,b),m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),{format:function(t){var n=w(t+="",b);return n.toString=function(){return t},n},parse:function(t){var n=M(t+="",Qd);return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",m);return n.toString=function(){return t},n},utcParse:function(t){var n=M(t,Jd);return n.toString=function(){return t},n}}}var np,ep={"-":"",_:" ",0:"0"},rp=/^\s*\d+/,ip=/^%/,op=/[\\^$*+?|[\]().{}]/g;function ap(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function up(t){return t.replace(op,"\\$&")}function cp(t){return new RegExp("^(?:"+t.map(up).join("|")+")","i")}function fp(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function sp(t,n,e){var r=rp.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function lp(t,n,e){var r=rp.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function hp(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function dp(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function pp(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function vp(t,n,e){var r=rp.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function gp(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function yp(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function _p(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function bp(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function mp(t,n,e){var r=rp.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function xp(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function wp(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function Mp(t,n,e){var r=rp.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function Np(t,n,e){var r=rp.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Ap(t,n,e){var r=rp.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Tp(t,n,e){var r=ip.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function Sp(t,n,e){var r=rp.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function kp(t,n,e){var r=rp.exec(n.slice(e));return r?(t.Q=1e3*+r[0],e+r[0].length):-1}function Ep(t,n){return ap(t.getDate(),n,2)}function Cp(t,n){return ap(t.getHours(),n,2)}function Pp(t,n){return ap(t.getHours()%12||12,n,2)}function zp(t,n){return ap(1+od.count(Nd(t),t),n,3)}function Rp(t,n){return ap(t.getMilliseconds(),n,3)}function Dp(t,n){return Rp(t,n)+"000"}function qp(t,n){return ap(t.getMonth()+1,n,2)}function Lp(t,n){return ap(t.getMinutes(),n,2)}function Up(t,n){return ap(t.getSeconds(),n,2)}function Op(t){var n=t.getDay();return 0===n?7:n}function Bp(t,n){return ap(cd.count(Nd(t),t),n,2)}function Yp(t,n){var e=t.getDay();return t=e>=4||0===e?hd(t):hd.ceil(t),ap(hd.count(Nd(t),t)+(4===Nd(t).getDay()),n,2)}function Fp(t){return t.getDay()}function Ip(t,n){return ap(fd.count(Nd(t),t),n,2)}function jp(t,n){return ap(t.getFullYear()%100,n,2)}function Hp(t,n){return ap(t.getFullYear()%1e4,n,4)}function Xp(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+ap(n/60|0,"0",2)+ap(n%60,"0",2)}function Gp(t,n){return ap(t.getUTCDate(),n,2)}function Vp(t,n){return ap(t.getUTCHours(),n,2)}function $p(t,n){return ap(t.getUTCHours()%12||12,n,2)}function Wp(t,n){return ap(1+Cd.count(Wd(t),t),n,3)}function Zp(t,n){return ap(t.getUTCMilliseconds(),n,3)}function Qp(t,n){return Zp(t,n)+"000"}function Jp(t,n){return ap(t.getUTCMonth()+1,n,2)}function Kp(t,n){return ap(t.getUTCMinutes(),n,2)}function tv(t,n){return ap(t.getUTCSeconds(),n,2)}function nv(t){var n=t.getUTCDay();return 0===n?7:n}function ev(t,n){return ap(Rd.count(Wd(t),t),n,2)}function rv(t,n){var e=t.getUTCDay();return t=e>=4||0===e?Ud(t):Ud.ceil(t),ap(Ud.count(Wd(t),t)+(4===Wd(t).getUTCDay()),n,2)}function iv(t){return t.getUTCDay()}function ov(t,n){return ap(Dd.count(Wd(t),t),n,2)}function av(t,n){return ap(t.getUTCFullYear()%100,n,2)}function uv(t,n){return ap(t.getUTCFullYear()%1e4,n,4)}function cv(){return"+0000"}function fv(){return"%"}function sv(t){return+t}function lv(t){return Math.floor(+t/1e3)}function hv(n){return np=tp(n),t.timeFormat=np.format,t.timeParse=np.parse,t.utcFormat=np.utcFormat,t.utcParse=np.utcParse,np}hv({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var dv=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ");var pv=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),vv=1e3,gv=60*vv,yv=60*gv,_v=24*yv,bv=7*_v,mv=30*_v,xv=365*_v;function wv(t){return new Date(t)}function Mv(t){return t instanceof Date?+t:+new Date(+t)}function Nv(t,n,r,i,o,a,u,c,f){var s=Sh(mh,mh),l=s.invert,h=s.domain,d=f(".%L"),p=f(":%S"),v=f("%I:%M"),g=f("%I %p"),y=f("%a %d"),_=f("%b %d"),b=f("%B"),m=f("%Y"),x=[[u,1,vv],[u,5,5*vv],[u,15,15*vv],[u,30,30*vv],[a,1,gv],[a,5,5*gv],[a,15,15*gv],[a,30,30*gv],[o,1,yv],[o,3,3*yv],[o,6,6*yv],[o,12,12*yv],[i,1,_v],[i,2,2*_v],[r,1,bv],[n,1,mv],[n,3,3*mv],[t,1,xv]];function M(e){return(u(e)<e?d:a(e)<e?p:o(e)<e?v:i(e)<e?g:n(e)<e?r(e)<e?y:_:t(e)<e?b:m)(e)}function N(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=e(function(t){return t[2]}).right(x,a);u===x.length?(o=w(r/xv,i/xv,n),n=t):u?(o=(u=x[a/x[u-1][2]<x[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(w(r,i,n),1),n=c)}return null==o?n:n.every(o)}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?h(dh.call(t,Mv)):h().map(wv)},s.ticks=function(t,n){var e,r=h(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=(e=N(t,i,o,n))?e.range(i,o+1):[],a?e.reverse():e},s.tickFormat=function(t,n){return null==n?M:f(n)},s.nice=function(t,n){var e=h();return(t=N(t,e[0],e[e.length-1],n))?h(Ch(e,t)):s},s.copy=function(){return Ah(s,Nv(t,n,r,i,o,a,u,c,f))},s}function Av(){var t,n,e,r,i,o=0,a=1,u=mh,c=!1;function f(n){return isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,c?Math.max(0,Math.min(1,n)):n))}return f.domain=function(i){return arguments.length?(t=r(o=+i[0]),n=r(a=+i[1]),e=t===n?0:1/(n-t),f):[o,a]},f.clamp=function(t){return arguments.length?(c=!!t,f):c},f.interpolator=function(t){return arguments.length?(u=t,f):u},f.unknown=function(t){return arguments.length?(i=t,f):i},function(i){return r=i,t=i(o),n=i(a),e=t===n?0:1/(n-t),f}}function Tv(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Sv(){var t=Hh(Av());return t.copy=function(){return Tv(t,Sv()).exponent(t.exponent())},lh.apply(t,arguments)}function kv(){var t,n,e,r,i,o,a,u=0,c=.5,f=1,s=mh,l=!1;function h(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-n)*(t<n?r:i),s(l?Math.max(0,Math.min(1,t)):t))}return h.domain=function(a){return arguments.length?(t=o(u=+a[0]),n=o(c=+a[1]),e=o(f=+a[2]),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h):[u,c,f]},h.clamp=function(t){return arguments.length?(l=!!t,h):l},h.interpolator=function(t){return arguments.length?(s=t,h):s},h.unknown=function(t){return arguments.length?(a=t,h):a},function(a){return o=a,t=a(u),n=a(c),e=a(f),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h}}function Ev(){var t=Hh(kv());return t.copy=function(){return Tv(t,Ev()).exponent(t.exponent())},lh.apply(t,arguments)}function Cv(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}var Pv=Cv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),zv=Cv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Rv=Cv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),Dv=Cv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),qv=Cv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),Lv=Cv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),Uv=Cv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),Ov=Cv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),Bv=Cv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");function Yv(t){return ce(t[t.length-1])}var Fv=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Cv),Iv=Yv(Fv),jv=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Cv),Hv=Yv(jv),Xv=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Cv),Gv=Yv(Xv),Vv=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Cv),$v=Yv(Vv),Wv=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Cv),Zv=Yv(Wv),Qv=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Cv),Jv=Yv(Qv),Kv=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Cv),tg=Yv(Kv),ng=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Cv),eg=Yv(ng),rg=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Cv),ig=Yv(rg),og=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Cv),ag=Yv(og),ug=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Cv),cg=Yv(ug),fg=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Cv),sg=Yv(fg),lg=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Cv),hg=Yv(lg),dg=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Cv),pg=Yv(dg),vg=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Cv),gg=Yv(vg),yg=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Cv),_g=Yv(yg),bg=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Cv),mg=Yv(bg),xg=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Cv),wg=Yv(xg),Mg=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Cv),Ng=Yv(Mg),Ag=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Cv),Tg=Yv(Ag),Sg=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Cv),kg=Yv(Sg),Eg=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Cv),Cg=Yv(Eg),Pg=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Cv),zg=Yv(Pg),Rg=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Cv),Dg=Yv(Rg),qg=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Cv),Lg=Yv(qg),Ug=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Cv),Og=Yv(Ug),Bg=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Cv),Yg=Yv(Bg),Fg=je(Zn(300,.5,0),Zn(-240,.5,1)),Ig=je(Zn(-100,.75,.35),Zn(80,1.5,.8)),jg=je(Zn(260,.75,.35),Zn(80,1.5,.8)),Hg=Zn();var Xg=gn(),Gg=Math.PI/3,Vg=2*Math.PI/3;function $g(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}var Wg=$g(Cv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),Zg=$g(Cv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),Qg=$g(Cv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),Jg=$g(Cv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function Kg(t){return function(){return t}}var ty=Math.abs,ny=Math.atan2,ey=Math.cos,ry=Math.max,iy=Math.min,oy=Math.sin,ay=Math.sqrt,uy=1e-12,cy=Math.PI,fy=cy/2,sy=2*cy;function ly(t){return t>=1?fy:t<=-1?-fy:Math.asin(t)}function hy(t){return t.innerRadius}function dy(t){return t.outerRadius}function py(t){return t.startAngle}function vy(t){return t.endAngle}function gy(t){return t&&t.padAngle}function yy(t,n,e,r,i,o,a){var u=t-e,c=n-r,f=(a?o:-o)/ay(u*u+c*c),s=f*c,l=-f*u,h=t+s,d=n+l,p=e+s,v=r+l,g=(h+p)/2,y=(d+v)/2,_=p-h,b=v-d,m=_*_+b*b,x=i-o,w=h*v-p*d,M=(b<0?-1:1)*ay(ry(0,x*x*m-w*w)),N=(w*b-_*M)/m,A=(-w*_-b*M)/m,T=(w*b+_*M)/m,S=(-w*_+b*M)/m,k=N-g,E=A-y,C=T-g,P=S-y;return k*k+E*E>C*C+P*P&&(N=T,A=S),{cx:N,cy:A,x01:-s,y01:-l,x11:N*(i/x-1),y11:A*(i/x-1)}}function _y(t){this._context=t}function by(t){return new _y(t)}function my(t){return t[0]}function xy(t){return t[1]}function wy(){var t=my,n=xy,e=Kg(!0),r=null,i=by,o=null;function a(a){var u,c,f,s=a.length,l=!1;for(null==r&&(o=i(f=Hi())),u=0;u<=s;++u)!(u<s&&e(c=a[u],u,a))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(c,u,a),+n(c,u,a));if(f)return o=null,f+""||null}return a.x=function(n){return arguments.length?(t="function"==typeof n?n:Kg(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:Kg(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:Kg(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function My(){var t=my,n=null,e=Kg(0),r=xy,i=Kg(!0),o=null,a=by,u=null;function c(c){var f,s,l,h,d,p=c.length,v=!1,g=new Array(p),y=new Array(p);for(null==o&&(u=a(d=Hi())),f=0;f<=p;++f){if(!(f<p&&i(h=c[f],f,c))===v)if(v=!v)s=f,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),l=f-1;l>=s;--l)u.point(g[l],y[l]);u.lineEnd(),u.areaEnd()}v&&(g[f]=+t(h,f,c),y[f]=+e(h,f,c),u.point(n?+n(h,f,c):g[f],r?+r(h,f,c):y[f]))}if(d)return u=null,d+""||null}function f(){return wy().defined(i).curve(a).context(o)}return c.x=function(e){return arguments.length?(t="function"==typeof e?e:Kg(+e),n=null,c):t},c.x0=function(n){return arguments.length?(t="function"==typeof n?n:Kg(+n),c):t},c.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:Kg(+t),c):n},c.y=function(t){return arguments.length?(e="function"==typeof t?t:Kg(+t),r=null,c):e},c.y0=function(t){return arguments.length?(e="function"==typeof t?t:Kg(+t),c):e},c.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:Kg(+t),c):r},c.lineX0=c.lineY0=function(){return f().x(t).y(e)},c.lineY1=function(){return f().x(t).y(r)},c.lineX1=function(){return f().x(n).y(e)},c.defined=function(t){return arguments.length?(i="function"==typeof t?t:Kg(!!t),c):i},c.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),c):a},c.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),c):o},c}function Ny(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Ay(t){return t}_y.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var Ty=ky(by);function Sy(t){this._curve=t}function ky(t){function n(n){return new Sy(t(n))}return n._curve=t,n}function Ey(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(ky(t)):n()._curve},t}function Cy(){return Ey(wy().curve(Ty))}function Py(){var t=My().curve(Ty),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Ey(e())},delete t.lineX0,t.lineEndAngle=function(){return Ey(r())},delete t.lineX1,t.lineInnerRadius=function(){return Ey(i())},delete t.lineY0,t.lineOuterRadius=function(){return Ey(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(ky(t)):n()._curve},t}function zy(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}Sy.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var Ry=Array.prototype.slice;function Dy(t){return t.source}function qy(t){return t.target}function Ly(t){var n=Dy,e=qy,r=my,i=xy,o=null;function a(){var a,u=Ry.call(arguments),c=n.apply(this,u),f=e.apply(this,u);if(o||(o=a=Hi()),t(o,+r.apply(this,(u[0]=c,u)),+i.apply(this,u),+r.apply(this,(u[0]=f,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:Kg(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:Kg(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function Uy(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function Oy(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function By(t,n,e,r,i){var o=zy(n,e),a=zy(n,e=(e+i)/2),u=zy(r,e),c=zy(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],c[0],c[1])}var Yy={draw:function(t,n){var e=Math.sqrt(n/cy);t.moveTo(e,0),t.arc(0,0,e,0,sy)}},Fy={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},Iy=Math.sqrt(1/3),jy=2*Iy,Hy={draw:function(t,n){var e=Math.sqrt(n/jy),r=e*Iy;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},Xy=Math.sin(cy/10)/Math.sin(7*cy/10),Gy=Math.sin(sy/10)*Xy,Vy=-Math.cos(sy/10)*Xy,$y={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=Gy*e,i=Vy*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=sy*o/5,u=Math.cos(a),c=Math.sin(a);t.lineTo(c*e,-u*e),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},Wy={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},Zy=Math.sqrt(3),Qy={draw:function(t,n){var e=-Math.sqrt(n/(3*Zy));t.moveTo(0,2*e),t.lineTo(-Zy*e,-e),t.lineTo(Zy*e,-e),t.closePath()}},Jy=Math.sqrt(3)/2,Ky=1/Math.sqrt(12),t_=3*(Ky/2+1),n_={draw:function(t,n){var e=Math.sqrt(n/t_),r=e/2,i=e*Ky,o=r,a=e*Ky+e,u=-o,c=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,c),t.lineTo(-.5*r-Jy*i,Jy*r+-.5*i),t.lineTo(-.5*o-Jy*a,Jy*o+-.5*a),t.lineTo(-.5*u-Jy*c,Jy*u+-.5*c),t.lineTo(-.5*r+Jy*i,-.5*i-Jy*r),t.lineTo(-.5*o+Jy*a,-.5*a-Jy*o),t.lineTo(-.5*u+Jy*c,-.5*c-Jy*u),t.closePath()}},e_=[Yy,Fy,Hy,Wy,$y,Qy,n_];function r_(){}function i_(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function o_(t){this._context=t}function a_(t){this._context=t}function u_(t){this._context=t}function c_(t,n){this._basis=new o_(t),this._beta=n}o_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:i_(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:i_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},a_.prototype={areaStart:r_,areaEnd:r_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:i_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},u_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:i_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},c_.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*a),this._beta*n[c]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var f_=function t(n){function e(t){return 1===n?new o_(t):new c_(t,n)}return e.beta=function(n){return t(+n)},e}(.85);function s_(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function l_(t,n){this._context=t,this._k=(1-n)/6}l_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:s_(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:s_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var h_=function t(n){function e(t){return new l_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function d_(t,n){this._context=t,this._k=(1-n)/6}d_.prototype={areaStart:r_,areaEnd:r_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:s_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var p_=function t(n){function e(t){return new d_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function v_(t,n){this._context=t,this._k=(1-n)/6}v_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:s_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var g_=function t(n){function e(t){return new v_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function y_(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>uy){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>uy){var f=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*f+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*f+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function __(t,n){this._context=t,this._alpha=n}__.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:y_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var b_=function t(n){function e(t){return n?new __(t,n):new l_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function m_(t,n){this._context=t,this._alpha=n}m_.prototype={areaStart:r_,areaEnd:r_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:y_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var x_=function t(n){function e(t){return n?new m_(t,n):new d_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function w_(t,n){this._context=t,this._alpha=n}w_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:y_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var M_=function t(n){function e(t){return n?new w_(t,n):new v_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function N_(t){this._context=t}function A_(t){return t<0?-1:1}function T_(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(A_(o)+A_(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function S_(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function k_(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function E_(t){this._context=t}function C_(t){this._context=new P_(t)}function P_(t){this._context=t}function z_(t){this._context=t}function R_(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function D_(t,n){this._context=t,this._t=n}function q_(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function L_(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function U_(t,n){return t[n]}function O_(t){var n=t.map(B_);return L_(t).sort(function(t,e){return n[t]-n[e]})}function B_(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e);return r}function Y_(t){var n=t.map(F_);return L_(t).sort(function(t,e){return n[t]-n[e]})}function F_(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function I_(t){return function(){return t}}function j_(t){return t[0]}function H_(t){return t[1]}function X_(){this._=null}function G_(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function V_(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function $_(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function W_(t){for(;t.L;)t=t.L;return t}function Z_(t,n,e,r){var i=[null,null],o=mb.push(i)-1;return i.left=t,i.right=n,e&&J_(i,t,n,e),r&&J_(i,n,t,r),_b[t.index].halfedges.push(o),_b[n.index].halfedges.push(o),i}function Q_(t,n,e){var r=[n,e];return r.left=t,r}function J_(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function K_(t,n,e,r,i){var o,a=t[0],u=t[1],c=a[0],f=a[1],s=0,l=1,h=u[0]-c,d=u[1]-f;if(o=n-c,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}if(o=r-c,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){if(o<s)return;o<l&&(l=o)}if(o=e-f,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<l&&(l=o)}else if(d>0){if(o>l)return;o>s&&(s=o)}if(o=i-f,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<l&&(l=o)}return!(s>0||l<1)||(s>0&&(t[0]=[c+s*h,f+s*d]),l<1&&(t[1]=[c+l*h,f+l*d]),!0)}}}}}function tb(t,n,e,r,i){var o=t[1];if(o)return!0;var a,u,c=t[0],f=t.left,s=t.right,l=f[0],h=f[1],d=s[0],p=s[1],v=(l+d)/2,g=(h+p)/2;if(p===h){if(v<n||v>=r)return;if(l>d){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=g-(a=(l-d)/(p-h))*v,a<-1||a>1)if(l>d){if(c){if(c[1]>=i)return}else c=[(e-u)/a,e];o=[(i-u)/a,i]}else{if(c){if(c[1]<e)return}else c=[(i-u)/a,i];o=[(e-u)/a,e]}else if(h<p){if(c){if(c[0]>=r)return}else c=[n,a*n+u];o=[r,a*r+u]}else{if(c){if(c[0]<n)return}else c=[r,a*r+u];o=[n,a*n+u]}return t[0]=c,t[1]=o,!0}function nb(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function eb(t,n){return n[+(n.left!==t.site)]}function rb(t,n){return n[+(n.left===t.site)]}N_.prototype={areaStart:r_,areaEnd:r_,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},E_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:k_(this,this._t0,S_(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,k_(this,S_(this,e=T_(this,t,n)),e);break;default:k_(this,this._t0,e=T_(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(C_.prototype=Object.create(E_.prototype)).point=function(t,n){E_.prototype.point.call(this,n,t)},P_.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},z_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=R_(t),i=R_(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},D_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},X_.prototype={constructor:X_,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=W_(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(V_(this,e),e=(t=e).U),e.C=!1,r.C=!0,$_(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&($_(this,e),e=(t=e).U),e.C=!1,r.C=!0,V_(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?W_(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,V_(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,$_(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,V_(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,$_(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,V_(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,$_(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var ib,ob=[];function ab(){G_(this),this.x=this.y=this.arc=this.site=this.cy=null}function ub(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],c=r[0]-a,f=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(c*l-f*s);if(!(h>=-wb)){var d=c*c+f*f,p=s*s+l*l,v=(l*d-f*p)/h,g=(c*p-s*d)/h,y=ob.pop()||new ab;y.arc=t,y.site=i,y.x=v+a,y.y=(y.cy=g+u)+Math.sqrt(v*v+g*g),t.circle=y;for(var _=null,b=bb._;b;)if(y.y<b.y||y.y===b.y&&y.x<=b.x){if(!b.L){_=b.P;break}b=b.L}else{if(!b.R){_=b;break}b=b.R}bb.insert(_,y),_||(ib=y)}}}}function cb(t){var n=t.circle;n&&(n.P||(ib=n.N),bb.remove(n),ob.push(n),G_(n),t.circle=null)}var fb=[];function sb(){G_(this),this.edge=this.site=this.circle=null}function lb(t){var n=fb.pop()||new sb;return n.site=t,n}function hb(t){cb(t),yb.remove(t),fb.push(t),G_(t)}function db(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];hb(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<xb&&Math.abs(r-c.circle.cy)<xb;)o=c.P,u.unshift(c),hb(c),c=o;u.unshift(c),cb(c);for(var f=a;f.circle&&Math.abs(e-f.circle.x)<xb&&Math.abs(r-f.circle.cy)<xb;)a=f.N,u.push(f),hb(f),f=a;u.push(f),cb(f);var s,l=u.length;for(s=1;s<l;++s)f=u[s],c=u[s-1],J_(f.edge,c.site,f.site,i);c=u[0],(f=u[l-1]).edge=Z_(c.site,f.site,null,i),ub(c),ub(f)}function pb(t){for(var n,e,r,i,o=t[0],a=t[1],u=yb._;u;)if((r=vb(u,a)-o)>xb)u=u.L;else{if(!((i=o-gb(u,a))>xb)){r>-xb?(n=u.P,e=u):i>-xb?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}!function(t){_b[t.index]={site:t,halfedges:[]}}(t);var c=lb(t);if(yb.insert(n,c),n||e){if(n===e)return cb(n),e=lb(n.site),yb.insert(c,e),c.edge=e.edge=Z_(n.site,c.site),ub(n),void ub(e);if(e){cb(n),cb(e);var f=n.site,s=f[0],l=f[1],h=t[0]-s,d=t[1]-l,p=e.site,v=p[0]-s,g=p[1]-l,y=2*(h*g-d*v),_=h*h+d*d,b=v*v+g*g,m=[(g*_-d*b)/y+s,(h*b-v*_)/y+l];J_(e.edge,f,p,m),c.edge=Z_(f,t,null,m),e.edge=Z_(t,p,null,m),ub(n),ub(e)}else c.edge=Z_(n.site,c.site)}}function vb(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return-1/0;var u=(e=a.site)[0],c=e[1],f=c-n;if(!f)return u;var s=u-r,l=1/o-1/f,h=s/f;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*f)-c+f/2+i-o/2)))/l+r:(r+u)/2}function gb(t,n){var e=t.N;if(e)return vb(e,n);var r=t.site;return r[1]===n?r[0]:1/0}var yb,_b,bb,mb,xb=1e-6,wb=1e-12;function Mb(t,n){return n[1]-t[1]||n[0]-t[0]}function Nb(t,n){var e,r,i,o=t.sort(Mb).pop();for(mb=[],_b=new Array(t.length),yb=new X_,bb=new X_;;)if(i=ib,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(pb(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;db(i.arc)}if(function(){for(var t,n,e,r,i=0,o=_b.length;i<o;++i)if((t=_b[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=nb(t,mb[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e]}}(),n){var a=+n[0][0],u=+n[0][1],c=+n[1][0],f=+n[1][1];!function(t,n,e,r){for(var i,o=mb.length;o--;)tb(i=mb[o],t,n,e,r)&&K_(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>xb||Math.abs(i[0][1]-i[1][1])>xb)||delete mb[o]}(a,u,c,f),function(t,n,e,r){var i,o,a,u,c,f,s,l,h,d,p,v,g=_b.length,y=!0;for(i=0;i<g;++i)if(o=_b[i]){for(a=o.site,u=(c=o.halfedges).length;u--;)mb[c[u]]||c.splice(u,1);for(u=0,f=c.length;u<f;)p=(d=rb(o,mb[c[u]]))[0],v=d[1],l=(s=eb(o,mb[c[++u%f]]))[0],h=s[1],(Math.abs(p-l)>xb||Math.abs(v-h)>xb)&&(c.splice(u,0,mb.push(Q_(a,d,Math.abs(p-t)<xb&&r-v>xb?[t,Math.abs(l-t)<xb?h:r]:Math.abs(v-r)<xb&&e-p>xb?[Math.abs(h-r)<xb?l:e,r]:Math.abs(p-e)<xb&&v-n>xb?[e,Math.abs(l-e)<xb?h:n]:Math.abs(v-n)<xb&&p-t>xb?[Math.abs(h-n)<xb?l:t,n]:null))-1),++f);f&&(y=!1)}if(y){var _,b,m,x=1/0;for(i=0,y=null;i<g;++i)(o=_b[i])&&(m=(_=(a=o.site)[0]-t)*_+(b=a[1]-n)*b)<x&&(x=m,y=o);if(y){var w=[t,n],M=[t,r],N=[e,r],A=[e,n];y.halfedges.push(mb.push(Q_(a=y.site,w,M))-1,mb.push(Q_(a,M,N))-1,mb.push(Q_(a,N,A))-1,mb.push(Q_(a,A,w))-1)}}for(i=0;i<g;++i)(o=_b[i])&&(o.halfedges.length||delete _b[i])}(a,u,c,f)}this.edges=mb,this.cells=_b,yb=bb=mb=_b=null}function Ab(t){return function(){return t}}function Tb(t,n,e){this.target=t,this.type=n,this.transform=e}function Sb(t,n,e){this.k=t,this.x=n,this.y=e}Nb.prototype={constructor:Nb,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return eb(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u,c,f,s=e.site,l=-1,h=n[i[o-1]],d=h.left===s?h.right:h.left;++l<o;)a=d,d=(h=n[i[l]]).left===s?h.right:h.left,a&&d&&r<a.index&&r<d.index&&(c=a,f=d,((u=s)[0]-f[0])*(c[1]-u[1])-(u[0]-c[0])*(f[1]-u[1])<0)&&t.push([s.data,a.data,d.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var c=t-i.site[0],f=n-i.site[1],s=c*c+f*f;do{i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var c=t-u[0],f=n-u[1],l=c*c+f*f;l<s&&(s=l,a=u.index)}})}while(null!==a);return o._found=r,null==e||s<=e*e?i.site:null}},Sb.prototype={constructor:Sb,scale:function(t){return 1===t?this:new Sb(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Sb(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var kb=new Sb(1,0,0);function Eb(t){return t.__zoom||kb}function Cb(){t.event.stopImmediatePropagation()}function Pb(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function zb(){return!t.event.button}function Rb(){var t,n,e=this;return e instanceof SVGElement?(t=(e=e.ownerSVGElement||e).width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function Db(){return this.__zoom||kb}function qb(){return-t.event.deltaY*(t.event.deltaMode?120:1)/500}function Lb(){return"ontouchstart"in this}function Ub(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}Eb.prototype=Sb.prototype,t.version="5.9.1",t.bisect=i,t.bisectRight=i,t.bisectLeft=o,t.ascending=n,t.bisector=e,t.cross=function(t,n,e){var r,i,o,u,c=t.length,f=n.length,s=new Array(c*f);for(null==e&&(e=a),r=o=0;r<c;++r)for(u=t[r],i=0;i<f;++i,++o)s[o]=e(u,n[i]);return s},t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=f,t.extent=s,t.histogram=function(){var t=v,n=s,e=M;function r(r){var o,a,u=r.length,c=new Array(u);for(o=0;o<u;++o)c[o]=t(r[o],o,r);var f=n(c),s=f[0],l=f[1],h=e(c,s,l);Array.isArray(h)||(h=w(s,l,h),h=g(Math.ceil(s/h)*h,l,h));for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var p,v=new Array(d+1);for(o=0;o<=d;++o)(p=v[o]=[]).x0=o>0?h[o-1]:s,p.x1=o<d?h[o]:l;for(o=0;o<u;++o)s<=(a=c[o])&&a<=l&&v[i(h,a,0,d)].push(r[o]);return v}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:p(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:p([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?p(h.call(t)):p(t),r):e},r},t.thresholdFreedmanDiaconis=function(t,e,r){return t=d.call(t,u).sort(n),Math.ceil((r-e)/(2*(N(t,.75)-N(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*f(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=M,t.max=A,t.mean=function(t,n){var e,r=t.length,i=r,o=-1,a=0;if(null==n)for(;++o<r;)isNaN(e=u(t[o]))?--i:a+=e;else for(;++o<r;)isNaN(e=u(n(t[o],o,t)))?--i:a+=e;if(i)return a/i},t.median=function(t,e){var r,i=t.length,o=-1,a=[];if(null==e)for(;++o<i;)isNaN(r=u(t[o]))||a.push(r);else for(;++o<i;)isNaN(r=u(e(t[o],o,t)))||a.push(r);return N(a.sort(n),.5)},t.merge=T,t.min=S,t.pairs=function(t,n){null==n&&(n=a);for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e]);return o},t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.quantile=N,t.range=g,t.scan=function(t,e){if(r=t.length){var r,i,o=0,a=0,u=t[a];for(null==e&&(e=n);++o<r;)(e(i=t[o],u)<0||0!==e(u,u))&&(u=i,a=o);return 0===e(u,u)?a:void 0}},t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.ticks=m,t.tickIncrement=x,t.tickStep=w,t.transpose=k,t.variance=c,t.zip=function(){return k(arguments)},t.axisTop=function(t){return Y(z,t)},t.axisRight=function(t){return Y(R,t)},t.axisBottom=function(t){return Y(D,t)},t.axisLeft=function(t){return Y(q,t)},t.brush=function(){return Pi(mi)},t.brushX=function(){return Pi(_i)},t.brushY=function(){return Pi(bi)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.chord=function(){var t=0,n=null,e=null,r=null;function i(i){var o,a,u,c,f,s,l=i.length,h=[],d=g(l),p=[],v=[],y=v.groups=new Array(l),_=new Array(l*l);for(o=0,f=-1;++f<l;){for(a=0,s=-1;++s<l;)a+=i[f][s];h.push(a),p.push(g(l)),o+=a}for(n&&d.sort(function(t,e){return n(h[t],h[e])}),e&&p.forEach(function(t,n){t.sort(function(t,r){return e(i[n][t],i[n][r])})}),c=(o=Ui(0,Li-t*l)/o)?t:Li/l,a=0,f=-1;++f<l;){for(u=a,s=-1;++s<l;){var b=d[f],m=p[b][s],x=i[b][m],w=a,M=a+=x*o;_[m*l+b]={index:b,subindex:m,startAngle:w,endAngle:M,value:x}}y[b]={index:b,startAngle:u,endAngle:a,value:h[b]},a+=c}for(f=-1;++f<l;)for(s=f-1;++s<l;){var N=_[s*l+f],A=_[f*l+s];(N.value||A.value)&&v.push(N.value<A.value?{source:A,target:N}:{source:N,target:A})}return r?v.sort(r):v}return i.padAngle=function(n){return arguments.length?(t=Ui(0,n),i):t},i.sortGroups=function(t){return arguments.length?(n=t,i):n},i.sortSubgroups=function(t){return arguments.length?(e=t,i):e},i.sortChords=function(t){return arguments.length?(null==t?r=null:(n=t,r=function(t,e){return n(t.source.value+t.target.value,e.source.value+e.target.value)})._=t,i):r&&r._;var n},i},t.ribbon=function(){var t=Xi,n=Gi,e=Vi,r=$i,i=Wi,o=null;function a(){var a,u=Oi.call(arguments),c=t.apply(this,u),f=n.apply(this,u),s=+e.apply(this,(u[0]=c,u)),l=r.apply(this,u)-qi,h=i.apply(this,u)-qi,d=s*zi(l),p=s*Ri(l),v=+e.apply(this,(u[0]=f,u)),g=r.apply(this,u)-qi,y=i.apply(this,u)-qi;if(o||(o=a=Hi()),o.moveTo(d,p),o.arc(0,0,s,l,h),l===g&&h===y||(o.quadraticCurveTo(0,0,v*zi(g),v*Ri(g)),o.arc(0,0,v,g,y)),o.quadraticCurveTo(0,0,d,p),o.closePath(),a)return o=null,a+""||null}return a.radius=function(t){return arguments.length?(e="function"==typeof t?t:Bi(+t),a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Bi(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Bi(+t),a):i},a.source=function(n){return arguments.length?(t=n,a):t},a.target=function(t){return arguments.length?(n=t,a):n},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a},t.nest=function(){var t,n,e,r=[],i=[];function o(e,i,a,u){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;for(var c,f,s,l=-1,h=e.length,d=r[i++],p=Qi(),v=a();++l<h;)(s=p.get(c=d(f=e[l])+""))?s.push(f):p.set(c,[f]);return p.each(function(t,n){u(v,n,o(t,i,a,u))}),v}return e={object:function(t){return o(t,0,Ji,Ki)},map:function(t){return o(t,0,to,no)},entries:function(t){return function t(e,o){if(++o>r.length)return e;var a,u=i[o-1];return null!=n&&o>=r.length?a=e.entries():(a=[],e.each(function(n,e){a.push({key:e,values:t(n,o)})})),null!=u?a.sort(function(t,n){return u(t.key,n.key)}):a}(o(t,0,to,no),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}},t.set=io,t.map=Qi,t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.color=hn,t.rgb=gn,t.hsl=mn,t.lab=Rn,t.hcl=Yn,t.lch=function(t,n,e,r){return 1===arguments.length?Bn(t):new Fn(e,n,t,null==r?1:r)},t.gray=function(t,n){return new Dn(t,0,0,null==n?1:n)},t.cubehelix=Zn,t.contours=po,t.contourDensity=function(){var t=yo,n=_o,e=bo,r=960,i=500,o=20,a=2,u=3*o,c=r+2*u>>a,f=i+2*u>>a,s=uo(20);function l(r){var i=new Float32Array(c*f),l=new Float32Array(c*f);r.forEach(function(r,o,s){var l=+t(r,o,s)+u>>a,h=+n(r,o,s)+u>>a,d=+e(r,o,s);l>=0&&l<c&&h>=0&&h<f&&(i[l+h*c]+=d)}),vo({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),go({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),vo({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),go({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),vo({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),go({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a);var d=s(i);if(!Array.isArray(d)){var p=A(i);d=w(0,p,d),(d=g(0,Math.floor(p/d)*d,d)).shift()}return po().thresholds(d).size([c,f])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(v)}function v(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return c=r+2*(u=3*o)>>a,f=i+2*u>>a,l}return l.x=function(n){return arguments.length?(t="function"==typeof n?n:uo(+n),l):t},l.y=function(t){return arguments.length?(n="function"==typeof t?t:uo(+t),l):n},l.weight=function(t){return arguments.length?(e="function"==typeof t?t:uo(+t),l):e},l.size=function(t){if(!arguments.length)return[r,i];var n=Math.ceil(t[0]),e=Math.ceil(t[1]);if(!(n>=0||n>=0))throw new Error("invalid size");return r=n,i=e,y()},l.cellSize=function(t){if(!arguments.length)return 1<<a;if(!((t=+t)>=1))throw new Error("invalid cell size");return a=Math.floor(Math.log(t)/Math.LN2),y()},l.thresholds=function(t){return arguments.length?(s="function"==typeof t?t:Array.isArray(t)?uo(oo.call(t)):uo(t),l):s},l.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},l},t.dispatch=I,t.drag=function(){var n,e,r,i,o=Gt,a=Vt,u=$t,c=Wt,f={},s=I("start","drag","end"),l=0,h=0;function d(t){t.on("mousedown.drag",p).filter(c).on("touchstart.drag",y).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(){if(!i&&o.apply(this,arguments)){var u=m("mouse",a.apply(this,arguments),Ot,this,arguments);u&&(zt(t.event.view).on("mousemove.drag",v,!0).on("mouseup.drag",g,!0),It(t.event.view),Yt(),r=!1,n=t.event.clientX,e=t.event.clientY,u("start"))}}function v(){if(Ft(),!r){var i=t.event.clientX-n,o=t.event.clientY-e;r=i*i+o*o>h}f.mouse("drag")}function g(){zt(t.event.view).on("mousemove.drag mouseup.drag",null),jt(t.event.view,r),Ft(),f.mouse("end")}function y(){if(o.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=a.apply(this,arguments),u=r.length;for(n=0;n<u;++n)(e=m(r[n].identifier,i,Bt,this,arguments))&&(Yt(),e("start"))}}function _(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=f[r[n].identifier])&&(Ft(),e("drag"))}function b(){var n,e,r=t.event.changedTouches,o=r.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),n=0;n<o;++n)(e=f[r[n].identifier])&&(Yt(),e("end"))}function m(n,e,r,i,o){var a,c,h,p=r(e,n),v=s.copy();if(St(new Xt(d,"beforestart",a,n,l,p[0],p[1],0,0,v),function(){return null!=(t.event.subject=a=u.apply(i,o))&&(c=a.x-p[0]||0,h=a.y-p[1]||0,!0)}))return function t(u){var s,g=p;switch(u){case"start":f[n]=t,s=l++;break;case"end":delete f[n],--l;case"drag":p=r(e,n),s=l}St(new Xt(d,u,a,n,s,p[0]+c,p[1]+h,p[0]-g[0],p[1]-g[1],v),v.apply,v,[u,i,o])}}return d.filter=function(t){return arguments.length?(o="function"==typeof t?t:Ht(!!t),d):o},d.container=function(t){return arguments.length?(a="function"==typeof t?t:Ht(t),d):a},d.subject=function(t){return arguments.length?(u="function"==typeof t?t:Ht(t),d):u},d.touchable=function(t){return arguments.length?(c="function"==typeof t?t:Ht(!!t),d):c},d.on=function(){var t=s.on.apply(s,arguments);return t===s?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d},t.dragDisable=It,t.dragEnable=jt,t.dsvFormat=Eo,t.csvParse=Po,t.csvParseRows=zo,t.csvFormat=Ro,t.csvFormatBody=Do,t.csvFormatRows=qo,t.tsvParse=Uo,t.tsvParseRows=Oo,t.tsvFormat=Bo,t.tsvFormatBody=Yo,t.tsvFormatRows=Fo,t.autoType=function(t){for(var n in t){var e,r=t[n].trim();if(r)if("true"===r)r=!0;else if("false"===r)r=!1;else if("NaN"===r)r=NaN;else if(isNaN(e=+r)){if(!/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/.test(r))continue;r=new Date(r)}else r=e;else r=null;t[n]=r}return t},t.easeLinear=function(t){return+t},t.easeQuad=Rr,t.easeQuadIn=function(t){return t*t},t.easeQuadOut=function(t){return t*(2-t)},t.easeQuadInOut=Rr,t.easeCubic=Dr,t.easeCubicIn=function(t){return t*t*t},t.easeCubicOut=function(t){return--t*t*t+1},t.easeCubicInOut=Dr,t.easePoly=Ur,t.easePolyIn=qr,t.easePolyOut=Lr,t.easePolyInOut=Ur,t.easeSin=Yr,t.easeSinIn=function(t){return 1-Math.cos(t*Br)},t.easeSinOut=function(t){return Math.sin(t*Br)},t.easeSinInOut=Yr,t.easeExp=Fr,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeExpInOut=Fr,t.easeCircle=Ir,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCircleInOut=Ir,t.easeBounce=Kr,t.easeBounceIn=function(t){return 1-Kr(1-t)},t.easeBounceOut=Kr,t.easeBounceInOut=function(t){return((t*=2)<=1?1-Kr(1-t):Kr(t-1)+1)/2},t.easeBack=ei,t.easeBackIn=ti,t.easeBackOut=ni,t.easeBackInOut=ei,t.easeElastic=oi,t.easeElasticIn=ii,t.easeElasticOut=oi,t.easeElasticInOut=ai,t.blob=function(t,n){return fetch(t,n).then(Io)},t.buffer=function(t,n){return fetch(t,n).then(jo)},t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=Eo(t);return Xo(n,e).then(function(t){return i.parse(t,r)})},t.csv=Vo,t.tsv=$o,t.image=function(t,n){return new Promise(function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i)},i.src=t})},t.json=function(t,n){return fetch(t,n).then(Wo)},t.text=Xo,t.xml=Qo,t.html=Jo,t.svg=Ko,t.forceCenter=function(t,n){var e;function r(){var r,i,o=e.length,a=0,u=0;for(r=0;r<o;++r)a+=(i=e[r]).x,u+=i.y;for(a=a/o-t,u=u/o-n,r=0;r<o;++r)(i=e[r]).x-=a,i.y-=u}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r},t.forceCollide=function(t){var n,e,r=1,i=1;function o(){for(var t,o,u,c,f,s,l,h=n.length,d=0;d<i;++d)for(o=aa(n,sa,la).visitAfter(a),t=0;t<h;++t)u=n[t],s=e[u.index],l=s*s,c=u.x+u.vx,f=u.y+u.vy,o.visit(p);function p(t,n,e,i,o){var a=t.data,h=t.r,d=s+h;if(!a)return n>c+d||i<c-d||e>f+d||o<f-d;if(a.index>u.index){var p=c-a.x-a.vx,v=f-a.y-a.vy,g=p*p+v*v;g<d*d&&(0===p&&(g+=(p=na())*p),0===v&&(g+=(v=na())*v),g=(d-(g=Math.sqrt(g)))/g*r,u.vx+=(p*=g)*(d=(h*=h)/(l+h)),u.vy+=(v*=g)*d,a.vx-=p*(d=1-d),a.vy-=v*d)}}}function a(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function u(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=ta(null==t?1:+t)),o.initialize=function(t){n=t,u()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:ta(+n),u(),o):t},o},t.forceLink=function(t){var n,e,r,i,o,a=ha,u=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},c=ta(30),f=1;function s(r){for(var i=0,a=t.length;i<f;++i)for(var u,c,s,l,h,d,p,v=0;v<a;++v)c=(u=t[v]).source,l=(s=u.target).x+s.vx-c.x-c.vx||na(),h=s.y+s.vy-c.y-c.vy||na(),l*=d=((d=Math.sqrt(l*l+h*h))-e[v])/d*r*n[v],h*=d,s.vx-=l*(p=o[v]),s.vy-=h*p,c.vx+=l*(p=1-p),c.vy+=h*p}function l(){if(r){var u,c,f=r.length,s=t.length,l=Qi(r,a);for(u=0,i=new Array(f);u<s;++u)(c=t[u]).index=u,"object"!=typeof c.source&&(c.source=da(l,c.source)),"object"!=typeof c.target&&(c.target=da(l,c.target)),i[c.source.index]=(i[c.source.index]||0)+1,i[c.target.index]=(i[c.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)c=t[u],o[u]=i[c.source.index]/(i[c.source.index]+i[c.target.index]);n=new Array(s),h(),e=new Array(s),d()}}function h(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+c(t[n],n,t)}return null==t&&(t=[]),s.initialize=function(t){r=t,l()},s.links=function(n){return arguments.length?(t=n,l(),s):t},s.id=function(t){return arguments.length?(a=t,s):a},s.iterations=function(t){return arguments.length?(f=+t,s):f},s.strength=function(t){return arguments.length?(u="function"==typeof t?t:ta(+t),h(),s):u},s.distance=function(t){return arguments.length?(c="function"==typeof t?t:ta(+t),d(),s):c},s},t.forceManyBody=function(){var t,n,e,r,i=ta(-30),o=1,a=1/0,u=.81;function c(r){var i,o=t.length,a=aa(t,pa,va).visitAfter(s);for(e=r,i=0;i<o;++i)n=t[i],a.visit(l)}function f(){if(t){var n,e,o=t.length;for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function s(t){var n,e,i,o,a,u=0,c=0;if(t.length){for(i=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,c+=e,i+=e*n.x,o+=e*n.y);t.x=i/c,t.y=o/c}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=r[n.data.index]}while(n=n.next)}t.value=u}function l(t,i,c,f){if(!t.value)return!0;var s=t.x-n.x,l=t.y-n.y,h=f-i,d=s*s+l*l;if(h*h/u<d)return d<a&&(0===s&&(d+=(s=na())*s),0===l&&(d+=(l=na())*l),d<o&&(d=Math.sqrt(o*d)),n.vx+=s*t.value*e/d,n.vy+=l*t.value*e/d),!0;if(!(t.length||d>=a)){(t.data!==n||t.next)&&(0===s&&(d+=(s=na())*s),0===l&&(d+=(l=na())*l),d<o&&(d=Math.sqrt(o*d)));do{t.data!==n&&(h=r[t.data.index]*e/d,n.vx+=s*h,n.vy+=l*h)}while(t=t.next)}}return c.initialize=function(n){t=n,f()},c.strength=function(t){return arguments.length?(i="function"==typeof t?t:ta(+t),f(),c):i},c.distanceMin=function(t){return arguments.length?(o=t*t,c):Math.sqrt(o)},c.distanceMax=function(t){return arguments.length?(a=t*t,c):Math.sqrt(a)},c.theta=function(t){return arguments.length?(u=t*t,c):Math.sqrt(u)},c},t.forceRadial=function(t,n,e){var r,i,o,a=ta(.1);function u(t){for(var a=0,u=r.length;a<u;++a){var c=r[a],f=c.x-n||1e-6,s=c.y-e||1e-6,l=Math.sqrt(f*f+s*s),h=(o[a]-l)*i[a]*t/l;c.vx+=f*h,c.vy+=s*h}}function c(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=ta(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,c()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:ta(+t),c(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:ta(+n),c(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u},t.forceSimulation=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=Qi(),c=ir(s),f=I("tick","end");function s(){l(),f.call("tick",n),e<r&&(c.stop(),f.call("end",n))}function l(r){var c,f,s=t.length;void 0===r&&(r=1);for(var l=0;l<r;++l)for(e+=(o-e)*i,u.each(function(t){t(e)}),c=0;c<s;++c)null==(f=t[c]).fx?f.x+=f.vx*=a:(f.x=f.fx,f.vx=0),null==f.fy?f.y+=f.vy*=a:(f.y=f.fy,f.vy=0);return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,isNaN(n.fx)||(n.x=n.fx),isNaN(n.fy)||(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=ga*Math.sqrt(e),o=e*ya;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function d(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:l,restart:function(){return c.restart(s),n},stop:function(){return c.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.each(d),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.remove(t):u.set(t,d(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,c,f=0,s=t.length;for(null==r?r=1/0:r*=r,f=0;f<s;++f)(a=(i=n-(u=t[f]).x)*i+(o=e-u.y)*o)<r&&(c=u,r=a);return c},on:function(t,e){return arguments.length>1?(f.on(t,e),n):f.on(t)}}},t.forceX=function(t){var n,e,r,i=ta(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=ta(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:ta(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:ta(+n),a(),o):t},o},t.forceY=function(t){var n,e,r,i=ta(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=ta(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:ta(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:ta(+n),a(),o):t},o},t.formatDefaultLocale=Ca,t.formatLocale=Ea,t.formatSpecifier=wa,t.precisionFixed=Pa,t.precisionPrefix=za,t.precisionRound=Ra,t.geoArea=function(t){return mu.reset(),du(t,xu),2*mu},t.geoBounds=function(t){var n,e,r,i,o,a,u;if(Lu=qu=-(Ru=Du=1/0),Fu=[],du(t,ac),e=Fu.length){for(Fu.sort(vc),n=1,o=[r=Fu[0]];n<e;++n)gc(r,(i=Fu[n])[0])||gc(r,i[1])?(pc(r[0],i[1])>pc(r[0],r[1])&&(r[1]=i[1]),pc(i[0],r[1])>pc(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=pc(r[1],i[0]))>a&&(a=u,Ru=i[0],qu=r[1])}return Fu=Iu=null,Ru===1/0||Du===1/0?[[NaN,NaN],[NaN,NaN]]:[[Ru,Du],[qu,Lu]]},t.geoCentroid=function(t){ju=Hu=Xu=Gu=Vu=$u=Wu=Zu=Qu=Ju=Ku=0,du(t,yc);var n=Qu,e=Ju,r=Ku,i=n*n+e*e+r*r;return i<Ba&&(n=$u,e=Wu,r=Zu,Hu<Oa&&(n=Xu,e=Gu,r=Vu),(i=n*n+e*e+r*r)<Ba)?[NaN,NaN]:[$a(e,n)*Ha,ou(r/eu(i))*Ha]},t.geoCircle=function(){var t,n,e=kc([0,0]),r=kc(90),i=kc(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=Ha,e[1]*=Ha}};function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*Xa,c=i.apply(this,arguments)*Xa;return t=[],n=Pc(-a[0]*Xa,-a[1]*Xa,0).invert,Lc(o,u,c,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:kc([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:kc(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:kc(+t),a):i},a},t.geoClipAntimeridian=$c,t.geoClipCircle=Wc,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=Jc(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=Jc,t.geoContains=function(t,n){return(t&&hf.hasOwnProperty(t.type)?hf[t.type]:pf)(t,n)},t.geoDistance=lf,t.geoGraticule=wf,t.geoGraticule10=function(){return wf()()},t.geoInterpolate=function(t,n){var e=t[0]*Xa,r=t[1]*Xa,i=n[0]*Xa,o=n[1]*Xa,a=Wa(r),u=tu(r),c=Wa(o),f=tu(o),s=a*Wa(e),l=a*tu(e),h=c*Wa(i),d=c*tu(i),p=2*ou(eu(au(o-r)+a*c*au(i-e))),v=tu(p),g=p?function(t){var n=tu(t*=p)/v,e=tu(p-t)/v,r=e*s+n*h,i=e*l+n*d,o=e*u+n*f;return[$a(i,r)*Ha,$a(o,eu(r*r+i*i))*Ha]}:function(){return[e*Ha,r*Ha]};return g.distance=p,g},t.geoLength=cf,t.geoPath=function(t,n){var e,r,i=4.5;function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),du(t,e(r))),r.result()}return o.area=function(t){return du(t,e(Cf)),Cf.result()},o.measure=function(t){return du(t,e(gs)),gs.result()},o.bounds=function(t){return du(t,e(Bf)),Bf.result()},o.centroid=function(t){return du(t,e(Kf)),Kf.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,Mf):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new bs):new fs(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)},t.geoAlbers=Os,t.geoAlbersUsa=function(){var t,n,e,r,i,o,a=Os(),u=Us().rotate([154,0]).center([-2,58.5]).parallels([55,65]),c=Us().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(t,n){o=[t,n]}};function s(t){var n=t[0],a=t[1];return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function l(){return t=n=null,s}return s.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?c:a).invert(t)},s.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),c.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}});var r,i},s.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),c.precision(t),l()):a.precision()},s.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),c.scale(t),s.translate(a.translate())):a.scale()},s.translate=function(t){if(!arguments.length)return a.translate();var n=a.scale(),o=+t[0],s=+t[1];return e=a.translate(t).clipExtent([[o-.455*n,s-.238*n],[o+.455*n,s+.238*n]]).stream(f),r=u.translate([o-.307*n,s+.201*n]).clipExtent([[o-.425*n+Oa,s+.12*n+Oa],[o-.214*n-Oa,s+.234*n-Oa]]).stream(f),i=c.translate([o-.205*n,s+.212*n]).clipExtent([[o-.214*n+Oa,s+.166*n+Oa],[o-.115*n-Oa,s+.234*n-Oa]]).stream(f),l()},s.fitExtent=function(t,n){return Ns(s,t,n)},s.fitSize=function(t,n){return As(s,t,n)},s.fitWidth=function(t,n){return Ts(s,t,n)},s.fitHeight=function(t,n){return Ss(s,t,n)},s.scale(1070)},t.geoAzimuthalEqualArea=function(){return Rs(Fs).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=Fs,t.geoAzimuthalEquidistant=function(){return Rs(Is).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=Is,t.geoConicConformal=function(){return qs(Gs).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=Gs,t.geoConicEqualArea=Us,t.geoConicEqualAreaRaw=Ls,t.geoConicEquidistant=function(){return qs($s).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=$s,t.geoEqualEarth=function(){return Rs(tl).scale(177.158)},t.geoEqualEarthRaw=tl,t.geoEquirectangular=function(){return Rs(Vs).scale(152.63)},t.geoEquirectangularRaw=Vs,t.geoGnomonic=function(){return Rs(nl).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=nl,t.geoIdentity=function(){var t,n,e,r,i,o,a=1,u=0,c=0,f=1,s=1,l=Mf,h=null,d=Mf;function p(){return r=i=null,o}return o={stream:function(t){return r&&i===t?r:r=l(d(i=t))},postclip:function(r){return arguments.length?(d=r,h=t=n=e=null,p()):d},clipExtent:function(r){return arguments.length?(d=null==r?(h=t=n=e=null,Mf):Jc(h=+r[0][0],t=+r[0][1],n=+r[1][0],e=+r[1][1]),p()):null==h?null:[[h,t],[n,e]]},scale:function(t){return arguments.length?(l=el((a=+t)*f,a*s,u,c),p()):a},translate:function(t){return arguments.length?(l=el(a*f,a*s,u=+t[0],c=+t[1]),p()):[u,c]},reflectX:function(t){return arguments.length?(l=el(a*(f=t?-1:1),a*s,u,c),p()):f<0},reflectY:function(t){return arguments.length?(l=el(a*f,a*(s=t?-1:1),u,c),p()):s<0},fitExtent:function(t,n){return Ns(o,t,n)},fitSize:function(t,n){return As(o,t,n)},fitWidth:function(t,n){return Ts(o,t,n)},fitHeight:function(t,n){return Ss(o,t,n)}}},t.geoProjection=Rs,t.geoProjectionMutator=Ds,t.geoMercator=function(){return Hs(js).scale(961/ja)},t.geoMercatorRaw=js,t.geoNaturalEarth1=function(){return Rs(rl).scale(175.295)},t.geoNaturalEarth1Raw=rl,t.geoOrthographic=function(){return Rs(il).scale(249.5).clipAngle(90+Oa)},t.geoOrthographicRaw=il,t.geoStereographic=function(){return Rs(ol).scale(250).clipAngle(142)},t.geoStereographicRaw=ol,t.geoTransverseMercator=function(){var t=Hs(al),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=al,t.geoRotation=qc,t.geoStream=du,t.geoTransform=function(t){return{stream:xs(t)}},t.cluster=function(){var t=ul,n=1,e=1,r=!1;function i(i){var o,a=0;i.eachAfter(function(n){var e=n.children;e?(n.x=function(t){return t.reduce(cl,0)/t.length}(e),n.y=function(t){return 1+t.reduce(fl,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)});var u=function(t){for(var n;n=t.children;)t=n[0];return t}(i),c=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(i),f=u.x-t(u,c)/2,s=c.x+t(c,u)/2;return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-f)/(s-f)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.hierarchy=ll,t.pack=function(){var t=null,n=1,e=1,r=Pl;function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(Dl(t)).eachAfter(ql(r,.5)).eachBefore(Ll(1)):i.eachBefore(Dl(Rl)).eachAfter(ql(Pl,1)).eachAfter(ql(r,i.r/Math.min(n,e))).eachBefore(Ll(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=null==(e=n)?null:Cl(e),i):t;var e},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:zl(+t),i):r},i},t.packSiblings=function(t){return El(t),t},t.packEnclose=yl,t.partition=function(){var t=1,n=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&Ol(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n);var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(Ul),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i},t.stratify=function(){var t=Il,n=jl;function e(e){var r,i,o,a,u,c,f,s=e.length,l=new Array(s),h={};for(i=0;i<s;++i)r=e[i],u=l[i]=new vl(r),null!=(c=t(r,i,e))&&(c+="")&&(h[f=Bl+(u.id=c)]=f in h?Fl:u);for(i=0;i<s;++i)if(u=l[i],null!=(c=n(e[i],i,e))&&(c+="")){if(!(a=h[Bl+c]))throw new Error("missing: "+c);if(a===Fl)throw new Error("ambiguous: "+c);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=Yl,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s}).eachBefore(pl),o.parent=null,s>0)throw new Error("cycle");return o}return e.id=function(n){return arguments.length?(t=Cl(n),e):t},e.parentId=function(t){return arguments.length?(n=Cl(t),e):n},e},t.tree=function(){var t=Hl,n=1,e=1,r=null;function i(i){var c=function(t){for(var n,e,r,i,o,a=new Wl(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new Wl(r[i],i)),e.parent=n;return(a.parent=new Wl(null,0)).children=[a],a}(i);if(c.eachAfter(o),c.parent.m=-c.z,c.eachBefore(a),r)i.eachBefore(u);else{var f=i,s=i,l=i;i.eachBefore(function(t){t.x<f.x&&(f=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)});var h=f===s?1:t(f,s)/2,d=h-f.x,p=n/(s.x+h+d),v=e/(l.depth||1);i.eachBefore(function(t){t.x=(t.x+d)*p,t.y=t.depth*v})}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null;if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n);var o=(e[0].z+e[e.length-1].z)/2;i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._));n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,c=o.parent.children[0],f=o.m,s=a.m,l=u.m,h=c.m;u=Gl(u),o=Xl(o),u&&o;)c=Xl(c),(a=Gl(a)).a=n,(i=u.z+l-o.z-f+t(u._,o._))>0&&(Vl($l(u,n,r),n,i),f+=i,s+=i),l+=u.m,f+=o.m,h+=c.m,s+=a.m;u&&!Gl(a)&&(a.t=u,a.m+=l-s),o&&!Xl(c)&&(c.t=o,c.m+=f-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.treemap=function(){var t=Kl,n=!1,e=1,r=1,i=[0],o=Pl,a=Pl,u=Pl,c=Pl,f=Pl;function s(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(l),i=[0],n&&t.eachBefore(Ul),t}function l(n){var e=i[n.depth],r=n.x0+e,s=n.y0+e,l=n.x1-e,h=n.y1-e;l<r&&(r=l=(r+l)/2),h<s&&(s=h=(s+h)/2),n.x0=r,n.y0=s,n.x1=l,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=f(n)-e,s+=a(n)-e,(l-=u(n)-e)<r&&(r=l=(r+l)/2),(h-=c(n)-e)<s&&(s=h=(s+h)/2),t(n,r,s,l,h))}return s.round=function(t){return arguments.length?(n=!!t,s):n},s.size=function(t){return arguments.length?(e=+t[0],r=+t[1],s):[e,r]},s.tile=function(n){return arguments.length?(t=Cl(n),s):t},s.padding=function(t){return arguments.length?s.paddingInner(t).paddingOuter(t):s.paddingInner()},s.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:zl(+t),s):o},s.paddingOuter=function(t){return arguments.length?s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):s.paddingTop()},s.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:zl(+t),s):a},s.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:zl(+t),s):u},s.paddingBottom=function(t){return arguments.length?(c="function"==typeof t?t:zl(+t),s):c},s.paddingLeft=function(t){return arguments.length?(f="function"==typeof t?t:zl(+t),s):f},s},t.treemapBinary=function(t,n,e,r,i){var o,a,u=t.children,c=u.length,f=new Array(c+1);for(f[0]=a=o=0;o<c;++o)f[o+1]=a+=u[o].value;!function t(n,e,r,i,o,a,c){if(n>=e-1){var s=u[n];return s.x0=i,s.y0=o,s.x1=a,void(s.y1=c)}for(var l=f[n],h=r/2+l,d=n+1,p=e-1;d<p;){var v=d+p>>>1;f[v]<h?d=v+1:p=v}h-f[d-1]<f[d]-h&&n+1<d&&--d;var g=f[d]-l,y=r-g;if(a-i>c-o){var _=(i*y+a*g)/r;t(n,d,g,i,o,_,c),t(d,e,y,_,o,a,c)}else{var b=(o*y+c*g)/r;t(n,d,g,i,o,a,b),t(d,e,y,i,b,a,c)}}(0,c,t.value,n,e,r,i)},t.treemapDice=Ol,t.treemapSlice=Zl,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?Zl:Ol)(t,n,e,r,i)},t.treemapSquarify=Kl,t.treemapResquarify=th,t.interpolate=ye,t.interpolateArray=se,t.interpolateBasis=Kn,t.interpolateBasisClosed=te,t.interpolateDate=le,t.interpolateDiscrete=function(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},t.interpolateHue=function(t,n){var e=re(+t,+n);return function(t){var n=e(t);return n-360*Math.floor(n/360)}},t.interpolateNumber=he,t.interpolateObject=de,t.interpolateRound=_e,t.interpolateString=ge,t.interpolateTransformCss=Se,t.interpolateTransformSvg=ke,t.interpolateZoom=De,t.interpolateRgb=ae,t.interpolateRgbBasis=ce,t.interpolateRgbBasisClosed=fe,t.interpolateHsl=Le,t.interpolateHslLong=Ue,t.interpolateLab=function(t,n){var e=oe((t=Rn(t)).l,(n=Rn(n)).l),r=oe(t.a,n.a),i=oe(t.b,n.b),o=oe(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateHcl=Be,t.interpolateHclLong=Ye,t.interpolateCubehelix=Ie,t.interpolateCubehelixLong=je,t.piecewise=function(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}},t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.path=Hi,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],c=0;++r<i;)n=u,u=t[r],c+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return[o/(c*=3),a/c]},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(nh),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=eh(r),a=eh(i),u=a[0]===o[0],c=a[a.length-1]===o[o.length-1],f=[];for(n=o.length-1;n>=0;--n)f.push(t[r[o[n]][2]]);for(n=+u;n<a.length-c;++n)f.push(t[r[a[n]][2]]);return f},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],c=o[0],f=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=f>u&&a<(c-e)*(u-r)/(f-r)+e&&(s=!s),c=e,f=r;return s},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],c=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],c+=Math.sqrt(n*n+e*e);return c},t.quadtree=aa,t.randomUniform=ih,t.randomNormal=oh,t.randomLogNormal=ah,t.randomBates=ch,t.randomIrwinHall=uh,t.randomExponential=fh,t.scaleBand=yh,t.scalePoint=function(){return function t(n){var e=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return t(e())},n}(yh.apply(null,arguments).paddingInner(1))},t.scaleIdentity=function t(n){var e;function r(t){return isNaN(t=+t)?e:t}return r.invert=r,r.domain=r.range=function(t){return arguments.length?(n=dh.call(t,_h),r):n.slice()},r.unknown=function(t){return arguments.length?(e=t,r):e},r.copy=function(){return t(n).unknown(e)},n=arguments.length?dh.call(n,_h):[0,1],Eh(r)},t.scaleLinear=function t(){var n=Sh(mh,mh);return n.copy=function(){return Ah(n,t())},sh.apply(n,arguments),Eh(n)},t.scaleLog=function t(){var n=Uh(Th()).domain([1,10]);return n.copy=function(){return Ah(n,t()).base(n.base())},sh.apply(n,arguments),n},t.scaleSymlog=function t(){var n=Yh(Th());return n.copy=function(){return Ah(n,t()).constant(n.constant())},sh.apply(n,arguments)},t.scaleOrdinal=gh,t.scaleImplicit=vh,t.scalePow=Xh,t.scaleSqrt=function(){return Xh.apply(null,arguments).exponent(.5)},t.scaleQuantile=function t(){var e,r=[],o=[],a=[];function u(){var t=0,n=Math.max(1,o.length);for(a=new Array(n-1);++t<n;)a[t-1]=N(r,t/n);return c}function c(t){return isNaN(t=+t)?e:o[i(a,t)]}return c.invertExtent=function(t){var n=o.indexOf(t);return n<0?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},c.domain=function(t){if(!arguments.length)return r.slice();r=[];for(var e,i=0,o=t.length;i<o;++i)null==(e=t[i])||isNaN(e=+e)||r.push(e);return r.sort(n),u()},c.range=function(t){return arguments.length?(o=ph.call(t),u()):o.slice()},c.unknown=function(t){return arguments.length?(e=t,c):e},c.quantiles=function(){return a.slice()},c.copy=function(){return t().domain(r).range(o).unknown(e)},sh.apply(c,arguments)},t.scaleQuantize=function t(){var n,e=0,r=1,o=1,a=[.5],u=[0,1];function c(t){return t<=t?u[i(a,t,0,o)]:n}function f(){var t=-1;for(a=new Array(o);++t<o;)a[t]=((t+1)*r-(t-o)*e)/(o+1);return c}return c.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],f()):[e,r]},c.range=function(t){return arguments.length?(o=(u=ph.call(t)).length-1,f()):u.slice()},c.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,a[0]]:n>=o?[a[o-1],r]:[a[n-1],a[n]]},c.unknown=function(t){return arguments.length?(n=t,c):c},c.thresholds=function(){return a.slice()},c.copy=function(){return t().domain([e,r]).range(u).unknown(n)},sh.apply(Eh(c),arguments)},t.scaleThreshold=function t(){var n,e=[.5],r=[0,1],o=1;function a(t){return t<=t?r[i(e,t,0,o)]:n}return a.domain=function(t){return arguments.length?(e=ph.call(t),o=Math.min(e.length,r.length-1),a):e.slice()},a.range=function(t){return arguments.length?(r=ph.call(t),o=Math.min(e.length,r.length-1),a):r.slice()},a.invertExtent=function(t){var n=r.indexOf(t);return[e[n-1],e[n]]},a.unknown=function(t){return arguments.length?(n=t,a):n},a.copy=function(){return t().domain(e).range(r).unknown(n)},sh.apply(a,arguments)},t.scaleTime=function(){return sh.apply(Nv(Nd,wd,cd,od,rd,nd,Kh,Wh,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},t.scaleUtc=function(){return sh.apply(Nv(Wd,Vd,Rd,Cd,kd,Td,Kh,Wh,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)},t.scaleSequential=function t(){var n=Eh(Av()(mh));return n.copy=function(){return Tv(n,t())},lh.apply(n,arguments)},t.scaleSequentialLog=function t(){var n=Uh(Av()).domain([1,10]);return n.copy=function(){return Tv(n,t()).base(n.base())},lh.apply(n,arguments)},t.scaleSequentialPow=Sv,t.scaleSequentialSqrt=function(){return Sv.apply(null,arguments).exponent(.5)},t.scaleSequentialSymlog=function t(){var n=Yh(Av());return n.copy=function(){return Tv(n,t()).constant(n.constant())},lh.apply(n,arguments)},t.scaleSequentialQuantile=function t(){var e=[],r=mh;function o(t){if(!isNaN(t=+t))return r((i(e,t)-1)/(e.length-1))}return o.domain=function(t){if(!arguments.length)return e.slice();e=[];for(var r,i=0,a=t.length;i<a;++i)null==(r=t[i])||isNaN(r=+r)||e.push(r);return e.sort(n),o},o.interpolator=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return t(r).domain(e)},lh.apply(o,arguments)},t.scaleDiverging=function t(){var n=Eh(kv()(mh));return n.copy=function(){return Tv(n,t())},lh.apply(n,arguments)},t.scaleDivergingLog=function t(){var n=Uh(kv()).domain([.1,1,10]);return n.copy=function(){return Tv(n,t()).base(n.base())},lh.apply(n,arguments)},t.scaleDivergingPow=Ev,t.scaleDivergingSqrt=function(){return Ev.apply(null,arguments).exponent(.5)},t.scaleDivergingSymlog=function t(){var n=Yh(kv());return n.copy=function(){return Tv(n,t()).constant(n.constant())},lh.apply(n,arguments)},t.tickFormat=kh,t.schemeCategory10=Pv,t.schemeAccent=zv,t.schemeDark2=Rv,t.schemePaired=Dv,t.schemePastel1=qv,t.schemePastel2=Lv,t.schemeSet1=Uv,t.schemeSet2=Ov,t.schemeSet3=Bv,t.interpolateBrBG=Iv,t.schemeBrBG=Fv,t.interpolatePRGn=Hv,t.schemePRGn=jv,t.interpolatePiYG=Gv,t.schemePiYG=Xv,t.interpolatePuOr=$v,t.schemePuOr=Vv,t.interpolateRdBu=Zv,t.schemeRdBu=Wv,t.interpolateRdGy=Jv,t.schemeRdGy=Qv,t.interpolateRdYlBu=tg,t.schemeRdYlBu=Kv,t.interpolateRdYlGn=eg,t.schemeRdYlGn=ng,t.interpolateSpectral=ig,t.schemeSpectral=rg,t.interpolateBuGn=ag,t.schemeBuGn=og,t.interpolateBuPu=cg,t.schemeBuPu=ug,t.interpolateGnBu=sg,t.schemeGnBu=fg,t.interpolateOrRd=hg,t.schemeOrRd=lg,t.interpolatePuBuGn=pg,t.schemePuBuGn=dg,t.interpolatePuBu=gg,t.schemePuBu=vg,t.interpolatePuRd=_g,t.schemePuRd=yg,t.interpolateRdPu=mg,t.schemeRdPu=bg,t.interpolateYlGnBu=wg,t.schemeYlGnBu=xg,t.interpolateYlGn=Ng,t.schemeYlGn=Mg,t.interpolateYlOrBr=Tg,t.schemeYlOrBr=Ag,t.interpolateYlOrRd=kg,t.schemeYlOrRd=Sg,t.interpolateBlues=Cg,t.schemeBlues=Eg,t.interpolateGreens=zg,t.schemeGreens=Pg,t.interpolateGreys=Dg,t.schemeGreys=Rg,t.interpolatePurples=Lg,t.schemePurples=qg,t.interpolateReds=Og,t.schemeReds=Ug,t.interpolateOranges=Yg,t.schemeOranges=Bg,t.interpolateCubehelixDefault=Fg,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return Hg.h=360*t-100,Hg.s=1.5-1.5*n,Hg.l=.8-.9*n,Hg+""},t.interpolateWarm=Ig,t.interpolateCool=jg,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,Xg.r=255*(n=Math.sin(t))*n,Xg.g=255*(n=Math.sin(t+Gg))*n,Xg.b=255*(n=Math.sin(t+Vg))*n,Xg+""},t.interpolateViridis=Wg,t.interpolateMagma=Zg,t.interpolateInferno=Qg,t.interpolatePlasma=Jg,t.create=function(t){return zt(W(t).call(document.documentElement))},t.creator=W,t.local=Dt,t.matcher=tt,t.mouse=Ot,t.namespace=$,t.namespaces=V,t.clientPoint=Ut,t.select=zt,t.selectAll=function(t){return"string"==typeof t?new Ct([document.querySelectorAll(t)],[document.documentElement]):new Ct([null==t?[]:t],Et)},t.selection=Pt,t.selector=Q,t.selectorAll=K,t.style=ct,t.touch=Bt,t.touches=function(t,n){null==n&&(n=Lt().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Ut(t,n[e]);return i},t.window=ut,t.customEvent=St,t.arc=function(){var t=hy,n=dy,e=Kg(0),r=null,i=py,o=vy,a=gy,u=null;function c(){var c,f,s,l=+t.apply(this,arguments),h=+n.apply(this,arguments),d=i.apply(this,arguments)-fy,p=o.apply(this,arguments)-fy,v=ty(p-d),g=p>d;if(u||(u=c=Hi()),h<l&&(f=h,h=l,l=f),h>uy)if(v>sy-uy)u.moveTo(h*ey(d),h*oy(d)),u.arc(0,0,h,d,p,!g),l>uy&&(u.moveTo(l*ey(p),l*oy(p)),u.arc(0,0,l,p,d,g));else{var y,_,b=d,m=p,x=d,w=p,M=v,N=v,A=a.apply(this,arguments)/2,T=A>uy&&(r?+r.apply(this,arguments):ay(l*l+h*h)),S=iy(ty(h-l)/2,+e.apply(this,arguments)),k=S,E=S;if(T>uy){var C=ly(T/l*oy(A)),P=ly(T/h*oy(A));(M-=2*C)>uy?(x+=C*=g?1:-1,w-=C):(M=0,x=w=(d+p)/2),(N-=2*P)>uy?(b+=P*=g?1:-1,m-=P):(N=0,b=m=(d+p)/2)}var z=h*ey(b),R=h*oy(b),D=l*ey(w),q=l*oy(w);if(S>uy){var L,U=h*ey(m),O=h*oy(m),B=l*ey(x),Y=l*oy(x);if(v<cy&&(L=function(t,n,e,r,i,o,a,u){var c=e-t,f=r-n,s=a-i,l=u-o,h=l*c-s*f;if(!(h*h<uy))return[t+(h=(s*(n-o)-l*(t-i))/h)*c,n+h*f]}(z,R,B,Y,U,O,D,q))){var F=z-L[0],I=R-L[1],j=U-L[0],H=O-L[1],X=1/oy(((s=(F*j+I*H)/(ay(F*F+I*I)*ay(j*j+H*H)))>1?0:s<-1?cy:Math.acos(s))/2),G=ay(L[0]*L[0]+L[1]*L[1]);k=iy(S,(l-G)/(X-1)),E=iy(S,(h-G)/(X+1))}}N>uy?E>uy?(y=yy(B,Y,z,R,h,E,g),_=yy(U,O,D,q,h,E,g),u.moveTo(y.cx+y.x01,y.cy+y.y01),E<S?u.arc(y.cx,y.cy,E,ny(y.y01,y.x01),ny(_.y01,_.x01),!g):(u.arc(y.cx,y.cy,E,ny(y.y01,y.x01),ny(y.y11,y.x11),!g),u.arc(0,0,h,ny(y.cy+y.y11,y.cx+y.x11),ny(_.cy+_.y11,_.cx+_.x11),!g),u.arc(_.cx,_.cy,E,ny(_.y11,_.x11),ny(_.y01,_.x01),!g))):(u.moveTo(z,R),u.arc(0,0,h,b,m,!g)):u.moveTo(z,R),l>uy&&M>uy?k>uy?(y=yy(D,q,U,O,l,-k,g),_=yy(z,R,B,Y,l,-k,g),u.lineTo(y.cx+y.x01,y.cy+y.y01),k<S?u.arc(y.cx,y.cy,k,ny(y.y01,y.x01),ny(_.y01,_.x01),!g):(u.arc(y.cx,y.cy,k,ny(y.y01,y.x01),ny(y.y11,y.x11),!g),u.arc(0,0,l,ny(y.cy+y.y11,y.cx+y.x11),ny(_.cy+_.y11,_.cx+_.x11),g),u.arc(_.cx,_.cy,k,ny(_.y11,_.x11),ny(_.y01,_.x01),!g))):u.arc(0,0,l,w,x,g):u.lineTo(D,q)}else u.moveTo(0,0);if(u.closePath(),c)return u=null,c+""||null}return c.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-cy/2;return[ey(r)*e,oy(r)*e]},c.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:Kg(+n),c):t},c.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:Kg(+t),c):n},c.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:Kg(+t),c):e},c.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:Kg(+t),c):r},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:Kg(+t),c):i},c.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:Kg(+t),c):o},c.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:Kg(+t),c):a},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c},t.area=My,t.line=wy,t.pie=function(){var t=Ay,n=Ny,e=null,r=Kg(0),i=Kg(sy),o=Kg(0);function a(a){var u,c,f,s,l,h=a.length,d=0,p=new Array(h),v=new Array(h),g=+r.apply(this,arguments),y=Math.min(sy,Math.max(-sy,i.apply(this,arguments)-g)),_=Math.min(Math.abs(y)/h,o.apply(this,arguments)),b=_*(y<0?-1:1);for(u=0;u<h;++u)(l=v[p[u]=u]=+t(a[u],u,a))>0&&(d+=l);for(null!=n?p.sort(function(t,e){return n(v[t],v[e])}):null!=e&&p.sort(function(t,n){return e(a[t],a[n])}),u=0,f=d?(y-h*b)/d:0;u<h;++u,g=s)c=p[u],s=g+((l=v[c])>0?l*f:0)+b,v[c]={data:a[c],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return v}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:Kg(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Kg(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Kg(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:Kg(+t),a):o},a},t.areaRadial=Py,t.radialArea=Py,t.lineRadial=Cy,t.radialLine=Cy,t.pointRadial=zy,t.linkHorizontal=function(){return Ly(Uy)},t.linkVertical=function(){return Ly(Oy)},t.linkRadial=function(){var t=Ly(By);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.symbol=function(){var t=Kg(Yy),n=Kg(64),e=null;function r(){var r;if(e||(e=r=Hi()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:Kg(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:Kg(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},t.symbols=e_,t.symbolCircle=Yy,t.symbolCross=Fy,t.symbolDiamond=Hy,t.symbolSquare=Wy,t.symbolStar=$y,t.symbolTriangle=Qy,t.symbolWye=n_,t.curveBasisClosed=function(t){return new a_(t)},t.curveBasisOpen=function(t){return new u_(t)},t.curveBasis=function(t){return new o_(t)},t.curveBundle=f_,t.curveCardinalClosed=p_,t.curveCardinalOpen=g_,t.curveCardinal=h_,t.curveCatmullRomClosed=x_,t.curveCatmullRomOpen=M_,t.curveCatmullRom=b_,t.curveLinearClosed=function(t){return new N_(t)},t.curveLinear=by,t.curveMonotoneX=function(t){return new E_(t)},t.curveMonotoneY=function(t){return new C_(t)},t.curveNatural=function(t){return new z_(t)},t.curveStep=function(t){return new D_(t,.5)},t.curveStepAfter=function(t){return new D_(t,1)},t.curveStepBefore=function(t){return new D_(t,0)},t.stack=function(){var t=Kg([]),n=L_,e=q_,r=U_;function i(i){var o,a,u=t.apply(this,arguments),c=i.length,f=u.length,s=new Array(f);for(o=0;o<f;++o){for(var l,h=u[o],d=s[o]=new Array(c),p=0;p<c;++p)d[p]=l=[0,+r(i[p],h,p,i)],l.data=i[p];d.key=h}for(o=0,a=n(s);o<f;++o)s[a[o]].index=o;return e(s,a),s}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:Kg(Ry.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:Kg(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?L_:"function"==typeof t?t:Kg(Ry.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?q_:t,i):e},i},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}q_(t,n)}},t.stackOffsetDiverging=function(t,n){if((u=t.length)>1)for(var e,r,i,o,a,u,c=0,f=t[n[0]].length;c<f;++c)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][c])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):r[0]=o},t.stackOffsetNone=q_,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}q_(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,c=0,f=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0)}c+=l,f+=h*l}e[a-1][1]+=e[a-1][0]=o,c&&(o-=f/c)}e[a-1][1]+=e[a-1][0]=o,q_(t,n)}},t.stackOrderAppearance=O_,t.stackOrderAscending=Y_,t.stackOrderDescending=function(t){return Y_(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(F_),o=O_(t),a=0,u=0,c=[],f=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],c.push(e)):(u+=i[e],f.push(e));return f.reverse().concat(c)},t.stackOrderNone=L_,t.stackOrderReverse=function(t){return L_(t).reverse()},t.timeInterval=$h,t.timeMillisecond=Wh,t.timeMilliseconds=Zh,t.utcMillisecond=Wh,t.utcMilliseconds=Zh,t.timeSecond=Kh,t.timeSeconds=td,t.utcSecond=Kh,t.utcSeconds=td,t.timeMinute=nd,t.timeMinutes=ed,t.timeHour=rd,t.timeHours=id,t.timeDay=od,t.timeDays=ad,t.timeWeek=cd,t.timeWeeks=vd,t.timeSunday=cd,t.timeSundays=vd,t.timeMonday=fd,t.timeMondays=gd,t.timeTuesday=sd,t.timeTuesdays=yd,t.timeWednesday=ld,t.timeWednesdays=_d,t.timeThursday=hd,t.timeThursdays=bd,t.timeFriday=dd,t.timeFridays=md,t.timeSaturday=pd,t.timeSaturdays=xd,t.timeMonth=wd,t.timeMonths=Md,t.timeYear=Nd,t.timeYears=Ad,t.utcMinute=Td,t.utcMinutes=Sd,t.utcHour=kd,t.utcHours=Ed,t.utcDay=Cd,t.utcDays=Pd,t.utcWeek=Rd,t.utcWeeks=Yd,t.utcSunday=Rd,t.utcSundays=Yd,t.utcMonday=Dd,t.utcMondays=Fd,t.utcTuesday=qd,t.utcTuesdays=Id,t.utcWednesday=Ld,t.utcWednesdays=jd,t.utcThursday=Ud,t.utcThursdays=Hd,t.utcFriday=Od,t.utcFridays=Xd,t.utcSaturday=Bd,t.utcSaturdays=Gd,t.utcMonth=Vd,t.utcMonths=$d,t.utcYear=Wd,t.utcYears=Zd,t.timeFormatDefaultLocale=hv,t.timeFormatLocale=tp,t.isoFormat=dv,t.isoParse=pv,t.now=nr,t.timer=ir,t.timerFlush=or,t.timeout=fr,t.interval=function(t,n,e){var r=new rr,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?nr():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a)},n,e),r)},t.transition=Cr,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>dr&&e.name===n)return new Er([[t]],fi,n,+r);return null},t.interrupt=Mr,t.voronoi=function(){var t=j_,n=H_,e=null;function r(r){return new Nb(r.map(function(e,i){var o=[Math.round(t(e,i,r)/xb)*xb,Math.round(n(e,i,r)/xb)*xb];return o.index=i,o.data=e,o}),e)}return r.polygons=function(t){return r(t).polygons()},r.links=function(t){return r(t).links()},r.triangles=function(t){return r(t).triangles()},r.x=function(n){return arguments.length?(t="function"==typeof n?n:I_(+n),r):t},r.y=function(t){return arguments.length?(n="function"==typeof t?t:I_(+t),r):n},r.extent=function(t){return arguments.length?(e=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],r):e&&[[e[0][0],e[0][1]],[e[1][0],e[1][1]]]},r.size=function(t){return arguments.length?(e=null==t?null:[[0,0],[+t[0],+t[1]]],r):e&&[e[1][0]-e[0][0],e[1][1]-e[0][1]]},r},t.zoom=function(){var n,e,r=zb,i=Rb,o=Ub,a=qb,u=Lb,c=[0,1/0],f=[[-1/0,-1/0],[1/0,1/0]],s=250,l=De,h=[],d=I("start","zoom","end"),p=500,v=150,g=0;function y(t){t.property("__zoom",Db).on("wheel.zoom",N).on("mousedown.zoom",A).on("dblclick.zoom",T).filter(u).on("touchstart.zoom",S).on("touchmove.zoom",k).on("touchend.zoom touchcancel.zoom",E).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function _(t,n){return(n=Math.max(c[0],Math.min(c[1],n)))===t.k?t:new Sb(n,t.x,t.y)}function b(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Sb(t.k,r,i)}function m(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function x(t,n,e){t.on("start.zoom",function(){w(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){w(this,arguments).end()}).tween("zoom",function(){var t=arguments,r=w(this,t),o=i.apply(this,t),a=e||m(o),u=Math.max(o[1][0]-o[0][0],o[1][1]-o[0][1]),c=this.__zoom,f="function"==typeof n?n.apply(this,t):n,s=l(c.invert(a).concat(u/c.k),f.invert(a).concat(u/f.k));return function(t){if(1===t)t=f;else{var n=s(t),e=u/n[2];t=new Sb(e,a[0]-n[0]*e,a[1]-n[1]*e)}r.zoom(null,t)}})}function w(t,n){for(var e,r=0,i=h.length;r<i;++r)if((e=h[r]).that===t)return e;return new M(t,n)}function M(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=i.apply(t,n)}function N(){if(r.apply(this,arguments)){var t=w(this,arguments),n=this.__zoom,e=Math.max(c[0],Math.min(c[1],n.k*Math.pow(2,a.apply(this,arguments)))),i=Ot(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=n.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(n.k===e)return;t.mouse=[i,n.invert(i)],Mr(this),t.start()}Pb(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},v),t.zoom("mouse",o(b(_(n,e),t.mouse[0],t.mouse[1]),t.extent,f))}}function A(){if(!e&&r.apply(this,arguments)){var n=w(this,arguments),i=zt(t.event.view).on("mousemove.zoom",function(){if(Pb(),!n.moved){var e=t.event.clientX-u,r=t.event.clientY-c;n.moved=e*e+r*r>g}n.zoom("mouse",o(b(n.that.__zoom,n.mouse[0]=Ot(n.that),n.mouse[1]),n.extent,f))},!0).on("mouseup.zoom",function(){i.on("mousemove.zoom mouseup.zoom",null),jt(t.event.view,n.moved),Pb(),n.end()},!0),a=Ot(this),u=t.event.clientX,c=t.event.clientY;It(t.event.view),Cb(),n.mouse=[a,this.__zoom.invert(a)],Mr(this),n.start()}}function T(){if(r.apply(this,arguments)){var n=this.__zoom,e=Ot(this),a=n.invert(e),u=n.k*(t.event.shiftKey?.5:2),c=o(b(_(n,u),e,a),i.apply(this,arguments),f);Pb(),s>0?zt(this).transition().duration(s).call(x,c,e):zt(this).call(y.transform,c)}}function S(){if(r.apply(this,arguments)){var e,i,o,a,u=w(this,arguments),c=t.event.changedTouches,f=c.length;for(Cb(),i=0;i<f;++i)a=[a=Bt(this,c,(o=c[i]).identifier),this.__zoom.invert(a),o.identifier],u.touch0?u.touch1||(u.touch1=a):(u.touch0=a,e=!0);if(n&&(n=clearTimeout(n),!u.touch1))return u.end(),void((a=zt(this).on("dblclick.zoom"))&&a.apply(this,arguments));e&&(n=setTimeout(function(){n=null},p),Mr(this),u.start())}}function k(){var e,r,i,a,u=w(this,arguments),c=t.event.changedTouches,s=c.length;for(Pb(),n&&(n=clearTimeout(n)),e=0;e<s;++e)i=Bt(this,c,(r=c[e]).identifier),u.touch0&&u.touch0[2]===r.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===r.identifier&&(u.touch1[0]=i);if(r=u.that.__zoom,u.touch1){var l=u.touch0[0],h=u.touch0[1],d=u.touch1[0],p=u.touch1[1],v=(v=d[0]-l[0])*v+(v=d[1]-l[1])*v,g=(g=p[0]-h[0])*g+(g=p[1]-h[1])*g;r=_(r,Math.sqrt(v/g)),i=[(l[0]+d[0])/2,(l[1]+d[1])/2],a=[(h[0]+p[0])/2,(h[1]+p[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],a=u.touch0[1]}u.zoom("touch",o(b(r,i,a),u.extent,f))}function E(){var n,r,i=w(this,arguments),o=t.event.changedTouches,a=o.length;for(Cb(),e&&clearTimeout(e),e=setTimeout(function(){e=null},p),n=0;n<a;++n)r=o[n],i.touch0&&i.touch0[2]===r.identifier?delete i.touch0:i.touch1&&i.touch1[2]===r.identifier&&delete i.touch1;i.touch1&&!i.touch0&&(i.touch0=i.touch1,delete i.touch1),i.touch0?i.touch0[1]=this.__zoom.invert(i.touch0[0]):i.end()}return y.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",Db),t!==e?x(t,n):e.interrupt().each(function(){w(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},y.scaleBy=function(t,n){y.scaleTo(t,function(){return this.__zoom.k*("function"==typeof n?n.apply(this,arguments):n)})},y.scaleTo=function(t,n){y.transform(t,function(){var t=i.apply(this,arguments),e=this.__zoom,r=m(t),a=e.invert(r),u="function"==typeof n?n.apply(this,arguments):n;return o(b(_(e,u),r,a),t,f)})},y.translateBy=function(t,n,e){y.transform(t,function(){return o(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),i.apply(this,arguments),f)})},y.translateTo=function(t,n,e){y.transform(t,function(){var t=i.apply(this,arguments),r=this.__zoom,a=m(t);return o(kb.translate(a[0],a[1]).scale(r.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,f)})},M.prototype={start:function(){return 1==++this.active&&(this.index=h.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(h.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){St(new Tb(y,t,this.that.__zoom),d.apply,d,[t,this.that,this.args])}},y.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:Ab(+t),y):a},y.filter=function(t){return arguments.length?(r="function"==typeof t?t:Ab(!!t),y):r},y.touchable=function(t){return arguments.length?(u="function"==typeof t?t:Ab(!!t),y):u},y.extent=function(t){return arguments.length?(i="function"==typeof t?t:Ab([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),y):i},y.scaleExtent=function(t){return arguments.length?(c[0]=+t[0],c[1]=+t[1],y):[c[0],c[1]]},y.translateExtent=function(t){return arguments.length?(f[0][0]=+t[0][0],f[1][0]=+t[1][0],f[0][1]=+t[0][1],f[1][1]=+t[1][1],y):[[f[0][0],f[0][1]],[f[1][0],f[1][1]]]},y.constrain=function(t){return arguments.length?(o=t,y):o},y.duration=function(t){return arguments.length?(s=+t,y):s},y.interpolate=function(t){return arguments.length?(l=t,y):l},y.on=function(){var t=d.on.apply(d,arguments);return t===d?y:t},y.clickDistance=function(t){return arguments.length?(g=(t=+t)*t,y):Math.sqrt(g)},y},t.zoomTransform=Eb,t.zoomIdentity=kb,Object.defineProperty(t,"__esModule",{value:!0})});
/*!
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * 
 * billboard.js, JavaScript chart library
 * http://naver.github.io/billboard.js/
 * 
 * @version 1.7.1
 */
!function webpackUniversalModuleDefinition(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("d3-time-format"),require("d3-selection"),require("d3-array"),require("d3-transition"),require("d3-axis"),require("d3-brush"),require("d3-scale"),require("d3-collection"),require("d3-dsv"),require("d3-drag"),require("d3-shape"),require("d3-interpolate"),require("d3-color"),require("d3-zoom"),require("d3-ease"));else if("function"==typeof define&&define.amd)define(["d3-time-format","d3-selection","d3-array","d3-transition","d3-axis","d3-brush","d3-scale","d3-collection","d3-dsv","d3-drag","d3-shape","d3-interpolate","d3-color","d3-zoom","d3-ease"],e);else{var n="object"==typeof exports?e(require("d3-time-format"),require("d3-selection"),require("d3-array"),require("d3-transition"),require("d3-axis"),require("d3-brush"),require("d3-scale"),require("d3-collection"),require("d3-dsv"),require("d3-drag"),require("d3-shape"),require("d3-interpolate"),require("d3-color"),require("d3-zoom"),require("d3-ease")):e(t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3,t.d3);for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,function(n,i,a,r,o,s,c,l,u,d,g,h,f,p,x){return function(n){var i={};function __webpack_require__(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,__webpack_require__),e.l=!0,e.exports}return __webpack_require__.m=n,__webpack_require__.c=i,__webpack_require__.d=function(t,e,n){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},__webpack_require__.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)__webpack_require__.d(n,i,function(t){return e[t]}.bind(null,i));return n},__webpack_require__.n=function(t){var e=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=27)}([function(t,e){t.exports=function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var i=n(2),a=n(3),r=n(4);t.exports=function _slicedToArray(t,e){return i(t)||a(t,e)||r()}},function(t,e){t.exports=function _arrayWithHoles(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function _iterableToArrayLimit(t,e){var n=[],i=!0,a=!1,r=undefined;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(c){a=!0,r=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(a)throw r}}return n}},function(t,e){t.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e){function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}},function(t,e){t.exports=n},function(t,e){t.exports=i},function(t,e){t.exports=a},function(t,e){t.exports=r},function(t,e){t.exports=o},function(e,t){function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof2(t){return typeof t}:function _typeof2(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return"function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?e.exports=_typeof=function _typeof(t){return _typeof2(t)}:e.exports=_typeof=function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)},_typeof(t)}e.exports=_typeof},function(t,e){t.exports=s},function(t,e,n){var i=n(14),a=n(15),r=n(16);t.exports=function _toConsumableArray(t){return i(t)||a(t)||r()}},function(t,e){t.exports=function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){t.exports=c},function(t,e){t.exports=l},function(t,e){t.exports=u},function(t,e){t.exports=d},function(t,e){t.exports=g},function(t,e){t.exports=h},function(t,e){t.exports=f},function(t,e){t.exports=p},function(t,e){t.exports=x},function(t,e,n){},function(t,e,n){"use strict";var i=n(0),a=n.n(i),r=n(1),S=n.n(r),o=n(5),s=n.n(o),c=n(6),z=n(7),m=n(8),E=n(9),l=n(10),B={arc:"bb-arc",arcs:"bb-arcs",area:"bb-area",areas:"bb-areas",axis:"bb-axis",axisX:"bb-axis-x",axisXLabel:"bb-axis-x-label",axisY:"bb-axis-y",axisY2:"bb-axis-y2",axisY2Label:"bb-axis-y2-label",axisYLabel:"bb-axis-y-label",bar:"bb-bar",bars:"bb-bars",brush:"bb-brush",button:"bb-button",buttonZoomReset:"bb-zoom-reset",chart:"bb-chart",chartArc:"bb-chart-arc",chartArcs:"bb-chart-arcs",chartArcsBackground:"bb-chart-arcs-background",chartArcsGaugeMax:"bb-chart-arcs-gauge-max",chartArcsGaugeMin:"bb-chart-arcs-gauge-min",chartArcsGaugeUnit:"bb-chart-arcs-gauge-unit",chartArcsTitle:"bb-chart-arcs-title",chartBar:"bb-chart-bar",chartBars:"bb-chart-bars",chartLine:"bb-chart-line",chartLines:"bb-chart-lines",chartRadar:"bb-chart-radar",chartRadars:"bb-chart-radars",chartText:"bb-chart-text",chartTexts:"bb-chart-texts",circle:"bb-circle",circles:"bb-circles",colorPattern:"bb-color-pattern",defocused:"bb-defocused",dragarea:"bb-dragarea",empty:"bb-empty",eventRect:"bb-event-rect",eventRects:"bb-event-rects",eventRectsMultiple:"bb-event-rects-multiple",eventRectsSingle:"bb-event-rects-single",focused:"bb-focused",gaugeValue:"bb-gauge-value",grid:"bb-grid",gridLines:"bb-grid-lines",legendBackground:"bb-legend-background",legendItem:"bb-legend-item",legendItemEvent:"bb-legend-item-event",legendItemFocused:"bb-legend-item-focused",legendItemHidden:"bb-legend-item-hidden",legendItemPoint:"bb-legend-item-point",legendItemTile:"bb-legend-item-tile",level:"bb-level",levels:"bb-levels",line:"bb-line",lines:"bb-lines",region:"bb-region",regions:"bb-regions",selectedCircle:"bb-selected-circle",selectedCircles:"bb-selected-circles",shape:"bb-shape",shapes:"bb-shapes",target:"bb-target",text:"bb-text",texts:"bb-texts",title:"bb-title",tooltip:"bb-tooltip",tooltipContainer:"bb-tooltip-container",tooltipName:"bb-tooltip-name",xgrid:"bb-xgrid",xgridFocus:"bb-xgrid-focus",xgridLine:"bb-xgrid-line",xgridLines:"bb-xgrid-lines",xgrids:"bb-xgrids",ygrid:"bb-ygrid",ygridLine:"bb-ygrid-line",ygridLines:"bb-ygrid-lines",ygrids:"bb-ygrids",zoomBrush:"bb-zoom-brush",zoomRect:"bb-zoom-rect",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"},u=n(11),d=n.n(u),g=n(12),k=function(t){return t||0===t},C=function(t){return"function"==typeof t},h=function(t){return"string"==typeof t},I=function(t){return"number"==typeof t},R=function(t){return void 0===t},P=function(t){return void 0!==t},f=function(t){return"boolean"==typeof t},p=function(t){return 10*Math.ceil(t/10)},v=function(t){return Math.ceil(t)+.5},M=function(t){return t[1]-t[0]},_=function(t){return"object"===d()(t)},y=function(t){return R(t)||null===t||h(t)&&0===t.length||_(t)&&0===Object.keys(t).length},Y=function(t){return!y(t)},j=function(t){return t&&t.constructor===Array},b=function(t){return t&&!t.nodeType&&_(t)&&!j(t)},T=function(t,e,n){return P(t[e])?t[e]:n},V=function(t){for(var e=C(t),n=arguments.length,i=Array(1<n?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return e&&t.call.apply(t,i),e},X=function(t){return h(t)?t.replace(/</g,"&lt;").replace(/>/g,"&gt;"):t},A=function(t){var e=t.getBBox(),n=e.x,i=e.y,a=e.width,r=e.height;return[{x:n,y:i+r},{x:n,y:i},{x:n+a,y:i},{x:n+a,y:i+r}]},w=function(t){var e=null,n=z.event,i=t.context||t.main;return n&&"BrushEvent"===n.constructor.name?e=n.selection:i&&(e=i.select(".".concat(B.brush)).node())&&(e=Object(g.brushSelection)(e)),e},L=function(){var t=!(0<arguments.length&&arguments[0]!==undefined)||arguments[0];return Math.random()+(t?"":0)},F=function(t){var e=w(t);return!e||e[0]===e[1]},D=function(){var t=0<arguments.length&&arguments[0]!==undefined?arguments[0]:{},e=1<arguments.length?arguments[1]:undefined;for(var n in e)t[n]=e[n];return t},O=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},N=function(t){return[].slice.call(t)},H={mouse:function(){try{return new MouseEvent("t"),function(t,e){var n=2<arguments.length&&arguments[2]!==undefined?arguments[2]:{bubbles:!1,cancelable:!1,screenX:0,screenY:0,clientX:0,clientY:0};t.dispatchEvent(new MouseEvent(e,n))}}catch(t){return function(t,e){var n=2<arguments.length&&arguments[2]!==undefined?arguments[2]:{bubbles:!1,cancelable:!1,screenX:0,screenY:0,clientX:0,clientY:0},i=document.createEvent("MouseEvent");i.initMouseEvent(e,n.bubbles,n.cancelable,window,0,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.dispatchEvent(i)}}}(),touch:function touch(t,e,n){var i=new Touch(Object.assign({identifier:Date.now(),target:t,radiusX:2.5,radiusY:2.5,rotationAngle:10,force:.5},n));t.dispatchEvent(new TouchEvent(e,{cancelable:!0,bubbles:!0,shiftKey:!0,touches:[i],targetTouches:[],changedTouches:[i]}))}},G=n(13),W=n.n(G),q=n(17),U=function(){function AxisRendererHelper(t,e){a()(this,AxisRendererHelper);var n=Object(q.scaleLinear)();this.config=t,this.scale=n,t.range=n.rangeExtent?n.rangeExtent():this.scaleExtent((e.orgXScale||n).range())}return s()(AxisRendererHelper,[{key:"axisX",value:function axisX(t,e){var n=this.config.tickOffset;t.attr("transform",function(t){return"translate(".concat(Math.ceil(e(t)+n),", 0)")})}},{key:"axisY",value:function axisY(t,e){t.attr("transform",function(t){return"translate(0,".concat(Math.ceil(e(t)),")")})}},{key:"scaleExtent",value:function scaleExtent(t){var e=t[0],n=t[t.length-1];return e<n?[e,n]:[n,e]}},{key:"generateTicks",value:function generateTicks(t){var e=[];if(t.ticks)return t.ticks.apply(t,W()(this.config.tickArguments||[])).map(function(t){return h(t)&&I(t)&&!isNaN(t)&&Math.round(10*t)/10||t});for(var n=t.domain(),i=Math.ceil(n[0]);i<n[1];i++)e.push(i);return 0<e.length&&0<e[0]&&e.unshift(e[0]-(e[1]-e[0])),e}},{key:"copyScale",value:function copyScale(){var t=this.scale.copy();return t.domain().length||t.domain(this.scale.domain()),t}},{key:"textFormatted",value:function textFormatted(t){var e=this.config.tickFormat,n=/\d+\.\d+0{5,}\d$/.test(t)?+(t+"").replace(/0+\d$/,""):t,i=e?e(n):n;return P(i)?i:""}},{key:"transitionise",value:function transitionise(t){var e=this.config;return e.withoutTransition?t.interrupt():t.transition(e.transition)}}],[{key:"getSizeFor1Char",value:function getSizeFor1Char(t){var r={w:5.5,h:11.5};return t.empty()||t.select("text").text("0").call(function(t){try{var e=t.node().getBBox(),n=e.width,i=e.height;n&&i&&(r.w=n,r.h=i),t.text("")}catch(a){}}),this.getSizeFor1Char=function(){return r},r}}]),AxisRendererHelper}(),Z=function(){function AxisRenderer(){var t=0<arguments.length&&arguments[0]!==undefined?arguments[0]:{};a()(this,AxisRenderer);var e={innerTickSize:6,outerTickSize:t.withOuterTick?6:0,orient:"bottom",range:[],tickArguments:null,tickCentered:null,tickCulling:!0,tickFormat:null,tickLength:9,tickOffset:0,tickPadding:3,tickValues:null,transition:null,withoutTransition:t.withoutTransition};e.tickLength=Math.max(e.innerTickSize,0)+e.tickPadding,this.helper=new U(e,t),this.config=e,this.params=t}return s()(AxisRenderer,[{key:"create",value:function create(t){var x=this,m=this.config,v=this.params,_=this.helper,y=_.scale,b=m.orient,T=this.splitTickText.bind(this),A=/^(left|right)$/.test(b),w=/^(top|bottom)$/.test(b),L=_[w?"axisX":"axisY"],S=L===_.axisX?"y":"x",k=/^(top|left)$/.test(b)?-1:1,C=v.tickTextRotate;this.config.range=y.rangeExtent?y.rangeExtent():_.scaleExtent((v.orgXScale||y).range());var e=m,X=e.innerTickSize,F=e.tickLength,D=e.range,O=v.axisName&&/^(x|y|y2)$/.test(v.axisName)?v.config["axis_".concat(v.axisName,"_tick_text_position")]:{x:0,y:0},R=null;t.each(function(){var t=Object(z.select)(this);R=t;var e=this.__chart__||y,i=_.copyScale();this.__chart__=i;var a=m.tickValues||_.generateTicks(i),n=t.selectAll(".tick").data(a,i),r=n.enter().insert("g",".domain").attr("class","tick").style("opacity","1"),o=n.exit().remove();n=r.merge(n);var s=t.selectAll(".domain").data([0]);s.enter().append("path").attr("class","domain").merge(_.transitionise(s)).attr("d",function(){var t=m.outerTickSize*k;return w?"M".concat(D[0],",").concat(t,"V0H").concat(D[1],"V").concat(t):"M".concat(t,",").concat(D[0],"H0V").concat(D[1],"H").concat(t)}),r.append("line"),r.append("text");var c,l=U.getSizeFor1Char(n),u=[],d=n.select("text").selectAll("tspan").data(function(t,e){var n=v.tickMultiline?T(t,i,a,A,l.w):j(_.textFormatted(t))?_.textFormatted(t).concat():[_.textFormatted(t)];return u[e]=n.length,n.map(function(t){return{index:e,splitted:t}})});d.exit().remove(),(d=d.enter().append("tspan").merge(d).text(function(t){return t.splitted})).attr("x",w?0:F*k).attr("dx",(c=0,"bottom"===b&&C&&(c=8*Math.sin(Math.PI*(C/180))),c+(O.x||0))).attr("dy",function(t,e){var n=0;return"top"!==b&&(n=l.h,0===e&&(n=A?-((u[t.index]-1)*(l.h/2)-3):0===O.y?".71em":0)),I(n)&&O.y?n+O.y:n||".71em"});var g=n.select("line"),h=n.select("text");if(r.select("line").attr("".concat(S,"2"),X*k),r.select("text").attr("".concat(S),F*k),x.setTickLineTextPosition(g,h,i),v.tickTitle&&h.append&&h.append("title").each(function(t){Object(z.select)(this).text(v.tickTitle[t])}),i.bandwidth){var f=i,p=f.bandwidth()/2;i=e=function(t){return f(t)+p}}else e.bandwidth?e=i:L.call(_,o,i);L.call(_,r,e),L.call(_,_.transitionise(n).style("opacity",1),i)}),this.g=R}},{key:"getTickXY",value:function getTickXY(t){var e=this.config,n={x:0,y:0};return this.params.isCategory?(e.tickOffset=Math.ceil((t(1)-t(0))/2),n.x=e.tickCentered?0:e.tickOffset,n.y=e.tickCentered?e.tickOffset:0):e.tickOffset=n.x,n}},{key:"getTickSize",value:function getTickSize(t){var e=this.helper.scale,n=this.config,i=n.innerTickSize,a=n.range,r=e(t)+(n.tickCentered?0:n.tickOffset);return a[0]<r&&r<a[1]?i:0}},{key:"setTickLineTextPosition",value:function setTickLineTextPosition(t,e,n){var i=this.getTickXY(n),a=this.config,r=a.innerTickSize,o=a.orient,s=a.tickLength,c=a.tickOffset,l=this.params.tickTextRotate;"bottom"===o?(t.attr("x1",i.x).attr("x2",i.x).attr("y2",this.getTickSize.bind(this)),e.attr("x",0).attr("y",function yForText(t){return t?11.5-t/15*2.5*(0<t?1:-1):s}(l)).style("text-anchor",function textAnchorForText(t){return t?0<t?"start":"end":"middle"}(l)).attr("transform",function textTransform(t){return t?"rotate(".concat(t,")"):null}(l))):"top"===o?(t.attr("x2",0).attr("y2",-r),e.attr("x",0).attr("y",2*-s).style("text-anchor","middle")):"left"===o?(t.attr("x2",-r).attr("y1",i.y).attr("y2",i.y),e.attr("x",-s).attr("y",c).style("text-anchor","end")):"right"===o&&(t.attr("x2",r).attr("y2",0),e.attr("x",s).attr("y",0).style("text-anchor","start"))}},{key:"splitTickText",value:function splitTickText(t,e,n,i,o){var a=this.params,r=this.helper.textFormatted(t),s=h(r)&&-1<r.indexOf("\n")?r.split("\n"):[];if(s.length)return s;if(j(r))return r;var c=a.tickWidth;return(!c||c<=0)&&(c=i?95:a.isCategory?Math.ceil(e(n[1])-e(n[0]))-12:110),function split(t,e){for(var n,i,a,r=1;r<e.length;r++)if(" "===e.charAt(r)&&(i=r),n=e.substr(0,r+1),a=o*n.length,c<a)return split(t.concat(e.substr(0,i||r)),e.slice(i?i+1:r));return t.concat(e)}(s,r+"")}},{key:"scale",value:function scale(t){return arguments.length?(this.helper.scale=t,this):this.helper.scale}},{key:"orient",value:function orient(t){return arguments.length?(this.config.orient=t in{top:1,right:1,bottom:1,left:1}?t+"":"bottom",this):this.config.orient}},{key:"tickFormat",value:function tickFormat(t){return arguments.length?(this.config.tickFormat=t,this):this.config.tickFormat}},{key:"tickCentered",value:function tickCentered(t){var e=this.config;return arguments.length?(e.tickCentered=t,this):e.tickCentered}},{key:"tickOffset",value:function tickOffset(){return this.config.tickOffset}},{key:"tickInterval",value:function tickInterval(t){var e;this.params.isCategory?e=2*this.config.tickOffset:e=(this.g.select("path.domain").node().getTotalLength()-2*this.config.outerTickSize)/(t||this.g.selectAll("line").size());return e===Infinity?0:e}},{key:"ticks",value:function ticks(){for(var t=this.config,e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return n.length?(t.tickArguments=N(n),this):t.tickArguments}},{key:"tickCulling",value:function tickCulling(t){var e=this.config;return arguments.length?(e.tickCulling=t,this):e.tickCulling}},{key:"tickValues",value:function tickValues(t){var e=this,n=this.config;if(C(t))n.tickValues=function(){return t(e.helper.scale.domain())};else{if(!arguments.length)return n.tickValues;n.tickValues=t}return this}},{key:"setTransition",value:function setTransition(t){return this.config.transition=t,this}}]),AxisRenderer}(),$=function(t,e){var n=t.config.axis_rotated;return e?n:!n},K=function(t){return"".concat(B.axis," ").concat(B["axis".concat(O(t))])},J=function(){function Axis(t){a()(this,Axis),this.owner=t}return s()(Axis,[{key:"init",value:function init(){var i=this,a=this.owner,r=a.config,o=r.axis_rotated,s=a.main;a.axesList={},["x","y","y2"].forEach(function(e){var t=K(e),n=B["axis".concat(O(e),"Label")];a.axes[e]=s.append("g").attr("class",t).attr("clip-path",function(){var t=null;return"x"===e?t=a.clipPathForXAxis:"y"===e&&r.axis_y_inner&&(t=a.clipPathForYAxis),t}).attr("transform",a.getTranslate(e)).style("visibility",r["axis_".concat(e,"_show")]?"visible":"hidden"),a.axes[e].append("text").attr("class",n).attr("transform",["rotate(-90)",null]["x"===e?+!o:+o]).style("text-anchor",i.textAnchorForXAxisLabel.bind(i)),i.generateAxes(e)})}},{key:"generateAxes",value:function generateAxes(n){var i,a=this.owner,t=a.config,r=[],e=t["axis_".concat(n,"_axes")],o=t.axis_rotated;"x"===n?i=o?l.axisLeft:l.axisBottom:"y"===n?i=o?l.axisBottom:l.axisLeft:"y2"===n&&(i=o?l.axisTop:l.axisRight),e.length&&e.forEach(function(t){var e=t.tick;r.push(i(a[n]).ticks(e.count).tickFormat(e.format||function(t){return t}).tickValues(e.values).tickSizeOuter(!1===e.outer?0:6))}),a.axesList[n]=r}},{key:"updateAxes",value:function updateAxes(){var r=this.owner,o=r.config;Object.keys(r.axesList).forEach(function(a){r.axesList[a].forEach(function(t,e){var n="".concat(K(a),"-").concat(e+1),i=r.main.select(".".concat(n.replace(/\s/,".")));i.empty()?i=r.main.append("g").attr("class",n).style("visibility",o["axis_".concat(a,"_show")]?"visible":"hidden").call(t):r.xAxis.helper.transitionise(i).call(t.scale(r[a])),i.attr("transform",r.getTranslate(a,e+1))})})}},{key:"getXAxis",value:function getXAxis(t,e,n,i,a,r,o,s){var c=this.owner,l=c.config,u=c.isCategorized(),d={isCategory:u,withOuterTick:r,withoutTransition:o,config:l,axisName:t,tickMultiline:l.axis_x_tick_multiline,tickWidth:l.axis_x_tick_width,tickTextRotate:s?0:l.axis_x_tick_rotate,tickTitle:u&&l.axis_x_tick_tooltip&&c.api.categories(),orgXScale:c.x},g=new Z(d).scale(c.zoomScale||e).orient(n),h=a;return c.isTimeSeries()&&a&&!C(a)&&(h=a.map(function(t){return c.parseDate(t)})),g.tickFormat(i).tickValues(h),u&&(g.tickCentered(l.axis_x_tick_centered),y(l.axis_x_tick_culling)&&(l.axis_x_tick_culling=!1)),g}},{key:"getYAxis",value:function getYAxis(t,e,n,i,a,r,o,s){var c=this.owner,l=c.config,u={withOuterTick:r,withoutTransition:o,config:l,axisName:t,tickTextRotate:s?0:l.axis_y_tick_rotate},d=new Z(u).scale(e).orient(n).tickFormat(i||c.isStackNormalized()&&function(t){return"".concat(t,"%")});return c.isTimeSeriesY()?d.ticks(l.axis_y_tick_time_value):d.tickValues(a),d}},{key:"updateXAxisTickValues",value:function updateXAxisTickValues(t,e){var n,i=this.owner,a=i.config,r=a.axis_x_tick_count;return(a.axis_x_tick_fit||r)&&(n=this.generateTickValues(i.mapTargetsToUniqueXs(t),r,i.isTimeSeries())),e?e.tickValues(n):(i.xAxis.tickValues(n),i.subXAxis.tickValues(n)),n}},{key:"getId",value:function getId(t){var e=this.owner.config;return t in e.data_axes?e.data_axes[t]:"y"}},{key:"getXAxisTickFormat",value:function getXAxisTickFormat(){var e,n=this.owner,i=n.config.axis_x_tick_format,t=n.isTimeSeries(),a=n.isCategorized();return i?C(i)?e=i:t&&(e=function(t){return t?n.axisTimeFormat(i)(t):""}):e=t?n.defaultAxisTimeFormat:a?n.categoryName:function(t){return t<0?t.toFixed(0):t},C(e)?function(t){return e.apply(n,a?[t,n.categoryName(t)]:[t])}:e}},{key:"getTickValues",value:function getTickValues(t){var e=this.owner,n=e.config["axis_".concat(t,"_tick_values")],i=e["".concat(t,"Axis")];return n||(i?i.tickValues():undefined)}},{key:"getXAxisTickValues",value:function getXAxisTickValues(){return this.getTickValues("x")}},{key:"getYAxisTickValues",value:function getYAxisTickValues(){return this.getTickValues("y")}},{key:"getY2AxisTickValues",value:function getY2AxisTickValues(){return this.getTickValues("y2")}},{key:"getLabelOptionByAxisId",value:function getLabelOptionByAxisId(t){return this.owner.config["axis_".concat(t,"_label")]}},{key:"getLabelText",value:function getLabelText(t){var e=this.getLabelOptionByAxisId(t);return h(e)?e:e?e.text:null}},{key:"setLabelText",value:function setLabelText(t,e){var n=this.owner.config,i=this.getLabelOptionByAxisId(t);h(i)?n["axis_".concat(t,"_label")]=e:i&&(i.text=e)}},{key:"getLabelPosition",value:function getLabelPosition(t,e){var n=this.owner.config.axis_rotated,i=this.getLabelOptionByAxisId(t),a=_(i)&&i.position?i.position:e[+!n],r=function(t){return!!~a.indexOf(t)};return{isInner:r("inner"),isOuter:r("outer"),isLeft:r("left"),isCenter:r("center"),isRight:r("right"),isTop:r("top"),isMiddle:r("middle"),isBottom:r("bottom")}}},{key:"getXAxisLabelPosition",value:function getXAxisLabelPosition(){return this.getLabelPosition("x",["inner-top","inner-right"])}},{key:"getYAxisLabelPosition",value:function getYAxisLabelPosition(){return this.getLabelPosition("y",["inner-right","inner-top"])}},{key:"getY2AxisLabelPosition",value:function getY2AxisLabelPosition(){return this.getLabelPosition("y2",["inner-right","inner-top"])}},{key:"getLabelPositionById",value:function getLabelPositionById(t){return this["get".concat(t.toUpperCase(),"AxisLabelPosition")]()}},{key:"textForXAxisLabel",value:function textForXAxisLabel(){return this.getLabelText("x")}},{key:"textForYAxisLabel",value:function textForYAxisLabel(){return this.getLabelText("y")}},{key:"textForY2AxisLabel",value:function textForY2AxisLabel(){return this.getLabelText("y2")}},{key:"xForAxisLabel",value:function xForAxisLabel(t){var e=!(1<arguments.length&&arguments[1]!==undefined)||arguments[1],n=this.owner,i=t.isMiddle?-n.height/2:0;return $(n,e)?i=t.isLeft?0:t.isCenter?n.width/2:n.width:t.isBottom&&(i=-n.height),i}},{key:"dxForAxisLabel",value:function dxForAxisLabel(t){var e=!(1<arguments.length&&arguments[1]!==undefined)||arguments[1],n=this.owner,i=t.isBottom?"0.5em":"0";return $(n,e)?i=t.isLeft?"0.5em":t.isRight?"-0.5em":"0":t.isTop&&(i="-0.5em"),i}},{key:"textAnchorForAxisLabel",value:function textAnchorForAxisLabel(t){var e=!(1<arguments.length&&arguments[1]!==undefined)||arguments[1],n=this.owner,i=t.isMiddle?"middle":"end";return $(n,e)?i=t.isLeft?"start":t.isCenter?"middle":"end":t.isBottom&&(i="start"),i}},{key:"xForXAxisLabel",value:function xForXAxisLabel(){return this.xForAxisLabel(this.getXAxisLabelPosition(),!1)}},{key:"xForYAxisLabel",value:function xForYAxisLabel(){return this.xForAxisLabel(this.getYAxisLabelPosition())}},{key:"xForY2AxisLabel",value:function xForY2AxisLabel(){return this.xForAxisLabel(this.getY2AxisLabelPosition())}},{key:"dxForXAxisLabel",value:function dxForXAxisLabel(){return this.dxForAxisLabel(this.getXAxisLabelPosition(),!1)}},{key:"dxForYAxisLabel",value:function dxForYAxisLabel(){return this.dxForAxisLabel(this.getYAxisLabelPosition())}},{key:"dxForY2AxisLabel",value:function dxForY2AxisLabel(){return this.dxForAxisLabel(this.getY2AxisLabelPosition())}},{key:"dyForXAxisLabel",value:function dyForXAxisLabel(){var t=this.owner.config,e=this.getXAxisLabelPosition().isInner,n=t.axis_x_height;return t.axis_rotated?e?"1.2em":-25-this.getMaxTickWidth("x"):e?"-0.5em":n?n-10:"3em"}},{key:"dyForYAxisLabel",value:function dyForYAxisLabel(){var t=this.owner,e=this.getYAxisLabelPosition().isInner;return t.config.axis_rotated?e?"-0.5em":"3em":e?"1.2em":-10-(t.config.axis_y_inner?0:this.getMaxTickWidth("y")+10)}},{key:"dyForY2AxisLabel",value:function dyForY2AxisLabel(){var t=this.owner,e=this.getY2AxisLabelPosition().isInner;return t.config.axis_rotated?e?"1.2em":"-2.2em":e?"-0.5em":15+(t.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)}},{key:"textAnchorForXAxisLabel",value:function textAnchorForXAxisLabel(){return this.textAnchorForAxisLabel(this.getXAxisLabelPosition(),!1)}},{key:"textAnchorForYAxisLabel",value:function textAnchorForYAxisLabel(){return this.textAnchorForAxisLabel(this.getYAxisLabelPosition())}},{key:"textAnchorForY2AxisLabel",value:function textAnchorForY2AxisLabel(){return this.textAnchorForAxisLabel(this.getY2AxisLabelPosition())}},{key:"getMaxTickWidth",value:function getMaxTickWidth(t,e){var n=this.owner,i=n.config,a=n.currentMaxTickWidths,r=0;if(e&&a[t])return a[t];if(n.svg){var o=/^y2?$/.test(t),s=n.filterTargetsToShow(n.data.targets),c=o?"getY":"getX",l=n[t].copy().domain(n["".concat(c,"Domain")](s,t)),u=this["".concat(c,"Axis")](t,l,n["".concat(t,"Orient")],o?i["axis_".concat(t,"_tick_format")]:n.xAxisTickFormat,null,!1,!0,!0);o||this.updateXAxisTickValues(s,u);var d=n.selectChart.append("svg").style("visibility","hidden").style("position","fixed").style("top","0px").style("left","0px");u.create(d),d.selectAll("text").each(function(){r=Math.max(r,this.getBoundingClientRect().width)}),d.remove()}return 0<r&&(a[t]=r),a[t]}},{key:"updateLabels",value:function updateLabels(i){var a=this,t=this.owner,r={X:t.main.select(".".concat(B.axisX," .").concat(B.axisXLabel)),Y:t.main.select(".".concat(B.axisY," .").concat(B.axisYLabel)),Y2:t.main.select(".".concat(B.axisY2," .").concat(B.axisY2Label))};Object.keys(r).forEach(function(t){var e=r[t],n="".concat(t,"AxisLabel");(i?e.transition():e).attr("x",a["xFor".concat(n)].bind(a)).attr("dx",a["dxFor".concat(n)].bind(a)).attr("dy",a["dyFor".concat(n)].bind(a)).text(a["textFor".concat(n)].bind(a))})}},{key:"getPadding",value:function getPadding(t,e,n,i){var a=I(t)?t:t[e];return k(a)?"ratio"===t.unit?t[e]*i:this.convertPixelsToAxisPadding(a,i):n}},{key:"convertPixelsToAxisPadding",value:function convertPixelsToAxisPadding(t,e){var n=this.owner;return e*(t/(n.config.axis_rotated?n.width:n.height))}},{key:"generateTickValues",value:function generateTickValues(t,e,n){var i,a,r,o,s,c,l=t;if(e){var u=C(e)?e():e;if(1===u)l=[t[0]];else if(2===u)l=[t[0],t[t.length-1]];else if(2<u){for(r=u-2,i=t[0],o=((a=t[t.length-1])-i)/(r+1),l=[i],s=0;s<r;s++)c=+i+o*(s+1),l.push(n?new Date(c):c);l.push(a)}}return n||(l=l.sort(function(t,e){return t-e})),l}},{key:"generateTransitions",value:function generateTransitions(e){var n=this.owner.axes,t=["x","y","y2","subx"].map(function(t){return e?n[t].transition().duration(e):n[t]}),i=S()(t,4);return{axisX:i[0],axisY:i[1],axisY2:i[2],axisSubX:i[3]}}},{key:"redraw",value:function redraw(t,e){var n=this.owner,i=e?"0":"1";["x","y","y2","subx"].forEach(function(t){n.axes[t].style("opacity",i)}),n.xAxis.create(t.axisX),n.yAxis.create(t.axisY),n.y2Axis.create(t.axisY2),n.subXAxis.create(t.axisSubX),this.updateAxes()}}]),Axis}(),Q=function(){function ChartInternal(t){a()(this,ChartInternal);var e=this;e.api=t,e.config=e.getOptions(),e.data={},e.cache={},e.axes={}}return s()(ChartInternal,[{key:"beforeInit",value:function beforeInit(){V(this.config.onbeforeinit,this)}},{key:"afterInit",value:function afterInit(){V(this.config.onafterinit,this)}},{key:"init",value:function init(){var t,e=this,n=e.config;if(e.initParams(),n.data_url)e.convertUrlToData(n.data_url,n.data_mimeType,n.data_headers,n.data_keys,e.initWithData);else if(n.data_json)t=e.convertJsonToData(n.data_json,n.data_keys);else if(n.data_rows)t=e.convertRowsToData(n.data_rows);else{if(!n.data_columns)throw Error("url or json or rows or columns is required.");t=e.convertColumnsToData(n.data_columns)}t&&e.initWithData(t)}},{key:"initParams",value:function initParams(){var n=this,t=n.config,e=t.axis_rotated;n.datetimeId="bb-".concat(+new Date),n.clipId="".concat(n.datetimeId,"-clip"),n.clipIdForXAxis="".concat(n.clipId,"-xaxis"),n.clipIdForYAxis="".concat(n.clipId,"-yaxis"),n.clipIdForGrid="".concat(n.clipId,"-grid"),n.clipIdForSubchart="".concat(n.clipId,"-subchart"),n.clipPath=n.getClipPath(n.clipId),n.clipPathForXAxis=n.getClipPath(n.clipIdForXAxis),n.clipPathForYAxis=n.getClipPath(n.clipIdForYAxis),n.clipPathForGrid=n.getClipPath(n.clipIdForGrid),n.clipPathForSubchart=n.getClipPath(n.clipIdForSubchart),n.dragStart=null,n.dragging=!1,n.flowing=!1,n.cancelClick=!1,n.mouseover=!1,n.transiting=!1,n.color=n.generateColor(),n.levelColor=n.generateLevelColor(),n.point=n.generatePoint(),n.extraLineClasses=n.generateExtraLineClass(),n.dataTimeFormat=t.data_xLocaltime?c.timeParse:c.utcParse,n.axisTimeFormat=t.axis_x_localtime?c.timeFormat:c.utcFormat,n.defaultAxisTimeFormat=function(t){var e=(t.getMilliseconds()?".%L":t.getSeconds()&&".:%S")||t.getMinutes()&&"%I:%M"||t.getHours()&&"%I %p"||t.getDay()&&1!==t.getDate()&&"%-m/%-d"||1!==t.getDate()&&"%b %d"||t.getMonth()&&"%-m/%-d"||"%Y/%-m/%-d";return n.axisTimeFormat(e)(t)},n.hiddenTargetIds=[],n.hiddenLegendIds=[],n.focusedTargetIds=[],n.defocusedTargetIds=[],n.xOrient=e?"left":"bottom",n.yOrient=e?t.axis_y_inner?"top":"bottom":t.axis_y_inner?"right":"left",n.y2Orient=e?t.axis_y2_inner?"bottom":"top":t.axis_y2_inner?"left":"right",n.subXOrient=e?"left":"bottom",n.isLegendRight="right"===t.legend_position,n.isLegendInset="inset"===t.legend_position,n.isLegendTop="top-left"===t.legend_inset_anchor||"top-right"===t.legend_inset_anchor,n.isLegendLeft="top-left"===t.legend_inset_anchor||"bottom-left"===t.legend_inset_anchor,n.legendStep=0,n.legendItemWidth=0,n.legendItemHeight=0,n.currentMaxTickWidths={x:0,y:0,y2:0},n.rotated_padding_left=30,n.rotated_padding_right=e&&!t.axis_x_show?0:30,n.rotated_padding_top=5,n.withoutFadeIn={},n.inputType=n.convertInputType(),n.axes.subx=Object(z.selectAll)([])}},{key:"initWithData",value:function initWithData(t){var e=this,n=e.config;e.axis=new J(e),n.subchart_show&&e.initBrush(),n.zoom_enabled&&(e.initZoom(),e.initZoomBehaviour());var i={element:n.bindto,classname:"bb"};if(b(n.bindto)&&(i.element=n.bindto.element||"#chart",i.classname=n.bindto.classname||i.classname),e.selectChart=C(i.element.node)?n.bindto.element:Object(z.select)(i.element?i.element:[]),e.selectChart.html("").classed(i.classname,!0),e.data.xs={},e.data.targets=e.convertDataToTargets(t),n.data_filter&&(e.data.targets=e.data.targets.filter(n.data_filter)),n.data_hide&&e.addHiddenTargetIds(!0===n.data_hide?e.mapToIds(e.data.targets):n.data_hide),n.legend_hide&&e.addHiddenLegendIds(!0===n.legend_hide?e.mapToIds(e.data.targets):n.legend_hide),e.hasType("gauge")&&(n.legend_show=!1),e.updateSizes(),e.updateScales(),e.x.domain(Object(m.extent)(e.getXDomain(e.data.targets))),e.y.domain(e.getYDomain(e.data.targets,"y")),e.y2.domain(e.getYDomain(e.data.targets,"y2")),e.subX.domain(e.x.domain()),e.subY.domain(e.y.domain()),e.subY2.domain(e.y2.domain()),e.orgXDomain=e.x.domain(),e.svg=e.selectChart.append("svg").style("overflow","hidden").style("display","block"),n.interaction_enabled&&e.inputType){var a="touch"===e.inputType;e.svg.on(a?"touchstart":"mouseenter",function(){return V(n.onover,e)}).on(a?"touchend":"mouseleave",function(){return V(n.onout,e)})}n.svg_classname&&e.svg.attr("class",n.svg_classname),e.defs=e.svg.append("defs"),e.clipChart=e.appendClip(e.defs,e.clipId),e.clipXAxis=e.appendClip(e.defs,e.clipIdForXAxis),e.clipYAxis=e.appendClip(e.defs,e.clipIdForYAxis),e.clipGrid=e.appendClip(e.defs,e.clipIdForGrid),e.clipSubchart=e.appendClip(e.defs,e.clipIdForSubchart),C(n.color_tiles)&&e.patterns&&e.patterns.forEach(function(t){return e.defs.append(function(){return t.node})}),e.updateSvgSize();var r=e.svg.append("g").attr("transform",e.getTranslate("main"));if(e.main=r,n.subchart_show&&e.initSubchart&&e.initSubchart(),e.initTooltip&&e.initTooltip(),e.initLegend&&e.initLegend(),e.initTitle&&e.initTitle(),r.append("text").attr("class","".concat(B.text," ").concat(B.empty)).attr("text-anchor","middle").attr("dominant-baseline","middle"),e.initRegion(),e.initGrid(),n.clipPath||e.axis.init(),r.append("g").attr("class",B.chart).attr("clip-path",e.clipPath),n.grid_lines_front&&e.initGridLines(),n.grid_front&&e.initXYFocusGrid(),e.initEventRect(),e.initChartElements(),r.insert("rect",n.zoom_privileged?null:"g.".concat(B.regions)).attr("class",B.zoomRect).attr("width",e.width).attr("height",e.height).style("opacity","0").on("dblclick.zoom",null),n.axis_x_extent&&e.brush.scale(e.getDefaultExtent()),n.clipPath&&e.axis.init(),e.updateTargets(e.data.targets),e.updateDimension(),n.oninit.call(e),e.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1,initializing:!0}),n.data_onmin||n.data_onmax){var o=e.getMinMaxData();V(n.data_onmin,e,o.min),V(n.data_onmax,e,o.max)}e.bindResize(),e.api.element=e.selectChart.node()}},{key:"initChartElements",value:function initChartElements(){var n=this;["Pie","Bar","Line","Arc","Gauge","Bubble","Radar","Text"].forEach(function(t){var e="init".concat(t);n[e]&&n[e]()})}},{key:"getChartElements",value:function getChartElements(){var t=this;return{chart:t.selectChart,svg:t.svg,defs:t.defs,main:t.main,tooltip:t.tooltip,legend:t.legend,title:t.title,grid:t.grid,arc:t.arcs,bar:{bars:t.mainBar},line:{lines:t.mainLine,areas:t.mainArea,circles:t.mainCircle},text:{texts:t.texts}}}},{key:"smoothLines",value:function smoothLines(t,e){"grid"===e&&t.each(function(){var e=Object(z.select)(this),t=["x1","x2","y1","y2"].map(function(t){return Math.ceil(e.attr(t))}),n=S()(t,4),i=n[0],a=n[1],r=n[2],o=n[3];e.attr({x1:i,x2:a,y1:r,y2:o})})}},{key:"updateSizes",value:function updateSizes(){var t=this,e=t.config,n=e.axis_rotated,i=t.hasArcType(),a=t.legend?t.getLegendHeight():0,r=t.legend?t.getLegendWidth():0,o=t.isLegendRight||t.isLegendInset?0:a,s=n||i?0:t.getHorizontalAxisHeight("x"),c=e.subchart_show&&!i?e.subchart_size_height+s:0;t.currentWidth=t.getCurrentWidth(),t.currentHeight=t.getCurrentHeight(),t.margin=n?{top:t.getHorizontalAxisHeight("y2")+t.getCurrentPaddingTop(),right:i?0:t.getCurrentPaddingRight(),bottom:t.getHorizontalAxisHeight("y")+o+t.getCurrentPaddingBottom(),left:c+(i?0:t.getCurrentPaddingLeft())}:{top:4+t.getCurrentPaddingTop(),right:i?0:t.getCurrentPaddingRight(),bottom:s+c+o+t.getCurrentPaddingBottom(),left:i?0:t.getCurrentPaddingLeft()},t.margin2=n?{top:t.margin.top,right:NaN,bottom:20+o,left:t.rotated_padding_left}:{top:t.currentHeight-c-o,right:NaN,bottom:s+o,left:t.margin.left},t.margin3={top:0,right:NaN,bottom:0,left:0},t.updateSizeForLegend&&t.updateSizeForLegend(a,r),t.width=t.currentWidth-t.margin.left-t.margin.right,t.height=t.currentHeight-t.margin.top-t.margin.bottom,t.width<0&&(t.width=0),t.height<0&&(t.height=0),t.width2=n?t.margin.left-t.rotated_padding_left-t.rotated_padding_right:t.width,t.height2=n?t.height:t.currentHeight-t.margin2.top-t.margin2.bottom,t.width2<0&&(t.width2=0),t.height2<0&&(t.height2=0),t.arcWidth=t.width-(t.isLegendRight?r+10:0),t.arcHeight=t.height-(t.isLegendRight?0:10),t.hasType("gauge")&&!e.gauge_fullCircle&&(t.arcHeight+=t.height-t.getGaugeLabelHeight()),t.updateRadius&&t.updateRadius(),t.isLegendRight&&i&&(t.margin3.left=t.arcWidth/2+1.1*t.radiusExpanded)}},{key:"updateTargets",value:function updateTargets(t){var e=this;e.updateTargetsForText(t),e.updateTargetsForBar(t),e.updateTargetsForLine(t),e.hasArcType(t)&&(e.hasType("radar")?e.updateTargetsForRadar(t):e.updateTargetsForArc(t)),e.updateTargetsForSubchart&&e.updateTargetsForSubchart(t),e.showTargets()}},{key:"showTargets",value:function showTargets(){var e=this;e.svg.selectAll(".".concat(B.target)).filter(function(t){return e.isTargetToShow(t.id)}).transition().duration(e.config.transition_duration).style("opacity","1")}},{key:"getWithOption",value:function getWithOption(n){var i={Y:!0,Subchart:!0,Transition:!0,EventRect:!0,Dimension:!0,TrimXDomain:!0,Transform:!1,UpdateXDomain:!1,UpdateOrgXDomain:!1,Legend:!1,UpdateXAxis:"UpdateXDomain",TransitionForExit:"Transition",TransitionForAxis:"Transition"};return Object.keys(i).forEach(function(t){var e=i[t];h(e)&&(e=i[e]),i[t]=T(n,"with".concat(t),e)}),i}},{key:"redraw",value:function redraw(){var n,i,r,t=0<arguments.length&&arguments[0]!==undefined?arguments[0]:{},e=1<arguments.length?arguments[1]:undefined,o=this,a=o.main,s=o.config,c=s.axis_rotated,l=o.hasType("radar"),u=o.getShapeIndices(o.isAreaType),d=o.getShapeIndices(o.isBarType),g=o.getShapeIndices(o.isLineType),h=o.hasArcType(),f=o.filterTargetsToShow(o.data.targets),p=o.xv.bind(o),x=o.getWithOption(t),m=x.Transition?s.transition_duration:0,v=x.TransitionForExit?m:0,_=x.TransitionForAxis?m:0,y=e||o.axis.generateTransitions(_);if(t.initializing&&s.tooltip_init_show||"touch"!==o.inputType||o.hideTooltip(),x.Legend&&s.legend_show?o.updateLegend(o.mapToIds(o.data.targets),t,y):x.Dimension&&o.updateDimension(!0),o.isCategorized()&&0===f.length&&o.x.domain([0,o.axes.x.selectAll(".tick").size()]),f.length?(o.updateXDomain(f,x.UpdateXDomain,x.UpdateOrgXDomain,x.TrimXDomain),!s.axis_x_tick_values&&(n=o.axis.updateXAxisTickValues(f))):(o.xAxis.tickValues([]),o.subXAxis.tickValues([])),s.zoom_rescale&&!t.flow&&(r=o.x.orgDomain()),["y","y2"].forEach(function(t){var e=o[t],n=s["axis_".concat(t,"_tick_values")],i=s["axis_".concat(t,"_tick_count")];if(e.domain(o.getYDomain(f,t,r)),!n&&i){var a=e.domain();o["".concat(t,"Axis")].tickValues(o.axis.generateTickValues(a,a.every(function(t){return 0===t})?1:i,o.isTimeSeriesY()))}}),o.axis.redraw(y,h),o.axis.updateLabels(x.Transition),(x.UpdateXDomain||x.UpdateXAxis)&&f.length)if(s.axis_x_tick_culling&&n){for(var b=1;b<n.length;b++)if(n.length/b<s.axis_x_tick_culling_max){i=b;break}o.svg.selectAll(".".concat(B.axisX," .tick text")).each(function(t){var e=n.indexOf(t);0<=e&&Object(z.select)(this).style("display",e%i?"none":"block")})}else o.svg.selectAll(".".concat(B.axisX," .tick text")).style("display","block");var T=o.generateDrawArea?o.generateDrawArea(u,!1):undefined,A=o.generateDrawBar?o.generateDrawBar(d):undefined,w=o.generateDrawLine?o.generateDrawLine(g,!1):undefined,L=o.generateXYForText(u,d,g,!0),S=o.generateXYForText(u,d,g,!1);x.Y&&(o.subY.domain(o.getYDomain(f,"y")),o.subY2.domain(o.getYDomain(f,"y2"))),o.updateXgridFocus(),a.select("text.".concat(B.text,".").concat(B.empty)).attr("x",o.width/2).attr("y",o.height/2).text(s.data_empty_label_text).transition().style("opacity",f.length?0:1),o.updateGrid(m),o.updateRegion(m),o.updateBar(v),o.updateLine(v),o.updateArea(v),o.updateCircle(),o.hasDataLabel()&&o.updateText(v),o.redrawTitle&&o.redrawTitle(),o.redrawArc&&o.redrawArc(m,v,x.Transform),l&&o.redrawRadar(m,v),s.subchart_show&&o.redrawSubchart&&o.redrawSubchart(x.Subchart,y,m,v,u,d,g),a.selectAll(".".concat(B.selectedCircles)).filter(o.isBarType.bind(o)).selectAll("circle").remove(),s.interaction_enabled&&!t.flow&&x.EventRect&&(o.redrawEventRect(),o.bindZoomEvent()),o.updateCircleY();var k=(l?o.radarCircleX:c?o.circleY:o.circleX).bind(o),C=(l?o.radarCircleY:c?o.circleX:o.circleY).bind(o),X=t.flow&&o.generateFlow({targets:f,flow:t.flow,duration:t.flow.duration,drawBar:A,drawLine:w,drawArea:T,cx:k,cy:C,xv:p,xForText:L,yForText:S}),F=(m||X)&&o.isTabVisible(),D=[o.redrawBar(A,F),o.redrawLine(w,F),o.redrawArea(T,F),o.redrawCircle(k,C,F,X),o.redrawText(L,S,t.flow,F),o.redrawRegion(F),o.redrawGrid(F)],O=X||s.onrendered?function(){X&&X(),V(s.onrendered,o)}:null;if(O)if(F){var R=o.generateWait();Object(E.transition)().duration(m).each(function(){D.reduce(function(t,e){return t.concat(e)},[]).forEach(function(t){return R.add(t)})}).call(R,O)}else O();o.mapToIds(o.data.targets).forEach(function(t){o.withoutFadeIn[t]=!0})}},{key:"updateAndRedraw",value:function updateAndRedraw(){var t,e=0<arguments.length&&arguments[0]!==undefined?arguments[0]:{},n=this,i=n.config;e.withTransition=T(e,"withTransition",!0),e.withTransform=T(e,"withTransform",!1),e.withLegend=T(e,"withLegend",!1),e.withUpdateXDomain=!0,e.withUpdateOrgXDomain=!0,e.withTransitionForExit=!1,e.withTransitionForTransform=T(e,"withTransitionForTransform",e.withTransition),n.updateSizes(),e.withLegend&&i.legend_show||(t=n.axis.generateTransitions(e.withTransitionForAxis?i.transition_duration:0),n.updateScales(),n.updateSvgSize(),n.transformAll(e.withTransitionForTransform,t)),n.redraw(e,t)}},{key:"redrawWithoutRescale",value:function redrawWithoutRescale(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})}},{key:"isTimeSeries",value:function isTimeSeries(){return"timeseries"===this.config.axis_x_type}},{key:"isCategorized",value:function isCategorized(){return 0<=this.config.axis_x_type.indexOf("category")||this.hasType("radar")}},{key:"isCustomX",value:function isCustomX(){var t=this.config;return!this.isTimeSeries()&&(t.data_x||Y(t.data_xs))}},{key:"isTimeSeriesY",value:function isTimeSeriesY(){return"timeseries"===this.config.axis_y_type}},{key:"getTranslate",value:function getTranslate(t){var e,n,i=1<arguments.length&&arguments[1]!==undefined?arguments[1]:0,a=this,r=a.config.axis_rotated,o=0;if(i&&/^(x|y2?)$/.test(t)&&(o=a.getAxisSize(t)*i),"main"===t)e=v(a.margin.left),n=v(a.margin.top);else if("context"===t)e=v(a.margin2.left),n=v(a.margin2.top);else if("legend"===t)e=a.margin3.left,n=a.margin3.top;else if("x"===t)e=r?-o:0,n=r?0:a.height+o;else if("y"===t)e=r?0:-o,n=r?a.height+o:0;else if("y2"===t)e=r?0:a.width+o,n=r?1-o:0;else if("subx"===t)e=0,n=r?0:a.height2;else if("arc"===t)e=a.arcWidth/2,n=a.arcHeight/2;else if("radar"===t){var s=(a.arcWidth-a.arcHeight)/2;e=Math.max(s,0)+4,n=s<0?Math.abs(s):v(a.margin.top)}return"translate(".concat(e,", ").concat(n,")")}},{key:"initialOpacity",value:function initialOpacity(t){return null!==this.getBaseValue(t)&&this.withoutFadeIn[t.id]?"1":"0"}},{key:"initialOpacityForCircle",value:function initialOpacityForCircle(t){return null!==this.getBaseValue(t)&&this.withoutFadeIn[t.id]?this.opacityForCircle(t):"0"}},{key:"opacityForCircle",value:function opacityForCircle(t){var e=this.config.point_show?"1":"0";return k(this.getBaseValue(t))?this.isBubbleType(t)||this.isScatterType(t)?"0.5":e:"0"}},{key:"opacityForText",value:function opacityForText(){return this.hasDataLabel()?"1":"0"}},{key:"xx",value:function xx(t){var e=this.config.zoom_enabled&&this.zoomScale?this.zoomScale:this.x;return t?e(t.x):null}},{key:"xv",value:function xv(t){var e=this,n=e.getBaseValue(t);return e.isTimeSeries()?n=e.parseDate(n):e.isCategorized()&&h(n)&&(n=e.config.axis_x_categories.indexOf(n)),Math.ceil(e.x(n))}},{key:"yv",value:function yv(t){var e=t.axis&&"y2"===t.axis?this.y2:this.y;return Math.ceil(e(this.getBaseValue(t)))}},{key:"subxx",value:function subxx(t){return t?this.subX(t.x):null}},{key:"transformMain",value:function transformMain(t,e){var n,i,a,r=this;e&&e.axisX?n=e.axisX:(n=r.main.select(".".concat(B.axisX)),t&&(n=n.transition())),e&&e.axisY?i=e.axisY:(i=r.main.select(".".concat(B.axisY)),t&&(i=i.transition())),e&&e.axisY2?a=e.axisY2:(a=r.main.select(".".concat(B.axisY2)),t&&(a=a.transition())),(t?r.main.transition():r.main).attr("transform",r.getTranslate("main")),n.attr("transform",r.getTranslate("x")),i.attr("transform",r.getTranslate("y")),a.attr("transform",r.getTranslate("y2")),r.main.select(".".concat(B.chartArcs)).attr("transform",r.getTranslate("arc"))}},{key:"transformAll",value:function transformAll(t,e){var n=this;n.transformMain(t,e),n.config.subchart_show&&n.transformContext(t,e),n.legend&&n.transformLegend(t)}},{key:"updateSvgSize",value:function updateSvgSize(){var t=this,e=t.svg.select(".".concat(B.brush," .overlay")),n=e.size()?e.attr("height"):0;t.svg.attr("width",t.currentWidth).attr("height",t.currentHeight),t.svg.selectAll(["#".concat(t.clipId),"#".concat(t.clipIdForGrid)]).select("rect").attr("width",t.width).attr("height",t.height),t.svg.select("#".concat(t.clipIdForXAxis)).select("rect").attr("x",t.getXAxisClipX.bind(t)).attr("y",t.getXAxisClipY.bind(t)).attr("width",t.getXAxisClipWidth.bind(t)).attr("height",t.getXAxisClipHeight.bind(t)),t.svg.select("#".concat(t.clipIdForYAxis)).select("rect").attr("x",t.getYAxisClipX.bind(t)).attr("y",t.getYAxisClipY.bind(t)).attr("width",t.getYAxisClipWidth.bind(t)).attr("height",t.getYAxisClipHeight.bind(t)),t.svg.select("#".concat(t.clipIdForSubchart)).select("rect").attr("width",t.width).attr("height",n),t.svg.select(".".concat(B.zoomRect)).attr("width",t.width).attr("height",t.height),t.brush&&t.brush.scale(t.subX,n)}},{key:"updateDimension",value:function updateDimension(t){var e=this;t||(e.config.axis_rotated?(e.xAxis.create(e.axes.x),e.subXAxis.create(e.axes.subx)):(e.yAxis.create(e.axes.y),e.y2Axis.create(e.axes.y2))),e.updateSizes(),e.updateScales(t),e.updateSvgSize(),e.transformAll(!1)}},{key:"bindResize",value:function bindResize(){var t=this,e=t.config;t.resizeFunction=t.generateResize(),t.resizeFunction.add(e.onresize.bind(t)),e.resize_auto&&t.resizeFunction.add(function(){t.resizeTimeout&&(window.clearTimeout(t.resizeTimeout),t.resizeTimeout=null),t.resizeTimeout=window.setTimeout(t.api.flush,100)}),t.resizeFunction.add(e.onresized.bind(t)),window.addEventListener("resize",t.resizeFunction)}},{key:"generateResize",value:function generateResize(){function callResizeFunctions(){e.forEach(function(t){return t()})}var e=[];return callResizeFunctions.add=function(t){return e.push(t)},callResizeFunctions.remove=function(t){return e.splice(e.indexOf(t),1)},callResizeFunctions}},{key:"endall",value:function endall(t,i){var a=0;t.each(function(){return++a}).on("end",function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];--a||i.apply.apply(i,[this].concat(e))})}},{key:"generateWait",value:function generateWait(){var a=[],t=function(t,e){var i;!function loop(){var n=0;a.forEach(function(t){if(t.empty())n++;else try{t.transition()}catch(e){n++}}),i&&clearTimeout(i),n===a.length?e&&e():i=setTimeout(loop,50)}()};return t.add=function(t){j(t)?a=a.concat(t):a.push(t)},t}},{key:"parseDate",value:function parseDate(t){var e;return t instanceof Date?e=t:h(t)?e=this.dataTimeFormat(this.config.data_xFormat)(t):I(t)&&!isNaN(t)&&(e=new Date(+t)),(!e||isNaN(+e))&&console&&console.error&&console.error("Failed to parse x '".concat(t,"' to Date object")),e}},{key:"isTabVisible",value:function isTabVisible(){return!document[["hidden","mozHidden","msHidden","webkitHidden"].filter(function(t){return t in document})[0]]}},{key:"convertInputType",value:function convertInputType(){var t=this.config,e=this.isMobile(),n=t.interaction_inputType_mouse&&!e&&"onmouseover"in window,i=!1;return t.interaction_inputType_touch&&(i="ontouchmove"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),(n?"mouse":i&&"touch")||null}}]),ChartInternal}(),tt=function Chart(t){a()(this,Chart);var e=new Q(this);(this.internal=e).loadConfig(t),e.beforeInit(t),e.init(),this.$=e.getChartElements(),e.afterInit(t),function bindThis(e,n,i){Object.keys(e).forEach(function(t){n[t]=e[t].bind(i),Object.keys(e[t]).length&&bindThis(e[t],n[t],i)})}(Chart.prototype,this,this)},et=function Options(){return a()(this,Options),{bindto:"#chart",clipPath:!0,svg_classname:undefined,size_width:undefined,size_height:undefined,padding_left:undefined,padding_right:undefined,padding_top:undefined,padding_bottom:undefined,resize_auto:!0,zoom_enabled:undefined,zoom_extent:undefined,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:undefined,zoom_onzoomstart:undefined,zoom_onzoomend:undefined,zoom_resetButton:!0,zoom_x_min:undefined,zoom_x_max:undefined,interaction_enabled:!0,interaction_brighten:!0,interaction_inputType_mouse:!0,interaction_inputType_touch:{},onover:function onover(){},onout:function onout(){},onresize:function onresize(){},onresized:function onresized(){},onbeforeinit:undefined,oninit:function oninit(){},onafterinit:undefined,onrendered:undefined,transition_duration:350,data_x:undefined,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function data_idConverter(t){return t},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:undefined,data_types:{},data_labels:{},data_labels_position:{},data_order:"desc",data_regions:{},data_color:undefined,data_colors:{},data_hide:!1,data_filter:undefined,data_stack_normalize:!1,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function data_selection_isselectable(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_onclick:function data_onclick(){},data_onover:function data_onover(){},data_onout:function data_onout(){},data_onselected:function data_onselected(){},data_onunselected:function data_onunselected(){},data_onmin:undefined,data_onmax:undefined,data_url:undefined,data_headers:undefined,data_json:undefined,data_rows:undefined,data_columns:undefined,data_mimeType:undefined,data_keys:undefined,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_axis_x_show:!0,subchart_onbrush:function subchart_onbrush(){},color_pattern:[],color_tiles:undefined,color_threshold:{},legend_show:!0,legend_hide:!1,legend_contents_bindto:undefined,legend_contents_template:undefined,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:undefined,legend_item_onclick:undefined,legend_item_onover:undefined,legend_item_onout:undefined,legend_equally:!1,legend_padding:0,legend_item_tile_width:10,legend_item_tile_height:10,legend_usePoint:!1,axis_rotated:!1,axis_x_clipPath:!0,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:undefined,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:undefined,axis_x_tick_text_position:{x:0,y:0},axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_width:null,axis_x_tick_tooltip:!1,axis_x_max:undefined,axis_x_min:undefined,axis_x_padding:{},axis_x_height:undefined,axis_x_extent:undefined,axis_x_label:{},axis_x_axes:[],axis_y_clipPath:!0,axis_y_show:!0,axis_y_type:undefined,axis_y_max:undefined,axis_y_min:undefined,axis_y_inverted:!1,axis_y_center:undefined,axis_y_inner:!1,axis_y_label:{},axis_y_tick_format:undefined,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_rotate:0,axis_y_tick_count:undefined,axis_y_tick_text_position:{x:0,y:0},axis_y_tick_time_value:undefined,axis_y_padding:{},axis_y_default:undefined,axis_y_axes:[],axis_y2_show:!1,axis_y2_max:undefined,axis_y2_min:undefined,axis_y2_inverted:!1,axis_y2_center:undefined,axis_y2_inner:!1,axis_y2_label:{},axis_y2_tick_format:undefined,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:undefined,axis_y2_tick_text_position:{x:0,y:0},axis_y2_padding:{},axis_y2_default:undefined,axis_y2_axes:[],grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_front:!1,grid_lines_front:!0,point_show:!0,point_r:2.5,point_sensitivity:10,point_focus_expand_enabled:!0,point_focus_expand_r:undefined,point_pattern:[],point_select_r:undefined,point_type:"circle",line_connectNull:!1,line_step_type:"step",line_classes:undefined,line_point:!0,bar_padding:0,bar_radius:undefined,bar_radius_ratio:undefined,bar_width:undefined,bar_width_ratio:.6,bar_width_max:undefined,bar_zerobased:!0,bubble_maxR:35,area_zerobased:!0,area_above:!1,pie_label_show:!0,pie_label_format:undefined,pie_label_threshold:.05,pie_label_ratio:undefined,pie_expand:{},pie_expand_duration:50,pie_innerRadius:0,pie_padAngle:0,pie_padding:0,gauge_fullCircle:!1,gauge_label_show:!0,gauge_label_format:undefined,gauge_min:0,gauge_max:100,gauge_startingAngle:-1*Math.PI/2,gauge_label_extents:undefined,gauge_units:undefined,gauge_width:undefined,gauge_expand:{},gauge_expand_duration:50,donut_label_show:!0,donut_label_format:undefined,donut_label_threshold:.05,donut_label_ratio:undefined,donut_width:undefined,donut_title:"",donut_expand:{},donut_expand_duration:50,donut_padAngle:0,spline_interpolation_type:"cardinal",radar_axis_max:undefined,radar_axis_line_show:!0,radar_axis_text_show:!0,radar_level_depth:3,radar_level_show:!0,radar_level_text_format:function radar_level_text_format(t){return t%1==0?t:t.toFixed(2)},radar_level_text_show:!0,radar_size_ratio:.87,radar_direction_clockwise:!1,regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_format_title:undefined,tooltip_format_name:undefined,tooltip_format_value:undefined,tooltip_position:undefined,tooltip_contents:function tooltip_contents(t,e,n,i){return this.getTooltipContent?this.getTooltipContent(t,e,n,i):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"},tooltip_linked:!1,tooltip_linked_name:"",tooltip_onshow:function tooltip_onshow(){},tooltip_onhide:function tooltip_onhide(){},tooltip_onshown:function tooltip_onshown(){},tooltip_onhidden:function tooltip_onhidden(){},tooltip_order:null,title_text:undefined,title_padding:{top:0,right:0,bottom:0,left:0},title_position:"top-center"}};D(Q.prototype,{getOptions:function getOptions(){return new et},loadConfig:function loadConfig(e){var n,i,a,r=this.config,o=function(){var t=i.shift();return t&&n&&_(n)&&t in n?(n=n[t],o()):t?undefined:n};Object.keys(r).forEach(function(t){n=e,i=t.split("_"),a=o(),P(a)&&(r[t]=a)})}}),D(Q.prototype,{getScale:function getScale(t,e,n){return(n?Object(q.scaleTime)():Object(q.scaleLinear)()).range([t,e])},getX:function getX(t,e,n,i){var a=this.zoomScale||this.getScale(t,e,this.isTimeSeries());return this.getCustomizedScale(n?a.domain(n):a,i)},getY:function getY(t,e,n){var i=this.getScale(t,e,this.isTimeSeriesY());return n&&i.domain(n),i},getCustomizedScale:function getCustomizedScale(i,t){var e=this,a=t||function(){return e.xAxis.tickOffset()},n=function(t,e){var n=i(t)+a();return e?n:Math.ceil(n)};for(var r in i)n[r]=i[r];return n.orgDomain=function(){return i.domain()},n.orgScale=function(){return i},e.isCategorized()&&(n.domain=function(t){var e=t;return arguments.length?(i.domain(e),n):[(e=this.orgDomain())[0],e[1]+1]}),n},getYScale:function getYScale(t){return"y2"===this.axis.getId(t)?this.y2:this.y},getSubYScale:function getSubYScale(t){return"y2"===this.axis.getId(t)?this.subY2:this.subY},updateScales:function updateScales(t){var e=this,n=e.config,i=n.axis_rotated,a=!e.x;e.xMin=i?1:0,e.xMax=i?e.height:e.width,e.yMin=i?0:e.height,e.yMax=i?e.width:1,e.subXMin=e.xMin,e.subXMax=e.xMax,e.subYMin=i?0:e.height2,e.subYMax=i?e.width2:1,e.x=e.getX(e.xMin,e.xMax,a?undefined:e.x.orgDomain(),function(){return e.xAxis.tickOffset()}),e.y=e.getY(e.yMin,e.yMax,a?n.axis_y_default:e.y.domain()),e.y2=e.getY(e.yMin,e.yMax,a?n.axis_y2_default:e.y2.domain()),e.subX=e.getX(e.xMin,e.xMax,e.orgXDomain,function(t){return t%1?0:e.subXAxis.tickOffset()}),e.subY=e.getY(e.subYMin,e.subYMax,a?n.axis_y_default:e.subY.domain()),e.subY2=e.getY(e.subYMin,e.subYMax,a?n.axis_y2_default:e.subY2.domain()),e.xAxisTickFormat=e.axis.getXAxisTickFormat(),e.xAxisTickValues=e.axis.getXAxisTickValues(),e.yAxisTickValues=e.axis.getYAxisTickValues(),e.y2AxisTickValues=e.axis.getY2AxisTickValues(),e.xAxis=e.axis.getXAxis("x",e.x,e.xOrient,e.xAxisTickFormat,e.xAxisTickValues,n.axis_x_tick_outer,t),e.subXAxis=e.axis.getXAxis("subx",e.subX,e.subXOrient,e.xAxisTickFormat,e.xAxisTickValues,n.axis_x_tick_outer),e.yAxis=e.axis.getYAxis("y",e.y,e.yOrient,n.axis_y_tick_format,e.yAxisTickValues,n.axis_y_tick_outer),e.y2Axis=e.axis.getYAxis("y2",e.y2,e.y2Orient,n.axis_y2_tick_format,e.y2AxisTickValues,n.axis_y2_tick_outer),e.updateArc&&e.updateArc()}}),D(Q.prototype,{getYDomainMinMax:function getYDomainMinMax(n,t){var l=this,e=l.config,u="min"===t,i=e.data_groups,d=l.mapToIds(n),a=u?m.min:m.max,g=l.getValuesAsIdKeyed(n);return 0<i.length&&function(){for(var s,c=l["has".concat(u?"Negative":"Positive","ValueInTargets")](n),t=function(t,e){if(0===(e=e.filter(function(t){return 0<=d.indexOf(t)})).length)return s=e,"continue";var a=e[0],r=l.axis.getId(a);c&&g[a]&&(g[a]=g[a].map(function(t){return(u?t<0:0<t)?t:0}));for(var n,i=function(t,e){if(!g[e])return"continue";var i=l.axis.getId(e);g[e].forEach(function(t,e){var n=+t;i!==r||c&&(u?0<n:n<0)||(g[a][e]+=n)})},o=1;n=e[o];o++)i(0,n);s=e},e=0;s=i[e];e++)t(0,s)}(),a(Object.keys(g).map(function(t){return a(g[t])}))},getYDomainMin:function getYDomainMin(t){return this.getYDomainMinMax(t,"min")},getYDomainMax:function getYDomainMax(t){return this.getYDomainMinMax(t,"max")},getYDomain:function getYDomain(t,e,n){var i=this,a=i.config;if(i.isStackNormalized())return[0,100];var r,o=t.filter(function(t){return i.axis.getId(t.id)===e}),s=n?i.filterByXDomain(o,n):o,c="y2"===e?a.axis_y2_min:a.axis_y_min,l="y2"===e?a.axis_y2_max:a.axis_y_max,u=i.getYDomainMin(s),d=i.getYDomainMax(s),g="y2"===e?a.axis_y2_center:a.axis_y_center,h=i.hasType("bar",s)&&a.bar_zerobased||i.hasType("area",s)&&a.area_zerobased,f="y2"===e?a.axis_y2_inverted:a.axis_y_inverted,p=i.hasDataLabel()&&a.axis_rotated,x=i.hasDataLabel()&&!a.axis_rotated;if(u=k(c)?c:k(l)?u<l?u:l-10:u,d=k(l)?l:k(c)?c<d?d:c+10:d,0===s.length)return"y2"===e?i.y2.domain():i.y.domain();isNaN(u)&&(u=0),isNaN(d)&&(d=u),u===d&&(u<0?d=0:u=0);var m=0<=u&&0<=d,v=u<=0&&d<=0;(k(c)&&m||k(l)&&v)&&(h=!1),h&&(m&&(u=0),v&&(d=0));var _=Math.abs(d-u),y=.1*_,b=.1*_;if(P(g)){var T=Math.max(Math.abs(u),Math.abs(d));d=g+T,u=g-T}if(p){r=i.getDataLabelLength(u,d,"width");var A=M(i.y.range()),w=[r[0]/A,r[1]/A];y+=_*(w[1]/(1-w[0]-w[1])),b+=_*(w[0]/(1-w[0]-w[1]))}else x&&(r=i.getDataLabelLength(u,d,"height"),y+=i.axis.convertPixelsToAxisPadding(r[1],_),b+=i.axis.convertPixelsToAxisPadding(r[0],_));"y"===e&&Y(a.axis_y_padding)&&(y=i.axis.getPadding(a.axis_y_padding,"top",y,_),b=i.axis.getPadding(a.axis_y_padding,"bottom",b,_)),"y2"===e&&Y(a.axis_y2_padding)&&(y=i.axis.getPadding(a.axis_y2_padding,"top",y,_),b=i.axis.getPadding(a.axis_y2_padding,"bottom",b,_)),h&&(m&&(b=u),v&&(y=-d));var L=[u-b,d+y];return f?L.reverse():L},getXDomainMinMax:function getXDomainMinMax(t,e){var n=this.config["axis_x_".concat(e)],i="min"===e?m.min:m.max;return P(n)?this.isTimeSeries()?this.parseDate(n):n:i(t,function(t){return i(t.values,function(t){return t.x})})},getXDomainMin:function getXDomainMin(t){return this.getXDomainMinMax(t,"min")},getXDomainMax:function getXDomainMax(t){return this.getXDomainMinMax(t,"max")},getXDomainPadding:function getXDomainPadding(t){var e,n,i=this.config,a=t[1]-t[0],r=i.axis_x_padding,o=n=this.isCategorized()?0:this.hasType("bar")?1<(e=this.getMaxDataCount())?a/(e-1)/2:.5:.01*a,s=n;return b(r)&&Y(r)?(o=k(r.left)?r.left:n,s=k(r.right)?r.right:n):I(i.axis_x_padding)&&(s=o=r),{left:o,right:s}},getXDomain:function getXDomain(t){var e=this,n=[e.getXDomainMin(t),e.getXDomainMax(t)],i=n[0],a=n[1],r=e.getXDomainPadding(n),o=0,s=0;return i-a!=0||e.isCategorized()||(a=e.isTimeSeries()?(i=new Date(.5*i.getTime()),new Date(1.5*a.getTime())):(i=0===i?1:.5*i,0===a?-1:1.5*a)),(i||0===i)&&(o=e.isTimeSeries()?new Date(i.getTime()-r.left):i-r.left),(a||0===a)&&(s=e.isTimeSeries()?new Date(a.getTime()+r.right):a+r.right),[o,s]},updateXDomain:function updateXDomain(t,e,n,i,a){var r=this,o=r.config.zoom_enabled;if(n&&(r.x.domain(a||Object(m.extent)(r.getXDomain(t))),r.orgXDomain=r.x.domain(),o&&r.zoom.updateScaleExtent(),r.subX.domain(r.x.domain()),r.brush&&r.brush.scale(r.subX)),e){var s=a||!r.brush||F(r)?r.orgXDomain:w(r).map(r.subX.invert);r.x.domain(s),o&&r.zoom.updateScaleExtent()}return i&&r.x.domain(r.trimXDomain(r.x.orgDomain())),r.x.domain()},trimXDomain:function trimXDomain(t){var e=this.getZoomDomain(),n=e[0],i=e[1];return t[0]<=n&&(t[1]=+t[1]+(n-t[0]),t[0]=n),i<=t[1]&&(t[0]=+t[0]-(t[1]-i),t[1]=i),t}});var nt=n(18);D(Q.prototype,{isX:function isX(t){var e,n,i,a=this.config,r=a.data_x&&t===a.data_x,o=Y(a.data_xs)&&(e=a.data_xs,n=t,i=!1,Object.keys(e).forEach(function(t){return e[t]===n&&(i=!0)}),i);return r||o},isNotX:function isNotX(t){return!this.isX(t)},isStackNormalized:function isStackNormalized(){var t=this.config;return t.data_stack_normalize&&t.data_groups.length},isGrouped:function isGrouped(e){return this.config.data_groups.map(function(t){return 0<=t.indexOf(e)})[0]},getXKey:function getXKey(t){var e=this.config;return e.data_x?e.data_x:Y(e.data_xs)?e.data_xs[t]:null},getXValuesOfXKey:function getXValuesOfXKey(e,t){var n,i=this;return(t&&Y(t)?i.mapToIds(t):[]).forEach(function(t){i.getXKey(t)===e&&(n=i.data.xs[t])}),n},getIndexByX:function getIndexByX(t,e){return e?e.indexOf(h(t)?t:+t):(this.filterByX(this.data.targets,t)[0]||{index:null}).index},getXValue:function getXValue(t,e){return t in this.data.xs&&this.data.xs[t]&&k(this.data.xs[t][e])?this.data.xs[t][e]:e},getOtherTargetXs:function getOtherTargetXs(){var t=Object.keys(this.data.xs);return t.length?this.data.xs[t[0]]:null},getOtherTargetX:function getOtherTargetX(t){var e=this.getOtherTargetXs();return e&&t<e.length?e[t]:null},addXs:function addXs(e){var n=this;Object.keys(e).forEach(function(t){n.config.data_xs[t]=e[t]})},hasMultipleX:function hasMultipleX(e){return 1<Object(nt.set)(Object.keys(e).map(function(t){return e[t]})).size()},isMultipleX:function isMultipleX(){return Y(this.config.data_xs)||!this.config.data_xSort||this.hasType("bubble")||this.hasType("scatter")},addName:function addName(t){var e;return t&&(e=this.config.data_names[t.id],t.name=e===undefined?t.id:e),t},getAllValuesOnIndex:function getAllValuesOnIndex(e){var n=this;return n.filterTargetsToShow(n.data.targets).map(function(t){return n.addName(n.getValueOnIndex(t.values,e))})},getValueOnIndex:function getValueOnIndex(t,e){var n=t.filter(function(t){return t.index===e});return n.length?n[0]:null},updateTargetX:function updateTargetX(t,i){var a=this;t.forEach(function(n){n.values.forEach(function(t,e){t.x=a.generateTargetX(i[e],n.id,e)}),a.data.xs[n.id]=i})},updateTargetXs:function updateTargetXs(t,e){var n=this;t.forEach(function(t){e[t.id]&&n.updateTargetX([t],e[t.id])})},generateTargetX:function generateTargetX(t,e,n){var i=this,a=i.isCategorized()?n:t||n;return i.isTimeSeries()?a=t?i.parseDate(t):i.parseDate(i.getXValue(e,n)):i.isCustomX()&&!i.isCategorized()&&(a=k(t)?+t:i.getXValue(e,n)),a},cloneTarget:function cloneTarget(t){return{id:t.id,id_org:t.id_org,values:t.values.map(function(t){return{x:t.x,value:t.value,id:t.id}})}},updateXs:function updateXs(){var e=this;e.data.targets.length&&(e.xs=[],e.data.targets[0].values.forEach(function(t){e.xs[t.index]=t.x}))},getPrevX:function getPrevX(t){var e=this.xs[t-1];return P(e)?e:null},getNextX:function getNextX(t){var e=this.xs[t+1];return P(e)?e:null},getBaseValue:function getBaseValue(t){var e=t.value;return e&&this.isAreaRangeType(t)&&(e=this.getAreaRangeData(t,"mid")),e},getMinMaxValue:function getMinMaxValue(t){var e,n,i=this.getBaseValue.bind(this);return(t||this.data.targets.map(function(t){return t.values})).forEach(function(t){e=Object(m.min)([e,Object(m.min)(t,i)]),n=Object(m.max)([n,Object(m.max)(t,i)])}),{min:e,max:n}},getMinMaxData:function getMinMaxData(){var i=this,t="$minMaxData",e=i.getCache(t);if(!e){var n=i.data.targets.map(function(t){return t.values}),a=i.getMinMaxValue(n),r=[],o=[];n.forEach(function(t){var e=i.getFilteredDataByValue(t,a.min),n=i.getFilteredDataByValue(t,a.max);e.length&&(r=r.concat(e)),n.length&&(o=o.concat(n))}),i.addCache(t,e={min:r,max:o})}return e},getTotalPerIndex:function getTotalPerIndex(){var n=this.getCache("$totalPerIndex");return this.isStackNormalized()&&!n&&(n=[],this.data.targets.forEach(function(t){t.values.forEach(function(t,e){n[e]||(n[e]=0),n[e]+=I(t.value)?t.value:0})})),n},getTotalDataSum:function getTotalDataSum(){var t="$totalDataSum",e=this.getCache(t);if(!e){var n=0;this.data.targets.map(function(t){return t.values}).forEach(function(t){n+=Object(m.sum)(t,function(t){return t.value})}),this.addCache(t,e=n)}return e},getFilteredDataByValue:function getFilteredDataByValue(t,e){var n=this;return t.filter(function(t){return n.getBaseValue(t)===e})},getMaxDataCount:function getMaxDataCount(){return Object(m.max)(this.data.targets,function(t){return t.values.length})},getMaxDataCountTarget:function getMaxDataCountTarget(t){var e,n=t.length,i=0;return 1<n?t.forEach(function(t){t.values.length>i&&(i=(e=t).values.length)}):e=n?t[0]:null,e},mapToIds:function mapToIds(t){return t.map(function(t){return t.id})},mapToTargetIds:function mapToTargetIds(t){return t?j(t)?t.concat():[t]:this.mapToIds(this.data.targets)},hasTarget:function hasTarget(t,e){for(var n,i=this.mapToIds(t),a=0;n=i[a];a++)if(n===e)return!0;return!1},isTargetToShow:function isTargetToShow(t){return this.hiddenTargetIds.indexOf(t)<0},isLegendToShow:function isLegendToShow(t){return this.hiddenLegendIds.indexOf(t)<0},filterTargetsToShow:function filterTargetsToShow(t){var e=this;return t.filter(function(t){return e.isTargetToShow(t.id)})},mapTargetsToUniqueXs:function mapTargetsToUniqueXs(t){var e=Object(nt.set)(Object(m.merge)(t.map(function(t){return t.values.map(function(t){return+t.x})}))).values();return(e=this.isTimeSeries()?e.map(function(t){return new Date(+t)}):e.map(function(t){return+t})).sort(function(t,e){return t<e?-1:e<t?1:e<=t?0:NaN})},addHiddenTargetIds:function addHiddenTargetIds(t){this.hiddenTargetIds=this.hiddenTargetIds.concat(t)},removeHiddenTargetIds:function removeHiddenTargetIds(e){this.hiddenTargetIds=this.hiddenTargetIds.filter(function(t){return e.indexOf(t)<0})},addHiddenLegendIds:function addHiddenLegendIds(t){this.hiddenLegendIds=this.hiddenLegendIds.concat(t)},removeHiddenLegendIds:function removeHiddenLegendIds(e){this.hiddenLegendIds=this.hiddenLegendIds.filter(function(t){return e.indexOf(t)<0})},getValuesAsIdKeyed:function getValuesAsIdKeyed(t){var i=this,e={},a=i.isMultipleX(),r=a?i.mapTargetsToUniqueXs(t).map(function(t){return h(t)?t:+t}):null;return t.forEach(function(t){var n=[];t.values.forEach(function(t){var e=t.value;j(e)?n.push.apply(n,W()(e)):b(e)&&"high"in e?n.push.apply(n,W()(Object.values(e))):a?n[i.getIndexByX(t.x,r)]=e:n.push(e)}),e[t.id]=n}),e},checkValueInTargets:function checkValueInTargets(t,e){for(var n,i=Object.keys(t),a=0;a<i.length;a++){n=t[i[a]].values;for(var r=0;r<n.length;r++)if(e(n[r].value))return!0}return!1},hasNegativeValueInTargets:function hasNegativeValueInTargets(t){return this.checkValueInTargets(t,function(t){return t<0})},hasPositiveValueInTargets:function hasPositiveValueInTargets(t){return this.checkValueInTargets(t,function(t){return 0<t})},_checkOrder:function _checkOrder(t){var e=this.config;return h(e.data_order)&&e.data_order.toLowerCase()===t},isOrderDesc:function isOrderDesc(){return this._checkOrder("desc")},isOrderAsc:function isOrderAsc(){return this._checkOrder("asc")},orderTargets:function orderTargets(t){var e=this.config,n=W()(t),r=this.isOrderAsc(),i=this.isOrderDesc();return r||i?n.sort(function(t,e){var n=function(t,e){return t+Math.abs(e.value)},i=t.values.reduce(n,0),a=e.values.reduce(n,0);return r?a-i:i-a}):C(e.data_order)&&n.sort(e.data_order),n},filterByX:function filterByX(t,e){return Object(m.merge)(t.map(function(t){return t.values})).filter(function(t){return t.x-e==0})},filterRemoveNull:function filterRemoveNull(t){var e=this;return t.filter(function(t){return k(e.getBaseValue(t))})},filterByXDomain:function filterByXDomain(t,e){return t.map(function(t){return{id:t.id,id_org:t.id_org,values:t.values.filter(function(t){return e[0]<=t.x&&t.x<=e[1]})}})},hasDataLabel:function hasDataLabel(){var t=this.config.data_labels;return f(t)&&t||_(t)&&Y(t)},getDataLabelLength:function getDataLabelLength(t,e,n){var i=this,a=[0,0];return i.selectChart.select("svg").selectAll(".dummy").data([t,e]).enter().append("text").text(function(t){return i.dataLabelFormat(t.id)(t)}).each(function(t,e){a[e]=1.3*this.getBoundingClientRect()[n]}).remove(),a},isNoneArc:function isNoneArc(t){return this.hasTarget(this.data.targets,t.id)},isArc:function isArc(t){return"data"in t&&this.hasTarget(this.data.targets,t.data.id)},findSameXOfValues:function findSameXOfValues(t,e){var n,i=t[e].x,a=[];for(n=e-1;0<=n&&i===t[n].x;n--)a.push(t[n]);for(n=e;n<t.length&&i===t[n].x;n++)a.push(t[n]);return a},findClosestFromTargets:function findClosestFromTargets(t,e){var n=this,i=t.map(function(t){return n.findClosest(t.values,e)});return n.findClosest(i,e)},findClosest:function findClosest(t,n){var i,a=this,r=a.config.point_sensitivity;return t.filter(function(t){return t&&a.isBarType(t.id)}).forEach(function(t){var e=a.main.select(".".concat(B.bars).concat(a.getTargetSelectorSuffix(t.id)," .").concat(B.bar,"-").concat(t.index)).node();!i&&a.isWithinBar(e)&&(i=t)}),t.filter(function(t){return t&&!a.isBarType(t.id)}).forEach(function(t){var e=a.dist(t,n);e<r&&(r=e,i=t)}),i},dist:function dist(t,e){var n=this.config.axis_rotated,i=n?1:0,a=n?0:1,r=this.circleY(t,t.index),o=this.x(t.x);return Math.sqrt(Math.pow(o-e[i],2)+Math.pow(r-e[a],2))},convertValuesToStep:function convertValuesToStep(t){var e=this.config,n=e.axis_rotated,i=e.line_step_type,a=this.isCategorized(),r=j(t)?t.concat():[t];if(!n&&!a)return t;var o=r[0].id,s=r[0].x-1,c=r[0].value;return a&&r.unshift({x:s,value:c,id:o}),"step-after"===i&&r.unshift({x:s-1,value:c,id:o}),c=r[(s=r.length)-1].value,a&&r.push({x:s,value:c,id:o}),"step-before"===i&&r.push({x:s+1,value:c,id:o}),r},convertValuesToRange:function convertValuesToRange(t){var e=j(t)?t.concat():[t],i=[];return e.forEach(function(t){var e=t.x,n=t.id;i.push({x:e,id:n,value:t.value[0]}),i.push({x:e,id:n,value:t.value[2]})}),i},updateDataAttributes:function updateDataAttributes(t,e){var n=this.config["data_".concat(t)];return R(e)||(Object.keys(e).forEach(function(t){n[t]=e[t]}),this.redraw({withLegend:!0})),n},getAreaRangeData:function getAreaRangeData(t,e){var n=t.value;if(j(n)){var i=["high","mid","low"].indexOf(e);return-1===i?null:n[i]}return n[e]},getRatio:function getRatio(t,e,n){var i=this,a=i.config,r=i.api,o=0;if(e&&r.data.shown.call(r).length){var s=r.data.values.bind(r);if(o=e.ratio||e.value,"arc"===t)if(i.pie.padAngle()()){var c=i.getTotalDataSum();i.hiddenTargetIds.length&&(c-=Object(m.sum)(s(i.hiddenTargetIds))),o=e.value/c}else o=(e.endAngle-e.startAngle)/(Math.PI*(i.hasType("gauge")&&!a.gauge_fullCircle?1:2));else if("index"===t){var l=this.getTotalPerIndex();if(i.hiddenTargetIds.length){var u=s(i.hiddenTargetIds,!1);u.length&&(u=u.reduce(function(t,n){return t.map(function(t,e){return(I(t)?t:0)+n[e]})}),l=l.map(function(t,e){return t-u[e]}))}e.ratio=I(e.value)&&l&&0<l[e.index]?e.value/l[e.index]:0,o=e.ratio}else"radar"===t&&(o=parseFloat(Math.max(e.value,0))/i.maxValue*a.radar_size_ratio)}return n&&o?100*o:o}});var it=n(19);D(Q.prototype,{convertUrlToData:function convertUrlToData(e){var n=this,i=1<arguments.length&&arguments[1]!==undefined?arguments[1]:"csv",t=2<arguments.length?arguments[2]:undefined,a=3<arguments.length?arguments[3]:undefined,r=4<arguments.length?arguments[4]:undefined,o=new XMLHttpRequest;if(t)for(var s,c=Object.keys(t),l=0;l<c.length;l++)s=c[l],o.setRequestHeader(s,t[s]);o.open("GET",e),o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)throw new Error("".concat(e,": Something went wrong loading!"));var t=o.responseText;t&&r.call(n,n["convert".concat(O(i),"ToData")]("json"===i?JSON.parse(t):t,a))}},o.send()},_convertCsvTsvToData:function _convertCsvTsvToData(t,e){var n,i=t.rows(e);return 1===i.length?(n=[{}],i[0].forEach(function(t){n[0][t]=null})):n=t.parse(e),n},convertCsvToData:function convertCsvToData(t){return this._convertCsvTsvToData({rows:it.csvParseRows,parse:it.csvParse},t)},convertTsvToData:function convertTsvToData(t){return this._convertCsvTsvToData({rows:it.tsvParseRows,parse:it.tsvParse},t)},convertJsonToData:function convertJsonToData(n,t){var u,e,d=this,i=this.config,g=[];if(j(n)){var a=t||i.data_keys;a.x?(u=a.value.concat(a.x),i.data_x=a.x):u=a.value,g.push(u),n.forEach(function(t){var e=[],n=!0,i=!1,a=undefined;try{for(var r,o=u[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var s=r.value,c=d.findValueInJson(t,s);R(c)&&(c=null),e.push(c)}}catch(l){i=!0,a=l}finally{try{n||null==o["return"]||o["return"]()}finally{if(i)throw a}}g.push(e)}),e=this.convertRowsToData(g)}else Object.keys(n).forEach(function(t){var e=n[t].concat();e.unshift(t),g.push(e)}),e=this.convertColumnsToData(g);return e},findValueInJson:function findValueInJson(t,e){if(t[e]!==undefined)return t[e];var n=e.replace(/\[(\w+)\]/g,".$1").replace(/^\./,"").split("."),i=t,a=!0,r=!1,o=undefined;try{for(var s,c=n[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=s.value;if(!(l in i)){i=undefined;break}i=i[l]}}catch(u){r=!0,o=u}finally{try{a||null==c["return"]||c["return"]()}finally{if(r)throw o}}return i},convertRowsToData:function convertRowsToData(t){for(var e=t[0],n=[],i=1,a=t.length;i<a;i++){for(var r={},o=0,s=t[i].length;o<s;o++){if(R(t[i][o]))throw new Error("Source data is missing a component at (".concat(i,", ").concat(o,")!"));r[e[o]]=t[i][o]}n.push(r)}return n},convertColumnsToData:function convertColumnsToData(t){for(var e=[],n=0,i=t.length;n<i;n++)for(var a=t[n][0],r=1,o=t[n].length;r<o;r++){if(R(e[r-1])&&(e[r-1]={}),R(t[n][r]))throw new Error("Source data is missing a component at (".concat(n,", ").concat(r,")!"));e[r-1][a]=t[n][r]}return e},convertDataToTargets:function convertDataToTargets(t,i){var a,r=this,d=this,g=d.config,e=Object(nt.keys)(t[0]).filter(d.isNotX,d),o=Object(nt.keys)(t[0]).filter(d.isX,d);e.forEach(function(n){var e=r.getXKey(n);r.isCustomX()||r.isTimeSeries()?0<=o.indexOf(e)?a=(i&&d.data.xs[n]||[]).concat(t.map(function(t){return t[e]}).filter(k).map(function(t,e){return d.generateTargetX(t,n,e)})):g.data_x?a=r.getOtherTargetXs():Y(g.data_xs)&&(a=d.getXValuesOfXKey(e,d.data.targets)):a=t.map(function(t,e){return e}),a&&(r.data.xs[n]=a)}),e.forEach(function(t){if(!a)throw new Error('x is not defined for id = "'.concat(t,'".'))});var n=e.map(function(r,o){var s=g.data_idConverter(r),c=d.getXKey(r),l=d.isCustomX()&&d.isCategorized(),u=l&&t.map(function(t){return t.x}).every(function(t){return-1<g.axis_x_categories.indexOf(t)});return{id:s,id_org:r,values:t.map(function(t,e){var n,i=t[c],a=t[r];return a=null===a||isNaN(a)?j(a)||b(a)&&a.high?a:null:+t[r],l&&0===o&&!R(i)?(!u&&0===o&&0===e&&(g.axis_x_categories=[]),-1===(n=g.axis_x_categories.indexOf(i))&&(n=g.axis_x_categories.length,g.axis_x_categories.push(i))):n=d.generateTargetX(i,r,e),(R(t[r])||d.data.xs[r].length<=e)&&(n=undefined),{x:n,value:a,id:s}}).filter(function(t){return P(t.x)})}});return n.forEach(function(t){g.data_xSort&&(t.values=t.values.sort(function(t,e){return(t.x||0===t.x?t.x:Infinity)-(e.x||0===e.x?e.x:Infinity)})),t.values.forEach(function(t,e){var n=d.data.targets?d.getIndexByX(t.x):null;t.index=null===n?e:n}),d.data.xs[t.id].sort(function(t,e){return t-e})}),d.hasNegativeValue=d.hasNegativeValueInTargets(n),d.hasPositiveValue=d.hasPositiveValueInTargets(n),g.data_type&&d.setTargetType(d.mapToIds(n).filter(function(t){return!(t in g.data_types)}),g.data_type),n.forEach(function(t){return d.addCache(t.id_org,t,!0)}),n}}),D(Q.prototype,{load:function load(t,n){var i=this,a=t;a&&(n.filter&&(a=a.filter(n.filter)),(n.type||n.types)&&a.forEach(function(t){var e=n.types&&n.types[t.id]||n.type;i.setTargetType(t.id,e)}),i.data.targets.forEach(function(t){for(var e=0;e<a.length;e++)if(t.id===a[e].id){t.values=a[e].values,a.splice(e,1);break}}),i.data.targets=i.data.targets.concat(a)),i.updateTargets(i.data.targets),i.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),n.done&&n.done()},loadFromArgs:function loadFromArgs(e){var t,n=this;n.resetCache(),e.data?t=e.data:e.url?n.convertUrlToData(e.url,e.mimeType,e.headers,e.keys,function(t){n.load(n.convertDataToTargets(t),e)}):e.json?t=n.convertJsonToData(e.json,e.keys):e.rows?t=n.convertRowsToData(e.rows):e.columns&&(t=n.convertColumnsToData(e.columns)),n.load(t?n.convertDataToTargets(t):null,e)},unload:function unload(t,e){var n=this,i=e,a=t;return n.resetCache(),i||(i=function(){}),(a=a.filter(function(t){return n.hasTarget(n.data.targets,t)}))&&0!==a.length?(n.svg.selectAll(a.map(function(t){return n.selectorTarget(t)})).transition().style("opacity","0").remove().call(n.endall,i),void a.forEach(function(e){n.withoutFadeIn[e]=!1,n.legend&&n.legend.selectAll(".".concat(B.legendItem).concat(n.getTargetSelectorSuffix(e))).remove(),n.data.targets=n.data.targets.filter(function(t){return t.id!==e})})):void i()}}),D(Q.prototype,{categoryName:function categoryName(t){var e=this.config;return t<e.axis_x_categories.length?e.axis_x_categories[t]:t}});var at=n(20);D(Q.prototype,{initEventRect:function initEventRect(){this.main.select(".".concat(B.chart)).append("g").attr("class",B.eventRects).style("fill-opacity","0")},redrawEventRect:function redrawEventRect(){var t,e=this,n=e.config,i=n.zoom_enabled,a=e.isMultipleX(),r=e.main.select(".".concat(B.eventRects)).style("cursor",!i||!0!==i&&"wheel"!==i.type?null:n.axis_rotate?"ns-resize":"ew-resize").classed(B.eventRectsMultiple,a).classed(B.eventRectsSingle,!a);if(r.selectAll(".".concat(B.eventRect)).remove(),e.eventRect=r.selectAll(".".concat(B.eventRect)),a)t=e.eventRect.data([0]),t=e.generateEventRectsForMultipleXs(t.enter()).merge(t);else{var o=e.getMaxDataCountTarget(e.data.targets);r.datum(o?o.values:[]),e.eventRect=r.selectAll(".".concat(B.eventRect)),(t=e.eventRect.data(function(t){return t})).exit().remove(),t=e.generateEventRectsForSingleX(t.enter()).merge(t)}e.updateEventRect(t),"touch"!==e.inputType||e.svg.on("touchstart.eventRect")||e.hasArcType()||e.bindTouchOnEventRect(a)},bindTouchOnEventRect:function bindTouchOnEventRect(a){var r,o=this,s=o.config,c=function(){var t=z.event.changedTouches[0];return Object(z.select)(document.elementFromPoint(t.clientX,t.clientY))},l=function(t){var e=t&&t.attr("class")&&1*t.attr("class").replace(new RegExp("(".concat(B.eventRect,"-?|s)"),"g"),"");return(isNaN(e)||null===e)&&(e=-1),e},t=s.interaction_inputType_touch.preventDefault,u=f(t)&&t||!1,d=!isNaN(t)&&t||null;o.svg.on("touchstart.eventRect touchmove.eventRect",function(){var t,e,n,i=c();if(!i.empty()&&i.classed(B.eventRect)){if(o.dragging||o.flowing||o.hasArcType())return;t=z.event,e=t.type,n=t.changedTouches[0]["client".concat(s.axis_rotated?"Y":"X")],"touchstart"===e?u?t.preventDefault():null!==d&&(r=n):"touchmove"===e&&(u||!0===r||null!==d&&Math.abs(r-n)>=d)&&(r=!0,t.preventDefault()),function(t){if(a)o.selectRectForMultipleXs(t);else{var e=c(),n=l(e);o.setOver(n),-1===n?o.unselectRect():o.selectRectForSingle(t,e,n)}}(this)}else o.unselectRect()}).on("touchend.eventRect",function(){var t=c();if(!t.empty()&&t.classed(B.eventRect)){if(o.hasArcType()||!o.toggleShape||o.cancelClick)return void(o.cancelClick&&(o.cancelClick=!1));var e=l(t);a||-1===e||o.main.selectAll(".".concat(B.shape,"-").concat(e)).each(function(t){return s.data_onout.call(o.api,t)})}})},updateEventRect:function updateEventRect(t){var e,n,i,a,r=this,o=r.config,s=r.zoomScale||r.x,c=t||r.eventRect.data(),l=o.axis_rotated;if(r.isMultipleX())n=e=0,i=r.width,a=r.height;else{var u,d;if(r.isCategorized())u=r.getEventRectWidth(),d=function(t){return s(t.x)-u/2};else{r.updateXs();var g=function(t){var e=t.index;return{prev:r.getPrevX(e),next:r.getNextX(e)}};u=function(t){var e=g(t);return null===e.prev&&null===e.next?l?r.height:r.width:(null===e.prev&&(e.prev=s.domain()[0]),null===e.next&&(e.next=s.domain()[1]),Math.max(0,(s(e.next)-s(e.prev))/2))},d=function(t){var e=g(t),n=r.data.xs[t.id][t.index];return null===e.prev&&null===e.next?0:(null===e.prev&&(e.prev=s.domain()[0]),(s(n)+s(e.prev))/2)}}e=l?0:d,n=l?d:0,i=l?r.width:u,a=l?u:r.height}c.attr("class",r.classEvent.bind(r)).attr("x",e).attr("y",n).attr("width",i).attr("height",a)},selectRectForSingle:function selectRectForSingle(n,i,a){var r=this,o=r.config,s=o.data_selection_enabled,c=o.data_selection_grouped,l=o.tooltip_grouped,t=r.getAllValuesOnIndex(a);l&&(r.showTooltip(t,n),r.showXGridFocus(t),!s||c)||r.main.selectAll(".".concat(B.shape,"-").concat(a)).each(function(){Object(z.select)(this).classed(B.EXPANDED,!0),s&&i.style("cursor",c?"pointer":null),l||(r.hideXGridFocus(),r.hideTooltip(),!c&&r.expandCirclesBars(a))}).filter(function(t){return r.isWithinShape(this,t)}).call(function(t){var e=t.data();s&&(c||o.data_selection_isselectable(e))&&i.style("cursor","pointer"),l||(r.showTooltip(e,n),r.showXGridFocus(e),r.unexpandCircles(),t.each(function(t){return r.expandCirclesBars(a,t.id)}))})},expandCirclesBars:function expandCirclesBars(t,e,n){this.config.point_focus_expand_enabled&&this.expandCircles(t,e,n),this.expandBars(t,e,n)},selectRectForMultipleXs:function selectRectForMultipleXs(t){var e=this,n=e.config,i=e.filterTargetsToShow(e.data.targets);if(!e.dragging&&!e.hasArcType(i)){var a=Object(z.mouse)(t),r=e.findClosestFromTargets(i,a);if(e.mouseover&&(!r||r.id!==e.mouseover.id)&&(n.data_onout.call(e.api,e.mouseover),e.mouseover=undefined),!r)return void e.unselectRect();var o=(e.isBubbleType(r)||e.isScatterType(r)||!n.tooltip_grouped?[r]:e.filterByX(i,r.x)).map(function(t){return e.addName(t)});e.showTooltip(o,t),e.expandCirclesBars(r.index,r.id,!0),e.showXGridFocus(o),(e.isBarType(r.id)||e.dist(r,a)<n.point_sensitivity)&&(e.svg.select(".".concat(B.eventRect)).style("cursor","pointer"),!e.mouseover&&(n.data_onover.call(e.api,r),e.mouseover=r))}},unselectRect:function unselectRect(){var t=this;t.svg.select(".".concat(B.eventRect)).style("cursor",null),t.hideXGridFocus(),t.hideTooltip(),t._handleLinkedCharts(!1),t.unexpandCircles(),t.unexpandBars()},setOver:function setOver(t){var e=this,n=e.config;e.expandCirclesBars(t,null,!0),-1!==t&&e.main.selectAll(".".concat(B.shape,"-").concat(t)).each(function(t){return n.data_onover.call(e.api,t)})},getDraggableSelection:function getDraggableSelection(){var t=this,e=t.config;return e.interaction_enabled&&e.data_selection_draggable&&t.drag?Object(at.drag)().on("drag",function(){t.drag(Object(z.mouse)(this))}).on("start",function(){t.dragstart(Object(z.mouse)(this))}).on("end",function(){t.dragend()}):function(){}},generateEventRectsForSingleX:function generateEventRectsForSingleX(t){var i=this,n=i.config,e=t.append("rect").attr("class",i.classEvent.bind(i)).style("cursor",n.data_selection_enabled&&n.data_selection_grouped?"pointer":null).on("click",function(t){i.clickHandlerForSingleX.bind(this)(t,i)}).call(i.getDraggableSelection());return"mouse"===i.inputType&&e.on("mouseover",function(t){i.dragging||i.flowing||i.hasArcType()||i.setOver(t.index)}).on("mousemove",function(t){if(!(i.dragging||i.flowing||i.hasArcType())){var e=t.index,n=i.svg.select(".".concat(B.eventRect,"-").concat(e));i.isStepType(t)&&"step-after"===i.config.line_step_type&&Object(z.mouse)(this)[0]<i.x(i.getXValue(t.id,e))&&(e-=1),-1===e?i.unselectRect():i.selectRectForSingle(this,n,e)}}).on("mouseout",function(t){if(i.config&&!i.hasArcType()){var e=t.index;i.unselectRect(),i.main.selectAll(".".concat(B.shape,"-").concat(e)).each(function(t){return n.data_onout.call(i.api,t)})}}),e},clickHandlerForSingleX:function clickHandlerForSingleX(t,e){var n=e,i=n.config;if(n.hasArcType()||!n.toggleShape||n.cancelClick)n.cancelClick&&(n.cancelClick=!1);else{var a=t.index;n.main.selectAll(".".concat(B.shape,"-").concat(a)).each(function(t){(i.data_selection_grouped||n.isWithinShape(this,t))&&(n.toggleShape(this,t,a),i.data_onclick.call(n.api,t,this))})}},generateEventRectsForMultipleXs:function generateEventRectsForMultipleXs(t){var e=this,n=t.append("rect").attr("x",0).attr("y",0).attr("width",e.width).attr("height",e.height).attr("class",B.eventRect).on("click",function(){e.clickHandlerForMultipleXS.bind(this)(e)}).call(e.getDraggableSelection());return"mouse"===e.inputType&&n.on("mouseover mousemove",function(){e.selectRectForMultipleXs(this)}).on("mouseout",function(){!e.config||e.hasArcType()||e.unselectRect()}),n},clickHandlerForMultipleXS:function clickHandlerForMultipleXS(t){var e=t,n=e.config,i=e.filterTargetsToShow(e.data.targets);if(!e.hasArcType(i)){var a=Object(z.mouse)(this),r=e.findClosestFromTargets(i,a);!r||(e.isBarType(r.id)||e.dist(r,a)<n.point_sensitivity)&&e.main.selectAll(".".concat(B.shapes).concat(e.getTargetSelectorSuffix(r.id))).selectAll(".".concat(B.shape,"-").concat(r.index)).each(function(){(n.data_selection_grouped||e.isWithinShape(this,r))&&(e.toggleShape(this,r,r.index),n.data_onclick.call(e.api,r,this))})}},dispatchEvent:function dispatchEvent(t,e,n){var i=".".concat(this.isMultipleX()?B.eventRect:"".concat(B.eventRect,"-").concat(e)),a=this.main.select(i).node(),r=a.getBoundingClientRect(),o=r.width,s=r.left,c=r.top,l=s+(n?n[0]:0)+o/2,u=c+(n?n[1]:0);H[/^(mouse|click)/.test(t)?"mouse":"touch"](a,t,{screenX:l,screenY:u,clientX:l,clientY:u})}}),D(Q.prototype,{getCurrentWidth:function getCurrentWidth(){return this.config.size_width||this.getParentWidth()},getCurrentHeight:function getCurrentHeight(){var t=this.config,e=t.size_height||this.getParentHeight();return 0<e?e:320/(this.hasType("gauge")&&!t.gauge_fullCircle?2:1)},getAxisSize:function getAxisSize(t){var e=this.config.axis_rotated;return e&&"x"===t||!e&&/y2?/.test(t)?this.getAxisWidthByAxisId(t,!0):this.getHorizontalAxisHeight(t)},getCurrentPaddingTop:function getCurrentPaddingTop(){var t=this,e=t.config,n=e.axis_y2_axes.length,i=k(e.padding_top)?e.padding_top:0;return t.title&&t.title.node()&&(i+=t.getTitlePadding()),n&&e.axis_rotated&&(i+=t.getHorizontalAxisHeight("y2")*n),i},getCurrentPaddingBottom:function getCurrentPaddingBottom(){var t=this.config,e=t.axis_rotated?"y":"x",n=t["axis_".concat(e,"_axes")].length;return(k(t.padding_bottom)?t.padding_bottom:0)+(n?this.getHorizontalAxisHeight(e)*n:0)},getCurrentPaddingLeft:function getCurrentPaddingLeft(t){var e=this.config,n=e.axis_rotated,i=n?"x":"y",a=e["axis_".concat(i,"_axes")].length,r=this.getAxisWidthByAxisId(i,t);return(k(e.padding_left)?e.padding_left:n?e.axis_x_show?Math.max(p(r),40):1:!e.axis_y_show||e.axis_y_inner?this.axis.getYAxisLabelPosition().isOuter?30:1:p(r))+r*a},getCurrentPaddingRight:function getCurrentPaddingRight(){var t=this,e=t.config,n=t.isLegendRight?t.getLegendWidth()+20:0,i=e.axis_y2_axes.length,a=t.getAxisWidthByAxisId("y2");return(k(e.padding_right)?e.padding_right+1:e.axis_rotated?10+n:!e.axis_y2_show||e.axis_y2_inner?2+n+(t.axis.getY2AxisLabelPosition().isOuter?20:0):p(a)+n)+a*i},getParentRectValue:function getParentRectValue(t){for(var e,n="offset".concat(O(t)),i=this.selectChart.node();!e&&i&&"BODY"!==i.tagName;){try{e=i.getBoundingClientRect()[t]}catch(r){n in i&&(e=i[n])}i=i.parentNode}if("width"===t){var a=document.body.offsetWidth;a<e&&(e=a)}return e},getParentWidth:function getParentWidth(){return this.getParentRectValue("width")},getParentHeight:function getParentHeight(){var t=this.selectChart.style("height");return 0<t.indexOf("px")?+t.replace("px",""):0},getSvgLeft:function getSvgLeft(t){var e=this,n=e.config,i=n.axis_rotated||!n.axis_rotated&&!n.axis_y_inner,a=n.axis_rotated?B.axisX:B.axisY,r=e.main.select(".".concat(a)).node(),o=r&&i?r.getBoundingClientRect():{right:0},s=e.selectChart.node().getBoundingClientRect(),c=e.hasArcType(),l=o.right-s.left-(c?0:e.getCurrentPaddingLeft(t));return 0<l?l:0},getAxisWidthByAxisId:function getAxisWidthByAxisId(t,e){var n=this.axis.getLabelPositionById(t);return this.axis.getMaxTickWidth(t,e)+(n.isInner?20:40)},getHorizontalAxisHeight:function getHorizontalAxisHeight(t){var e=this,n=e.config,i=30;return"x"!==t||n.axis_x_show?"x"===t&&n.axis_x_height?n.axis_x_height:"y"!==t||n.axis_y_show?"y2"!==t||n.axis_y2_show?("x"===t&&!n.axis_rotated&&n.axis_x_tick_rotate&&(i=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-n.axis_x_tick_rotate)/180)),"y"===t&&n.axis_rotated&&n.axis_y_tick_rotate&&(i=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-n.axis_y_tick_rotate)/180)),i+(e.axis.getLabelPositionById(t).isInner?0:10)+("y2"!==t||n.axis_rotated?0:-10)):e.rotated_padding_top:!n.legend_show||e.isLegendRight||e.isLegendInset?1:10:8},getEventRectWidth:function getEventRectWidth(){return Math.max(0,this.xAxis.tickInterval())}});var rt=n(21);D(Q.prototype,{getShapeIndices:function getShapeIndices(t){var r=this.config,o={},s=0;return this.filterTargetsToShow(this.data.targets.filter(t,this)).forEach(function(t){for(var e,n=0;e=r.data_groups[n];n++)if(!(e.indexOf(t.id)<0))for(var i,a=0;i=e[a];a++)if(i in o){o[t.id]=o[i];break}R(o[t.id])&&(o[t.id]=s++)}),o.__max__=s-1,o},getShapeX:function getShapeX(i,a,r,t){var o=t?this.subX:this.zoomScale||this.x,s=this.config.bar_padding;return function(t){var e=t.id in r?r[t.id]:0,n=t.x||0===t.x?o(t.x)-i*(a/2-e):0;return i&&n&&1<a&&s&&(e&&(n+=s*e),2<a?n-=(a-1)*s/2:2===a&&(n-=s/2)),n}},getShapeY:function getShapeY(e){var n=this,i=n.isStackNormalized();return function(t){return(e?n.getSubYScale(t.id):n.getYScale(t.id))(i?n.getRatio("index",t,!0):t.value)}},getShapeOffset:function getShapeOffset(t,c,e){var l=this,n=l.orderTargets(l.filterTargetsToShow(l.data.targets.filter(t,l))),u=n.map(function(t){return t.id});return function(i,t){var a=e?l.getSubYScale(i.id):l.getYScale(i.id),r=a(0),o=r,s=t;return n.forEach(function(t){var e=l.isStepType(i)?l.convertValuesToStep(t.values):t.values,n=e.map(function(t){return l.isStackNormalized()?l.getRatio("index",t,!0):t.value});t.id===i.id||c[t.id]!==c[i.id]||u.indexOf(t.id)<u.indexOf(i.id)&&((R(e[s])||+e[s].x!=+i.x)&&(s=-1,e.forEach(function(t,e){(t.x.constructor===Date?+t.x:t.x)===(i.x.constructor===Date?+i.x:i.x)&&(s=e)})),s in e&&0<=e[s].value*i.value&&(o+=a(n[s])-r))}),o}},isWithinShape:function isWithinShape(t,e){var n,i=this,a=Object(z.select)(t);return i.isTargetToShow(e.id)?i.hasValidPointType(t.nodeName)?n=i.isStepType(e)?i.isWithinStep(t,i.getYScale(e.id)(e.value)):i.isWithinCircle(t,1.5*i.pointSelectR(e)):"path"===t.nodeName&&(n=!a.classed(B.bar)||i.isWithinBar(t)):n=!1,n},getInterpolate:function getInterpolate(t){var e=this.getInterpolateType(t);return{basis:rt.curveBasis,"basis-closed":rt.curveBasisClosed,"basis-open":rt.curveBasisOpen,bundle:rt.curveBundle,cardinal:rt.curveCardinal,"cardinal-closed":rt.curveCardinalClosed,"cardinal-open":rt.curveCardinalOpen,"catmull-rom":rt.curveCatmullRom,"catmull-rom-closed":rt.curveCatmullRomClosed,"catmull-rom-open":rt.curveCatmullRomOpen,"monotone-x":rt.curveMonotoneX,"monotone-y":rt.curveMonotoneY,natural:rt.curveNatural,"linear-closed":rt.curveLinearClosed,linear:rt.curveLinear,step:rt.curveStep,"step-after":rt.curveStepAfter,"step-before":rt.curveStepBefore}[e]},getInterpolateType:function getInterpolateType(t){var e=this,n=e.config.spline_interpolation_type,i=e.isInterpolationType(n)?n:"cardinal";return e.isSplineType(t)?i:e.isStepType(t)?e.config.line_step_type:"linear"}});var ot=n(22);D(Q.prototype,{initPie:function initPie(){var t=this.config,e=t.pie_padding,n=this.hasType("pie")&&e?.01*e:t["".concat(t.data_type,"_padAngle")]?t["".concat(t.data_type,"_padAngle")]:0;this.pie=Object(rt.pie)().padAngle(n).value(function(t){return t.values.reduce(function(t,e){return t+e.value},0)}),t.data_order||this.pie.sort(null)},updateRadius:function updateRadius(){var t=this,e=t.config,n=e.pie_innerRadius,i=e.pie_padding,a=e.gauge_width||e.donut_width;t.radiusExpanded=Math.min(t.arcWidth,t.arcHeight)/2,t.radius=.95*t.radiusExpanded,t.innerRadiusRatio=a?(t.radius-a)/t.radius:.6;var r=n||(i?i*(t.innerRadiusRatio+.1):0);t.innerRadius=t.hasType("donut")||t.hasType("gauge")?t.radius*t.innerRadiusRatio:r},updateArc:function updateArc(){var t=this;t.svgArc=t.getSvgArc(),t.svgArcExpanded=t.getSvgArcExpanded(),t.svgArcExpandedSub=t.getSvgArcExpanded(.98)},updateAngle:function updateAngle(t){var e,n,i,a,r=this,o=r.config,s=t,c=!1,l=0;return o?(r.pie(r.filterTargetsToShow(r.data.targets)).forEach(function(t){c||t.data.id!==s.data.id||(c=!0,(s=t).index=l),l++}),isNaN(s.startAngle)&&(s.startAngle=0),isNaN(s.endAngle)&&(s.endAngle=s.startAngle),r.isGaugeType(s.data)&&(e=o.gauge_min,n=o.gauge_max,i=Math.PI*(o.gauge_fullCircle?2:1)/(n-e),a=s.value<e?0:s.value<n?s.value-e:n-e,s.startAngle=o.gauge_startingAngle,s.endAngle=s.startAngle+i*a),c?s:null):null},getSvgArc:function getSvgArc(){var a=this,r=Object(rt.arc)().outerRadius(a.radius).innerRadius(a.innerRadius),t=function(t,e){var n="M 0 0";if("value"in t?0<t.value:t.data){var i=!e&&a.updateAngle(t);e?n=r(t):i&&(n=r(i))}return n};return t.centroid=r.centroid,t},getSvgArcExpanded:function getSvgArcExpanded(t){var n=this,i=Object(rt.arc)().outerRadius(n.radiusExpanded*(t||1)).innerRadius(n.innerRadius);return function(t){var e=n.updateAngle(t);return e?i(e):"M 0 0"}},getArc:function getArc(t,e,n){return n||this.isArcType(t.data)?this.svgArc(t,e):"M 0 0"},transformForArcLabel:function transformForArcLabel(t){var e=this,n=e.config,i=e.updateAngle(t),a="";if(i&&!e.hasType("gauge")){var r=this.svgArc.centroid(i),o=isNaN(r[0])?0:r[0],s=isNaN(r[1])?0:r[1],c=Math.sqrt(o*o+s*s),l=e.hasType("donut")&&n.donut_label_ratio||e.hasType("pie")&&n.pie_label_ratio;l=l?C(l)?l(t,e.radius,c):l:e.radius&&(c?(.375<36/e.radius?1.175-36/e.radius:.8)*e.radius/c:0),a="translate(".concat(o*l,",").concat(s*l,")")}return a},convertToArcData:function convertToArcData(t){return this.addName({id:t.data.id,value:t.value,ratio:this.getRatio("arc",t),index:t.index})},textForArcLabel:function textForArcLabel(n){var t=this,e=n.node?n.datum():n;if(!t.shouldShowArcLabel())return"";var i=t.updateAngle(e),a=i?i.value:null,r=t.getRatio("arc",i),o=e.data.id;if(!t.hasType("gauge")&&!t.meetsArcLabelThreshold(r))return"";var s=(t.getArcLabelFormat()||t.defaultArcValueFormat)(a,r,o).toString();if(n.node)if(-1===s.indexOf("\n"))n.text(s);else{var c=s.split("\n"),l=c.length-1;c.forEach(function(t,e){n.append("tspan").attr("x",0).attr("dy","".concat(0===e?-l:1,"em")).text(t)})}return s},textForGaugeMinMax:function textForGaugeMinMax(t,e){var n=this.getGaugeLabelExtents();return n?n(t,e):t},expandArc:function expandArc(t){var n=this;if(n.transiting)var e=setInterval(function(){n.transiting||(clearInterval(e),0<n.legend.selectAll(".".concat(B.legendItemFocused)).size()&&n.expandArc(t))},10);else{var i=n.mapToTargetIds(t);n.svg.selectAll(n.selectorTargets(i,".".concat(B.chartArc))).each(function(t){if(n.shouldExpand(t.data.id)&&0!==t.value){var e=n.expandDuration(t.data.id);Object(z.select)(this).selectAll("path").transition().duration(e).attr("d",n.svgArcExpanded).transition().duration(2*e).attr("d",n.svgArcExpandedSub)}})}},unexpandArc:function unexpandArc(t){var e=this;if(!e.transiting){var n=e.mapToTargetIds(t);e.svg.selectAll(e.selectorTargets(n,".".concat(B.chartArc))).selectAll("path").transition().duration(function(t){return e.expandDuration(t.data.id)}).attr("d",e.svgArc),e.svg.selectAll("".concat(B.arc)).style("opacity","1")}},expandDuration:function expandDuration(t){var e,n=this.config;return this.isDonutType(t)?e="donut":this.isGaugeType(t)?e="gauge":this.isPieType(t)&&(e="pie"),e?n["".concat(e,"_expand_duration")]:50},shouldExpand:function shouldExpand(t){var e=this.config;return this.isDonutType(t)&&e.donut_expand||this.isGaugeType(t)&&e.gauge_expand||this.isPieType(t)&&e.pie_expand},shouldShowArcLabel:function shouldShowArcLabel(){var t=this.config,e=!0;return this.hasType("donut")?e=t.donut_label_show:this.hasType("pie")&&(e=t.pie_label_show),e},meetsArcLabelThreshold:function meetsArcLabelThreshold(t){var e=this.config;return(this.hasType("donut")?e.donut_label_threshold:e.pie_label_threshold)<=t},getArcLabelFormat:function getArcLabelFormat(){var t=this.config,e=t.pie_label_format;return this.hasType("gauge")?e=t.gauge_label_format:this.hasType("donut")&&(e=t.donut_label_format),e},getGaugeLabelExtents:function getGaugeLabelExtents(){return this.config.gauge_label_extents},getArcTitle:function getArcTitle(){return this.hasType("donut")?this.config.donut_title:""},updateTargetsForArc:function updateTargetsForArc(t){var e=this,n=e.main,i=e.classChartArc.bind(e),a=e.classArcs.bind(e),r=e.classFocus.bind(e),o=n.select(".".concat(B.chartArcs)).selectAll(".".concat(B.chartArc)).data(e.pie(t)).attr("class",function(t){return i(t)+r(t.data)}),s=o.enter().append("g").attr("class",i);s.append("g").attr("class",a).merge(o),s.append("text").attr("dy",e.hasType("gauge")?"-.1em":".35em").style("opacity","0").style("text-anchor","middle").style("pointer-events","none")},initArc:function initArc(){this.arcs=this.main.select(".".concat(B.chart)).append("g").attr("class",B.chartArcs).attr("transform",this.getTranslate("arc")),this.setArcTitle()},setArcTitle:function setArcTitle(){var t=this.getArcTitle();if(t){var e=t.split("\n"),n=this.arcs.append("text").attr("class",B.chartArcsTitle).style("text-anchor","middle");if(1<e.length){var i=+n.style("font-size").replace("px",""),a=Math.floor(n.text(".").node().getBBox().height,n.text(""));e.forEach(function(t,e){return n.insert("tspan").text(t).attr("x",0).attr("dy",e?a:0)}),n.attr("y","-".concat(i*(e.length-2)||i/2))}else n.text(t)}},redrawArc:function redrawArc(t,e,n){var a=this,i=a.config,r=a.main,o=i.interaction_enabled,s=r.selectAll(".".concat(B.arcs)).selectAll(".".concat(B.arc)).data(a.arcData.bind(a));s.exit().transition().duration(e).style("opacity","0").remove(),(s=s.enter().append("path").attr("class",a.classArc.bind(a)).style("fill",function(t){return a.color(t.data)}).style("cursor",function(t){return o&&(i.data_selection_isselectable(t)?"pointer":null)}).style("opacity","0").each(function(t){a.isGaugeType(t.data)&&(t.startAngle=i.gauge_startingAngle,t.endAngle=i.gauge_startingAngle),this._current=t}).merge(s)).attr("transform",function(t){return!a.isGaugeType(t.data)&&n?"scale(0)":""}).style("opacity",function(t){return t===this._current?"0":"1"}).each(function(){a.transiting=!0}).transition().duration(t).attrTween("d",function(n){var t=a.updateAngle(n);if(!t)return function(){return"M 0 0"};isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle);var i=Object(ot.interpolate)(this._current,t);return this._current=i(0),function(t){var e=i(t);return e.data=n.data,a.getArc(e,!0)}}).attr("transform",n?"scale(1)":"").style("fill",function(t){return a.levelColor?a.levelColor(t.data.values[0].value):a.color(t.data.id)}).style("opacity","1").call(a.endall,function(){a.transiting=!1}),o&&a.bindArcEvent(s),a.redrawArcText(t)},bindArcEvent:function bindArcEvent(t){function selectArc(t,e,n){a.expandArc(n),a.api.focus(n),a.toggleFocusLegend(n,!0),a.showTooltip([e],t)}function unselectArc(t){var e=t&&t.id||undefined;a.unexpandArc(e),a.api.revert(),a.revertLegend(),a.hideTooltip()}var a=this,e="touch"===a.inputType,n="mouse"===a.inputType;if(t.on("click",function(t,e){var n,i=a.updateAngle(t);i&&(n=a.convertToArcData(i),a.toggleShape&&a.toggleShape(this,n,e),a.config.data_onclick.call(a.api,n,this))}),n&&t.on("mouseover",function(t){if(!a.transiting){var e=a.updateAngle(t),n=e?a.convertToArcData(e):null;selectArc(this,n,n&&n.id||undefined),a.config.data_onover(n,this)}}).on("mouseout",function(t){if(!a.transiting){var e=a.updateAngle(t),n=e?a.convertToArcData(e):null;unselectArc(),a.config.data_onout(n,this)}}).on("mousemove",function(t){var e=a.updateAngle(t),n=e?a.convertToArcData(e):null;a.showTooltip([n],this)}),e&&a.hasArcType()){var r=function(){var t=z.event.changedTouches[0];return Object(z.select)(document.elementFromPoint(t.clientX,t.clientY))};a.svg.on("touchstart",function(){if(!a.transiting){var t=r().datum(),e=t&&t.data&&t.data.id?a.updateAngle(t):null,n=e?a.convertToArcData(e):null,i=n&&n.id||undefined;i===undefined?unselectArc():selectArc(this,n,i),a.config.data_onover(n,this)}}).on("touchend",function(){if(!a.transiting){var t=r().datum(),e=t&&t.data&&t.data.id?a.updateAngle(t):null,n=e?a.convertToArcData(e):null,i=n&&n.id||undefined;i===undefined?unselectArc():selectArc(this,n,i),a.config.data_onout(n,this)}}).on("touchmove",function(){var t=r().datum(),e=t&&t.data&&t.data.id?a.updateAngle(t):null,n=e?a.convertToArcData(e):null,i=n&&n.id||undefined;i===undefined?unselectArc():selectArc(this,n,i)})}},redrawArcText:function redrawArcText(t){var e=this,n=e.config,i=e.main,a=i.selectAll(".".concat(B.chartArc)).select("text").style("opacity","0").attr("class",function(t){return e.isGaugeType(t.data)?B.gaugeValue:""});n.gauge_fullCircle&&a.attr("dy","".concat(Math.round(e.radius/14)));var r=!a.empty()&&a.classed(B.gaugeValue)?"call":"text";if(a[r](e.textForArcLabel.bind(e)).attr("transform",e.transformForArcLabel.bind(e)).style("font-size",function(t){return e.isGaugeType(t.data)?"".concat(Math.round(e.radius/5),"px"):""}).transition().duration(t).style("opacity",function(t){return e.isTargetToShow(t.data.id)&&e.isArcType(t.data)?"1":"0"}),i.select(".".concat(B.chartArcsTitle)).style("opacity",e.hasType("donut")||e.hasType("gauge")?"1":"0"),e.hasType("gauge")){var o=(n.gauge_fullCircle?-4:-1)*n.gauge_startingAngle;e.arcs.select(".".concat(B.chartArcsBackground)).attr("d",function(){var t={data:[{value:n.gauge_max}],startAngle:n.gauge_startingAngle,endAngle:o};return e.getArc(t,!0,!0)}),e.arcs.select(".".concat(B.chartArcsGaugeUnit)).attr("dy",".75em").text(n.gauge_label_show?n.gauge_units:""),n.gauge_label_show&&(e.arcs.select(".".concat(B.chartArcsGaugeMin)).attr("dx","".concat(-1*(e.innerRadius+(e.radius-e.innerRadius)/(n.gauge_fullCircle?1:2)),"px")).attr("dy","1.2em").text(e.textForGaugeMinMax(n.gauge_min,!1)),!n.gauge_fullCircle&&e.arcs.select(".".concat(B.chartArcsGaugeMax)).attr("dx","".concat(e.innerRadius+(e.radius-e.innerRadius)/2,"px")).attr("dy","1.2em").text(e.textForGaugeMinMax(n.gauge_max,!0)))}},initGauge:function initGauge(){var t=this.config,e=this.arcs;this.hasType("gauge")&&(e.append("path").attr("class",B.chartArcsBackground),e.append("text").attr("class",B.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),t.gauge_label_show&&(e.append("text").attr("class",B.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),!t.gauge_fullCircle&&e.append("text").attr("class",B.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none")))},getGaugeLabelHeight:function getGaugeLabelHeight(){return this.config.gauge_label_show?20:0}}),D(Q.prototype,{initBar:function initBar(){this.main.select(".".concat(B.chart)).append("g").attr("class",B.chartBars)},updateTargetsForBar:function updateTargetsForBar(t){var e=this,n=e.config,i=e.classChartBar.bind(e),a=e.classBars.bind(e),r=e.classFocus.bind(e);e.main.select(".".concat(B.chartBars)).selectAll(".".concat(B.chartBar)).data(t).attr("class",function(t){return i(t)+r(t)}).enter().append("g").attr("class",i).style("opacity","0").style("pointer-events","none").append("g").attr("class",a).style("cursor",function(t){return n.data_selection_isselectable(t)?"pointer":null})},updateBar:function updateBar(t){var e=this,n=e.barData.bind(e),i=e.classBar.bind(e),a=e.initialOpacity.bind(e),r=function(t){return e.color(t.id)};e.mainBar=e.main.selectAll(".".concat(B.bars)).selectAll(".".concat(B.bar)).data(n),e.mainBar.exit().transition().duration(t).style("opacity","0").remove(),e.mainBar=e.mainBar.enter().append("path").attr("class",i).style("stroke",r).style("fill",r).merge(e.mainBar).style("opacity",a)},redrawBar:function redrawBar(t,e){return[(e?this.mainBar.transition(L()):this.mainBar).attr("d",t).style("fill",this.color).style("opacity","1")]},getBarW:function getBarW(t,e){var n=this.config,i=I(n.bar_width)?n.bar_width:e?t.tickInterval(this.getMaxDataCount())*n.bar_width_ratio/e:0;return n.bar_width_max&&i>n.bar_width_max?n.bar_width_max:i},getBars:function getBars(t,e){var n=k(t)?"-".concat(t):"";return(e?this.main.selectAll(".".concat(B.bars).concat(this.getTargetSelectorSuffix(e))):this.main).selectAll(".".concat(B.bar).concat(n))},expandBars:function expandBars(t,e,n){n&&this.unexpandBars(),this.getBars(t,e).classed(B.EXPANDED,!0)},unexpandBars:function unexpandBars(t){this.getBars(t).classed(B.EXPANDED,!1)},generateDrawBar:function generateDrawBar(t,e){var n=this.config,g=this.generateGetBarPoints(t,e),h=n.axis_rotated,f=n.data_groups.length,i=n.bar_radius,a=n.bar_radius_ratio,p=I(i)&&0<i?function(){return i}:I(a)?function(t){return t*a}:null;return function(t,e){var n=g(t,e),i=+h,a=+!i,r=t.value<0,o=["",""],s=0;if(p&&!f){var c=h?a:i,l=n[2][c]-n[0][c];s=p(l);var u="a".concat(s,",").concat(s," ").concat(r?"1 0 0":"0 0 1"," ");o[+!h]="".concat(u).concat(s,",").concat(s),o[+h]="".concat(u).concat([-s,s][h?"sort":"reverse"]()),r&&o.reverse()}var d=h?"H".concat(n[1][i]-s," ").concat(o[0],"V").concat(n[2][a]-s," ").concat(o[1],"H").concat(n[3][i]):"V".concat(n[1][a]+(r?-s:s)," ").concat(o[0],"H").concat(n[2][i]-s," ").concat(o[1],"V").concat(n[3][a]);return"M".concat(n[0][i],",").concat(n[0][a]).concat(d,"z")}},generateGetBarPoints:function generateGetBarPoints(t,e){var o=this,n=e?o.subXAxis:o.xAxis,i=t.__max__+1,s=o.getBarW(n,i),c=o.getShapeX(s,i,t,!!e),l=o.getShapeY(!!e),u=o.getShapeOffset(o.isBarType,t,!!e),d=e?o.getSubYScale:o.getYScale;return function(t,e){var n=d.call(o,t.id)(0),i=u(t,e)||n,a=c(t),r=l(t);return o.config.axis_rotated&&(0<t.value&&r<n||t.value<0&&n<r)&&(r=n),[[a,i],[a,r-=n-i],[a+s,r],[a+s,i]]}},isWithinBar:function isWithinBar(t){var e=Object(z.mouse)(t),n=A(t),i=S()(n,2),a=i[0],r=i[1],o=Math.min(a.x,r.x),s=Math.min(a.y,r.y),c=t.getBBox(),l=c.width,u=c.height;return o-2<e[0]&&e[0]<o+l+2&&s-2<e[1]&&e[1]<s+u+2}}),D(Q.prototype,{initBubble:function initBubble(){var t=this.config;this.hasType("bubble")&&(t.point_show=!0,t.point_type="circle",t.point_sensitivity=25)},getBaseLength:function getBaseLength(){var t="$baseLength",e=this.getCache(t);return e||this.addCache(t,e=Object(m.min)([this.axes.x.select("path").node().getTotalLength(),this.axes.y.select("path").node().getTotalLength()])),e},getBubbleR:function getBubbleR(t){var e=this.config.bubble_maxR;C(e)?e=e(t):!I(e)&&(e=this.getBaseLength()/(2*this.getMaxDataCount())+12);var n=Object(m.max)(this.getMinMaxData().max.map(function(t){return b(t.value)?t.value.mid:t.value})),i=e*e*Math.PI,a=t.value*(i/n);return Math.sqrt(a/Math.PI)}}),D(Q.prototype,{initLine:function initLine(){this.main.select(".".concat(B.chart)).append("g").attr("class",B.chartLines)},updateTargetsForLine:function updateTargetsForLine(t){var n=this,e=n.config,i=n.classChartLine.bind(n),a=n.classLines.bind(n),r=n.classAreas.bind(n),o=n.classCircles.bind(n),s=n.classFocus.bind(n),c=n.main.select(".".concat(B.chartLines)).selectAll(".".concat(B.chartLine)).data(t).attr("class",function(t){return i(t)+s(t)}).enter().append("g").attr("class",i).style("opacity","0").style("pointer-events","none");c.append("g").attr("class",a),c.append("g").attr("class",r),e.point_show&&(e.data_selection_enabled&&c.append("g").attr("class",function(t){return n.generateClass(B.selectedCircles,t.id)}),c.append("g").attr("class",o).style("cursor",function(t){return e.data_selection_isselectable(t)?"pointer":null})),t.forEach(function(e){n.main.selectAll(".".concat(B.selectedCircles).concat(n.getTargetSelectorSuffix(e.id))).selectAll("".concat(B.selectedCircle)).each(function(t){t.value=e.values[t.index].value})})},updateLine:function updateLine(t){var e=this;e.mainLine=e.main.selectAll(".".concat(B.lines)).selectAll(".".concat(B.line)).data(e.lineData.bind(e)),e.mainLine.exit().transition().duration(t).style("opacity","0").remove(),e.mainLine=e.mainLine.enter().append("path").attr("class",function(t){return"".concat(e.classLine.bind(e)(t)," ").concat(e.extraLineClasses(t)||"")}).style("stroke",e.color).merge(e.mainLine).style("opacity",e.initialOpacity.bind(e)).style("shape-rendering",function(t){return e.isStepType(t)?"crispEdges":""}).attr("transform",null)},redrawLine:function redrawLine(t,e){return[(e?this.mainLine.transition(L()):this.mainLine).attr("d",t).style("stroke",this.color).style("opacity","1")]},getCurve:function getCurve(n){var i=this;return i.config.axis_rotated&&i.isStepType(n)?function(t){var e=i.getInterpolate(n)(t);return e.orgPoint=e.point,e.pointRotated=function(t,e){1===this._point&&(this._point=2);var n=this._y*(1-this._t)+e*this._t;this._context.lineTo(this._x,n),this._context.lineTo(t,n),this._x=t,this._y=e},e.point=function(t,e){0===this._point?this.orgPoint(t,e):this.pointRotated(t,e)},e}:i.getInterpolate(n)},generateDrawLine:function generateDrawLine(t,o){var s=this,c=s.config,l=c.line_connectNull,u=c.axis_rotated,n=s.generateGetLinePoints(t,o),d=o?s.getSubYScale:s.getYScale,e=function(t){return(o?s.subxx:s.xx).call(s,t)},i=function(t,e){return s.isGrouped(t.id)?n(t,e)[0][1]:d.call(s,t.id)(s.getBaseValue(t))},g=Object(rt.line)();return g=u?g.x(i).y(e):g.x(e).y(i),l||(g=g.defined(function(t){return null!==s.getBaseValue(t)})),function(t){var e=o?s.x:s.subX,n=d.call(s,t.id),i=l?s.filterRemoveNull(t.values):t.values,a=0,r=0;return(s.isLineType(t)?c.data_regions[t.id]?s.lineWithRegions(i,e,n,c.data_regions[t.id]):(s.isStepType(t)&&(i=s.convertValuesToStep(i)),g.curve(s.getCurve(t))(i)):(i[0]&&(a=e(i[0].x),r=n(i[0].value)),u?"M ".concat(r," ").concat(a):"M ".concat(a," ").concat(r)))||"M 0 0"}},generateGetLinePoints:function generateGetLinePoints(t,e){var s=this,c=s.config,n=t.__max__+1,i=!!e,l=s.getShapeX(0,n,t,i),u=s.getShapeY(i),d=s.getShapeOffset(s.isLineType,t,i),g=i?s.getSubYScale:s.getYScale;return function(t,e){var n=g.call(s,t.id)(0),i=d(t,e)||n,a=l(t),r=u(t);c.axis_rotated&&(0<t.value&&r<n||t.value<0&&n<r)&&(r=n);var o=[a,r-(n-i)];return[o,o,o,o]}},lineWithRegions:function lineWithRegions(t,l,u,e){var r,d,g,n,i=this,h=i.config.axis_rotated,a=i.isTimeSeries(),o=i.isCategorized()?.5:0,s=[],c=function(t,e){for(var n,i=0;n=e[i];i++)if(n.start<t&&t<=n.end)return n.style;return!1};if(P(e))for(var f,p=function(t,e){return R(t)?e:a?i.parseDate(t):t},x=0;f=e[x];x++){var m=p(f.start,t[0].x),v=p(f.end,t[t.length-1].x),_=f.style||{dasharray:"2 2"};s[x]={start:m,end:v,style:_}}for(var y,b=h?function(t){return u(t.value)}:function(t){return l(t.x)},T=h?function(t){return l(t.x)}:function(t){return u(t.value)},A=function(t){return"M".concat(t[0][0],",").concat(t[0][1],"L").concat(t[1][0],",").concat(t[1][1])},w=a?function(t,e,n,i){var a=t.x.getTime(),r=e.x-t.x,o=new Date(a+r*n),s=new Date(a+r*(n+i)),c=h?[[u(d(n)),l(o)],[u(d(n+g)),l(s)]]:[[l(o),u(d(n))],[l(s),u(d(n+g))]];return A(c)}:function(t,e,n,i){var a=h?[[u(d(n),!0),l(r(n))],[u(d(n+i),!0),l(r(n+i))]]:[[l(r(n),!0),u(d(n))],[l(r(n+i),!0),u(d(n+i))]];return A(a)},L="M",S=0;y=t[S];S++){var k=t[S-1];_=c(y.x,s);if(R(s)||!_)L+="".concat(S?"L":"").concat(b(y),",").concat(T(y));else{try{_=_.dasharray.split(" ")}catch(O){_="2 2".split(" ")}r=i.getScale(k.x+o,y.x+o,a),d=i.getScale(k.value,y.value);var C=l(y.x)-l(k.x),X=u(y.value)-u(k.value),F=Math.sqrt(Math.pow(C,2)+Math.pow(X,2));n=(g=_[0]/F)*_[1];for(var D=g;D<=1;D+=n)L+=w(k,y,D,g),1<=D+n&&(L+=w(k,y,1,0))}}return L},updateArea:function updateArea(t){var e=this;e.mainArea=e.main.selectAll(".".concat(B.areas)).selectAll(".".concat(B.area)).data(e.lineData.bind(e)),e.mainArea.exit().transition().duration(t).style("opacity","0").remove(),e.mainArea=e.mainArea.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=Object(z.select)(this).style("opacity"),"0"}).merge(e.mainArea),e.mainArea.style("opacity",e.orgAreaOpacity)},redrawArea:function redrawArea(t,e){var n=this;return[(e?this.mainArea.transition(L()):this.mainArea).attr("d",t).style("fill",this.color).style("opacity",function(t){return n.isAreaRangeType(t)?n.orgAreaOpacity/1.75:n.orgAreaOpacity})]},generateDrawArea:function generateDrawArea(t,e){var o=this,s=o.config,c=s.line_connectNull,l=s.axis_rotated,n=o.generateGetAreaPoints(t,e),i=e?o.getSubYScale:o.getYScale,u=function(t){return(e?o.subxx:o.xx).call(o,t)},d=function(t,e){return o.isGrouped(t.id)?n(t,e)[0][1]:i.call(o,t.id)(o.isAreaRangeType(t)?o.getAreaRangeData(t,"high"):o.getAreaBaseValue(t.id))},g=function(t,e){return o.isGrouped(t.id)?n(t,e)[1][1]:i.call(o,t.id)(o.isAreaRangeType(t)?o.getAreaRangeData(t,"low"):t.value)};return function(t){var e,n=c?o.filterRemoveNull(t.values):t.values,i=0,a=0;if(o.isAreaType(t)){var r=Object(rt.area)();r=l?r.y(u).x0(d).x1(g):r.x(u).y0(s.area_above?0:d).y1(g),c||(r=r.defined(function(t){return null!==o.getBaseValue(t)})),o.isStepType(t)&&(n=o.convertValuesToStep(n)),e=r.curve(o.getCurve(t))(n)}else n[0]&&(i=o.x(n[0].x),a=o.getYScale(t.id)(n[0].value)),e=l?"M ".concat(a," ").concat(i):"M ".concat(i," ").concat(a);return e||"M 0 0"}},getAreaBaseValue:function getAreaBaseValue(){return 0},generateGetAreaPoints:function generateGetAreaPoints(t,e){var o=this,s=o.config,n=t.__max__+1,c=o.getShapeX(0,n,t,!!e),l=o.getShapeY(!!e),u=o.getShapeOffset(o.isAreaType,t,!!e),d=e?o.getSubYScale:o.getYScale;return function(t,e){var n=d.call(o,t.id)(0),i=u(t,e)||n,a=c(t),r=l(t);return s.axis_rotated&&(0<t.value&&r<n||t.value<0&&n<r)&&(r=n),[[a,i],[a,r-(n-i)],[a,r-(n-i)],[a,i]]}},updateCircle:function updateCircle(){var e=this;e.config.point_show&&(e.mainCircle=e.main.selectAll(".".concat(B.circles)).selectAll(".".concat(B.circle)).data(function(t){return!e.isBarType(t)&&(!e.isLineType(t)||e.shouldDrawPointsForLine(t))&&e.labelishData(t)}),e.mainCircle.exit().remove(),e.mainCircle=e.mainCircle.enter().append(e.point("create",this,e.classCircle.bind(e),e.pointR.bind(e),e.color)).merge(e.mainCircle).style("stroke",e.color).style("opacity",e.initialOpacityForCircle.bind(e)))},redrawCircle:function redrawCircle(n,i,a,r){var o=this,s=o.main.selectAll(".".concat(B.selectedCircle));if(!o.config.point_show)return[];var c=[];o.mainCircle.each(function(t){var e=o.point("update",o,n,i,o.opacityForCircle.bind(o),o.color,a,r,s).bind(this)(t);c.push(e)});var t=o.isCirclePoint()?"c":"";return[c,s.attr("".concat(t,"x"),n).attr("".concat(t,"y"),i)]},circleX:function circleX(t){var e=k(t.x);return this.config.zoom_enabled&&this.zoomScale?e?this.zoomScale(t.x):null:e?this.x(t.x):null},updateCircleY:function updateCircleY(){var i=this;i.circleY=function(t,e){var n=t.id;return i.isGrouped(n)?i.generateGetLinePoints(i.getShapeIndices(i.isLineType))(t,e)[0][1]:i.getYScale(n)(i.getBaseValue(t))}},getCircles:function getCircles(t,e){var n=k(t)?"-".concat(t):"";return(e?this.main.selectAll(".".concat(B.circles).concat(this.getTargetSelectorSuffix(e))):this.main).selectAll(".".concat(B.circle).concat(n))},expandCircles:function expandCircles(t,e,n){var i=this,o=i.pointExpandedR.bind(i);n&&i.unexpandCircles();var a=i.getCircles(t,e).classed(B.EXPANDED,!0),s=o(a)/i.config.point_r,c=1-s;i.isCirclePoint()?a.attr("r",o):a.each(function(){var t=Object(z.select)(this);if("circle"===this.tagName)t.attr("r",o);else{var e=this.getBBox(),n=e.width,i=e.height,a=c*(+t.attr("x")+n/2),r=c*(+t.attr("y")+i/2);t.style("transform","translate(".concat(a,"px, ").concat(r,"px) scale(").concat(s,")"))}})},unexpandCircles:function unexpandCircles(t){var e=this,n=e.pointR.bind(e),i=e.getCircles(t).filter(function(){return Object(z.select)(this).classed(B.EXPANDED)}).classed(B.EXPANDED,!1);i.attr("r",n),e.isCirclePoint()||i.style("transform","scale(".concat(n(i)/e.config.point_r,")"))},pointR:function(t){var e=this.config.point_r,n=e;return this.isStepType(t)?n=0:this.isBubbleType(t)?n=this.getBubbleR(t):C(e)&&(n=e(t)),n},pointExpandedR:function pointExpandedR(t){var e=this.config,n=this.isBubbleType(t)?1.15:1.75;return e.point_focus_expand_enabled?e.point_focus_expand_r||this.pointR(t)*n:this.pointR(t)},pointSelectR:function pointSelectR(t){var e=this.config.point_select_r;return C(e)?e(t):e||4*this.pointR(t)},isWithinCircle:function isWithinCircle(t,e){var n=Object(z.mouse)(t),i=Object(z.select)(t),a=this.isCirclePoint()?"c":"",r=+i.attr("".concat(a,"x")),o=+i.attr("".concat(a,"y"));if(!r&&!o&&1===t.nodeType){var s=t.getBBox?t.getBBox():t.getBoundingClientRect();r=s.x,o=s.y}return Math.sqrt(Math.pow(r-n[0],2)+Math.pow(o-n[1],2))<e},isWithinStep:function isWithinStep(t,e){return Math.abs(e-Object(z.mouse)(t)[1])<30},shouldDrawPointsForLine:function shouldDrawPointsForLine(t){var e=this.config.line_point;return!0===e||j(e)&&-1!==e.indexOf(t.id)}}),D(Q.prototype,{hasValidPointType:function hasValidPointType(t){return/^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(t||this.config.point_type)},hasValidPointDrawMethods:function hasValidPointDrawMethods(t){var e=t||this.config.point_type;return _(e)&&C(e.create)&&C(e.update)},insertPointInfoDefs:function insertPointInfoDefs(t,e){var n=function(t,e){for(var n,i=t.attributes,a=0;n=i[a];a++)n=n.name,e.setAttribute(n,t.getAttribute(n))},i=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement,a=document.createElementNS(z.namespaces.svg,i.nodeName.toLowerCase());if(a.id=e,a.style.fill="inherit",a.style.stroke="inherit",n(i,a),i.childNodes&&i.childNodes.length){var r=Object(z.select)(a);"innerHTML"in a?r.html(i.innerHTML):N(i.childNodes).forEach(function(t){n(t,r.append(t.tagName).node())})}this.defs.node().appendChild(a)},pointFromDefs:function pointFromDefs(t){return this.defs.select("#".concat(t))},generatePoint:function generatePoint(){var c=this,t=c.config,l=[],u=Y(t.point_pattern)?t.point_pattern:[t.point_type];return function(r,o){for(var t=arguments.length,s=Array(2<t?t-2:0),e=2;e<t;e++)s[e-2]=arguments[e];return function(t){var e,n=t.id||t.data&&t.data.id||t,i=Object(z.select)(this);if(l.indexOf(n)<0&&l.push(n),e=u[l.indexOf(n)%u.length],c.hasValidPointType(e))e=c[e];else if(!c.hasValidPointDrawMethods(e)){var a="".concat(c.datetimeId,"-point-").concat(n);if(c.pointFromDefs(a).size()<1&&c.insertPointInfoDefs(e,a),"create"===r)return c.custom.create.bind(o).apply(void 0,[i,a].concat(s));if("update"===r)return c.custom.update.bind(o).apply(void 0,[i].concat(s))}return e[r].bind(o).apply(void 0,[i].concat(s))}}},getTransitionName:function getTransitionName(){return L()},custom:{create:function create(t,e,n,i,a){return t.append("use").attr("xlink:href","#".concat(e)).attr("class",n).style("fill",a).node()},update:function update(t,e,n,i,a,r,o,s){var c=t.node().getBBox(),l=c.width,u=c.height,d=function(t){return e(t)-l/2},g=function(t){return n(t)-u/2},h=t;if(r){var f=this.getTransitionName();o&&(h=t.attr("x",d)),h=t.transition(f).attr("x",d).attr("y",g).transition(f),s.transition(this.getTransitionName())}else h=t.attr("x",d).attr("y",g);return h.style("opacity",i).style("fill",a)}},circle:{create:function create(t,e,n,i){return t.append("circle").attr("class",e).attr("r",n).style("fill",i).node()},update:function update(t,e,n,i,a,r,o,s){var c=this,l=t;if(c.hasType("bubble")&&(l=l.attr("r",c.pointR.bind(c))),r){var u=c.getTransitionName();o&&(l=l.attr("cx",e)),l=t.attr("cx")?l.transition(u).attr("cx",e).attr("cy",n).transition(u):l.attr("cx",e).attr("cy",n),s.transition(c.getTransitionName())}else l=l.attr("cx",e).attr("cy",n);return l.style("opacity",i).style("fill",a)}},rectangle:{create:function create(t,e,n,i){var a=function(t){return 2*n(t)};return t.append("rect").attr("class",e).attr("width",a).attr("height",a).style("fill",i).node()},update:function update(t,e,n,i,a,r,o,s){var c=this.config.point_r,l=function(t){return e(t)-c},u=function(t){return n(t)-c},d=t;if(r){var g=this.getTransitionName();o&&(d=d.attr("x",l)),d=d.transition(g).attr("x",l).attr("y",u).transition(g),s.transition(this.getTransitionName())}else d=d.attr("x",l).attr("y",u);return d.style("opacity",i).style("fill",a)}}});var st="$radarPoints";D(Q.prototype,{initRadar:function initRadar(){var t=this,e=t.config;t.hasType("radar")&&(t.radars=t.main.select(".".concat(B.chart)).append("g").attr("class",B.chartRadars),t.radars.levels=t.radars.append("g").attr("class",B.levels),t.radars.axes=t.radars.append("g").attr("class",B.axis),t.radars.shapes=t.radars.append("g").attr("class",B.shapes),t.maxValue=e.radar_axis_max||t.getMinMaxData().max[0].value)},getRadarSize:function getRadarSize(){var t=this.config.axis_x_categories.length<4?-20:10,e=(Math.min(this.arcWidth,this.arcHeight)-t)/2;return[e,e]},updateTargetsForRadar:function updateTargetsForRadar(t){var e=this.config;y(e.axis_x_categories)&&(e.axis_x_categories=Object(m.range)(0,Object(m.max)(t).values.length)),this.generateRadarPoints()},getRadarPosition:function getRadarPosition(e,n,i,a){var r=this.config,t=this.getRadarSize(),o=S()(t,2),s=o[0],c=o[1],l=r.axis_x_categories.length,u=r.radar_direction_clockwise,d=N(e).map(function(t){return function getPosition(t,e,n,i,a,r){var o=t&&0<i?n-i:i,s=2*Math.PI;return a*(1-r*("x"===e?Math.sin:Math.cos)(o*s/n))}(u,t,l,n,P(i)?i:"x"===e?s:c,a||r.radar_size_ratio)});return 1===d.length?d[0]:d},generateRadarPoints:function generateRadarPoints(){var n=this,t=n.data.targets,e=n.getRadarSize(),i=S()(e,2),a=i[0],r=i[1],o=n.getCache(st)||{},s=o._size;s&&(s.width===a||s.height===r)||(t.forEach(function(t){o[t.id]=t.values.map(function(t,e){return n.getRadarPosition(["x","y"],e,undefined,n.getRatio("radar",t))})}),o._size={width:a,height:r},n.addCache(st,o))},redrawRadar:function redrawRadar(t,e){var n=this,i=n.getTranslate("radar");i&&(n.radars.attr("transform",i),n.main.selectAll(".".concat(B.circles)).attr("transform",i),n.main.select(".".concat(B.chartTexts)).attr("transform",i),n.generateRadarPoints(),n.updateRadarLevel(),n.updateRadarAxes(),n.updateRadarShape(t,e))},generateGetRadarPoints:function generateGetRadarPoints(){var i=this.getCache(st);return function(t,e){var n=i[t.id][e];return[n,n,n,n]}},updateRadarLevel:function updateRadarLevel(){var n=this,t=n.config,e=n.getRadarSize(),i=S()(e,2),a=i[0],r=i[1],o=t.radar_level_depth,s=t.axis_x_categories.length,c=t.radar_level_text_show,l=n.radars.levels,u=Object(m.range)(0,o),d=t.radar_size_ratio*Math.min(a,r),g=u.map(function(t){return d*((t+1)/o)}),h=t.radar_level_text_format,f=u.map(function(t){var e=g[t];return Object(m.range)(0,s).map(function(t){return n.getRadarPosition(["x","y"],t,e,1).join(",")}).join(" ")}),p=l.selectAll(".".concat(B.level)).data(u);p.exit().remove();var x=p.enter().append("g").attr("class",function(t,e){return"".concat(B.level," ").concat(B.level,"-").concat(e)});x.append("polygon").style("visibility",t.radar_level_show?null:"hidden"),c&&(l.select("text").empty()&&l.append("text").attr("dx","-.5em").attr("dy","-.7em").style("text-anchor","end").text(function(){return h(0)}),x.append("text").attr("dx","-.5em").style("text-anchor","end").text(function(t){return h(n.maxValue/u.length*(t+1))})),x.merge(p).attr("transform",function(t){return"translate(".concat(a-g[t],", ").concat(r-g[t],")")}).selectAll("polygon").attr("points",function(t){return f[t]}),c&&l.selectAll("text").attr("x",function(t){return R(t)?a:f[t].split(",")[0]}).attr("y",function(t){return R(t)?r:0})},updateRadarAxes:function updateRadarAxes(){var n=this,t=n.config,e=n.getRadarSize(),i=S()(e,2),a=i[0],r=i[1],o=t.axis_x_categories,s=n.radars.axes.selectAll("g").data(o);s.exit().remove();var c=s.enter().append("g").attr("class",function(t,e){return"".concat(B.axis,"-").concat(e)});t.radar_axis_line_show&&c.append("line"),t.radar_axis_text_show&&c.append("text"),s=c.merge(s),t.radar_axis_line_show&&s.select("line").attr("x1",a).attr("y1",r).attr("x2",function(t,e){return n.getRadarPosition("x",e)}).attr("y2",function(t,e){return n.getRadarPosition("y",e)}),t.radar_axis_text_show&&s.select("text").style("text-anchor","middle").attr("dy",".5em").text(function(t){return t}).datum(function(t,e){return{index:e}}).attr("x",function(t,e){return n.getRadarPosition("x",e,undefined,1)}).attr("y",function(t,e){return n.getRadarPosition("y",e,undefined,1)}),n.bindEvent()},bindEvent:function bindEvent(){var t=this,e=this;if(e.config.interaction_enabled){var n="mouse"===e.inputType;e.radars.select(".".concat(B.axis)).on("".concat(n?"mouseover ":"","click"),function(){if(!e.transiting){var t=Object(z.select)(z.event.target).datum().index;e.selectRectForSingle(e.svg.node(),null,t),e.setOver(t)}}).on("mouseout",n?function(){t.hideTooltip(),t.unexpandCircles()}:null)}},updateRadarShape:function updateRadarShape(t,e){var n=this,i=n.data.targets,a=n.getCache(st),r=n.radars.shapes.selectAll("polygon").data(i),o=r.enter().append("g").attr("class",n.classChartRadar.bind(n));r.exit().transition().duration(e).remove(),o.append("polygon").merge(r).transition().duration(t).style("fill",function(t){return n.color(t)}).style("stroke",function(t){return n.color(t)}).attr("points",function(t){return a[t.id].join(" ")})},radarCircleX:function radarCircleX(t){return this.getCache(st)[t.id][t.index][0]},radarCircleY:function radarCircleY(t){return this.getCache(st)[t.id][t.index][1]}}),D(Q.prototype,{initText:function initText(){this.main.select(".".concat(B.chart)).append("g").attr("class",B.chartTexts),this.mainText=Object(z.selectAll)([])},updateTargetsForText:function updateTargetsForText(t){var e=this,n=e.classChartText.bind(e),i=e.classTexts.bind(e),a=e.classFocus.bind(e);e.main.select(".".concat(B.chartTexts)).selectAll(".".concat(B.chartText)).data(t).attr("class",function(t){return n(t)+a(t)}).enter().append("g").attr("class",n).style("opacity","0").style("pointer-events","none").append("g").attr("class",i)},updateText:function updateText(t){var e=this,i=this,n=i.config,a=i.labelishData.bind(i),r=i.classText.bind(i);i.mainText=i.main.selectAll(".".concat(B.texts)).selectAll(".".concat(B.text)).data(function(t){return e.isRadarType(t)?t.values:a(t)}),i.mainText.exit().transition().duration(t).style("fill-opacity","0").remove(),i.mainText=i.mainText.enter().append("text").merge(i.mainText).attr("class",r).attr("text-anchor",function(t){return n.axis_rotated?t.value<0?"end":"start":"middle"}).style("stroke","none").style("fill",function(t){return i.color(t)}).style("fill-opacity","0").text(function(t,e,n){return i.dataLabelFormat(t.id)(t.value,t.id,e,n)})},redrawText:function redrawText(t,e,n,i){return[(i?this.mainText.transition():this.mainText).attr("x",t).attr("y",e).style("fill",this.color).style("fill-opacity",n?0:this.opacityForText.bind(this))]},getTextRect:function getTextRect(t,e,n){var i,a=(t.node?t.node():t).textContent,r=n.node?n.node():n,o=Object(z.select)("body").append("div").classed("bb",!0),s=o.append("svg").style("visibility","hidden").style("position","fixed").style("top","0px").style("left","0px"),c=Object(z.select)(r).style("font");return s.selectAll(".dummy").data([a]).enter().append("text").classed(e,!!e).style("font",c).text(a).each(function(){i=this.getBoundingClientRect()}),o.remove(),i},generateXYForText:function generateXYForText(t,e,n,i){var a=this,r=a.generateGetAreaPoints(t,!1),o=a.generateGetBarPoints(e,!1),s=a.generateGetLinePoints(n,!1),c=a.generateGetRadarPoints(),l=i?a.getXForText:a.getYForText;return function(t,e){var n=a.isAreaType(t)&&r||a.isBarType(t)&&o||a.isRadarType(t)&&c||s;return l.call(a,n(t,e),t,this)}},getXForText:function getXForText(t,e,n){var i,a,r=this,o=r.config;return i=o.axis_rotated?(a=r.isBarType(e)?4:6,t[2][1]+a*(e.value<0?-1:1)):r.hasType("bar")?(t[2][0]+t[0][0])/2:t[0][0],null===e.value&&(i>r.width?i=r.width-n.getBoundingClientRect().width:i<0&&(i=4)),i+(o.data_labels_position.x||0)},getYForText:function getYForText(t,e,n){var i,a=this,r=a.config,o=r.point_r,s=3;if(r.axis_rotated)i=(t[0][0]+t[2][0]+.6*n.getBoundingClientRect().height)/2;else if(i=t[2][1],I(o)&&5<o&&(a.isLineType(e)||a.isScatterType(e))&&(s+=r.point_r/2.3),e.value<0||0===e.value&&!a.hasPositiveValue)i+=n.getBoundingClientRect().height,a.isBarType(e)&&a.isSafari()?i-=s:!a.isBarType(e)&&a.isChrome()&&(i+=s);else{var c=2*-s;a.isBarType(e)?c=-s:a.isBubbleType(e)&&(c=s),i+=c}if(null===e.value&&!r.axis_rotated){var l=n.getBoundingClientRect().height;i<l?i=l:i>this.height&&(i=this.height-4)}return i+(r.data_labels_position.y||0)}}),D(Q.prototype,{setTargetType:function setTargetType(t,e){var n=this,i=n.config;n.mapToTargetIds(t).forEach(function(t){n.withoutFadeIn[t]=e===i.data_types[t],i.data_types[t]=e}),t||(i.data_type=e)},hasType:function hasType(n,t){var i=this.config.data_types,e=t||this.data.targets,a=!1;return e&&e.length?e.forEach(function(t){var e=i[t.id];(e&&0<=e.indexOf(n)||!e&&"line"===n)&&(a=!0)}):Object.keys(i).length?Object.keys(i).forEach(function(t){i[t]===n&&(a=!0)}):a=this.config.data_type===n,a},hasArcType:function hasArcType(e){var n=this,i=1<arguments.length&&arguments[1]!==undefined?arguments[1]:[];return!["pie","donut","gauge","radar"].filter(function(t){return-1===i.indexOf(t)}).every(function(t){return!n.hasType(t,e)})},isLineType:function isLineType(t){var e=h(t)?t:t.id;return!this.config.data_types[e]||this.isTypeOf(e,["line","spline","area","area-spline","area-spline-range","area-line-range","step","area-step"])},isTypeOf:function isTypeOf(t,e){var n=h(t)?t:t.id,i=this.config.data_types[n];return j(e)?0<=e.indexOf(i):i===e},isStepType:function isStepType(t){return this.isTypeOf(t,["step","area-step"])},isSplineType:function isSplineType(t){return this.isTypeOf(t,["spline","area-spline","area-spline-range"])},isAreaType:function isAreaType(t){return this.isTypeOf(t,["area","area-spline","area-spline-range","area-line-range","area-step"])},isAreaRangeType:function isAreaRangeType(t){return this.isTypeOf(t,["area-spline-range","area-line-range"])},isBarType:function isBarType(t){return this.isTypeOf(t,"bar")},isBubbleType:function isBubbleType(t){return this.isTypeOf(t,"bubble")},isScatterType:function isScatterType(t){return this.isTypeOf(t,"scatter")},isPieType:function isPieType(t){return this.isTypeOf(t,"pie")},isGaugeType:function isGaugeType(t){return this.isTypeOf(t,"gauge")},isDonutType:function isDonutType(t){return this.isTypeOf(t,"donut")},isRadarType:function isRadarType(t){return this.isTypeOf(t,"radar")},isArcType:function isArcType(t){return this.isPieType(t)||this.isDonutType(t)||this.isGaugeType(t)||this.isRadarType(t)},isCirclePoint:function isCirclePoint(){var t=this.config,e=t.point_pattern;return"circle"===t.point_type&&(!e||j(e)&&0===e.length)},lineData:function lineData(t){return this.isLineType(t)?[t]:[]},arcData:function arcData(t){return this.isArcType(t.data)?[t]:[]},barData:function barData(t){return this.isBarType(t)?t.values:[]},labelishData:function labelishData(t){return this.isBarType(t)||this.isLineType(t)||this.isScatterType(t)||this.isBubbleType(t)||this.isRadarType(t)?t.values:[]},barLineBubbleData:function barLineBubbleData(t){return this.isBarType(t)||this.isLineType(t)||this.isBubbleType(t)?t.values:[]},isInterpolationType:function isInterpolationType(t){return 0<=["basis","basis-closed","basis-open","bundle","cardinal","cardinal-closed","cardinal-open","catmull-rom","catmull-rom-closed","catmull-rom-open","linear","linear-closed","monotone-x","monotone-y","natural"].indexOf(t)}});var ct=function(t){return k(t.position)||"end"},lt=function(t){return"start"===t.position?4:"middle"===t.position?0:-4},ut=function(n,i,a){return function(t){var e=n?0:i;return"start"===t.position?e=n?-a:0:"middle"===t.position&&(e=(n?-a:i)/2),e}};D(Q.prototype,{initGrid:function initGrid(){var t=this.config;this.xgrid=Object(z.selectAll)([]),t.grid_lines_front||this.initGridLines(),t.grid_front||this.initXYFocusGrid()},initGridLines:function initGridLines(){var t=this;t.gridLines=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class","".concat(B.grid," ").concat(B.gridLines)),t.gridLines.append("g").attr("class",B.xgridLines),t.gridLines.append("g").attr("class",B.ygridLines),t.xgridLines=Object(z.selectAll)([])},updateXGrid:function updateXGrid(t){var n=this,e=n.config,i=e.axis_rotated,a=n.generateGridData(e.grid_x_type,n.x),r=n.isCategorized()?n.xAxis.tickOffset():0;n.xgridAttr=i?{x1:0,x2:n.width,y1:function y1(t){return n.x(t)-r},y2:function y2(t){return n.x(t)-r}}:{x1:function x1(t){return n.x(t)+r},x2:function x2(t){return n.x(t)+r},y1:0,y2:n.height},n.xgrid=n.main.select(".".concat(B.xgrids)).selectAll(".".concat(B.xgrid)).data(a),n.xgrid.exit().remove(),n.xgrid=n.xgrid.enter().append("line").attr("class",B.xgrid).merge(n.xgrid),t||n.xgrid.each(function(){var e=Object(z.select)(this);Object.keys(n.xgridAttr).forEach(function(t){e.attr(t,n.xgridAttr[t]).style("opacity",function(){return e.attr(i?"y1":"x1")===(i?n.height:0)?"0":"1"})})})},updateYGrid:function updateYGrid(){var t=this,e=t.config,n=e.axis_rotated,i=t.yAxis.tickValues()||t.y.ticks(e.grid_y_ticks);t.ygrid=t.main.select(".".concat(B.ygrids)).selectAll(".".concat(B.ygrid)).data(i),t.ygrid.exit().remove(),t.ygrid=t.ygrid.enter().append("line").attr("class",B.ygrid).merge(t.ygrid),t.ygrid.attr("x1",n?t.y:0).attr("x2",n?t.y:t.width).attr("y1",n?0:t.y).attr("y2",n?t.height:t.y),t.smoothLines(t.ygrid,"grid")},updateGrid:function updateGrid(t){var e=this;e.grid.style("visibility",e.hasArcType()?"hidden":"visible"),e.main.select("line.".concat(B.xgridFocus)).style("visibility","hidden"),e.updateXGridLines(t),e.updateYGridLines(t)},updateXGridLines:function updateXGridLines(t){var e=this,n=e.main,i=e.config,a=i.axis_rotated;i.grid_x_show&&e.updateXGrid(),e.xgridLines=n.select(".".concat(B.xgridLines)).selectAll(".".concat(B.xgridLine)).data(i.grid_x_lines),e.xgridLines.exit().transition().duration(t).style("opacity","0").remove();var r=e.xgridLines.enter().append("g");r.append("line").style("opacity","0"),r.append("text").attr("transform",a?"":"rotate(-90)").attr("dy",-5).style("opacity","0"),e.xgridLines=r.merge(e.xgridLines),e.xgridLines.attr("class",function(t){return"".concat(B.xgridLine," ").concat(t["class"]||"").trim()}).select("text").attr("text-anchor",ct).attr("dx",lt).transition().duration(t).text(function(t){return t.text}).transition().style("opacity","1")},updateYGridLines:function updateYGridLines(t){var e=this,n=e.main,i=e.config,a=i.axis_rotated;i.grid_y_show&&e.updateYGrid(),e.ygridLines=n.select(".".concat(B.ygridLines)).selectAll(".".concat(B.ygridLine)).data(i.grid_y_lines),e.ygridLines.exit().transition().duration(t).style("opacity","0").remove();var r=e.ygridLines.enter().append("g");r.append("line").style("opacity","0"),r.append("text").attr("transform",a?"rotate(-90)":"").style("opacity","0"),e.ygridLines=r.merge(e.ygridLines);var o=e.yv.bind(e);e.ygridLines.attr("class",function(t){return"".concat(B.ygridLine," ").concat(t["class"]||"").trim()}).select("line").transition().duration(t).attr("x1",a?o:0).attr("x2",a?o:e.width).attr("y1",a?0:o).attr("y2",a?e.height:o).transition().style("opacity","1"),e.ygridLines.select("text").attr("text-anchor",ct).attr("dx",lt).transition().duration(t).attr("dy",-5).attr("x",ut(a,e.width,e.height)).attr("y",o).text(function(t){return t.text}).transition().style("opacity","1")},redrawGrid:function redrawGrid(t){var e=this,n=e.config.axis_rotated,i=e.xv.bind(e),a=e.xgridLines.select("line"),r=e.xgridLines.select("text");return a=(t?a.transition():a).attr("x1",n?0:i).attr("x2",n?e.width:i).attr("y1",n?i:0).attr("y2",n?i:e.height),r=(t?r.transition():r).attr("x",ut(!n,e.width,e.height)).attr("y",i).text(function(t){return t.text}),[(t?a.transition():a).style("opacity","1"),(t?r.transition():r).style("opacity","1")]},initXYFocusGrid:function initXYFocusGrid(){var t=this,e=t.config;t.grid=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",B.grid),e.grid_x_show&&t.grid.append("g").attr("class",B.xgrids),e.grid_y_show&&t.grid.append("g").attr("class",B.ygrids),e.grid_focus_show&&t.grid.append("g").attr("class",B.xgridFocus).append("line").attr("class",B.xgridFocus)},showXGridFocus:function showXGridFocus(t){var e=this,n=e.config,i=n.axis_rotated,a=t.filter(function(t){return t&&k(e.getBaseValue(t))}),r=e.main.selectAll("line.".concat(B.xgridFocus)),o=e.xx.bind(e);!n.tooltip_show||e.hasType("bubble")||e.hasType("scatter")||e.hasArcType()||(r.style("visibility","visible").data([a[0]]).attr(i?"y1":"x1",o).attr(i?"y2":"x2",o),e.smoothLines(r,"grid"))},hideXGridFocus:function hideXGridFocus(){this.main.select("line.".concat(B.xgridFocus)).style("visibility","hidden")},updateXgridFocus:function updateXgridFocus(){var t=this.config.axis_rotated;this.main.select("line.".concat(B.xgridFocus)).attr("x1",t?0:-10).attr("x2",t?this.width:-10).attr("y1",t?-10:0).attr("y2",t?-10:this.height)},generateGridData:function generateGridData(t,e){var n=this.main.select(".".concat(B.axisX)).selectAll(".tick").size(),i=[];if("year"===t)for(var a=this.getXDomain(),r=a[0].getFullYear(),o=a[1].getFullYear(),s=r;s<=o;s++)i.push(new Date("".concat(s,"-01-01 00:00:00")));else(i=e.ticks(10)).length>n&&(i=i.filter(function(t){return(t+"").indexOf(".")<0}));return i},getGridFilterToRemove:function getGridFilterToRemove(t){return t?function(e){var n=!1;return(j(t)?t.concat():[t]).forEach(function(t){("value"in t&&e.value===t.value||"class"in t&&e["class"]===t["class"])&&(n=!0)}),n}:function(){return!0}},removeGridLines:function removeGridLines(t,e){var n=this.config,i=this.getGridFilterToRemove(t),a=e?B.xgridLines:B.ygridLines,r=e?B.xgridLine:B.ygridLine;this.main.select(".".concat(a)).selectAll(".".concat(r)).filter(i).transition().duration(n.transition_duration).style("opacity","0").remove();var o="grid_".concat(e?"x":"y","_lines");n[o]=n[o].filter(function toShow(t){return!i(t)})}}),D(Q.prototype,{initTooltip:function initTooltip(){var e=this,n=e.config;if(e.tooltip=e.selectChart.style("position","relative").append("div").attr("class",B.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),n.tooltip_init_show){if(e.isTimeSeries()&&h(n.tooltip_init_x)){var t,i,a=e.data.targets[0];for(n.tooltip_init_x=e.parseDate(n.tooltip_init_x),t=0;(i=a.values[t])&&i.x-n.tooltip_init_x!=0;t++);n.tooltip_init_x=t}e.tooltip.html(n.tooltip_contents.call(e,e.data.targets.map(function(t){return e.addName(t.values[n.tooltip_init_x])}),e.axis.getXAxisTickFormat(),e.getYFormat(e.hasArcType(null,["radar"])),e.color)),e.tooltip.style("top",n.tooltip_init_position.top).style("left",n.tooltip_init_position.left).style("display","block")}},getTooltipContent:function getTooltipContent(t,e,n,i){var a,r,o,s,c=this,l=c.config,u=l.tooltip_format_title||e,d=l.tooltip_format_name||function(t){return t},g=l.tooltip_format_value||(c.isStackNormalized()?function(t,e){return"".concat((100*e).toFixed(2),"%")}:n),h=l.tooltip_order,f=function(t){return c.getBaseValue(t)},p=c.levelColor?function(t){return c.levelColor(t.value)}:function(t){return i(t.id)};if(null===h&&l.data_groups.length){var x=c.orderTargets(c.data.targets).map(function(t){return t.id}).reverse();t.sort(function(t,e){var n=t?t.value:null,i=e?e.value:null;return 0<n&&0<i&&(n=t.id?x.indexOf(t.id):null,i=e.id?x.indexOf(e.id):null),n-i})}else/^(asc|desc)$/.test(h)?t.sort(function(t,e){var n=t?f(t):null,i=e?f(e):null;return"asc"===h?n-i:i-n}):C(h)&&t.sort(h);for(var m=0,v=t.length;m<v;m++)if((r=t[m])&&(f(r)||0===f(r))){if(!a){var _=X(u?u(r.x):r.x);a='<table class="'.concat(c.CLASS.tooltip,'">').concat(k(_)?'<tr><th colspan="2">'.concat(_,"</th></tr>"):"")}if(o=[r.ratio,r.id,r.index,t],s=X(g.apply(void 0,[f(r)].concat(W()(o)))),c.isAreaRangeType(r)){var y=["high","low"].map(function(t){return X(g.apply(void 0,[c.getAreaRangeData(r,t)].concat(W()(o))))}),b=S()(y,2),T=b[0],A=b[1];s="<b>Mid:</b> ".concat(s," <b>High:</b> ").concat(T," <b>Low:</b> ").concat(A)}if(s!==undefined){if(null===r.name)continue;var w=X(d.apply(void 0,[r.name].concat(W()(o)))),L=p(r);a+='<tr class="'.concat(c.CLASS.tooltipName).concat(c.getTargetSelectorSuffix(r.id),'"><td class="name">'),a+=c.patterns?'<svg><rect style="fill:'.concat(L,'" width="10" height="10"></rect></svg>'):'<span style="background-color:'.concat(L,'"></span>'),a+="".concat(w,'</td><td class="value">').concat(s,"</td></tr>")}}return"".concat(a,"</table>")},tooltipPosition:function tooltipPosition(t,e,n,i){var a=this,r=a.config,o=Object(z.mouse)(i),s=S()(o,2),c=s[0],l=s[1],u=a.getSvgLeft(!0),d=u+a.currentWidth-a.getCurrentPaddingRight();if(l+=20,a.hasArcType()){"touch"===a.inputType||a.hasType("radar")||(l+=a.height/2,c+=(a.width-(a.isLegendRight?a.getLegendWidth():0))/2)}else{var g=a.x(t[0].x);r.axis_rotated?(l=g+20,c+=u+100,d-=u):(l-=5,c=u+a.getCurrentPaddingLeft(!0)+20+(a.zoomScale?c:g))}var h=c+e;return d<h&&(c-=h-d+20),l+n>a.currentHeight&&(l-=n+30),l<0&&(l=0),{top:l,left:c}},showTooltip:function showTooltip(t,e){var n=this,i=n.config,a=n.hasArcType(null,["radar"]),r=t.filter(function(t){return t&&k(n.getBaseValue(t))}),o=i.tooltip_position||n.tooltipPosition;if(0!==r.length&&i.tooltip_show){var s=n.tooltip.datum(),c=JSON.stringify(t),l=s&&s.width||0,u=s&&s.height||0;if(!s||s.current!==c){var d=t.concat().sort()[0].index,g=i.tooltip_contents.call(n,t,n.axis.getXAxisTickFormat(),n.getYFormat(a),n.color);V(i.tooltip_onshow,n),n.tooltip.html(g).style("display","block").datum({index:d,current:c,width:l=n.tooltip.property("offsetWidth"),height:u=n.tooltip.property("offsetHeight")}),V(i.tooltip_onshown,n),n._handleLinkedCharts(!0,d)}var h=o.call(this,r,l,u,e);n.tooltip.style("top","".concat(h.top,"px")).style("left","".concat(h.left,"px"))}},hideTooltip:function hideTooltip(){var t=this.config;V(t.tooltip_onhide,this),this.tooltip.style("display","none").datum(null),V(t.tooltip_onhidden,this)},_handleLinkedCharts:function _handleLinkedCharts(c,l){var u=this;if(u.config.tooltip_linked){var d=u.config.tooltip_linked_name;(u.api.internal.charts||[]).forEach(function(t){if(t!==u.api){var e=t.internal.config,n=e.tooltip_linked,i=e.tooltip_linked_name,a=document.body.contains(t.element);if(n&&d===i&&a){var r=t.internal.tooltip.data()[0],o=l!==(r&&r.index);try{c&&o?t.tooltip.show({index:l}):!c&&t.tooltip.hide()}catch(s){}}}})}}}),D(Q.prototype,{initLegend:function initLegend(){var t=this,e=t.config;t.legendItemTextBox={},t.legendHasRendered=!1,t.legend=t.svg.append("g"),e.legend_show?(t.legend.attr("transform",t.getTranslate("legend")),t.updateLegend()):(t.legend.style("visibility","hidden"),t.hiddenLegendIds=t.mapToIds(t.data.targets))},updateLegend:function updateLegend(t,e,n){var i=this,a=i.config,r=e||{withTransform:!1,withTransitionForTransform:!1,withTransition:!1};r.withTransition=T(r,"withTransition",!0),r.withTransitionForTransform=T(r,"withTransitionForTransform",!0),a.legend_contents_bindto&&a.legend_contents_template?i.updateLegendTemplate():i.updateLegendElement(t||i.mapToIds(i.data.targets),r,n),i.updateSizes(),i.updateScales(!r.withTransition),i.updateSvgSize(),i.transformAll(r.withTransitionForTransform,n),i.legendHasRendered=!0},updateLegendTemplate:function updateLegendTemplate(){var n=this,t=n.config,e=Object(z.select)(t.legend_contents_bindto),i=t.legend_contents_template;if(!e.empty()){var a=n.data.targets,r=[],o="";n.mapToIds(a).forEach(function(t){var e=C(i)?i.call(n,t,n.color(t),n.api.data(t)[0].values):i.replace(/{=COLOR}/g,n.color(t)).replace(/{=TITLE}/g,t);e&&(r.push(t),o+=e)});var s=e.html(o).selectAll(function(){return this.childNodes}).data(r);n.setLegendItem(s)}},updateSizeForLegend:function updateSizeForLegend(t,e){var n=this,i=n.config,a={top:n.isLegendTop?n.getCurrentPaddingTop()+i.legend_inset_y+5.5:n.currentHeight-t-n.getCurrentPaddingBottom()-i.legend_inset_y,left:n.isLegendLeft?n.getCurrentPaddingLeft()+i.legend_inset_x+.5:n.currentWidth-e-n.getCurrentPaddingRight()-i.legend_inset_x+.5};n.margin3={top:n.isLegendRight?0:n.isLegendInset?a.top:n.currentHeight-t,right:NaN,bottom:0,left:n.isLegendRight?n.currentWidth-e:n.isLegendInset?a.left:0}},transformLegend:function transformLegend(t){(t?this.legend.transition():this.legend).attr("transform",this.getTranslate("legend"))},updateLegendStep:function updateLegendStep(t){this.legendStep=t},updateLegendItemWidth:function updateLegendItemWidth(t){this.legendItemWidth=t},updateLegendItemHeight:function updateLegendItemHeight(t){this.legendItemHeight=t},getLegendWidth:function getLegendWidth(){var t=this;return t.config.legend_show?t.isLegendRight||t.isLegendInset?t.legendItemWidth*(t.legendStep+1):t.currentWidth:0},getLegendHeight:function getLegendHeight(){var t=this,e=0;return t.config.legend_show&&(e=t.isLegendRight?t.currentHeight:Math.max(20,t.legendItemHeight)*(t.legendStep+1)),e},opacityForLegend:function opacityForLegend(t){return t.classed(B.legendItemHidden)?null:"1"},opacityForUnfocusedLegend:function opacityForUnfocusedLegend(t){return t.classed(B.legendItemHidden)?null:"0.3"},toggleFocusLegend:function toggleFocusLegend(t,e){var n=this,i=n.mapToTargetIds(t);n.legend.selectAll(".".concat(B.legendItem)).filter(function(t){return 0<=i.indexOf(t)}).classed(B.legendItemFocused,e).transition().duration(100).style("opacity",function(){return(e?n.opacityForLegend:n.opacityForUnfocusedLegend).call(n,Object(z.select)(this))})},revertLegend:function revertLegend(){var t=this;t.legend.selectAll(".".concat(B.legendItem)).classed(B.legendItemFocused,!1).transition().duration(100).style("opacity",function(){return t.opacityForLegend(Object(z.select)(this))})},showLegend:function showLegend(t){var e=this,n=e.config;n.legend_show||(n.legend_show=!0,e.legend.style("visibility","visible"),!e.legendHasRendered&&e.updateLegend()),e.removeHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("visibility","visible").transition().style("opacity",function(){return e.opacityForLegend(Object(z.select)(this))})},hideLegend:function hideLegend(t){var e=this,n=e.config;n.legend_show&&y(t)&&(n.legend_show=!1,e.legend.style("visibility","hidden")),e.addHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("opacity","0").style("visibility","hidden")},clearLegendItemTextBoxCache:function clearLegendItemTextBoxCache(){this.legendItemTextBox={}},setLegendItem:function setLegendItem(t){var n=this,e=n.config,i="touch"===n.inputType;t.attr("class",function(t){var e=Object(z.select)(this);return(!e.empty()&&e.attr("class")||"")+n.generateClass(B.legendItem,t)}).style("visibility",function(t){return n.isLegendToShow(t)?"visible":"hidden"}).style("cursor","pointer").on("click",function(t){V(e.legend_item_onclick,n,t)||(z.event.altKey?(n.api.hide(),n.api.show(t)):(n.api.toggle(t),!i&&n.isTargetToShow(t)?n.api.focus(t):n.api.revert())),i&&n.hideTooltip()}),i||t.on("mouseout",function(t){V(e.legend_item_onout,n,t)||(Object(z.select)(this).classed(B.legendItemFocused,!1),n.api.revert())}).on("mouseover",function(t){V(e.legend_item_onover,n,t)||(Object(z.select)(this).classed(B.legendItemFocused,!0),!n.transiting&&n.isTargetToShow(t)&&n.api.focus(t))})},updateLegendElement:function updateLegendElement(t,e){var n,i,a,f=this,p=f.config,x=p.legend_item_tile_width+5,m=0,v=0,_=0,y={},b={},T={},A=[0],w={},L=0,S=f.isLegendRight||f.isLegendInset,k=t.filter(function(t){return!P(p.data_names[t])||null!==p.data_names[t]}),r=e.withTransition,o=function(t,e,n){var i,a,r,o=n===k.length-1,s=(a=t,r=e,f.legendItemTextBox[r]||(f.legendItemTextBox[r]=f.getTextRect(a,B.legendItem,a)),f.legendItemTextBox[r]),c=s.width+x+(o&&!S?0:10)+p.legend_padding,l=s.height+4,u=S?l:c,d=S?f.getLegendHeight():f.getLegendWidth(),g=function(t,e){e||(i=(d-_-u)/2)<10&&(i=(d-u)/2,_=0,L++),w[t]=L,A[L]=f.isLegendInset?10:i,y[t]=_,_+=u};if(0===n&&(v=m=L=_=0),p.legend_show&&!f.isLegendToShow(e))return b[e]=0,T[e]=0,w[e]=0,void(y[e]=0);b[e]=c,T[e]=l,(!m||m<=c)&&(m=c),(!v||v<=l)&&(v=l);var h=S?v:m;p.legend_equally?(Object.keys(b).forEach(function(t){return b[t]=m}),Object.keys(T).forEach(function(t){return T[t]=v}),(i=(d-h*k.length)/2)<10?(L=_=0,k.forEach(function(t){return g(t)})):g(e,!0)):g(e)};f.isLegendInset&&(L=p.legend_inset_step?p.legend_inset_step:k.length,f.updateLegendStep(L)),i=f.isLegendRight?(n=function(t){return m*w[t]},function(t){return A[w[t]]+y[t]}):f.isLegendInset?(n=function(t){return m*w[t]+10},function(t){return A[w[t]]+y[t]}):(n=function(t){return A[w[t]]+y[t]},function(t){return v*w[t]});var s=function(t,e){return n(t,e)+4+p.legend_item_tile_width},c=function(t,e){return n(t,e)},d=function(t,e){return n(t,e)-2},l=function(t,e){return n(t,e)-2+p.legend_item_tile_width},u=function(t,e){return i(t,e)+9},g=function(t,e){return i(t,e)-5},h=function(t,e){return i(t,e)+4},C=-200,X=f.legend.selectAll(".".concat(B.legendItem)).data(k).enter().append("g");f.setLegendItem(X),X.append("text").text(function(t){return P(p.data_names[t])?p.data_names[t]:t}).each(function(t,e){o(this,t,e)}).style("pointer-events","none").attr("x",S?s:C).attr("y",S?C:u),X.append("rect").attr("class",B.legendItemEvent).style("fill-opacity","0").attr("x",S?c:C).attr("y",S?C:g);var F=f.config.legend_usePoint;if(F){var D=[];X.append(function(t){var e=Y(p.point_pattern)?p.point_pattern:[p.point_type];-1===D.indexOf(t)&&D.push(t);var n=e[D.indexOf(t)%e.length];return"rectangle"===n&&(n="rect"),document.createElementNS(z.namespaces.svg,f.hasValidPointType(n)?n:"use")}).attr("class",B.legendItemPoint).style("fill",function(t){return f.color(t)}).style("pointer-events","none").attr("href",function(t,e,n){return"use"===n[e].nodeName.toLowerCase()?"#".concat(f.datetimeId,"-point-").concat(t):undefined})}else X.append("line").attr("class",B.legendItemTile).style("stroke",f.color).style("pointer-events","none").attr("x1",S?d:C).attr("y1",S?C:h).attr("x2",S?l:C).attr("y2",S?C:h).attr("stroke-width",p.legend_item_tile_height);a=f.legend.select(".".concat(B.legendBackground," rect")),f.isLegendInset&&0<m&&0===a.size()&&(a=f.legend.insert("g",".".concat(B.legendItem)).attr("class",B.legendBackground).append("rect"));var O=f.legend.selectAll("text").data(k).text(function(t){return P(p.data_names[t])?p.data_names[t]:t}).each(function(t,e){o(this,t,e)});(r?O.transition():O).attr("x",s).attr("y",u);var R=f.legend.selectAll("rect.".concat(B.legendItemEvent)).data(k);if((r?R.transition():R).attr("width",function(t){return b[t]}).attr("height",function(t){return T[t]}).attr("x",c).attr("y",g),F){var I=f.legend.selectAll(".".concat(B.legendItemPoint)).data(k);(r?I.transition():I).each(function(){var t,e,n,i=this.nodeName.toLowerCase(),a=f.config.point_r,r="x",o="y",s=2,c=2.5;if("circle"===i){var l=.2*a;r="cx",o="cy",t=a+l,s=2*a,c=-l}else if("rect"===i){var u=2.5*a;n=e=u,c=3}Object(z.select)(this).attr(r,function(t){return d(t)+s}).attr(o,function(t){return h(t)-c}).attr("r",t).attr("width",e).attr("height",n)})}else{var E=f.legend.selectAll("line.".concat(B.legendItemTile)).data(k);(r?E.transition():E).style("stroke",f.color).attr("x1",d).attr("y1",h).attr("x2",l).attr("y2",h)}a&&(r?a.transition():a).attr("height",f.getLegendHeight()-12).attr("width",m*(L+1)+10),f.legend.selectAll(".".concat(B.legendItem)).classed(B.legendItemHidden,function(t){return!f.isTargetToShow(t)}),f.updateLegendItemWidth(m),f.updateLegendItemHeight(v),f.updateLegendStep(L)}}),D(Q.prototype,{initTitle:function initTitle(){this.title=this.svg.append("text").text(this.config.title_text).attr("class",this.CLASS.title)},redrawTitle:function redrawTitle(){var t=this;t.title.attr("x",t.xForTitle.bind(t)).attr("y",t.yForTitle.bind(t))},xForTitle:function xForTitle(){var t=this,e=t.config,n=e.title_position||"left";return 0<=n.indexOf("right")?t.currentWidth-t.getTextRect(t.title,t.CLASS.title,t.title).width-e.title_padding.right:0<=n.indexOf("center")?(t.currentWidth-t.getTextRect(t.title,t.CLASS.title,t.title).width)/2:e.title_padding.left},yForTitle:function yForTitle(){var t=this;return t.config.title_padding.top+t.getTextRect(t.title,t.CLASS.title,t.title).height},getTitlePadding:function getTitlePadding(){return this.yForTitle()+this.config.title_padding.bottom}}),D(Q.prototype,{getClipPath:function getClipPath(t){var e=this.config;if(!e.clipPath&&/-clip$/.test(t)||!e.axis_x_clipPath&&/-clip-xaxis$/.test(t)||!e.axis_y_clipPath&&/-clip-yaxis$/.test(t))return null;var n=0<=window.navigator.appVersion.toLowerCase().indexOf("msie 9.");return"url(".concat(n?"":document.URL.split("#")[0],"#").concat(t,")")},appendClip:function appendClip(t,e){return t.append("clipPath").attr("id",e).append("rect")},getAxisClipX:function getAxisClipX(t){var e=Math.max(30,this.margin.left);return t?-(1+e):-(e-1)},getAxisClipY:function getAxisClipY(t){return t?-20:-this.margin.top},getXAxisClipX:function getXAxisClipX(){return this.getAxisClipX(!this.config.axis_rotated)},getXAxisClipY:function getXAxisClipY(){return this.getAxisClipY(!this.config.axis_rotated)},getYAxisClipX:function getYAxisClipX(){return this.config.axis_y_inner?-1:this.getAxisClipX(this.config.axis_rotated)},getYAxisClipY:function getYAxisClipY(){return this.getAxisClipY(this.config.axis_rotated)},getAxisClipWidth:function getAxisClipWidth(t){var e=Math.max(30,this.margin.left),n=Math.max(30,this.margin.right);return t?this.width+2+e+n:this.margin.left+20},getAxisClipHeight:function getAxisClipHeight(t){return(t?this.margin.bottom:this.margin.top+this.height)+20},getXAxisClipWidth:function getXAxisClipWidth(){return this.getAxisClipWidth(!this.config.axis_rotated)},getXAxisClipHeight:function getXAxisClipHeight(){return this.getAxisClipHeight(!this.config.axis_rotated)},getYAxisClipWidth:function getYAxisClipWidth(){return this.getAxisClipWidth(this.config.axis_rotated)+(this.config.axis_y_inner?20:0)},getYAxisClipHeight:function getYAxisClipHeight(){return this.getAxisClipHeight(this.config.axis_rotated)}}),D(Q.prototype,{initRegion:function initRegion(){this.region=this.main.append("g").attr("clip-path",this.clipPath).attr("class",B.regions)},updateRegion:function updateRegion(t){var e=this,n=e.config;e.region.style("visibility",e.hasArcType()?"hidden":"visible"),e.mainRegion=e.main.select(".".concat(B.regions)).selectAll(".".concat(B.region)).data(n.regions),e.mainRegion.exit().transition().duration(t).style("opacity","0").remove(),e.mainRegion=e.mainRegion.enter().append("g").merge(e.mainRegion).attr("class",e.classRegion.bind(e)),e.mainRegion.append("rect").style("fill-opacity","0")},redrawRegion:function redrawRegion(t){var e=this,n=e.mainRegion.select("rect");return n=(t?n.transition():n).attr("x",e.regionX.bind(e)).attr("y",e.regionY.bind(e)).attr("width",e.regionWidth.bind(e)).attr("height",e.regionHeight.bind(e)),[(t?n.transition():n).style("fill-opacity",function(t){return k(t.opacity)?t.opacity:"0.1"}).on("end",function(){Object(z.select)(this.parentNode).selectAll("rect:not([x])").remove()})]},getRegionXY:function getRegionXY(t,e){var n=this,i=n.config.axis_rotated,a="x"===t,r="start",o=0;return"y"===e.axis||"y2"===e.axis?(!a&&(r="end"),(a?i:!i)&&r in e&&(o=(0,n[e.axis])(e[r]))):(a?!i:i)&&r in e&&(o=(n.zoomScale||n.x)(n.isTimeSeries()?n.parseDate(e[r]):e[r])),o},regionX:function regionX(t){return this.getRegionXY("x",t)},regionY:function regionY(t){return this.getRegionXY("y",t)},getRegionSize:function getRegionSize(t,e){var n=this,i=n.config.axis_rotated,a="width"===t,r=n[a?"regionX":"regionY"](e),o="end",s=n[t];return"y"===e.axis||"y2"===e.axis?(!a&&(o="start"),(a?i:!i)&&o in e&&(s=(0,n[e.axis])(e[o]))):(a?!i:i)&&o in e&&(s=(n.zoomScale||n.x)(n.isTimeSeries()?n.parseDate(e[o]):e[o])),s<r?0:s-r},regionWidth:function regionWidth(t){return this.getRegionSize("width",t)},regionHeight:function regionHeight(t){return this.getRegionSize("height",t)},isRegionOnX:function isRegionOnX(t){return!t.axis||"x"===t.axis}}),D(Q.prototype,{drag:function drag(t){var v=this,e=v.config,n=v.main;if(!v.hasArcType()&&e.data_selection_enabled&&(!e.zoom_enabled||v.zoom.altDomain)&&e.data_selection_multiple){var i=S()(v.dragStart,2),a=i[0],r=i[1],o=S()(t,2),s=o[0],c=o[1],_=Math.min(a,s),y=Math.max(a,s),b=e.data_selection_grouped?v.margin.top:Math.min(r,c),T=e.data_selection_grouped?v.height:Math.max(r,c);n.select(".".concat(B.dragarea)).attr("x",_).attr("y",b).attr("width",y-_).attr("height",T-b),n.selectAll(".".concat(B.shapes)).selectAll(".".concat(B.shape)).filter(function(t){return e.data_selection_isselectable(t)}).each(function(t,e){var n,i,a,r,o,s,c=Object(z.select)(this),l=c.classed(B.SELECTED),u=c.classed(B.INCLUDED),d=!1;if(c.classed(B.circle)){var g=1*c.attr("cx"),h=1*c.attr("cy");n=v.togglePoint,d=_<g&&g<y&&b<h&&h<T}else{if(!c.classed(B.bar))return;var f=(a=(i=this).getBoundingClientRect(),r=a.width,o=a.height,{x:(s=A(i))[0].x,y:Math.min(s[0].y,s[1].y),width:r,height:o}),p=f.x,x=(h=f.y,f.width),m=f.height;n=v.togglePath,d=!(y<p||p+x<_||T<h||h+m<b)}d^u&&(c.classed(B.INCLUDED,!u),c.classed(B.SELECTED,!l),n.call(v,!l,c,t,e))})}},dragstart:function dragstart(t){var e=this,n=e.config;e.hasArcType()||!n.data_selection_enabled||(e.dragStart=t,e.main.select(".".concat(B.chart)).append("rect").attr("class",B.dragarea).style("opacity","0.1"),e.setDragStatus(!0))},dragend:function dragend(){var t=this,e=t.config;t.hasArcType()||!e.data_selection_enabled||(t.main.select(".".concat(B.dragarea)).transition().duration(100).style("opacity","0").remove(),t.main.selectAll(".".concat(B.shape)).classed(B.INCLUDED,!1),t.setDragStatus(!1))},setDragStatus:function setDragStatus(t){this.dragging=t}});var dt=n(23);D(Q.prototype,{selectPoint:function selectPoint(t,e,n){var i=this,a=i.config,r=a.axis_rotated,o=(r?i.circleY:i.circleX).bind(i),s=(r?i.circleX:i.circleY).bind(i),c=i.pointSelectR.bind(i);V(a.data_onselected,i.api,e,t.node()),i.main.select(".".concat(B.selectedCircles).concat(i.getTargetSelectorSuffix(e.id))).selectAll(".".concat(B.selectedCircle,"-").concat(n)).data([e]).enter().append("circle").attr("class",function(){return i.generateClass(B.selectedCircle,n)}).attr("cx",o).attr("cy",s).attr("stroke",i.color).attr("r",function(t){return 1.4*i.pointSelectR(t)}).transition().duration(100).attr("r",c)},unselectPoint:function unselectPoint(t,e,n){V(this.config.data_onunselected,this.api,e,t.node()),this.main.select(".".concat(B.selectedCircles).concat(this.getTargetSelectorSuffix(e.id))).selectAll(".".concat(B.selectedCircle,"-").concat(n)).transition().duration(100).attr("r",0).remove()},togglePoint:function togglePoint(t,e,n,i){this["".concat(t?"":"un","selectPoint")](e,n,i)},selectPath:function selectPath(t,e){var n=this,i=n.config;V(i.data_onselected,n,e,t.node()),i.interaction_brighten&&t.transition().duration(100).style("fill",function(){return Object(dt.rgb)(n.color(e)).brighter(.75)})},unselectPath:function unselectPath(t,e){var n=this,i=n.config;V(i.data_onunselected,n,e,t.node()),i.interaction_brighten&&t.transition().duration(100).style("fill",function(){return n.color(e)})},togglePath:function togglePath(t,e,n,i){this["".concat(t?"":"un","selectPath")](e,n,i)},getToggle:function getToggle(t,e){return"path"===t.nodeName?this.togglePath:this.isStepType(e)?function(){}:this.togglePoint},toggleShape:function toggleShape(t,e,n){var i,a=this,r=a.config,o=Object(z.select)(t),s=o.classed(B.SELECTED),c=a.getToggle(t,e).bind(a);if(r.data_selection_enabled&&r.data_selection_isselectable(e)){if(!r.data_selection_multiple){var l=".".concat(B.shapes);r.data_selection_grouped&&(l+=a.getTargetSelectorSuffix(e.id)),a.main.selectAll(l).selectAll(".".concat(B.shape)).each(function(t,e){var n=Object(z.select)(this);n.classed(B.SELECTED)&&c(!1,(i=n).classed(B.SELECTED,!1),t,e)})}i&&i.node()===o.node()||(o.classed(B.SELECTED,!s),c(!s,o,e,n))}}}),D(Q.prototype,{initBrush:function initBrush(){var a=this;a.brush=a.config.axis_rotated?Object(g.brushY)():Object(g.brushX)();var t=function(){a.redrawForBrush()};a.brush.on("start",function(){"touch"===a.inputType&&a.hideTooltip(),t()}).on("brush",t),a.brush.update=function(){return 0===this.extent()()[1].filter(function(t){return isNaN(t)}).length&&a.context&&a.context.select(".".concat(B.brush)).call(this),this},a.brush.scale=function(t,e){var n=a.svg.select(".bb-brush .overlay"),i=[[0,0]];t.range?i.push([t.range()[1],(e||!n.empty())&&~~n.attr("height")||60]):t.constructor===Array&&i.push(t),a.config.axis_rotated&&i.reverse(),this.extent(a.config.axis_x_extent||i),this.update()},a.brush.getSelection=function(){return a.context?a.context.select(".".concat(B.brush)):Object(z.select)([])}},initSubchart:function initSubchart(){var t=this,e=t.config,n=e.subchart_show?"visible":"hidden";t.context=t.svg.append("g").attr("transform",t.getTranslate("context"));var i=t.context;i.style("visibility",n),i.append("g").attr("clip-path",t.clipPathForSubchart).attr("class",B.chart),i.select(".".concat(B.chart)).append("g").attr("class",B.chartBars),i.select(".".concat(B.chart)).append("g").attr("class",B.chartLines),i.append("g").attr("clip-path",t.clipPath).attr("class",B.brush).call(t.brush),t.axes.subx=i.append("g").attr("class",B.axisX).attr("transform",t.getTranslate("subx")).attr("clip-path",e.axis_rotated?"":t.clipPathForXAxis).style("visibility",e.subchart_axis_x_show?n:"hidden")},updateTargetsForSubchart:function updateTargetsForSubchart(t){var e=this,n=e.context,i=e.config,a=e.classChartBar.bind(e),r=e.classBars.bind(e),o=e.classChartLine.bind(e),s=e.classLines.bind(e),c=e.classAreas.bind(e);if(i.subchart_show){var l=n.select(".".concat(B.chartBars)).selectAll(".".concat(B.chartBar)).data(t).attr("class",a);l.enter().append("g").style("opacity","0").attr("class",a).merge(l).append("g").attr("class",r);var u=n.select(".".concat(B.chartLines)).selectAll(".".concat(B.chartLine)).data(t).attr("class",o),d=u.enter().append("g").style("opacity","0").attr("class",o).merge(u);d.append("g").attr("class",s),d.append("g").attr("class",c),n.selectAll(".".concat(B.brush," rect")).attr(i.axis_rotated?"width":"height",i.axis_rotated?e.width2:e.height2)}},updateBarForSubchart:function updateBarForSubchart(t){var e=this;e.contextBar=e.context.selectAll(".".concat(B.bars)).selectAll(".".concat(B.bar)).data(e.barData.bind(e)),e.contextBar.exit().transition().duration(t).style("opacity","0").remove(),e.contextBar=e.contextBar.enter().append("path").attr("class",e.classBar.bind(e)).style("stroke","none").style("fill",e.color).merge(e.contextBar).style("opacity",e.initialOpacity.bind(e))},redrawBarForSubchart:function redrawBarForSubchart(t,e,n){(e?this.contextBar.transition(L()).duration(n):this.contextBar).attr("d",t).style("opacity","1")},updateLineForSubchart:function updateLineForSubchart(t){var e=this;e.contextLine=e.context.selectAll(".".concat(B.lines)).selectAll(".".concat(B.line)).data(e.lineData.bind(e)),e.contextLine.exit().transition().duration(t).style("opacity","0").remove(),e.contextLine=e.contextLine.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color).merge(e.contextLine).style("opacity",e.initialOpacity.bind(e))},redrawLineForSubchart:function redrawLineForSubchart(t,e,n){(e?this.contextLine.transition(L()).duration(n):this.contextLine).attr("d",t).style("opacity","1")},updateAreaForSubchart:function updateAreaForSubchart(t){var e=this;e.contextArea=e.context.selectAll(".".concat(B.areas)).selectAll(".".concat(B.area)).data(e.lineData.bind(e)),e.contextArea.exit().transition().duration(t).style("opacity","0").remove(),e.contextArea=e.contextArea.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=Object(z.select)(this).style("opacity"),"0"}).merge(e.contextArea).style("opacity","0")},redrawAreaForSubchart:function redrawAreaForSubchart(t,e,n){(e?this.contextArea.transition(L()).duration(n):this.contextArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)},redrawSubchart:function redrawSubchart(t,e,n,i,a,r,o){var s=this,c=s.config;if(s.context.style("visibility",c.subchart_show?"visible":"hidden"),c.subchart_show&&(z.event&&"zoom"===z.event.type&&s.brush.update(),t)){F(s)||s.brush.update();var l=s.generateDrawArea(a,!0),u=s.generateDrawBar(r,!0),d=s.generateDrawLine(o,!0);s.updateBarForSubchart(n),s.updateLineForSubchart(n),s.updateAreaForSubchart(n),s.redrawBarForSubchart(u,n,n),s.redrawLineForSubchart(d,n,n),s.redrawAreaForSubchart(l,n,n)}},redrawForBrush:function redrawForBrush(){var t=this,e=t.x;t.redraw({withTransition:!1,withY:t.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withDimension:!1}),t.config.subchart_onbrush.call(t.api,e.orgDomain())},transformContext:function transformContext(t,e){var n;e&&e.axisSubX?n=e.axisSubX:(n=this.context.select(".".concat(B.axisX)),t&&(n=n.transition())),this.context.attr("transform",this.getTranslate("context")),n.attr("transform",this.getTranslate("subx"))},getDefaultExtent:function getDefaultExtent(){var t=this,e=t.config,n=C(e.axis_x_extent)?e.axis_x_extent(t.getXDomain(t.data.targets)):e.axis_x_extent;return t.isTimeSeries()&&(n=[t.parseDate(n[0]),t.parseDate(n[1])]),n}});var gt=n(24);D(Q.prototype,{initZoom:function initZoom(){this.zoomScale=null,this.generateZoom()},bindZoomEvent:function bindZoomEvent(){var t=!(0<arguments.length&&arguments[0]!==undefined)||arguments[0],e=this,n=e.config.zoom_enabled;e.redrawEventRect();var i=e.main.select(".".concat(B.eventRects));n&&t?e.bindZoomOnEventRect(i,n.type):!1===t&&(e.api.unzoom(),i.on(".zoom",null).on(".drag",null))},generateZoom:function generateZoom(){var a=this,r=a.config,t=Object(gt.zoom)().duration(0).on("start",a.onZoomStart.bind(a)).on("zoom",a.onZoom.bind(a)).on("end",a.onZoomEnd.bind(a));t.orgScaleExtent=function(){var t=r.zoom_extent||[1,10];return[t[0],Math.max(a.getMaxDataCount()/t[1],t[1])]},t.updateScaleExtent=function(){var t=M(a.x.orgDomain())/M(a.getZoomDomain()),e=this.orgScaleExtent();return this.scaleExtent([e[0]*t,e[1]*t]),this},t.updateTransformScale=function(t){var e=t.rescaleX(a.x),n=a.trimXDomain(e.domain()),i=r.zoom_rescale;e.domain(n,a.orgXDomain),a.zoomScale=a.getCustomizedScale(e),a.xAxis.scale(a.zoomScale),i&&a.x.domain(a.zoomScale.orgDomain())},a.zoom=t},onZoomStart:function onZoomStart(){var t=this,e=z.event.sourceEvent;e&&(t.zoom.altDomain=e.altKey?t.x.orgDomain():null,t.zoom.startEvent=e,V(t.config.zoom_onzoomstart,t.api,e))},onZoom:function onZoom(){var t=this,e=t.config,n=z.event;if(e.zoom_enabled&&n.sourceEvent){var i="mousemove"===n.sourceEvent.type,a=n.transform;return t.zoom.updateTransformScale(a),0===t.filterTargetsToShow(t.data.targets).length?void 0:i&&t.zoom.altDomain?(t.x.domain(t.zoom.altDomain),void a.scale(t.zoomScale).updateScaleExtent()):(t.isCategorized()&&t.x.orgDomain()[0]===t.orgXDomain[0]&&t.x.domain([t.orgXDomain[0]-1e-10,t.x.orgDomain()[1]]),t.redraw({withTransition:!1,withY:e.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),t.cancelClick=i,void V(e.zoom_onzoom,t.api,t.subX.domain()))}},onZoomEnd:function onZoomEnd(){var t=this,e=t.zoom.startEvent;!e||event&&e.clientX===event.clientX&&e.clientY===event.clientY||(t.redrawEventRect(),t.updateZoom(),V(t.config.zoom_onzoomend,t.api,t.subX.domain()))},getZoomDomain:function getZoomDomain(){var t=this.config;return[Object(m.min)([this.orgXDomain[0],t.zoom_x_min]),Object(m.max)([this.orgXDomain[1],t.zoom_x_max])]},updateZoom:function updateZoom(t){var e=this;if(e.zoomScale){var n=e.zoomScale.domain(),i=e.subX.domain(),a=(n[0]<=i[0]||n[0]-.015<=i[0])&&(i[1]<=n[1]||i[1]<=n[1]-.015);(t||a)&&(e.xAxis.scale(e.subX),e.x.domain(e.subX.orgDomain()),e.zoomScale=null)}},bindZoomOnEventRect:function bindZoomOnEventRect(t,e){var n="drag"===e?this.zoomBehaviour:this.zoom;t.call(n).on("dblclick.zoom",null)},initZoomBehaviour:function initZoomBehaviour(){var c=this,t=c.config.axis_rotated,l=0,u=0,d=null;c.zoomBehaviour=Object(at.drag)().clickDistance(4).on("start",function(){c.setDragStatus(!0),d||(d=c.main.append("rect").attr("clip-path",c.clipPath).attr("class",B.zoomBrush).attr("width",t?c.width:0).attr("height",t?0:c.height)),l=Object(z.mouse)(this)[0],u=l,d.attr("x",l).attr("width",0),c.onZoomStart()}).on("drag",function(){u=Object(z.mouse)(this)[0],d.attr("x",Math.min(l,u)).attr("width",Math.abs(u-l))}).on("end",function(){var t,e=c.zoomScale||c.x;if(c.setDragStatus(!1),d.attr("x",0).attr("width",0),u<l&&(l=(t=[u,l])[0],u=t[1]),l<0&&(u+=Math.abs(l),l=0),l!==u)c.api.zoom([l,u].map(function(t){return e.invert(t)})),c.onZoomEnd();else if(c.isMultipleX())c.clickHandlerForMultipleXS.bind(this)(c);else{var n=z.event.sourceEvent||z.event,i="clientX"in n?[n.clientX,n.clientY]:[n.x,n.y],a=S()(i,2),r=a[0],o=a[1],s=document.elementFromPoint(r,o);c.clickHandlerForSingleX.bind(s)(Object(z.select)(s).datum(),c)}})},setZoomResetButton:function setZoomResetButton(){var t=this,e=t.config,n=e.zoom_resetButton;n&&"drag"===e.zoom_enabled.type&&(t.zoom.resetBtn?t.zoom.resetBtn.style("display",null):t.zoom.resetBtn=t.selectChart.append("div").classed(B.button,!0).append("span").on("click",t.api.unzoom.bind(t)).classed(B.buttonZoomReset,!0).text(n.text||"Reset Zoom"))}});var ht=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];D(Q.prototype,{getColorFromCss:function getColorFromCss(){var t=document.body,e=t.__colorPattern__;if(!e){var n=document.createElement("span");n.className=B.colorPattern,n.style.display="none",t.appendChild(n);var i=window.getComputedStyle(n).backgroundImage;n.parentNode.removeChild(n),-1<i.indexOf(";")&&(e=i.replace(/url[^#]*|["'()]|(\s|%20)/g,"").split(";").map(function(t){return t.trim().replace(/[\"'\s]/g,"")}).filter(Boolean),t.__colorPattern__=e)}return e},generateColor:function generateColor(){var c=this,t=c.config,a=t.data_colors,r=t.data_color,o=[],s=Y(t.color_pattern)?t.color_pattern:Object(q.scaleOrdinal)(c.getColorFromCss()||ht).range(),l=s;if(C(t.color_tiles)){var u=t.color_tiles(),e=s.map(function(t,e){var n,i,a,r,o=t.replace(/[#\(\)\s,]/g,""),s="".concat(c.datetimeId,"-pattern-").concat(o,"-").concat(e);return n=u[e%u.length],i=t,a=s,(r=Object(z.select)(n.cloneNode(!0))).attr("id",a).insert("rect",":first-child").attr("width",r.attr("width")).attr("height",r.attr("height")).style("fill",i),{id:a,node:r.node()}});s=e.map(function(t){return"url(#".concat(t.id,")")}),c.patterns=e}return function(t){var e,n=t.id||t.data&&t.data.id||t,i=c.isTypeOf(n,["line","spline","step"])||!c.config.data_types[n];return C(a[n])?e=a[n](t):a[n]?e=a[n]:(o.indexOf(n)<0&&o.push(n),e=i?l[o.indexOf(n)%l.length]:s[o.indexOf(n)%s.length],a[n]=e),C(r)?r(e,t):e}},generateLevelColor:function generateLevelColor(){var t=this.config,i=t.color_pattern,e=t.color_threshold,a="value"===e.unit,r=e.max||100,o=e.values&&e.values.length?e.values:[];return Y(e)?function(t){for(var e=i[i.length-1],n=0;n<o.length;n++)if((a?t:100*t/r)<o[n]){e=i[n];break}return e}:null}});var ft=function(t,e,n){var i=t.config,a="axis_".concat(e,"_tick_format");return(i[a]?i[a]:t.defaultValueFormat)(n)};D(Q.prototype,{getYFormat:function getYFormat(t){var i=this,a=i.yFormat,r=i.y2Format;return t&&!i.hasType("gauge")&&(a=i.defaultArcValueFormat,r=i.defaultArcValueFormat),function(t,e,n){return("y2"===i.axis.getId(n)?r:a).call(i,t,e)}},yFormat:function yFormat(t){return ft(this,"y",t)},y2Format:function y2Format(t){return ft(this,"y2",t)},defaultValueFormat:function defaultValueFormat(t){return k(t)?+t:""},defaultArcValueFormat:function defaultArcValueFormat(t,e){return"".concat((100*e).toFixed(1),"%")},dataLabelFormat:function dataLabelFormat(t){var e=this.config.data_labels,n=function(t){return k(t)?+t:""},i=n;return C(e.format)?i=e.format:_(e.format)&&(i=e.format[t]?!0===e.format[t]?n:e.format[t]:function(){return""}),i}}),D(Q.prototype,{addCache:function addCache(t,e){var n=!!(2<arguments.length&&arguments[2]!==undefined)&&arguments[2];this.cache[t]=n?this.cloneTarget(e):e},removeCache:function removeCache(t){var e=this;N(t).forEach(function(t){return delete e.cache[t]})},getCache:function getCache(t){if(!(1<arguments.length&&arguments[1]!==undefined&&arguments[1]))return this.cache[t]||null;for(var e,n=[],i=0;e=t[i];i++)e in this.cache&&n.push(this.cloneTarget(this.cache[e]));return n},resetCache:function resetCache(t){for(var e in this.cache)(t||/^\$/.test(e))&&(this.cache[e]=null)}}),D(Q.prototype,{CLASS:B,generateClass:function generateClass(t,e){return" ".concat(t," ").concat(t+this.getTargetSelectorSuffix(e))},classText:function classText(t){return this.generateClass(B.text,t.index)},classTexts:function classTexts(t){return this.generateClass(B.texts,t.id)},classShape:function classShape(t){return this.generateClass(B.shape,t.index)},classShapes:function classShapes(t){return this.generateClass(B.shapes,t.id)},generateExtraLineClass:function generateExtraLineClass(){var n=this.config.line_classes||[],i=[];return function(t){var e=t.id||t.data&&t.data.id||t;return i.indexOf(e)<0&&i.push(e),n[i.indexOf(e)%n.length]}},classLine:function classLine(t){return this.classShape(t)+this.generateClass(B.line,t.id)},classLines:function classLines(t){return this.classShapes(t)+this.generateClass(B.lines,t.id)},classCircle:function classCircle(t){return this.classShape(t)+this.generateClass(B.circle,t.index)},classCircles:function classCircles(t){return this.classShapes(t)+this.generateClass(B.circles,t.id)},classBar:function classBar(t){return this.classShape(t)+this.generateClass(B.bar,t.index)},classBars:function classBars(t){return this.classShapes(t)+this.generateClass(B.bars,t.id)},classArc:function classArc(t){return this.classShape(t.data)+this.generateClass(B.arc,t.data.id)},classArcs:function classArcs(t){return this.classShapes(t.data)+this.generateClass(B.arcs,t.data.id)},classArea:function classArea(t){return this.classShape(t)+this.generateClass(B.area,t.id)},classAreas:function classAreas(t){return this.classShapes(t)+this.generateClass(B.areas,t.id)},classRegion:function classRegion(t,e){return"".concat(this.generateClass(B.region,e)," ").concat("class"in t?t["class"]:"")},classEvent:function classEvent(t){return this.generateClass(B.eventRect,t.index)},classTarget:function classTarget(t){var e=this.config.data_classes[t],n="";return e&&(n=" ".concat(B.target,"-").concat(e)),this.generateClass(B.target,t)+n},classFocus:function classFocus(t){return this.classFocused(t)+this.classDefocused(t)},classFocused:function classFocused(t){return" ".concat(0<=this.focusedTargetIds.indexOf(t.id)?B.focused:"")},classDefocused:function classDefocused(t){return" ".concat(0<=this.defocusedTargetIds.indexOf(t.id)?B.defocused:"")},classChartText:function classChartText(t){return B.chartText+this.classTarget(t.id)},classChartLine:function classChartLine(t){return B.chartLine+this.classTarget(t.id)},classChartBar:function classChartBar(t){return B.chartBar+this.classTarget(t.id)},classChartArc:function classChartArc(t){return B.chartArc+this.classTarget(t.data.id)},classChartRadar:function classChartRadar(t){return B.chartRadar+this.classTarget(t.id)},getTargetSelectorSuffix:function getTargetSelectorSuffix(t){return t||0===t?"-".concat(t).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g,"-"):""},selectorTarget:function selectorTarget(t,e){return"".concat(e||"",".").concat(B.target+this.getTargetSelectorSuffix(t))},selectorTargets:function selectorTargets(t,e){var n=this,i=t||[];return i.length?i.map(function(t){return n.selectorTarget(t,e)}):null},selectorLegend:function selectorLegend(t){return".".concat(B.legendItem+this.getTargetSelectorSuffix(t))},selectorLegends:function selectorLegends(t){var e=this;return t&&t.length?t.map(function(t){return e.selectorLegend(t)}):null}}),D(tt.prototype,{focus:function focus(t){var e=this.internal,n=e.mapToTargetIds(t),i=e.svg.selectAll(e.selectorTargets(n.filter(e.isTargetToShow,e)));this.revert(),this.defocus(),i.classed(B.focused,!0).classed(B.defocused,!1),e.hasArcType()&&e.expandArc(n),e.toggleFocusLegend(n,!0),e.focusedTargetIds=n,e.defocusedTargetIds=e.defocusedTargetIds.filter(function(t){return n.indexOf(t)<0})},defocus:function defocus(t){var e=this.internal,n=e.mapToTargetIds(t);e.svg.selectAll(e.selectorTargets(n.filter(e.isTargetToShow,e))).classed(B.focused,!1).classed(B.defocused,!0),e.hasArcType()&&e.unexpandArc(n),e.toggleFocusLegend(n,!1),e.focusedTargetIds=e.focusedTargetIds.filter(function(t){return n.indexOf(t)<0}),e.defocusedTargetIds=n},revert:function revert(t){var e=this.internal,n=e.mapToTargetIds(t);e.svg.selectAll(e.selectorTargets(n)).classed(B.focused,!1).classed(B.defocused,!1),e.hasArcType()&&e.unexpandArc(n),e.config.legend_show&&(e.showLegend(n.filter(e.isLegendToShow.bind(e))),e.legend.selectAll(e.selectorLegends(n)).filter(function(){return Object(z.select)(this).classed(B.legendItemFocused)}).classed(B.legendItemFocused,!1)),e.focusedTargetIds=[],e.defocusedTargetIds=[]}}),D(tt.prototype,{_showHide:function _showHide(t,e,n){var i=this.internal,a=i.mapToTargetIds(e);i["".concat(t?"remove":"add","HiddenTargetIds")](a);var r=i.svg.selectAll(i.selectorTargets(a)),o=t?"1":"0";r.transition().style("opacity",o,"important").call(i.endall,function(){r.style("opacity",null).style("opacity",o)}),n.withLegend&&i["".concat(t?"show":"hide","Legend")](a),i.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},show:function show(t){var e=1<arguments.length&&arguments[1]!==undefined?arguments[1]:{};this._showHide(!0,t,e)},hide:function hide(t){var e=1<arguments.length&&arguments[1]!==undefined?arguments[1]:{};this._showHide(!1,t,e)},toggle:function toggle(t){var e=this,n=1<arguments.length&&arguments[1]!==undefined?arguments[1]:{},i=this.internal,a={show:[],hide:[]};i.mapToTargetIds(t).forEach(function(t){return a[i.isTargetToShow(t)?"hide":"show"].push(t)}),a.show.length&&this.show(a.show,n),a.hide.length&&setTimeout(function(){return e.hide(a.hide,n)},0)}});var pt=function(t){var e,n=this.internal,i=t;if(n.config.zoom_enabled&&i){if(n.isTimeSeries()&&(i=i.map(function(t){return n.parseDate(t)})),n.config.subchart_show){var a=n.zoomScale||n.x;n.brush.getSelection().call(n.brush.move,[a(i[0]),a(i[1])]),e=i}else n.x.domain(i),n.zoomScale=n.x,n.xAxis.scale(n.zoomScale),e=n.zoomScale.orgDomain();n.redraw({withTransition:!0,withY:n.config.zoom_rescale,withDimension:!1}),n.setZoomResetButton(),V(n.config.zoom_onzoom,this,n.x.orgDomain())}else e=n.zoomScale?n.zoomScale.domain():n.x.orgDomain();return e};D(pt,{enable:function enable(){var t=0<arguments.length&&arguments[0]!==undefined?arguments[0]:"wheel",e=this.internal,n=e.config,i=t;t&&(i=h(t)&&/^(drag|wheel)$/.test(t)?{type:t}:t),n.zoom_enabled=i,e.zoom?!1===t&&e.bindZoomEvent(!1):(e.initZoom(),e.initZoomBehaviour(),e.bindZoomEvent()),e.updateAndRedraw()},max:function max(t){var e=this.internal,n=e.config;return(0===t||t)&&(n.zoom_x_max=Object(m.max)([e.orgXDomain[1],t])),n.zoom_x_max},min:function min(t){var e=this.internal,n=e.config;return(0===t||t)&&(n.zoom_x_min=Object(m.min)([e.orgXDomain[0],t])),n.zoom_x_min},range:function range(t){var e=this.zoom;if(b(t)){var n=t.min,i=t.max;P(n)&&e.min(n),P(i)&&e.max(i)}return{min:e.min(),max:e.max()}}}),D(tt.prototype,{zoom:pt,unzoom:function unzoom(){var t=this.internal,e=t.config;if(t.zoomScale){e.subchart_show?t.brush.getSelection().call(t.brush.move,null):t.zoom.updateTransformScale(gt.zoomIdentity),t.updateZoom(!0),t.zoom.resetBtn&&t.zoom.resetBtn.style("display","none");var n=t.main.select(".".concat(B.eventRects));Object(gt.zoomTransform)(n.node())!==gt.zoomIdentity&&t.zoom.transform(n,gt.zoomIdentity),t.redraw({withTransition:!0,withY:e.zoom_rescale})}}}),D(tt.prototype,{load:function load(e){var t=this.internal,n=t.config;e.xs&&t.addXs(e.xs),"names"in e&&this.data.names(e.names),"classes"in e&&Object.keys(e.classes).forEach(function(t){n.data_classes[t]=e.classes[t]}),"categories"in e&&t.isCategorized()&&(n.axis_x_categories=e.categories),"axes"in e&&Object.keys(e.axes).forEach(function(t){n.data_axes[t]=e.axes[t]}),"colors"in e&&Object.keys(e.colors).forEach(function(t){n.data_colors[t]=e.colors[t]}),"unload"in e&&!1!==e.unload?t.unload(t.mapToTargetIds(!0===e.unload?null:e.unload),function(){return t.loadFromArgs(e)}):t.loadFromArgs(e)},unload:function unload(t){var e=this.internal,n=t||{};j(n)?n={ids:n}:h(n)&&(n={ids:[n]});var i=e.mapToTargetIds(n.ids);e.unload(i,function(){e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),e.removeCache(i),n.done&&n.done()})}});var xt=n(25);D(tt.prototype,{flow:function flow(t){var e,n,i,a,r=this.internal,o=[],s=r.getMaxDataCount(),c=0,l=0;if(t.json)e=r.convertJsonToData(t.json,t.keys);else if(t.rows)e=r.convertRowsToData(t.rows);else{if(!t.columns)return;e=r.convertColumnsToData(t.columns)}var u=r.convertDataToTargets(e,!0);r.data.targets.forEach(function(t){for(var e=!1,n=0;n<u.length;n++)if(t.id===u[n].id){e=!0,t.values[t.values.length-1]&&(l=t.values[t.values.length-1].index+1),c=u[n].values.length;for(var i=0;i<c;i++)u[n].values[i].index=l+i,r.isTimeSeries()||(u[n].values[i].x=l+i);t.values=t.values.concat(u[n].values),u.splice(n,1);break}e||o.push(t.id)}),r.data.targets.forEach(function(t){for(var e=0;e<o.length;e++)if(t.id===o[e]){l=t.values[t.values.length-1].index+1;for(var n=0;n<c;n++)t.values.push({id:t.id,index:l+n,x:r.isTimeSeries()?r.getOtherTargetX(l+n):l+n,value:null})}}),r.data.targets.length&&u.forEach(function(t){for(var e=[],n=r.data.targets[0].values[0].index;n<l;n++)e.push({id:t.id,index:n,x:r.isTimeSeries()?r.getOtherTargetX(n):n,value:null});t.values.forEach(function(t){t.index+=l,r.isTimeSeries()||(t.x+=l)}),t.values=e.concat(t.values)}),r.data.targets=r.data.targets.concat(u);var d=r.data.targets[0],g=d.values[0];P(t.to)?(c=0,a=r.isTimeSeries()?r.parseDate(t.to):t.to,d.values.forEach(function(t){t.x<a&&c++})):P(t.length)&&(c=t.length),s?1===s&&r.isTimeSeries()&&(i=(d.values[d.values.length-1].x-g.x)/2,n=[new Date(+g.x-i),new Date(+g.x+i)],r.updateXDomain(null,!0,!0,!1,n)):(i=r.isTimeSeries()?1<d.values.length?d.values[d.values.length-1].x-g.x:g.x-r.getXDomain(r.data.targets)[0]:1,n=[g.x-i,g.x],r.updateXDomain(null,!0,!0,!1,n)),r.updateTargets(r.data.targets),r.redraw({flow:{index:g.index,length:c,duration:k(t.duration)?t.duration:r.config.transition_duration,done:t.done,orgDataCount:s},withLegend:!0,withTransition:1<s,withTrimXDomain:!1,withUpdateXAxis:!0})}}),D(Q.prototype,{generateFlow:function generateFlow(O){var R=this,I=R.config;return function(){var t,e,n=O.targets,i=O.flow,r=O.drawBar,o=O.drawLine,s=O.drawArea,c=O.cx,l=O.cy,u=O.xv,d=O.xForText,g=O.yForText,a=O.duration,h=i.index,f=i.length,p=R.getValueOnIndex(R.data.targets[0].values,h),x=R.getValueOnIndex(R.data.targets[0].values,h+f),m=R.x.domain(),v=i.duration||a,_=i.done||function(){},y=R.generateWait(),b=R.xgrid||Object(z.selectAll)([]),T=R.xgridLines||Object(z.selectAll)([]),A=R.mainRegion||Object(z.selectAll)([]),w=R.mainText||Object(z.selectAll)([]),L=R.mainBar||Object(z.selectAll)([]),S=R.mainLine||Object(z.selectAll)([]),k=R.mainArea||Object(z.selectAll)([]),C=R.mainCircle||Object(z.selectAll)([]);R.flowing=!0,R.data.targets.forEach(function(t){t.values.splice(0,f)});var X=R.updateXDomain(n,!0,!0);R.updateXGrid&&R.updateXGrid(!0),t=i.orgDataCount?1===i.orgDataCount||(p&&p.x)===(x&&x.x)?R.x(m[0])-R.x(X[0]):R.isTimeSeries()?R.x(m[0])-R.x(X[0]):R.x(p.x)-R.x(x.x):1===R.data.targets[0].values.length?R.isTimeSeries()?(p=R.getValueOnIndex(R.data.targets[0].values,0),x=R.getValueOnIndex(R.data.targets[0].values,R.data.targets[0].values.length-1),R.x(p.x)-R.x(x.x)):M(X)/2:R.x(m[0])-R.x(X[0]),e=M(m)/M(X);var F="translate(".concat(t,",0) scale(").concat(e,",1)");R.hideXGridFocus();var D=Object(E.transition)().ease(xt.easeLinear).duration(v);y.add([R.axes.x.transition(D).call(function(t){return R.xAxis.setTransition(D).create(t)}),L.transition(D).attr("transform",F),S.transition(D).attr("transform",F),k.transition(D).attr("transform",F),C.transition(D).attr("transform",F),w.transition(D).attr("transform",F),A.filter(R.isRegionOnX).transition(D).attr("transform",F),b.transition(D).attr("transform",F),T.transition(D).attr("transform",F)]),D.call(y,function(){var t=[],e=[],n=[];if(f){for(var i,a=0;a<f;a++)i=h+a,t.push(".".concat(B.shape,"-").concat(i)),e.push(".".concat(B.text,"-").concat(i)),n.push(".".concat(B.eventRect,"-").concat(i));R.svg.selectAll(".".concat(B.shapes)).selectAll(t).remove(),R.svg.selectAll(".".concat(B.texts)).selectAll(e).remove(),R.svg.selectAll(".".concat(B.eventRects)).selectAll(n).remove(),R.svg.select(".".concat(B.xgrid)).remove()}if(b.size()&&b.attr("transform",null).attr(R.xgridAttr),T.attr("transform",null),T.select("line").attr("x1",I.axis_rotated?0:u).attr("x2",I.axis_rotated?R.width:u),T.select("text").attr("x",I.axis_rotated?R.width:0).attr("y",u),L.attr("transform",null).attr("d",r),S.attr("transform",null).attr("d",o),k.attr("transform",null).attr("d",s),C.attr("transform",null),R.isCirclePoint())C.attr("cx",c).attr("cy",l);else{C.attr("x",function(t){return c(t)-I.point_r}).attr("y",function(t){return l(t)-I.point_r}).attr("cx",c).attr("cy",l)}w.attr("transform",null).attr("x",d).attr("y",g).style("fill-opacity",R.opacityForText.bind(R)),A.attr("transform",null),A.select("rect").filter(R.isRegionOnX).attr("x",R.regionX.bind(R)).attr("width",R.regionWidth.bind(R)),I.interaction_enabled&&R.redrawEventRect(),_(),R.flowing=!1})}}}),D(tt.prototype,{selected:function selected(t){var e=this.internal,n=[];return e.main.selectAll(".".concat(B.shapes+e.getTargetSelectorSuffix(t))).selectAll(".".concat(B.shape)).filter(function(){return Object(z.select)(this).classed(B.SELECTED)}).each(function(t){return n.push(t)}),n},select:function select(c,l,u){var d=this.internal,g=d.config;g.data_selection_enabled&&d.main.selectAll(".".concat(B.shapes)).selectAll(".".concat(B.shape)).each(function(t,e){var n=Object(z.select)(this),i=t.data?t.data.id:t.id,a=d.getToggle(this,t).bind(d),r=g.data_selection_grouped||!c||0<=c.indexOf(i),o=!l||0<=l.indexOf(e),s=n.classed(B.SELECTED);n.classed(B.line)||n.classed(B.area)||(r&&o?g.data_selection_isselectable(t)&&!s&&a(!0,n.classed(B.SELECTED,!0),t,e):P(u)&&u&&s&&a(!1,n.classed(B.SELECTED,!1),t,e))})},unselect:function unselect(c,l){var u=this.internal,d=u.config;d.data_selection_enabled&&u.main.selectAll(".".concat(B.shapes)).selectAll(".".concat(B.shape)).each(function(t,e){var n=Object(z.select)(this),i=t.data?t.data.id:t.id,a=u.getToggle(this,t).bind(u),r=d.data_selection_grouped||!c||0<=c.indexOf(i),o=!l||0<=l.indexOf(e),s=n.classed(B.SELECTED);n.classed(B.line)||n.classed(B.area)||r&&o&&d.data_selection_isselectable(t)&&s&&a(!1,n.classed(B.SELECTED,!1),t,e)})}}),D(tt.prototype,{transform:function transform(t,e){var n=this.internal,i=0<=["pie","donut"].indexOf(t)?{withTransform:!0}:null;n.transformTo(e,t,i)}}),D(Q.prototype,{transformTo:function transformTo(t,e,n){var i=this,a=n||{withTransitionForAxis:!i.hasArcType()};a.withTransitionForTransform=!1,i.transiting=!1,i.setTargetType(t,e),i.updateTargets(i.data.targets),i.updateAndRedraw(a)}}),D(tt.prototype,{groups:function groups(t){var e=this.internal,n=e.config;return R(t)||(n.data_groups=t,e.redraw()),n.data_groups}});var mt=function(t){var e=this.internal,n=e.config;return t&&(n.grid_x_lines=t,e.redrawWithoutRescale()),n.grid_x_lines};D(mt,{add:function add(t){return this.xgrids(this.internal.config.grid_x_lines.concat(t||[]))},remove:function remove(t){this.internal.removeGridLines(t,!0)}});var vt=function(t){var e=this.internal,n=e.config;return t&&(n.grid_y_lines=t,e.redrawWithoutRescale()),n.grid_y_lines};D(vt,{add:function add(t){return this.ygrids(this.internal.config.grid_y_lines.concat(t||[]))},remove:function remove(t){this.internal.removeGridLines(t,!1)}}),D(tt.prototype,{xgrids:mt,ygrids:vt});var _t=function(t){var e=this.internal,n=e.config;return t?(n.regions=t,e.redrawWithoutRescale(),t):n.regions};D(_t,{add:function add(t){var e=this.internal,n=e.config;return t&&(n.regions=n.regions.concat(t),e.redrawWithoutRescale()),n.regions},remove:function remove(t){var e=this.internal,n=e.config,i=t||{},a=T(i,"duration",n.transition_duration),r=T(i,"classes",[B.region]),o=e.main.select(".".concat(B.regions)).selectAll(r.map(function(t){return".".concat(t)}));return(a?o.transition().duration(a):o).style("opacity","0").remove(),o=n.regions,Object.keys(i).length?(o=o.filter(function(t){var e=!1;return!t["class"]||(t["class"].split(" ").forEach(function(t){0<=r.indexOf(t)&&(e=!0)}),!e)}),n.regions=o):n.regions=[],o}}),D(tt.prototype,{regions:_t});var yt=function(e){var t=this.internal.data.targets;return R(e)?t:t.filter(function(t){return 0<=e.indexOf(t.id)})};D(yt,{shown:function shown(t){return this.internal.filterTargetsToShow(this.data(t))},values:function(t){var n=!(1<arguments.length&&arguments[1]!==undefined)||arguments[1],i=null;if(t){var e=this.data(t);e&&j(e)&&(i=[],e.forEach(function(t){var e=t.values.map(function(t){return t.value});n?i=i.concat(e):i.push(e)}))}return i},names:function names(t){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",t)},colors:function colors(t){return this.internal.updateDataAttributes("colors",t)},axes:function axes(t){return this.internal.updateDataAttributes("axes",t)},min:function min(){return this.internal.getMinMaxData().min},max:function max(){return this.internal.getMinMaxData().max}}),D(tt.prototype,{data:yt}),D(tt.prototype,{category:function category(t,e){var n=this.internal,i=n.config;return 1<arguments.length&&(i.axis_x_categories[t]=e,n.redraw()),i.axis_x_categories[t]},categories:function categories(t){var e=this.internal,n=e.config;return arguments.length&&(n.axis_x_categories=t,e.redraw()),n.axis_x_categories}}),D(tt.prototype,{color:function color(t){return this.internal.color(t)}}),D(tt.prototype,{x:function x(t){var e=this.internal,n=e.isCustomX()&&e.isCategorized();return j(t)&&(n?e.api.categories(t):(e.updateTargetX(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0}))),n?e.api.categories():e.data.xs},xs:function xs(t){var e=this.internal;return b(t)&&(e.updateTargetXs(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs}});var bt=function(t,e,n){var i=t.config,a="axis_x_".concat(e),r="axis_y_".concat(e),o="axis_y2_".concat(e);return P(n)&&(_(n)?(k(n.x)&&(i[a]=n.x),k(n.y)&&(i[r]=n.y),k(n.y2)&&(i[o]=n.y2)):(i[r]=n,i[o]=n),t.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),undefined},Tt=function(t,e){var n=t.config;return{x:n["axis_x_".concat(e)],y:n["axis_y_".concat(e)],y2:n["axis_y2_".concat(e)]}},At=D(function(){},{labels:function labels(e){var n=this.internal;arguments.length&&(Object.keys(e).forEach(function(t){n.axis.setLabelText(t,e[t])}),n.axis.updateLabels())},min:function min(t){var e=this.internal;return arguments.length?bt(e,"min",t):Tt(e,"min")},max:function max(t){var e=this.internal;return arguments.length?bt(e,"max",t):Tt(e,"max")},range:function range(t){var e=this.axis;return arguments.length?(P(t.max)&&e.max(t.max),P(t.min)&&e.min(t.min),undefined):{max:e.max(),min:e.min()}}});D(tt.prototype,{axis:At});var wt=D(function(){},{show:function show(t){var e=this.internal;e.showLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},hide:function hide(t){var e=this.internal;e.hideLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})}});D(tt.prototype,{legend:wt});var Lt=P(window)&&window.Math===Math?window:P(self)&&(self.Math===Math?self:Function("return this")());Lt.document;D(tt.prototype,{resize:function resize(t){var e=this.internal.config;e.size_width=t?t.width:null,e.size_height=t?t.height:null,this.flush()},flush:function flush(t){var e=this.internal;e.zoomScale=null,t?e.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withLegend:!0}):e.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},destroy:function destroy(){var e=this,n=this.internal;return Y(n)&&(n.charts.splice(n.charts.indexOf(this),1),P(n.resizeTimeout)&&Lt.clearTimeout(n.resizeTimeout),Lt.removeEventListener("resize",n.resizeFunction),n.selectChart.classed("bb",!1).html(""),Object.keys(this).forEach(function(t){"internal"===t&&Object.keys(n).forEach(function(t){n[t]=null}),e[t]=null,delete e[t]})),null},config:function config(t,e,n){var i,a=this.internal,r=t&&t.replace(/\./g,"_");return r in a.config&&(P(e)?(i=a.config[r]=e,n&&this.flush(!0)):i=a.config[r]),i}});var St=D(function(){},{show:function show(){var e,n,t=0<arguments.length&&arguments[0]!==undefined?arguments[0]:{},i=this.internal;t.mouse&&(n=t.mouse),t.data?e=i.isMultipleX()?(n=[i.x(t.data.x),i.getYScale(t.data.id)(t.data.value)],null):k(t.data.index)?t.data.index:i.getIndexByX(t.data.x):P(t.x)?e=i.getIndexByX(t.x):P(t.index)&&(e=t.index),("mouse"===i.inputType?["mouseover","mousemove"]:["touchstart"]).forEach(function(t){i.dispatchEvent(t,e,n)})},hide:function hide(){var t=this.internal;t.hideTooltip(),t.hideXGridFocus(),t.unexpandCircles(),t.unexpandBars()}});D(tt.prototype,{tooltip:St});var kt=window.navigator.userAgent;D(Q.prototype,{isSafari:function isSafari(){return-1<kt.indexOf("Safari")&&!this.isChrome()},isChrome:function isChrome(){return-1<kt.indexOf("Chrome")},isMobile:function isMobile(){return-1<kt.indexOf("Mobi")}});var Ct=function(t){var n,e=t.getBoundingClientRect(),i=e.width,a=e.height,r=t.cloneNode(!0),o=N(document.styleSheets),s=(n=[],o.forEach(function(t){try{t.cssRules&&t.cssRules.length&&(n=n.concat(N(t.cssRules)))}catch(e){console.error("Error while reading rules from ".concat(t.href,": ").concat(e.toString()))}}),n).filter(function(t){return t.cssText}).map(function(t){return t.cssText});r.setAttribute("xmlns",z.namespaces.xhtml);var c=(new XMLSerializer).serializeToString(r),l='<svg xmlns="'.concat(z.namespaces.svg,'" width="').concat(i,'" height="').concat(a,'">\n\t\t\t<foreignObject width="100%" height="100%">\n\t\t\t\t<style>').concat(s.join("\n"),"</style>\n\t\t\t\t").concat(c,"\n\t\t\t</foreignObject></svg>").replace(/#/g,"%23").replace("/\n/g","%0A");return"data:image/svg+xml;base64,".concat(btoa(encodeURIComponent(l).replace(/%([0-9A-F]{2})/g,function(t,e){return String.fromCharCode("0x".concat(e))})))};D(tt.prototype,{"export":function _export(){var n=0<arguments.length&&arguments[0]!==undefined?arguments[0]:"image/png",i=1<arguments.length?arguments[1]:undefined,t=Ct(this.element);if(C(i)){var a=new Image;a.crosssOrigin="Anonymous",a.onload=function(){var t=document.createElement("canvas"),e=t.getContext("2d");t.width=a.width,t.height=a.height,e.drawImage(a,0,0),t.toBlob(function(t){i(window.URL.createObjectURL(t))},n)},a.src=t}return t}});n(26);n.d(e,"bb",function(){return Xt});var Xt={version:"1.7.1",generate:function generate(t){var e=new tt(t);return e.internal.charts=this.instance,this.instance.push(e),e},instance:[],chart:{fn:tt.prototype,internal:{fn:Q.prototype,axis:{fn:J.prototype}}}};e["default"]=Xt}])});
//# sourceMappingURL=billboard.min.js.map
/** @preserve jQuery animateNumber plugin v0.0.14
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */

// ['...'] notation using to avoid names minification by Google Closure Compiler
(function($) {
    var reverse = function(value) {
      return value.split('').reverse().join('');
    };
  
    var defaults = {
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
  
        target.text(floored_number);
      }
    };
  
    var handle = function( tween ) {
      var elem = tween.elem;
      if ( elem.nodeType && elem.parentNode ) {
        var handler = elem._animateNumberSetter;
        if (!handler) {
          handler = defaults.numberStep;
        }
        handler(tween.now, tween);
      }
    };
  
    if (!$.Tween || !$.Tween.propHooks) {
      $.fx.step.number = handle;
    } else {
      $.Tween.propHooks.number = {
        set: handle
      };
    }
  
    var extract_number_parts = function(separated_number, group_length) {
      var numbers = separated_number.split('').reverse(),
          number_parts = [],
          current_number_part,
          current_index,
          q;
  
      for(var i = 0, l = Math.ceil(separated_number.length / group_length); i < l; i++) {
        current_number_part = '';
        for(q = 0; q < group_length; q++) {
          current_index = i * group_length + q;
          if (current_index === separated_number.length) {
            break;
          }
  
          current_number_part = current_number_part + numbers[current_index];
        }
        number_parts.push(current_number_part);
      }
  
      return number_parts;
    };
  
    var remove_precending_zeros = function(number_parts) {
      var last_index = number_parts.length - 1,
          last = reverse(number_parts[last_index]);
  
      number_parts[last_index] = reverse(parseInt(last, 10).toString());
      return number_parts;
    };
  
    $.animateNumber = {
      numberStepFactories: {
        /**
         * Creates numberStep handler, which appends string to floored animated number on each step.
         *
         * @example
         * // will animate to 100 with "1 %", "2 %", "3 %", ...
         * $('#someid').animateNumber({
         *   number: 100,
         *   numberStep: $.animateNumber.numberStepFactories.append(' %')
         * });
         *
         * @params {String} suffix string to append to animated number
         * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
         */
        append: function(suffix) {
          return function(now, tween) {
            var floored_number = Math.floor(now),
                target = $(tween.elem);
  
            target.prop('number', now).text(floored_number + suffix);
          };
        },
  
        /**
         * Creates numberStep handler, which format floored numbers by separating them to groups.
         *
         * @example
         * // will animate with 1 ... 217,980 ... 95,217,980 ... 7,095,217,980
         * $('#world-population').animateNumber({
         *    number: 7095217980,
         *    numberStep: $.animateNumber.numberStepFactories.separator(',')
         * });
         * @example
         * // will animate with 1% ... 217,980% ... 95,217,980% ... 7,095,217,980%
         * $('#salesIncrease').animateNumber({
         *   number: 7095217980,
         *   numberStep: $.animateNumber.numberStepFactories.separator(',', 3, '%')
         * });
         *
         * @params {String} [separator=' '] string to separate number groups
         * @params {String} [group_length=3] number group length
         * @params {String} [suffix=''] suffix to append to number
         * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
         */
        separator: function(separator, group_length, suffix) {
          separator = separator || ' ';
          group_length = group_length || 3;
          suffix = suffix || '';
  
          return function(now, tween) {
            var negative = now < 0,
                floored_number = Math.floor((negative ? -1 : 1) * now),
                separated_number = floored_number.toString(),
                target = $(tween.elem);
  
            if (separated_number.length > group_length) {
              var number_parts = extract_number_parts(separated_number, group_length);
  
              separated_number = remove_precending_zeros(number_parts).join(separator);
              separated_number = reverse(separated_number);
            }
  
            target.prop('number', now).text((negative ? '-' : '') + separated_number + suffix);
          };
        }
      }
    };
  
    $.fn.animateNumber = function() {
      var options = arguments[0],
          settings = $.extend({}, defaults, options),
  
          target = $(this),
          args = [settings];
  
      for(var i = 1, l = arguments.length; i < l; i++) {
        args.push(arguments[i]);
      }
  
      // needs of custom step function usage
      if (options.numberStep) {
        // assigns custom step functions
        var items = this.each(function(){
          this._animateNumberSetter = options.numberStep;
        });
  
        // cleanup of custom step functions after animation
        var generic_complete = settings.complete;
        settings.complete = function() {
          items.each(function(){
            delete this._animateNumberSetter;
          });
  
          if ( generic_complete ) {
            generic_complete.apply(this, arguments);
          }
        };
      }
  
      return target.animate.apply(target, args);
    };
  
  }(jQuery));
  
/* 
 * JQuery ProgressBarTimer - v 1.0
 * A simple countdown timer using bootstrap 4 progress bar component.
 *
 *
 * Requires: bootstrap >= 4, jquery >=3
 * Made by Jacob malliaros
 * Under MIT License
 */

; (function ($, window, document, undefined) {

    var pluginName = 'progressBarTimer',
        dataPlugin = "plugin_" + pluginName,
        defaults = {
            timeLimit: 60, //total number of seconds
            warningThreshold: 5, //seconds remaining triggering switch to warning color
            autoStart: false, // start the countdown automatically
            onFinish: function() {}, //invoked once the timer expires
            baseStyle: '', //bootstrap progress bar style at the beginning of the timer
            warningStyle: 'bg-warning', //bootstrap progress bar style in the warning phase
            smooth: false, // should the timer be smooth or stepping
            completeStyle: 'bg-danger', //bootstrap progress bar style at completion of timer
            striped: false, //allow bootstrap striped progress bar 
            animated: false, //allow bootstrap animated progress bar (striped should also be on)
            height: 0, //height of progress bar in pixels (0 is the default height)
            label : {
                show: false, //show label inside progress bar
                type: 'percent' //type of label. Allowable types: 'percent' => 30% , 'seconds' => 23/60
            }
        };

    function Plugin(element, options) {
		this.element = element;
		this._name = pluginName;
		this.settings = $.extend({}, defaults, options);		
		this._defaults = defaults;
		this._name = pluginName;		
		this.init();
	}

	$.extend(Plugin.prototype, {
	    init: function () {
	        $(this).empty();
	        var barContainer = $("<div>").addClass("progress active progress-striped");
	        var bar = $("<div>").addClass("progress-bar").addClass(this.settings.baseStyle)
                .attr("role", "progressbar")
                .attr("aria-valuenow", "0")
                .attr("aria-valuemin", "0")
                .attr("aria-valuemax", this.settings.timeLimit);
            if(this.settings.animated) {
                bar.addClass('progress-bar-striped');
                bar.addClass('progress-bar-animated');
            } else if(this.settings.striped) bar.addClass('progress-bar-striped');
            if(this.settings.height) barContainer.height(this.settings.height);
	        bar.appendTo(barContainer);
            barContainer.appendTo(this.element);
	       
	        
            if (this.settings.smooth) {
                this.timerInterval = 20;
                this.ticks = this.settings.timeLimit * 50;
            } else {
                this.timerInterval = 1000;
                this.ticks = this.settings.timeLimit;
            }
	        this.remainingTicks = this.ticks;

	        if (this.settings.autoStart===true) this.start();
            
			this.bindEvents();
		},
		destroy: function () {
		    this.unbindEvents();
			this.element.removeData();
		},
		bindEvents: function () {
			var plugin = this;
		},
		unbindEvents: function () {
			this.element.off('.' + this._name);
		},
		start: function () {
            this.interval = setInterval(jQuery.proxy(this._draw, this), this.timerInterval);
        },
        reset: function() {
            clearInterval(this.interval);
            this.remainingTicks = this.ticks;
            this._draw();
        },
        stop: function (callBack) {
            clearInterval(this.interval);
		    if (callBack) { callBack(); }
		},
        getElapsedTime: function () {
            return this._getSecondsFromTicks(this.ticks - this.remainingTicks);
        },
        getRemainingTime: function() {
            return this._getSecondsFromTicks(this.remainingTicks);
        },
        addSeconds: function (seconds) {
            var added = _getTicksFromSeconds(seconds);
            this.ticks += added;
            this.remainingTicks += added;
        },
        _getTicksFromSeconds : function(secs) {
            return this.settings.smooth ? secs * 50 : secs;
        },
        _getSecondsFromTicks: function(ticks) {
            return this.settings.smooth ? ticks / 50 : ticks;
        },
        _draw: function () {
            var bar = $(this.element).find('.progress-bar');            
            var elapsedTicks = this.ticks - this.remainingTicks;
            var percent = ((elapsedTicks / this.ticks) * 100);
            bar.width(percent + "%");
            if(this.settings.label && this.settings.label.show===true) {
                if(this.settings.label.type=='percent') {
                    bar.html(Math.round(percent) + "%");
                } else {
                    if(this.settings.smooth===true) {
                        bar.html(Math.round(elapsedTicks/50) + "/" + Math.round(this.ticks/50) );
                    } else {
                        bar.html(elapsedTicks + "/" + this.ticks );
                    }
                }
            }
            --this.remainingTicks;
            if(this._getSecondsFromTicks(this.remainingTicks)<=this.settings.warningThreshold && !bar.hasClass(this.settings.warningStyle)) {                
                bar.removeClass(this.settings.baseStyle).addClass(this.settings.warningStyle);
            }
            if (this.remainingTicks === 0) {
                this.stop();

                bar.removeClass(this.settings.baseStyle)
                    .removeClass(this.settings.warningStyle)
                    .addClass(this.settings.completeStyle);
                bar.width("100%");
                this.settings.onFinish();
            }
        }
	});

	$.fn.progressBarTimer = function (options) {
	    var plugin;
	    this.each(function () {
	        plugin = $.data(this, "plugin_" + pluginName);
	        if (!plugin) {
	            plugin = new Plugin(this, options);		        

				$.data( this, "plugin_" + pluginName, plugin );
			}
	    });
	    return plugin;
	};


})(jQuery, window, document);