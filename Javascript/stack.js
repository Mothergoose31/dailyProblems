// Write a push method that pushes an element to the top of the stack, a 
// pop method that removes the element on the top of the stack, a peek method that looks
//  at the first element in the stack, an isEmpty method that checks if the stack is empty, 
//  and a clear method that removes all elements from the stack. Normally stacks don't have this,
//   but we've added a print helper method that console logs the collection.







function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
    this.peek = function(){
      return collection[collection.length -1]
    }
    this.isEmpty = function(){
      if (collection.length === 0){
        return true
      }
      if(collection.length !== 0){
        return false
      }
    }
    this.clear = function(){
      collection.length = 0
    
    }
    this.pop = function(){
      return collection.pop()
    }
    this.push = function(paramater){
      return collection.push(parameter)
    }
  
    // Only change code above this line
  }