var productList=[]; //array

setInterval(function()
{
    var date=new Date();
    document.getElementById('todaydate').innerText=date.toLocaleTimeString();
}, 1000);

function addProduct(){
            var status=validate();
            //alert(status)
            if(status){
                document.getElementById('msg').innerHTML='<span style="color:green;">Product added</span>';
                showProducts();
            }
            else
            document.getElementById('msg').innerHTML='<span style="color:red;">Error!!</span>';
           
     
 }

 function validate(){
     var flag=false;
     var pid= document.getElementById('txtpid').value;
    var pname= document.getElementById('txtpname').value;
    var ptype= document.getElementById('ddltype').value;
    var price= document.getElementById('txtprice').value;
     if (pid != '' && pname!='' && ptype !='Select' &&price!='')
     flag=true;

     return flag;
         
 }


 function showProducts(){
    //json-{key:value}
    //()-methods
    //{}-object
    //[]-array
    //[{}]-array of objects

    var flag=false;
    
    var pid= document.getElementById('txtpid').value;
    var pname= document.getElementById('txtpname').value;
    var ptype= document.getElementById('ddltype').value;
    var price= document.getElementById('txtprice').value;
    productList.push({"Id":pid,"pname":pname,"type":ptype,"price":price})

    var tableHeader='<table><thead><tr><th>Id</th><th>PName</th><th>PType</th><th>Price</th></tr></thead>'
    var tableBody='';
    for(let i=0;i<productList.length;i++){

        tableBody=tableBody+'<tr><td>'+productList[i].Id+'</td><td>'+productList[i].pname+'</td><td>'+productList[i].type+'</td><td>'
+productList[i].price+'</td><td></tr>';  

    }

    document.getElementById('productdata').innerHTML=tableHeader+tableBody+'</table>';



 }

//  var fruits=["apple","banana","mango"]

//  function printFruits(fruitarray){
//     for(var i=0;i<fruitarray.length;i++){
//         console.log(fruitarray.[i]);
//     }
//  }

//  printFruits(fruits);