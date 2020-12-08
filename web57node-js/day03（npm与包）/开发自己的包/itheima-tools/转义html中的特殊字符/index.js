function htmlStr(str) {
    return str.replace(/<|>|"|&/g,function(word){
        if(word === "<") {
            return "&lt;"
        }else if(word === ">") {
            return "&gt;"
        }else if(word === '"') {
            return "&quot;"
        }else if(word === "&") {
            return "&amp;"
        }
    })
}
module.exports = {
    htmlStr
}