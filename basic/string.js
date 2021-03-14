
/* 문제 1번  */ // 문제의 본질, 규칙성찾기
function reverse(str) {
    const strArr = [];

    // const lastIndex = str.length - 1;
    // for (let i = 0; i < str.length; i++) {
    //     const reversedIndex = lastIndex - i;
    //     const char = str[reversedIndex];
    //     strArr.push(char);
    // }

    const lastIndex = str.length - 1;
    for (let i = lastIndex; i >= 0; i--) {
        strArr.push(str[i]);
    }

    return strArr.join("");
}

reverse("abcd");
reverse("    abcd     ");


/* 문제 2번  */
// 주어진 숫자를 뒤집는 함수를 구현하세요
function reverseInt(num) {
    const reversed = reverse(`${+num}`);
    return (+reversed) * Math.sign(num);
}

reverseInt(0)  // 0
reverseInt(5)  // 5
reverseInt(15)  // 51
reverseInt(90)  // 9
reverseInt(-2359)  // -9532
reverseInt(-5)  // -5
reverseInt(-15)  // -51
reverseInt(-90)  // -9
reverseInt(-2359)  // -9532


/* 문제 3번  */
// 주어진 스트링이 대칭형 스트링인지 아닌지 판별하는 함수를 구현하세요
// function palindrome(str) {
//     return str === reverse(str);
// }


function palindrome(str) {
    // "01234" // 5 -> 반대편 인덱스와의 합 = 4
    // "012345"  // 6 -> 5

    const half = str / 2;
    for (let i = 0; i < half; i++) {
        const symmetricIndex = str.length - 1 - i;
        if (str[i] !== str[symmetricIndex]) {
            return false;
        }
    }

    return true;
}


palindrome("aba")  // true
palindrome(" aba")  // false
palindrome("aba ")  // false
palindrome("greetings")  // false
palindrome("1000000001")  // true
palindrome("Fish hsif")  // false
palindrome("pennep")  // true