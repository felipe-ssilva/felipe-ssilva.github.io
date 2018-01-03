/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
;// jQuery.XDomainRequest.js
// Author: Jason Moon - @JSONMOON
// IE8+
(function($){

if (!$.support.cors && $.ajaxTransport && window.XDomainRequest) {
  var httpRegEx = /^https?:\/\//i;
  var getOrPostRegEx = /^get|post$/i;
  var sameSchemeRegEx = new RegExp('^'+location.protocol, 'i');
  var htmlRegEx = /text\/html/i;
  var jsonRegEx = /\/json/i;
  var xmlRegEx = /\/xml/i;
  
  // ajaxTransport exists in jQuery 1.5+
  $.ajaxTransport('* text html xml json', function(options, userOptions, jqXHR){
    // XDomainRequests must be: asynchronous, GET or POST methods, HTTP or HTTPS protocol, and same scheme as calling page
    if (options.crossDomain && options.async && getOrPostRegEx.test(options.type) && httpRegEx.test(options.url) && sameSchemeRegEx.test(options.url)) {
      var xdr = null;
      var userType = (userOptions.dataType||'').toLowerCase();
      return {
        send: function(headers, complete){
          xdr = new XDomainRequest();
          if (/^\d+$/.test(userOptions.timeout)) {
            xdr.timeout = userOptions.timeout;
          }
          xdr.ontimeout = function(){
            complete(500, 'timeout');
          };
          xdr.onload = function(){
            var allResponseHeaders = 'Content-Length: ' + xdr.responseText.length + '\r\nContent-Type: ' + xdr.contentType;
            var status = {
              code: 200,
              message: 'success'
            };
            var responses = {
              text: xdr.responseText
            };
            try {
              if (userType === 'html' || htmlRegEx.test(xdr.contentType)) {
                responses.html = xdr.responseText;
              } else if (userType === 'json' || (userType !== 'text' && jsonRegEx.test(xdr.contentType))) {
                try {
                  responses.json = $.parseJSON(xdr.responseText);
                } catch(e) {
                  status.code = 500;
                  status.message = 'parseerror';
                  //throw 'Invalid JSON: ' + xdr.responseText;
                }
              } else if (userType === 'xml' || (userType !== 'text' && xmlRegEx.test(xdr.contentType))) {
                var doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = false;
                try {
                  doc.loadXML(xdr.responseText);
                } catch(e) {
                  doc = undefined;
                }
                if (!doc || !doc.documentElement || doc.getElementsByTagName('parsererror').length) {
                  status.code = 500;
                  status.message = 'parseerror';
                  throw 'Invalid XML: ' + xdr.responseText;
                }
                responses.xml = doc;
              }
            } catch(parseMessage) {
              throw parseMessage;
            } finally {
              complete(status.code, status.message, responses, allResponseHeaders);
            }
          };
          // set an empty handler for 'onprogress' so requests don't get aborted
          xdr.onprogress = function(){};
          xdr.onerror = function(){
            complete(500, 'error', {
              text: xdr.responseText
            });
          };
          var postData = '';
          if (userOptions.data) {
            postData = ($.type(userOptions.data) === 'string') ? userOptions.data : $.param(userOptions.data);
          }
          xdr.open(options.type, options.url);
          xdr.send(postData);
        },
        abort: function(){
          if (xdr) {
            xdr.abort();
          }
        }
      };
    }
  });
}

})(jQuery);;/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);;//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisherâ€“Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);
;//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));
;/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);;/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);;/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();;(function( $ ){
	var readyCallbacks = $.Callbacks('once unique memory'),
	inputsCount = 0,
	currentTarget = null;

	// if native FileReader support, then dont add the polyfill and make the plugin do nothing
	if (window.FileReader) {
		$.fn.fileReader = function () { return this; }
		return ;
	}
	
	/**
	* JQuery Plugin
	*/
	$.fn.fileReader = function( options ) {  
		options = $.extend($.fn.fileReader.defaults, options);
		
		var self = this;
		readyCallbacks.add(function() {
			return main(self, options);
		});
		if ($.isFunction(options.callback)) readyCallbacks.add(options.callback);
		
		if (!FileAPIProxy.ready) {
			FileAPIProxy.init(options);
		}
		return this;
	};
	
	/**
	* Default options
	*  	allows user set default options
	*/
	$.fn.fileReader.defaults = {
		id              : 'fileReaderSWFObject', // ID for the created swf object container,
		multiple        : null,
		accept          : null,
		label           : null,
		extensions      : null,
		filereader      : 'files/filereader.swf', // The path to the filereader swf file
		expressInstall  : null, // The path to the express install swf file
		debugMode       : false,
		callback        : false // Callback function when Filereader is ready
	};
	
	/**
	* Plugin callback
	*     adds an input to registry
	*/
	var main = function(el, options) {
		return el.each(function(i, input) {
			input = $(input);
			var inputId = input.attr('id'),
			label,
			clickableElement;

			if (!inputId) {
				inputId = 'flashFileInput' + inputsCount;
				inputsCount++;
			}
			label = input.parent('label');
			clickableElement = label.length > 0 ? label : input;
			clickableElement.attr('id', clickableElement.attr('id') || inputId);


			options.multiple = !!(options.multiple === null ? input.attr('multiple') : options.multiple);
			options.accept = options.accept === null ? input.attr('accept') : options.accept;
			
			FileAPIProxy.inputs[inputId] = input;
			FileAPIProxy.swfObject.add(clickableElement.attr('id'), options.multiple, options.accept, options.label, options.extensions);
			

			clickableElement.css('z-index', 0)
				.mouseover(function (e) {
					if (inputId !== currentTarget) {
						e = e || window.event;
						currentTarget = inputId;
						FileAPIProxy.swfObject.mouseover(clickableElement.attr('id'));
						FileAPIProxy.container
							.height(clickableElement.outerHeight())
							.width(clickableElement.outerWidth())
							.css(clickableElement.offset());
					}
				})
				.click(function(e) {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					return false;
				});
		});
	};
	
	/**
	* Flash FileReader Proxy
	*/
	window.FileAPIProxy = {
		ready: false,
		init: function(o) {
			var self = this;
			this.debugMode = o.debugMode;
			this.container = $('<div>').attr('id', o.id)
				.wrap('<div>')
				.parent()
				.css({
					position:'fixed',
					// top:'0px',
					width:'1px',
					height:'1px',
					display:'inline-block',
					background:'transparent',
					'z-index':99999
				})
				// Hands over mouse events to original input for css styles
				.on('mouseover mouseout mousedown mouseup', function(evt) {
					if(currentTarget) $('#' + currentTarget).trigger(evt.type);
				})
				.appendTo('body');
			
			swfobject.embedSWF(o.filereader, o.id, '100%', '100%', '10', o.expressInstall, {debugMode: o.debugMode ? true : ''}, {'wmode':'transparent','allowScriptAccess':'sameDomain'}, {}, function(e) {
				self.swfObject = e.ref;
				$(self.swfObject)
					.css({
						display: 'block',
						outline: 0
					})
					.attr('tabindex', 0);
				if (self.ready) {
					readyCallbacks.fire();
				}
				self.ready = e.success && typeof e.ref.add === "function";
			});
		},
		swfObject: null,
		container: null,
		// Inputs Registry
		inputs: {},
		// Readers Registry
		readers: {},
		// Receives FileInput events
		onFileInputEvent: function(evt) {
			if (this.debugMode) console.info('FileInput Event ', evt.type, evt);
			if (evt.target in this.inputs) {
				var el = this.inputs[evt.target];
				evt.target = el[0];
				if( evt.type === 'change') {
					evt.files = new FileList(evt.files);
					evt.target = {files: evt.files};
				}
				el.trigger(evt);
			}
			window.focus();
		},
		// Receives FileReader ProgressEvents
		onFileReaderEvent: function(evt) {
			if (this.debugMode) console.info('FileReader Event ', evt.type, evt, evt.target in this.readers);
			if (evt.target in this.readers) {
				var reader = this.readers[evt.target];
				evt.target = reader;
				reader._handleFlashEvent.call(reader, evt);
			}
		},
		// Receives flash FileReader Error Events
		onFileReaderError: function(error) {
			if (this.debugMode) console.log(error);
		},
		onSWFReady: function() {
                    this.container.css({position: 'absolute'});
                    this.ready = typeof this.swfObject.add === "function";
			if (this.ready) {
				readyCallbacks.fire();
			}
			
			return true;
		}
	};
	
	
	/**
	* Add FileReader to the window object
	*/
	window.FileReader = function () {
		// states
		this.EMPTY = 0;
		this.LOADING = 1;
		this.DONE = 2;

		this.readyState = 0;

		// File or Blob data
		this.result = null;

		this.error = null;

		// event handler attributes
		this.onloadstart = null;
		this.onprogress = null;
		this.onload = null;
		this.onabort = null;
		this.onerror = null;
		this.onloadend = null;
		
		// Event Listeners handling using JQuery Callbacks
		this._callbacks = {
			loadstart : $.Callbacks( "unique" ),
			progress  : $.Callbacks( "unique" ),
			abort     : $.Callbacks( "unique" ),
			error     : $.Callbacks( "unique" ),
			load      : $.Callbacks( "unique" ),
			loadend   : $.Callbacks( "unique" )
		};
		
		// Custom properties
		this._id = null;
	};
	
	window.FileReader.prototype = {
		// async read methods
		readAsBinaryString: function (file) {
			this._start(file);
			FileAPIProxy.swfObject.read(file.input, file.name, 'readAsBinaryString');
		},
		readAsText: function (file, encoding) {
			this._start(file);
			FileAPIProxy.swfObject.read(file.input, file.name, 'readAsText');
		},
		readAsDataURL: function (file) {
			this._start(file);
			FileAPIProxy.swfObject.read(file.input, file.name, 'readAsDataURL');
		},
		readAsArrayBuffer: function(file){
			throw("Whoops FileReader.readAsArrayBuffer is unimplemented");
		},
		
		abort: function () {
			this.result = null;
			if (this.readyState === this.EMPTY || this.readyState === this.DONE) return;
			FileAPIProxy.swfObject.abort(this._id);
		},
		
		// Event Target interface
		addEventListener: function (type, listener) {
			if (type in this._callbacks) this._callbacks[type].add(listener);
		},
		removeEventListener: function (type, listener) {
			if (type in this._callbacks) this._callbacks[type].remove(listener);
		},
		dispatchEvent: function (event) {
			event.target = this;
			if (event.type in this._callbacks) {
				var fn = this['on' + event.type];
				if ($.isFunction(fn)) fn(event);
				this._callbacks[event.type].fire(event);
			}
			return true;
		},
		
		// Custom private methods
		
		// Registers FileReader instance for flash callbacks
		_register: function(file) {
			this._id = file.input + '.' + file.name;
			FileAPIProxy.readers[this._id] = this;
		},
		_start: function(file) {
			this._register(file);
			if (this.readyState === this.LOADING) throw {type: 'InvalidStateError', code: 11, message: 'The object is in an invalid state.'};
		},
		_handleFlashEvent: function(evt) {
			switch (evt.type) {
				case 'loadstart':
					this.readyState = this.LOADING;
					break;
				case 'loadend':
					this.readyState = this.DONE;
					break;
				case 'load':
					this.readyState = this.DONE;
					this.result = FileAPIProxy.swfObject.result(this._id);
					break;
				case 'error':
					this.result = null;
					this.error = {
						name: 'NotReadableError',
						message: 'The File cannot be read!'
					};
			}
			this.dispatchEvent(new FileReaderEvent(evt));
		}
	};
	
	/**
	* FileReader ProgressEvent implenting Event interface
	*/
	FileReaderEvent = function (e) {
		this.initEvent(e);
	};

	FileReaderEvent.prototype = {
		initEvent: function (event) {
			$.extend(this, {
				type: null,
				target: null,
				currentTarget: null,
			
				eventPhase: 2,

				bubbles: false,
				cancelable: false,
		 
				defaultPrevented: false,

				isTrusted: false,
				timeStamp: new Date().getTime()
			}, event);
		},
		stopPropagation: function (){
		},
		stopImmediatePropagation: function (){
		},
		preventDefault: function (){
		}
	};
	
	/**
	* FileList interface (Object with item function)
	*/
	FileList = function(array) {
		if (array) {
			for (var i = 0; i < array.length; i++) {
				this[i] = array[i];
			}
			this.length = array.length;
		} else {
			this.length = 0;
		}
	};
	
	FileList.prototype = {
		item: function(index) {
			if (index in this) return this[index];
			return null;
		}
	};
	
})( jQuery );
;
/*
 * Binary Ajax 0.1.10
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */

var BinaryFile = function(strData, iDataOffset, iDataLength) {
    var data = strData;
    var dataOffset = iDataOffset || 0;
    var dataLength = 0;

    this.getRawData = function() {
        return data;
    }

    if (typeof strData == "string") {
        dataLength = iDataLength || data.length;

        this.getByteAt = function(iOffset) {
            return data.charCodeAt(iOffset + dataOffset) & 0xFF;
        }

        this.getBytesAt = function(iOffset, iLength) {
            var aBytes = [];

            for (var i = 0; i < iLength; i++) {
                aBytes[i] = data.charCodeAt((iOffset + i) + dataOffset) & 0xFF
            }
            ;

            return aBytes;
        }
    } else if (typeof strData == "unknown") {
        dataLength = iDataLength || IEBinary_getLength(data);

        this.getByteAt = function(iOffset) {
            return IEBinary_getByteAt(data, iOffset + dataOffset);
        }

        this.getBytesAt = function(iOffset, iLength) {
            return new VBArray(IEBinary_getBytesAt(data, iOffset + dataOffset, iLength)).toArray();
        }
    }

    this.getLength = function() {
        return dataLength;
    }

    this.getSByteAt = function(iOffset) {
        var iByte = this.getByteAt(iOffset);
        if (iByte > 127)
            return iByte - 256;
        else
            return iByte;
    }

    this.getShortAt = function(iOffset, bBigEndian) {
        var iShort = bBigEndian ?
                (this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1)
                : (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset)
        if (iShort < 0)
            iShort += 65536;
        return iShort;
    }
    this.getSShortAt = function(iOffset, bBigEndian) {
        var iUShort = this.getShortAt(iOffset, bBigEndian);
        if (iUShort > 32767)
            return iUShort - 65536;
        else
            return iUShort;
    }
    this.getLongAt = function(iOffset, bBigEndian) {
        var iByte1 = this.getByteAt(iOffset),
                iByte2 = this.getByteAt(iOffset + 1),
                iByte3 = this.getByteAt(iOffset + 2),
                iByte4 = this.getByteAt(iOffset + 3);

        var iLong = bBigEndian ?
                (((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4
                : (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
        if (iLong < 0)
            iLong += 4294967296;
        return iLong;
    }
    this.getSLongAt = function(iOffset, bBigEndian) {
        var iULong = this.getLongAt(iOffset, bBigEndian);
        if (iULong > 2147483647)
            return iULong - 4294967296;
        else
            return iULong;
    }

    this.getStringAt = function(iOffset, iLength) {
        var aStr = [];

        var aBytes = this.getBytesAt(iOffset, iLength);
        for (var j = 0; j < iLength; j++) {
            aStr[j] = String.fromCharCode(aBytes[j]);
        }
        return aStr.join("");
    }

    this.getCharAt = function(iOffset) {
        return String.fromCharCode(this.getByteAt(iOffset));
    }
    this.toBase64 = function() {
        return window.btoa(data);
    }
    this.fromBase64 = function(strBase64) {
        data = window.atob(strBase64);
    }
}


var BinaryAjax = (function() {

    function createRequest() {
        var oHTTP = null;
        if (window.ActiveXObject) {
            oHTTP = new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            oHTTP = new XMLHttpRequest();
        }
        return oHTTP;
    }

    function getHead(strURL, fncCallback, fncError) {
        var oHTTP = createRequest();
        if (oHTTP) {
            if (fncCallback) {
                if (typeof(oHTTP.onload) != "undefined") {
                    oHTTP.onload = function() {
                        if (oHTTP.status == "200") {
                            fncCallback(this);
                        } else {
                            if (fncError)
                                fncError();
                        }
                        oHTTP = null;
                    };
                } else {
                    oHTTP.onreadystatechange = function() {
                        if (oHTTP.readyState == 4) {
                            if (oHTTP.status == "200") {
                                fncCallback(this);
                            } else {
                                if (fncError)
                                    fncError();
                            }
                            oHTTP = null;
                        }
                    };
                }
            }
            oHTTP.open("HEAD", strURL, true);
            oHTTP.send(null);
        } else {
            if (fncError)
                fncError();
        }
    }

    function sendRequest(strURL, fncCallback, fncError, aRange, bAcceptRanges, iFileSize) {
        var oHTTP = createRequest();
        if (oHTTP) {

            var iDataOffset = 0;
            if (aRange && !bAcceptRanges) {
                iDataOffset = aRange[0];
            }
            var iDataLen = 0;
            if (aRange) {
                iDataLen = aRange[1] - aRange[0] + 1;
            }

            if (fncCallback) {
                if (typeof(oHTTP.onload) != "undefined") {
                    oHTTP.onload = function() {
                        if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
                            oHTTP.binaryResponse = new BinaryFile(oHTTP.responseText, iDataOffset, iDataLen);
                            oHTTP.fileSize = iFileSize || oHTTP.getResponseHeader("Content-Length");
                            fncCallback(oHTTP);
                        } else {
                            if (fncError)
                                fncError();
                        }
                        oHTTP = null;
                    };
                } else {
                    oHTTP.onreadystatechange = function() {
                        if (oHTTP.readyState == 4) {
                            if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
                                // IE6 craps if we try to extend the XHR object
                                var oRes = {
                                    status: oHTTP.status,
                                    // IE needs responseBody, Chrome/Safari needs responseText
                                    binaryResponse: new BinaryFile(
                                            typeof oHTTP.responseBody == "unknown" ? oHTTP.responseBody : oHTTP.responseText, iDataOffset, iDataLen
                                            ),
                                    fileSize: iFileSize || oHTTP.getResponseHeader("Content-Length")
                                };
                                fncCallback(oRes);
                            } else {
                                if (fncError)
                                    fncError();
                            }
                            oHTTP = null;
                        }
                    };
                }
            }
            oHTTP.open("GET", strURL, true);

            if (oHTTP.overrideMimeType)
                oHTTP.overrideMimeType('text/plain; charset=x-user-defined');

            if (aRange && bAcceptRanges) {
                oHTTP.setRequestHeader("Range", "bytes=" + aRange[0] + "-" + aRange[1]);
            }

            oHTTP.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT");

            oHTTP.send(null);
        } else {
            if (fncError)
                fncError();
        }
    }

    return function(strURL, fncCallback, fncError, aRange) {

        if (aRange) {
            getHead(
                    strURL,
                    function(oHTTP) {
                        var iLength = parseInt(oHTTP.getResponseHeader("Content-Length"), 10);
                        var strAcceptRanges = oHTTP.getResponseHeader("Accept-Ranges");

                        var iStart, iEnd;
                        iStart = aRange[0];
                        if (aRange[0] < 0)
                            iStart += iLength;
                        iEnd = iStart + aRange[1] - 1;

                        sendRequest(strURL, fncCallback, fncError, [iStart, iEnd], (strAcceptRanges == "bytes"), iLength);
                    }
            );

        } else {
            sendRequest(strURL, fncCallback, fncError);
        }
    }

}());

/*
 document.write(
 "<script type='text/vbscript'>\r\n"
 + "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
 + "	IEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\n"
 + "End Function\r\n"
 + "Function IEBinary_getLength(strBinary)\r\n"
 + "	IEBinary_getLength = LenB(strBinary)\r\n"
 + "End Function\r\n"
 + "</script>\r\n"
 );
 */

document.write(
        "<script type='text/vbscript'>\r\n"
        + "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
        + "	IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\n"
        + "End Function\r\n"
        + "Function IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n"
        + "  Dim aBytes()\r\n"
        + "  ReDim aBytes(iLength - 1)\r\n"
        + "  For i = 0 To iLength - 1\r\n"
        + "   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n"
        + "  Next\r\n"
        + "  IEBinary_getBytesAt = aBytes\r\n"
        + "End Function\r\n"
        + "Function IEBinary_getLength(strBinary)\r\n"
        + "	IEBinary_getLength = LenB(strBinary)\r\n"
        + "End Function\r\n"
        + "</script>\r\n"
        );;
/*
 * Javascript EXIF Reader - jQuery plugin 0.1.3
 * Copyright (c) 2008 Jacob Seidelin, cupboy@gmail.com, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */

/*
 * I added three functions for read EXIF from dataURL
 * - getImageDataFromDataURL
 * - getDataFromDataURL
 * - jQuery.fn.exifLoadFromDataURL
 * 
 * http://orientation.gokercebeci.com 
 * @gokercebeci
 */

(function() {


    var BinaryFile = function(strData, iDataOffset, iDataLength) {
        var data = strData;
        var dataOffset = iDataOffset || 0;
        var dataLength = 0;

        this.getRawData = function() {
            return data;
        }

        if (typeof strData == "string") {
            dataLength = iDataLength || data.length;

            this.getByteAt = function(iOffset) {
                return data.charCodeAt(iOffset + dataOffset) & 0xFF;
            }
        } else if (typeof strData == "unknown") {
            dataLength = iDataLength || IEBinary_getLength(data);

            this.getByteAt = function(iOffset) {
                return IEBinary_getByteAt(data, iOffset + dataOffset);
            }
        }

        this.getLength = function() {
            return dataLength;
        }

        this.getSByteAt = function(iOffset) {
            var iByte = this.getByteAt(iOffset);
            if (iByte > 127)
                return iByte - 256;
            else
                return iByte;
        }

        this.getShortAt = function(iOffset, bBigEndian) {
            var iShort = bBigEndian ?
                    (this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1)
                    : (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset)
            if (iShort < 0)
                iShort += 65536;
            return iShort;
        }
        this.getSShortAt = function(iOffset, bBigEndian) {
            var iUShort = this.getShortAt(iOffset, bBigEndian);
            if (iUShort > 32767)
                return iUShort - 65536;
            else
                return iUShort;
        }
        this.getLongAt = function(iOffset, bBigEndian) {
            var iByte1 = this.getByteAt(iOffset),
                    iByte2 = this.getByteAt(iOffset + 1),
                    iByte3 = this.getByteAt(iOffset + 2),
                    iByte4 = this.getByteAt(iOffset + 3);

            var iLong = bBigEndian ?
                    (((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4
                    : (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
            if (iLong < 0)
                iLong += 4294967296;
            return iLong;
        }
        this.getSLongAt = function(iOffset, bBigEndian) {
            var iULong = this.getLongAt(iOffset, bBigEndian);
            if (iULong > 2147483647)
                return iULong - 4294967296;
            else
                return iULong;
        }
        this.getStringAt = function(iOffset, iLength) {
            var aStr = [];
            for (var i = iOffset, j = 0; i < iOffset + iLength; i++, j++) {
                aStr[j] = String.fromCharCode(this.getByteAt(i));
            }
            return aStr.join("");
        }

        this.getCharAt = function(iOffset) {
            return String.fromCharCode(this.getByteAt(iOffset));
        }
        this.toBase64 = function() {
            return window.btoa(data);
        }
        this.fromBase64 = function(strBase64) {
            data = window.atob(strBase64);
        }
    }


    var BinaryAjax = (function() {

        function createRequest() {
            var oHTTP = null;
            if (window.XMLHttpRequest) {
                oHTTP = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                oHTTP = new ActiveXObject("Microsoft.XMLHTTP");
            }
            return oHTTP;
        }

        function getHead(strURL, fncCallback, fncError) {
            var oHTTP = createRequest();
            if (oHTTP) {
                if (fncCallback) {
                    if (typeof(oHTTP.onload) != "undefined") {
                        oHTTP.onload = function() {
                            if (oHTTP.status == "200") {
                                fncCallback(this);
                            } else {
                                if (fncError)
                                    fncError();
                            }
                            oHTTP = null;
                        };
                    } else {
                        oHTTP.onreadystatechange = function() {
                            if (oHTTP.readyState == 4) {
                                if (oHTTP.status == "200") {
                                    fncCallback(this);
                                } else {
                                    if (fncError)
                                        fncError();
                                }
                                oHTTP = null;
                            }
                        };
                    }
                }
                oHTTP.open("HEAD", strURL, true);
                oHTTP.send(null);
            } else {
                if (fncError)
                    fncError();
            }
        }

        function sendRequest(strURL, fncCallback, fncError, aRange, bAcceptRanges, iFileSize) {
            var oHTTP = createRequest();
            if (oHTTP) {

                var iDataOffset = 0;
                if (aRange && !bAcceptRanges) {
                    iDataOffset = aRange[0];
                }
                var iDataLen = 0;
                if (aRange) {
                    iDataLen = aRange[1] - aRange[0] + 1;
                }

                if (fncCallback) {
                    if (typeof(oHTTP.onload) != "undefined") {
                        oHTTP.onload = function() {

                            if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
                                this.binaryResponse = new BinaryFile(this.responseText, iDataOffset, iDataLen);
                                this.fileSize = iFileSize || this.getResponseHeader("Content-Length");
                                fncCallback(this);
                            } else {
                                if (fncError)
                                    fncError();
                            }
                            oHTTP = null;
                        };
                    } else {
                        oHTTP.onreadystatechange = function() {
                            if (oHTTP.readyState == 4) {
                                if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
                                    this.binaryResponse = new BinaryFile(oHTTP.responseBody, iDataOffset, iDataLen);
                                    this.fileSize = iFileSize || this.getResponseHeader("Content-Length");
                                    fncCallback(this);
                                } else {
                                    if (fncError)
                                        fncError();
                                }
                                oHTTP = null;
                            }
                        };
                    }
                }
                oHTTP.open("GET", strURL, true);

                if (oHTTP.overrideMimeType)
                    oHTTP.overrideMimeType('text/plain; charset=x-user-defined');

                if (aRange && bAcceptRanges) {
                    oHTTP.setRequestHeader("Range", "bytes=" + aRange[0] + "-" + aRange[1]);
                }

                oHTTP.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT");

                oHTTP.send(null);
            } else {
                if (fncError)
                    fncError();
            }
        }

        return function(strURL, fncCallback, fncError, aRange) {

            if (aRange) {
                getHead(
                        strURL,
                        function(oHTTP) {
                            var iLength = parseInt(oHTTP.getResponseHeader("Content-Length"), 10);
                            var strAcceptRanges = oHTTP.getResponseHeader("Accept-Ranges");

                            var iStart, iEnd;
                            iStart = aRange[0];
                            if (aRange[0] < 0)
                                iStart += iLength;
                            iEnd = iStart + aRange[1] - 1;

                            sendRequest(strURL, fncCallback, fncError, [iStart, iEnd], (strAcceptRanges == "bytes"), iLength);
                        }
                );

            } else {
                sendRequest(strURL, fncCallback, fncError);
            }
        }

    }());


    document.write(
            "<script type='text/vbscript'>\r\n"
            + "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
            + "	IEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\n"
            + "End Function\r\n"
            + "Function IEBinary_getLength(strBinary)\r\n"
            + "	IEBinary_getLength = LenB(strBinary)\r\n"
            + "End Function\r\n"
            + "</script>\r\n"
            );


    var EXIF = {};

    (function() {

        var bDebug = false;

        EXIF.Tags = {

            // version tags
            0x9000: "ExifVersion", // EXIF version
            0xA000: "FlashpixVersion", // Flashpix format version

            // colorspace tags
            0xA001: "ColorSpace", // Color space information tag

            // image configuration
            0xA002: "PixelXDimension", // Valid width of meaningful image
            0xA003: "PixelYDimension", // Valid height of meaningful image
            0x9101: "ComponentsConfiguration", // Information about channels
            0x9102: "CompressedBitsPerPixel", // Compressed bits per pixel

            // user information
            0x927C: "MakerNote", // Any desired information written by the manufacturer
            0x9286: "UserComment", // Comments by user

            // related file
            0xA004: "RelatedSoundFile", // Name of related sound file

            // date and time
            0x9003: "DateTimeOriginal", // Date and time when the original image was generated
            0x9004: "DateTimeDigitized", // Date and time when the image was stored digitally
            0x9290: "SubsecTime", // Fractions of seconds for DateTime
            0x9291: "SubsecTimeOriginal", // Fractions of seconds for DateTimeOriginal
            0x9292: "SubsecTimeDigitized", // Fractions of seconds for DateTimeDigitized

            // picture-taking conditions
            0x829A: "ExposureTime", // Exposure time (in seconds)
            0x829D: "FNumber", // F number
            0x8822: "ExposureProgram", // Exposure program
            0x8824: "SpectralSensitivity", // Spectral sensitivity
            0x8827: "ISOSpeedRatings", // ISO speed rating
            0x8828: "OECF", // Optoelectric conversion factor
            0x9201: "ShutterSpeedValue", // Shutter speed
            0x9202: "ApertureValue", // Lens aperture
            0x9203: "BrightnessValue", // Value of brightness
            0x9204: "ExposureBias", // Exposure bias
            0x9205: "MaxApertureValue", // Smallest F number of lens
            0x9206: "SubjectDistance", // Distance to subject in meters
            0x9207: "MeteringMode", // Metering mode
            0x9208: "LightSource", // Kind of light source
            0x9209: "Flash", // Flash status
            0x9214: "SubjectArea", // Location and area of main subject
            0x920A: "FocalLength", // Focal length of the lens in mm
            0xA20B: "FlashEnergy", // Strobe energy in BCPS
            0xA20C: "SpatialFrequencyResponse", // 
            0xA20E: "FocalPlaneXResolution", // Number of pixels in width direction per FocalPlaneResolutionUnit
            0xA20F: "FocalPlaneYResolution", // Number of pixels in height direction per FocalPlaneResolutionUnit
            0xA210: "FocalPlaneResolutionUnit", // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
            0xA214: "SubjectLocation", // Location of subject in image
            0xA215: "ExposureIndex", // Exposure index selected on camera
            0xA217: "SensingMethod", // Image sensor type
            0xA300: "FileSource", // Image source (3 == DSC)
            0xA301: "SceneType", // Scene type (1 == directly photographed)
            0xA302: "CFAPattern", // Color filter array geometric pattern
            0xA401: "CustomRendered", // Special processing
            0xA402: "ExposureMode", // Exposure mode
            0xA403: "WhiteBalance", // 1 = auto white balance, 2 = manual
            0xA404: "DigitalZoomRation", // Digital zoom ratio
            0xA405: "FocalLengthIn35mmFilm", // Equivalent foacl length assuming 35mm film camera (in mm)
            0xA406: "SceneCaptureType", // Type of scene
            0xA407: "GainControl", // Degree of overall image gain adjustment
            0xA408: "Contrast", // Direction of contrast processing applied by camera
            0xA409: "Saturation", // Direction of saturation processing applied by camera
            0xA40A: "Sharpness", // Direction of sharpness processing applied by camera
            0xA40B: "DeviceSettingDescription", // 
            0xA40C: "SubjectDistanceRange", // Distance to subject

            // other tags
            0xA005: "InteroperabilityIFDPointer",
            0xA420: "ImageUniqueID"		// Identifier assigned uniquely to each image
        };

        EXIF.TiffTags = {
            0x0100: "ImageWidth",
            0x0101: "ImageHeight",
            0x8769: "ExifIFDPointer",
            0x8825: "GPSInfoIFDPointer",
            0xA005: "InteroperabilityIFDPointer",
            0x0102: "BitsPerSample",
            0x0103: "Compression",
            0x0106: "PhotometricInterpretation",
            0x0112: "Orientation",
            0x0115: "SamplesPerPixel",
            0x011C: "PlanarConfiguration",
            0x0212: "YCbCrSubSampling",
            0x0213: "YCbCrPositioning",
            0x011A: "XResolution",
            0x011B: "YResolution",
            0x0128: "ResolutionUnit",
            0x0111: "StripOffsets",
            0x0116: "RowsPerStrip",
            0x0117: "StripByteCounts",
            0x0201: "JPEGInterchangeFormat",
            0x0202: "JPEGInterchangeFormatLength",
            0x012D: "TransferFunction",
            0x013E: "WhitePoint",
            0x013F: "PrimaryChromaticities",
            0x0211: "YCbCrCoefficients",
            0x0214: "ReferenceBlackWhite",
            0x0132: "DateTime",
            0x010E: "ImageDescription",
            0x010F: "Make",
            0x0110: "Model",
            0x0131: "Software",
            0x013B: "Artist",
            0x8298: "Copyright"
        }

        EXIF.GPSTags = {
            0x0000: "GPSVersionID",
            0x0001: "GPSLatitudeRef",
            0x0002: "GPSLatitude",
            0x0003: "GPSLongitudeRef",
            0x0004: "GPSLongitude",
            0x0005: "GPSAltitudeRef",
            0x0006: "GPSAltitude",
            0x0007: "GPSTimeStamp",
            0x0008: "GPSSatellites",
            0x0009: "GPSStatus",
            0x000A: "GPSMeasureMode",
            0x000B: "GPSDOP",
            0x000C: "GPSSpeedRef",
            0x000D: "GPSSpeed",
            0x000E: "GPSTrackRef",
            0x000F: "GPSTrack",
            0x0010: "GPSImgDirectionRef",
            0x0011: "GPSImgDirection",
            0x0012: "GPSMapDatum",
            0x0013: "GPSDestLatitudeRef",
            0x0014: "GPSDestLatitude",
            0x0015: "GPSDestLongitudeRef",
            0x0016: "GPSDestLongitude",
            0x0017: "GPSDestBearingRef",
            0x0018: "GPSDestBearing",
            0x0019: "GPSDestDistanceRef",
            0x001A: "GPSDestDistance",
            0x001B: "GPSProcessingMethod",
            0x001C: "GPSAreaInformation",
            0x001D: "GPSDateStamp",
            0x001E: "GPSDifferential"
        }

        EXIF.StringValues = {
            ExposureProgram: {
                0: "Not defined",
                1: "Manual",
                2: "Normal program",
                3: "Aperture priority",
                4: "Shutter priority",
                5: "Creative program",
                6: "Action program",
                7: "Portrait mode",
                8: "Landscape mode"
            },
            MeteringMode: {
                0: "Unknown",
                1: "Average",
                2: "CenterWeightedAverage",
                3: "Spot",
                4: "MultiSpot",
                5: "Pattern",
                6: "Partial",
                255: "Other"
            },
            LightSource: {
                0: "Unknown",
                1: "Daylight",
                2: "Fluorescent",
                3: "Tungsten (incandescent light)",
                4: "Flash",
                9: "Fine weather",
                10: "Cloudy weather",
                11: "Shade",
                12: "Daylight fluorescent (D 5700 - 7100K)",
                13: "Day white fluorescent (N 4600 - 5400K)",
                14: "Cool white fluorescent (W 3900 - 4500K)",
                15: "White fluorescent (WW 3200 - 3700K)",
                17: "Standard light A",
                18: "Standard light B",
                19: "Standard light C",
                20: "D55",
                21: "D65",
                22: "D75",
                23: "D50",
                24: "ISO studio tungsten",
                255: "Other"
            },
            Flash: {
                0x0000: "Flash did not fire",
                0x0001: "Flash fired",
                0x0005: "Strobe return light not detected",
                0x0007: "Strobe return light detected",
                0x0009: "Flash fired, compulsory flash mode",
                0x000D: "Flash fired, compulsory flash mode, return light not detected",
                0x000F: "Flash fired, compulsory flash mode, return light detected",
                0x0010: "Flash did not fire, compulsory flash mode",
                0x0018: "Flash did not fire, auto mode",
                0x0019: "Flash fired, auto mode",
                0x001D: "Flash fired, auto mode, return light not detected",
                0x001F: "Flash fired, auto mode, return light detected",
                0x0020: "No flash function",
                0x0041: "Flash fired, red-eye reduction mode",
                0x0045: "Flash fired, red-eye reduction mode, return light not detected",
                0x0047: "Flash fired, red-eye reduction mode, return light detected",
                0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
                0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                0x0059: "Flash fired, auto mode, red-eye reduction mode",
                0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
            },
            SensingMethod: {
                1: "Not defined",
                2: "One-chip color area sensor",
                3: "Two-chip color area sensor",
                4: "Three-chip color area sensor",
                5: "Color sequential area sensor",
                7: "Trilinear sensor",
                8: "Color sequential linear sensor"
            },
            SceneCaptureType: {
                0: "Standard",
                1: "Landscape",
                2: "Portrait",
                3: "Night scene"
            },
            SceneType: {
                1: "Directly photographed"
            },
            CustomRendered: {
                0: "Normal process",
                1: "Custom process"
            },
            WhiteBalance: {
                0: "Auto white balance",
                1: "Manual white balance"
            },
            GainControl: {
                0: "None",
                1: "Low gain up",
                2: "High gain up",
                3: "Low gain down",
                4: "High gain down"
            },
            Contrast: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            Saturation: {
                0: "Normal",
                1: "Low saturation",
                2: "High saturation"
            },
            Sharpness: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            SubjectDistanceRange: {
                0: "Unknown",
                1: "Macro",
                2: "Close view",
                3: "Distant view"
            },
            FileSource: {
                3: "DSC"
            },
            Components: {
                0: "",
                1: "Y",
                2: "Cb",
                3: "Cr",
                4: "R",
                5: "G",
                6: "B"
            }
        }

        function addEvent(oElement, strEvent, fncHandler)
        {
            if (oElement.addEventListener) {
                oElement.addEventListener(strEvent, fncHandler, false);
            } else if (oElement.attachEvent) {
                oElement.attachEvent("on" + strEvent, fncHandler);
            }
        }


        function imageHasData(oImg)
        {
            return !!(oImg.exifdata);
        }

        function getImageData(oImg, fncCallback)
        {
            BinaryAjax(
                    oImg.src,
                    function(oHTTP) {
                        console.log('BINARY', oHTTP.binaryResponse);
                        var oEXIF = findEXIFinJPEG(oHTTP.binaryResponse);
                        oImg.exifdata = oEXIF || {};
                        if (fncCallback)
                    fncCallback();
                    }
            )
        }

        function getImageDataFromDataURL(oImg, fncCallback)
        {
            var byteString = atob(oImg.src.split(',')[1]);
            var f = new BinaryFile(byteString, 0, byteString.length)
            var oEXIF = findEXIFinJPEG(f);
            oImg.exifdata = oEXIF || {};
            if (fncCallback)
                fncCallback();
        }

        function findEXIFinJPEG(oFile) {
            var aMarkers = [];

            if (oFile.getByteAt(0) != 0xFF || oFile.getByteAt(1) != 0xD8) {
                return false; // not a valid jpeg
            }

            var iOffset = 2;
            var iLength = oFile.getLength();
            while (iOffset < iLength) {
                if (oFile.getByteAt(iOffset) != 0xFF) {
                    if (bDebug)
                        console.log("Not a valid marker at offset " + iOffset + ", found: " + oFile.getByteAt(iOffset));
                    return false; // not a valid marker, something is wrong
                }

                var iMarker = oFile.getByteAt(iOffset + 1);

                // we could implement handling for other markers here, 
                // but we're only looking for 0xFFE1 for EXIF data

                if (iMarker == 22400) {
                    if (bDebug)
                        console.log("Found 0xFFE1 marker");
                    return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset + 2, true) - 2);
                    iOffset += 2 + oFile.getShortAt(iOffset + 2, true);

                } else if (iMarker == 225) {
                    // 0xE1 = Application-specific 1 (for EXIF)
                    if (bDebug)
                        console.log("Found 0xFFE1 marker");
                    return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset + 2, true) - 2);

                } else {
                    iOffset += 2 + oFile.getShortAt(iOffset + 2, true);
                }

            }

        }


        function readTags(oFile, iTIFFStart, iDirStart, oStrings, bBigEnd)
        {
            var iEntries = oFile.getShortAt(iDirStart, bBigEnd);
            var oTags = {};
            for (var i = 0; i < iEntries; i++) {
                var iEntryOffset = iDirStart + i * 12 + 2;
                var strTag = oStrings[oFile.getShortAt(iEntryOffset, bBigEnd)];
                if (!strTag && bDebug)
                    console.log("Unknown tag: " + oFile.getShortAt(iEntryOffset, bBigEnd));
                oTags[strTag] = readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd);
            }
            return oTags;
        }


        function readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd)
        {
            var iType = oFile.getShortAt(iEntryOffset + 2, bBigEnd);
            var iNumValues = oFile.getLongAt(iEntryOffset + 4, bBigEnd);
            var iValueOffset = oFile.getLongAt(iEntryOffset + 8, bBigEnd) + iTIFFStart;

            switch (iType) {
                case 1: // byte, 8-bit unsigned int
                case 7: // undefined, 8-bit byte, value depending on field
                    if (iNumValues == 1) {
                        return oFile.getByteAt(iEntryOffset + 8, bBigEnd);
                    } else {
                        var iValOffset = iNumValues > 4 ? iValueOffset : (iEntryOffset + 8);
                        var aVals = [];
                        for (var n = 0; n < iNumValues; n++) {
                            aVals[n] = oFile.getByteAt(iValOffset + n);
                        }
                        return aVals;
                    }
                    break;

                case 2: // ascii, 8-bit byte
                    var iStringOffset = iNumValues > 4 ? iValueOffset : (iEntryOffset + 8);
                    return oFile.getStringAt(iStringOffset, iNumValues - 1);
                    break;

                case 3: // short, 16 bit int
                    if (iNumValues == 1) {
                        return oFile.getShortAt(iEntryOffset + 8, bBigEnd);
                    } else {
                        var iValOffset = iNumValues > 2 ? iValueOffset : (iEntryOffset + 8);
                        var aVals = [];
                        for (var n = 0; n < iNumValues; n++) {
                            aVals[n] = oFile.getShortAt(iValOffset + 2 * n, bBigEnd);
                        }
                        return aVals;
                    }
                    break;

                case 4: // long, 32 bit int
                    if (iNumValues == 1) {
                        return oFile.getLongAt(iEntryOffset + 8, bBigEnd);
                    } else {
                        var aVals = [];
                        for (var n = 0; n < iNumValues; n++) {
                            aVals[n] = oFile.getLongAt(iValueOffset + 4 * n, bBigEnd);
                        }
                        return aVals;
                    }
                    break;
                case 5:	// rational = two long values, first is numerator, second is denominator
                    if (iNumValues == 1) {
                        return oFile.getLongAt(iValueOffset, bBigEnd) / oFile.getLongAt(iValueOffset + 4, bBigEnd);
                    } else {
                        var aVals = [];
                        for (var n = 0; n < iNumValues; n++) {
                            aVals[n] = oFile.getLongAt(iValueOffset + 8 * n, bBigEnd) / oFile.getLongAt(iValueOffset + 4 + 8 * n, bBigEnd);
                        }
                        return aVals;
                    }
                    break;
                case 9: // slong, 32 bit signed int
                    if (iNumValues == 1) {
                        return oFile.getSLongAt(iEntryOffset + 8, bBigEnd);
                    } else {
                        var aVals = [];
                        for (var n = 0; n < iNumValues; n++) {
                            aVals[n] = oFile.getSLongAt(iValueOffset + 4 * n, bBigEnd);
                        }
                        return aVals;
                    }
                    break;
                case 10: // signed rational, two slongs, first is numerator, second is denominator
                    if (iNumValues == 1) {
                        return oFile.getSLongAt(iValueOffset, bBigEnd) / oFile.getSLongAt(iValueOffset + 4, bBigEnd);
                    } else {
                        var aVals = [];
                        for (var n = 0; n < iNumValues; n++) {
                            aVals[n] = oFile.getSLongAt(iValueOffset + 8 * n, bBigEnd) / oFile.getSLongAt(iValueOffset + 4 + 8 * n, bBigEnd);
                        }
                        return aVals;
                    }
                    break;
            }
        }


        function readEXIFData(oFile, iStart, iLength)
        {
            if (oFile.getStringAt(iStart, 4) != "Exif") {
                if (bDebug)
                    console.log("Not valid EXIF data! " + oFile.getStringAt(iStart, 4));
                return false;
            }

            var bBigEnd;

            var iTIFFOffset = iStart + 6;

            // test for TIFF validity and endianness
            if (oFile.getShortAt(iTIFFOffset) == 0x4949) {
                bBigEnd = false;
            } else if (oFile.getShortAt(iTIFFOffset) == 0x4D4D) {
                bBigEnd = true;
            } else {
                if (bDebug)
                    console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
                return false;
            }

            if (oFile.getShortAt(iTIFFOffset + 2, bBigEnd) != 0x002A) {
                if (bDebug)
                    console.log("Not valid TIFF data! (no 0x002A)");
                return false;
            }

            if (oFile.getLongAt(iTIFFOffset + 4, bBigEnd) != 0x00000008) {
                if (bDebug)
                    console.log("Not valid TIFF data! (First offset not 8)", oFile.getShortAt(iTIFFOffset + 4, bBigEnd));
                return false;
            }

            var oTags = readTags(oFile, iTIFFOffset, iTIFFOffset + 8, EXIF.TiffTags, bBigEnd);

            if (oTags.ExifIFDPointer) {
                var oEXIFTags = readTags(oFile, iTIFFOffset, iTIFFOffset + oTags.ExifIFDPointer, EXIF.Tags, bBigEnd);
                for (var strTag in oEXIFTags) {
                    switch (strTag) {
                        case "LightSource" :
                        case "Flash" :
                        case "MeteringMode" :
                        case "ExposureProgram" :
                        case "SensingMethod" :
                        case "SceneCaptureType" :
                        case "SceneType" :
                        case "CustomRendered" :
                        case "WhiteBalance" :
                        case "GainControl" :
                        case "Contrast" :
                        case "Saturation" :
                        case "Sharpness" :
                        case "SubjectDistanceRange" :
                        case "FileSource" :
                            oEXIFTags[strTag] = EXIF.StringValues[strTag][oEXIFTags[strTag]];
                            break;

                        case "ExifVersion" :
                        case "FlashpixVersion" :
                            oEXIFTags[strTag] = String.fromCharCode(oEXIFTags[strTag][0], oEXIFTags[strTag][1], oEXIFTags[strTag][2], oEXIFTags[strTag][3]);
                            break;

                        case "ComponentsConfiguration" :
                            oEXIFTags[strTag] =
                                    EXIF.StringValues.Components[oEXIFTags[strTag][0]]
                                    + EXIF.StringValues.Components[oEXIFTags[strTag][1]]
                                    + EXIF.StringValues.Components[oEXIFTags[strTag][2]]
                                    + EXIF.StringValues.Components[oEXIFTags[strTag][3]];
                            break;
                    }
                    oTags[strTag] = oEXIFTags[strTag];
                }
            }

            if (oTags.GPSInfoIFDPointer) {
                var oGPSTags = readTags(oFile, iTIFFOffset, iTIFFOffset + oTags.GPSInfoIFDPointer, EXIF.GPSTags, bBigEnd);
                for (var strTag in oGPSTags) {
                    switch (strTag) {
                        case "GPSVersionID" :
                            oGPSTags[strTag] = oGPSTags[strTag][0]
                                    + "." + oGPSTags[strTag][1]
                                    + "." + oGPSTags[strTag][2]
                                    + "." + oGPSTags[strTag][3];
                            break;
                    }
                    oTags[strTag] = oGPSTags[strTag];
                }
            }

            return oTags;
        }


        EXIF.getData = function(oImg, fncCallback)
        {
            if (!oImg.complete)
                return false;
            if (!imageHasData(oImg)) {
                getImageData(oImg, fncCallback);
            } else {
                if (fncCallback)
                    fncCallback();
            }
            return true;
        }

        EXIF.getDataFromDataURL = function(oImg, fncCallback)
        {
            if (!oImg.complete)
                return false;
            if (!imageHasData(oImg)) {
                getImageDataFromDataURL(oImg, fncCallback);
            } else {
                if (fncCallback)
                    fncCallback();
            }
            return true;
        }

        EXIF.getTag = function(oImg, strTag)
        {
            if (!imageHasData(oImg))
                return;
            return oImg.exifdata[strTag];
        }

        EXIF.getAllTags = function(oImg)
        {
            if (!imageHasData(oImg))
                return {};
            var oData = oImg.exifdata;
            var oAllTags = {};
            for (var a in oData) {
                if (oData.hasOwnProperty(a)) {
                    oAllTags[a] = oData[a];
                }
            }
            return oAllTags;
        }

        EXIF.pretty = function(oImg)
        {
            if (!imageHasData(oImg))
                return "";
            var oData = oImg.exifdata;
            var strPretty = "";
            for (var a in oData) {
                if (oData.hasOwnProperty(a)) {
                    if (typeof oData[a] == "object") {
                        strPretty += a + " : [" + oData[a].length + " values]\r\n";
                    } else {
                        strPretty += a + " : " + oData[a] + "\r\n";
                    }
                }
            }
            return strPretty;
        }

        EXIF.readFromBinaryFile = function(oFile) {
            return findEXIFinJPEG(oFile);
        }

        function loadAllImages()
        {
            var aImages = document.getElementsByTagName("img");
            for (var i = 0; i < aImages.length; i++) {
                if (aImages[i].getAttribute("exif") == "true") {
                    if (!aImages[i].complete) {
                        addEvent(aImages[i], "load",
                                function() {
                                    EXIF.getData(this);
                                }
                        );
                    } else {
                        EXIF.getData(aImages[i]);
                    }
                }
            }
        }

        // automatically load exif data for all images with exif=true when doc is ready
        jQuery(document).ready(loadAllImages);

        // load data for images manually
        jQuery.fn.exifLoad = function(fncCallback) {
            return this.each(function() {
                EXIF.getData(this, fncCallback)
            });
        }

        // load data for images manually
        jQuery.fn.exifLoadFromDataURL = function(fncCallback) {
            return this.each(function() {
                EXIF.getDataFromDataURL(this, fncCallback)
                return true;
            });
        }

        jQuery.fn.exif = function(strTag) {
            var aStrings = [];
            this.each(function() {
                aStrings.push(EXIF.getTag(this, strTag));
            });
            return aStrings;
        }

        jQuery.fn.exifAll = function() {
            var aStrings = [];
            this.each(function() {
                aStrings.push(EXIF.getAllTags(this));
            });
            return aStrings;
        }

        jQuery.fn.exifPretty = function() {
            var aStrings = [];
            this.each(function() {
                aStrings.push(EXIF.pretty(this));
            });
            return aStrings;
        }


    })();


})();
;/*
 * Copyright (c) 2010 Nick Galbreath
 * http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* base64 encode/decode compatible with window.btoa/atob
 *
 * window.atob/btoa is a Firefox extension to convert binary data (the "b")
 * to base64 (ascii, the "a").
 *
 * It is also found in Safari and Chrome.  It is not available in IE.
 *
 * if (!window.btoa) window.btoa = base64.encode
 * if (!window.atob) window.atob = base64.decode
 *
 * The original spec's for atob/btoa are a bit lacking
 * https://developer.mozilla.org/en/DOM/window.atob
 * https://developer.mozilla.org/en/DOM/window.btoa
 *
 * window.btoa and base64.encode takes a string where charCodeAt is [0,255]
 * If any character is not [0,255], then an DOMException(5) is thrown.
 *
 * window.atob and base64.decode take a base64-encoded string
 * If the input length is not a multiple of 4, or contains invalid characters
 *   then an DOMException(5) is thrown.
 */
