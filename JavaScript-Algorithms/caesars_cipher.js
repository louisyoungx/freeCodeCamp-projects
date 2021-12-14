function rot13(str) {
    str = str.toUpperCase() // 字母全转为大写
    let strList = str.split("") // 分割成字符数组
    let result = '' // 初始化返回值
    for (let [letter, index] of strList) { // 遍历字符数组
        code = letter.charCodeAt() // 取出该字符的ascii码
        if (code < 65 || code > 90) { // 如果不是字母则跳过
            result += letter
            continue
        }
        code -= 13 // 将ascii码减去13位
        if (code < 65) code += 26 // 若越界则加26补齐
        let res = String.fromCharCode(code) // 取出该ascii码对应字母
        result += res // 添加进返回值
    }
    return result;
}

rot13("SERR PBQR PNZC")
