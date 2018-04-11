var maxProfit = function(prices) {
    let len = prices.length;
    if(len<=1) return 0;
    let result = calcMax(prices,0);
};

var calcMax = function(prices,count){
    let len = prices.length,result = count;
    if(len<=1) return 0;
    let minVal = prices[0],maxVal = prices[0]
    prices.forEach((item,index) => {
        if(item<minVal){
            minVal = item;
        };
        if(item>minVal){
            maxVal = item;
        };
    });

}