var base64 = {};
base64.PADCHAR = '=';
base64.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

base64.makeDOMException = function() {
    // sadly in FF,Safari,Chrome you can't make a DOMException
    var e, tmp;

    try {
        return new DOMException(DOMException.INVALID_CHARACTER_ERR);
    } catch (tmp) {
        // not available, just passback a duck-typed equiv
        // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Error
        // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Error/prototype
        var ex = new Error("DOM Exception 5");

        // ex.number and ex.description is IE-specific.
        ex.code = ex.number = 5;
        ex.name = ex.description = "INVALID_CHARACTER_ERR";

        // Safari/Chrome output format
        ex.toString = function() { return 'Error: ' + ex.name + ': ' + ex.message; };
        return ex;
    }
}

base64.getbyte64 = function(s,i) {
    // This is oddly fast, except on Chrome/V8.
    //  Minimal or no improvement in performance by using a
    //   object with properties mapping chars to value (eg. 'A': 0)
    var idx = base64.ALPHA.indexOf(s.charAt(i));
    if (idx === -1) {
        throw base64.makeDOMException();
    }
    return idx;
}

base64.decode = function(s) {
    // convert to string
    s = '' + s;
    var getbyte64 = base64.getbyte64;
    var pads, i, b10;
    var imax = s.length
    if (imax === 0) {
        return s;
    }

    if (imax % 4 !== 0) {
        throw base64.makeDOMException();
    }

    pads = 0
    if (s.charAt(imax - 1) === base64.PADCHAR) {
        pads = 1;
        if (s.charAt(imax - 2) === base64.PADCHAR) {
            pads = 2;
        }
        // either way, we want to ignore this last block
        imax -= 4;
    }

    var x = [];
    for (i = 0; i < imax; i += 4) {
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) |
            (getbyte64(s,i+2) << 6) | getbyte64(s,i+3);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
    }

    switch (pads) {
    case 1:
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) | (getbyte64(s,i+2) << 6);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
        break;
    case 2:
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12);
        x.push(String.fromCharCode(b10 >> 16));
        break;
    }
    return x.join('');
}

base64.getbyte = function(s,i) {
    var x = s.charCodeAt(i);
    if (x > 255) {
        throw base64.makeDOMException();
    }
    return x;
}

base64.encode = function(s) {
    if (arguments.length !== 1) {
        throw new SyntaxError("Not enough arguments");
    }
    var padchar = base64.PADCHAR;
    var alpha   = base64.ALPHA;
    var getbyte = base64.getbyte;

    var i, b10;
    var x = [];

    // convert to string
    s = '' + s;

    var imax = s.length - s.length % 3;

    if (s.length === 0) {
        return s;
    }
    for (i = 0; i < imax; i += 3) {
        b10 = (getbyte(s,i) << 16) | (getbyte(s,i+1) << 8) | getbyte(s,i+2);
        x.push(alpha.charAt(b10 >> 18));
        x.push(alpha.charAt((b10 >> 12) & 0x3F));
        x.push(alpha.charAt((b10 >> 6) & 0x3f));
        x.push(alpha.charAt(b10 & 0x3f));
    }
    switch (s.length - imax) {
    case 1:
        b10 = getbyte(s,i) << 16;
        x.push(alpha.charAt(b10 >> 18) + alpha.charAt((b10 >> 12) & 0x3F) +
               padchar + padchar);
        break;
    case 2:
        b10 = (getbyte(s,i) << 16) | (getbyte(s,i+1) << 8);
        x.push(alpha.charAt(b10 >> 18) + alpha.charAt((b10 >> 12) & 0x3F) +
               alpha.charAt((b10 >> 6) & 0x3f) + padchar);
        break;
    }
    return x.join('');
}


if (typeof window.btoa === 'undefined') window.btoa = base64.encode
if (typeof window.atob === 'undefined') window.atob = base64.decode;/*
 * jQuery canvasResize plugin
 * 
 * Version: 1.2.0 
 * Date (d/m/y): 02/10/12
 * Update (d/m/y): 14/05/13
 * Original author: @gokercebeci 
 * Licensed under the MIT license
 * - This plugin working with jquery.exif.js 
 *   (It's under the MPL License http://www.nihilogic.dk/licenses/mpl-license.txt)
 * Demo: http://ios6-image-resize.gokercebeci.com/
 * 
 * - I fixed iOS6 Safari's image file rendering issue for large size image (over mega-pixel)
 *   using few functions from https://github.com/stomita/ios-imagefile-megapixel
 *   (detectSubsampling, )
 *   And fixed orientation issue by edited http://blog.nihilogic.dk/2008/05/jquery-exif-data-plugin.html
 *   Thanks, Shinichi Tomita and Jacob Seidelin
 */

(function($) {
    var pluginName = 'canvasResize',
            methods = {
        newsize: function(w, h, W, H, C) {
            var c = C ? 'h' : '';
            if ((W && w > W) || (H && h > H)) {
                var r = w / h;
                if ((r >= 1 || H === 0) && W && !C) {
                    w = W;
                    h = (W / r) >> 0;
                } else if (C && r <= (W / H)) {
                    w = W;
                    h = (W / r) >> 0;
                    c = 'w';
                } else {
                    w = (H * r) >> 0;
                    h = H;
                }
            }
            return {
                'width': w,
                'height': h,
                'cropped': c
            };
        },
        dataURLtoBlob: function(data) {
            var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
            var byteString = atob(data.split(',')[1]);
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var bb = (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
            if (bb) {
                //    console.log('BlobBuilder');        
                bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
                bb.append(ab);
                return bb.getBlob(mimeString);
            } else {
                //    console.log('Blob');  
                bb = new Blob([ab], {
                    'type': (mimeString)
                });
                return bb;
            }
        },
        /**
         * Detect subsampling in loaded image.
         * In iOS, larger images than 2M pixels may be subsampled in rendering.
         */
        detectSubsampling: function(img) {
            var iw = img.width, ih = img.height;
            if (iw * ih > 1048576) { // subsampling may happen over megapixel image
                var canvas = document.createElement('canvas');
                canvas.width = canvas.height = 1;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, -iw + 1, 0);
                // subsampled image becomes half smaller in rendering size.
                // check alpha channel value to confirm image is covering edge pixel or not.
                // if alpha value is 0 image is not covering, hence subsampled.
                return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
            } else {
                return false;
            }
        },
        /**
         * Update the orientation according to the specified rotation angle
         */
        rotate: function(orientation, angle) {
            var o = {
                // nothing
                1: {90: 6, 180: 3, 270: 8},
                // horizontal flip
                2: {90: 7, 180: 4, 270: 5},
                // 180 rotate left
                3: {90: 8, 180: 1, 270: 6},
                // vertical flip
                4: {90: 5, 180: 2, 270: 7},
                // vertical flip + 90 rotate right
                5: {90: 2, 180: 7, 270: 4},
                // 90 rotate right
                6: {90: 3, 180: 8, 270: 1},
                // horizontal flip + 90 rotate right
                7: {90: 4, 180: 5, 270: 2},
                // 90 rotate left
                8: {90: 1, 180: 6, 270: 3}
            };
            return o[orientation][angle] ? o[orientation][angle] : orientation;
        },
        /**
         * Transform canvas coordination according to specified frame size and orientation
         * Orientation value is from EXIF tag
         */
        transformCoordinate: function(canvas, width, height, orientation) {
            //console.log(width, height);
            switch (orientation) {
                case 5:
                case 6:
                case 7:
                case 8:
                    canvas.width = height;
                    canvas.height = width;
                    break;
                default:
                    canvas.width = width;
                    canvas.height = height;
            }
            var ctx = canvas.getContext('2d');
            switch (orientation) {
                case 1:
                    // nothing
                    break;
                case 2:
                    // horizontal flip
                    ctx.translate(width, 0);
                    ctx.scale(-1, 1);
                    break;
                case 3:
                    // 180 rotate left
                    ctx.translate(width, height);
                    ctx.rotate(Math.PI);
                    break;
                case 4:
                    // vertical flip
                    ctx.translate(0, height);
                    ctx.scale(1, -1);
                    break;
                case 5:
                    // vertical flip + 90 rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.scale(1, -1);
                    break;
                case 6:
                    // 90 rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.translate(0, -height);
                    break;
                case 7:
                    // horizontal flip + 90 rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.translate(width, -height);
                    ctx.scale(-1, 1);
                    break;
                case 8:
                    // 90 rotate left
                    ctx.rotate(-0.5 * Math.PI);
                    ctx.translate(-width, 0);
                    break;
                default:
                    break;
            }
        },
        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         */
        detectVerticalSquash: function(img, iw, ih) {
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, 1, ih).data;
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        },
        callback: function(d) {
            return d;
        }
    },
    defaults = {
        width: 300,
        height: 0,
        crop: false,
        quality: 80,
        'callback': methods.callback
    };
    function Plugin(file, options) {
        this.file = file;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            //this.options.init(this);
            var $this = this;
            var file = this.file;

            var reader = new FileReader();
            reader.onloadend = function(e) {
                var dataURL = e.target.result;
                var img = new Image();
                img.onload = function(e) {
                    // Read Orientation Data in EXIF
                    $(img).exifLoadFromDataURL(function() {
                        var orientation = $(img).exif('Orientation')[0] || 1;
                        orientation = methods.rotate(orientation, $this.options.rotate);

                        // CW or CCW ? replace width and height
                        var size = (orientation >= 5 && orientation <= 8)
                                ? methods.newsize(img.height, img.width, $this.options.width, $this.options.height, $this.options.crop)
                                : methods.newsize(img.width, img.height, $this.options.width, $this.options.height, $this.options.crop);

                        var iw = img.width, ih = img.height;
                        var width = size.width, height = size.height;

                        //console.log(iw, ih, size.width, size.height, orientation);

                        var canvas = document.createElement("canvas");
                        var ctx = canvas.getContext("2d");
                        ctx.save();
                        methods.transformCoordinate(canvas, width, height, orientation);

                        // over image size
                        if (methods.detectSubsampling(img)) {
                            iw /= 2;
                            ih /= 2;
                        }
                        var d = 1024; // size of tiling canvas
                        var tmpCanvas = document.createElement('canvas');
                        tmpCanvas.width = tmpCanvas.height = d;
                        var tmpCtx = tmpCanvas.getContext('2d');
                        var vertSquashRatio = methods.detectVerticalSquash(img, iw, ih);
                        var sy = 0;
                        while (sy < ih) {
                            var sh = sy + d > ih ? ih - sy : d;
                            var sx = 0;
                            while (sx < iw) {
                                var sw = sx + d > iw ? iw - sx : d;
                                tmpCtx.clearRect(0, 0, d, d);
                                tmpCtx.drawImage(img, -sx, -sy);
                                var dx = Math.floor(sx * width / iw);
                                var dw = Math.ceil(sw * width / iw);
                                var dy = Math.floor(sy * height / ih / vertSquashRatio);
                                var dh = Math.ceil(sh * height / ih / vertSquashRatio);
                                ctx.drawImage(tmpCanvas, 0, 0, sw, sh, dx, dy, dw, dh);
                                sx += d;
                            }
                            sy += d;
                        }
                        ctx.restore();
                        tmpCanvas = tmpCtx = null;

                        // if cropped or rotated width and height data replacing issue 
                        var newcanvas = document.createElement('canvas');
                        newcanvas.width = size.cropped === 'h' ? height : width;
                        newcanvas.height = size.cropped === 'w' ? width : height;
                        var x = size.cropped === 'h' ? (height - width) * .5 : 0;
                        var y = size.cropped === 'w' ? (width - height) * .5 : 0;
                        newctx = newcanvas.getContext('2d');
                        newctx.drawImage(canvas, x, y, width, height);

                        if (file.type === "image/png") {
                            var data = newcanvas.toDataURL(file.type);
                        } else {
                            var data = newcanvas.toDataURL("image/jpeg", ($this.options.quality * .01));
                        }

                        // CALLBACK
                        $this.options.callback(data, width, height);

                    });
                };
                img.src = dataURL;
                // =====================================================
            };
            reader.readAsDataURL(file);

        }
    };
    $[pluginName] = function(file, options) {
        if (typeof file === 'string')
            return methods[file](options);
        else
            new Plugin(file, options);
    };

})(jQuery);;/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

