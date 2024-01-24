function shop(status)
{
    return new Promise ((resolve,reject)=>
    {
        if (status=="open")
        {resolve(console.log("shop is open,continue the order"));}
        else
        {reject(console.log("shop is closed"));}
    })
}


async function order ()
{
    try
    {
        await shop("open"); //this function is not declare yet and it will send error message
        //but will still running to the next step : catch
        await setTimeout(() => console.log("prepare for order"), 1000)
        await setTimeout(() => console.log("order done"),2000)
    }
    catch(err)
    {
        console.log("please come back tomorrow",err);
    }
    finally
    {
        console.log("Thank you");
    }
}
order();