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

//---------------------------------------

function Person(name,age){
    this.name = name
    this.age = age
    this.sayName = function(){
        alert(name);
    }
}

const Kevin = new Person('kevin',30)

Person.prototype.sayLastName = function(){
    alert('duran')
}

