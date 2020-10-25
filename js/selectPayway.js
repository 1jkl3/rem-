// 策略模式
const selectPayway = (function () {
    // 支付方式
    const payways = {
        alipay: "支付宝支付",
        wechat: "微信支付"
    }
    // 英文
    const matePay_EN = function (type) {
        if (!payways[type]) return false;
        return type;
    }
    // 中文
    const matePay_CN = function (type) {
        if (!payways[type]) return false;
        return payways[type];
    }
    const language = {
        zh_CN: matePay_CN,
        zh_EN: matePay_EN
    }
    // 选择支付方式
    const selectPayway = function (type, lan) {
        if (!language[lan]) return false;
        return language[lan](type);
    }
    selectPayway.addPays = function (types, fns) {
        if (types instanceof Object && fns instanceof Object) {
            Object.assign(payways, types);
            Object.assign(language, fns);
        } else {
            payways[types] = types;
        }
    }
    selectPayway.getPayways = payways;
    return selectPayway;
})();
const pays = {
    baidu: "百度支付"
}
const baiFun = {
    zh_BA: (type) => {
        if (!selectPayway.getPayways[type]) return false;
        return selectPayway.getPayways[type];
    }
}
// console.log(baiFun.zh_BA instanceof Function);
// const res = selectPayway("baidu", "zh_BA");
// console.log(res);

export default selectPayway;