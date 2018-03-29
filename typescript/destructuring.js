/**
 * Created by Administrator on 2017/10/27.
 * 析构函数
 */



function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 200,
            price2: 400
        }
    };
}
var _a = getStock(), codex = _a.code, price2 = _a.price.price2;
console.log(codex);
console.log(price2);
//# sourceMappingURL=destructuring.js.map