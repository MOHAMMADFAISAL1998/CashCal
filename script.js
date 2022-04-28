function TotalValue(){
    let value2000 = document.getElementById("txt2000").value;
    let value500 = document.getElementById("txt500").value;
    let value200 = document.getElementById("txt200").value;
    let value100 = document.getElementById("txt100").value;
    let value50 = document.getElementById("txt50").value;
    let value10 = document.getElementById("txt10").value;
    
    if(value2000 != null){
        let amt2000 = parseInt(value2000);
        document.getElementById("txt2000Total").value=amt2000*2000;
    }
    if(value500 != null){
        let amt500 = parseInt(value500);
        document.getElementById("txt500Total").value=amt500*500;
    }
    if(value200 != null){
        let amt200 = parseInt(value200);
        document.getElementById("txt200Total").value=amt200*200;
    }
    if(value100 != null){
        let amt100 = parseInt(value100);
        document.getElementById("txt100Total").value=amt100*100;
    }
    if(value50 != null){
        let amt50 = parseInt(value50);
        document.getElementById("txt50Total").value=amt50*50;
    }
    if(value10 != null){
        let amt10 = parseInt(value10);
        document.getElementById("txt10Total").value=amt10*10;
    }
}

function GrandTotal(){
    let total2000 = parseInt(document.getElementById("txt2000Total").value);
    let total500 = parseInt(document.getElementById("txt500Total").value);
    let total200 = parseInt(document.getElementById("txt200Total").value);
    let total100 = parseInt(document.getElementById("txt100Total").value);
    let total50 = parseInt(document.getElementById("txt50Total").value);
    let total10 = parseInt(document.getElementById("txt10Total").value);

    let gt=total2000+total500+total200+total100+total50+total10;
    document.getElementById("GrandTotal").value=gt;
}
