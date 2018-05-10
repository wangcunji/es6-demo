var maxProfit = function(prices) {
    let len = prices.length,count = 0;
    if(len<=1) return 0;
    let num = prices[0],temp;
    for(var i=0;i<len;i++){
        if(prices[i]>num){
            temp = prices[i] - num;
            count+=temp;
        }
        num = prices[i];
    }
    return count;
};


var prices = [1,2,3,4,5];




console.log(maxProfit([6,1,3,2,4,7]))



