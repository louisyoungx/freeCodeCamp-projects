function palindrome(str) {
    str = str.toLowerCase() // 字母全小写
    str = str.replace(/[^a-z\d]/gm, "") // 替换非字母数字字符
    let strList = str.split("") // 分割成字符数组
    let left, right // 左右指针
    if (strList.length % 2 === 1) {
        // 长度为奇数
        left = (strList.length - 1) / 2
        right = left
    } else {
        // 长度为偶数
        right = strList.length / 2
        left = right - 1
    }
    while (left >= 0) { // 左指针未越界
        if (strList[left] !== strList[right]) {
            // 左右指针取值不等则不是回文串
            return false
        }
        left--
        right++
    }
    return true
}


palindrome('asvsa')