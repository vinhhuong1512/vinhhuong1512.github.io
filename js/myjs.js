document.addEventListener("DOMContentLoaded",function(){
    var nownumber = document.getElementById('total');
    var price = document.getElementById('price');
    var price = price.getAttribute('data-price');
    var total = nownumber.value;
    var plus = document.getElementById('plus');
    plus.onclick = function(){
        total = Number(total) + Number(1) ;
        newprice = total*price;
        console.log(newprice);
        document.getElementById('total').value = total;
        document.getElementById('price').innerHTML = "$"+newprice+".00";
    }
    
    var subtract = document.getElementById('subtract');
    subtract.onclick = function(){
        if(total > 1){
            total = Number(total) - Number(1) ;
            newprice = total*price;
            console.log(newprice);
            document.getElementById('total').value = total;
            document.getElementById('price').innerHTML = "$"+newprice+".00";
        }
    }
}
,false)