var MD5 = (function() {
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return [a, b, c, d];
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t) {
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t) {
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data) {
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * MD5.chrsz);

  var ipad = [], opad = [];
  for(var i = 0; i < 16; i++) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * MD5.chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str) {
  var bin = [], chrsz = MD5.chrsz;
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin) {
  var str = "", chrsz = MD5.chrsz;
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray) {
  var hex_tab = MD5.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3) {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++) {
      if(i * 8 + j * 6 > binarray.length * 32) str += MD5.b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

  return {
/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
    hexcase: 0, // hex output format. 0 - lowercase; 1 - uppercase
    b64pad: "", // base-64 pad character. "=" for strict RFC compliance
    chrsz: 8,   // bits per input character. 8 - ASCII; 16 - Unicode

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
    hex:function( s ) { 
      return binl2hex( core_md5( str2binl( s ), s.length * MD5.chrsz ) );
    },

    base64:function( s ) {
      return binl2b64( core_md5( str2binl( s ), s.length * MD5.chrsz ) );
    },

    string:function( s ) {
      return binl2str( core_md5( str2binl( s ), s.length * MD5.chrsz ) );
    },

    hmac:{
      hex:function( key, data ) {
        return binl2hex( core_hmac_md5( key, data ) );
      },

      base64:function( key, data ) {
        return binl2b64( core_hmac_md5( key, data ) );
      },

      string:function( key, data ) {
        return binl2str( core_hmac_md5( key, data ) );
      }
    },

    test:function() { // Perform a simple self-test to see if the VM is working
      return this.hex("abc") == "900150983cd24fb0d6963f7d28e17f72";
    }
  };
})();
;/**
 * easyXDM
 * http://easyxdm.net/
 * Copyright(c) 2009-2011, Ã˜yvind Sean Kinsey, oyvind@kinsey.no.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(N,d,p,K,k,H){var b=this;var n=Math.floor(Math.random()*10000);var q=Function.prototype;var Q=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;var R=/[\-\w]+\/\.\.\//;var F=/([^:])\/\//g;var I="";var o={};var M=N.easyXDM;var U="easyXDM_";var E;var y=false;var i;var h;function C(X,Z){var Y=typeof X[Z];return Y=="function"||(!!(Y=="object"&&X[Z]))||Y=="unknown"}function u(X,Y){return !!(typeof(X[Y])=="object"&&X[Y])}function r(X){return Object.prototype.toString.call(X)==="[object Array]"}function c(){var Z="Shockwave Flash",ad="application/x-shockwave-flash";if(!t(navigator.plugins)&&typeof navigator.plugins[Z]=="object"){var ab=navigator.plugins[Z].description;if(ab&&!t(navigator.mimeTypes)&&navigator.mimeTypes[ad]&&navigator.mimeTypes[ad].enabledPlugin){i=ab.match(/\d+/g)}}if(!i){var Y;try{Y=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");i=Array.prototype.slice.call(Y.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);Y=null}catch(ac){}}if(!i){return false}var X=parseInt(i[0],10),aa=parseInt(i[1],10);h=X>9&&aa>0;return true}var v,x;if(C(N,"addEventListener")){v=function(Z,X,Y){Z.addEventListener(X,Y,false)};x=function(Z,X,Y){Z.removeEventListener(X,Y,false)}}else{if(C(N,"attachEvent")){v=function(X,Z,Y){X.attachEvent("on"+Z,Y)};x=function(X,Z,Y){X.detachEvent("on"+Z,Y)}}else{throw new Error("Browser not supported")}}var W=false,J=[],L;if("readyState" in d){L=d.readyState;W=L=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(L=="loaded"||L=="interactive"))}else{W=!!d.body}function s(){if(W){return}W=true;for(var X=0;X<J.length;X++){J[X]()}J.length=0}if(!W){if(C(N,"addEventListener")){v(d,"DOMContentLoaded",s)}else{v(d,"readystatechange",function(){if(d.readyState=="complete"){s()}});if(d.documentElement.doScroll&&N===top){var g=function(){if(W){return}try{d.documentElement.doScroll("left")}catch(X){K(g,1);return}s()};g()}}v(N,"load",s)}function G(Y,X){if(W){Y.call(X);return}J.push(function(){Y.call(X)})}function m(){var Z=parent;if(I!==""){for(var X=0,Y=I.split(".");X<Y.length;X++){Z=Z[Y[X]]}}return Z.easyXDM}function e(X){N.easyXDM=M;I=X;if(I){U="easyXDM_"+I.replace(".","_")+"_"}return o}function z(X){return X.match(Q)[3]}function f(X){return X.match(Q)[4]||""}function j(Z){var X=Z.toLowerCase().match(Q);var aa=X[2],ab=X[3],Y=X[4]||"";if((aa=="http:"&&Y==":80")||(aa=="https:"&&Y==":443")){Y=""}return aa+"//"+ab+Y}function B(X){X=X.replace(F,"$1/");if(!X.match(/^(http||https):\/\//)){var Y=(X.substring(0,1)==="/")?"":p.pathname;if(Y.substring(Y.length-1)!=="/"){Y=Y.substring(0,Y.lastIndexOf("/")+1)}X=p.protocol+"//"+p.host+Y+X}while(R.test(X)){X=X.replace(R,"")}return X}function P(X,aa){var ac="",Z=X.indexOf("#");if(Z!==-1){ac=X.substring(Z);X=X.substring(0,Z)}var ab=[];for(var Y in aa){if(aa.hasOwnProperty(Y)){ab.push(Y+"="+H(aa[Y]))}}return X+(y?"#":(X.indexOf("?")==-1?"?":"&"))+ab.join("&")+ac}var S=(function(X){X=X.substring(1).split("&");var Z={},aa,Y=X.length;while(Y--){aa=X[Y].split("=");Z[aa[0]]=k(aa[1])}return Z}(/xdm_e=/.test(p.search)?p.search:p.hash));function t(X){return typeof X==="undefined"}var O=function(){var Y={};var Z={a:[1,2,3]},X='{"a":[1,2,3]}';if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(Z).replace((/\s/g),"")===X){return JSON}if(Object.toJSON){if(Object.toJSON(Z).replace((/\s/g),"")===X){Y.stringify=Object.toJSON}}if(typeof String.prototype.evalJSON==="function"){Z=X.evalJSON();if(Z.a&&Z.a.length===3&&Z.a[2]===3){Y.parse=function(aa){return aa.evalJSON()}}}if(Y.stringify&&Y.parse){O=function(){return Y};return Y}return null};function T(X,Y,Z){var ab;for(var aa in Y){if(Y.hasOwnProperty(aa)){if(aa in X){ab=Y[aa];if(typeof ab==="object"){T(X[aa],ab,Z)}else{if(!Z){X[aa]=Y[aa]}}}else{X[aa]=Y[aa]}}}return X}function a(){var Y=d.body.appendChild(d.createElement("form")),X=Y.appendChild(d.createElement("input"));X.name=U+"TEST"+n;E=X!==Y.elements[X.name];d.body.removeChild(Y)}function A(Y){if(t(E)){a()}var ac;if(E){ac=d.createElement('<iframe name="'+Y.props.name+'"/>')}else{ac=d.createElement("IFRAME");ac.name=Y.props.name}ac.id=ac.name=Y.props.name;delete Y.props.name;if(typeof Y.container=="string"){Y.container=d.getElementById(Y.container)}if(!Y.container){T(ac.style,{position:"absolute",top:"-2000px",left:"0px"});Y.container=d.body}var ab=Y.props.src;Y.props.src="javascript:false";T(ac,Y.props);ac.border=ac.frameBorder=0;ac.allowTransparency=true;Y.container.appendChild(ac);if(Y.onLoad){v(ac,"load",Y.onLoad)}if(Y.usePost){var aa=Y.container.appendChild(d.createElement("form")),X;aa.target=ac.name;aa.action=ab;aa.method="POST";if(typeof(Y.usePost)==="object"){for(var Z in Y.usePost){if(Y.usePost.hasOwnProperty(Z)){if(E){X=d.createElement('<input name="'+Z+'"/>')}else{X=d.createElement("INPUT");X.name=Z}X.value=Y.usePost[Z];aa.appendChild(X)}}}aa.submit();aa.parentNode.removeChild(aa)}else{ac.src=ab}Y.props.src=ab;return ac}function V(aa,Z){if(typeof aa=="string"){aa=[aa]}var Y,X=aa.length;while(X--){Y=aa[X];Y=new RegExp(Y.substr(0,1)=="^"?Y:("^"+Y.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));if(Y.test(Z)){return true}}return false}function l(Z){var ae=Z.protocol,Y;Z.isHost=Z.isHost||t(S.xdm_p);y=Z.hash||false;if(!Z.props){Z.props={}}if(!Z.isHost){Z.channel=S.xdm_c.replace(/["'<>\\]/g,"");Z.secret=S.xdm_s;Z.remote=S.xdm_e.replace(/["'<>\\]/g,"");ae=S.xdm_p;if(Z.acl&&!V(Z.acl,Z.remote)){throw new Error("Access denied for "+Z.remote)}}else{Z.remote=B(Z.remote);Z.channel=Z.channel||"default"+n++;Z.secret=Math.random().toString(16).substring(2);if(t(ae)){if(j(p.href)==j(Z.remote)){ae="4"}else{if(C(N,"postMessage")||C(d,"postMessage")){ae="1"}else{if(Z.swf&&C(N,"ActiveXObject")&&c()){ae="6"}else{if(navigator.product==="Gecko"&&"frameElement" in N&&navigator.userAgent.indexOf("WebKit")==-1){ae="5"}else{if(Z.remoteHelper){ae="2"}else{ae="0"}}}}}}}Z.protocol=ae;switch(ae){case"0":T(Z,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);if(Z.isHost){if(!Z.local){var ac=p.protocol+"//"+p.host,X=d.body.getElementsByTagName("img"),ad;var aa=X.length;while(aa--){ad=X[aa];if(ad.src.substring(0,ac.length)===ac){Z.local=ad.src;break}}if(!Z.local){Z.local=N}}var ab={xdm_c:Z.channel,xdm_p:0};if(Z.local===N){Z.usePolling=true;Z.useParent=true;Z.local=p.protocol+"//"+p.host+p.pathname+p.search;ab.xdm_e=Z.local;ab.xdm_pa=1}else{ab.xdm_e=B(Z.local)}if(Z.container){Z.useResize=false;ab.xdm_po=1}Z.remote=P(Z.remote,ab)}else{T(Z,{channel:S.xdm_c,remote:S.xdm_e,useParent:!t(S.xdm_pa),usePolling:!t(S.xdm_po),useResize:Z.useParent?false:Z.useResize})}Y=[new o.stack.HashTransport(Z),new o.stack.ReliableBehavior({}),new o.stack.QueueBehavior({encode:true,maxLength:4000-Z.remote.length}),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"1":Y=[new o.stack.PostMessageTransport(Z)];break;case"2":Z.remoteHelper=B(Z.remoteHelper);Y=[new o.stack.NameTransport(Z),new o.stack.QueueBehavior(),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"3":Y=[new o.stack.NixTransport(Z)];break;case"4":Y=[new o.stack.SameOriginTransport(Z)];break;case"5":Y=[new o.stack.FrameElementTransport(Z)];break;case"6":if(!i){c()}Y=[new o.stack.FlashTransport(Z)];break}Y.push(new o.stack.QueueBehavior({lazy:Z.lazy,remove:true}));return Y}function D(aa){var ab,Z={incoming:function(ad,ac){this.up.incoming(ad,ac)},outgoing:function(ac,ad){this.down.outgoing(ac,ad)},callback:function(ac){this.up.callback(ac)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}};for(var Y=0,X=aa.length;Y<X;Y++){ab=aa[Y];T(ab,Z,true);if(Y!==0){ab.down=aa[Y-1]}if(Y!==X-1){ab.up=aa[Y+1]}}return ab}function w(X){X.up.down=X.down;X.down.up=X.up;X.up=X.down=null}T(o,{version:"2.4.17.1",query:S,stack:{},apply:T,getJSONObject:O,whenReady:G,noConflict:e});o.DomHelper={on:v,un:x,requiresJSON:function(X){if(!u(N,"JSON")){d.write('<script type="text/javascript" src="'+X+'"><\/script>')}}};(function(){var X={};o.Fn={set:function(Y,Z){X[Y]=Z},get:function(Z,Y){var aa=X[Z];if(Y){delete X[Z]}return aa}}}());o.Socket=function(Y){var X=D(l(Y).concat([{incoming:function(ab,aa){Y.onMessage(ab,aa)},callback:function(aa){if(Y.onReady){Y.onReady(aa)}}}])),Z=j(Y.remote);this.origin=j(Y.remote);this.destroy=function(){X.destroy()};this.postMessage=function(aa){X.outgoing(aa,Z)};X.init()};o.Rpc=function(Z,Y){if(Y.local){for(var ab in Y.local){if(Y.local.hasOwnProperty(ab)){var aa=Y.local[ab];if(typeof aa==="function"){Y.local[ab]={method:aa}}}}}var X=D(l(Z).concat([new o.stack.RpcBehavior(this,Y),{callback:function(ac){if(Z.onReady){Z.onReady(ac)}}}]));this.origin=j(Z.remote);this.destroy=function(){X.destroy()};X.init()};o.stack.SameOriginTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa(ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:p.protocol+"//"+p.host+p.pathname,xdm_c:Y.channel,xdm_p:4}),name:U+Y.channel+"_provider"});ab=A(Y);o.Fn.set(Y.channel,function(ac){aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}})}else{aa=m().Fn.get(Y.channel,true)(function(ac){Z.up.incoming(ac,X)});K(function(){Z.up.callback(true)},0)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.FlashTransport=function(aa){var ac,X,ab,ad,Y,ae;function af(ah,ag){K(function(){ac.up.incoming(ah,ad)},0)}function Z(ah){var ag=aa.swf+"?host="+aa.isHost;var aj="easyXDM_swf_"+Math.floor(Math.random()*10000);o.Fn.set("flash_loaded"+ah.replace(/[\-.]/g,"_"),function(){o.stack.FlashTransport[ah].swf=Y=ae.firstChild;var ak=o.stack.FlashTransport[ah].queue;for(var al=0;al<ak.length;al++){ak[al]()}ak.length=0});if(aa.swfContainer){ae=(typeof aa.swfContainer=="string")?d.getElementById(aa.swfContainer):aa.swfContainer}else{ae=d.createElement("div");T(ae.style,h&&aa.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});d.body.appendChild(ae)}var ai="callback=flash_loaded"+ah.replace(/[\-.]/g,"_")+"&proto="+b.location.protocol+"&domain="+z(b.location.href)+"&port="+f(b.location.href)+"&ns="+I;ae.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+aj+"' data='"+ag+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+ag+"'></param><param name='flashvars' value='"+ai+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+ai+"' allowScriptAccess='always' wmode='transparent' src='"+ag+"' height='1' width='1'></embed></object>"}return(ac={outgoing:function(ah,ai,ag){Y.postMessage(aa.channel,ah.toString());if(ag){ag()}},destroy:function(){try{Y.destroyChannel(aa.channel)}catch(ag){}Y=null;if(X){X.parentNode.removeChild(X);X=null}},onDOMReady:function(){ad=aa.remote;o.Fn.set("flash_"+aa.channel+"_init",function(){K(function(){ac.up.callback(true)})});o.Fn.set("flash_"+aa.channel+"_onMessage",af);aa.swf=B(aa.swf);var ah=z(aa.swf);var ag=function(){o.stack.FlashTransport[ah].init=true;Y=o.stack.FlashTransport[ah].swf;Y.createChannel(aa.channel,aa.secret,j(aa.remote),aa.isHost);if(aa.isHost){if(h&&aa.swfNoThrottle){T(aa.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})}T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:6,xdm_s:aa.secret}),name:U+aa.channel+"_provider"});X=A(aa)}};if(o.stack.FlashTransport[ah]&&o.stack.FlashTransport[ah].init){ag()}else{if(!o.stack.FlashTransport[ah]){o.stack.FlashTransport[ah]={queue:[ag]};Z(ah)}else{o.stack.FlashTransport[ah].queue.push(ag)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.PostMessageTransport=function(aa){var ac,ad,Y,Z;function X(ae){if(ae.origin){return j(ae.origin)}if(ae.uri){return j(ae.uri)}if(ae.domain){return p.protocol+"//"+ae.domain}throw"Unable to retrieve the origin of the event"}function ab(af){var ae=X(af);if(ae==Z&&af.data.substring(0,aa.channel.length+1)==aa.channel+" "){ac.up.incoming(af.data.substring(aa.channel.length+1),ae)}}return(ac={outgoing:function(af,ag,ae){Y.postMessage(aa.channel+" "+af,ag||Z);if(ae){ae()}},destroy:function(){x(N,"message",ab);if(ad){Y=null;ad.parentNode.removeChild(ad);ad=null}},onDOMReady:function(){Z=j(aa.remote);if(aa.isHost){var ae=function(af){if(af.data==aa.channel+"-ready"){Y=("postMessage" in ad.contentWindow)?ad.contentWindow:ad.contentWindow.document;x(N,"message",ae);v(N,"message",ab);K(function(){ac.up.callback(true)},0)}};v(N,"message",ae);T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:1}),name:U+aa.channel+"_provider"});ad=A(aa)}else{v(N,"message",ab);Y=("postMessage" in N.parent)?N.parent:N.parent.document;Y.postMessage(aa.channel+"-ready",Z);K(function(){ac.up.callback(true)},0)}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.FrameElementTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa.call(this,ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:j(p.href),xdm_c:Y.channel,xdm_p:5}),name:U+Y.channel+"_provider"});ab=A(Y);ab.fn=function(ac){delete ab.fn;aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}}}else{if(d.referrer&&j(d.referrer)!=S.xdm_e){N.top.location=S.xdm_e}aa=N.frameElement.fn(function(ac){Z.up.incoming(ac,X)});Z.up.callback(true)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.NameTransport=function(ab){var ac;var ae,ai,aa,ag,ah,Y,X;function af(al){var ak=ab.remoteHelper+(ae?"#_3":"#_2")+ab.channel;ai.contentWindow.sendMessage(al,ak)}function ad(){if(ae){if(++ag===2||!ae){ac.up.callback(true)}}else{af("ready");ac.up.callback(true)}}function aj(ak){ac.up.incoming(ak,Y)}function Z(){if(ah){K(function(){ah(true)},0)}}return(ac={outgoing:function(al,am,ak){ah=ak;af(al)},destroy:function(){ai.parentNode.removeChild(ai);ai=null;if(ae){aa.parentNode.removeChild(aa);aa=null}},onDOMReady:function(){ae=ab.isHost;ag=0;Y=j(ab.remote);ab.local=B(ab.local);if(ae){o.Fn.set(ab.channel,function(al){if(ae&&al==="ready"){o.Fn.set(ab.channel,aj);ad()}});X=P(ab.remote,{xdm_e:ab.local,xdm_c:ab.channel,xdm_p:2});T(ab.props,{src:X+"#"+ab.channel,name:U+ab.channel+"_provider"});aa=A(ab)}else{ab.remoteHelper=ab.remote;o.Fn.set(ab.channel,aj)}var ak=function(){var al=ai||this;x(al,"load",ak);o.Fn.set(ab.channel+"_load",Z);(function am(){if(typeof al.contentWindow.sendMessage=="function"){ad()}else{K(am,50)}}())};ai=A({props:{src:ab.local+"#_4"+ab.channel},onLoad:ak})},init:function(){G(ac.onDOMReady,ac)}})};o.stack.HashTransport=function(Z){var ac;var ah=this,af,aa,X,ad,am,ab,al;var ag,Y;function ak(ao){if(!al){return}var an=Z.remote+"#"+(am++)+"_"+ao;((af||!ag)?al.contentWindow:al).location=an}function ae(an){ad=an;ac.up.incoming(ad.substring(ad.indexOf("_")+1),Y)}function aj(){if(!ab){return}var an=ab.location.href,ap="",ao=an.indexOf("#");if(ao!=-1){ap=an.substring(ao)}if(ap&&ap!=ad){ae(ap)}}function ai(){aa=setInterval(aj,X)}return(ac={outgoing:function(an,ao){ak(an)},destroy:function(){N.clearInterval(aa);if(af||!ag){al.parentNode.removeChild(al)}al=null},onDOMReady:function(){af=Z.isHost;X=Z.interval;ad="#"+Z.channel;am=0;ag=Z.useParent;Y=j(Z.remote);if(af){T(Z.props,{src:Z.remote,name:U+Z.channel+"_provider"});if(ag){Z.onLoad=function(){ab=N;ai();ac.up.callback(true)}}else{var ap=0,an=Z.delay/50;(function ao(){if(++ap>an){throw new Error("Unable to reference listenerwindow")}try{ab=al.contentWindow.frames[U+Z.channel+"_consumer"]}catch(aq){}if(ab){ai();ac.up.callback(true)}else{K(ao,50)}}())}al=A(Z)}else{ab=N;ai();if(ag){al=parent;ac.up.callback(true)}else{T(Z,{props:{src:Z.remote+"#"+Z.channel+new Date(),name:U+Z.channel+"_consumer"},onLoad:function(){ac.up.callback(true)}});al=A(Z)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.ReliableBehavior=function(Y){var aa,ac;var ab=0,X=0,Z="";return(aa={incoming:function(af,ad){var ae=af.indexOf("_"),ag=af.substring(0,ae).split(",");af=af.substring(ae+1);if(ag[0]==ab){Z="";if(ac){ac(true);ac=null}}if(af.length>0){aa.down.outgoing(ag[1]+","+ab+"_"+Z,ad);if(X!=ag[1]){X=ag[1];aa.up.incoming(af,ad)}}},outgoing:function(af,ad,ae){Z=af;ac=ae;aa.down.outgoing(X+","+(++ab)+"_"+af,ad)}})};o.stack.QueueBehavior=function(Z){var ac,ad=[],ag=true,aa="",af,X=0,Y=false,ab=false;function ae(){if(Z.remove&&ad.length===0){w(ac);return}if(ag||ad.length===0||af){return}ag=true;var ah=ad.shift();ac.down.outgoing(ah.data,ah.origin,function(ai){ag=false;if(ah.callback){K(function(){ah.callback(ai)},0)}ae()})}return(ac={init:function(){if(t(Z)){Z={}}if(Z.maxLength){X=Z.maxLength;ab=true}if(Z.lazy){Y=true}else{ac.down.init()}},callback:function(ai){ag=false;var ah=ac.up;ae();ah.callback(ai)},incoming:function(ak,ai){if(ab){var aj=ak.indexOf("_"),ah=parseInt(ak.substring(0,aj),10);aa+=ak.substring(aj+1);if(ah===0){if(Z.encode){aa=k(aa)}ac.up.incoming(aa,ai);aa=""}}else{ac.up.incoming(ak,ai)}},outgoing:function(al,ai,ak){if(Z.encode){al=H(al)}var ah=[],aj;if(ab){while(al.length!==0){aj=al.substring(0,X);al=al.substring(aj.length);ah.push(aj)}while((aj=ah.shift())){ad.push({data:ah.length+"_"+aj,origin:ai,callback:ah.length===0?ak:null})}}else{ad.push({data:al,origin:ai,callback:ak})}if(Y){ac.down.init()}else{ae()}},destroy:function(){af=true;ac.down.destroy()}})};o.stack.VerifyBehavior=function(ab){var ac,aa,Y,Z=false;function X(){aa=Math.random().toString(16).substring(2);ac.down.outgoing(aa)}return(ac={incoming:function(af,ad){var ae=af.indexOf("_");if(ae===-1){if(af===aa){ac.up.callback(true)}else{if(!Y){Y=af;if(!ab.initiate){X()}ac.down.outgoing(af)}}}else{if(af.substring(0,ae)===Y){ac.up.incoming(af.substring(ae+1),ad)}}},outgoing:function(af,ad,ae){ac.down.outgoing(aa+"_"+af,ad,ae)},callback:function(ad){if(ab.initiate){X()}}})};o.stack.RpcBehavior=function(ad,Y){var aa,af=Y.serializer||O();var ae=0,ac={};function X(ag){ag.jsonrpc="2.0";aa.down.outgoing(af.stringify(ag))}function ab(ag,ai){var ah=Array.prototype.slice;return function(){var aj=arguments.length,al,ak={method:ai};if(aj>0&&typeof arguments[aj-1]==="function"){if(aj>1&&typeof arguments[aj-2]==="function"){al={success:arguments[aj-2],error:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-2)}else{al={success:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-1)}ac[""+(++ae)]=al;ak.id=ae}else{ak.params=ah.call(arguments,0)}if(ag.namedParams&&ak.params.length===1){ak.params=ak.params[0]}X(ak)}}function Z(an,am,ai,al){if(!ai){if(am){X({id:am,error:{code:-32601,message:"Procedure not found."}})}return}var ak,ah;if(am){ak=function(ao){ak=q;X({id:am,result:ao})};ah=function(ao,ap){ah=q;var aq={id:am,error:{code:-32099,message:ao}};if(ap){aq.error.data=ap}X(aq)}}else{ak=ah=q}if(!r(al)){al=[al]}try{var ag=ai.method.apply(ai.scope,al.concat([ak,ah]));if(!t(ag)){ak(ag)}}catch(aj){ah(aj.message)}}return(aa={incoming:function(ah,ag){var ai=af.parse(ah);if(ai.method){if(Y.handle){Y.handle(ai,X)}else{Z(ai.method,ai.id,Y.local[ai.method],ai.params)}}else{var aj=ac[ai.id];if(ai.error){if(aj.error){aj.error(ai.error)}}else{if(aj.success){aj.success(ai.result)}}delete ac[ai.id]}},init:function(){if(Y.remote){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)){ad[ag]=ab(Y.remote[ag],ag)}}}aa.down.init()},destroy:function(){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)&&ad.hasOwnProperty(ag)){delete ad[ag]}}aa.down.destroy()}})};b.easyXDM=o})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);;/*
    http://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
;// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.3.5 2016-11-14*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
define(function () {
    'use strict';

    var impl = {};

    impl.mobileDetectRules = {
    "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
        "Samsung": "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "NokiaLumia": "Lumia [0-9]{3,4}",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo 3DS",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
    },
    "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "NokiaLumiaTablet": "Lumia 2520",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android.*\\bG1\\b",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9",
        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "KocasoTablet": "\\b(TB-1207)\\b",
        "HisenseTablet": "\\b(F5281|E2371)\\b",
        "Hudl": "Hudl HT7S3|Hudl 2",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b"
    },
    "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
    },
    "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "Edge": "Mobile Safari\/[.0-9]* Edge",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Puffin": "Puffin",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
    },
    "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": [
            "Chrome\/[VER]",
            "CriOS\/[VER]",
            "CrMo\/[VER]"
        ],
        "Coast": [
            "Coast\/[VER]"
        ],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": [
            "Firefox\/[VER]",
            "FxiOS\/[VER]"
        ],
        "Fennec": "Fennec\/[VER]",
        "Edge": "Edge\/[VER]",
        "IE": [
            "IEMobile\/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];",
            "Trident\/[0-9.]+;.*rv:[VER]"
        ],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [
            " OPR\/[VER]",
            "Opera Mini\/[VER]",
            "Version\/[VER]"
        ],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UC Browser": "UC Browser[VER]",
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "SamsungBrowser": "SamsungBrowser\/[VER]",
        "Iron": "Iron\/[VER]",
        "Safari": [
            "Version\/[VER]",
            "Safari\/[VER]"
        ],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "PaleMoon": "PaleMoon\/[VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "Goanna": "Goanna\/[VER]",
        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
        "Android": "Android [VER]",
        "BlackBerry": [
            "BlackBerry[\\w]+\/[VER]",
            "BlackBerry.*Version\/[VER]",
            "Version\/[VER]"
        ],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": [
            "Windows Phone OS [VER]",
            "Windows Phone [VER]"
        ],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": [
            "SymbianOS\/[VER]",
            "Symbian\/[VER]"
        ],
        "webOS": [
            "webOS\/[VER]",
            "hpwOS\/[VER];"
        ]
    },
    "utils": {
        "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
    }
};

    // following patterns come from http://detectmobilebrowsers.com/
    impl.detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
    };

    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;

    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';

    isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

    function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function containsIC(array, value) {
        var valueLC, i, len = array.length;
        if (!len || !value) {
            return false;
        }
        valueLC = value.toLowerCase();
        for (i = 0; i < len; ++i) {
            if (valueLC === array[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function convertPropsToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }

    (function init() {
        var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);

        // copy some patterns to oss0 which are tested first (see issue#15)
        mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
        };
    }());

    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    impl.findMatch = function(rules, userAgent) {
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    };

    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */
    impl.findMatches = function(rules, userAgent) {
        var result = [];
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    result.push(key);
                }
            }
        }
        return result;
    };

    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    impl.getVersionStr = function (propertyName, userAgent) {
        var props = impl.mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    };

    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    impl.getVersion = function (propertyName, userAgent) {
        var version = impl.getVersionStr(propertyName, userAgent);
        return version ? impl.prepareVersionNo(version) : NaN;
    };

    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    impl.prepareVersionNo = function (version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    };

    impl.isMobileFallback = function (userAgent) {
        return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
            impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
    };

    impl.isTabletFallback = function (userAgent) {
        return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };

    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
            return;
        }
        var phone, tablet, phoneSized;

        // first check for stronger tablet rules, then phone (see issue#5)
        tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
        if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
        }

        phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
        if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
        }

        // our rules haven't found a match -> try more general fallback rules
        if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined) {
                cache.mobile = impl.FALLBACK_MOBILE;
                cache.tablet = cache.phone = null;
            } else if (phoneSized) {
                cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                cache.tablet = null;
            } else {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            }
        } else if (impl.isTabletFallback(userAgent)) {
            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
            cache.phone = null;
        } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
        }
    };

    // t is a reference to a MobileDetect instance
    impl.mobileGrade = function (t) {
        // impl note:
        // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
        // When changes are made in Mobile_Detect.php, copy this method and replace:
        //     $this-> / t.
        //     self::MOBILE_GRADE_(.) / '$1'
        //     , self::VERSION_TYPE_FLOAT / (nothing)
        //     isIOS() / os('iOS')
        //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
        var $isMobile = t.mobile() !== null;

        if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad')>=4.3 ||
            t.os('iOS') && t.version('iPhone')>=3.1 ||
            t.os('iOS') && t.version('iPod')>=3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            ( t.version('Android')>2.1 && t.is('Webkit') ) ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS')>=7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            ( t.is('Firefox') && t.version('Firefox')>=12 ) ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada')>=2.0 ||

            // UC Browser - Tested on Android 2.3 device
            ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            ( t.match('Kindle Fire') ||
                t.is('Kindle') && t.version('Kindle')>=3.0 ) ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome')>=11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari')>=5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox')>=4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE')>=7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera')>=10 && !$isMobile

            ){
            return 'A';
        }

        if (
            t.os('iOS') && t.version('iPad')<4.3 ||
            t.os('iOS') && t.version('iPhone')<3.1 ||
            t.os('iOS') && t.version('iPod')<3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
                (t.version('Android')>=2.3 || t.is('iOS')) ) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi')>=11 && t.is('SymbianOS')
            ){
            return 'B';
        }

        if (
        // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry')<5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2

            ){
            return 'C';
        }

        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
        //will receive the basic, C grade experience.
        return 'C';
    };

    impl.detectOS = function (ua) {
        return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
            impl.findMatch(impl.mobileDetectRules.oss, ua);
    };

    impl.getDeviceSmallerSide = function () {
        return window.screen.width < window.screen.height ?
            window.screen.width :
            window.screen.height;
    };

    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = userAgent || '';
        this._cache = {};
        //600dp is typical 7" tablet minimum width
        this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
        constructor: MobileDetect,

        /**
         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
         * <br>
         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
         * <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
         * @function MobileDetect#mobile
         */
        mobile: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
        },

        /**
         * Returns the detected phone type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
         * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
         * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
         * @function MobileDetect#phone
         */
        phone: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
        },

        /**
         * Returns the detected tablet type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
         * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
         * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
         * DellTablet, YarvikTablet, MedionTablet, ArnovaTablet, IntensoTablet, IRUTablet,
         * MegafonTablet, EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet,
         * NokiaLumiaTablet, SonyTablet, PhilipsTablet, CubeTablet, CobyTablet, MIDTablet,
         * MSITablet, SMiTTablet, RockChipTablet, FlyTablet, bqTablet, HuaweiTablet,
         * NecTablet, PantechTablet, BronchoTablet, VersusTablet, ZyncTablet,
         * PositivoTablet, NabiTablet, KoboTablet, DanewTablet, TexetTablet,
         * PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
         * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
         * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
         * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
         * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
         * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
         * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
         * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
         * OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet, OndaTablet,
         * JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet, LavaTablet,
         * AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MiTablet, NibiruTablet,
         * NexoTablet, LeaderTablet, UbislateTablet, PocketBookTablet, KocasoTablet,
         * HisenseTablet, Hudl, TelstraTablet, GenericTablet</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
         * @function MobileDetect#tablet
         */
        tablet: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
        },

        /**
         * Returns the (first) detected user-agent string or <tt>null</tt>.
         * <br>
         * The returned user-agent is one of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {String} the key for the detected user-agent or <tt>null</tt>
         * @function MobileDetect#userAgent
         */
        userAgent: function () {
            if (this._cache.userAgent === undefined) {
                this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
        },

        /**
         * Returns all detected user-agent strings.
         * <br>
         * The array is empty or contains one or more of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
         * @function MobileDetect#userAgents
         */
        userAgents: function () {
            if (this._cache.userAgents === undefined) {
                this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgents;
        },

        /**
         * Returns the detected operating system string or <tt>null</tt>.
         * <br>
         * The operating system is one of following keys:<br>
         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
         * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
         *
         * @returns {String} the key for the detected operating system.
         * @function MobileDetect#os
         */
        os: function () {
            if (this._cache.os === undefined) {
                this._cache.os = impl.detectOS(this.ua);
            }
            return this._cache.os;
        },

        /**
         * Get the version (as Number) of the given property in the User-Agent.
         * <br>
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
         *          Be careful when comparing this value with '==' operator!
         * @function MobileDetect#version
         */
        version: function (key) {
            return impl.getVersion(key, this.ua);
        },

        /**
         * Get the version (as String) of the given property in the User-Agent.
         * <br>
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
         *
         * @function MobileDetect#versionStr
         */
        versionStr: function (key) {
            return impl.getVersionStr(key, this.ua);
        },

        /**
         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
         *
         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
         *        tablet family.<br>
         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
         *        Additionally you have following keys:<br>
         * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
         *
         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
         * @function MobileDetect#is
         */
        is: function (key) {
            return containsIC(this.userAgents(), key) ||
                   equalIC(key, this.os()) ||
                   equalIC(key, this.phone()) ||
                   equalIC(key, this.tablet()) ||
                   containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
        },

        /**
         * Do a quick test against navigator::userAgent.
         *
         * @param {String|RegExp} pattern the pattern, either as String or RegExp
         *                        (a string will be converted to a case-insensitive RegExp).
         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
         * @function MobileDetect#match
         */
        match: function (pattern) {
            if (!(pattern instanceof RegExp)) {
                pattern = new RegExp(pattern, 'i');
            }
            return pattern.test(this.ua);
        },

        /**
         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
         * <br>
         * Obviously this method makes sense in browser environments only (not for Node.js)!
         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
         *          Will always return <code>undefined</code> server-side.
         */
        isPhoneSized: function (maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },

        /**
         * Returns the mobile grade ('A', 'B', 'C').
         *
         * @returns {String} one of the mobile grades ('A', 'B', 'C').
         * @function MobileDetect#mobileGrade
         */
        mobileGrade: function () {
            if (this._cache.grade === undefined) {
                this._cache.grade = impl.mobileGrade(this);
            }
            return this._cache.grade;
        }
    };

    // environment-dependent
    if (typeof window !== 'undefined' && window.screen) {
        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
        };
    } else {
        MobileDetect.isPhoneSized = function () {};
    }

    // should not be replaced by a completely new object - just overwrite existing methods
    MobileDetect._impl = impl;
    
    MobileDetect.version = '1.3.5 2016-11-14';

    return MobileDetect;
}); // end of call of define()
})((function (undefined) {
    if (typeof module !== 'undefined' && module.exports) {
        return function (factory) { module.exports = factory(); };
    } else if (typeof define === 'function' && define.amd) {
        return define;
    } else if (typeof window !== 'undefined') {
        return function (factory) { window.MobileDetect = factory(); };
    } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
    }
})());;(function() {
  _.mixin({
    toDict: function(arr, key) {
      if (!_.isArray(arr)) {
        throw new Error('_.toDict takes an Array');
      }
      return _.reduce(arr, (function(dict, obj) {
        if (obj[key] != null) {
          dict[obj[key]] = obj;
        }
        return dict;
      }), {});
    }
  });

  _.mixin({
    someFormatToHex: function(obj) {
      if (obj == null) {
        return obj;
      }
      if (!isNaN(obj)) {
        if (obj < 0) {
          obj = 0xFFFFFFFF + obj + 1;
        }
        return '#' + obj.toString(16).toUpperCase();
      }
      if (obj.indexOf('#') > 0) {
        return obj;
      }
      if (obj.split(',').length === 3) {
        return "#" + _.rgbToHex(obj.split(',')[0], obj.split(',')[1], obj.split(',')[2]);
      } else {
        if (obj.indexOf('#') > -1) {
          return obj;
        } else {
          if (obj < 0) {
            obj = 0xFFFFFFFF + obj + 1;
          }
          return '#' + obj.toString(16).toUpperCase();
        }
      }
    }
  });

  _.mixin({
    rgbToHex: function(R, G, B) {
      return _.toHex(R) + _.toHex(G) + _.toHex(B);
    }
  });

  _.mixin({
    toHex: function(n) {
      n = parseInt(n, 10);
      if (isNaN(n)) {
        return "00";
      }
      n = Math.max(0, Math.min(n, 255));
      return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    }
  });


  /*
  Parse query string.
  ?a=b&c=d to {a: b, c: d}
  @param {String} (option) queryString
  @return {Object} query params
   */

  _.mixin({
    getQueryParams: function(queryString) {
      var query;
      query = (queryString || window.location.search).substring(1);
      if (!query) {
        return {};
      }
      return _.chain(query.split('&')).map(function(params) {
        var p;
        p = params.split('=');
        return [p[0], decodeURIComponent(p[1])];
      }).object().value();
    }
  });

  _.mixin({
    isTouchDevice: function() {
      return ('ontouchstart' in window) || Boolean(navigator.MaxTouchPoints) || Boolean(navigator.msMaxTouchPoints);
    }
  });

  _.mixin({
    isFlashEnabled: function() {
      var exception, hasFlash;
      try {
        hasFlash = (typeof navigator.plugins !== "undefined" && typeof navigator.plugins["Shockwave Flash"] === "object") || (window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) !== false);
      } catch (_error) {
        exception = _error;
        hasFlash = 'undefined' !== typeof navigator.mimeTypes['application/x-shockwave-flash'];
      }
      return Boolean(hasFlash);
    }
  });

  _.mixin({
    capitalize: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  });

}).call(this);
;(function() {
  window.Alcon = {
    Config: {},
    EventDispatcher: {},
    Router: {},
    Session: {
      iSelectedClickLookId: null,
      iSelectedFaceId: null,
      iSelectedLensId: null,
      iSelectedFilterId: null,
      iSelectedFrameId: null,
      sVmeImageType: null,
      bUserFaceTraced: null,
      aSelectedTracing: null,
      sAlconUserId: null,
      oCmsUser: null
    },
    Vme: {},
    Views: {},
    DataStorage: {},
    DataLoader: {},
    Utils: {},
    Helpers: {},
    AppliedProducts: []
  };

  Alcon.Config = {
    bIsMobile: $('.container').hasClass('mobile'),
    bMobile: $('main').hasClass('mobile'),
    bIsTablet: !$('.container').hasClass('mobile') && _.isTouchDevice(),
    bIsLandscape: null,
    bnoFlash: true,
    bIsMac: navigator.appVersion.indexOf("Mac") !== -1,
    bIsChrome: navigator.userAgent.indexOf("Chrome") !== -1,
    bIsSafari: (navigator.userAgent.indexOf("Chrome") === -1) && (navigator.userAgent.indexOf("Safari") !== -1),
    bIsAndroid: navigator.userAgent.indexOf("Android") !== -1,
    bHasCanvas: function() {
      var canvas;
      canvas = document.createElement("canvas");
      return !!(canvas.getContext && canvas.getContext('2d'));
    },
    oUrls: {
      sFindFace: '//iphone.dailymakeover.com/FindFaceHTML5XDM',
      aTrusted: ['//112.121.52.56:5090', '//0.0.0.0', '//localhost'],
      sCmsLogin: 'https://tryoncms.appspot.com/oauth2/access_token',
      sCmsRegister: 'https://tryoncms.appspot.com/api/v1/users/register',
      sCmsSaveUserLook: 'https://tryoncms.appspot.com/api/v1/user-looks',
      sCmsUserLooks: 'https://tryoncms.appspot.com/api/v1/user-looks/current',
      sCmsUserLook: 'https://tryoncms.appspot.com/api/v1/user-looks/:look-id',
      sImageSaving: 'https://scshoebox.appspot.com/i',
      sAlconTrial: 'https://www.eyefile.com/aocolors/getstarted?sid=AOCP0614&COLOR=',
      sAlconRegister: 'https://www.eyefile.com/authentication/AOCP0614?COLOR=',
      sAlconLogin: 'https://www.eyefile.com/authentication'
    },
    sProject: _.getQueryParams()['project'] || 'scvmo',
    sLang: _.getQueryParams()['lang'] || 'en',
    oGA: {},
    oFB: {
      sAppId: '873652816098442',
      sVersion: 'v2.7',
      sAccessToken: null
    },
    oCms: {
      sOAuthClientId: '5a63bddab691680c509e',
      sOAuthClientSecret: '4d3fbea840d2b69cf3c23fbe5a23402444d95d3e'
    },
    oScshoebox: {
      sToken: '11826fc6382b43e0b8869e1e559002b4'
    },
    oAmazonEcommerce: {
      AWSAccessKeyId: "AKIAJTSRFFU6VKOZ7OXQ",
      AssociateTag: "jourdesfemm-21"
    },
    oVme: {
      sSwfVersion: "10.0.0",
      sReplacedElId: 'vme-to-replace',
      iWidth: 393,
      iHeight: 457,
      oFlashVars: {},
      iLoadDelay: 200,
      oParams: {
        quality: "high",
        bgcolor: "#fff",
        allowscriptaccess: "always",
        allowNetworking: "all",
        allowfullscreen: "true",
        wmode: "opaque"
      },
      oAttributes: {
        id: "vmeFlash",
        name: "vmeFlash",
        align: "middle"
      }
    },
    oCamera: {
      sSwfVersion: "10.0.0",
      sReplacedElId: 'webcamFlash',
      iWidth: 356,
      iHeight: 415,
      oFlashVars: {},
      iLoadDelay: 5000,
      oParams: {
        quality: "high",
        bgcolor: "#fff",
        allowscriptaccess: "always",
        allowNetworking: "all",
        allowfullscreen: "true",
        wmode: "opaque"
      },
      oAttributes: {
        name: 'webcamFlash',
        id: 'webcamFlash'
      }
    },
    oTracedCords: {},
    aTracedBounds: [],
    oFeatures: {
      TRACEDAREA_CONTACT_LEFT: 43,
      TRACEDAREA_CONTACT_RIGHT: 44,
      FEATURE_LIPSTICK: 1,
      FEATURE_LIPGLOSS: 2,
      FEATURE_LIPLINER: 3,
      FEATURE_EYESHADOW: 4,
      FEATURE_EYELINER: 5,
      FEATURE_MASCARA: 6,
      FEATURE_BLUSH: 7,
      FEATURE_CONTACTS: 8,
      FEATURE_GLASSES: 9,
      FEATURE_SUNGLASSES: 10,
      FEATURE_HEADWEAR: 11,
      FEATURE_EYESHADOWC: 12,
      FEATURE_EYESHADOWL: 13,
      FEATURE_TEETH_WHITENING: 14,
      FEATURE_HIGHLIGHTS: 15,
      FEATURE_HAIR_COLOR: 16,
      FEATURE_HOT_LOOKS: 17,
      FEATURE_POLISH: 18,
      FEATURE_ACRYLIC: 19,
      FEATURE_COVER: 20,
      FEATURE_FOUNDATION: 21,
      FEATURE_FACE_POWDER: 22,
      FEATURE_CONCEALER: 23,
      FEATURE_HAIRCLIPS: 24,
      FEATURE_NECKLACE: 25,
      FEATURE_EARRING: 26,
      FEATURE_LOWLIGHTS: 27,
      FEATURE_FACIAL_HAIR: 28,
      FEATURE_VEILS: 29,
      FEATURE_RESERVED: 30,
      FEATURE_LIP_BALM: 31,
      FEATURE_PHOTO: 32,
      FEATURE_LIP_TEXTURE: 33,
      FEATURE_HAIR: 34,
      FEATURE_CYOH: 35,
      FEATURE_LIP_PLUMPING: 36,
      FEATURE_EYEBROW_THINNING: 37,
      FEATURE_EYEBROW_THINNING_R: 38,
      FEATURE_EYESHADOW_R: 39,
      FEATURE_EYELINER_R: 40,
      FEATURE_MASCARA_R: 41,
      FEATURE_BLUSH_R: 42,
      FEATURE_CONCEALER_R: 43,
      FEATURE_CONTACTS_R: 44,
      FEATURE_EARRING_R: 45,
      FEATURE_FACE_MASK: 46,
      FEATURE_NOSE: 47,
      FEATURE_TRACING: 48,
      FEATURE_TRACING_TARGET: 49,
      FEATURE_TRACING_SPOT_APPLY: 50,
      FEATURE_TRACING_DISTORT: 51,
      FEATURE_TRACING_INITIAL: 52,
      FEATURE_EYEBROW_PENCIL: 53,
      FEATURE_EYEBROW_PENCIL_R: 54,
      FEATURE_SCARF: 55,
      FEATURE_LAST_INDEX: 55,
      SIDE_BOTH: 0,
      SIDE_LEFT: 1,
      SIDE_RIGHT: 2
    },
    oControlActions: {
      RESET: "reset",
      CLEAR: "clear",
      CLEAR_ALL: "clearAll",
      VISIBLE: "visible",
      SHOW: "show",
      HIDE: "hide",
      ALPHA_SET: "alphaSet",
      ALPHA_ADD: "alphaAdd",
      LEFT: "left",
      RIGHT: "right",
      UP: "up",
      DOWN: "down",
      X_SET: "xSet",
      Y_SET: "ySet",
      NARROWER: "narrower",
      WIDER: "wider",
      TALLER: "taller",
      SHORTER: "shorter",
      BIGGER: "bigger",
      SMALLER: "smaller",
      WIDTH_SET: "widthSet",
      HEIGHT_SET: "heightSet",
      ROTATE_LEFT: "rotateLeft",
      ROTATE_RIGHT: "rotateRight",
      ROTATE_SET: "rotateSet",
      FLIP_X: "flipX",
      FLIP_Y: "flipY",
      SKEW_X_MORE: "skewXMore",
      SKEW_X_LESS: "skewXLess",
      SKEW_X_SET: "skewXSet",
      SKEW_Y_MORE: "skewYMore",
      SKEW_Y_LESS: "skewYLess",
      SKEW_Y_SET: "skewYSet",
      ROTATE_X_MORE: "rotateXMore",
      ROTATE_X_LESS: "rotateXLess",
      ROTATE_X_SET: "rotateXSet",
      ROTATE_Y_MORE: "rotateYMore",
      ROTATE_Y_LESS: "rotateYLess",
      ROTATE_Y_SET: "rotateYSet",
      ZOOM_STAGE: "zoomStage"
    }
  };

  Alcon.Config.oVme.bIsHTML5 = Alcon.Config.bIsMobile || Alcon.Config.bIsTablet || Alcon.Config.bIsMac && Alcon.Config.bIsSafari || Alcon.Config.bnoFlash;

  Alcon.Config.oUrls.sBase = window.location.protocol + '//' + window.location.host + window.location.pathname;

  Alcon.Config.sVersion = (function() {
    switch (Alcon.Config.oUrls.sBase) {
      case 'http:/stylecastervmo.appspot.com/':
      case 'https://stylecastervmo.appspot.com/':
      case 'http://production.stylecastervmo.appspot.com/':
      case 'https://production.stylecastervmo.appspot.com/':
        return 'production';
      default:
        return 'staging';
    }
  })();

  Alcon.Config.oDataUrls = {
    sProjectData: "//vmo.storage.googleapis.com/deploy/appengine/" + Alcon.Config.sVersion + "/" + Alcon.Config.sProject + ".projectData.js",
    sFaces: "//vmo.storage.googleapis.com/deploy/appengine/" + Alcon.Config.sVersion + "/" + Alcon.Config.sProject + ".dataModels.js",
    sClickLooks: "//vmo.storage.googleapis.com/deploy/appengine/" + Alcon.Config.sVersion + "/" + Alcon.Config.sProject + "." + Alcon.Config.sLang + ".dataLooks.js?1=3",
    sProductLines: "//vmo.storage.googleapis.com/deploy/appengine/" + Alcon.Config.sVersion + "/" + Alcon.Config.sProject + "." + Alcon.Config.sLang + ".dataProductLine.js",
    sProducts: "//vmo.storage.googleapis.com/deploy/appengine/" + Alcon.Config.sVersion + "/" + Alcon.Config.sProject + "." + Alcon.Config.sLang + ".dataProduct.js",
    sHairs: "//vmo.storage.googleapis.com/deploy/appengine/" + Alcon.Config.sVersion + "/" + Alcon.Config.sProject + ".dataHairs.js"
  };

  console.log('configuration');

}).call(this);
;(function() {
  Alcon.EventDispatcher = _.extend({}, Backbone.Events);

}).call(this);
;(function() {
  var Workspace;

  Workspace = Backbone.Router.extend({
    oHomeView: null,
    oSelectFaceView: null,
    oSelectEyesView: null,
    oSelectLipsView: null,
    oSelectHairstylesView: null,
    oSelectEyewearView: null,
    oSelectJewelryView: null,
    oSelectHeadwearView: null,
    oSelectProductLine: null,
    oSelectProductView: null,
    oOneClickLook: null,
    oVmeView: null,
    oRetraceView: null,
    oSaveShareView: null,
    oCommonModalView: null,
    oRegisterLoginView: null,
    oFacesListView: null,
    oCameraView: null,
    oUploadPhotoView: null,
    routes: {
      "": "home",
      "select-face": "select-face",
      "select-eyes": "select-eyes",
      "select-lips": "select-lips",
      "select-hairstyles": "select-hairstyles",
      "1-click-look": "select-one-click-look",
      "retrace": "retrace",
      "*notFound": "home"
    },
    "home": function() {
      if (!this.oHomeView) {
        this.oHomeView = new Alcon.Views.Home;
      }
      return this.oHomeView.render();
    },
    "select-face": function() {
      if (!this.oSelectFaceView) {
        this.oSelectFaceView = new Alcon.Views.SelectProductLine({
          sCategory: "face"
        });
      }
      return this.oSelectFaceView.render();
    },
    "select-eyes": function() {
      if (!this.oSelectEyesView) {
        this.oSelectEyesView = new Alcon.Views.SelectProductLine({
          sCategory: "eyes"
        });
      }
      return this.oSelectEyesView.render();
    },
    "select-lips": function() {
      if (!this.oSelectLipsView) {
        this.oSelectLipsView = new Alcon.Views.SelectProductLine({
          sCategory: "lips"
        });
      }
      return this.oSelectLipsView.render();
    },
    "select-hairstyles": function() {
      if (!this.oSelectHairstylesView) {
        this.oSelectHairstylesView = new Alcon.Views.SelectProductLine({
          sCategory: "hairstyles"
        });
      }
      return this.oSelectHairstylesView.render();
    },
    "select-eyewear": function() {
      if (!this.oSelectEyewearView) {
        this.oSelectEyewearView = new Alcon.Views.SelectProductLine({
          sCategory: "eyewear"
        });
      }
      Alcon.Utils.Helpers.trackPage("/select-eyewear");
      return this.oSelectEyewearView.render();
    },
    "select-jewelry": function() {
      if (!this.oSelectJewelryView) {
        this.oSelectJewelryView = new Alcon.Views.SelectProductLine({
          sCategory: "jewelry"
        });
      }
      Alcon.Utils.Helpers.trackPage("/select-jewelry");
      return this.oSelectJewelryView.render();
    },
    "select-headwear": function() {
      if (!this.oSelectHeadwearView) {
        this.oSelectHeadwearView = new Alcon.Views.SelectProductLine({
          sCategory: "headwear"
        });
      }
      Alcon.Utils.Helpers.trackPage("/select-headwear");
      return this.oSelectHeadwearView.render();
    },
    "select-one-click-look": function() {
      if (!this.oOneClickLook) {
        this.oOneClickLook = new Alcon.Views.ClickLook;
      }
      Alcon.Utils.Helpers.trackPage("/try_on/total_looks", "1-click looks");
      return this.oOneClickLook.render();
    },
    fnSetSubroute: function(sSubroute) {
      this.fnUnSetSubroute();
      return $('body').addClass("subroute-" + sSubroute);
    },
    fnUnSetSubroute: function(sSubroute) {
      var classes;
      if (sSubroute == null) {
        if ($('body').attr("class") != null) {
          classes = _.filter($('body').attr("class").split(" "), function(c) {
            return c.lastIndexOf('subroute-', 0) !== 0;
          });
          return $('body').attr("class", classes.join(" "));
        }
      } else {
        return $('body').removeClass("subroute-" + sSubroute);
      }
    },
    fnSetState: function(sStateName) {
      return $('body').addClass("state-" + sStateName);
    },
    fnUnsetState: function(sName) {
      var classes;
      if (sName == null) {
        if ($('body').attr("class") != null) {
          classes = _.filter($('body').attr("class").split(" "), function(c) {
            return c.lastIndexOf('state-', 0) !== 0;
          });
          return $('body').attr("class", classes.join(" "));
        }
      } else {
        return $('body').removeClass("state-" + sName);
      }
    }
  });

  Alcon.Router = new Workspace();

  Alcon.EventDispatcher.on("choose:face", function() {
    return Alcon.Router.navigate("select-face", {
      trigger: true
    });
  });

  Alcon.Router.on("route", function(route, params) {
    var classes, iNavigationTabId, sClass;
    $(".main-nav .color-studio-navigation").removeClass('active');
    if (route === "home" && Alcon.Session.get('app:launch')) {
      Alcon.Utils.Helpers.trackPage("/launch/welcome");
    }
    Alcon.Session.unset('app:launch');
    if (route === 'home') {
      Alcon.Vme.fnDisableRetraceMode();
      this.fnUnsetState('retrace');
    }
    if (this.oVmeView != null) {
      this.oVmeView.fnHideBeforeAfter();
    }
    if (this.oVmeView != null) {
      this.oVmeView.fnHideLensesGrid();
    }
    if ($('body').attr("class") != null) {
      classes = _.filter($('body').attr("class").split(" "), function(c) {
        return (c === 'state-retrace') || (c.lastIndexOf('route-', 0) !== 0 && c.lastIndexOf('subroute-', 0) !== 0 && c.lastIndexOf('state-', 0) !== 0);
      });
      $('body').attr("class", classes.join(" "));
    }
    $('body').addClass("route-" + route);
    sClass = route.replace('select-', '');
    iNavigationTabId = Alcon.Session.get('iNavigationTabId');
    if (iNavigationTabId == null) {
      $(".main-nav .color-studio-navigation." + sClass + " li:first-child a").trigger('click');
    } else {
      $(".main-nav .color-studio-navigation." + sClass + " li a[href='#" + iNavigationTabId + "']").trigger('click');
    }
    $(".main-nav .color-studio-navigation." + sClass).addClass('active');
    if (!Alcon.Config.bIsMobile) {
      $(".user-action-buttons .save").removeClass("expanded");
      $(".user-action-buttons .share").addClass("expanded");
    }
    Alcon.Router.oSaveShareView.fnMobileHideSharePanel();
    $(window).on('resize', function() {
      return Alcon.Utils.Helpers.fnScrollNavBar();
    });
    return $(window).trigger('resize');
  });

  Alcon.EventDispatcher.on("before:history", function() {

    /* Define single views below which are common for the entire app */
    Alcon.Router.oSaveShareView = new Alcon.Views.SaveShare;
    Alcon.Router.oVmeView = new Alcon.Views.Vme;
    Alcon.Router.oVmeView.render();
    Alcon.Router.oCommonModalView = new Alcon.Views.CommonModal;
    if (Alcon.Config.bIsMobile === true) {
      Alcon.Router.oMobileNavMenuView = new Alcon.Views.MobileNavMenu;
      Alcon.Router.oMobileNavMenuView.render();
    }
    Alcon.Router.oFacesListView = new Alcon.Views.FacesList;
    Alcon.Router.oCameraView = new Alcon.Views.Camera;
    Alcon.Router.oUploadPhotoView = Alcon.Config.bIsMobile ? new Alcon.Views.UploadPhotoMobile : new Alcon.Views.UploadPhoto;
    Alcon.Router.oSelectProductView = new Alcon.Views.SelectProduct;
    if (!this.oRetraceView) {
      return Alcon.Router.oRetraceView = new Alcon.Views.Retrace;
    }
  });

}).call(this);
;
/*
Mobile uses its own mobile template
Here you can hook up the mobile template to match the desktop version
 */


