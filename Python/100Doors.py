# There are 100 doors in a row that are all initially closed. You make 100 
# passes by the doors. The first time through, visit every door and 'toggle' 
# the door (if the door is closed, open it; if it is open, close it). The second time,
#      only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time,
#       visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.


i = input('enter a number:')
i = int(i) 
doors = [False]* i;
for j in range(i):
    for k in range(j, i, j+1):
        doors[k] = not doors[k]
    print("Door %d:" % (j+1), 'open' if doors[j] else 'close')
print(doors)
