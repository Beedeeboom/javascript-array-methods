function howBigIsThisArray(array) {
    //given 1 arg, how many elements is in the array
    // eg ["hello", "world"] => 2
    return array.length
}

function arrayGoesBackwards(array) {
    // given 1 arg, change the array to be back to front
    // eg ["brave", "new", "world"] => ["world", "new", "brave"]
    return array.reverse()
}

function findFirstMatchingElement(array, callback) {
    // given 2 args, find the first element in the array that matches the callback's requirements
    // eg [5, 10, 15], function(element) {return element > 7} => 10
    return array.find(callback)
}

function keepOnlyPassingElements(array, callback)  {
    //given 2 args, keep only the elements in array that pass the callback's requirements
    // eg [5, 10, 15], function(element) {return element > 7} => [10, 15]
    return array.filter(callback)
}

function findMyIndex(array, element) {
    // given 2 args, find the index of the element in the array
    // eg ['h', 'e', 'l', 'l', 'o'], l => e
    return array.indexOf(element)
}

function isItInTheArray(array, item) {
    // given 2 args, return true or false whether that item is in the array
    // eg ['h', 'e', 'l', 'l', 'o'], 'l' => true
    // eg ['h', 'e', 'l', 'l', 'o'], 'z' => false
    return array.includes(item)
}

function convertToString(array) {
    // given 1 arg, return the array as a single string
    // eg ['h', 'e', 'l', 'l', 'o'] => "h,e,l,l,o"
    return array.join() //returns => "h,e,l,l,o"
    //array.join('') => returns "hello"
}

function replaceEveryElementInArray(array, item) {
    // given 2 args, replace every element in the array with the given item
    // eg [1,2,3,4], "foo" => ["foo", "foo", "foo", "foo"]
    return array.fill(item, 0) //fill with item value from index 0
}

function convertToStringWithDelimiter(array, delimiter) {
    // given 2 args, return the array as a single string separated by the delimiter
    // eg ['h', 'e', 'l', 'l', 'o'], " " => "h e l l o"
    // eg ['h', 'e', 'l', 'l', 'o'] => "h,e,l,l,o"
    return array.join(delimiter)
}

function whereWasILast(array, element) {
    // given 2 args, find the index of the last occurance of the element
    // eg ['h', 'e', 'l', 'l', 'o'], "l" => 3
    // eg ['m', 'i', 's', 's', 'i', 's', 's', 'i', 'p', 'i'], "s" => 6
    return array.lastIndexOf(element)
} 

function mergeArraysTogether(array1, array2) {
    // given 2 args, merge the 2 arrays into a sinlge one
    // eg ["a", 1], ["b", 2] => ["a", 1, "b", 2]
    return array1.concat(array2)
}

function fixNestedArrays(array) {
    // given 1 arg, turn this nested array into a single level array
    // eg ["a", "b", ["c", "d"]] => ["a", "b", "c", "d"]
    return array.flat()
}

function testEveryElementInArray(array, callback) {
    // given 2 args, return true or false if EVERY element in the array 
    // passes the requirements of the callback
    // eg [1,2,3,4], function(element) { return element > 0 } => true
    // eg [1, "a", 2, 3], function(element) { return typeof element == 'number' } => false
    return array.every(callback)
}

function sortAnArray(array) {
    //given 1 arg, sort this array into ascending order
    // eg ["a", "c", "e", "b"] => [ 'a', 'b', 'c', 'e' ]
    return array.sort()
}

function sortAnotherArray(array) {
    //given 1 arg, order this array in descending order
    // eg ["a", "c", "e", "b"] => [ 'e', 'c', 'b', 'a' ] 
    return array.sort().reverse()
}