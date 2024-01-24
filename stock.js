let stocks ={ 
    fruit:["strawberry","grape","banana","apple"], 
    holder:["cone","cup","stick"], 
    liquid:["water","ice"], 
    topping:["chocolate","peanut"] 
} 
//let is_shop_open = true; //asking if the shop open or not 
let is_shop_open = true; //if shop is closed 
//for promise we will continue with .then .catch .finally 
//for async await we will use async await, try and catch 
 
function time (time) 
{ 
    return new Promise((resolve,reject)=> 
    { 
        if (is_shop_open) //condition if true 
        { 
            setTimeout(resolve,time) 
        } 
        else 
        { 
            reject(console.log("shop is closed")); 
        } 
    }); 
} 
 
async function kitchen() 
{ 
    try  
    { 
        await time(2000) //call the time function using await 
        console.log(`${stocks.fruit[2]} is selected`); 
        await time (0) 
        console.log("start the production"); 
        await time (2000) 
        console.log("cut the fruits"); 
        await time (1000) 
        console.log(`${stocks.liquid[0]} ${stocks.liquid[1]} was added`); 
        await time (1000) 
        console.log("start the machine"); 
        await time (2000) 
        console.log(`Ice cream was placed on ${stocks.holder[0]} `); 
        await time (3000) 
        console.log(`${stocks.topping[0]} topping was added`); 
        await time (2000) 
        console.log("Ice cream ready to served"); 
    }  
    catch (error) 
    { 
        console.log("customer left",error); 
    } 
    finally 
    { 
        console.log("day ended, shop is closed"); 
    } 
} 
 
kitchen(); //call the kitchen to run the function