# Javascript Literals
### Literals are constant values that can be assigned to a variable that are called constants or literals.
### Javascript literals are syntatic representations of different types of data like Integer,Number,Boolean,Array, etc that represents particular or specific values in the program.


## Types of Literals

- [Integer Literals](#integer)
- [Floating Number Literals](#float)
- [String Literals](#string)
- [Array Literals](#array)
- [Boolean Literals](#boolean)
- [Object Literals](#object)


## Integer Literals<a name = "types"></a>
### Integer Literals are numbers, must be minimum 1 digit and it should not be blank and comma is not allowed within an integer.It supports 3 different bases base 10 (decimal), base 8(octal), and base 16(hexadecimal).
    eg: (100.25,073,0X8b)

## Floating Literals<a name = "float"></a>
### Floating Literals are decimal numbers or fraction numbers or even it can have exponent part as well.
    eg: (100.25,-78.34,56e4)

## String Literals<a name = "string"></a>
### String literals are a sequence of zero or more characters. It is enclosed either with a single or double quotes and we use + operator to concatinate two or more strings.

    \b : Backspace
    \n : New Line
    \t : Tab
    \f : Form Feed
    \r : Carriage Return
    \\ : Backslash Character (\)
    \' : Single Quote
    \" : Double Quote

## Array Literals<a name = "array"></a>
### Array Literals are the list of expressions or other constant values that forms the array elements. It contains list of elements within a square brackets []. When array is empty length will be 0. Array index starts with 0.
    eg: const colors = ['Red','Orange','Yellow'];
    console.log(colors[0]);         // Red
    console.log(colors[2]);         // Yellow
    console.log(colors.length);     // 3
## Boolean Literals<a name = "boolean"></a>
### Boolean Literals have only two literal values true or false.
    Boolean(12)         // true
    Boolean(-12)        // true
    Boolean('hello')    // true
    Boolean(2>3)        // false
    Boolean(3>2)        // true
    Boolean('true')     // true
    Boolean('false')    // true
    Boolean(0)          // false
    Boolean(1)          // true

## Object Literals<a name = "object"></a>
### Object literals are the collection zero or more key value pairs of a comma-seperated list that are enclosed by a pair of curly braces {}.
    eg: 
        const student = {
            firstName:"John", 
            lastName:"D",
            "rno" : 23,
            "marks" : 60 
        };
        console.log(student.firstName);     //John
        console.log(student.marks);         //60

