# There are 100 doors in a row that are all initially closed. You make 100 
# passes by the doors. The first time through, visit every door and 'toggle' 
# the door (if the door is closed, open it; if it is open, close it). The second time,
#      only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time,
#       visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.




#  function getFinalOpenedDoors(numDoors) {
#   // Good luck!
#   var doors=[];
# for(var i=0;i< `${numDoors}`;i++)
#  doors[i]=false;             //create doors
# for(var i=1;i<= `${numDoors}`;i++)
#  for(var i2=i-1,g;i2<`${numDoors}`;i2+=i)
#   doors[i2]=!doors[i2];      //toggle doors
# for(var i=1;i<=`${numDoors}`;i++)      //read doors
# console.log("Door %d is %s",i,doors[i-1]?"open":"closed")
# console.log(doors)
# }
# getFinalOpenedDoors(5)



i = input('enter a number:')
i = int(i) 
doors = [False]* i;
for j in range(i):
    for k in range(j, i, j+1):
        doors[k] = not doors[k]
    print("Door %d:" % (j+1), 'open' if doors[j] else 'close')
print(doors)
