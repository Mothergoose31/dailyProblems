from matplotlib import pyplot as plt

years = [1,14,200,350,400,500,600,700,800,900,1000,1100,1200,1250,1300,1350,1400,1500,1600,1650,1700,1750,1800,1850,1875,1900,1920,1925,1930,1940,1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2014]
gdp = [18.50,17.50,18.54,17.93,18.44,19.92,20.86,23.44,25.23,31.68,35.31,39.60,37.44,35.58,32.09,40.50,44.92,58.67,77.01,81.74,99.80,128.51,175.24,359.90,568.08,1102.96,1733.67,2102.88,2253.81,3001.36,4081.81,5430.44,6855.25,9126.98,12137.94,15149.42,18818.44,22481.11,27539.57,33644.33,41016.69,43070,62220,77868]

# creating a line chart  years on x axis, gdp on y axis
plt.plot(years,gdp, color ='green',marker='o',linestyle='solid')

plt.title('global gdp by year')

plt.ylabel('Billions of $')
plt.xlabel('Year')
plt.show()