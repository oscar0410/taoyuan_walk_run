"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{132:function(e,i,a){var o=a(891);i.Z=void 0;var r=o(a(9438)),t=a(3827);i.Z=(0,r.default)((0,t.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRightOutlined")},7269:function(e,i,a){var o=a(891);i.Z=void 0;var r=o(a(9438)),t=a(3827);i.Z=(0,r.default)((0,t.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight")},4232:function(e,i,a){a.d(i,{default:function(){return r.a}});var o=a(4930),r=a.n(o)},4930:function(e,i,a){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return t}});let o=a(6921);a(3827),a(4090);let r=o._(a(4795));function t(e,i){let a={loading:e=>{let{error:i,isLoading:a,pastDelay:o}=e;return null}};return"function"==typeof e&&(a.loader=e),(0,r.default)({...a,...i})}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},9721:function(e,i,a){function o(e){let{reason:i,children:a}=e;return a}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"BailoutToCSR",{enumerable:!0,get:function(){return o}}),a(9775)},4795:function(e,i,a){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let o=a(3827),r=a(4090),t=a(9721);function n(e){var i;return{default:null!=(i=null==e?void 0:e.default)?i:e}}let s={loader:()=>Promise.resolve(n(()=>null)),loading:null,ssr:!0},l=function(e){let i={...s,...e},a=(0,r.lazy)(()=>i.loader().then(n)),l=i.loading;function d(e){let n=l?(0,o.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,s=i.ssr?(0,o.jsx)(a,{...e}):(0,o.jsx)(t.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(a,{...e})});return(0,o.jsx)(r.Suspense,{fallback:n,children:s})}return d.displayName="LoadableComponent",d}},3019:function(e,i,a){var o,r,t,n,s,l,d=a(4090);d&&"object"==typeof d&&"default"in d&&d.default;var u=a(5466),b=new u,c=b.getBrowser(),m=b.getCPU(),p=b.getDevice(),w=b.getEngine(),f=b.getOS(),v=b.getUA(),h={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},g={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},x=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},y=function(){return!!(window.navigator||navigator)&&(window.navigator||navigator)},k=function(e){var i=y();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},j=function(e){return e.type===h.Browser},C=function(e){return e.name===g.Edge},S=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},_=function(){return k("iPad")};p.type,h.SmartTv,p.type,h.Console,p.type,h.Wearable,p.type,h.Embedded,c.name===g.MobileSafari||_(),c.name,g.Chromium;var P=(o=p.type)===h.Mobile||o===h.Tablet||_();p.type,h.Mobile,p.type===h.Tablet||_(),j(p),j(p),f.name,f.name,"iOS"===f.name||_(),c.name,g.Chrome,c.name,g.Firefox,(r=c.name)===g.Safari||g.MobileSafari,c.name,g.Opera,(t=c.name)===g.InternetExplorer||g.Ie,x(f.version),x(f.name),x(c.version),x(c.major),x(c.name),x(p.vendor),x(p.model),x(w.name),x(w.version),x(v),C(c)||S(v),c.name,g.Yandex,x(p.type,"browser"),(n=y())&&(/iPad|iPhone|iPod/.test(n.platform)||"MacIntel"===n.platform&&n.maxTouchPoints>1)&&window.MSStream,_(),k("iPhone"),k("iPod"),"string"==typeof(l=(s=y())&&s.userAgent&&s.userAgent.toLowerCase())&&/electron/.test(l),S(v),C(c)&&S(v),f.name,f.name,c.name,g.MIUI,c.name,g.SamsungBrowser,i.tq=P},5466:function(e,i,a){var o;!function(r,t){var n="function",s="undefined",l="object",d="string",u="major",b="model",c="name",m="type",p="vendor",w="version",f="architecture",v="console",h="mobile",g="tablet",x="smarttv",y="wearable",k="embedded",j="Amazon",C="Apple",S="ASUS",_="BlackBerry",P="Browser",M="Chrome",N="Firefox",O="Google",T="Huawei",E="Microsoft",B="Motorola",z="Opera",I="Samsung",q="Sharp",U="Sony",A="Xiaomi",R="Zebra",L="Facebook",D="Chromium OS",G="Mac OS",V=function(e,i){var a={};for(var o in e)i[o]&&i[o].length%2==0?a[o]=i[o].concat(e[o]):a[o]=e[o];return a},W=function(e){for(var i={},a=0;a<e.length;a++)i[e[a].toUpperCase()]=e[a];return i},F=function(e,i){return typeof e===d&&-1!==Z(i).indexOf(Z(e))},Z=function(e){return e.toLowerCase()},H=function(e,i){if(typeof e===d)return e=e.replace(/^\s\s*/,""),typeof i===s?e:e.substring(0,500)},K=function(e,i){for(var a,o,r,s,d,u,b=0;b<i.length&&!d;){var c=i[b],m=i[b+1];for(a=o=0;a<c.length&&!d&&c[a];)if(d=c[a++].exec(e))for(r=0;r<m.length;r++)u=d[++o],typeof(s=m[r])===l&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):t:this[s[0]]=u?s[1].call(this,u,s[2]):t:4===s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):t):this[s]=u||t;b+=2}},Y=function(e,i){for(var a in i)if(typeof i[a]===l&&i[a].length>0){for(var o=0;o<i[a].length;o++)if(F(i[a][o],e))return"?"===a?t:a}else if(F(i[a],e))return"?"===a?t:a;return e},$={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},X={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,w],[/opios[\/ ]+([\w\.]+)/i],[w,[c,z+" Mini"]],[/\bopr\/([\w\.]+)/i],[w,[c,z]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[w,[c,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[c,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[c,"UC"+P]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[w,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[w,[c,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[w,[c,"Smart Lenovo "+P]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+P],w],[/\bfocus\/([\w\.]+)/i],[w,[c,N+" Focus"]],[/\bopt\/([\w\.]+)/i],[w,[c,z+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[c,z+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[c,"MIUI "+P]],[/fxios\/([-\w\.]+)/i],[w,[c,N]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+P]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+P],w],[/samsungbrowser\/([\w\.]+)/i],[w,[c,I+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],w],[/metasr[\/ ]?([\d\.]+)/i],[w,[c,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[c,"Sogou Mobile"],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[c,w],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,L],w],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[c,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[w,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[c,M+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,M+" WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[c,"Android "+P]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,w],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[w,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[w,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[w,Y,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[c,N+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[c,w],[/(cobalt)\/([\w\.]+)/i],[c,[w,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,Z]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",Z]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,Z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[b,[p,I],[m,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[b,[p,I],[m,h]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[b,[p,C],[m,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[b,[p,C],[m,g]],[/(macintosh);/i],[b,[p,C]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[b,[p,q],[m,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[b,[p,T],[m,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[b,[p,T],[m,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[b,/_/g," "],[p,A],[m,h]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[b,/_/g," "],[p,A],[m,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[b,[p,"OPPO"],[m,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[b,[p,"Vivo"],[m,h]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[b,[p,"Realme"],[m,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[b,[p,B],[m,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[b,[p,B],[m,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[b,[p,"LG"],[m,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[b,[p,"LG"],[m,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[b,[p,"Lenovo"],[m,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[b,/_/g," "],[p,"Nokia"],[m,h]],[/(pixel c)\b/i],[b,[p,O],[m,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[b,[p,O],[m,h]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[b,[p,U],[m,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[b,"Xperia Tablet"],[p,U],[m,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[b,[p,"OnePlus"],[m,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[b,[p,j],[m,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[b,/(.+)/g,"Fire Phone $1"],[p,j],[m,h]],[/(playbook);[-\w\),; ]+(rim)/i],[b,p,[m,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[b,[p,_],[m,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[b,[p,S],[m,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[b,[p,S],[m,h]],[/(nexus 9)/i],[b,[p,"HTC"],[m,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[b,/_/g," "],[m,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[b,[p,"Acer"],[m,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[b,[p,"Meizu"],[m,h]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[b,[p,"Ulefone"],[m,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,b,[m,h]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,b,[m,g]],[/(surface duo)/i],[b,[p,E],[m,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[b,[p,"Fairphone"],[m,h]],[/(u304aa)/i],[b,[p,"AT&T"],[m,h]],[/\bsie-(\w*)/i],[b,[p,"Siemens"],[m,h]],[/\b(rct\w+) b/i],[b,[p,"RCA"],[m,g]],[/\b(venue[\d ]{2,7}) b/i],[b,[p,"Dell"],[m,g]],[/\b(q(?:mv|ta)\w+) b/i],[b,[p,"Verizon"],[m,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[b,[p,"Barnes & Noble"],[m,g]],[/\b(tm\d{3}\w+) b/i],[b,[p,"NuVision"],[m,g]],[/\b(k88) b/i],[b,[p,"ZTE"],[m,g]],[/\b(nx\d{3}j) b/i],[b,[p,"ZTE"],[m,h]],[/\b(gen\d{3}) b.+49h/i],[b,[p,"Swiss"],[m,h]],[/\b(zur\d{3}) b/i],[b,[p,"Swiss"],[m,g]],[/\b((zeki)?tb.*\b) b/i],[b,[p,"Zeki"],[m,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],b,[m,g]],[/\b(ns-?\w{0,9}) b/i],[b,[p,"Insignia"],[m,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[b,[p,"NextBook"],[m,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],b,[m,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],b,[m,h]],[/\b(ph-1) /i],[b,[p,"Essential"],[m,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[b,[p,"Envizen"],[m,g]],[/\b(trio[-\w\. ]+) b/i],[b,[p,"MachSpeed"],[m,g]],[/\btu_(1491) b/i],[b,[p,"Rotor"],[m,g]],[/(shield[\w ]+) b/i],[b,[p,"Nvidia"],[m,g]],[/(sprint) (\w+)/i],[p,b,[m,h]],[/(kin\.[onetw]{3})/i],[[b,/\./g," "],[p,E],[m,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[b,[p,R],[m,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[b,[p,R],[m,h]],[/smart-tv.+(samsung)/i],[p,[m,x]],[/hbbtv.+maple;(\d+)/i],[[b,/^/,"SmartTV"],[p,I],[m,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,"LG"],[m,x]],[/(apple) ?tv/i],[p,[b,C+" TV"],[m,x]],[/crkey/i],[[b,M+"cast"],[p,O],[m,x]],[/droid.+aft(\w+)( bui|\))/i],[b,[p,j],[m,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[b,[p,q],[m,x]],[/(bravia[\w ]+)( bui|\))/i],[b,[p,U],[m,x]],[/(mitv-\w{5}) bui/i],[b,[p,A],[m,x]],[/Hbbtv.*(technisat) (.*);/i],[p,b,[m,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,H],[b,H],[m,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[m,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,b,[m,v]],[/droid.+; (shield) bui/i],[b,[p,"Nvidia"],[m,v]],[/(playstation [345portablevi]+)/i],[b,[p,U],[m,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[b,[p,E],[m,v]],[/((pebble))app/i],[p,b,[m,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[b,[p,C],[m,y]],[/droid.+; (glass) \d/i],[b,[p,O],[m,y]],[/droid.+; (wt63?0{2,3})\)/i],[b,[p,R],[m,y]],[/(quest( 2| pro)?)/i],[b,[p,L],[m,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[m,k]],[/(aeobc)\b/i],[b,[p,j],[m,k]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[b,[m,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[b,[m,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[m,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[m,h]],[/(android[-\w\. ]{0,9});.+buil/i],[b,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,w],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[c,[w,Y,$]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[w,Y,$],[c,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,G],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[w,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,w],[/\(bb(10);/i],[w,[c,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[c,N+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[w,[c,"watchOS"]],[/crkey\/([\d\.]+)/i],[w,[c,M+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[c,D],w],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,w],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[c,w]]},Q=function(e,i){if(typeof e===l&&(i=e,e=t),!(this instanceof Q))return new Q(e,i).getResult();var a=typeof r!==s&&r.navigator?r.navigator:t,o=e||(a&&a.userAgent?a.userAgent:""),v=a&&a.userAgentData?a.userAgentData:t,x=i?V(X,i):X,y=a&&a.userAgent==o;return this.getBrowser=function(){var e,i={};return i[c]=t,i[w]=t,K.call(i,o,x.browser),i[u]=typeof(e=i[w])===d?e.replace(/[^\d\.]/g,"").split(".")[0]:t,y&&a&&a.brave&&typeof a.brave.isBrave==n&&(i[c]="Brave"),i},this.getCPU=function(){var e={};return e[f]=t,K.call(e,o,x.cpu),e},this.getDevice=function(){var e={};return e[p]=t,e[b]=t,e[m]=t,K.call(e,o,x.device),y&&!e[m]&&v&&v.mobile&&(e[m]=h),y&&"Macintosh"==e[b]&&a&&typeof a.standalone!==s&&a.maxTouchPoints&&a.maxTouchPoints>2&&(e[b]="iPad",e[m]=g),e},this.getEngine=function(){var e={};return e[c]=t,e[w]=t,K.call(e,o,x.engine),e},this.getOS=function(){var e={};return e[c]=t,e[w]=t,K.call(e,o,x.os),y&&!e[c]&&v&&"Unknown"!=v.platform&&(e[c]=v.platform.replace(/chrome os/i,D).replace(/macos/i,G)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=typeof e===d&&e.length>500?H(e,500):e,this},this.setUA(o),this};Q.VERSION="1.0.37",Q.BROWSER=W([c,w,u]),Q.CPU=W([f]),Q.DEVICE=W([b,p,m,v,h,x,g,y,k]),Q.ENGINE=Q.OS=W([c,w]),typeof i!==s?(e.exports&&(i=e.exports=Q),i.UAParser=Q):a.amdO?t!==(o=(function(){return Q}).call(i,a,i,e))&&(e.exports=o):typeof r!==s&&(r.UAParser=Q);var J=typeof r!==s&&(r.jQuery||r.Zepto);if(J&&!J.ua){var ee=new Q;J.ua=ee.getResult(),J.ua.get=function(){return ee.getUA()},J.ua.set=function(e){ee.setUA(e);var i=ee.getResult();for(var a in i)J.ua[a]=i[a]}}}(window)},5187:function(e,i,a){a.d(i,{j:function(){return d}});var o=a(2126),r=(0,a(5487).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),t=a(4090),n=a(4291),s=a(3827),l=(0,n.Gp)((e,i)=>{let{Component:a,getDividerProps:n}=function(e){var i;let a,n;let{as:s,className:l,orientation:d,...u}=e,b=s||"hr";"hr"===b&&"vertical"===d&&(b="div");let{separatorProps:c}=(i={elementType:"string"==typeof b?b:"hr",orientation:d},n=(0,o.z)(i,{enabled:"string"==typeof i.elementType}),("vertical"===i.orientation&&(a="vertical"),"hr"!==i.elementType)?{separatorProps:{...n,role:"separator","aria-orientation":a}}:{separatorProps:n}),m=(0,t.useMemo)(()=>r({orientation:d,className:l}),[d,l]);return{Component:b,getDividerProps:(0,t.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{className:m,role:"separator","data-orientation":d,...c,...u,...e}},[m,d,c,u])}}({...e});return(0,s.jsx)(a,{ref:i,...n()})});l.displayName="NextUI.Divider";var d=l},2561:function(e,i,a){a.d(i,{k:function(){return u}});var o=a(985),r=a(4090),t=a(4291),n=a(3908),s=a(5142),l=a(3827),d=(0,t.Gp)((e,i)=>{let{as:a,children:t,className:d,...u}=e,{slots:b,classNames:c,headerId:m,setHeaderMounted:p}=(0,o.v)(),w=(0,n.gy)(i);return(0,r.useEffect)(()=>(p(!0),()=>p(!1)),[p]),(0,l.jsx)(a||"header",{ref:w,className:b.header({class:(0,s.W)(null==c?void 0:c.header,d)}),id:m,...u,children:t})});d.displayName="NextUI.ModalHeader";var u=d},985:function(e,i,a){a.d(i,{D:function(){return o},v:function(){return r}});var[o,r]=(0,a(2901).k)({name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`"})},7725:function(e,i,a){a.d(i,{I:function(){return u}});var o=a(985),r=a(4090),t=a(4291),n=a(3908),s=a(5142),l=a(3827),d=(0,t.Gp)((e,i)=>{let{as:a,children:t,className:d,...u}=e,{slots:b,classNames:c,bodyId:m,setBodyMounted:p}=(0,o.v)(),w=(0,n.gy)(i);return(0,r.useEffect)(()=>(p(!0),()=>p(!1)),[p]),(0,l.jsx)(a||"div",{ref:w,className:b.body({class:(0,s.W)(null==c?void 0:c.body,d)}),id:m,...u,children:t})});d.displayName="NextUI.ModalBody";var u=d},4178:function(e,i,a){a.d(i,{R:function(){return x}});var o=a(4772),r=a(3308),t=a(4090),n=a(5487),s=a(1244),l=(0,n.tv)({slots:{wrapper:["flex","w-screen","h-[100dvh]","fixed","inset-0","z-50","overflow-x-auto","justify-center","[--scale-enter:100%]","[--scale-exit:100%]","[--slide-enter:0px]","[--slide-exit:80px]","sm:[--scale-enter:100%]","sm:[--scale-exit:103%]","sm:[--slide-enter:0px]","sm:[--slide-exit:0px]"],base:["flex","flex-col","relative","bg-white","z-50","w-full","box-border","bg-content1","outline-none","mx-1","my-1","sm:mx-6","sm:my-16"],backdrop:"z-50",header:"flex py-4 px-6 flex-initial text-large font-semibold",body:"flex flex-1 flex-col gap-3 px-6 py-2",footer:"flex flex-row gap-2 px-6 py-4 justify-end",closeButton:["absolute","appearance-none","outline-none","select-none","top-1","right-1","p-2","text-foreground-500","rounded-full","hover:bg-default-100","active:bg-default-200","tap-highlight-transparent",...s.Dh]},variants:{size:{xs:{base:"max-w-xs"},sm:{base:"max-w-sm"},md:{base:"max-w-md"},lg:{base:"max-w-lg"},xl:{base:"max-w-xl"},"2xl":{base:"max-w-2xl"},"3xl":{base:"max-w-3xl"},"4xl":{base:"max-w-4xl"},"5xl":{base:"max-w-5xl"},full:{base:"my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] !rounded-none"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},placement:{auto:{wrapper:"items-end sm:items-center"},center:{wrapper:"items-center sm:items-center"},top:{wrapper:"items-start sm:items-start"},"top-center":{wrapper:"items-start sm:items-center"},bottom:{wrapper:"items-end sm:items-end"},"bottom-center":{wrapper:"items-end sm:items-center"}},shadow:{sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},backdrop:{transparent:{backdrop:"hidden"},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-md backdrop-saturate-150 bg-overlay/30"}},scrollBehavior:{normal:{base:"overflow-y-hidden"},inside:{base:"max-h-[calc(100%_-_7.5rem)]",body:"overflow-y-auto"},outside:{wrapper:"items-start sm:items-start overflow-y-auto",base:"my-16"}}},defaultVariants:{size:"md",radius:"lg",shadow:"sm",placement:"auto",backdrop:"opaque",scrollBehavior:"normal"},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"w-screen h-screen fixed inset-0"}}]}),d=a(4291),u=a(6411),b=a(8260),c=a(5142),m=a(4808),p=a(3908),w=a(6203),f=a(985),v=a(1348),h=a(3827),g=(0,d.Gp)((e,i)=>{let{children:a,...n}=e,s=function(e){var i;let[a,n]=(0,d.oe)(e,l.variantKeys),{ref:s,as:f,className:v,classNames:h,disableAnimation:g=!1,isOpen:x,defaultOpen:y,onOpenChange:k,motionProps:j,closeButton:C,isDismissable:S=!0,hideCloseButton:_=!1,shouldBlockScroll:P=!0,portalContainer:M,isKeyboardDismissDisabled:N=!1,onClose:O,...T}=a,E=(0,p.gy)(s),B=(0,t.useRef)(null),[z,I]=(0,t.useState)(!1),[q,U]=(0,t.useState)(!1),A=(0,t.useId)(),R=(0,t.useId)(),L=(0,t.useId)(),D=(0,w.d)({isOpen:x,defaultOpen:y,onOpenChange:e=>{null==k||k(e),e||null==O||O()}}),{modalProps:G,underlayProps:V}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,{overlayProps:n,underlayProps:s}=(0,o.Ir)({...e,isOpen:i.isOpen,onClose:i.close},a);return(0,o.Bq)(),(0,t.useEffect)(()=>{if(i.isOpen&&a.current)return(0,o.RP)([a.current])},[i.isOpen,a]),{modalProps:(0,r.dG)(n),underlayProps:s}}({isDismissable:S,isKeyboardDismissDisabled:N},D,E),{buttonProps:W}=(0,u.j)({onPress:D.close},B),{isFocusVisible:F,focusProps:Z}=(0,b.Fx)(),H=(0,c.W)(null==h?void 0:h.base,v),K=(0,t.useMemo)(()=>l({...n}),[...Object.values(n)]),Y=(0,t.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{className:K.backdrop({class:null==h?void 0:h.backdrop}),onClick:()=>D.close(),...V,...e}},[K,h,V]);return{Component:f||"section",slots:K,domRef:E,headerId:R,bodyId:L,motionProps:j,classNames:h,isDismissable:S,closeButton:C,hideCloseButton:_,portalContainer:M,shouldBlockScroll:P,backdrop:null!=(i=e.backdrop)?i:"opaque",isOpen:D.isOpen,onClose:D.close,disableAnimation:g,setBodyMounted:U,setHeaderMounted:I,getDialogProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{ref:(0,r.lq)(i,E),...(0,r.dG)(G,T,e),className:K.base({class:(0,c.W)(H,e.className)}),id:A,"data-open":(0,m.PB)(D.isOpen),"data-dismissable":(0,m.PB)(S),"aria-modal":(0,m.PB)(!0),"aria-labelledby":z?R:void 0,"aria-describedby":q?L:void 0}},getBackdropProps:Y,getCloseButtonProps:()=>({role:"button",tabIndex:0,"aria-label":"Close","data-focus-visible":(0,m.PB)(F),className:K.closeButton({class:null==h?void 0:h.closeButton}),...(0,r.dG)(W,Z)})}}({...n,ref:i}),g=(0,h.jsx)(o.aV,{portalContainer:s.portalContainer,children:a});return(0,h.jsx)(f.D,{value:s,children:s.disableAnimation&&s.isOpen?g:(0,h.jsx)(v.M,{children:s.isOpen?g:null})})});g.displayName="NextUI.Modal";var x=g},1527:function(e,i,a){a.d(i,{A:function(){return f}});var o=a(431),r={enter:{scale:"var(--scale-enter)",y:"var(--slide-enter))",opacity:1,transition:{scale:{duration:.4,ease:o.Lj.ease},opacity:{duration:.4,ease:o.Lj.ease},y:{type:"spring",bounce:0,duration:.6}}},exit:{scale:"var(--scale-exit)",y:"var(--slide-exit)",opacity:0,transition:{duration:.3,ease:o.Lj.ease}}},t=a(985),n=a(4090),s=a(4291),l=a(4772),d=a(3827),u=e=>(0,d.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...e,children:(0,d.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})}),b=a(7225),c=a(7191),m=a(3308),p=a(8260),w=(0,s.Gp)((e,i)=>{let{as:a,children:s,role:w="dialog",...f}=e,{Component:v,domRef:h,slots:g,isOpen:x,classNames:y,motionProps:k,backdrop:j,closeButton:C,hideCloseButton:S,disableAnimation:_,shouldBlockScroll:P,getDialogProps:M,getBackdropProps:N,getCloseButtonProps:O,onClose:T}=(0,t.v)(),{dialogProps:E}=function(e,i){let{role:a="dialog"}=e,o=(0,m.mp)();o=e["aria-label"]?void 0:o;let r=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{if(i.current&&!i.current.contains(document.activeElement)){(0,p.ex)(i.current);let e=setTimeout(()=>{document.activeElement===i.current&&(r.current=!0,i.current&&(i.current.blur(),(0,p.ex)(i.current)),r.current=!1)},500);return()=>{clearTimeout(e)}}},[i]),(0,l.Bq)(),{dialogProps:{...(0,m.zL)(e,{labelable:!0}),role:a,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||o,onBlur:e=>{r.current&&e.stopPropagation()}},titleProps:{id:o}}}({role:w},h),B=(0,n.isValidElement)(C)?(0,n.cloneElement)(C,O()):(0,d.jsx)("button",{...O(),children:(0,d.jsx)(u,{})}),z=(0,d.jsxs)(a||v||"div",{...M((0,m.dG)(E,f)),children:[(0,d.jsx)(l.U4,{onDismiss:T}),!S&&B,"function"==typeof s?s(T):s,(0,d.jsx)(l.U4,{onDismiss:T})]}),I=(0,n.useMemo)(()=>"transparent"===j?null:_?(0,d.jsx)("div",{...N()}):(0,d.jsx)(c.E.div,{animate:"enter",exit:"exit",initial:"exit",variants:o.y7.fade,...N()}),[j,_,N]);return(0,d.jsxs)("div",{tabIndex:-1,children:[I,(0,d.jsx)(b.Z,{forwardProps:!0,enabled:P&&x,removeScrollBar:!1,children:_?(0,d.jsx)("div",{className:g.wrapper({class:null==y?void 0:y.wrapper}),children:z}):(0,d.jsx)(c.E.div,{animate:"enter",className:g.wrapper({class:null==y?void 0:y.wrapper}),exit:"exit",initial:"exit",variants:r,...k,children:z})})]})});w.displayName="NextUI.ModalContent";var f=w},2646:function(e,i,a){a.d(i,{R:function(){return d}});var o=a(985),r=a(4291),t=a(3908),n=a(5142),s=a(3827),l=(0,r.Gp)((e,i)=>{let{as:a,children:r,className:l,...d}=e,{slots:u,classNames:b}=(0,o.v)(),c=(0,t.gy)(i);return(0,s.jsx)(a||"footer",{ref:c,className:u.footer({class:(0,n.W)(null==b?void 0:b.footer,l)}),...d,children:r})});l.displayName="NextUI.ModalFooter";var d=l},5994:function(e,i,a){a.d(i,{q:function(){return l}});var o=a(3308),r=a(365),t=a(4090),n=(null==globalThis?void 0:globalThis.document)?t.useLayoutEffect:t.useEffect;function s(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=(0,t.useRef)(e);return n(()=>{a.current=e}),(0,t.useCallback)(function(){for(var e,i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return null==(e=a.current)?void 0:e.call(a,...o)},i)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{id:i,defaultOpen:a,isOpen:n,onClose:l,onOpen:d,onChange:u=()=>{}}=e,b=s(d),c=s(l),[m,p]=(0,r.zk)(n,a||!1,u),w=(0,t.useId)(),f=i||w,v=void 0!==n,h=(0,t.useCallback)(()=>{v||p(!1),null==c||c()},[v,c]),g=(0,t.useCallback)(()=>{v||p(!0),null==b||b()},[v,b]),x=(0,t.useCallback)(()=>{(m?h:g)()},[m,g,h]);return{isOpen:!!m,onOpen:g,onClose:h,onOpenChange:x,isControlled:v,getButtonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"aria-expanded":m,"aria-controls":f,onClick:(0,o.tS)(e.onClick,x)}},getDisclosureProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,hidden:!m,id:f}}}}}}]);