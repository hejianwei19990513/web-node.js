// 第一种情况，两个都通过【.】添加的属性或方法，相叠加
module.exports.name = "jjy"
exports.age = 26 
//输出为{name:"jjy",age=26}



// 第二种情况，module.exports通过对象，exports通过【.】或者对象，以module.exports={内容}为准
module.exports = {
    name:"jjy"
}
exports.age = 26 
//输出为{name:"jjy"}



// 第三种情况，module.exports通过【.】，exports通过对象.以module.exports添加的属性为准为准
exports = {
    age:26
}
module.exports.name = "jjy"
// 输出为{name:"jjy"}