function telephoneCheck(str) {
    let reg_no_brackets = /^(1\s?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/gm
    let reg_brackets = /^(1\s?)?\(\d{3}\)[-\s]?\d{3}[-\s]?\d{4}$/gm
    if (reg_no_brackets.test(str) || reg_brackets.test(str)) {
        return true
    } else {
        return false
    }
}

telephoneCheck("1 555)555-5555")
telephoneCheck("555-555-5555")
telephoneCheck("1 555 555 5555")
telephoneCheck("(555)555-5555 ")
telephoneCheck("5555555555 ")
telephoneCheck("(555)5(55?)-5555")