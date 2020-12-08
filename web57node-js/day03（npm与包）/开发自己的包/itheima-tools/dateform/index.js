function dateFormat(){
    var data = new Date()
    var y = data.getFullYear().toString().padStart(2,'0')
    var m = (data.getMonth()+1).toString().padStart(2,'0')
    var d = data.getDate().toString().padStart(2,'0')
    var h = data.getHours().toString().padStart(2,'0')
    var min= data.getMinutes().toString().padStart(2,'0')
    var s = data.getSeconds().toString().padStart(2,'0')
    return `${y}-${m}-${d} ${h}:${min}:${s}`
}
module.exports = {
    dateFormat
}