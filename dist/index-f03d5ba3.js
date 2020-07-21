"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(require("atom")),r=e(require("assert")),s=e(require("fs")),i=e(require("util")),n=e(require("path"));function o(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}var a,l=(a=n)&&"object"==typeof a&&"default"in a?a.default:a;let c=!1;var p={promptUser:async function(e,t){const r=l.join(atom.getConfigDirPath(),"package-deps-state.json");let s=atom.config.get("atom-package-deps.ignored")||[];if(await I.fs.exists(r)){const e=JSON.parse(await I.fs.readFile(r,"utf8"));atom.config.set("atom-package-deps.ignored",s=e.ignored),await I.fs.unlink(r)}return s.includes(e)?"No":(atom.packages.isPackageDisabled("notifications"),new Promise((function(r){const i=atom.notifications.addInfo(e+" needs to install dependencies",{dismissable:!0,icon:"cloud-download",detail:t.map(e=>e.name).join(", "),description:`Install dependenc${1===t.length?"y":"ies"}?`,buttons:[{text:"Yes",onDidClick:()=>{r("Yes"),i.dismiss()}},{text:"No Thanks",onDidClick:()=>{r("No"),i.dismiss()}},{text:"Never",onDidClick:()=>{s=atom.config.get("atom-package-deps.ignored")||[],s.push(e),atom.config.set("atom-package-deps.ignored",s),c||(c=!0,atom.notifications.addInfo("How to reset package-deps memory",{dismissable:!0,description:"To modify the list of ignored files invoke 'Application: Open Your Config' and change the 'atom-package-deps' section"})),r("Never"),i.dismiss()}}]});i.onDidDismiss(()=>r("No"))})))}},E=t;class h{constructor(e,t){this.name=e,this.dependencies=t;const r=atom.notifications.addInfo(`Installing ${e} dependencies`,{detail:"Installing "+t.map(e=>e.name).join(", "),dismissable:!0}),s=document.createElement("progress");this.dispose=function(){r.dismiss()},this.advance=function(){s.value+=1},s.max=t.length,s.style.width="100%";try{let e=atom.views.getView(r);null!=e&&null!=e.element&&(e=e.element);const t=e.querySelector(".detail-content")||e.querySelector(".content");t&&t.appendChild(s)}catch(e){}}complete(e){if(this.dispose(),!e.size)return void atom.notifications.addSuccess(`Installed ${this.name} dependencies`,{detail:"Installed "+this.dependencies.map(e=>e.name).join(", ")});const t=[];e.forEach((e,r)=>{t.push("  • "+r)}),atom.notifications.addWarning(`Failed to install ${this.name} dependencies`,{detail:"These packages were not installed, check your console\nfor more info.\n"+t.join("\n"),dismissable:!0})}}const u=new Set(["✓","done"]),f=/(?:Installing|Moving) (.*?) to .* (.*)/;function d(e,t){const r=new Map;return Promise.all(e.map((function(e){return(s=atom.packages.getApmPath(),i=["install",e.url||e.name,"--production","--color","false"],new Promise((function(e){const t={stdout:[],stderr:[]};new E.BufferedProcess({command:s,args:i,stdout(e){t.stdout.push(e)},stderr(e){t.stderr.push(e)},exit(){e({stdout:t.stdout.join(""),stderr:t.stderr.join("")})},autoStart:!1}).start()}))).then((function(r){let s=f.test(r.stdout);if(s){const e=f.exec(r.stdout);s=e&&u.has(e[2])}if(t(e.name,!!s),!s){const t=new Error("Error installing dependency: "+e.name);throw t.stack=r.stderr,t}})).catch((function(t){r.set(e.name,t)}));var s,i}))).then((function(){return r}))}var m={performInstall:async function(e,t){const r=new h(e,t),s=await d(t,(function(){r.advance()}));return r.complete(s),Promise.all(t.map(e=>s.has(e.name)?null:atom.packages.activatePackage(e.name)))}},I=o((function(e,t){function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=o(r),l=o(s),c=o(i),E=o(n);function h(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}var u=h((function(e,t){e.exports=function(e){for(var t=0;t<e.length;)if(9==e[t]||10==e[t]||13==e[t]||32<=e[t]&&e[t]<=126)t+=1;else if(194<=e[t]&&e[t]<=223&&128<=e[t+1]&&e[t+1]<=191)t+=2;else if(224==e[t]&&160<=e[t+1]&&e[t+1]<=191&&128<=e[t+2]&&e[t+2]<=191||(225<=e[t]&&e[t]<=236||238==e[t]||239==e[t])&&128<=e[t+1]&&e[t+1]<=191&&128<=e[t+2]&&e[t+2]<=191||237==e[t]&&128<=e[t+1]&&e[t+1]<=159&&128<=e[t+2]&&e[t+2]<=191)t+=3;else{if(!(240==e[t]&&144<=e[t+1]&&e[t+1]<=191&&128<=e[t+2]&&e[t+2]<=191&&128<=e[t+3]&&e[t+3]<=191||241<=e[t]&&e[t]<=243&&128<=e[t+1]&&e[t+1]<=191&&128<=e[t+2]&&e[t+2]<=191&&128<=e[t+3]&&e[t+3]<=191||244==e[t]&&128<=e[t+1]&&e[t+1]<=143&&128<=e[t+2]&&e[t+2]<=191&&128<=e[t+3]&&e[t+3]<=191))return!1;t+=4}return!0}})),f=e=>{if(!Buffer.isBuffer(e))throw new TypeError("Expected a Buffer, got "+typeof e);return 239===e[0]&&187===e[1]&&191===e[2]&&u(e)?e.slice(3):e},d=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(h((function(e){var t=s(l),r=s(f);function s(e){return e&&e.__esModule?e:{default:e}}const i={},n=["Stats","_toUnixTimestamp","watch","watchFile","unwatchFile"];Object.keys(t.default).forEach((function(e){const r=t.default[e];"function"!=typeof r||e.includes("Sync")||e.includes("Stream")||n.includes(e)?i[e]=r:i[e]=(0,c.promisify)(r)})),i.exists=function(e){return new Promise((function(r){t.default.access(e,t.default.R_OK,(function(e){r(null===e)}))}))},i.readFile=function(e,s){return new Promise((function(i,n){t.default.readFile(e,(function(e,t){if(e)return void n(e);let o=(0,r.default)(t);s&&(o=o.toString(s)),i(o)}))}))},e.exports=i}))),I={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,MAX_SAFE_COMPONENT_LENGTH:16},$="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>{}:()=>{},R=h((function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r}=I,s=(t=e.exports={}).re=[],i=t.src=[],n=t.t={};let o=0;const a=(e,t,r)=>{const a=o++;n[e]=a,i[a]=t,s[a]=new RegExp(t,r?"g":void 0)};a("NUMERICIDENTIFIER","0|[1-9]\\d*"),a("NUMERICIDENTIFIERLOOSE","[0-9]+"),a("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),a("MAINVERSION",`(${i[n.NUMERICIDENTIFIER]})\\.(${i[n.NUMERICIDENTIFIER]})\\.(${i[n.NUMERICIDENTIFIER]})`),a("MAINVERSIONLOOSE",`(${i[n.NUMERICIDENTIFIERLOOSE]})\\.(${i[n.NUMERICIDENTIFIERLOOSE]})\\.(${i[n.NUMERICIDENTIFIERLOOSE]})`),a("PRERELEASEIDENTIFIER",`(?:${i[n.NUMERICIDENTIFIER]}|${i[n.NONNUMERICIDENTIFIER]})`),a("PRERELEASEIDENTIFIERLOOSE",`(?:${i[n.NUMERICIDENTIFIERLOOSE]}|${i[n.NONNUMERICIDENTIFIER]})`),a("PRERELEASE",`(?:-(${i[n.PRERELEASEIDENTIFIER]}(?:\\.${i[n.PRERELEASEIDENTIFIER]})*))`),a("PRERELEASELOOSE",`(?:-?(${i[n.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[n.PRERELEASEIDENTIFIERLOOSE]})*))`),a("BUILDIDENTIFIER","[0-9A-Za-z-]+"),a("BUILD",`(?:\\+(${i[n.BUILDIDENTIFIER]}(?:\\.${i[n.BUILDIDENTIFIER]})*))`),a("FULLPLAIN",`v?${i[n.MAINVERSION]}${i[n.PRERELEASE]}?${i[n.BUILD]}?`),a("FULL",`^${i[n.FULLPLAIN]}$`),a("LOOSEPLAIN",`[v=\\s]*${i[n.MAINVERSIONLOOSE]}${i[n.PRERELEASELOOSE]}?${i[n.BUILD]}?`),a("LOOSE",`^${i[n.LOOSEPLAIN]}$`),a("GTLT","((?:<|>)?=?)"),a("XRANGEIDENTIFIERLOOSE",i[n.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*"),a("XRANGEIDENTIFIER",i[n.NUMERICIDENTIFIER]+"|x|X|\\*"),a("XRANGEPLAIN",`[v=\\s]*(${i[n.XRANGEIDENTIFIER]})(?:\\.(${i[n.XRANGEIDENTIFIER]})(?:\\.(${i[n.XRANGEIDENTIFIER]})(?:${i[n.PRERELEASE]})?${i[n.BUILD]}?)?)?`),a("XRANGEPLAINLOOSE",`[v=\\s]*(${i[n.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[n.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[n.XRANGEIDENTIFIERLOOSE]})(?:${i[n.PRERELEASELOOSE]})?${i[n.BUILD]}?)?)?`),a("XRANGE",`^${i[n.GTLT]}\\s*${i[n.XRANGEPLAIN]}$`),a("XRANGELOOSE",`^${i[n.GTLT]}\\s*${i[n.XRANGEPLAINLOOSE]}$`),a("COERCE",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),a("COERCERTL",i[n.COERCE],!0),a("LONETILDE","(?:~>?)"),a("TILDETRIM",`(\\s*)${i[n.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",a("TILDE",`^${i[n.LONETILDE]}${i[n.XRANGEPLAIN]}$`),a("TILDELOOSE",`^${i[n.LONETILDE]}${i[n.XRANGEPLAINLOOSE]}$`),a("LONECARET","(?:\\^)"),a("CARETTRIM",`(\\s*)${i[n.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",a("CARET",`^${i[n.LONECARET]}${i[n.XRANGEPLAIN]}$`),a("CARETLOOSE",`^${i[n.LONECARET]}${i[n.XRANGEPLAINLOOSE]}$`),a("COMPARATORLOOSE",`^${i[n.GTLT]}\\s*(${i[n.LOOSEPLAIN]})$|^$`),a("COMPARATOR",`^${i[n.GTLT]}\\s*(${i[n.FULLPLAIN]})$|^$`),a("COMPARATORTRIM",`(\\s*)${i[n.GTLT]}\\s*(${i[n.LOOSEPLAIN]}|${i[n.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",a("HYPHENRANGE",`^\\s*(${i[n.XRANGEPLAIN]})\\s+-\\s+(${i[n.XRANGEPLAIN]})\\s*$`),a("HYPHENRANGELOOSE",`^\\s*(${i[n.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[n.XRANGEPLAINLOOSE]})\\s*$`),a("STAR","(<|>)?=?\\s*\\*"),a("GTE0","^\\s*>=\\s*0.0.0\\s*$"),a("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")}));const N=/^[0-9]+$/,O=(e,t)=>{const r=N.test(e),s=N.test(t);return r&&s&&(e=+e,t=+t),e===t?0:r&&!s?-1:s&&!r?1:e<t?-1:1};var L={compareIdentifiers:O,rcompareIdentifiers:(e,t)=>O(t,e)};const{MAX_LENGTH:T,MAX_SAFE_INTEGER:A}=I,{re:v,t:g}=R,{compareIdentifiers:w}=L;class P{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof P){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>T)throw new TypeError(`version is longer than ${T} characters`);this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?v[g.LOOSE]:v[g.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>A||this.major<0)throw new TypeError("Invalid major version");if(this.minor>A||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>A||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<A)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version}toString(){return this.version}compare(e){if($("SemVer.compare",this.version,this.options,e),!(e instanceof P)){if("string"==typeof e&&e===this.version)return 0;e=new P(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof P||(e=new P(e,this.options)),w(this.major,e.major)||w(this.minor,e.minor)||w(this.patch,e.patch)}comparePre(e){if(e instanceof P||(e=new P(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],s=e.prerelease[t];if(void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return w(r,s)}while(++t)}compareBuild(e){e instanceof P||(e=new P(e,this.options));let t=0;do{const r=this.build[t],s=e.build[t];if(void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return w(r,s)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this}}var S=P,y=(e,t,r)=>new S(e,r).compare(new S(t,r)),D=(e,t,r,s)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return((e,t,r)=>0===y(e,t,r))(e,r,s);case"!=":return((e,t,r)=>0!==y(e,t,r))(e,r,s);case">":return((e,t,r)=>y(e,t,r)>0)(e,r,s);case">=":return((e,t,r)=>y(e,t,r)>=0)(e,r,s);case"<":return((e,t,r)=>y(e,t,r)<0)(e,r,s);case"<=":return((e,t,r)=>y(e,t,r)<=0)(e,r,s);default:throw new TypeError("Invalid operator: "+t)}};const C=Symbol("SemVer ANY");class M{static get ANY(){return C}constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof M){if(e.loose===!!t.loose)return e;e=e.value}this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===C?this.value="":this.value=this.operator+this.semver.version,$("comp",this)}parse(e){const t=this.options.loose?F[G.COMPARATORLOOSE]:F[G.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new S(r[2],this.options.loose):this.semver=C}toString(){return this.value}test(e){if($("Comparator.test",e,this.options.loose),this.semver===C||e===C)return!0;if("string"==typeof e)try{e=new S(e,this.options)}catch(e){return!1}return D(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof M))throw new TypeError("a Comparator is required");if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new _(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new _(this.value,t).test(e.semver);const r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),s=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,n=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),o=D(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),a=D(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||s||i&&n||o||a}}var j=M;const{re:F,t:G}=R;class b{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof b)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new b(e.raw,t);if(e instanceof j)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const t=this.options.loose;e=e.trim();const r=t?k[X.HYPHENRANGELOOSE]:k[X.HYPHENRANGE];e=(e=e.replace(r,te(this.options.includePrerelease))).replace(k[X.COMPARATORTRIM],U),$("comparator trim",e,k[X.COMPARATORTRIM]),e=(e=(e=e.replace(k[X.TILDETRIM],x)).replace(k[X.CARETTRIM],B)).split(/\s+/).join(" ");const s=t?k[X.COMPARATORLOOSE]:k[X.COMPARATOR];return e.split(" ").map(e=>H(e,this.options)).join(" ").split(/\s+/).map(e=>ee(e,this.options)).filter(this.options.loose?e=>!!e.match(s):()=>!0).map(e=>new j(e,this.options))}intersects(e,t){if(!(e instanceof b))throw new TypeError("a Range is required");return this.set.some(r=>q(r,t)&&e.set.some(e=>q(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new S(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(re(this.set[t],e,this.options))return!0;return!1}}var _=b;const{re:k,t:X,comparatorTrimReplace:U,tildeTrimReplace:x,caretTrimReplace:B}=R,q=(e,t)=>{let r=!0;const s=e.slice();let i=s.pop();for(;r&&s.length;)r=s.every(e=>i.intersects(e,t)),i=s.pop();return r},H=(e,t)=>(e=Z(e,t),e=Y(e,t),e=K(e,t),e=Q(e)),V=e=>!e||"x"===e.toLowerCase()||"*"===e,Y=(e,t)=>e.trim().split(/\s+/).map(e=>z(e,t)).join(" "),z=(e,t)=>{const r=t.loose?k[X.TILDELOOSE]:k[X.TILDE];return e.replace(r,(e,t,r,s,i)=>{let n;return n=V(t)?"":V(r)?`>=${t}.0.0 <${+t+1}.0.0-0`:V(s)?`>=${t}.${r}.0 <${t}.${+r+1}.0-0`:i?`>=${t}.${r}.${s}-${i} <${t}.${+r+1}.0-0`:`>=${t}.${r}.${s} <${t}.${+r+1}.0-0`,n})},Z=(e,t)=>e.trim().split(/\s+/).map(e=>J(e,t)).join(" "),J=(e,t)=>{const r=t.loose?k[X.CARETLOOSE]:k[X.CARET],s=t.includePrerelease?"-0":"";return e.replace(r,(e,t,r,i,n)=>{let o;return o=V(t)?"":V(r)?`>=${t}.0.0${s} <${+t+1}.0.0-0`:V(i)?"0"===t?`>=${t}.${r}.0${s} <${t}.${+r+1}.0-0`:`>=${t}.${r}.0${s} <${+t+1}.0.0-0`:n?"0"===t?"0"===r?`>=${t}.${r}.${i}-${n} <${t}.${r}.${+i+1}-0`:`>=${t}.${r}.${i}-${n} <${t}.${+r+1}.0-0`:`>=${t}.${r}.${i}-${n} <${+t+1}.0.0-0`:"0"===t?"0"===r?`>=${t}.${r}.${i}${s} <${t}.${r}.${+i+1}-0`:`>=${t}.${r}.${i}${s} <${t}.${+r+1}.0-0`:`>=${t}.${r}.${i} <${+t+1}.0.0-0`,o})},K=(e,t)=>e.split(/\s+/).map(e=>W(e,t)).join(" "),W=(e,t)=>{e=e.trim();const r=t.loose?k[X.XRANGELOOSE]:k[X.XRANGE];return e.replace(r,(e,r,s,i,n,o)=>{const a=V(s),l=a||V(i),c=l||V(n),p=c;return"="===r&&p&&(r=""),o=t.includePrerelease?"-0":"",a?e=">"===r||"<"===r?"<0.0.0-0":"*":r&&p?(l&&(i=0),n=0,">"===r?(r=">=",l?(s=+s+1,i=0,n=0):(i=+i+1,n=0)):"<="===r&&(r="<",l?s=+s+1:i=+i+1),"<"===r&&(o="-0"),e=`${r+s}.${i}.${n}${o}`):l?e=`>=${s}.0.0${o} <${+s+1}.0.0-0`:c&&(e=`>=${s}.${i}.0${o} <${s}.${+i+1}.0-0`),e})},Q=(e,t)=>e.trim().replace(k[X.STAR],""),ee=(e,t)=>e.trim().replace(k[t.includePrerelease?X.GTE0PRE:X.GTE0],""),te=e=>(t,r,s,i,n,o,a,l,c,p,E,h,u)=>`${r=V(s)?"":V(i)?`>=${s}.0.0${e?"-0":""}`:V(n)?`>=${s}.${i}.0${e?"-0":""}`:o?">="+r:`>=${r}${e?"-0":""}`} ${l=V(c)?"":V(p)?`<${+c+1}.0.0-0`:V(E)?`<${c}.${+p+1}.0-0`:h?`<=${c}.${p}.${E}-${h}`:e?`<${c}.${p}.${+E+1}-0`:"<="+l}`.trim(),re=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if($(e[r].semver),e[r].semver!==j.ANY&&e[r].semver.prerelease.length>0){const s=e[r].semver;if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0};const se=/(.*?):.*/,ie=/(.*?)#.*/;void 0===window.__steelbrain_package_deps&&(window.__steelbrain_package_deps=new Set),t.fs=d,t.installDependencies=async function(e,t=!0){a(e,"[Package-Deps] Package name is required");const r=await async function(e){const t=atom.packages.getLoadedPackage(e),r=t&&t.metadata["package-deps"];return Array.isArray(r)?(await Promise.all(r.map((async function(e){let t=null,r=e,s=null;const i=se.exec(e),n=ie.exec(e);if(i?[,r,s]=i:n?[,r,t]=n:r=e,__steelbrain_package_deps.has(r))return null;const o=atom.packages.resolvePackagePath(r);if(o){if(!s)return null;const e=JSON.parse(await d.readFile(E.join(o,"package.json")));if(null!=e&&null!=e.version&&((e,t,r)=>{try{t=new _(t,r)}catch(e){return!1}return t.test(e)})(e.version,">="+s))return null}return __steelbrain_package_deps.add(r),{name:r,url:t}})))).filter(Boolean):[]}(e);if(r.length){if(t){let t="Yes";if(await Promise.resolve().then((function(){return p})).then(async({promptUser:s})=>{t=await s(e,r)}),"Yes"!==t)return}await Promise.resolve().then((function(){return m})).then(async({performInstall:t})=>t(e,r))}}})),$=o((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.install=I.installDependencies})),R=Object.freeze(Object.assign(Object.create(null),$,{default:$,__moduleExports:$}));exports.index=R;
//# sourceMappingURL=index-f03d5ba3.js.map