/*
Router events
 */

(function() {
  Alcon.Router.on("route", function(route, params) {
    return $('.saved-looks').removeClass('on');
  });


  /*
  EventDispatcher events
   */

  Alcon.EventDispatcher.on('render:home', function() {
    $('.change-states ul li.active').removeClass('active');
    return setTimeout(function() {
      var imgs, imgsCollection, swiper, swiperContainer;
      swiperContainer = $('#vme-wrapper .swiper-desktop .swiper-wrapper');
      imgsCollection = $('#vme-wrapper .swiper-desktop .swiper-wrapper .swiper-slide');
      imgs = imgsCollection.get().sort(function() {
        return Math.round(Math.random());
      });
      $(swiperContainer).html(imgs);
      swiperContainer = $('#vme-wrapper .swiper-mobile .swiper-wrapper');
      imgsCollection = $('#vme-wrapper .swiper-mobile .swiper-wrapper .swiper-slide');
      imgs = imgsCollection.get().sort(function() {
        return Math.round(Math.random());
      });
      $(swiperContainer).html(imgs);
      swiper = new Swiper('#vme-wrapper .home-screen:visible', {
        slidesPerView: "auto",
        autoplay: 2500,
        speed: 500,
        loop: true,
        effect: 'fade',
        autoplayDisableOnInteraction: false
      });
      swiper.startAutoplay();
      Alcon.Router.on("route", function() {
        if (swiper.width !== void 0) {
          return swiper.stopAutoplay();
        }
      });
      return $(window).on('resize', function() {
        if (swiper.width !== void 0) {
          swiper.slideTo(1, 0, false);
        }
        return setTimeout(function() {
          if (swiper.width !== void 0) {
            swiper.destroy();
          }
          swiper = new Swiper('#vme-wrapper .home-screen:visible', {
            slidesPerView: "auto",
            autoplay: 2500,
            speed: 500,
            loop: true,
            effect: 'fade',
            autoplayDisableOnInteraction: false
          });
          if (swiper.width !== void 0) {
            return swiper.startAutoplay();
          }
        }, 500);
      });
    }, 0);
  });

  Alcon.EventDispatcher.on('render:select-face', function() {
    $('.change-states ul li').removeClass('active');
    return $('.change-states ul li a[href="#select-face"]').closest('li').addClass('active');
  });

  Alcon.EventDispatcher.on('called:do-expert-pick', function() {
    return $('.btn-smart-match', this.$el).removeClass('active');
  });

  Alcon.EventDispatcher.on('create:look', function() {
    return $('.saved-looks').removeClass('on');
  });

  Alcon.EventDispatcher.on('loaded:product-lines', function($el) {
    return new Swiper($el, {
      slidesPerView: "auto",
      spaceBetween: 1,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
  });

  Alcon.EventDispatcher.on('loaded:products', function() {
    var swiper;
    return swiper = new Swiper('#select-product-wrapper .products', {
      slidesPerView: "auto",
      spaceBetween: 1,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
  });

  Alcon.EventDispatcher.on('loaded:click-looks', function() {
    var swiper;
    return swiper = new Swiper('#select-click-look-view .click-looks', {
      slidesPerView: "auto",
      spaceBetween: 1,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
  });

  Alcon.EventDispatcher.on('loaded:faces-list', function() {
    var swiper;
    swiper = new Swiper('#welcome-page .faces-list-container', {
      slidesPerView: "auto",
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
    return Alcon.Router.on("route", function() {
      return swiper.update(true);
    });
  });

}).call(this);
;(function() {
  Alcon.Utils.Camera = {
    oCamera: null,
    fnInitialize: function() {
      var dfd, fnLoadDelay, iLoadCount;
      dfd = new jQuery.Deferred();
      if (Alcon.Config.bIsMobile === true || Alcon.Config.bIsTablet === true) {
        return dfd.resolve("camera-loaded");
      }
      iLoadCount = 0;
      fnLoadDelay = (function(_this) {
        return function() {
          if (iLoadCount++ > 20) {
            return console.error("Camera can't be loaded. Tried " + loadDelayCounter + " times");
          }
          _this.oCamera = vmeGetMovie('webcamFlash');
          if (_this.oCamera == null) {
            return setTimeout(fnLoadDelay, Alcon.Config.oCamera.iLoadDelay);
          } else {
            return dfd.resolve("camera-loaded");
          }
        };
      })(this);
      swfobject.embedSWF('assets/mk-copied/webcam.swf', Alcon.Config.oCamera.sReplacedElId, Alcon.Config.oCamera.iWidth, Alcon.Config.oCamera.iHeight, Alcon.Config.oCamera.sSwfVersion, null, Alcon.Config.oCamera.oFlashVars, Alcon.Config.oCamera.oParams, Alcon.Config.oCamera.oAttributes);
      setTimeout(fnLoadDelay, Alcon.Config.oCamera.iLoadDelay);
      return dfd.promise();
    },
    fnTakePhoto: function(fnCallback) {
      this.oCamera.takePhoto();
      return setTimeout(function() {
        return fnCallback();
      }, 6001);
    },
    fnGetDataUrl: function() {
      return this.oCamera.getPhoto();
    }
  };

}).call(this);
;(function() {
  Alcon.DataLoader = {
    aoErrorMessages: [],
    fnAddErrorMessage: function(url, xhr, exception, text) {
      if (text == null) {
        text = null;
      }
      return this.aoErrorMessages.push({
        'url': url,
        'status': xhr.status,
        'exception': exception,
        'text': text != null ? text : this._fnFormatErrorMessage(xhr, exception)
      });
    },
    fnHasErrorMessage: function() {
      if (this.aoErrorMessages.length) {
        return false;
      } else {
        return true;
      }
    },
    fnGetErrorMessage: function() {
      var message, sErrorMessage, _i, _len, _ref;
      sErrorMessage = '';
      _ref = this.aoErrorMessages;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        message = _ref[_i];
        sErrorMessage += "URL: " + message.url + "\n STATUS: " + message.status + "\n EXCEPTION: " + message.exception + "\n MESSAGE: " + message.text + "\n\n";
      }
      return sErrorMessage;
    },
    _fnFormatErrorMessage: function(jqXHR, exception) {
      switch (jqXHR.status) {
        case 0:
          return 'Not connected. Please verify your network connection.';
        case 401:
          return 'Unauthorised access [401]';
        case 403:
          return 'Forbidden resouce can\'t be accessed [403]';
        case 404:
          return 'The requested page not found [404]';
        case 500:
          return 'Internal Server Error [500]';
        case 503:
          return 'Service Unavailable [503]';
        default:
          switch (exception) {
            case 'parsererror':
              return 'Requested JSON parse failed.';
            case 'timeout':
              return 'Time out error.';
            case 'abort':
              return 'Ajax request aborted.';
            default:
              return 'Uncaught Error. ' + jqXHR.responseText;
          }
      }
    },
    fnLoad: function() {
      var aoPromices;
      aoPromices = [];
      aoPromices.push($.ajax({
        url: Alcon.Config.oDataUrls.sProjectData,
        dataType: 'json'
      }).then(function(oData) {
        return Alcon.DataStorage.oProject = oData;
      }).fail(function(xhr, err) {
        Alcon.DataLoader.fnAddErrorMessage(Alcon.Config.oDataUrls.sProjectData, xhr, err);
      }));
      aoPromices.push($.ajax({
        url: Alcon.Config.oDataUrls.sFaces,
        dataType: 'json'
      }).then(function(oData) {
        return Alcon.DataStorage.aFaces = _.map(oData, function(itm) {
          if (Alcon.Config.oVme.bIsHTML5 === true) {
            itm.url = "/assets/images/models/" + itm.label + "_white.jpg";
          } else {
            itm.url = "//vmo.storage.googleapis.com/models/" + itm.label + "_white.jpg";
          }
          return itm;
        });
      }).fail(function(xhr, err) {
        Alcon.DataLoader.fnAddErrorMessage(Alcon.Config.oDataUrls.sFaces, xhr, err);
      }));
      aoPromices.push($.ajax({
        url: Alcon.Config.oDataUrls.sClickLooks,
        dataType: 'json'
      }).then(function(oData) {
        return Alcon.DataStorage.aClickLooks = _.map(oData.looks, function(itm) {
          itm.data = _.map(itm.data, function(oProduct) {
            if (oProduct.hasOwnProperty("color")) {
              oProduct.rgb = oProduct.color;
            }
            if (oProduct.hasOwnProperty("thumbnail")) {
              oProduct.thumbnail = oProduct.thumbnail.replace('//', 'http://');
            }
            return oProduct;
          });
          return itm;
        });
      }).fail(function(xhr, err) {
        Alcon.DataLoader.fnAddErrorMessage(Alcon.Config.oDataUrls.sClickLooks, xhr, err);
      }));
      aoPromices.push($.ajax({
        url: Alcon.Config.oDataUrls.sProductLines,
        dataType: 'json'
      }).then(function(oData) {
        return Alcon.DataStorage.aProductLines = oData;
      }).fail(function(xhr, err) {
        return Alcon.DataLoader.fnAddErrorMessage(Alcon.Config.oDataUrls.sProductLines, xhr, err);
      }));
      aoPromices.push($.ajax({
        url: Alcon.Config.oDataUrls.sProducts,
        dataType: 'json'
      }).then(function(oData) {
        if (Alcon.Config.oVme.bIsHTML5 === true) {
          return Alcon.DataStorage.aProducts = _.map(oData, function(oProduct) {
            oProduct.swf = oProduct.swf.replace('.swf', '.png').replace('_%26_', '_and_').replace('https://vmo.storage.googleapis.com/products', '/assets/images/products');
            oProduct.category = Alcon.Utils.Helpers.fnGetCategoryByFeature(oProduct.feature);
            oProduct.image = oProduct.thumbnail;
            return oProduct;
          });
        } else {
          return Alcon.DataStorage.aProducts = _.map(oData, function(oProduct) {
            oProduct.swf = oProduct.swf.replace('https://', '//');
            oProduct.category = Alcon.Utils.Helpers.fnGetCategoryByFeature(oProduct.feature);
            oProduct.image = oProduct.thumbnail;
            return oProduct;
          });
        }
      }).fail(function(xhr, err) {
        Alcon.DataLoader.fnAddErrorMessage(Alcon.Config.oDataUrls.sProducts, xhr, err);
      }));
      aoPromices.push($.ajax({
        url: Alcon.Config.oDataUrls.sHairs,
        dataType: 'json'
      }).then(function(oData) {
        if (Alcon.Config.oVme.bIsHTML5 === true) {
          return Alcon.DataStorage.aHairs = _.map(oData, function(oHair) {
            oHair.swf = oHair.image.replace('_h_tn.jpg', '_h.png').replace('https://vmo.storage.googleapis.com/', '/assets/images/');
            oHair.category = "hairstyles";
            oHair.feature = Alcon.Config.oFeatures.FEATURE_HAIR;
            return oHair;
          });
        } else {
          return Alcon.DataStorage.aHairs = _.map(oData, function(oHair) {
            oHair.swf = oHair.image.replace('_h_tn.jpg', '_h.swf').replace('https://', '//');
            oHair.category = "hairstyles";
            oHair.feature = Alcon.Config.oFeatures.FEATURE_HAIR;
            return oHair;
          });
        }
      }).fail(function(xhr, err) {
        Alcon.DataLoader.fnAddErrorMessage(Alcon.Config.oDataUrls.sHairs, xhr, err);
      }));
      Alcon.DataStorage.aLenses = window.GLOBAL.aLenses;
      if (Alcon.Config.oVme.bIsHTML5 === true) {
        Alcon.DataStorage.aLenses = _.map(Alcon.DataStorage.aLenses, function(oLens) {
          oLens.image = oLens.image.replace('//vmo.storage.googleapis.com/products/Contacts/alcon/', '/assets/images/lenses/');
          oLens.image_user = oLens.image.replace('//vmo.storage.googleapis.com/products/Contacts/alcon/', '/assets/images/lenses/');
          return oLens;
        });
      }
      Alcon.DataStorage.aFilters = window.GLOBAL.aFilters;
      Alcon.DataStorage.aFrames = window.GLOBAL.aFrames;
      if (Alcon.Config.oVme.bIsHTML5 === true) {
        Alcon.DataStorage.aFrames = _.map(Alcon.DataStorage.aFrames, function(oFrame) {
          oFrame.image = oFrame.image.replace('//vmo.commondatastorage.googleapis.com/products/covereffects/alcon/', '/assets/images/frames/');
          return oFrame;
        });
      }
      return aoPromices;
    },
    fnUpdateStructure: function() {
      return _.each(Alcon.DataStorage.aProductLines, function(oProductLine) {
        var oProduct;
        oProduct = _.find(Alcon.DataStorage.aProducts, function(oProduct) {
          return oProduct.pl === oProductLine.key;
        });
        if (!oProduct) {
          // return console.log(oProductLine); CONSOLE BACANINHA
        } else {
          oProductLine.category = Alcon.Utils.Helpers.fnGetCategoryByFeature(oProduct.feature);
          return oProductLine.feature = oProduct.feature;
        }
      });
    }
  };

}).call(this);
;(function() {
  var Session;

  Session = Backbone.Model.extend({});

  Alcon.Session = new Session();

}).call(this);
;(function() {
  Alcon.VmeFactory = {
    fnCreateInstance: function() {
      Alcon.Vme = Alcon.Config.oVme.bIsHTML5 === true ? new Alcon.VmeMobileClass : new Alcon.VmeClass;
      return Alcon.Vme;
    }
  };

  Alcon.VmeClass = (function() {
    function VmeClass() {}

    VmeClass.prototype.vmeHtml5 = null;

    VmeClass.prototype._fnNativeControlStageChild = function(iFeatureId, iParam2, iSide, sAction, hex) {
      var e;
      if (iParam2 == null) {
        iParam2 = 0;
      }
      if (iSide == null) {
        iSide = 0;
      }
      try {
        return this.vmeHtml5.controlStageChild(iFeatureId, iParam2, iSide, sAction, hex);
      } catch (_error) {
        e = _error;
        return console.log(e.message);
      }
    };

    VmeClass.prototype._fnNativeStartTracingMode = function(iFeatureId, iSide, mParam1, mParam2) {
      var e;
      if (iSide == null) {
        iSide = 0;
      }
      try {
        return this.vmeHtml5.startTracingMode(iFeatureId, 0, iSide, mParam1, mParam2);
      } catch (_error) {
        e = _error;
        return console.log(e.message);
      }
    };

    VmeClass.prototype.bIsBeforeAfterMode = false;

    VmeClass.prototype.bIsLensesGridMode = false;

    VmeClass.prototype.bRetraceModeIsOn = false;

    VmeClass.prototype.sLensesGridImage = null;

    VmeClass.prototype.sBeforeImageSrc = null;

    VmeClass.prototype.iMinZoom = 0.35960000000000003;

    VmeClass.prototype.iMaxZoom = 3;

    VmeClass.prototype.fnInitialize = function() {
      var dfd, fnLoadDelay, loadDelayCounter;
      dfd = new jQuery.Deferred();
      swfobject.embedSWF('assets/mk-copied/vmeHolder.swf', Alcon.Config.oVme.sReplacedElId, Alcon.Config.oVme.iWidth, Alcon.Config.oVme.iHeight, Alcon.Config.oVme.sSwfVersion, null, Alcon.Config.oVme.oFlashVars, Alcon.Config.oVme.oParams, Alcon.Config.oVme.oAttributes);
      $('body').addClass('flash-vme-app');
      loadDelayCounter = 0;
      fnLoadDelay = (function(_this) {
        return function() {
          var e;
          loadDelayCounter++;
          _this.vmeHtml5 = vmeGetMovie("vmeFlash");
          if (loadDelayCounter > 200) {
            console.error("VME can't be loaded. Tried " + loadDelayCounter + " times");
            return;
          }
          if (_this.vmeHtml5 == null) {
            setTimeout(fnLoadDelay, Alcon.Config.oVme.iLoadDelay);
            return;
          }
          try {
            _this.fnZoomTo('face');
            _this.vmeHtml5.applyMakeoverItem(0, 0, 0, 0, 0, "", 0, 0, "model_default.jpg", '{"photoTrace":"jrjpqw3h0dusnvyix9y2664t"}');
            _this.vmeHtml5.applyMakeoverItem(0, 0, 0, 0, 0, "", 0, 0, "model_default.jpg", '{"photoTrace":"e9wlbxuy64l0jjvo7wpqx44e86xos64zqxwrkfcjv8fr03899wu"}');
            _this.vmeHtml5.applyMakeoverItem(0, 0, 0, 0, 0, "", 0, 0, "model_default.jpg", '{"photoTrace":"w1aki8u6o7tpdswlzi3ec4ueow9huinm9"}');
            _this.vmeHtml5.applyMakeoverItem(0, 0, 0, 0, 0, "", 0, 0, "model_default.jpg", '{"photoTrace":"yp19agm2mpx0ubjq06nvtv851ozgvm6okksha04xxble"}');
            _this.vmeHtml5.applyMakeoverItem(0, 0, 0, 0, 0, "", 0, 0, "model_default.jpg", '{"photoTrace":"300cc0jh9qhu1l08uwks9woi7kk"}');
            _this.vmeHtml5.setBackgroundColor(0xffffff);
            return dfd.resolve("vme-loaded");
          } catch (_error) {
            e = _error;
            console.error("VME initialization error: " + e.message);
            setTimeout(fnLoadDelay, Alcon.Config.oVme.iLoadDelay);
          }
        };
      })(this);
      setTimeout(fnLoadDelay, Alcon.Config.oVme.iLoadDelay);
      return dfd.promise();
    };

    VmeClass.prototype.fnGetCurrentMode = function() {
      switch (true) {
        case this.bIsBeforeAfterMode:
          return 'before-after';
        case this.bIsLensesGridMode:
          return 'lenses-grid';
        case this.bRetraceModeIsOn:
          return 'retrace';
      }
      return 'default';
    };

    VmeClass.prototype.fnGetCurrentModeImage = function() {
      switch (this.fnGetCurrentMode()) {
        case 'lenses-grid':
          return this.sLensesGridImage;
        default:
          return this.fnCaptureMakeover();
      }
    };

    VmeClass.prototype.fnApplyFace = function(iId, cb) {
      var image, params;
      Alcon.Session.set('sVmeImageType', 'model');
      image = _.find(Alcon.DataStorage.aFaces, function(oFace) {
        return oFace.id === iId;
      });
      this.sBeforeImageSrc = image.url;
      params = '{ "zoom":"face", "photoTrace": "' + image.photoTrace + '" }';
      this.vmeHtml5.applyMakeoverItem(Alcon.Config.oFeatures.FEATURE_PHOTO, 0, Alcon.Config.oFeatures.SIDE_BOTH, 0, 0, '', 0, 0, image.url, params);
      console.log("VME: Apply Face " + iId);
      return typeof cb === "function" ? cb() : void 0;
    };

    VmeClass.prototype.fnApplyPhoto = function(aTraceData, sDataUrl, cb) {
      Alcon.Session.set('sVmeImageType', 'user');
      Alcon.Session.set('aSelectedTracing', aTraceData);
      this.sBeforeImageSrc = sDataUrl;
      this.vmeHtml5.setTracingCoordinates(aTraceData, sDataUrl);
      return cb();
    };

    VmeClass.prototype.fnApplyLens = function(iId) {
      var oLens, sLinkToLens;
      if (iId == null) {
        iId = null;
      }
      if (Alcon.Session.get('iSelectedFrameId') != null) {
        this.fnApplyFrame(Alcon.Session.get('iSelectedFrameId'));
      }
      if (iId === null) {
        console.log("VME: Clear Lens");
        this._fnNativeControlStageChild(Alcon.Config.oFeatures.FEATURE_CONTACTS, 0, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Config.oControlActions.CLEAR);
        return typeof this._fnUpdateBeforeAfter === "function" ? this._fnUpdateBeforeAfter() : void 0;
      }
      oLens = _.find(Alcon.DataStorage.aLenses, function(oLens) {
        return oLens.id === iId;
      });
      sLinkToLens = Alcon.Session.get('sVmeImageType') === 'user' ? oLens.image_user : oLens.image;
      console.log("VME: Apply Lens " + iId + ": " + sLinkToLens);
      this.vmeHtml5.applyMakeoverItem(Alcon.Config.oFeatures.FEATURE_CONTACTS, 0, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Utils.Helpers.fnVMEColor('#FFF'), null, null, null, null, sLinkToLens, null);
      return typeof this._fnUpdateBeforeAfter === "function" ? this._fnUpdateBeforeAfter(1000) : void 0;
    };

    VmeClass.prototype.fnApplyProduct = function(oProduct) {
      var VO;
      if (oProduct == null) {
        oProduct = null;
      }
      oProduct = this.fnFixProductParameters(oProduct);
      console.log("VME: Apply product " + oProduct.key);
      this.vmeHtml5.applyMakeoverItem(oProduct.feature, oProduct.area, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Utils.Helpers.fnVMEColor(oProduct.rgb), 10, oProduct.finish, oProduct.style, oProduct.area, oProduct.swf, oProduct.parameters);
      if (oProduct.feature === Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS) {
        VO = this.vmeHtml5.getAppliedMakeoverItem(Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS);
        VO.opacity = 100;
        Alcon.Vme.vmeHtml5.allowUpdate(true);
      }
      if (oProduct.feature === Alcon.Config.oFeatures.FEATURE_LOWLIGHTS) {
        VO = this.vmeHtml5.getAppliedMakeoverItem(Alcon.Config.oFeatures.FEATURE_LOWLIGHTS);
        VO.opacity = 100;
        Alcon.Vme.vmeHtml5.allowUpdate(true);
      }
      console.log(Alcon.Utils.Helpers.fnVMEColor(oProduct.rgb));
      this.fnAddToAppliedList(oProduct);
      return typeof this._fnUpdateBeforeAfter === "function" ? this._fnUpdateBeforeAfter(1000) : void 0;
    };

    VmeClass.prototype.fnAddToAppliedList = function(oProduct) {
      Alcon.AppliedProducts = _.filter(Alcon.AppliedProducts, function(oAppliedProduct) {
        return oAppliedProduct.feature !== oProduct.feature || (oAppliedProduct.feature === oProduct.feature && oAppliedProduct.area !== oProduct.area);
      });
      Alcon.AppliedProducts.push(_.clone(oProduct));
      return Alcon.Router.oSelectProductView.fnUpdateAppliedList();
    };

    VmeClass.prototype.fnFixProductParameters = function(oProduct) {
      var oParameters;
      oParameters = {
        method: 1
      };
      if ((oProduct.parameters != null) && oProduct.parameters !== "") {
        oParameters = JSON.parse(oProduct.parameters);
      }
      if (oProduct.feature === Alcon.Config.oFeatures.FEATURE_HEADWEAR) {
        oParameters.scale = 1.05;
        oProduct.parameters = JSON.stringify(oParameters);
      }
      if (oProduct.feature === Alcon.Config.oFeatures.FEATURE_HAIR) {
        oParameters.scale = 1.5;
        oProduct.parameters = JSON.stringify(oParameters);
      }
      if (oProduct.feature === Alcon.Config.oFeatures.FEATURE_SUNGLASSES) {
        oProduct.feature = Alcon.Config.oFeatures.FEATURE_GLASSES;
      }
      if (oProduct.feature === Alcon.Config.oFeatures.FEATURE_LOWLIGHTS) {
        setTimeout((function(_this) {
          return function() {
            return _this.vmeHtml5.applyMakeoverItem(oProduct.feature, 0, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Utils.Helpers.fnVMEColor(oProduct.rgb), 10, oProduct.finish, oProduct.style, oProduct.area, oProduct.swf, oProduct.parameters);
          };
        })(this), 200);
      }
      return oProduct;
    };

    VmeClass.prototype.clearAllProducts = function() {
      console.log("VME: Clear all products");
      this._fnNativeControlStageChild(-1, 0, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Config.oControlActions.CLEAR_ALL);
      return this._fnNativeControlStageChild(Alcon.Config.oFeatures.FEATURE_LIPSTICK, 0, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Config.oControlActions.CLEAR_ALL);
    };

    VmeClass.prototype.clearProduct = function(oProduct) {
      if (typeof oProduct === "number") {
        return this._fnNativeControlStageChild(oProduct, -1, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Config.oControlActions.CLEAR_ALL);
      } else {
        return this._fnNativeControlStageChild(oProduct.feature, oProduct.area, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Config.oControlActions.CLEAR_ALL);
      }
    };

    VmeClass.prototype.fnApplyClickLook = function(iId) {
      var aProducts, oLook, sProducts;
      if (iId == null) {
        iId = null;
      }
      this.clearAllProducts();
      if (iId == null) {
        return;
      }
      oLook = _.find(Alcon.DataStorage.aClickLooks, function(oLook) {
        return oLook.id === iId;
      });
      if (oLook == null) {
        return;
      }
      aProducts = oLook.data;
      sProducts = _.map(aProducts, function(oProduct) {
        return oProduct.productname;
      });
      sProducts = sProducts.join(',');
      console.log("VME: Apply 1-Click-Looks " + oLook.id + " with the following products " + sProducts);
      if (Alcon.Config.oVme.bIsHTML5) {
        this.vmeHtml5.allowUpdate(false);
      }
      Alcon.AppliedProducts.length = 0;
      $.each(aProducts, (function(_this) {
        return function(i, oLookProduct) {
          var oProduct;
          oProduct = _.find(Alcon.DataStorage.aProducts, function(oProduct) {
            return oProduct.key === oLookProduct.key;
          });
          if (oProduct != null) {
            oLookProduct.sku = oProduct.sku;
          } else {
            console.log(oLookProduct);
          }
          return _this.fnApplyProduct(oLookProduct);
        };
      })(this));
      if (Alcon.Config.oVme.bIsHTML5) {
        this.vmeHtml5.allowUpdate(true);
      }
      if (typeof this._fnUpdateBeforeAfter === "function") {
        this._fnUpdateBeforeAfter();
      }
      return aProducts;
    };

    VmeClass.prototype.fnApplyFilter = function(iId) {
      var oFilter;
      if (iId == null) {
        iId = null;
      }
      if (iId === null) {
        console.log("VME: Clear Filter");
        this.vmeHtml5.setPostProcess(null);
        return typeof this._fnUpdateBeforeAfter === "function" ? this._fnUpdateBeforeAfter() : void 0;
      }
      console.log("VME: Apply Filter " + iId);
      oFilter = _.find(Alcon.DataStorage.aFilters, function(oFilter) {
        return oFilter.id === iId;
      });
      this.vmeHtml5.setPostProcess(oFilter.postProcess);
      return typeof this._fnUpdateBeforeAfter === "function" ? this._fnUpdateBeforeAfter() : void 0;
    };

    VmeClass.prototype.fnApplyFrame = function(iFrameId) {
      var iLensId, oFrame, oLens, sLinkToFrame;
      if (iFrameId == null) {
        iFrameId = null;
      }
      if (iFrameId === null) {
        console.log("VME: Clear Frame");
        this._fnNativeControlStageChild(Alcon.Config.oFeatures.FEATURE_COVER, 0, Alcon.Config.oFeatures.SIDE_BOTH, Alcon.Config.oControlActions.CLEAR);
        return;
      }
      oFrame = _.find(Alcon.DataStorage.aFrames, function(oFrame) {
        return oFrame.id === iFrameId;
      });
      iLensId = Alcon.Session.get('iSelectedLensId');
      console.log("VME: Apply Frame " + iFrameId + " with Lens " + iLensId);
      sLinkToFrame = oFrame.image.replace('%market%', Alcon.Config.sProject);
      sLinkToFrame = sLinkToFrame.replace('%lang%', Alcon.Config.sLang);
      if (iLensId == null) {
        sLinkToFrame = sLinkToFrame.replace('_%color%', '');
      } else {
        oLens = _.find(Alcon.DataStorage.aLenses, function(oLens) {
          return oLens.id === iLensId;
        });
        sLinkToFrame = sLinkToFrame.replace('%color%', oLens.apptextKey.replace('lens', ''));
      }
      console.log(sLinkToFrame);
      this.vmeHtml5.applyMakeoverItem(Alcon.Config.oFeatures.FEATURE_COVER, 0, Alcon.Config.oFeatures.SIDE_BOTH, null, 0, "", 0, 0, sLinkToFrame, '{"stretch":true}');
      return typeof this._fnUpdateBeforeAfter === "function" ? this._fnUpdateBeforeAfter(1000) : void 0;
    };

    VmeClass.prototype.fnZoomToFeature = function(iId) {
      if (_.contains([16, 21, 22, 23, 24, 34, 43, 7, 42], iId)) {
        this.fnZoomTo("face");
        return;
      }
      if (_.contains([4, 5, 6, 8, 12, 13, 39, 40, 41], iId)) {
        this.fnZoomTo("eyes");
        return;
      }
      if (_.contains([1, 2, 3, 31, 36, 33], iId)) {
        this.fnZoomTo("lips");
        return;
      }
      return this.fnZoomTo("face");
    };

    VmeClass.prototype.fnZoomTo = function(sTo) {
      return this.vmeHtml5.zoomTo(sTo);
    };

    VmeClass.prototype.fnZoomIn = function() {
      var pos, scale;
      pos = this.vmeHtml5.getPosition();
      scale = pos[2];
      scale += 0.1;
      scale = scale > this.iMaxZoom ? this.iMaxZoom : scale;
      return this.vmeHtml5.setPosition(NaN, NaN, scale, scale);
    };

    VmeClass.prototype.fnZoomOut = function() {
      var pos, scale;
      pos = this.vmeHtml5.getPosition();
      scale = pos[2];
      scale -= 0.1;
      scale = scale < this.iMinZoom ? this.iMinZoom : scale;
      return this.vmeHtml5.setPosition(NaN, NaN, scale, scale);
    };

    VmeClass.prototype.fnZoomInFeature = function(iFeature, iSide) {
      if (iSide == null) {
        iSide = 0;
      }
      return this.vmeHtml5.controlStageChild(iFeature, 0, iSide, "bigger", 10);
    };

    VmeClass.prototype.fnZoomOutFeature = function(iFeature, iSide) {
      if (iSide == null) {
        iSide = 0;
      }
      return this.vmeHtml5.controlStageChild(iFeature, 0, iSide, "smaller", 10);
    };

    VmeClass.prototype.fnGetCurrentZoom = function() {
      var pos;
      pos = this.vmeHtml5.getPosition();
      return pos[2];
    };

    VmeClass.prototype.fnApplyZoom = function(scale) {
      return this.vmeHtml5.setPosition(NaN, NaN, scale, scale);
    };

    VmeClass.prototype.fnEnableRetraceAllMode = function() {
      var sTeethFeatureStatus;
      if (!this.bRetraceModeIsOn) {
        this.aPositionAndScale = this.vmeHtml5.getPosition();
      }
      this.bRetraceModeIsOn = true;
      this.vmeHtml5.stopTracingMode();
      console.log('VME: Enable retrace mode of ALL');
      this._fnNativeStartTracingMode(Alcon.Config.oFeatures.FEATURE_MASCARA, null);
      this._fnNativeStartTracingMode(Alcon.Config.oFeatures.FEATURE_LIPSTICK, null);
      sTeethFeatureStatus = this.fnGetFeatureTraceStatus(Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING);
      if (sTeethFeatureStatus === 'guessed' || sTeethFeatureStatus === 'traced') {
        this._fnNativeStartTracingMode(Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING);
      }
      this._fnNativeStartTracingMode(Alcon.Config.oFeatures.FEATURE_CONTACTS, null);
      this.fnSetFeatureTraceStatus(Alcon.Config.oFeatures.FEATURE_HAIR, null);
      this._fnNativeControlStageChild(-1, 0, 0, "handleColor", 0xB2934C);
      return this._fnNativeControlStageChild(-1, 0, 0, "traceColor", 0xFFFFFF);
    };

    VmeClass.prototype.fnEnableRetraceMode = function(iFeatureId, iSide, bStopPrevTracing) {
      var sTeethFeatureStatus;
      if (bStopPrevTracing == null) {
        bStopPrevTracing = true;
      }
      if (!this.bRetraceModeIsOn) {
        this.aPositionAndScale = this.vmeHtml5.getPosition();
      }
      console.log('VME: Enable retrace mode of ' + iFeatureId);
      this.bRetraceModeIsOn = true;
      if (bStopPrevTracing === true) {
        this.vmeHtml5.stopTracingMode();
      }
      this._fnNativeStartTracingMode(iFeatureId, iSide);
      if (iFeatureId === Alcon.Config.oFeatures.FEATURE_LIPSTICK) {
        sTeethFeatureStatus = this.fnGetFeatureTraceStatus(Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING);
        if (sTeethFeatureStatus === 'guessed' || sTeethFeatureStatus === 'traced') {
          this._fnNativeStartTracingMode(Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING);
        }
      }
      this._fnNativeControlStageChild(-1, 0, 0, "handleColor", 0xB2934C);
      this._fnNativeControlStageChild(-1, 0, 0, "traceColor", 0xFFFFFF);
      return this.fnZoomToFeature(iFeatureId);
    };

    VmeClass.prototype.fnEnableInitialTrace = function() {
      if (!this.bRetraceModeIsOn) {
        this.aPositionAndScale = this.vmeHtml5.getPosition();
      }
      console.log('VME: Enable initial trace');
      this.bRetraceModeIsOn = true;
      this.vmeHtml5.stopTracingMode();
      this._fnNativeControlStageChild(Alcon.Config.oFeatures.FEATURE_TRACING_INITIAL, 0, 0, "pointIndex", 0);
      this._fnNativeStartTracingMode(Alcon.Config.oFeatures.FEATURE_TRACING_INITIAL, 0, -1, false);
      this._fnNativeControlStageChild(-1, 0, 0, "handleColor", 0xB2934C);
      return this.vmeHtml5.zoomTo('face');
    };

    VmeClass.prototype.fnDisableRetraceMode = function() {
      var s1, s2, x, y, _ref;
      if (!this.bRetraceModeIsOn) {
        return;
      }
      console.log('Disable retrace mode');
      this.bRetraceModeIsOn = false;
      this.vmeHtml5.stopTracingMode();
      if (this.aPositionAndScale != null) {
        _ref = this.aPositionAndScale, x = _ref[0], y = _ref[1], s1 = _ref[2], s2 = _ref[3];
        return this.vmeHtml5.setPosition(x, y, s1, s2);
      } else {
        return this.fnZoomTo('face');
      }
    };

    VmeClass.prototype.fnToggleTeethOutline = function(bTeethAreShowing) {
      if (bTeethAreShowing) {
        this.fnSetFeatureTraceStatus(Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING, 'traced');
      } else {
        this.fnSetFeatureTraceStatus(Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING, 'not-present');
      }
      return this.fnEnableRetraceMode(Alcon.Config.oFeatures.FEATURE_LIPSTICK, 0, false);
    };

    VmeClass.prototype.fnToggleBeforeAfterMode = function() {
      console.log('Toggle before/after mode');
      this.bIsBeforeAfterMode = !this.bIsBeforeAfterMode;
      return this.vmeHtml5.showBeforeAfter(this.bIsBeforeAfterMode);
    };

    VmeClass.prototype.fnGenerate9LesensImage = function(sCallback) {
      var oLens, oTranslations, suffix, _i, _len, _ref;
      suffix = Alcon.Session.get('sVmeImageType') === 'user' ? '_user' : '';
      console.log("Generate 9 lenses image with " + suffix + " suffix");
      oTranslations = {};
      _ref = window.GLOBAL.aLenses;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        oLens = _ref[_i];
        oTranslations[oLens.apptextKey] = oLens.label;
      }
      oTranslations.subtle = AlconAppTexts.subtle;
      oTranslations.vibrant = AlconAppTexts.vibrant;
      if (Alcon.Config.sLang === "ru") {
        oTranslations.alcon9Cols = 3;
        oTranslations.fontSize = 11;
        oTranslations.alcon9ProductList = "honey,blue,green,sterlinggrey,brilliantblue,gemstonegreen";
      }
      return setTimeout(function() {
        return Alcon.Vme.vmeHtml5.alcon9b(sCallback, suffix, 0, 0, 20, true, oTranslations);
      }, 0);
    };


    /*
    Note: because vme couldnt determine 'lightbrown' from 'hazel' and 'darkbrown' from 'black',
    it returns 'lightbrown' or 'darkbrown' and then we have to set rendom color.
    Also we define skin and hair color to constant values, beacuse we don't have any recomendations for it
     */

    VmeClass.prototype.fnScanPhoto = function() {
      var oScanResult;
      oScanResult = this.vmeHtml5.scanPhoto();
      oScanResult.skinColor = 'fair-to-medium';
      oScanResult.hairColor = 'red';
      return oScanResult;
    };

    VmeClass.prototype.fnCaptureMakeover = function() {
      return this.vmeHtml5.captureMakeover(null, 0, 'jpg');
    };

    VmeClass.prototype.fnGetLensesGridImage = function() {
      return this.sLensesGridImage;
    };

    VmeClass.prototype.fnGetShareImage = function(sCallback, oParams) {
      var sImg1, sImg2, sImg3, sImg4, sImg5, _ref;
      if ((oParams.aAfterImages != null) && oParams.aAfterImages.length) {
        _ref = oParams.aAfterImages, sImg1 = _ref[0], sImg2 = _ref[1], sImg3 = _ref[2], sImg4 = _ref[3], sImg5 = _ref[4];
      } else if (oParams.sAfterImage != null) {
        sImg1 = oParams.sAfterImage;
      } else {
        sImg1 = this.sBeforeImageSrc;
        sImg2 = this.fnGetCurrentModeImage();
      }
      return this.vmeHtml5.alconShare1(sCallback, {
        printHeaderLine1: AlconAppTexts.printHeaderLine1,
        printHeaderLine2: AlconAppTexts.printHeaderLine2,
        printHeaderLine3: AlconAppTexts.printHeaderLine3,
        printFooterLine: AlconAppTexts.printFooterLine,
        printHeaderLine2FontSize: 31,
        linkToHeader: "" + Alcon.Config.oUrls.sBase + "assets/images/shareHeader.png",
        fontFamily: (function() {
          switch (Alcon.Config.sProject) {
            case 'alcon-nvi':
              return 'ambest';
            case 'alcon-poland':
              return 'arial';
            default:
              return 'quicksand';
          }
        })()
      }, sImg1, sImg2, sImg3, sImg4, sImg5);
    };

    VmeClass.prototype.fnGetFeatureTraceStatus = function(iFeatureId) {
      if (iFeatureId === void 0) {
        return;
      }
      switch (this.vmeHtml5.setFeatureTraceStatus(iFeatureId, 0, 0)) {
        case 0:
          return 'not-traced';
        case 1:
          return 'traced';
        case 2:
          return 'guessed';
        case 3:
          return 'not-present';
      }
    };

    VmeClass.prototype.fnSetFeatureTraceStatus = function(iFeatureId, sTraceStatus) {
      var e, iTraceStatus;
      if (iFeatureId === void 0 || sTraceStatus === void 0) {
        return;
      }
      iTraceStatus = (function() {
        switch (sTraceStatus) {
          case 'not-traced':
            return 0;
          case 'traced':
            return 1;
          case 'guessed':
            return 2;
          case 'not-present':
            return 3;
        }
      })();
      try {
        return this.vmeHtml5.setFeatureTraceStatus(iFeatureId, 0, 0, iTraceStatus);
      } catch (_error) {
        e = _error;
        setTimeout(function() {
          return Alcon.Vme.vmeHtml5.setFeatureTraceStatus(iFeatureId, 0, 0, iTraceStatus);
        }, 100);
        return console.log(e.message);
      }
    };

    return VmeClass;

  })();


  /*
  Global methods, with fixed names, that called by Flash VME
   */

  window.onVmeResponseEvent = (function() {
    var initialTracingClickCounter;
    initialTracingClickCounter = 0;
    return function(iCode) {
      if (iCode === 105) {
        return initialTracingClickCounter = 0;
      }
      if (iCode === 107) {
        initialTracingClickCounter++;
        if (initialTracingClickCounter === 4) {
          return Alcon.EventDispatcher.trigger('do:stop-placing-points');
        }
      }
    };
  })();

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Alcon.VmeMobileClass = (function(_super) {
    __extends(VmeMobileClass, _super);

    function VmeMobileClass() {
      return VmeMobileClass.__super__.constructor.apply(this, arguments);
    }

    VmeMobileClass.prototype.iMinZoom = 0.1;

    VmeMobileClass.prototype.iVmeHairId = null;

    VmeMobileClass.prototype.fnInitialize = function() {
      var dfd;
      console.log('VME Mobile: initialization');
      dfd = new jQuery.Deferred();
      this.vmeHtml5 = new vme($("#vme")[0]);
      $('body').addClass('html5-vme-app');
      this.vmeHtml5.alconShare1 = Alcon.Utils.Helpers.fnGetSaveShareImageFromCanvas;
      if (Alcon.Config.bMobile || Alcon.Config.bIsTablet) {
        this.vmeHtml5.dragAndZoom(false, true);
      }
      this.vmeHtml5.model.stageMain.addEventListener("VmeResponseEvent", (function(_this) {
        return function(oResponse) {
          if (oResponse.responseCode === 106 && oResponse.data === 0) {
            return Alcon.Utils.Helpers.fnHideLoading();
          }
        };
      })(this));
      dfd.resolve("vme-loaded");
      return dfd.promise();
    };

    VmeMobileClass.prototype.fnCaptureMakeover = function() {
      return this.vmeHtml5.captureMakeover(null, 0, 'png');
    };

    VmeMobileClass.prototype.fnApplyFace = function(iId, cb) {
      var image, vmeImage;
      Alcon.Session.set('sVmeImageType', 'model');
      $(".vme-controls .retrace").addClass("retrace-inactive");
      image = _.find(Alcon.DataStorage.aFaces, function(oFace) {
        return oFace.id === iId;
      });
      if (Alcon.Config.bIsMobile && !image.bIsRecalculatedTraceData) {
        Alcon.Vme.vmeHtml5.setPhotoTrace(Alcon.Vme.vmeHtml5.modifyPhotoTrace(image.photoTrace, "scale", 640 / 990, 640 / 990));
        image.bIsRecalculatedTraceData = true;
        image.photoTrace = Alcon.Vme.vmeHtml5.getPhotoTrace();
      }
      this.sBeforeImageSrc = image.url;
      vmeImage = new Image();
      vmeImage.src = image.url;
      vmeImage.onload = function() {
        var params, scale;
        if (!Alcon.Config.bIsMobile) {
          Alcon.Session.vmePhotoWidth = vmeImage.width / 2;
          Alcon.Session.vmePhotoHeight = vmeImage.height / 2;
        } else {
          Alcon.Session.vmePhotoWidth = vmeImage.width;
          Alcon.Session.vmePhotoHeight = vmeImage.height;
        }
        scale = Alcon.Config.bIsMobile ? 1 : 0.5;
        params = '{ "zoom":"face", "scale": ' + scale + ', "photoTrace": "' + image.photoTrace + '" }';
        Alcon.Vme.vmeHtml5.applyMakeoverItem(Alcon.Config.oFeatures.FEATURE_PHOTO, 0, Alcon.Config.oFeatures.SIDE_BOTH, 0, 0, '', 0, 0, vmeImage.src, params);
        setTimeout((function() {
          if (!Alcon.Config.bIsMobile) {
            $(".faceMappingAppContainer .imageTrace").css({
              "background-image": "url('" + $("#StageMain_capturedBitmap")[0].toDataURL("image/jpeg") + "')",
              width: Alcon.Session.vmePhotoWidth,
              height: Alcon.Session.vmePhotoHeight
            });
            $(".faceMappingAppContainer #myCanvas").attr("width", Alcon.Session.vmePhotoWidth);
            $(".faceMappingAppContainer #myCanvas").attr("height", Alcon.Session.vmePhotoHeight);
            $(".mask").attr("width", Alcon.Session.vmePhotoWidth);
            $(".mask").attr("height", Alcon.Session.vmePhotoHeight);
          } else {
            $(".faceMappingAppContainer .imageTrace img").attr('src', image.url);
          }
          window.faceMappingApp = new FaceMappingApp($(".faceMappingAppContainer"));
          return typeof cb === "function" ? cb() : void 0;
        }), 0);
        return $(window).trigger('resize');
      };
      return console.log("VME Mobile: Apply Face " + iId);
    };

    VmeMobileClass.prototype.fnApplyPhoto = function(aTraceData, sDataUrl, cb) {
      Alcon.Session.set('sVmeImageType', 'user');
      Alcon.Session.set('aSelectedTracing', aTraceData);
      $(".vme-controls .retrace-inactive").removeClass("retrace-inactive");
      this.iMinZoom = 0;
      this.sBeforeImageSrc = sDataUrl;
      this.vmeHtml5.applyMakeoverItem(Alcon.Config.oFeatures.FEATURE_PHOTO, 0, Alcon.Config.oFeatures.SIDE_BOTH, 0, 0, '', 0, 0, sDataUrl, '{ "zoom":"face" }');
      return setTimeout((function() {
        if (!Alcon.Config.bIsMobile) {
          $(".faceMappingAppContainer .imageTrace").css({
            "background-image": "url('" + $("#StageMain_capturedBitmap")[0].toDataURL("image/jpeg") + "')",
            "width": Alcon.Session.vmePhotoWidth,
            "height": Alcon.Session.vmePhotoHeight
          });
          $(".faceMappingAppContainer #myCanvas").attr("width", Alcon.Session.vmePhotoWidth);
          $(".faceMappingAppContainer #myCanvas").attr("height", Alcon.Session.vmePhotoHeight);
        } else {
          $(".faceMappingAppContainer .imageTrace img").attr('src', $("#StageMain_capturedBitmap")[0].toDataURL("image/jpeg"));
        }
        window.faceMappingApp = new FaceMappingApp($(".faceMappingAppContainer"));
        Alcon.Vme.vmeHtml5.setTracingCoordinates(aTraceData);
        Alcon.Utils.Helpers.fnHideLoading();
        $(window).trigger('resize');
        return cb();
      }), 1000);
    };

    VmeMobileClass.prototype.fnGenerate9LesensImage = function(sCallback) {
      var canvasfull, context, i, x, y;
      canvasfull = document.createElement("canvas");
      canvasfull.height = 1000;
      canvasfull.width = 1000;
      context = canvasfull.getContext("2d");
      i = 1;
      x = 0;
      y = 0;
      while (i < 10) {
        this.fnApplyLens(i);
        setTimeout((function(_this) {
          return function() {
            var someimg;
            someimg = new Image();
            someimg.src = $("#StageMain_capturedBitmap")[0].toDataURL("image/jpeg");
            return someimg.onload = function() {
              context.drawImage(someimg, x, y, 50, 50);
            };
          };
        })(this), 1000);
        i++;
        x = x + 50;
        y = y + 50;
      }
      return setTimeout((function(_this) {
        return function() {
          Alcon.Router.oVmeView.fnRenderLensesGrid(canvasfull.toDataURL("image/jpeg"));
        };
      })(this), 15000);
    };

    VmeMobileClass.prototype.fnToggleBeforeAfterMode = function() {
      console.log('VME Mobile: Toggle mobile before/after mode');
      this.bIsBeforeAfterMode = !this.bIsBeforeAfterMode;
      if (this.bIsBeforeAfterMode) {
        if (Alcon.Config.bIsMobile) {
          $('.before-after-img .before').css('background-image', "url(" + this.sBeforeImageSrc + ")");
          $('.before-after-img .before').css('background-position', "left " + ($('#StageMain').position().top) + "px");
          $('.before-after-img .after').css('background-image', "url(" + (this.fnCaptureMakeover()) + ")");
          $('.before-after-img .after').css('background-position', "right " + ($('#StageMain').position().top) + "px");
        } else {
          $('.before-after-img .before img').attr('src', this.sBeforeImageSrc);
          $('.before-after-img .after img').attr('src', this.fnCaptureMakeover());
        }
        $('.before-after-img .before img').on('load', function() {
          $('.before-after-img').addClass('on');
          return $('.before-after-img .before, .before-after-img .after').css('width', "" + ($('.before-after-img .before img').width()) + "px");
        }).each(function() {
          if (this.complete) {
            return $(this).load();
          }
        });
        return $(window).on('resize', function() {
          return $('.before-after-img .before, .before-after-img .after').css('width', "" + ($('.before-after-img .before img').width()) + "px");
        });
      } else {
        return $('.before-after-img').removeClass('on');
      }
    };

    VmeMobileClass.prototype._fnUpdateBeforeAfter = function(sTimeout) {
      if (sTimeout == null) {
        sTimeout = 0;
      }
      if (this.bIsBeforeAfterMode) {
        return setTimeout((function(_this) {
          return function() {
            if (Alcon.Config.bIsMobile) {
              $('.before-after-img .after').css('background-image', "url(" + (_this.fnCaptureMakeover()) + ")");
              return $('.before-after-img .after').css('background-position', "right " + ($('#StageMain').position().top) + "px");
            } else {
              return $('.before-after-img .after img').attr('src', _this.fnCaptureMakeover());
            }
          };
        })(this), sTimeout);
      }
    };

    VmeMobileClass.prototype.fnZoomTo = function(sTo) {
      console.log("Vme Mobile: zoom to " + sTo);
      return this.vmeHtml5.zoom(sTo);
    };

    VmeMobileClass.prototype.fnZoomInFeature = function(iFeature, iSide) {
      var tracedArea;
      if (iSide == null) {
        iSide = 0;
      }
      if (iSide === 43) {
        iSide = 1;
      }
      if (iSide === 44) {
        iSide = 2;
      }
      this._fnNativeStartTracingMode(iFeature, iSide);
      console.log('zoom in feature ' + iFeature + ' for mobile iSide ' + iSide);
      this.vmeHtml5.controlStageChild(iFeature, 0, iSide, "bigger", 10);
      if (iSide === Alcon.Config.oFeatures.SIDE_LEFT) {
        tracedArea = Alcon.Config.oFeatures.TRACEDAREA_CONTACT_LEFT;
      }
      if (iSide === Alcon.Config.oFeatures.SIDE_RIGHT) {
        tracedArea = Alcon.Config.oFeatures.TRACEDAREA_CONTACT_RIGHT;
      }
      if (iFeature === Alcon.Config.oFeatures.FEATURE_EYELINER) {
        tracedArea = 0;
      }
      if (iFeature === Alcon.Config.oFeatures.FEATURE_LIPSTICK) {
        tracedArea = Alcon.Config.oFeatures.TRACEDAREA_LIPS;
      }
      return window.faceMappingApp.drawShapes(iFeature, 0, 0, tracedArea);
    };

    VmeMobileClass.prototype.fnZoomOutFeature = function(iFeature, iSide) {
      var i, photoTraceIndex, scale, tracedArea, _i, _ref;
      if (iSide == null) {
        iSide = 0;
      }
      if (iSide === 43) {
        iSide = 1;
      }
      if (iSide === 44) {
        iSide = 2;
      }
      this._fnNativeStartTracingMode(iFeature, iSide);
      console.log('zoom out feature ' + iFeature + ' for mobile iSide ' + iSide);
      for (i = _i = 0, _ref = window.faceMappingApp.shapeArray.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        photoTraceIndex = window.faceMappingApp.shapeArray[i];
      }
      scale = Alcon.Vme.vmeHtml5.model.photoTrace[photoTraceIndex].scaleX;
      if (scale <= 0.15) {
        return;
      }
      this.vmeHtml5.controlStageChild(iFeature, 0, iSide, "smaller", 10);
      if (iSide === Alcon.Config.oFeatures.SIDE_LEFT) {
        tracedArea = Alcon.Config.oFeatures.TRACEDAREA_CONTACT_LEFT;
      }
      if (iSide === Alcon.Config.oFeatures.SIDE_RIGHT) {
        tracedArea = Alcon.Config.oFeatures.TRACEDAREA_CONTACT_RIGHT;
      }
      if (iFeature === Alcon.Config.oFeatures.FEATURE_EYELINER) {
        tracedArea = 0;
      }
      if (iFeature === Alcon.Config.oFeatures.FEATURE_LIPSTICK) {
        tracedArea = Alcon.Config.oFeatures.TRACEDAREA_LIPS;
      }
      return window.faceMappingApp.drawShapes(iFeature, 0, 0, tracedArea);
    };

    VmeMobileClass.prototype.fnDisableRetraceMode = function() {
      this.bRetraceModeIsOn = false;
      if (window.faceMappingApp) {
        window.faceMappingApp.clearEverything();
        window.faceMappingApp.destroy();
      }
      this.vmeHtml5.stopTracingMode();
      $(".faceMappingAppContainer").hide();
      return $("#vme-container").show();
    };

    VmeMobileClass.prototype.fnEnableRetraceAllMode = function() {};

    VmeMobileClass.prototype.fnEnableRetraceMode = function(iFeatureId, iSide, bStopPrevTracing) {
      var modelHeight, modelWidth, sTeethFeatureStatus, tracedArea;
      if (iSide == null) {
        iSide = 0;
      }
      if (bStopPrevTracing == null) {
        bStopPrevTracing = true;
      }
      console.log('retracemode', iFeatureId);
      this.bRetraceModeIsOn = true;
      if (bStopPrevTracing === true) {
        this.vmeHtml5.stopTracingMode();
      }
      this._fnNativeStartTracingMode(iFeatureId, iSide);
      tracedArea = this.fnGetTracedArea(iFeatureId);
      if (iFeatureId === Alcon.Config.oFeatures.FEATURE_LIPSTICK || Alcon.Config.oFeatures.FEATURE_LIPLINER || Alcon.Config.oFeatures.FEATURE_LIPGLOSS) {
        sTeethFeatureStatus = this.fnGetFeatureTraceStatus(Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING);
        if (sTeethFeatureStatus === 'guessed' || sTeethFeatureStatus === 'traced') {
          this._fnNativeStartTracingMode(Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING);
          tracedArea.push = TracedArea.TRACEDAREA_TEETH;
        }
      }
      $(".faceMappingAppContainer").show();
      if (Alcon.Config.bIsMobile) {
        modelWidth = $('.main').outerWidth() - 16;
        modelHeight = Math.round(Math.round(Alcon.Session.vmePhotoHeight * modelWidth) / Alcon.Session.vmePhotoWidth);
        $(".imageTrace").css({
          "width": Alcon.Session.vmePhotoWidth,
          "height": Alcon.Session.vmePhotoHeight
        });
        $(".mask").css({
          "width": modelWidth,
          "height": modelHeight
        });
        $("#myCanvas").attr({
          "width": Alcon.Session.vmePhotoWidth,
          "height": Alcon.Session.vmePhotoHeight
        });
      }
      $("#vme-container").hide();
      window.faceMappingApp.enable();
      return window.faceMappingApp.setState(iFeatureId, 0, 0, tracedArea);
    };

    VmeMobileClass.prototype.fnGetTracedArea = function(iFeatureId) {
      switch (iFeatureId) {
        case Alcon.Config.oFeatures.FEATURE_FOUNDATION:
          return [TracedArea.TRACEDAREA_FACE];
        case Alcon.Config.oFeatures.FEATURE_CONCEALER:
          return [TracedArea.TRACEDAREA_CONCEALER_UNDEREYE_LEFT, TracedArea.TRACEDAREA_CONCEALER_UNDEREYE_RIGHT];
        case Alcon.Config.oFeatures.FEATURE_BLUSH:
          return [TracedArea.TRACEDAREA_BLUSH_APPLE_LEFT, TracedArea.TRACEDAREA_BLUSH_APPLE_RIGHT];
        case Alcon.Config.oFeatures.FEATURE_FACE_POWDER:
          return [TracedArea.TRACEDAREA_FACE];
        case Alcon.Config.oFeatures.FEATURE_EYESHADOW:
          return [TracedArea.TRACEDAREA_EYESHADOW_LEFT_WASH, TracedArea.TRACEDAREA_EYESHADOW_RIGHT_WASH];
        case Alcon.Config.oFeatures.FEATURE_EYELINER:
          return [TracedArea.TRACEDAREA_EYE_LEFT, TracedArea.TRACEDAREA_EYE_RIGHT];
        case Alcon.Config.oFeatures.FEATURE_EYEBROW_PENCIL:
          return [TracedArea.TRACEDAREA_EYEBROW_LEFT, TracedArea.TRACEDAREA_EYEBROW_RIGHT];
        case Alcon.Config.oFeatures.FEATURE_MASCARA:
          return [TracedArea.TRACEDAREA_EYE_LEFT, TracedArea.TRACEDAREA_EYE_RIGHT];
        case Alcon.Config.oFeatures.FEATURE_LIPLINER:
          return [TracedArea.TRACEDAREA_LIPS];
        case Alcon.Config.oFeatures.FEATURE_LIPSTICK:
          return [TracedArea.TRACEDAREA_LIPS];
        case Alcon.Config.oFeatures.FEATURE_LIPGLOSS:
          return [TracedArea.TRACEDAREA_LIPS];
        case Alcon.Config.oFeatures.FEATURE_HAIR:
          return [TracedArea.TRACEDAREA_HAIR];
        case Alcon.Config.oFeatures.FEATURE_GLASSES:
          return [TracedArea.TRACEDAREA_GLASSES];
        case Alcon.Config.oFeatures.FEATURE_EARRING:
          return [TracedArea.TRACEDAREA_EARRING_LEFT, TracedArea.TRACEDAREA_EARRING_RIGHT];
        case Alcon.Config.oFeatures.FEATURE_HAIRCLIPS:
          return [TracedArea.TRACEDAREA_HEADWEAR];
        case Alcon.Config.oFeatures.FEATURE_NECKLACE:
          return [TracedArea.TRACEDAREA_NECKLACE];
        case Alcon.Config.oFeatures.FEATURE_HEADWEAR:
          return [TracedArea.TRACEDAREA_HEADWEAR];
      }
    };

    return VmeMobileClass;

  })(Alcon.VmeClass);

}).call(this);
;(function() {
  Alcon.Utils.easyXdmAjax = function() {
    var oHeaders, sProperty, temp_xhr, _arguments;
    _arguments = arguments;
    arguments[4] = arguments[4] || 'POST';
    arguments[5] = arguments[5] || null;
    oHeaders = {};
    if (typeof arguments[6] === 'object') {
      for (sProperty in arguments[6]) {
        oHeaders[sProperty] = arguments[6][sProperty];
      }
    }
    if ((arguments[5] != null) && arguments[5].toLowerCase() === 'json') {
      oHeaders['Accept'] = 'application/json';
    }
    temp_xhr = new easyXDM.Rpc({
      swf: arguments[0].swf,
      remote: arguments[0].remote,
      remoteHelper: arguments[0].remoteHelper
    }, {
      remote: {
        request: {}
      }
    });
    return temp_xhr.request({
      url: arguments[1],
      method: arguments[4],
      data: arguments[2],
      timeout: 120000,
      type: arguments[5],
      headers: oHeaders
    }, function(response) {
      if (jQuery.isFunction(_arguments[3])) {
        _arguments[3](response);
      }
      return temp_xhr.destroy();
    }, function(response) {
      if (jQuery.isFunction(_arguments[3])) {
        _arguments[3](response);
      }
      return temp_xhr.destroy();
    });
  };

}).call(this);
;(function() {
  var __slice = [].slice;

  Alcon.Utils.Helpers = {
    fnVMEColor: function(color) {
      if (typeof color === "undefined") {
        return 0;
      }
      color = _.someFormatToHex(color);
      color = color.indexOf('#') === 0 ? color.replace('#', '') : color;
      return "0x" + color;
    },
    fnGetLensPlaceholder: function() {
      return {
        id: null,
        thumbnail: 'assets/images/lenses/no-lens.png',
        label: AlconAppTexts.noLens2
      };
    },
    isIE: {
      ie8andBelow: function() {
        return '\v' === 'v';
      },
      ie7: function() {
        var checkIE;
        (checkIE = document.createElement("b")).innerHTML = "<!--[if IE 7]><i></i><![endif]-->";
        return checkIE.getElementsByTagName("i").length === 1;
      },
      ie8: function() {
        var checkIE;
        (checkIE = document.createElement("b")).innerHTML = "<!--[if IE 8]><i></i><![endif]-->";
        return checkIE.getElementsByTagName("i").length === 1;
      },
      ie9: function() {
        var checkIE;
        (checkIE = document.createElement("b")).innerHTML = "<!--[if IE 9]><i></i><![endif]-->";
        return checkIE.getElementsByTagName("i").length === 1;
      },
      ie10: function() {
        return eval("/*@cc_on!@*/false") && document.documentMode === 10;
      },
      any: function() {
        return this.ie8andBelow() || this.ie9() || this.ie10();
      }
    },
    fnImageUrlToBase64: function(url, cb) {
      var canvas, ctx, img;
      if (url.indexOf('data:image/') === 0) {
        console.log('get dataURL on canvas');
        canvas = document.createElement('CANVAS');
        ctx = canvas.getContext('2d');
        img = new Image;
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
          var dataURL;
          canvas.height = img.height;
          canvas.width = img.width;
          ctx.drawImage(img, 0, 0);
          dataURL = canvas.toDataURL("image/png");
          cb(dataURL);
          return canvas = null;
        };
        return img.src = url;
      } else {
        console.log('get dataURL from server');
        return $.ajax({
          url: 'proxyimage?url=' + encodeURIComponent(url),
          type: 'GET',
          dataType: 'json'
        }).then(function(jqXHR) {
          return cb(jqXHR.data);
        }, function(oXHR) {
          return Alcon.Utils.Helpers.fnDisplayRequestFailed(oXHR.statusText, oXHR.status);
        });
      }
    },
    fnCropImage: function(img, l, r, width, height, callback) {
      var canvas, ctx, image;
      if (this.isIE.ie8andBelow() && typeof FlashCanvas !== "undefined") {

        /*
        canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        
        document.getElementById("canvas-crop-target-ie").appendChild(canvas)
        FlashCanvas.initElement(canvas)
        
        ctx = canvas.getContext("2d")
        (image = new Image()).src = img
        
         * image.onload event doesn't work properly
        setTimeout ()->
            ctx.drawImage(image, -Math.abs(l), -Math.abs(r), image.width, image.height)
        
             * https://groups.google.com/forum/#!msg/flashcanvas/31h-iVkK8XQ/418FgkwWFHkJ
            setTimeout ()->
                respone = canvas.toDataURL()
                callback(respone)
            ,1000
        ,1000
         */
      } else {
        canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        (image = new Image()).src = img;
        return setTimeout(function() {
          var respone;
          ctx.drawImage(image, -Math.abs(l), -Math.abs(r), image.width, image.height);
          respone = canvas.toDataURL();
          return callback(respone);
        }, 1000);
      }
    },
    fnScaleDownImage: function(sImgUrl, iMaxHeight, callback, sImageType) {
      var oImage;
      (oImage = new Image()).src = sImgUrl;
      return setTimeout(function() {
        var canvas, ctx, iNewHeight, iNewWidth, respone;
        if (oImage.height <= iMaxHeight) {
          return callback(sImgUrl);
        }
        iNewWidth = iMaxHeight * oImage.width / oImage.height;
        iNewHeight = iMaxHeight;
        canvas = document.createElement('canvas');
        canvas.width = iNewWidth;
        canvas.height = iNewHeight;
        ctx = canvas.getContext("2d");
        ctx.drawImage(oImage, 0, 0, oImage.width, oImage.height, 0, 0, iNewWidth, iNewHeight);
        if (sImageType != null) {
          respone = canvas.toDataURL(sImageType);
        } else {
          respone = canvas.toDataURL();
        }
        return callback(respone);
      }, 1000);
    },
    fnFixTraceData: function(oTraceReuslt) {
      var aPoints, sTraceCoords, _i, _len, _ref;
      oTraceReuslt.croppedCoords = $.parseJSON(oTraceReuslt.croppedCoords);
      aPoints = [];
      oTraceReuslt.tracedata = oTraceReuslt.tracedata.split(' ');
      _ref = oTraceReuslt.tracedata;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        sTraceCoords = _ref[_i];
        aPoints.push({
          x: oTraceReuslt.croppedCoords[0] + parseFloat(sTraceCoords.split(",")[0]),
          y: oTraceReuslt.croppedCoords[1] + parseFloat(sTraceCoords.split(",")[1])
        });
      }
      oTraceReuslt.tracedata = aPoints;
      return oTraceReuslt;
    },
    fnDisplayRequestFailed: function(message, status, code) {
      var msg;
      Alcon.Utils.Helpers.fnHideLoading();
      if (message != null ? message.message : void 0) {
        msg = message.message;
      } else if (message != null) {
        msg = message;
      }
      return alert(AlconAppTexts.requestFailed + '\n' + 'Code: ' + code + '\n' + 'Status: ' + status + '\n' + 'Message: ' + msg);
    },

    /*
    Show loader
    Post uploaded image to server, where it will be traced and respond with tracing data
    Crop image if server wants it
    Load image to vme
    If tracing failed navigate to manual tracing, select-lenses otherwise
    Hide uploader
     */
    fnFindFaceAndContinue: function(sPhotoDataUrl) {
      Alcon.Utils.Helpers.fnShowLoading();
      return Alcon.Utils.easyXdmAjax({
        swf: window.location.protocol + "//iphone.dailymakeover.com/remotexdm/easyxdm.swf",
        remote: window.location.protocol + "//iphone.dailymakeover.com/cors/",
        remoteHelper: window.location.protocol + "//iphone.dailymakeover.com/remotexdm/name.html"
      }, Alcon.Config.oUrls.sFindFace, {
        uploadedfile: sPhotoDataUrl
      }, function(oResponse) {
        var _ref;
        console.log(oResponse);
        if (oResponse.status !== 200) {
          Alcon.Utils.Helpers.fnDisplayRequestFailed(oResponse != null ? oResponse.message : void 0, (_ref = oResponse.data) != null ? _ref.status : void 0, oResponse != null ? oResponse.code : void 0);
          return;
        }
        oResponse = $.parseJSON(oResponse.data);
        Alcon.Utils.Helpers.fnResetLook();
        if (Alcon.Router.oSelectLensView) {
          Alcon.Router.oSelectLensView.fnClearMatchMode();
        }
        Alcon.Session.unset('iSelectedFaceId');
        Alcon.Session.set('bUserFaceTraced', oResponse.status === '1');
        if (Alcon.Session.get('bUserFaceTraced')) {
          Alcon.Utils.Helpers.fnFixTraceData(oResponse);
          return Alcon.Vme.fnApplyPhoto(oResponse.tracedata, sPhotoDataUrl, function() {
            Alcon.Router.navigate('select-face', {
              trigger: true
            });
            Alcon.Utils.Helpers.fnHideLoading();
            Alcon.Session.set('iFeatureId', Alcon.Config.oFeatures.FEATURE_FOUNDATION);
            Alcon.Router.oRetraceView.render();
            $('.retrace-block__button.retrace-block__button--done, .retrace-block__button--adjust-done').hide();
            $('.retrace-block__button--next').show();
            return Alcon.Router.fnSetState('retrace');
          });
        } else {
          if (Alcon.Config.bIsMobile) {
            return Alcon.Vme.fnApplyPhoto([], sPhotoDataUrl, function() {
              Alcon.Router.navigate('select-face', {
                trigger: true
              });
              return Alcon.Utils.Helpers.fnHideLoading();
            });
          } else {
            Alcon.Router.oCommonModalView.render('autotrace-failed');
            return Alcon.Utils.Helpers.fnHideLoading();
          }
        }
      });
    },
    fnResetLook: function() {
      Alcon.Session.unset('iSelectedClickLookId');
      Alcon.Vme.clearAllProducts();
      Alcon.AppliedProducts.length = 0;
      Alcon.Router.oSelectProductView.fnUpdateAppliedList();
      return Alcon.Vme._fnUpdateBeforeAfter() != null;
    },
    fnResetProduct: function(oProduct, bNeedUpdate) {
      if (bNeedUpdate == null) {
        bNeedUpdate = true;
      }
      Alcon.Vme.clearProduct(oProduct);
      Alcon.AppliedProducts = _.filter(Alcon.AppliedProducts, function(oAppliedProduct) {
        return oAppliedProduct.key !== oProduct.key;
      });
      if (bNeedUpdate) {
        Alcon.Router.oSelectProductView.fnUpdateAppliedList();
        return Alcon.Vme._fnUpdateBeforeAfter() != null;
      }
    },
    fnFindNotRecommendedLenses: function(oOptions) {
      var aNotRecommended;
      aNotRecommended = _.filter(Alcon.DataStorage.aLenses, function(oLens) {
        if (_.indexOf(oLens.recommendations.eye, oOptions.eye) === -1 && oOptions.eye !== null) {
          return true;
        }
        if (_.indexOf(oLens.recommendations.skin, oOptions.skin) === -1 && oOptions.skin !== null) {
          return true;
        }
        if (_.indexOf(oLens.recommendations.hair, oOptions.hair) === -1 && oOptions.hair !== null) {
          return true;
        }
        return false;
      });
      aNotRecommended = _.pluck(aNotRecommended, 'id');
      return aNotRecommended;
    },
    fnGetNameFocusedElement: function() {
      var element, focused;
      element = document.activeElement;
      if (!element || element === document.body) {
        element = null;
      } else if (document.querySelector) {
        element = document.querySelector(":focus");
      }
      if (element != null) {
        focused = element.tagName;
      }
      return focused;
    },
    fnCheckOrientation: function(event, isLandScape) {
      var focused, isFocusedTextField;
      if (isLandScape == null) {
        isLandScape = null;
      }
      if (!Alcon.Config.bIsMobile && !Alcon.Config.bIsTablet) {
        return;
      }
      $('body').removeClass('orientation-locked');
      focused = Alcon.Utils.Helpers.fnGetNameFocusedElement();
      isFocusedTextField = focused === 'INPUT' || focused === 'TEXTAREA';
      if (isLandScape != null) {
        Alcon.Config.isLandScape = isLandScape;
        if (Alcon.Config.bIsMobile && isLandScape && !isFocusedTextField) {
          $('body').addClass('orientation-locked');
        }
        if (Alcon.Config.bIsTablet && !isLandScape && !isFocusedTextField) {
          $('body').addClass('orientation-locked');
        }
      } else {
        if (Alcon.Config.bIsMobile && !isFocusedTextField && $('body').width() > $('body').height()) {
          $('body').addClass('orientation-locked');
        }
        if (Alcon.Config.bIsTablet && !isFocusedTextField && $('body').height() > $('body').width()) {
          $('body').addClass('orientation-locked');
        }
      }
    },
    fnShowLoading: function() {
      return $('body').addClass('loading');
    },
    fnHideLoading: function() {
      return $('body').removeClass('loading');
    },
    fnShowBrowserUnsupported: function() {
      return $('body').addClass('browser-unsupported');
    },
    fnHideBrowserUnsupported: function() {
      return $('body').removeClass('browser-unsupported');
    },
    fnShowDeviceUnsupported: function() {
      return $('body').addClass('device-unsupported');
    },
    fnHideDeviceUnsupported: function() {
      return $('body').removeClass('device-unsupported');
    },
    /*trackPage: function(page, firstTab) {
      var gaId, postMessage, _i, _len, _ref, _results;
      if (firstTab) {
        if (firstTab === "1-click looks") {
          postMessage = "/tryOn/1-click looks/looks/page-1";
        } else {
          postMessage = "/tryOn/" + firstTab + "/page-1";
        }
        this.vmeTrackPage(postMessage);
      }
      if (typeof _gat === "undefined" || _gat === null) {
        return;
      }
      _ref = Alcon.Config.oGA.sAccounts.split(',');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        gaId = _ref[_i];
        _gaq.push(['_setAccount', gaId]);
        _gaq.push(['_setCustomVar', 1, 'project', Alcon.Config.sProject, 2]);
        if (!firstTab || firstTab === "1-click looks") {
          _gaq.push(['_trackPageview', page]);
          _results.push(console.log('_trackPageview: ' + gaId + ": " + page));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    },
    trackEvent: function(category, action, label) {
      var gaId, qsParams, _i, _len, _ref, _results;
      if (!((category != null) || (typeof _gat !== "undefined" && _gat !== null))) {
        return;
      }
      this.vmeTrackEvent('tryOn-' + category);
      _ref = Alcon.Config.oGA.sAccounts.split(',');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        gaId = _ref[_i];
        _gaq.push(['_setAccount', gaId]);
        qsParams = window.location.search ? window.location.search : '';
        _gaq.push(['_set', 'page', '/index.html' + qsParams]);
        _gaq.push(['_setCustomVar', 1, 'project', Alcon.Config.sProject, 2]);
        if ((category != null) && category.indexOf('*') > 0) {
          console.log('_trackEvent: ' + gaId + ": " + category);
          switch (category.split('*').length) {
            case 1:
              _results.push(_gaq.push(['_trackEvent', category.split('*')[0]]));
              break;
            case 2:
              _results.push(_gaq.push(['_trackEvent', category.split('*')[0], category.split('*')[1]]));
              break;
            case 3:
              _results.push(_gaq.push(['_trackEvent', category.split('*')[0], category.split('*')[1], category.split('*')[2]]));
              break;
            default:
              _results.push(void 0);
          }
        } else {
          _gaq.push(['_trackEvent', category, action, label]);
          _results.push(console.log('_trackEvent: ' + gaId + ": " + category + action + label));
        }
      }
      return _results;
    },
    vmeTrackEvent: function(category) {
      window.parent.postMessage('{ "vmeTrackEvent": [{"eventname" : "' + category + '"}] }', '*');
      window.parent.postMessage('{ "vmeGetAds": [{"eventname" : "' + category + '"}] }', '*');
      return console.log("posted Event message: " + category);
    },
    vmeTrackPage: function(page) {
      window.parent.postMessage('{ "vmeTrackPage": [{"eventname" : "' + page + '"}] }', '*');
      window.parent.postMessage('{ "vmeGetAds": [{"eventname" : "' + page + '"}] }', '*');
      return console.log("posted Page message: " + page);
    },*/
    _fnApplyLooksAndCapture: function(aLooks, iIndex, aImages, fnCallback) {
      this.fnResetLook();
      if (aLooks[iIndex].product_data.click_look != null) {
        Alcon.Session.set('iSelectedClickLookId', aLooks[iIndex].product_data.click_look);
      }
      if (aLooks[iIndex].product_data.lens != null) {
        Alcon.Session.set('iSelectedLensId', aLooks[iIndex].product_data.lens);
      }
      if (aLooks[iIndex].product_data.filter != null) {
        Alcon.Session.set('iSelectedFilterId', aLooks[iIndex].product_data.filter);
      }
      if (aLooks[iIndex].product_data.frame != null) {
        Alcon.Session.set('iSelectedFrameId', aLooks[iIndex].product_data.frame);
      }
      return setTimeout((function(_this) {
        return function() {
          aImages.push(Alcon.Vme.fnCaptureMakeover());
          if (iIndex === aLooks.length - 1) {
            return fnCallback();
          } else {
            return _this._fnApplyLooksAndCapture(aLooks, ++iIndex, aImages, fnCallback);
          }
        };
      })(this), 1000);
    },
    fnGetSaveShareImages: function(aLooks, fnCallback) {
      var aImages, oCurentData;
      aImages = [];
      oCurentData = {
        iSelectedClickLookId: Alcon.Session.get('iSelectedClickLookId'),
        iSelectedLensId: Alcon.Session.get('iSelectedLensId'),
        iSelectedFilterId: Alcon.Session.get('iSelectedFilterId'),
        iSelectedFrameId: Alcon.Session.get('iSelectedFrameId')
      };
      return this._fnApplyLooksAndCapture(aLooks, 0, aImages, (function(_this) {
        return function() {
          _this.fnResetLook();
          if (oCurentData.iSelectedClickLookId != null) {
            Alcon.Session.set('iSelectedClickLookId', oCurentData.iSelectedClickLookId);
          }
          if (oCurentData.iSelectedLensId != null) {
            Alcon.Session.set('iSelectedLensId', oCurentData.iSelectedLensId);
          }
          if (oCurentData.iSelectedFilterId != null) {
            Alcon.Session.set('iSelectedFilterId', oCurentData.iSelectedFilterId);
          }
          if (oCurentData.iSelectedFrameId != null) {
            Alcon.Session.set('iSelectedFrameId', oCurentData.iSelectedFrameId);
          }
          return fnCallback(aImages);
        };
      })(this));
    },
    fnRecalculateImageSize: function(iCanvasWidth, iCanvasHeight, iImageWidth, iImageHeight) {
      var iCanvasRatio, iImageRatio, iNewImageHeight, iNewImageWidth;
      iImageRatio = iImageWidth / iImageHeight;
      iCanvasRatio = iCanvasWidth / iCanvasHeight;
      if (iImageRatio < iCanvasRatio) {
        iNewImageHeight = iCanvasHeight;
        iNewImageWidth = iNewImageHeight * iImageRatio;
      } else {
        iNewImageWidth = iCanvasWidth;
        iNewImageHeight = iNewImageWidth / iImageRatio;
      }
      return {
        width: iNewImageWidth,
        height: iNewImageHeight
      };
    },
    fnGetSaveShareImageFromCanvas: function() {
      var aImages, aoImages, aoPromices, canvas, context, oParams, sCallback, sImageSource, _i, _len;
      sCallback = arguments[0], oParams = arguments[1], aImages = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      canvas = document.getElementById("save-share-canvas");
      context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      oParams.printHeaderLine1 = oParams.printHeaderLine1.replace(/\r?\n|\r/g, ' ');
      oParams.printHeaderLine2 = oParams.printHeaderLine2.replace(/<[a-zA-Z]*>|<\/[a-zA-Z]>/g, '');
      oParams.printHeaderLine3 = oParams.printHeaderLine3.replace(/<[a-zA-Z]*>|<\/[a-zA-Z]>/g, '');
      oParams.printFooterLine = oParams.printFooterLine.replace(/<[a-zA-Z]*>|<\/[a-zA-Z]>/g, '');
      oParams.fontFamily = 'Raleway-Medium';
      context.font = '20px ' + oParams.fontFamily;
      context.fillStyle = '#595959';
      context.textAlign = 'left';
      context.fillText(oParams.printHeaderLine1, 30, 30);
      context.font = '20px ' + oParams.fontFamily;
      context.fillText(oParams.printHeaderLine2, 110, 280);
      context.font = '30px ' + oParams.fontFamily;
      context.fillText(oParams.printHeaderLine3, 110, 860);
      context.font = '30px ' + oParams.fontFamily;
      context.fillText(oParams.printFooterLine, 500, 1290);
      aoPromices = [];
      aoImages = [];
      for (_i = 0, _len = aImages.length; _i < _len; _i++) {
        sImageSource = aImages[_i];
        if (sImageSource != null) {
          (function() {
            var dfd, image;
            image = new Image();
            aoImages.push(image);
            dfd = $.Deferred();
            aoPromices.push(dfd.promise());
            image.onload = function() {
              return dfd.resolve();
            };
            return image.src = sImageSource;
          })();
        }
      }
      return $.when.apply($, aoPromices).then(function() {
        var fnHeaderDraw, oHeader, oImageDimesions, oImageDimesions1, oImageDimesions2, oLargeDimesions, oSmallDimesions;
        fnHeaderDraw = function(header) {
          context.shadowColor = "transparent";
          context.shadowBlur = 0;
          context.drawImage(header, 0, 50);
          return Alcon.Utils.Helpers.fnScaleDownImage(canvas.toDataURL("image/jpeg"), 1200, window[sCallback], 'image/jpeg');
        };
        oHeader = new Image();
        oHeader.src = oParams.linkToHeader;
        oHeader.onload = function() {
          return fnHeaderDraw(oHeader);
        };
        switch (aoImages.length) {
          case 1:
            oImageDimesions = Alcon.Utils.Helpers.fnRecalculateImageSize(350, 550, aoImages[0].width, aoImages[0].height);
            return context.drawImage(aoImages[0], 0, 0, aoImages[0].width, aoImages[0].height, 100, 300, oImageDimesions.width, oImageDimesions.height);
          case 2:
            oImageDimesions1 = Alcon.Utils.Helpers.fnRecalculateImageSize(350, 550, aoImages[0].width, aoImages[0].height);
            oImageDimesions2 = Alcon.Utils.Helpers.fnRecalculateImageSize(700, 900, aoImages[1].width, aoImages[1].height);
            context.drawImage(aoImages[0], 0, 0, aoImages[0].width, aoImages[0].height, 100, 350, oImageDimesions1.width, oImageDimesions1.height);
            return context.drawImage(aoImages[1], 0, 0, aoImages[1].width, aoImages[1].height, 500, 350, oImageDimesions2.width, oImageDimesions2.height);
          case 3:
            oImageDimesions = Alcon.Utils.Helpers.fnRecalculateImageSize(370, 460, aoImages[0].width, aoImages[0].height);
            context.drawImage(aoImages[0], 0, 0, aoImages[0].width, aoImages[0].height, canvas.width / 2 - 30 / 2 - oImageDimesions.width, iImagesTopY + 25, oImageDimesions.width, oImageDimesions.height);
            context.drawImage(aoImages[1], 0, 0, aoImages[1].width, aoImages[1].height, canvas.width / 2 + 20 / 2, iImagesTopY + 25, oImageDimesions.width, oImageDimesions.height);
            return context.drawImage(aoImages[2], 0, 0, aoImages[2].width, aoImages[2].height, canvas.width / 2 - oImageDimesions.width / 2, iImagesTopY + 25 + oImageDimesions.height + 30, oImageDimesions.width, oImageDimesions.height);
          case 4:
            oImageDimesions = Alcon.Utils.Helpers.fnRecalculateImageSize(370, 460, aoImages[0].width, aoImages[0].height);
            context.drawImage(aoImages[0], 0, 0, aoImages[0].width, aoImages[0].height, canvas.width / 2 - 30 / 2 - oImageDimesions.width, iImagesTopY + 25, oImageDimesions.width, oImageDimesions.height);
            context.drawImage(aoImages[1], 0, 0, aoImages[1].width, aoImages[1].height, canvas.width / 2 + 30 / 2, iImagesTopY + 25, oImageDimesions.width, oImageDimesions.height);
            context.drawImage(aoImages[2], 0, 0, aoImages[2].width, aoImages[2].height, canvas.width / 2 - 30 / 2 - oImageDimesions.width, iImagesTopY + 25 + oImageDimesions.height + 30, oImageDimesions.width, oImageDimesions.height);
            return context.drawImage(aoImages[3], 0, 0, aoImages[3].width, aoImages[3].height, canvas.width / 2 + 30 / 2, iImagesTopY + 25 + oImageDimesions.height + 30, oImageDimesions.width, oImageDimesions.height);
          case 5:
            oLargeDimesions = Alcon.Utils.Helpers.fnRecalculateImageSize(450, 560, aoImages[0].width, aoImages[0].height);
            oSmallDimesions = {
              width: ((oLargeDimesions.width + 15 + oLargeDimesions.width) - 15 * 2) / 3
            };
            oSmallDimesions.height = aoImages[2].height * oSmallDimesions.width / aoImages[2].width;
            context.drawImage(aoImages[0], 0, 0, aoImages[0].width, aoImages[0].height, canvas.width / 2 - 15 / 2 - oLargeDimesions.width, iImagesTopY + 25, oLargeDimesions.width, oLargeDimesions.height);
            context.drawImage(aoImages[1], 0, 0, aoImages[1].width, aoImages[1].height, canvas.width / 2 + 15 / 2, iImagesTopY + 25, oLargeDimesions.width, oLargeDimesions.height);
            context.drawImage(aoImages[2], 0, 0, aoImages[2].width, aoImages[2].height, canvas.width / 2 - 15 / 2 - oLargeDimesions.width, iImagesTopY + 25 + oLargeDimesions.height + 15, oSmallDimesions.width, oSmallDimesions.height);
            context.drawImage(aoImages[3], 0, 0, aoImages[3].width, aoImages[3].height, canvas.width / 2 - oSmallDimesions.width / 2, iImagesTopY + 25 + oLargeDimesions.height + 15, oSmallDimesions.width, oSmallDimesions.height);
            return context.drawImage(aoImages[4], 0, 0, aoImages[4].width, aoImages[4].height, canvas.width / 2 + oSmallDimesions.width / 2 + 15, iImagesTopY + 25 + oLargeDimesions.height + 15, oSmallDimesions.width, oSmallDimesions.height);
        }
      });
    },
    fnOpenWindow: function(sUrl, sName) {
      var oPopup;
      if (sName == null) {
        sName = "_blank";
      }
      oPopup = window.open(sUrl, sName);
      if (oPopup == null) {
        alert('Please, disable popup blocking');
      }
      return oPopup;
    },
    fnGetFeatureNameById: function(iFeatureId) {
      switch (iFeatureId) {
        case Alcon.Config.oFeatures.FEATURE_FOUNDATION:
          return "foundation";
        case Alcon.Config.oFeatures.FEATURE_CONCEALER:
          return "concealer";
        case Alcon.Config.oFeatures.FEATURE_BLUSH:
          return "blush";
        case Alcon.Config.oFeatures.FEATURE_FACE_POWDER:
          return "powder";
        case Alcon.Config.oFeatures.FEATURE_EYESHADOW:
          return "eyeshadow";
        case Alcon.Config.oFeatures.FEATURE_EYELINER:
          return "eyeliner";
        case Alcon.Config.oFeatures.FEATURE_MASCARA:
          return "mascara";
        case Alcon.Config.oFeatures.FEATURE_EYEBROW_PENCIL:
          return "eyebrow";
        case Alcon.Config.oFeatures.FEATURE_LIPLINER:
          return "lipliner";
        case Alcon.Config.oFeatures.FEATURE_LIPSTICK:
          return "lipstick";
        case Alcon.Config.oFeatures.FEATURE_LIPGLOSS:
          return "lipgloss";
        case Alcon.Config.oFeatures.FEATURE_HAIR_COLOR:
          return "haircolor";
        case Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS:
          return "highlights";
        case Alcon.Config.oFeatures.FEATURE_LOWLIGHTS:
          return "lowlights";
        case Alcon.Config.oFeatures.FEATURE_CONTACTS:
          return "contacts";
        case Alcon.Config.oFeatures.FEATURE_GLASSES:
          return "glasses";
        case Alcon.Config.oFeatures.FEATURE_EARRING:
          return "earring";
        case Alcon.Config.oFeatures.FEATURE_HAIRCLIPS:
          return "hairclips";
        case Alcon.Config.oFeatures.FEATURE_NECKLACE:
          return "necklace";
        case Alcon.Config.oFeatures.FEATURE_SCARF:
          return "scarf";
        case Alcon.Config.oFeatures.FEATURE_SUNGLASSES:
          return "sunglasses";
        case Alcon.Config.oFeatures.FEATURE_TEETH_WHITENING:
          return "teethwhitening";
        case Alcon.Config.oFeatures.FEATURE_VEILS:
          return "veils";
        case Alcon.Config.oFeatures.FEATURE_HEADWEAR:
          return "headwear";
        case Alcon.Config.oFeatures.FEATURE_EYEBROW_PENCIL:
          return "eyebrow";
      }
    },
    fnRgbToHex: function(sRgb) {
      var aRgb, sHex;
      if (typeof sRgb === "undefined") {
        return "";
      }
      sRgb = sRgb.replace(/^#/, '');
      aRgb = sRgb.split(',');
      if (aRgb.length === 1) {
        return sRgb;
      }
      sHex = '';
      _.each(aRgb, function(sComponent) {
        var hex, iComponent;
        iComponent = +sComponent;
        hex = iComponent.toString(16);
        if (hex.length === 1) {
          return sHex = sHex + "0" + hex;
        } else {
          return sHex = sHex + hex;
        }
      });
      return sHex;
    },
    fnGetCategoryByFeature: function(iFeature) {
      switch (iFeature) {
        case Alcon.Config.oFeatures.FEATURE_FOUNDATION:
        case Alcon.Config.oFeatures.FEATURE_CONCEALER:
        case Alcon.Config.oFeatures.FEATURE_BLUSH:
        case Alcon.Config.oFeatures.FEATURE_FACE_POWDER:
          return 'face';
        case Alcon.Config.oFeatures.FEATURE_EYESHADOW:
        case Alcon.Config.oFeatures.FEATURE_EYELINER:
        case Alcon.Config.oFeatures.FEATURE_MASCARA:
        case Alcon.Config.oFeatures.FEATURE_EYEBROW_PENCIL:
          return "eyes";
        case Alcon.Config.oFeatures.FEATURE_LIPLINER:
        case Alcon.Config.oFeatures.FEATURE_LIPSTICK:
        case Alcon.Config.oFeatures.FEATURE_LIPGLOSS:
          return "lips";
        case Alcon.Config.oFeatures.FEATURE_HAIR:
        case Alcon.Config.oFeatures.FEATURE_HAIR_COLOR:
        case Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS:
        case Alcon.Config.oFeatures.FEATURE_LOWLIGHTS:
          return "hairstyles";
        case Alcon.Config.oFeatures.FEATURE_GLASSES:
        case Alcon.Config.oFeatures.FEATURE_SUNGLASSES:
          return "eyewear";
        case Alcon.Config.oFeatures.FEATURE_EARRING:
        case Alcon.Config.oFeatures.FEATURE_NECKLACE:
          return "jewelry";
        case Alcon.Config.oFeatures.FEATURE_HAIRCLIPS:
        case Alcon.Config.oFeatures.FEATURE_HEADWEAR:
          return "headwear";
        default:
          return null;
      }
    },
    fnResetFeature: function() {
      var iFeatureId, sRoute;
      sRoute = Backbone.history.getFragment().replace('select-', '');
      iFeatureId = +$(".main-nav ." + sRoute + " .active a").attr('href').replace('#', '');
      if (iFeatureId === Alcon.Config.oFeatures.FEATURE_SUNGLASSES) {
        iFeatureId = Alcon.Config.oFeatures.FEATURE_GLASSES;
      }
      Alcon.Vme.clearProduct(iFeatureId);
      Alcon.AppliedProducts = _.filter(Alcon.AppliedProducts, function(oAppliedProduct) {
        return oAppliedProduct.feature !== iFeatureId;
      });
      Alcon.Router.oSelectProductView.fnUpdateAppliedList();
      return Alcon.Vme._fnUpdateBeforeAfter() != null;
    },
    fnScrollNavBar: function() {
      var self;
      self = $(".main-nav-block .color-studio-navigation.active");
      if ($(self)[0] && $(self)[0].scrollWidth - $(self).scrollLeft() - $(self).width() > 10) {
        return $('.main-nav-block .scroll-button-next').show();
      } else {
        return $('.main-nav-block .scroll-button-next').hide();
      }
    }
  };

}).call(this);
;(function() {
  Alcon.Views.SelectFace = Backbone.View.extend({
    el: '#select-face-view',
    oFacesListView: null,
    events: {
      'click .take-picture': (function() {
        if (Alcon.Config.oVme.bIsHTML5) {
          return 'fnRenderTakePic';
        } else {
          return 'fnRenderCamera';
        }
      })(),
      'click .upload-photo': 'fnRenderUploadPhoto',
      "click #pick-model a": "fnMobileShowOptions"
    },
    initialize: function() {
      this.oFacesListView = Alcon.Router.oFacesListView;
      this.oCameraView = Alcon.Router.oCameraView;
      return this.oUploadPhotoView = Alcon.Router.oUploadPhotoView;
    },
    render: function() {
      $('.page,.view').removeClass('on');
      $('#work-page').addClass('on');
      this.$el.addClass('on');
      this.fnRenderSelectPhotoTpl();
      this.oFacesListView.render();
      return Alcon.EventDispatcher.trigger('render:select-face');
    },
    fnRenderSelectPhotoTpl: function() {
      var $upload;
      $('.use-own-photo ul').empty();
      this.$el.find('.use-own-photo ul').append(_.template($('#select-photo-tpl').html()));
      $upload = $("#upload");
      if (Alcon.Utils.Helpers.isIE.ie9()) {
        $upload.fileReader({
          id: 'fileReaderFlash',
          filereader: 'assets/js/libs/FileReader/filereader.swf',
          callback: function() {
            console.log('FileReader handled file input!');
            $('#fileReaderFlash').parent().attr('id', 'fileReaderFlashContainer');
            return $('#fileReaderFlashContainer').css('z-index', '');
          }
        });
        $('#fileReaderFlashContainer').css({
          left: $upload.offset().left,
          top: $upload.offset().top,
          width: $upload.innerWidth(),
          height: $upload.innerHeight()
        });
      }
      return $upload.on('change', {
        'view': this.oUploadPhotoView
      }, this.oUploadPhotoView.fnHandleFile);
    },
    fnMobileShowOptions: function(e) {
      var selection;
      if (!$(e.currentTarget).hasClass('active')) {
        $('#select-face-view li a').removeClass('active');
        $('#select-face-view .sec').removeClass('on');
        $('#vme-wrapper p').hide();
      } else {
        $('#vme-wrapper p').show();
      }
      Alcon.Router.fnUnSetSubroute();
      $(e.currentTarget).toggleClass('active');
      selection = $(e.currentTarget).attr('id');
      return this.$el.find('.' + selection).toggleClass('on');
    },
    fnRenderCamera: function() {
      Alcon.Router.fnSetSubroute('webcam');
      Alcon.Router.fnUnsetState('accept-photo');
      return this.oCameraView.render();
    },
    fnRenderTakePic: function(oEvent) {
      Alcon.Utils.Helpers.trackEvent('select-photo*take-photo');
      if (Alcon.Config.bIsMobile) {
        Alcon.Router.fnSetSubroute('upload');
        Alcon.Router.fnUnsetState('accept-photo');
        return this.oUploadPhotoView.render();
      } else if (Alcon.Config.bIsTablet) {
        return $('#upload').trigger('click');
      }
    },
    fnRenderUploadPhoto: function(oEvent) {
      if (oEvent.target.id === 'upload') {
        return;
      }
      if (Alcon.Config.bIsMobile) {
        Alcon.Utils.Helpers.trackEvent('select-photo*upload-photo');
        Alcon.Router.fnSetSubroute('upload');
        Alcon.Router.fnUnsetState('accept-photo');
        return this.oUploadPhotoView.render();
      } else {
        Alcon.Utils.Helpers.trackEvent('select-photo*upload-photo');
        return $('#upload').trigger('click');
      }
    }
  });

  console.log('Loading Select Photo View');

}).call(this);
;(function() {
  Alcon.Views.Camera = Backbone.View.extend({
    el: '#webcam-wrapper',
    events: {
      "click .show-guides": 'fnToggleGuides',
      "click .take-photo": 'fnTakePhoto',
      "click .use-this": 'fnHandlePhoto',
      "click .take-another": 'fnTakeAnother'
    },
    initialize: function() {
      return Alcon.Utils.Camera.fnInitialize();
    },
    render: function() {
      this.$el.find('.take-photo').show();
      this.$el.find('.submit-photo').hide();
      return this.$el.find('.show-guides').removeClass('active');
    },
    fnToggleGuides: function(oEvent) {
      return this.$el.toggleClass('guides-mode');
    },
    fnTakePhoto: function() {
      return Alcon.Utils.Camera.fnTakePhoto((function(_this) {
        return function() {
          _this.$el.find('.take-photo').hide();
          _this.$el.find('.submit-photo').show();
          return Alcon.Router.fnSetState('accept-photo');
        };
      })(this));
    },
    fnHandlePhoto: function() {
      return Alcon.Utils.Helpers.fnFindFaceAndContinue(Alcon.Utils.Camera.fnGetDataUrl());
    },
    fnTakeAnother: function() {
      Alcon.Utils.Camera.fnInitialize();
      this.$el.find('.take-photo').show();
      this.$el.find('.submit-photo').hide();
      return Alcon.Router.fnUnsetState('accept-photo');
    }
  });

}).call(this);
;(function() {
  Alcon.Views.Facebook = Backbone.View.extend({
    el: '#facebook-wrapper',
    events: {
      "click .close-view": 'fnClosePage',
      "click .arrow": 'fnScrollPage',
      "click .wrapper img": 'fnSelectImg',
      "click #load-fb-photos": "fnLoadPhotos"
    },
    bNoSDK: false,
    render: function() {
      this.$el.removeClass('images-mode galleries-mode');
      $('#status', this.$el).empty().css('top', 0);
      $('.choose-gallery-list', this.$el).empty();
      if (this.bNoSDK === false) {
        return FB.login((function(_this) {
          return function(oResponse) {
            switch (oResponse.status) {
              case "connected":
                _this.$el.addClass('galleries-mode');
                return FB.api('/me/albums?fields=name', _this._renderGalleries);
              case "not_authorized":
                return $('#status').text(AlconAppTexts.logIntoApp);
              default:
                return $('#status').text(AlconAppTexts.logIntoFB);
            }
          };
        })(this), {
          scope: "user_photos"
        });
      } else {
        this.$el.addClass('galleries-mode');
        return $.get("https://graph.facebook.com/v2.6/me/albums?fields=name&access_token=" + Alcon.Config.oFB.sAccessToken, this._renderGalleries);
      }
    },
    fnLoadPhotos: function() {
      this.$el.removeClass('galleries-mode').addClass('images-mode');
      return $('.choose-gallery-list').find('input[type=checkbox]:checked').each((function(_this) {
        return function(ix, el) {
          if (_this.bNoSDK === false) {
            return FB.api("/" + el.value + "/photos?fields=images", _this._renderImages);
          } else {
            return $.get("https://graph.facebook.com/v2.6/" + el.value + "/photos?fields=images&access_token=" + Alcon.Config.oFB.sAccessToken, _this._renderImages);
          }
        };
      })(this));
    },
    _renderGalleries: function(response) {
      var i;
      i = 0;
      while (i < response.data.length) {
        $('.choose-gallery-list', this.$el).append("<li> <input id=\"gallery-" + (_.escape(response.data[i].id)) + "\" type=\"checkbox\" value=\"" + (_.escape(response.data[i].id)) + "\"> <label for=\"gallery-" + (_.escape(response.data[i].id)) + "\"> <span>" + (_.escape(response.data[i].name)) + "</span> </label> </li>");
        i++;
      }
    },
    _renderImages: function(response) {
      var i, img, jImg;
      i = 0;
      while (i < response.data.length) {
        jImg = $('<img/>', {
          src: response.data[i].images[1].source
        });
        if (Alcon.Utils.Helpers.isIE.any()) {
          jImg.removeAttr('width').removeAttr('height');
        }
        img = $('<span/>', {
          "class": 'wrapper'
        }).append(jImg);
        $('#status').append(img);
        i++;
      }
    },
    fnClosePage: function() {
      Alcon.Router.fnUnSetSubroute();
      return Alcon.EventDispatcher.trigger('close:facebook-modal');
    },
    fnScrollPage: function(e) {
      var btnId, maxScroll;
      btnId = $(e.currentTarget).attr('id');
      if (btnId === 'next') {
        maxScroll = $('#status').outerHeight(true) - 400;
        if (Math.abs($('#status').css('top').replace('px', '')) < maxScroll) {
          return $('#status').css('top', '-=264');
        }
      } else {
        if (Math.abs($('#status').css('top').replace('px', '')) > 0) {
          return $('#status').css('top', '+=264');
        }
      }
    },
    fnSelectImg: function(e) {
      var src;
      src = $(e.currentTarget).attr('src');
      console.log("image selected: " + src);
      if (!Alcon.Config.bIsMobile) {
        Alcon.Utils.Helpers.fnShowLoading();
        return Alcon.Utils.Helpers.fnImageUrlToBase64(src, function(sDataUrl) {
          var oUploadPhotoView;
          Alcon.Router.fnSetSubroute('facebook');
          Alcon.Router.fnSetState('accept-photo');
          oUploadPhotoView = Alcon.Router.oSelectFaceView.oUploadPhotoView;
          return oUploadPhotoView.render.call(oUploadPhotoView, sDataUrl);
        });
      } else {
        return Alcon.Utils.Helpers.fnImageUrlToBase64(src, Alcon.Utils.Helpers.fnFindFaceAndContinue);
      }
    }
  });

}).call(this);
;(function() {
  Alcon.Views.FacesList = Backbone.View.extend({
    el: '#faces-list',
    template: _.template($('#faces-list-items-tpl').html()),
    events: {
      "click li": "fnChoose"
    },
    render: function() {
      var aFaces, i;
      if (Alcon.DataStorage.aFaces.length > 6) {
        aFaces = (function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; _i <= 5; i = ++_i) {
            _results.push(Alcon.DataStorage.aFaces[i]);
          }
          return _results;
        })();
      } else {
        aFaces = Alcon.DataStorage.aFaces;
      }
      this.$el.html(this.template({
        aFaces: aFaces,
        iSelectedId: Alcon.Session.get('iSelectedFaceId')
      }));
      Alcon.EventDispatcher.trigger("loaded:faces-list");
      if (Alcon.Config.bMobile) {
        $(window).on('resize', function() {
          var iCalculatedWidth, iMaxCssWidth, iMinCssWidth, iWidth;
          iCalculatedWidth = $('#faces-list, .swiper-wrapper').width() / 2;
          iMinCssWidth = parseInt($('#faces-list li.swiper-slide').css('min-width'));
          iMaxCssWidth = parseInt($('#faces-list li.swiper-slide').css('max-width'));
          iWidth = (function() {
            switch (false) {
              case !(iCalculatedWidth < iMinCssWidth):
                return iMinCssWidth;
              case !(iCalculatedWidth > iMaxCssWidth):
                return iMaxCssWidth;
              default:
                return iCalculatedWidth;
            }
          })();
          return $('#faces-list li.swiper-slide').css('width', "" + iWidth + "px");
        });
      }
      return this;
    },
    fnChoose: function(e) {
      var aFace, iFaceId;
      if (Alcon.Router.oSelectLensView) {
        Alcon.Router.oSelectLensView.fnClearMatchMode();
      }
      iFaceId = $(e.currentTarget).data('face-id');
      aFace = _.find(Alcon.DataStorage.aFaces, function(aFaces) {
        return aFaces.id === iFaceId;
      });
      Alcon.Utils.Helpers.fnResetLook();
      Alcon.Session.set('iSelectedFaceId', iFaceId);
      //Alcon.Utils.Helpers.trackEvent("welcome*click*/select_model/" + aFace.label);
      return Alcon.EventDispatcher.trigger("choose:face");
    }
  });

}).call(this);
;(function() {
  Alcon.Views.Home = Backbone.View.extend({
    el: '#welcome-page',
    oFacesListView: null,
    events: {
      'click .take-picture': (function() {
        if (Alcon.Config.oVme.bIsHTML5) {
          return 'fnRenderTakePic';
        } else {
          return 'fnRenderCamera';
        }
      })(),
      'click .upload-photo': 'fnRenderUploadPhoto',
      "click #pick-model a": "fnMobileShowOptions"
    },
    initialize: function() {
      this.oFacesListView = Alcon.Router.oFacesListView;
      this.oCameraView = Alcon.Router.oCameraView;
      return this.oUploadPhotoView = Alcon.Router.oUploadPhotoView;
    },
    render: function() {
      $('.page,.view').removeClass('on');
      $('#work-page').addClass('on');
      this.$el.addClass('on');
      this.fnRenderSelectPhotoTpl();
      this.oFacesListView.render();
      return Alcon.EventDispatcher.trigger('render:home');
    },
    fnRenderSelectPhotoTpl: function() {
      var $upload;
      $('.use-own-photo ul').empty();
      this.$el.find('.use-own-photo ul').append(_.template($('#select-photo-tpl').html()));
      $upload = $("#upload");
      if (Alcon.Utils.Helpers.isIE.ie9()) {
        $upload.fileReader({
          id: 'fileReaderFlash',
          filereader: 'assets/js/libs/FileReader/filereader.swf',
          callback: function() {
            console.log('FileReader handled file input!');
            $('#fileReaderFlash').parent().attr('id', 'fileReaderFlashContainer');
            return $('#fileReaderFlashContainer').css('z-index', '');
          }
        });
        $('#fileReaderFlashContainer').css({
          left: $upload.offset().left,
          top: $upload.offset().top,
          width: $upload.innerWidth(),
          height: $upload.innerHeight()
        });
      }
      return $upload.on('change', {
        'view': this.oUploadPhotoView
      }, this.oUploadPhotoView.fnHandleFile);
    },
    fnMobileShowOptions: function(e) {
      var selection;
      if (!$(e.currentTarget).hasClass('active')) {
        $('#select-face-view li a').removeClass('active');
        $('#select-face-view .sec').removeClass('on');
        $('#vme-wrapper p').hide();
      } else {
        $('#vme-wrapper p').show();
      }
      Alcon.Router.fnUnSetSubroute();
      $(e.currentTarget).toggleClass('active');
      selection = $(e.currentTarget).attr('id');
      return this.$el.find('.' + selection).toggleClass('on');
    },
    fnRenderCamera: function() {
      Alcon.Router.fnSetSubroute('webcam');
      Alcon.Router.fnUnsetState('accept-photo');
      return this.oCameraView.render();
    },
    fnRenderTakePic: function(oEvent) {
      if (Alcon.Config.bIsMobile) {
        Alcon.Router.fnSetSubroute('upload');
        Alcon.Router.fnUnsetState('accept-photo');
        return this.oUploadPhotoView.render();
      } else if (Alcon.Config.bIsTablet) {
        return $('#upload').trigger('click');
      }
    },
    fnRenderUploadPhoto: function(oEvent) {
      //Alcon.Utils.Helpers.trackEvent('welcome*click*/welcome/upload_photo');
      if (oEvent.target.id === 'upload') {
        return;
      }
      if (Alcon.Config.bIsMobile) {
        Alcon.Router.fnSetSubroute('upload');
        Alcon.Router.fnUnsetState('accept-photo');
        return this.oUploadPhotoView.render();
      } else {
        return $('#upload').trigger('click');
      }
    }
  });

  console.log('Loading Select Photo View');

}).call(this);
;(function() {
  Alcon.Views.UploadPhoto = Backbone.View.extend({
    el: '#upload-photo-wrapper',
    initialize: function() {
      this.oCanvas = $('#rotate-canvas')[0];
      return this.oContext = this.oCanvas.getContext('2d');
    },
    events: {
      'click .crop': 'fnCropPhoto',
      'click .skip': 'fnSkipCropping',
      'click .rotate': 'fnRotatePhoto'
    },
    render: function(sImageUrl) {
      Alcon.Utils.Helpers.fnShowLoading();
      this._fnRenderImage(sImageUrl, (function() {
        return this._fnInitJcrop($('#photo'), function() {
          return Alcon.Utils.Helpers.fnHideLoading();
        });
      }).bind(this));
      return this;
    },
    fnHandleFile: function(oChangeEvent) {
      var file, iPhone4OrLess, md, oView, _ref, _ref1;
      if (!((_ref = oChangeEvent.target.files) != null ? _ref.length : void 0)) {
        return;
      }
      file = oChangeEvent.target.files[0];
      if (file.type.indexOf('image') === -1) {
        return alert('Uploaded file should be an image');
      }
      oView = oChangeEvent.data.view;
      Alcon.Router.fnSetSubroute('upload');
      Alcon.Router.fnSetState('accept-photo');
      Alcon.Utils.Helpers.fnShowLoading();
      md = new MobileDetect(window.navigator.userAgent);
      if (md.phone() === 'iPhone' && ((_ref1 = window.screen.height * window.devicePixelRatio) === 480 || _ref1 === 960)) {
        iPhone4OrLess = true;
      }
      return $.canvasResize(oChangeEvent.target.files[0], {
        quality: Alcon.Config.bMobile || Alcon.Config.bIsTablet ? 70 : 100,
        width: (function() {
          switch (false) {
            case !iPhone4OrLess:
              return 450;
            case !(Alcon.Config.bMobile || Alcon.Config.bIsTablet):
              return 750;
            default:
              return 1200;
          }
        })(),
        height: (function() {
          switch (false) {
            case !iPhone4OrLess:
              return 450;
            case !(Alcon.Config.bMobile || Alcon.Config.bIsTablet):
              return 750;
            default:
              return 1200;
          }
        })(),
        callback: function(data, width, height) {
          return oView._fnRenderImage(data, (function() {
            return oView._fnInitJcrop($('#photo'), function() {
              Alcon.Utils.Helpers.fnHideLoading();
              if (!Alcon.Utils.Helpers.isIE.ie9()) {
                return $("#upload").replaceWith($("#upload").val('').clone(true));
              }
            });
          }).bind(oView));
        }
      });
    },
    _fnInitJcrop: function(jImg, fnCallback) {
      var oView, _ref;
      if ($.Jcrop == null) {
        return typeof fnCallback === "function" ? fnCallback() : void 0;
      }
      if ((_ref = this.oJcropAPI) != null) {
        _ref.destroy();
      }
      this.oJcropAPI = null;
      oView = this;
      return jImg.Jcrop({
        trueSize: [jImg[0].naturalWidth, jImg[0].naturalHeight],
        setSelect: [30, 30, jImg[0].naturalWidth - 40, jImg[0].naturalHeight - 40],
        boxHeight: 486,
        aspectRatio: jImg[0].naturalWidth / jImg[0].naturalHeight
      }, function() {
        oView.oJcropAPI = this;
        return typeof fnCallback === "function" ? fnCallback() : void 0;
      });
    },
    fnCropPhoto: function() {
      var oSelection;
      if (!$('#photo').size()) {
        return;
      }
      Alcon.Utils.Helpers.trackPage('/photo/auto_trace');
      if ($.Jcrop == null) {
        return Alcon.Utils.Helpers.fnFindFaceAndContinue($('#photo').attr('src'));
      } else {
        oSelection = this.oJcropAPI.tellSelect();
        if (oSelection.w === 0 || oSelection.h === 0) {
          return Alcon.Utils.Helpers.fnFindFaceAndContinue($('#photo').attr('src'));
        } else {
          Alcon.Utils.Helpers.fnShowLoading();
          Alcon.Session.vmePhotoWidth = oSelection.w;
          Alcon.Session.vmePhotoHeight = oSelection.h;
          return Alcon.Utils.Helpers.fnCropImage($('#photo').attr('src'), oSelection.x, oSelection.y, oSelection.w, oSelection.h, function(sCroppedDataUrl) {
            return Alcon.Utils.Helpers.fnFindFaceAndContinue(sCroppedDataUrl);
          });
        }
      }
    },
    fnSkipCropping: function() {
      Alcon.Router.fnUnSetSubroute();
      return Alcon.Router.fnUnsetState('accept-photo');
    },
    _fnRenderImage: function(sUrl, fnCallback) {
      $('#photo-wrapper').html('<img id="photo" src="' + sUrl + '">');
      return setTimeout(function() {
        return fnCallback();
      }, 2000);
    },
    _fnGetRotatedDataUrl: function(oImage, direction) {
      var sUrl;
      this.oContext.save();
      this.oCanvas.width = oImage.naturalHeight;
      this.oCanvas.height = oImage.naturalWidth;
      this.oContext.translate(this.oCanvas.width / 2, this.oCanvas.height / 2);
      if (direction === 'right') {
        this.oContext.rotate(270 * Math.PI / 180);
      } else {
        this.oContext.rotate(-(270 * Math.PI / 180));
      }
      this.oContext.drawImage(oImage, -oImage.naturalWidth / 2, -oImage.naturalHeight / 2);
      sUrl = this.oCanvas.toDataURL();
      this.oContext.restore();
      return sUrl;
    },
    fnRotatePhoto: function(e) {
      var direction;
      if (!$('#photo').size()) {
        return;
      }
      direction = $(e.currentTarget).data('direction');
      Alcon.Utils.Helpers.fnShowLoading();
      return setTimeout((function(_this) {
        return function() {
          var _ref;
          if ((_ref = _this.oJcropAPI) != null) {
            _ref.destroy();
          }
          return _this._fnRenderImage(_this._fnGetRotatedDataUrl($('#photo')[0], direction), (function() {
            return this._fnInitJcrop($('#photo'), function() {
              return Alcon.Utils.Helpers.fnHideLoading();
            });
          }).bind(_this));
        };
      })(this), 100);
    }
  });

  console.log('Upload Photo View is defined');

}).call(this);
;(function() {
  Alcon.Views.UploadPhotoMobile = Backbone.View.extend({
    el: '#upload-photo-wrapper',
    events: {
      'click .crop': 'fnApply',
      'click .skip': 'fnCancel'
    },
    render: function() {
      console.log('mobile version');
      this.$el.find('#photo-wrapper').empty();
      $("#upload").replaceWith($("#upload").val('').clone(true));
      $('#upload').trigger('click');
      return this;
    },
    fnHandleFile: function(oChangeEvent) {
      var file, _ref;
      if (!((_ref = oChangeEvent.target.files) != null ? _ref.length : void 0)) {
        return;
      }
      file = oChangeEvent.target.files[0];
      if (file.type.indexOf('image') === -1) {
        return alert('Uploaded file should be an image');
      }
      return $.canvasResize(file, {
        width: 640,
        callback: function(data, width, height) {
          return $('#photo-wrapper').html($('<img/>', {
            id: 'photo',
            src: data
          }));
        }
      });
    },
    fnApply: function() {
      if (!$('#photo').size()) {
        return;
      }
      return Alcon.Utils.Helpers.fnFindFaceAndContinue($('#photo').attr('src'));
    },
    fnCancel: function() {
      return Alcon.Router.fnUnSetSubroute();
    }
  });

  console.log('Upload Photo View is defined');

}).call(this);
;(function() {
  Alcon.Views.AutotraceFailedView = Backbone.View.extend({
    el: '#common-modal-body',
    template: _.template($('#autotrace-failed-tpl').html()),
    sHeaderText: AlconAppTexts.incorrectImage,
    events: {
      'click .ok': 'fnCloseAndRedirect'
    },
    initialize: function(_arg) {
      this.parent = _arg.parent;
    },
    render: function() {
      $('.common-modal-header-text', this.parent.$el).text(this.sHeaderText);
      return this.$el.html(this.template());
    },
    fnCloseAndRedirect: function() {
      this.parent.fnClose();
      Alcon.Router.fnUnSetSubroute();
      return Alcon.Router.fnUnsetState('accept-photo');
    }
  });

}).call(this);
;(function() {
  Alcon.Views.CommonModal = Backbone.View.extend({
    el: '#common-modal',
    oDownloadLookView: null,
    oAutotraceFailedView: null,
    oShareLookView: null,
    oPrintLookView: null,
    oSelectDownloadLookView: null,
    events: {
      'click .close-view': 'fnClose'
    },
    initialize: function() {
      this.oDownloadLookView = new Alcon.Views.DownloadLookView({
        parent: this
      });
      this.oAutotraceFailedView = new Alcon.Views.AutotraceFailedView({
        parent: this
      });
      this.oShareLookView = new Alcon.Views.ShareLookView({
        parent: this
      });
      this.oPrintLookView = new Alcon.Views.PrintLookView({
        parent: this
      });
      this.oSelectDownloadLookView = new Alcon.Views.SelectDownloadLookView({
        parent: this
      });
      return Alcon.EventDispatcher.on('do:show-modal', (function(_this) {
        return function(sModalType, oData) {
          return _this.render(sModalType, oData);
        };
      })(this));
    },
    render: function(sModalType, oData) {
      this.sModalType = sModalType;
      switch (sModalType) {
        case 'download-look':
          this.oDownloadLookView.render(oData.sImageDataUrl);
          break;
        case 'autotrace-failed':
          this.oAutotraceFailedView.render(this.oAutotraceFailedView);
          break;
        case 'share-look':
          this.oShareLookView.render(oData.fnCallback);
          break;
        case 'print-look':
          this.oPrintLookView.render(oData.fnCallback);
          break;
        case 'select-download-look':
          this.oSelectDownloadLookView.render(oData.fnCallback);
      }
      return this.$el.addClass('on');
    },
    fnClose: function() {
      this.$el.removeClass('on');
      if (this.sModalType === 'autotrace-failed') {
        Alcon.Router.fnUnSetSubroute();
        return Alcon.Router.fnUnsetState('accept-photo');
      }
    }
  });

}).call(this);
;(function() {
  Alcon.Views.DownloadLookView = Backbone.View.extend({
    el: '#common-modal-body',
    template: _.template($('#download-look-tpl').html()),
    sHeaderText: AlconAppTexts.shareDownload,
    events: {
      'click .cancel': 'fnCloseModal'
    },
    initialize: function(_arg) {
      this.parent = _arg.parent;
    },
    render: function(sImageDataUrl) {
      $('.common-modal-header-text', this.parent.$el).text(this.sHeaderText);
      this.$el.html(this.template({
        sImageDataUrl: sImageDataUrl
      }));
      $('.directive', this.$el).hide();
      if (_.isTouchDevice()) {
        return $('.directive-touch', this.$el).show();
      } else {
        return $('.directive-default', this.$el).show();
      }
    },
    fnCloseModal: function() {
      return this.parent.fnClose();
    }
  });

}).call(this);
;(function() {
  Alcon.Views.PrintLookView = Backbone.View.extend({
    el: '#common-modal-body',
    template: _.template($('#print-look-tpl').html()),
    sHeaderText: 'Select the looks you want to print',
    events: {
      'click #cancel-print-modal': 'fnCancel',
      'click #print-look': 'fnPrint'
    },
    initialize: function(_arg) {
      this.parent = _arg.parent;
    },
    render: function(fnPrintCallback) {
      $('.common-modal-header-text', this.parent.$el).text(this.sHeaderText);
      this.$el.html('');
      this.fnPrintCallback = fnPrintCallback;
      return this.sCurrentLookUrl = Alcon.Vme.fnCaptureMakeover();
    },
    fnCancel: function() {
      return this.parent.fnClose();
    },
    fnPrint: function() {
      var aCheckedInputs, oPrintable;
      if ((aCheckedInputs = $('.my-looks input[type=checkbox]:checked', this.$el)).size() === 0) {
        return;
      }
      oPrintable = {
        aAfterImages: []
      };
      _.each(aCheckedInputs, (function(_this) {
        return function(oCheckbox) {
          var iLensId, _ref;
          switch (oCheckbox.value) {
            case 'current':
              oPrintable.aAfterImages.push(_this.sCurrentLookUrl);
              if (aCheckedInputs.size() === 1) {
                iLensId = Alcon.Session.get('iSelectedLensId');
                return oPrintable.sLensLabel = iLensId != null ? (_ref = _.find(Alcon.DataStorage.aLenses, function(oLens) {
                  return oLens.id === iLensId;
                })) != null ? _ref.label : void 0 : void 0;
              }
              break;
            default:
              return oPrintable.aAfterImages.push($(oCheckbox).parent().find('img').attr('src'));
          }
        };
      })(this));
      this.fnPrintCallback(oPrintable);
      return this.parent.fnClose();
    }
  });

}).call(this);
;(function() {
  Alcon.Views.SelectDownloadLookView = Backbone.View.extend({
    el: '#common-modal-body',
    template: _.template($('#select-download-look-tpl').html()),
    sHeaderText: 'Select the looks you want to download',
    events: {
      'click #cancel-download-modal': 'fnCancel',
      'click #select-download-look': 'fnSelectDownload'
    },
    initialize: function(_arg) {
      this.parent = _arg.parent;
    },
    render: function(fnDownloadCallback) {
      $('.common-modal-header-text', this.parent.$el).text(this.sHeaderText);
      this.$el.html('');
      this.fnDownloadCallback = fnDownloadCallback;
      return this.sCurrentLookUrl = Alcon.Vme.fnCaptureMakeover();
    },
    fnCancel: function() {
      return this.parent.fnClose();
    },
    fnSelectDownload: function() {
      var aCheckedInputs, oDownloadable;
      if ((aCheckedInputs = $('.my-looks input[type=checkbox]:checked', this.$el)).size() === 0) {
        return;
      }
      oDownloadable = {
        aAfterImages: []
      };
      _.each(aCheckedInputs, (function(_this) {
        return function(oCheckbox) {
          var iLensId, _ref;
          switch (oCheckbox.value) {
            case 'current':
              oDownloadable.aAfterImages.push(_this.sCurrentLookUrl);
              if (aCheckedInputs.size() === 1) {
                iLensId = Alcon.Session.get('iSelectedLensId');
                return oDownloadable.sLensLabel = iLensId != null ? (_ref = _.find(Alcon.DataStorage.aLenses, function(oLens) {
                  return oLens.id === iLensId;
                })) != null ? _ref.label : void 0 : void 0;
              }
              break;
            default:
              return oDownloadable.aAfterImages.push($(oCheckbox).parent().find('img').attr('src'));
          }
        };
      })(this));
      this.fnDownloadCallback(oDownloadable);
      return this.parent.fnClose();
    }
  });

}).call(this);
;(function() {
  Alcon.Views.ShareLookView = Backbone.View.extend({
    el: '#common-modal-body',
    template: _.template($('#share-look-tpl').html()),
    sHeaderText: 'Select the looks you want to share',
    events: {
      'click #cancel-share-modal': 'fnCancel',
      'click #share-look': 'fnShare'
    },
    initialize: function(_arg) {
      this.parent = _arg.parent;
    },
    render: function(fnShareCallback) {
      $('.common-modal-header-text', this.parent.$el).text(this.sHeaderText);
      this.$el.html('');
      this.fnShareCallback = fnShareCallback;
      return this.sCurrentLookUrl = Alcon.Vme.fnCaptureMakeover();
    },
    fnCancel: function() {
      $(".user-action-buttons .share").removeClass("expanded");
      return this.parent.fnClose();
    },
    fnShare: function() {
      var aCheckedInputs, oSharable;
      if ((aCheckedInputs = $('.my-looks input[type=checkbox]:checked', this.$el)).size() === 0) {
        return;
      }
      oSharable = {
        aAfterImages: []
      };
      _.each(aCheckedInputs, (function(_this) {
        return function(oCheckbox) {
          var iLensId, _ref;
          switch (oCheckbox.value) {
            case 'current':
              oSharable.aAfterImages.push(_this.sCurrentLookUrl);
              if (aCheckedInputs.size() === 1) {
                iLensId = Alcon.Session.get('iSelectedLensId');
                return oSharable.sLensLabel = iLensId != null ? (_ref = _.find(Alcon.DataStorage.aLenses, function(oLens) {
                  return oLens.id === iLensId;
                })) != null ? _ref.label : void 0 : void 0;
              }
              break;
            default:
              return oSharable.aAfterImages.push($(oCheckbox).parent().find('img').attr('src'));
          }
        };
      })(this));
      this.fnShareCallback(oSharable, 'default');
      return this.parent.fnClose();
    }
  });

}).call(this);
;(function() {
  Alcon.Views.ClickLook = Backbone.View.extend({
    el: "#select-click-look-view",
    template: _.template($('#click-look-list-items-tpl').html()),
    events: {
      "click .tab-content .click-looks li": "fnChose",
      "click .color-studio-navigation li": (function() {
        return Alcon.Router.fnUnSetSubroute('select-product');
      })
    },
    render: function() {
      this.$el.find('.tab-content,.color-studio-navigation').empty;
      $('.page,.view').removeClass('on');
      $('#work-page').addClass('on');
      this.$el.addClass('on');
      this.$el.find('.click-looks ul').html(this.template({
        aClickLooks: Alcon.DataStorage.aClickLooks
      }));
      this.$el.find('.tab-content .tab-pane:first-child').addClass('active');
      Alcon.EventDispatcher.trigger("loaded:click-looks");
      return this;
    },
    fnChose: function(e) {
      var iLookId, sLookName;
      iLookId = $(e.target).closest('li').data('click-look-id');
      sLookName = $(e.target).closest('li').find('.product-lines__label').text();
      if (Alcon.Session.get('iSelectedClickLookId') === iLookId && Alcon.Config.bIsMobile) {
        Alcon.Session.unset('iSelectedClickLookId');
      } else {
        Alcon.Utils.Helpers.trackEvent("look*click*/try_on/total_looks/" + sLookName);
        Alcon.Utils.Helpers.vmeTrackEvent("/tryOn/1-click looks/looks/page-1");
        if (Alcon.Config.oVme.bIsHTML5) {
          Alcon.Utils.Helpers.fnShowLoading();
        }
      }
      setTimeout(function() {
        if (Alcon.Session.get('iSelectedClickLookId') === iLookId) {
          Alcon.Session.unset('iSelectedClickLookId');
        }
        Alcon.Session.set('iSelectedClickLookId', iLookId);
        if (Alcon.Config.oVme.bIsHTML5) {
          return Alcon.Utils.Helpers.fnHideLoading();
        }
      }, 100);
      return Alcon.Router.fnUnsetState('share');
    }
  });

}).call(this);
;(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Alcon.Views.SelectProduct = Backbone.View.extend({
    el: '#select-product-wrapper',
    template: _.template($('#products-list-items-tpl').html()),
    activeProductTemplate: _.template($("#active-product-item-tpl").html()),
    activeProductsList: $("#what-i-am-wearing .products-block"),
    oProductLine: null,
    iStyle: 0,
    iArea: 0,
    events: {
      "click .back-to-product-lines": (function() {
        return Alcon.Router.fnUnSetSubroute("select-product");
      }),
      "click .products li": "fnApplyProduct",
      "click .styles a": "fnApplyStyle",
      "click .areas .area": "fnApplyArea"
    },
    render: function(iProductLineId) {
      var aProducts, iActiveProductId, sFeature;
      this.oProductLine = _.find(Alcon.DataStorage.aProductLines, function(oProductLine) {
        return oProductLine.key === iProductLineId;
      });
      aProducts = Alcon.DataStorage.aProducts.filter((function(_this) {
        return function(oProduct) {
          return iProductLineId === oProduct.pl;
        };
      })(this));
      this.$el.find('.colors .colors-list').remove;
      this.$el.find('.product-line img').attr('src', this.oProductLine.image);
      this.$el.find('.product-line .price-value').text(this.oProductLine.price);
      this.$el.find('.product-line .brand-value').text(this.oProductLine.description);
      this.$el.find('.product-line .shade-value').text("");
      this.$el.find('.product-line .title-value').text(this.oProductLine.label);
      this.$el.find('.styles .area').css('background-color', '#FFF');
      this.$el.removeClass();
      this.$el.addClass(Alcon.Utils.Helpers.fnGetFeatureNameById(this.oProductLine.feature));
      sFeature = Alcon.Utils.Helpers.fnGetFeatureNameById(this.oProductLine.feature);
      this.$el.find(".styles." + sFeature + " a, .styles." + sFeature + " .area").removeClass('active');
      this.$el.find(".styles." + sFeature + " a:first-child").addClass('active');
      this.$el.find(".styles." + sFeature + " a.active .area:first-child").addClass('active');
      _.each(Alcon.AppliedProducts, (function(_this) {
        return function(oAppliedProduct) {
          if (oAppliedProduct.pl === _this.oProductLine.key) {
            _this.$el.find(".styles." + sFeature + " a, .styles." + sFeature + " .area").removeClass('active');
            _this.$el.find(".styles." + sFeature + " [data-style-number='" + oAppliedProduct.styleNumber + "']").addClass('active');
            _this.$el.find(".styles." + sFeature + " [data-style-number='" + oAppliedProduct.styleNumber + "'] .areas [data-area-id='" + oAppliedProduct.area + "']").data('product-id', oAppliedProduct.key);
            _this.$el.find(".styles." + sFeature + " [data-style-number='" + oAppliedProduct.styleNumber + "'] .areas [data-area-id='" + oAppliedProduct.area + "']").css('background-color', '#' + Alcon.Utils.Helpers.fnRgbToHex(oAppliedProduct.rgb));
            return _this.$el.find(".styles." + sFeature + " [data-style-number='" + oAppliedProduct.styleNumber + "'] .areas [data-area-id='" + oAppliedProduct.area + "']").addClass('active');
          }
        };
      })(this));
      this.iStyle = this.$el.find(".styles." + sFeature + " a.active .area.active").data('style-id');
      this.iArea = this.$el.find(".styles." + sFeature + " a.active .area.active").data('area-id');
      iActiveProductId = this.$el.find(".styles." + sFeature + " a.active .area.active").data('product-id');
      if (this.iStyle == null) {
        this.iStyle = 0;
      }
      if (this.iArea == null) {
        this.iArea = 0;
      }
      this.$el.find('.products-list').html(this.template({
        aProducts: aProducts,
        iActiveProductId: iActiveProductId
      }));
      Alcon.EventDispatcher.trigger("loaded:products");
      return this;
    },
    fnApplyProduct: function(e) {
      var iProductId, iStyleNumber, oProduct, sCategory, sFeature;
      iProductId = typeof e === 'number' ? e : $(e.target).closest('li').data('product-id');
      oProduct = _.find(Alcon.DataStorage.aProducts, function(oProduct) {
        return oProduct.key === iProductId;
      });
      if (this.oProductLine != null) {
        oProduct.plLabel = this.oProductLine.label;
        oProduct.description = this.oProductLine.description;
        oProduct.thumbnail = this.oProductLine.image;
        oProduct.price = this.oProductLine.price;
      } else {
        oProduct.plLabel = "";
        oProduct.thumbnail = "";
      }
      sFeature = Alcon.Utils.Helpers.fnGetFeatureNameById(oProduct.feature);
      oProduct.style = this.iStyle;
      oProduct.area = this.iArea;
      iStyleNumber = this.$el.find(".styles." + sFeature + " a.active").data('style-number');
      oProduct.styleNumber = iStyleNumber;
      if (_.findWhere(Alcon.AppliedProducts, {
        key: oProduct.key,
        area: oProduct.area
      }) == null) {
        if (oProduct.feature === Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS || oProduct.feature === Alcon.Config.oFeatures.FEATURE_LOWLIGHTS) {
          Alcon.Utils.Helpers.fnShowLoading();
          Alcon.Vme.fnApplyProduct(oProduct);
          $(e.target).closest('li').addClass('active');
          Alcon.Utils.Helpers.fnHideLoading();
        } else {
          Alcon.Vme.fnApplyProduct(oProduct);
          $(e.target).closest('li').addClass('active');
        }
        sCategory = Alcon.Utils.Helpers.fnGetCategoryByFeature(oProduct.feature);
        if (sCategory === "eyes" || sCategory === "lips" || sCategory === "face" || sCategory === "hairstyles") {
          Alcon.Utils.Helpers.trackEvent("product*click*/" + sCategory + "/" + sFeature + "/applied/" + oProduct.plLabel + "/" + oProduct.label);
        }
      }
      return Alcon.Router.fnUnsetState('share');
    },
    fnApplyHair: function(iHairId) {
      var oHair;
      oHair = _.find(Alcon.DataStorage.aHairs, function(oProduct) {
        return oProduct.key === iHairId;
      });
      if (_.findWhere(Alcon.AppliedProducts, {
        key: oHair.key,
        area: 0
      }) == null) {
        Alcon.AppliedProducts = _.filter(Alcon.AppliedProducts, function(oAppliedProduct) {
          return oAppliedProduct.feature !== Alcon.Config.oFeatures.FEATURE_HAIR_COLOR;
        });
        oHair.area = 0;
        Alcon.Vme.clearProduct(Alcon.Config.oFeatures.FEATURE_LOWLIGHTS);
        Alcon.Vme.clearProduct(Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS);
        Alcon.Vme.clearProduct(Alcon.Config.oFeatures.FEATURE_HAIR_COLOR);
        Alcon.Vme.fnApplyProduct(oHair);
        if (oHair.key === Alcon.Vme.iVmeHairId) {
          Alcon.Utils.Helpers.fnHideLoading();
        }
        Alcon.Vme.iVmeHairId = oHair.key;
        Alcon.Utils.Helpers.trackEvent("product*click*/hairstyles/hair/applied/" + oHair.label);
      }
      return Alcon.Router.fnUnsetState('share');
    },
    fnUpdateAppliedList: function() {
      var aProducts;
      Alcon.Router.oSaveShareView.render();
      aProducts = Alcon.AppliedProducts;
      $(this.activeProductsList).empty();
      this.$el.find('.styles .areas .area').css('background-color', '#fff');
      this.$el.find('.styles .areas .area').data('product-id', '');
      this.$el.find('.products-list .products li').removeClass('active');
      return _.each(aProducts, (function(_this) {
        return function(oProduct) {
          var sCategory, sFeature;
          sCategory = Alcon.Utils.Helpers.fnGetCategoryByFeature(oProduct.feature);
          if (sCategory !== "jewelry" && sCategory !== "eyewear" && sCategory !== "headwear" && oProduct.feature !== Alcon.Config.oFeatures.FEATURE_HAIR && oProduct.feature !== Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS && oProduct.feature !== Alcon.Config.oFeatures.FEATURE_LOWLIGHTS) {
            if ((_this.oProductLine != null) && oProduct.feature === _this.oProductLine.feature && oProduct.pl === _this.oProductLine.key) {
              sFeature = Alcon.Utils.Helpers.fnGetFeatureNameById(_this.oProductLine.feature);
              _this.$el.find(".styles." + sFeature + " [data-style-number='" + oProduct.styleNumber + "']").addClass('active');
              _this.$el.find(".styles." + sFeature + " [data-style-number='" + oProduct.styleNumber + "'] .areas [data-area-id='" + oProduct.area + "']").data('product-id', oProduct.key);
              _this.$el.find(".styles." + sFeature + " [data-style-number='" + oProduct.styleNumber + "'] .areas [data-area-id='" + oProduct.area + "']").css('background-color', '#' + Alcon.Utils.Helpers.fnRgbToHex(oProduct.rgb));
              if (_this.$el.find(".styles." + sFeature + " [data-style-number='" + oProduct.styleNumber + "'] .areas [data-area-id='" + oProduct.area + "']").hasClass('active')) {
                _this.$el.find(".products-list .products [data-product-id='" + oProduct.key + "']").addClass('active');
              }
              _this.$el.find('.shade-value').text(oProduct.label);
            }
            return _this.activeProductsList.append(_this.activeProductTemplate({
              oProduct: oProduct
            }));
          }
        };
      })(this));
    },
    fnApplyStyle: function(e) {
      var aAreas, aProductIds, aProducts, iProductId, oProduct;
      e.stopPropagation();
      if (!$(e.currentTarget).hasClass('active')) {
        aAreas = $(e.currentTarget).closest('.styles').find('.active .area');
        aProductIds = [];
        _.each(aAreas, function(oArea) {
          return aProductIds.push($(oArea).data('product-id'));
        });
        aProducts = _.filter(Alcon.AppliedProducts, function(oAppliedProduct) {
          var _ref;
          return _ref = oAppliedProduct.key, __indexOf.call(aProductIds, _ref) >= 0;
        });
        _.each(aProducts, (function(_this) {
          return function(oProduct) {
            return Alcon.Utils.Helpers.fnResetProduct(oProduct, false);
          };
        })(this));
        aAreas = $(e.currentTarget).find('.area');
        _.each(aAreas, function(oArea, i) {
          if (aProducts[i] != null) {
            aProducts[i].area = $(oArea).data('area-id');
            aProducts[i].style = $(oArea).data('style-id');
            aProducts[i].styleNumber = $(e.currentTarget).data('style-number');
            return Alcon.Vme.fnApplyProduct(aProducts[i]);
          }
        });
        this.$el.find('.styles a').removeClass('active');
        $(e.currentTarget).addClass('active');
        $(e.currentTarget).find('.area').removeClass('active');
        $(e.currentTarget).find('.area:first-child').addClass('active');
        iProductId = $(e.currentTarget).find('.area:first-child').data('product-id');
        this.$el.find(".products-list li[data-product-id='" + iProductId + "']").addClass('active');
        this.$el.find('.shade-value').text('');
        oProduct = _.find(Alcon.AppliedProducts, function(oAppliedProduct) {
          return oAppliedProduct.key === iProductId;
        });
        if (oProduct != null) {
          this.$el.find('.shade-value').text(oProduct.label);
        }
        this.iStyle = $(e.currentTarget).find('.area:first-child').data('style-id');
        return this.iArea = $(e.currentTarget).find('.area:first-child').data('area-id');
      }
    },
    fnApplyArea: function(e) {
      var iProductId, oProduct;
      e.stopPropagation();
      if (!$(e.currentTarget).hasClass('active')) {
        this.$el.find('.styles .areas .area').removeClass('active');
        $(e.currentTarget).addClass('active');
        this.iStyle = $(e.currentTarget).data('style-id');
        this.iArea = $(e.currentTarget).data('area-id');
        iProductId = $(e.currentTarget).data('product-id');
        this.$el.find('.products-list li').removeClass('active');
        this.$el.find(".products-list li[data-product-id='" + iProductId + "']").addClass('active');
        this.$el.find('.shade-value').text('');
        oProduct = _.find(Alcon.AppliedProducts, function(oAppliedProduct) {
          return oAppliedProduct.key === iProductId;
        });
        if (oProduct != null) {
          return this.$el.find('.shade-value').text(oProduct.label);
        }
      }
    },
    fnRemoveProduct: function(e) {
      var iArea, iId, oProduct;
      iId = $(e.target).closest('.products-block.item').data('id');
      iArea = $(e.target).closest('.products-block.item').data('area-id');
      oProduct = _.findWhere(Alcon.AppliedProducts, {
        key: iId,
        area: iArea
      });
      Alcon.Vme.clearProduct(oProduct);
      Alcon.AppliedProducts = _.filter(Alcon.AppliedProducts, function(oAppliedProduct) {
        return oAppliedProduct !== oProduct;
      });
      return this.fnUpdateAppliedList();
    },
    trackEcommerce: function(e) {
      var iId, oProduct, sCategory, sFeature, sLabel;
      iId = $(e.currentTarget).closest('.item').data('id');
      oProduct = _.find(Alcon.AppliedProducts, function(oAppliedProduct) {
        return oAppliedProduct.key === iId;
      });
      sCategory = Alcon.Utils.Helpers.fnGetCategoryByFeature(oProduct.feature);
      sFeature = Alcon.Utils.Helpers.fnGetFeatureNameById(oProduct.feature);
      if (oProduct.label != null) {
        sLabel = oProduct.label;
      } else {
        sLabel = oProduct.productname;
      }
      if (sCategory === "eyes" || sCategory === "lips" || sCategory === "face") {
        return Alcon.Utils.Helpers.trackEvent("ecommerce*click*/ecommerce/" + sCategory + "/" + sFeature + "/applied/" + oProduct.plLabel + "/" + sLabel);
      }
    }
  });

}).call(this);
;(function() {
  Alcon.Views.SelectProductLine = Backbone.View.extend({
    el: "",
    template: _.template($('#product-lines-list-items-tpl').html()),
    oSelectProductView: null,
    sCategory: null,
    events: {
      "click .tab-content .product-lines li": "fnChoose",
      "click .color-studio-navigation li": (function() {
        return Alcon.Router.fnUnSetSubroute('select-product');
      })
    },
    initialize: function(oOptions) {
      var aProductLines, sCategory;
      this.oSelectProductView = Alcon.Router.oSelectProductView;
      sCategory = oOptions.sCategory;
      this.sCategory = sCategory;
      this.$el = $("#select-" + sCategory + "-view");
      if (sCategory === 'eyewear' || sCategory === 'jewelry' || sCategory === 'headwear') {
        aProductLines = _.filter(Alcon.DataStorage.aProducts, function(oProductLine) {
          return oProductLine.category === sCategory;
        });
      } else if (sCategory === 'hairstyles') {
        aProductLines = Alcon.DataStorage.aHairs;
        aProductLines = aProductLines.concat(_.filter(Alcon.DataStorage.aProducts, function(oProduct) {
          return oProduct.feature === Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS || oProduct.feature === Alcon.Config.oFeatures.FEATURE_LOWLIGHTS;
        }));
        aProductLines = aProductLines.concat(_.filter(Alcon.DataStorage.aProductLines, function(oProduct) {
          return oProduct.feature === Alcon.Config.oFeatures.FEATURE_HAIR_COLOR;
        }));
      } else {
        aProductLines = _.filter(Alcon.DataStorage.aProductLines, function(oProductLine) {
          return oProductLine.category === sCategory;
        });
      }
      aProductLines = _.groupBy(aProductLines, function(oProductLine) {
        return oProductLine.feature;
      });
      return this.$el.find('.tab-content').append(this.template({
        aProductLines: aProductLines
      }));
    },
    render: function() {
      $('.page,.view').removeClass('on');
      $('#work-page').addClass('on');
      this.$el.addClass('on');
      Alcon.EventDispatcher.trigger("loaded:product-lines", this.$el.find('.product-lines'));
      return this;
    },
    fnChoose: function(e) {
      var iFeature, sId;
      sId = $(e.target).closest('li').data('product-line-id');
      iFeature = +$(e.target).closest('.product-lines-list').attr('id');
      if (this.sCategory === "jewelry" || this.sCategory === "headwear" || this.sCategory === "eyewear" || iFeature === Alcon.Config.oFeatures.FEATURE_HIGHLIGHTS || iFeature === Alcon.Config.oFeatures.FEATURE_LOWLIGHTS) {
        this.oSelectProductView.iStyle = 0;
        this.oSelectProductView.iArea = 0;
        return this.oSelectProductView.fnApplyProduct(sId);
      } else if (iFeature === Alcon.Config.oFeatures.FEATURE_HAIR) {
        return this.oSelectProductView.fnApplyHair(sId);
      } else {
        Alcon.Router.fnSetSubroute('select-product');
        return this.oSelectProductView.render(sId);
      }
    }
  });

}).call(this);
;(function() {
  Alcon.Views.MobileNavMenu = Backbone.View.extend({
    el: '.change-states',
    events: {
      'click li.prev': 'fnPrev',
      'click li.next': 'fnNext'
    },
    render: function() {
      return this;
    },
    fnPrev: function(e) {
      var route;
      route = $('li.active', this.$el).prev().find('a').attr('href');
      console.log(route);
      Alcon.Router.navigate(route, {
        trigger: true
      });
      return Alcon.EventDispatcher.trigger('do:track:tab-changing', route);
    },
    fnNext: function(e) {
      var route;
      route = $('li.active', this.$el).next().find('a').attr('href');
      console.log(route);
      Alcon.Router.navigate(route, {
        trigger: true
      });
      return Alcon.EventDispatcher.trigger('do:track:tab-changing', route);
    }
  });

}).call(this);
;(function() {
  Alcon.Views.RegisterLogin = Backbone.View.extend({
    el: '.accounting',
    events: {
      'click .register-link': 'fnOpenRegisterPopup',
      'click .login-link': 'fnOpenLoginPopup',
      'click .logout-link': 'fnLogout'
    },
    initialize: function() {
      Alcon.Session.on("change:sAlconUserId", (function(_this) {
        return function(model, sAlconUserId) {
          if (sAlconUserId != null) {
            return _this.fnCmsLogin();
          } else {
            return _this.fnCmsLogout();
          }
        };
      })(this));
      Alcon.Session.on("change:oCmsUser", (function(_this) {
        return function(model, oCmsUser) {
          if (oCmsUser != null) {
            return $('body').addClass('authentificated');
          } else {
            return $('body').removeClass('authentificated');
          }
        };
      })(this));
      return window.addEventListener("message", function(oEvent) {
        if (oEvent.data.indexOf('{"username":"') === 0) {
          return Alcon.Session.set('sAlconUserId', JSON.parse(oEvent.data).username);
        }
      }, false);
    },
    fnOpenLoginPopup: function() {
      return window.parent.postMessage('showLogin', '*');
    },
    fnOpenRegisterPopup: function() {
      return window.parent.postMessage('showRegistration', '*');
    },
    fnLogout: function() {
      window.parent.postMessage('logout', '*');
      return Alcon.Session.unset('sAlconUserId');
    },
    fnCmsLogin: function() {
      Alcon.Utils.Helpers.fnShowLoading();
      return Alcon.Utils.easyXdmAjax({
        swf: "https://tryoncms.appspot.com/static/remotexdm/easyxdm.swf",
        remote: "https://tryoncms.appspot.com/static/remotexdm/cors.html",
        remoteHelper: "https://tryoncms.appspot.com/static/remotexdm/name.html"
      }, Alcon.Config.oUrls.sCmsLogin, {
        username: MD5.base64(Alcon.Session.get('sAlconUserId')),
        password: Alcon.Session.get('sAlconUserId'),
        client_id: Alcon.Config.oCms.sOAuthClientId,
        client_secret: Alcon.Config.oCms.sOAuthClientSecret,
        grant_type: 'password'
      }, (function(_this) {
        return function(oResponse) {
          var user;
          if (oResponse.data.status === 400) {
            _this.fnCmsRegister();
            return;
          }
          if (oResponse.status !== 200) {
            _this.fnDisplayRequestFailed(oResponse.message, oResponse.status);
            return;
          }
          user = $.parseJSON(oResponse.data);
          console.log("login user");
          console.log(user);
          Alcon.Session.set('oCmsUser', user);
          return Alcon.Utils.Helpers.fnHideLoading();
        };
      })(this));
    },
    fnCmsLogout: function() {
      console.log('logout user');
      return Alcon.Session.unset('oCmsUser');
    },
    fnCmsRegister: function() {
      console.log('lets register him');
      return Alcon.Utils.easyXdmAjax({
        swf: "https://tryoncms.appspot.com/static/remotexdm/easyxdm.swf",
        remote: "https://tryoncms.appspot.com/static/remotexdm/cors.html",
        remoteHelper: "https://tryoncms.appspot.com/static/remotexdm/name.html"
      }, Alcon.Config.oUrls.sCmsRegister, {
        username: MD5.base64(Alcon.Session.get('sAlconUserId')),
        email: Alcon.Session.get('sAlconUserId') + '_alconvmo@stylecaster.com',
        password: Alcon.Session.get('sAlconUserId'),
        client_id: Alcon.Config.oCms.sOAuthClientId,
        client_secret: Alcon.Config.oCms.sOAuthClientSecret,
        grant_type: 'password',
        age_confirmation: 'true',
        terms_confirmation: 'true',
        password2: Alcon.Session.get('sAlconUserId'),
        last_name: Alcon.Session.get('sAlconUserId'),
        first_name: Alcon.Session.get('sAlconUserId'),
        newsletter_opt_in: true
      }, (function(_this) {
        return function(oResponse) {
          var user, _ref;
          if (oResponse.status !== 201) {
            Alcon.Utils.Helpers.fnDisplayRequestFailed(oResponse != null ? oResponse.message : void 0, (_ref = oResponse.data) != null ? _ref.status : void 0, oResponse != null ? oResponse.code : void 0);
            Alcon.Session.unset('sAlconUserId');
            return;
          }
          user = $.parseJSON(oResponse.data);
          console.log("register user and then login into Alcon TryOn");
          console.log(user);
          _this.fnCmsLogin();
          return Alcon.Utils.Helpers.fnHideLoading();
        };
      })(this));
    }
  });

}).call(this);
;(function() {
  Alcon.Views.SaveShare = Backbone.View.extend({
    el: '#share',
    sPinterestText: AlconAppTexts.pinterestText,
    sTwitterText: AlconAppTexts.twitterText,
    sMessageEmailSubject: AlconAppTexts.messageEmailSubject,
    sMessageEmailBody1Look: AlconAppTexts.messageEmailBody1Look,
    sMessageEmailBodyNLooks: AlconAppTexts.messageEmailBodyNLooks,
    sEmailTemplateMessage: AlconAppTexts.emailTemplateMessage,
    sDisclaimer: AlconAppTexts.disclaimerTextLine1 + AlconAppTexts.disclaimerTextLine2,
    events: {
      "click .print, .download": "fnSave",
      'click .facebook, .twitter, .pinterest, .google-plus, .email': 'fnShareSendImage',
      'click .share__close': (function() {
        return Alcon.Router.fnUnsetState('share');
      })
    },
    initialize: function() {
      Alcon.Session.on('change:iSelectedProductId', (function(_this) {
        return function() {
          return _this.render();
        };
      })(this));
      Alcon.Session.on('change:iSelectedHairId', (function(_this) {
        return function() {
          return _this.render();
        };
      })(this));
      Alcon.Session.on('change:iSelectedAccessoryId', (function(_this) {
        return function() {
          return _this.render();
        };
      })(this));
      return Alcon.Session.on('change:iSelectedClickLookId', (function(_this) {
        return function() {
          return _this.render();
        };
      })(this));
    },
    render: function() {
      if (Alcon.AppliedProducts.length > 0) {
        this.$el.removeClass('disabled');
      } else {
        this.$el.addClass('disabled');
      }
      return this;
    },
    _oShare: {},
    fnSave: function(oEvent) {
      var bIsNeedToSend, bSimpleSave, elTarget;
      elTarget = $(oEvent.currentTarget).closest('#share');
      bIsNeedToSend = !(elTarget.hasClass('disabled'));
      if (bIsNeedToSend) {
        bSimpleSave = true;
        switch (oEvent.currentTarget.className) {
          case 'print':
            if (bSimpleSave) {
              return this.fnPrint();
            } else {
              return Alcon.EventDispatcher.trigger('do:show-modal', 'print-look', {
                fnCallback: this.fnPrint
              });
            }
            break;
          case 'download':
            if (bSimpleSave) {
              return this.fnDownload();
            } else {
              return Alcon.EventDispatcher.trigger('do:show-modal', 'select-download-look', {
                fnCallback: this.fnDownload
              });
            }
        }
      }
    },
    fnPrint: function(oParams) {
      var iLensId, sLensLabel, _ref;
      Alcon.Utils.Helpers.trackEvent("sidebar*click*/save_share/print");
      Alcon.Utils.Helpers.fnShowLoading();
      window.fnPrintLookInPopup = function(sImageDataUrl) {
        var oPopup;
        Alcon.Utils.Helpers.fnHideLoading();
        oPopup = Alcon.Utils.Helpers.fnOpenWindow();
        if (oPopup != null) {
          oPopup.document.write("<html><body style='margin:0;padding:0;'><img style='height:100%; width:auto' src='" + sImageDataUrl + "'></body></html>");
          oPopup.focus();
          oPopup.print();
          return oPopup.document.close();
        }
      };
      if (oParams == null) {
        iLensId = Alcon.Session.get('iSelectedLensId');
        sLensLabel = iLensId != null ? (_ref = _.find(Alcon.DataStorage.aLenses, function(oLens) {
          return oLens.id === iLensId;
        })) != null ? _ref.label : void 0 : void 0;
        return Alcon.Vme.fnGetShareImage('fnPrintLookInPopup', {
          sLensLabel: sLensLabel
        });
      } else {
        return Alcon.Vme.fnGetShareImage('fnPrintLookInPopup', oParams);
      }
    },
    fnDownload: function(oParams) {
      var iLensId, sLensLabel, _ref;
      Alcon.Utils.Helpers.trackEvent("sidebar*click*/save_share/download");
      Alcon.Utils.Helpers.fnShowLoading();
      window.fnShowDownloadLookModal = function(sImageDataUrl) {
        return setTimeout(function() {
          Alcon.EventDispatcher.trigger('do:show-modal', 'download-look', {
            sImageDataUrl: sImageDataUrl
          });
          return Alcon.Utils.Helpers.fnHideLoading();
        }, 0);
      };
      if (oParams == null) {
        iLensId = Alcon.Session.get('iSelectedLensId');
        sLensLabel = iLensId != null ? (_ref = _.find(Alcon.DataStorage.aLenses, function(oLens) {
          return oLens.id === iLensId;
        })) != null ? _ref.label : void 0 : void 0;
        return Alcon.Vme.fnGetShareImage('fnShowDownloadLookModal', {
          sLensLabel: sLensLabel
        });
      } else {
        return Alcon.Vme.fnGetShareImage('fnShowDownloadLookModal', oParams);
      }
    },
    fnSaveToLooks: function(e) {
      if (!Alcon.Config.bIsMobile) {
        $(".user-action-buttons .save .button", this.$el).trigger('click');
        return Alcon.EventDispatcher.trigger('do:open:save-your-look');
      } else {
        if ($(e.currentTarget).parent().hasClass('disabled')) {

        } else {
          return Alcon.EventDispatcher.trigger('do:open:save-your-look');
        }
      }
    },
    fnMobileToggleSharePanel: function() {
      if (Alcon.Config.bIsMobile) {
        $(".footer-inner .nav, .footer-inner .tabs-base, .footer-inner .tab-content").toggle();
        $(".footer-inner .share-panel-mobile").toggleClass('expanded');
        return $(".share-panel-mobile .tabs-base").toggle();
      }
    },
    fnMobileHideSharePanel: function() {
      if ($(".footer-inner .share-panel-mobile").hasClass('expanded')) {
        return this.fnMobileToggleSharePanel();
      }
    },
    fnShareSendImage: function(oEvent) {
      var bIsNeedToSend, bLookType, elTarget;
      elTarget = $(oEvent.currentTarget).closest('#share');
      bIsNeedToSend = !(elTarget.hasClass('disabled'));
      if (bIsNeedToSend) {
        if (oEvent.currentTarget.className === 'twitter') {
          return this.fnShare(oEvent);
        }
        bLookType = Alcon.Vme.fnGetCurrentMode();
        this._oShare.bLookType = bLookType;
        Alcon.Utils.Helpers.fnShowLoading();
        if (oEvent.currentTarget.className === 'share') {
          this.$el.addClass('disabled');
          this.fnGenerateImage().then((function(_this) {
            return function(response) {
              _this._oShare.afterImage = response.split(",")[1];
              return _this.fnPostImageToRemote(oEvent);
            };
          })(this));
        }
        if (oEvent.currentTarget.className !== 'share') {
          this._oShare.afterImage = Alcon.Vme.fnGetCurrentModeImage().split(",")[1];
          this._oShare.oPopup = Alcon.Utils.Helpers.fnOpenWindow('');
          this._oShare.oPopup.document.write("<p>Loading. Please wait ...</p>");
          return this.fnPostImageToRemote(oEvent);
        }
      }
    },
    fnPostImageToRemote: function(oEvent) {
      if (Alcon.Config.oVme.bIsHTML5) {
        return $.when($.ajax(Alcon.Config.oUrls.sImageSaving, {
          type: 'POST',
          async: true,
          data: {
            image_data: this._oShare.afterImage
          },
          beforeSend: function(xhr) {
            return xhr.setRequestHeader("Authorization", Alcon.Config.oScshoebox.sToken);
          }
        })).then((function(_this) {
          return function(response) {
            _this._oShare.productListAndBeforeAndAfterImageURL = response.public_url;
            Alcon.Utils.Helpers.fnHideLoading();
            return _this.fnShare(oEvent);
          };
        })(this)).fail(function(oXHR) {
          return Alcon.Utils.Helpers.fnDisplayRequestFailed(oXHR.statusText, oXHR.status);
        });
      } else {
        return Alcon.Utils.easyXdmAjax({
          swf: "https://scshoebox.appspot.com/remotexdm/easyxdm.swf",
          remote: "https://scshoebox.appspot.com/remotexdm/upload_rpc.html",
          remoteHelper: "https://scshoebox.appspot.com/remotexdm/name.html"
        }, Alcon.Config.oUrls.sImageSaving, {
          image_data: this._oShare.afterImage
        }, (function(_this) {
          return function(oResponse) {
            var _ref;
            if (oResponse.status !== 200) {
              Alcon.Utils.Helpers.fnDisplayRequestFailed(oResponse != null ? oResponse.message : void 0, (_ref = oResponse.data) != null ? _ref.status : void 0, oResponse != null ? oResponse.code : void 0);
              return;
            }
            oResponse = $.parseJSON(oResponse.data);
            _this._oShare.productListAndBeforeAndAfterImageURL = oResponse.public_url;
            _this._oShare.sLensLabel = bLookType === 'lenses-grid' ? 'N' : _this._oShare.oLens.apptextKey.replace('lens', '');
            Alcon.Utils.Helpers.fnHideLoading();
            return _this.fnShare(oEvent);
          };
        })(this), "POST", "json", {
          "Authorization": Alcon.Config.oScshoebox.sToken
        });
      }
    },
    fnGenerateImage: function() {
      var canvas, context, dfd, image1, image2, sImg1, sImg2;
      dfd = new jQuery.Deferred();
      sImg1 = Alcon.Vme.sBeforeImageSrc;
      sImg2 = Alcon.Vme.fnGetCurrentModeImage();
      canvas = document.getElementById("save-share-canvas");
      context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      image1 = new Image();
      image1.src = sImg1;
      image2 = new Image();
      image2.src = sImg2;
      setTimeout((function(_this) {
        return function() {
          var oImageDimesions1, oImageDimesions2;
          oImageDimesions1 = Alcon.Utils.Helpers.fnRecalculateImageSize(400, 600, image1.width, image1.height);
          oImageDimesions2 = Alcon.Utils.Helpers.fnRecalculateImageSize(920, 1120, image2.width, image2.height);
          context.drawImage(image1, 0, 0, image1.width, image1.height, 0, 0, oImageDimesions1.width, oImageDimesions1.height);
          context.drawImage(image2, 0, 0, image2.width, image2.height, 430, 0, oImageDimesions2.width, oImageDimesions2.height);
          context.font = '20px Raleway-Medium';
          context.fillStyle = '#595959';
          context.textAlign = 'left';
          context.font = '30px Raleway-Medium';
          context.fillText(AlconAppTexts.printHeaderLine3, 10, 570);
          context.font = '30px Raleway-Medium';
          context.fillText(AlconAppTexts.printFooterLine, 435, 1160);
          return dfd.resolve(canvas.toDataURL("image/jpeg"));
        };
      })(this), 1500);
      return dfd.promise();
    },
    fnShare: function(oEvent) {
      var sShareMethod;
      sShareMethod = (function() {
        switch (oEvent.currentTarget.className) {
          case 'facebook':
            return 'fnFacebook';
          case 'twitter':
            return 'fnTwitter';
          case 'pinterest':
            return 'fnPinterest';
          case 'google-plus':
            return 'fnGoogleplus';
          case 'email':
            return 'fnEmail';
          case 'share':
            return 'fnShareStub';
        }
      })();
      return this[sShareMethod]();
    },
    fnShareStub: function() {
      this.$el.removeClass('disabled');
      return false;
    },
    fnFacebook: function() {
      var url;
      Alcon.Utils.Helpers.trackEvent("sidebar*click*/save_share/facebook");
      url = 'http://stylecaster.com/virtual-makeover/socialshare/facebook/' + this._oShare.productListAndBeforeAndAfterImageURL.split("/")[this._oShare.productListAndBeforeAndAfterImageURL.split("/").length - 1] + '/' + Alcon.Config.sProject + '/' + Alcon.Config.sLang + '/';
      this._oShare.oPopup.location = "http://www.facebook.com/sharer.php?s=100&u=" + (encodeURIComponent(url)) + "&picture=" + (encodeURIComponent(this._oShare.productListAndBeforeAndAfterImageURL));
      return false;
    },
    fnTwitter: function() {
      Alcon.Utils.Helpers.fnOpenWindow("https://twitter.com/intent/tweet?text=" + (encodeURIComponent(this.sTwitterText)));
      return false;
    },
    fnPinterest: function() {
      var text, url;
      url = 'http://stylecaster.com/virtual-makeover/socialshare/pinterest/' + this._oShare.productListAndBeforeAndAfterImageURL.split("/")[this._oShare.productListAndBeforeAndAfterImageURL.split("/").length - 1] + '/' + Alcon.Config.sProject + '/' + Alcon.Config.sLang + '/' + this._oShare.sLensLabel;
      text = "" + this.sPinterestText + "\n\n" + this.sDisclaimer;
      this._oShare.oPopup.location = "http://pinterest.com/pin/create/button?url=" + (encodeURIComponent(url)) + "&media=" + (encodeURIComponent(this._oShare.productListAndBeforeAndAfterImageURL)) + "&description=" + (encodeURIComponent(text));
      return false;
    },
    fnGoogleplus: function() {
      var url;
      url = 'http://stylecaster.com/virtual-makeover/socialshare/google_plus/' + this._oShare.productListAndBeforeAndAfterImageURL.split("/")[this._oShare.productListAndBeforeAndAfterImageURL.split("/").length - 1] + '/' + Alcon.Config.sProject + '/' + Alcon.Config.sLang + '/' + encodeURIComponent(this._oShare.sLensLabel);
      this._oShare.oPopup.location = "https://plus.google.com/share?url=" + (encodeURIComponent(url)) + "&media=" + (encodeURIComponent(this._oShare.productListAndBeforeAndAfterImageURL));
      return false;
    },
    fnEmail: function() {
      var body, url;
      Alcon.Utils.Helpers.trackEvent("sidebar*click*/save_share/email");
      url = 'http://stylecaster.com/virtual-makeover/emailshare/' + this._oShare.productListAndBeforeAndAfterImageURL.split("/")[this._oShare.productListAndBeforeAndAfterImageURL.split("/").length - 1] + '/' + Alcon.Config.sProject + '/' + Alcon.Config.sLang + '/';
      body = this.sEmailTemplateMessage;
      body = body.replace('[see here url]', url);
      $('.email').attr("href", "mailto:?subject=" + encodeURIComponent(this.sMessageEmailSubject) + "&body=" + encodeURIComponent(body));
      this.$el.removeClass('disabled');
      return false;
    }
  });

  console.log('Loading Save/Share View');

}).call(this);
;(function() {
  Alcon.Views.Retrace = Backbone.View.extend({
    el: '#retrace',
    iMoveValue: 5,
    iRotateValue: 1,
    iTracedFeature: null,
    iMinSize: 6,
    events: {
      'click .retrace-block__button--done, retrace-block__button--reset, .retrace-block__button--adjust-done': 'fnFinishTrace',
      'click .retrace-block__controls-buttons': 'fnTransform',
      'click .retrace-block__button--next': 'fnTraceNext'
    },
    initialize: function() {
      return Alcon.EventDispatcher.on('do:stop-placing-points', (function(_this) {
        return function() {
          $('.points li', _this.$el).removeClass('on').addClass('complited');
          return $('.outlines li', _this.$el).first().removeClass('off');
        };
      })(this));
    },
    render: function() {
      var $traceExample, iFeatureId;
      iFeatureId = Alcon.Session.get('iTraceModeFeature');
      $traceExample = this.$el.find('.retrace-block__retrace-example');
      $traceExample.removeClass();
      $traceExample.addClass("retrace-block__retrace-example");
      $traceExample.addClass(Alcon.Utils.Helpers.fnGetFeatureNameById(iFeatureId));
      this.$el.find('.retrace-block__controls-wrapper').show();
      if (iFeatureId === Alcon.Config.oFeatures.FEATURE_EARRING) {
        this.$el.find('.retrace-block__controls-wrapper').hide();
      }
      switch (iFeatureId) {
        case Alcon.Config.oFeatures.FEATURE_HAIR:
        case Alcon.Config.oFeatures.FEATURE_GLASSES:
        case Alcon.Config.oFeatures.FEATURE_SUNGLASSES:
        case Alcon.Config.oFeatures.FEATURE_NECKLACE:
        case Alcon.Config.oFeatures.FEATURE_HAIRCLIPS:
        case Alcon.Config.oFeatures.FEATURE_HEADWEAR:
          Alcon.Vme.fnDisableRetraceMode();
          Alcon.Vme.bRetraceModeIsOn = true;
          return this.iTracedFeature = iFeatureId;
        default:
          return Alcon.Vme.fnEnableRetraceMode(iFeatureId);
      }
    },
    fnFinishTrace: function(e) {
      Alcon.Router.fnUnsetState('retrace');
      Alcon.Vme.fnDisableRetraceMode();
      if (Alcon.Config.bIsMobile === true) {
        $('.vme-controls .before-after').removeClass('inactive');
      }
      if ($(e.target).hasClass('retrace-block__button--adjust-done')) {
        Alcon.Router.navigate('select-face', {
          trigger: true
        });
        $(".main-nav .color-studio-navigation.face li a")[0].click();
        $('.retrace-block__button.retrace-block__button--done').show();
        $('.retrace-block__button.retrace-block__button--adjust-done, .retrace-block__button--next').hide();
      }
      Alcon.Vme.fnZoomTo('all');
      return Alcon.Vme.fnZoomTo('full');
    },
    fnTransform: function(e) {
      var iValue, sAction, sDirection, stageChild;
      sDirection = $(e.target).data('direction');
      iValue = this.iMoveValue;
      stageChild = Alcon.Vme.vmeHtml5.getStageChild(this.iTracedFeature, 0);
      switch (sDirection) {
        case 'move-up':
          sAction = ControlActions.UP;
          break;
        case 'move-down':
          sAction = ControlActions.DOWN;
          break;
        case 'move-left':
          sAction = ControlActions.LEFT;
          break;
        case 'move-right':
          sAction = ControlActions.RIGHT;
          break;
        case 'size-minus':
          sAction = ControlActions.SMALLER;
          if (stageChild.scaleX < 0.2 || stageChild.scaleY < 0.2) {
            return this;
          }
          break;
        case 'size-plus':
          sAction = ControlActions.BIGGER;
          break;
        case 'width-minus':
          sAction = ControlActions.NARROWER;
          if (stageChild.scaleX < 0.2) {
            return this;
          }
          break;
        case 'width-plus':
          sAction = ControlActions.WIDER;
          break;
        case 'length-minus':
          sAction = ControlActions.SHORTER;
          if (stageChild.scaleY < 0.2) {
            return this;
          }
          break;
        case 'length-plus':
          sAction = ControlActions.TALLER;
          break;
        case 'rotate-left':
          sAction = ControlActions.ROTATE_LEFT;
          iValue = this.iRotateValue;
          break;
        case 'rotate-right':
          sAction = ControlActions.ROTATE_RIGHT;
          iValue = this.iRotateValue;
      }
      return Alcon.Vme.vmeHtml5.controlStageChild(this.iTracedFeature, 0, 0, sAction, iValue);
    },
    fnTraceNext: function() {
      var iFeatureId, iNextFeatureId;
      iFeatureId = Alcon.Session.get('iFeatureId');
      switch (iFeatureId) {
        case Alcon.Config.oFeatures.FEATURE_FOUNDATION:
          iNextFeatureId = Alcon.Config.oFeatures.FEATURE_EYELINER;
          if (iNextFeatureId === Alcon.Session.get('iTraceModeFeature')) {
            Alcon.Session.set('iFeatureId', iNextFeatureId);
            this.fnTraceNext();
            break;
          }
          if (Backbone.history.getFragment() === 'select-eyes') {
            $(".main-nav .color-studio-navigation.eyes li a[href='#" + iNextFeatureId + "']").trigger('click');
          } else {
            Alcon.Session.set('iNavigationTabId', iNextFeatureId);
            Alcon.Router.navigate("select-eyes", {
              trigger: true
            });
          }
          Alcon.Session.set('iFeatureId', iNextFeatureId);
          break;
        case Alcon.Config.oFeatures.FEATURE_EYELINER:
          Alcon.Router.navigate("select-lips", {
            trigger: true
          });
          Alcon.Session.set('iFeatureId', Alcon.Config.oFeatures.FEATURE_LIPSTICK);
          $('.retrace-block__button.retrace-block__button--next').hide();
          $('.retrace-block__button--adjust-done').show();
      }
      return Alcon.Session.unset('iNavigationTabId');
    }
  });

  console.log('Loading Manual Trace View');

}).call(this);
;(function() {
  Alcon.Views.Vme = Backbone.View.extend({
    el: '#vme-wrapper',
    sRouteBeforeRetrace: null,
    events: {
      "click .vme-controls .zoom-out": "fnZoomOut",
      "click .vme-controls .zoom-in": "fnZoomIn",
      "click .vme-controls .before-after": "fnToggleBeforeAfter",
      "click .vme-controls .lenses-grid": "fnToggleLensesGrid",
      "click .vme-controls .retrace": "fnToggleRetrace",
      "click .vme-lenses-grid .close-view": "fnToggleLensesGrid",
      "click .reset-btn": "fnResetLook",
      "click .clear": "fnResetProduct",
      'click .my-looks': 'fnMobileExpand',
      'click .share': "fnToggleShare",
      'click .cancel': "fnResetTrace"
    },
    initialize: function() {
      Alcon.Session.on('change:iSelectedClickLookId', (function(_this) {
        return function(model, iSelectedClickLookId) {
          return Alcon.Vme.fnApplyClickLook(iSelectedClickLookId);
        };
      })(this));
      Alcon.Session.on('change:iSelectedFaceId', (function(_this) {
        return function(model, iSelectedFaceId) {
          var oFace;
          oFace = _.find(Alcon.DataStorage.aFaces, function(oFace) {
            return oFace.id === iSelectedFaceId;
          });
          if (iSelectedFaceId != null) {
            if (Alcon.Config.oVme.bIsHTML5) {
              Alcon.Utils.Helpers.fnShowLoading();
              return Alcon.Vme.fnApplyFace(iSelectedFaceId, function() {
                return Alcon.Utils.Helpers.fnHideLoading();
              });
            } else {
              return Alcon.Vme.fnApplyFace(iSelectedFaceId);
            }
          }
        };
      })(this));
      Alcon.Session.on('change:iTraceModeFeature', (function(_this) {
        return function(model, iTraceModeFeature) {
          if (Alcon.Vme.bRetraceModeIsOn) {
            return Alcon.Router.oRetraceView.render();
          }
        };
      })(this));
      return Alcon.VmeFactory.fnCreateInstance().fnInitialize().done(function() {
        var $vmeContainer;
        Alcon.Session.set('iSelectedFaceId', Alcon.DataStorage.aFaces[0].id);
        $vmeContainer = $('#vme-container');
        return $(window).on('resize', function(e) {
          var height, scale, width;
          scale = Alcon.Vme.fnGetCurrentZoom();
          width = $vmeContainer.width();
          height = $vmeContainer.height();
          Alcon.Vme.vmeHtml5.zoom('full', width, height);
          Alcon.Vme.fnApplyZoom(scale);
          return setTimeout(function() {
            $(".vme-controls .zoom-in").trigger('click');
            if (scale < Alcon.Vme.iMaxZoom) {
              return $(".vme-controls .zoom-out").trigger('click');
            }
          }, 100);
        });
      });
    },
    render: function() {
      if (Alcon.Config.oVme.bIsHTML5 === true) {
        this.$el.addClass('html5-vme');
      }
      return Alcon.EventDispatcher.trigger('render:vme-wrapper');
    },
    fnZoomOut: function() {
      return Alcon.Vme.fnZoomOut();
    },
    fnZoomIn: function() {
      return Alcon.Vme.fnZoomIn();
    },
    fnToggleBeforeAfter: function() {
      if (Alcon.Config.bIsMobile && !this.$el.hasClass('before-after-mode') && $('.vme-controls .before-after').hasClass('inactive')) {
        return;
      }
      this.$el.toggleClass('before-after-mode');
      return Alcon.Vme.fnToggleBeforeAfterMode();
    },
    fnHideBeforeAfter: function() {
      if (this.$el.hasClass('before-after-mode')) {
        return this.fnToggleBeforeAfter();
      }
    },
    fnResetTrace: function() {
      var iFeature, oStageChild, tracedArea;
      iFeature = Alcon.Session.get('iTraceModeFeature');
      if (iFeature !== Alcon.Config.oFeatures.FEATURE_HAIR && iFeature !== Alcon.Config.oFeatures.FEATURE_GLASSES && iFeature !== Alcon.Config.oFeatures.FEATURE_SUNGLASSES && iFeature !== Alcon.Config.oFeatures.FEATURE_NECKLACE && iFeature !== Alcon.Config.oFeatures.FEATURE_HAIRCLIPS && iFeature !== Alcon.Config.oFeatures.FEATURE_HEADWEAR) {
        tracedArea = Alcon.Vme.fnGetTracedArea(iFeature);
        return window.faceMappingApp.reset(iFeature, tracedArea);
      } else {
        oStageChild = Alcon.Vme.vmeHtml5.getStageChild(iFeature);
        oStageChild.x = 0;
        oStageChild.y = 0;
        oStageChild.rotation = 0;
        oStageChild.scaleX = 1;
        oStageChild.scaleY = 1;
        return Alcon.Vme.vmeHtml5.allowUpdate(true);
      }
    },
    fnToggleLensesGrid: function() {
      Alcon.Vme.bIsLensesGridMode = !Alcon.Vme.bIsLensesGridMode;
      this.$el.toggleClass('lenses-grid-mode');
      if (Alcon.Vme.bIsLensesGridMode === false) {
        if (Alcon.Session.get('iSelectedFrameId') != null) {
          Alcon.Vme.fnApplyFrame(Alcon.Session.get('iSelectedFrameId'));
        }
        return;
      }
      Alcon.Utils.Helpers.fnShowLoading();
      $('.vme-lenses-grid-img', this.$el).empty();
      Alcon.Vme.fnApplyFrame(null);
      return setTimeout(function() {
        return Alcon.Vme.fnGenerate9LesensImage('Alcon.Router.oVmeView.fnRenderLensesGrid');
      }, 0);
    },
    fnHideLensesGrid: function() {
      if (Alcon.Vme.bIsLensesGridMode === true) {
        return this.fnToggleLensesGrid();
      }
    },
    fnRenderLensesGrid: function(s9LensesImage) {
      Alcon.Vme.sLensesGridImage = s9LensesImage;
      $('.vme-lenses-grid-img', this.$el).html($('<img/>', {
        src: Alcon.Vme.sLensesGridImage
      }));
      return Alcon.Utils.Helpers.fnHideLoading();
    },
    fnToggleRetrace: function() {
      if ($('body').hasClass('route-select-one-click-look') || Alcon.Session.get('sVmeImageType') === 'model') {
        return this;
      }
      if (!$('body').hasClass('state-retrace')) {
        Alcon.Router.fnUnsetState('share');
        Alcon.Router.oRetraceView.render();
        Alcon.Router.fnSetState('retrace');
        if (Alcon.Config.bIsMobile) {
          $('#retracing-view .sizes').hide();
          $('#retracing-view .tab-pane').removeClass('active');
          $('#retracing-view #eyes').addClass('active');
          return $('#retracing-view .targets.nav-tabs li').removeClass('active').first().addClass('active');
        }
      } else {
        Alcon.Router.fnUnsetState('retrace');
        Alcon.Vme.fnDisableRetraceMode();
        if (Alcon.Config.bIsMobile === true) {
          return $('.vme-controls .before-after').removeClass('inactive');
        }
      }
    },
    fnToggleShare: function(oEvent) {
      if ($('body').hasClass('state-retrace')) {
        return;
      }
      if (!$('body').hasClass('state-share')) {
        Alcon.Router.oSaveShareView.render();
        Alcon.Router.fnSetState('share');
        if (Alcon.AppliedProducts.length > 0) {
          return Alcon.Router.oSaveShareView.fnShareSendImage(oEvent);
        }
      } else {
        return Alcon.Router.fnUnsetState('share');
      }
    },
    fnResetLook: function(oEvent) {
      oEvent.stopPropagation();
      return Alcon.Utils.Helpers.fnResetLook();
    },
    fnResetProduct: function() {
      return Alcon.Utils.Helpers.fnResetFeature();
    },
    fnMobileExpand: function(e) {
      return $('.saved-looks').toggleClass('on');
    }
  });

  console.log('Loading VME Backbone View');

}).call(this);
;(function() {
  var scripts;

  if (window.location.hash && window.location.hash.indexOf('access_token') !== -1 && window.location.hash.indexOf('expires_in') !== -1) {
    console.log('User came back from direct FB login, redirect him to main/parent app');
    window.location = "" + (_.getQueryParams()['ref']) + window.location.hash;
    return;
  }

  console.log("Let's Rock!!! loading data from the server and push to DataStorage, start routing ...");

  window.addEventListener("message", function(oEvent) {
    var isLandScape, match, pattern, _ref;
    if (oEvent.data.indexOf('window isLandScape:') === 0) {
      pattern = /^\w*window isLandScape: (\d)\w*$/g;
      match = pattern.exec(oEvent.data);
      isLandScape = (_ref = match[1] === '1') != null ? _ref : {
        "true": false
      };
      return Alcon.Utils.Helpers.fnCheckOrientation(oEvent, isLandScape);
    }
  }, false);

  scripts = [];

  if (Alcon.Config.oVme.bIsHTML5 === true) {
    scripts.push('assets/js/libs/vmecompressfinal.js');
    scripts.push('assets/js/libs/tracing/Class.js');
    scripts.push('assets/js/libs/tracing/Point.js');
    scripts.push('assets/js/libs/tracing/PointsGenerator.js');
    scripts.push('assets/js/libs/tracing/FaceMappingApp.js');
    scripts.push('assets/js/libs/tracing/vmejs.js');
    scripts.push('assets/js/libs/tracing/vmecalc.js');
    scripts.push('assets/js/libs/tracing/jquery-ui.js');
    scripts.push('assets/js/libs/tracing/jquery.ui.touch-punch.min.js');
    scripts.push('assets/js/libs/Jcrop/js/jquery.Jcrop.js');
  } else {
    scripts.push('assets/js/libs/swfobject.js');
    scripts.push('assets/mk-copied/vmeembedhelper.js');
    scripts.push('assets/js/libs/Jcrop/js/jquery.Jcrop.js');
  }

  yepnope.addFilter(function(resourceObj) {
    resourceObj.attrs = {
      'onerror': 'Alcon.DataLoader.fnAddErrorMessage("' + resourceObj.url + '", 0, "error", "Yepnope can\'t load file")'
    };
    return resourceObj;
  });

  yepnope({
    load: scripts,
    complete: function() {
      var aoPromices, sErrorMessage;
      if (Alcon.DataLoader.fnHasErrorMessage()) {
        if (Alcon.Config.oVme.bIsHTML5) {
          if (Alcon.Config.bIsAndroid && !Alcon.Config.bIsChrome) {
            Alcon.Utils.Helpers.fnShowBrowserUnsupported();
          } else if (!Alcon.Config.bHasCanvas()) {
            Alcon.Utils.Helpers.fnShowDeviceUnsupported();
          }
        }
        aoPromices = Alcon.DataLoader.fnLoad();
        return $.when.apply($, aoPromices).then(function() {
          Alcon.DataLoader.fnUpdateStructure();
          Alcon.Config.oGA.sAccounts = AlconAppTexts.gaAccount;
          Alcon.EventDispatcher.trigger("before:history");
          Alcon.Utils.Helpers.fnHideLoading();
          Alcon.Session.set('app:launch', true);
          return Backbone.history.start();
        }, function() {
          var sErrorMessage;
          sErrorMessage = Alcon.DataLoader.fnGetErrorMessage();
          Alcon.Utils.Helpers.fnHideLoading();
          alert(sErrorMessage);
          return console.log('Couldnt bootstrap app, data request failed', Alcon.DataLoader.aoErrorMessages);
        });
      } else {
        sErrorMessage = Alcon.DataLoader.fnGetErrorMessage();
        alert(sErrorMessage);
        return console.log('Couldnt bootstrap app, data request failed', Alcon.DataLoader.aoErrorMessages);
      }
    }
  });

}).call(this);
