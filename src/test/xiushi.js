//装饰器  不能装饰函数
@say
class A {

}

function say(target) {
    //可扩展方法
    target.say = 'hello'
}
console.log(A.say); // hello