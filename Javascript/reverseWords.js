function reverseWord (string) {
    var answer = new Array
    console.log("hello")
     var revers =  string.split(" ")
     console.log(revers.length)
    while (revers.length !== 0) {
      answer.push(revers[revers.length-1])
      
    }
    console.log(answer)
  }
  reverseWord("this is the end")