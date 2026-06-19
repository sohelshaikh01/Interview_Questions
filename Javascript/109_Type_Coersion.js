// Type Coersion
// Automatic or Implicit Coversion of value from one data type to another data type

// 1. Basic Conversion

const value1 = "5";
const value2 = 10;

// convert string into number
let sum = Number(value1) + value2;

console.log(sum);

// 2. Coersion of Values

// In 90% it's better to avoid implicit type coersion.
console.log(null / new Date());

// if(value) {}
// here values coerced to boolean

// loose equality operator
// == also used for type coercion

// 3. Three types of conversion

// to string
// to boolean
// to number

console.log(String(123)); // explicit
console.log(123 + "5"); // implicit

console.log(Boolean(2)); // explicit
if(2) {}        // implicit by context
!!2
2 || "hello" 


// Symbols, Empty object & array are also true
Boolean(Symbol());
Boolean({});
Boolean([]);
!!Symbol()

// Implicit for Number triggers in various situations
Number(123); // Explicit
+'123'
123 != '456'
4 > 5
5 / null
true | 0

// Converting Symbol to Number not possible
Number(Symbol(''))
+Symbol('')

// 4. !! and ?? Coelescing

// !! Operator to convert non-boolean into its boolean
// First: ! converts the value to its opposite boolean value
// Second: ! Negates the result. So !false becomes true

// ?? Nullish Coalescing Operator
// To provide "fallback" value only when a specific values is null or undefined

// Return value if value is null or undefined

// Return fallback only if value is exactly null or undefined
// Ex: Displaying a username or a fallback
`
return {
    <div>
        <h1>Welcome, {userName ?? "Guest"}</h1>
    </div>
}
`