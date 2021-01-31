// 함수 표현식
const fuc2 = function () {

}

// 함수 선언식  호이스팅에 영향을 받음
function fuc() {

}


//message();
//message2();  Uncaught ReferenceError;


function message () {
    return console.log("함수선언식 호출 부분이야");
}


const message2 = function () {
    return console.log("함수표현식 호출 부분이야");
}

// 함수 표현식 쓰는 이유
// 클로져 , 콜백 사용 다른함수의 인자 값 넘기기


function  callBack(message) {
    return function hi () {
        console.log(message);
    }
}

const a = callBack("클로져");
//a();

printFunc(executeValue());


// 함수 객체 처음 생성될떄 [[scope]] 는 전역 객체의 [[scope]]  참조
function executeValue() {
    return 1;
}

function printFunc(func) {
    console.log(func);
}



function outerFunc() {
    var x = 1;
    return innerFunc = function() { console.log(x)}
}

var inner = outerFunc();
inner();



hi();
hello();
// 함수선언식
function hi() {
    return console.log("hi");
}

// 함수표현식
const hello = function () {
    return console.log("hello");

}
