// Uncomfortable JS
// IIFE, Module Pattern and Dependency Injection

// 1. Kiran Store with no direct access

const kiranaStore = (function() {
    let itemCount = 0
    const godown = []

    return {
        add(name) {
            itemCount++
            godown.push(name)
            return `Sharma ji stocked item: ${name}`
        },
        count() {
            return itemCount
        },
        list() {
            // It return the copy
            return godown.slice()
        }
    }
})();

// To Not directly access store by users.

// console.log(kiranaStore.add("Tea 10 packs"));
// console.log(kiranaStore.add("Ginger 10kgs"));
// console.log("Count:", kiranaStore.count());
// console.log("List:", kiranaStore.list());

// console.log("Direct godown ?:", typeof kiranaStore.godown);


// 2. Account Book with no direct access

const AccountBook = (function (){
    const records = []
    const accessLog = []

    function logAccess(action) {
        accessLog.push(`[${new Date().toISOString().slice(0, 10)}] - ${action}`)
    }

    function store(doc) {
        logAccess(`Stored: ${doc}`)
        records.push(doc)  
    }

    function retrieve(index) {
        logAccess(`Retrieve index ${index}`)
        return records[index] || "Not found"
    }

    function getRecordCount() {
        return records.length;
    }

    function getAccessLog() {
        return accessLog.slice();
    }

    return {
        store,
        retrieve,
        count: getRecordCount,
        log: getAccessLog
    }
})();

AccountBook.store("Sugar 2kg");
AccountBook.store("Rice 5kg")

console.log("Sharma ji retrieve:", AccountBook.retrieve(0));
console.log("Count:", AccountBook.count());
console.log("Log access:", AccountBook.log().length);

// No direct access
console.log("Show me the type of log access:", typeof AccountBook.logAccess); 


// 3. Module Pattern - Simulation

// Namespace object

const ShareefMart = {}

ShareefMart.Inventory = (function() {
    function unitPrice(totalPrice, quantity) {
        return totalPrice / quantity;
    }

    function totalWeight(weightPerItem, quantity) {
        return weightPerItem * quantity;
    }

    // exports
    return {unitPrice, totalWeight}
})();


// 4. Dependancy Injection - passing object in IIFE 2nd parameter

ShareefMart.BillingCalculator = (function (Inv) {
    function bulkDiscount(pricePerKg, Kgs) {
        const totalWeight = Inv.totalWeight(pricePerKg, Kgs)
        return `${(totalWeight * 0.95).toFixed(1)} after 5% bulk discount`
    }

    return {bulkDiscount}
})(ShareefMart.Inventory);

console.log(ShareefMart.BillingCalculator.bulkDiscount(60, 10));

// Printing Keys & APIs (functions)

console.log("Store Module: ", Object.keys(ShareefMart));
console.log("Inventory API", Object.keys(ShareefMart.Inventory));