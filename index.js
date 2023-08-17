var product_total_amt=document.getElementById("product_total_amt")
var total_cart_amt=document.getElementById("total_cart_amt")
var shipping_charge=document.getElementById("shipping_charge")
var discountCode=document.getElementById("discount_code1")


function decreaseNumber(incdec,itemPrice)
{
    var itemVal=document.getElementById(incdec)
    var itemPrice=document.getElementById(itemPrice)
    if(itemVal.value<=0)
    {
        itemVal.value=0;
        alert("Negative Quantity not allowed")
    }
    else
    {
        itemVal.value=parseInt(itemVal.value)-1
        itemVal.style.background="#fff";
        itemPrice.innerHTML=parseInt(itemPrice.innerHTML)-15;
        product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)-15;
        total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML)
     }
}

function increaseNumber(incdec,itemPrice)
{
    var itemVal=document.getElementById(incdec)
    var itemPrice=document.getElementById(itemPrice)
    if(itemVal.value>=5)
    {
        itemVal.value=5;
        alert("Max 5 allowed")
        itemVal.style.background="red";
        itemVal.style.color="#fff";
    }
    else
    {
        itemVal.value=parseInt(itemVal.value)+1;
        itemPrice.innerHTML=parseInt(itemPrice.innerHTML)+15;
        product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)+15;
        total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML)
    }
}

function discount_code()
{
    let totalAmtCurr=parseInt(total_cart_amt.innerHTML)
    let errorTrw=document.getElementById('error_trw')

    if(discountCode==='dev')
    {
        let newTotalAmt=totalAmtCurr-15;
        total_cart_amt.innerHTML=newTotalAmt;
        errorTrw.innerHTML="Valid code"
    }
    else{
        errorTrw.innerHTML="Try Again!!"
    }

}