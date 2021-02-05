// #1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];
var result;
result = nums.splice(3, 2);
console.log("# 1");
console.log(nums);

// or
console.log("or");
var nums2 = [100, 200, 300, 400, 500, 600];
nums2.pop();
nums2.pop();
console.log(nums2);

// # 2 : 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
// 출력: [200, 100, 10000, 300]

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log("# 2");
console.log(arr);


// #3: 변수의 타입
// 다음 출력 값으로 올바른 것은?
var arr = [100, 200, 300];
console.log("# 3");
console.log(typeof (arr));
// object
// undefined , string, number -> primitive type


// #4: 변수의 타입 2
// 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
/*
    1)  입력: a = 1,   출력 : number
    2)  입력: a = 2.22,   출력 : boolean
    3)  입력: a = 'p',   출력 : string
    4)  입력: a = [1, 2, 3],   출력 : object
*/
console.log("# 4");
let a = 2.22;
console.log(typeof a);


// #5: for 문 계산
// 다음 코드의 출력 값으로 알맞은 것은?
console.log("# 5");
var c = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
    c += i;
}
console.log(c+b);

// #6 : False
// 다음 코드의 출력 값으로 알맞은 것은?
console.log("# 6");
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
//     앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

// 1)  NaN
var isFalse = NaN;
isFalse && console.log(isFalse,"not false");
// 2)  1
var isFalse2 = 1;
isFalse2 && console.log(isFalse2,"not false");
// 3)  ""
var isFalse3 = "";
isFalse3 && console.log(isFalse3,"not false");
// 4)  0
var isFalse4 = 0;
isFalse4 && console.log(isFalse4, "not false");
// 5)  undefined
var isFalse5 = undefined;
isFalse5 && console.log(isFalse5, "not false");


// #7 변수명
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
//
// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age
console.log("# 7");
console.log("3번 let 예약어 변수명으로 쓸 수 없음");
console.log("5번 숫자먼저 시작 못함");

// #8 : 객체의 키 이름 중복
// 자바스크립트 객체를 다음과 같이 만들었다.
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )
console.log("# 8");
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

for(i in d) {
    console.log(i)
    console.log(d[i]);
}
// #9


// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';
//
// var result = //빈칸을 채워주세요
//
//     console.log(result);
//
//
// 출력
// 2019/04/26 11:34:2
