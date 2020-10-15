document.addEventListener("DOMContentLoaded",function(){
    var nownumber = document.getElementById('total');
    var total = nownumber.value;
    var plus = document.getElementById('plus');
    plus.onclick = function(){
        total = Number(total) + Number(1) ;
        document.getElementById('total').value = total;
    }
    var subtract = document.getElementById('subtract');
    subtract.onclick = function(){
        if(total > 1){
            total = Number(total) - Number(1) ;
            document.getElementById('total').value = total;
        }
    }
}
,false)