/**
 * Created by Administrator on 2017/10/27.
 */
function getStock(){
    return {
        code:"IBM",
        price: {
            price1:200,
            price2:400
        }
    }
}
var {code : codex ,price:{price2}} = getStock();

console.log(codex);
console.log(price2);