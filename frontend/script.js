// (function foo(){
//             console.log("Hello World");
//             // return the object
//             document.getElementById("tag1").innerHTML="hello"
// })();

// function fooo(){
//             console.log("Hello World");
//             // return the object
//             document.getElementById("tag1").innerHTML="hello"
// }

// setTimeout(()=>{
//     console.log("Lavisha");
// },2000);

// fooo()
// setTimeout(fooo,2000);


// js is oo for managing dom
//declaration is hositing

var productList =[]

function loadProduct(productWithData){
    setTimeout(()=>{
    //     productList =[
    // {name:"Product1",price:"$12",description:"hello"},
    // {name:"Product1",price:"$12",description:"hello"}
    // ]
    productList=productListFromServer
    productWithData();
    },2000)
}

// function loadData(){
//     document.getElementById('tag2').innerHTML=`
//     <table>
//             <thead>
//                 <tr>
//                     <th>Product name</th>
//                     <th>price</th>
//                     <th>description</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <th>product1</th>
//                     <th>product1</th>
//                     <th>product1</th>
//                 </tr>
//                 <tr>
//                     <th>product1</th>
//                     <th>product1</th>
//                 </tr>
//             </tbody>
//         </table>
// }`
// }

// setTimeout(loadData,5000);


function renderProducts(){
    //fetch the data from server
    //connect the data into html and render it on UI

    function productWithData(){
        if(productList.length===0){
            document.getElementById("data").innerHTML="Loading data from server....."
            return;
        }
        document.getElementById('data').innerHTML=`
    <table border=true>
    <thead>
       <tr>
          <th>Hello</th>
          <th>Hello</th>
          <th>Hello</th>
          <th>Hello</th>
        </tr>
    </thead>
     <tbody>
        ${productList.map((product,index)=>{
            return `<tr>
            <td>${index+1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            `
        })}
    </tbody>
    </table> `
    }
    loadProduct(productWithData);
    productWithData();
}

setTimeout(renderProducts,2000);


// normal function and arrow function...two type only
//callback is a function passed as an argument to another function
//its not a type of function
//its a type of function call


