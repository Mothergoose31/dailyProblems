from matplotlib import pyplot as plt
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
# get the data from yahoo finance
# <span class="Trsdu(0.3s) Fw(b) Fz(36px) Mb(-4px) D(ib)" data-reactid="52">414.70</span>

html_url = 'https://finance.yahoo.com/quote/TSLA?p=TSLA'

fetch = uReq(html_url)
data_html= fetch.read()
fetch.close()
soup_data= soup(data_html, "html.parser")
html_div = soup_data.find("div",{"class":"My(6px) Pos(r) smartphone_Mt(6px)"})

data= html_div.find('span').text

print("Tesla Stock is at : "+ data)

