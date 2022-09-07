if (orderTotal({
        item: [{
                name: "Dragon food",
                price: 8
            },
            {
                name: "Dragon cage(small)",
                price: 800
            }
        ]
    }) !== 808) {
    throw new Error('Check fail: Happy path')
}

function orderTotal(order) {
    return order.item.reduce((prev, cur) => cur.price + prev, 0)
}

//---------------------------------------


function Person(name, age) {
    this.name = name;
    this.age = age;
}

const Joe = new Person('joe', 32)

Person.prototype.sayName = function () {
    console.log('congrats ' + this.name)
}

Joe.sayName()
const Kevin = new Person('kevin', 31);
Kevin.sayName()


function Woman(age, name) {
    this.age = age,
        this.name = name
}

