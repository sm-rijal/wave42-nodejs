function shop(status) {
    return new Promise((resolve, reject) => {
        if (status == "open") {
            resolve("shop is open, continue the order");
        } else {
            reject("shop is closed");
        }
    });
}
async function order() {
    try {
        const shopStatus = await shop("open");
        console.log(shopStatus);
        // Use asynchronous setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("prepare for order");
        // Use asynchronous setTimeout
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("order done");
    } catch (err) {
        console.log("please come back tomorrow", err);
    } finally {
        console.log("Thank you");
    }
}
order();