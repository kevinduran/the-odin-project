if(orderTotal({
    item:[
        {name:"Dragon food",price:8},
        {name:"Dragon cage(small)", price:800}
    ]
}) !== 808) {
    throw new Error('Check fail: Happy path')
}

function orderTotal(order){
    return order.item.reduce((prev, cur)=> cur.price+prev,0)
}