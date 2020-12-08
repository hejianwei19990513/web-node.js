function strHtml(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g,function(word){
        if(word == "&lt;") {
            return "<"
        }else if(word == "&gt;") {
            return ">"
        }else if(word == "&quot;") {
            return '"'
        }else if(word == "&amp;") {
            return "&"
        }
    })
}
module.exports = {
    strHtml
}
