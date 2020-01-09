def greatestCommonDivisor(x, y):
    greatestCommonDivisor = 1
    
    if x % y == 0:
        return y
    
    for k in range(int(y / 2), 0, -1):
        if x % k == 0 and y % k == 0:
            greatestCommonDivisor = k
            break  
    return greatestCommonDivisor

print(greatestCommonDivisor(12, 17))
print(greatestCommonDivisor(4, 6))