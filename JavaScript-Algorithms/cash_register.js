function add(x, y) { // 封装加法，防止出现小数精度丢失
    return (x * 1000 + y * 1000) / 1000
}
function mul(x, y) { // 封装减法，防止出现小数精度丢失
    return (x * 1000 - y * 1000) / 1000
}

function checkCashRegister(price, cash, cid) {
    let change = [ // 存放累加面额
        [ 'PENNY', 0 ],
        [ 'NICKEL', 0 ],
        [ 'DIME', 0 ],
        [ 'QUARTER', 0 ],
        [ 'ONE', 0 ],
        [ 'FIVE', 0 ],
        [ 'TEN', 0 ],
        [ 'TWENTY', 0 ],
        [ 'ONE HUNDRED', 0 ]
    ]
    let cidBefore = JSON.parse(JSON.stringify(cid)) // 备份cid
    let remain = mul(cash, price) // 需要支付的总额
    let pars = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100] // 面值从小到大
    let level = -1 // 初始化面值级别
    for (let par of pars) { // 确定面值级别
        if (remain < par) break
        level++
    }
    while (remain > 0) { // 当余额未被全部找零
        if (level === -1) { // 金额少于应找回的零钱数
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }
        if (mul(cid[level][1], pars[level]) < 0 || mul(remain, pars[level]) < 0) {
            // 当前面值余额不足 或 余额已经小于当前面值数
            level--
            continue
        }
        remain = mul(remain, pars[level]) // 在当前面值进行一次找零
        cid[level][1] = mul(cid[level][1], pars[level]) // 对收银机内现有金额做修改
        change[level][1] = add(change[level][1], pars[level]) // 添加已找零金额
        if (level === 0 && cid[level][1] === 0 && remain == 0) {
            // 收银机内总金额刚好等于需找零面额
            return {status: "CLOSED", change: cidBefore}
        }
    }
    change = change.filter(item => item[1] !== 0) // 提出change数组内金额为0的组
    change = change.reverse() // 反转数组
    return {status: "OPEN", change: change}
}

let res = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(res)