// A company decides that whenever Xmas falls on a Sunday they will give their
//  workers all extra paid holidays so that, together with any public holidays,
//   workers will not have to work the following week (between the 25th of December 
//     and the first of January).

// Write a function that takes a start year and an end year and return an array of all 
// the years where the 25th of December will be a Sunday.



function findXmasSunday(start, end) {
    // Good luck!
    // given the start year and end year
    // iterate though each year and check if Chistmas falls on a sunday
    sunDates = []
    while(start <= end ){
        start++
        var A = new Date(`December 25, ${start} 05:35:32`); 
    // day of the week from above Date Objecct
    // being extracted using getDay()
    //  0 === Sunday
        var B = A.getDay(); 
    // console.log(B)
        if(B === 0){
            sunDates.push(start)
        }
        console.log(start)
    }
    return sunDates
    
}
findXmasSunday(2008,2121)