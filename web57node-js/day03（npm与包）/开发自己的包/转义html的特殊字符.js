const escape = require("./itheima-tools")
var str = '<h1>"我是h1标签"&nbsp;</h1>'
console.log(escape.htmlStr(str));// 输出为  &lt;h1&gt;&quot;我是h1标签&quot;&amp;nbsp&lt;/h1&gt;