(function(b){if(typeof exports=="object"&&typeof module=="object"){b(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],b)}else{b(CodeMirror)}}})(function(b){b.defineMode("yacas",function(s,w){function t(c){var e={},d=c.split(" ");for(var f=0;f<d.length;++f){e[d[f]]=true}return e}var y=t("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While");var A="(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)";var B="(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)";var p=new RegExp(A);var q=new RegExp(B);var v=new RegExp(B+"?_"+B);var x=new RegExp(B+"\\s*\\(");function z(c,d){var e;e=c.next();if(e==='"'){d.tokenize=r;return d.tokenize(c,d)}if(e==="/"){if(c.eat("*")){d.tokenize=u;return d.tokenize(c,d)}if(c.eat("/")){c.skipToEnd();return"comment"}}c.backUp(1);var g=c.match(/^(\w+)\s*\(/,false);if(g!==null&&y.hasOwnProperty(g[1])){d.scopes.push("bodied")}var f=a(d);if(f==="bodied"&&e==="["){d.scopes.pop()}if(e==="["||e==="{"||e==="("){d.scopes.push(e)}f=a(d);if(f==="["&&e==="]"||f==="{"&&e==="}"||f==="("&&e===")"){d.scopes.pop()}if(e===";"){while(f==="bodied"){d.scopes.pop();f=a(d)}}if(c.match(/\d+ *#/,true,false)){return"qualifier"}if(c.match(p,true,false)){return"number"}if(c.match(v,true,false)){return"variable-3"}if(c.match(/(?:\[|\]|{|}|\(|\))/,true,false)){return"bracket"}if(c.match(x,true,false)){c.backUp(1);return"variable"}if(c.match(q,true,false)){return"variable-2"}if(c.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,true,false)){return"operator"}return"error"}function r(c,e){var f,g=false,d=false;while((f=c.next())!=null){if(f==='"'&&!d){g=true;break}d=!d&&f==="\\"}if(g&&!d){e.tokenize=z}return"string"}function u(c,d){var e,f;while((f=c.next())!=null){if(e==="*"&&f==="/"){d.tokenize=z;break}e=f}return"comment"}function a(c){var d=null;if(c.scopes.length>0){d=c.scopes[c.scopes.length-1]}return d}return{startState:function(){return{tokenize:z,scopes:[]}},token:function(c,d){if(c.eatSpace()){return null}return d.tokenize(c,d)},indent:function(d,e){if(d.tokenize!==z&&d.tokenize!==null){return b.Pass}var c=0;if(e==="]"||e==="];"||e==="}"||e==="};"||e===");"){c=-1}return(d.scopes.length+c)*s.indentUnit},electricChars:"{}[]();",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}});b.defineMIME("text/x-yacas",{name:"yacas"})});