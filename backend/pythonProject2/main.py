from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
def runSel():
    options = Options()
    options.add_argument('headless')
    driver = webdriver.Chrome(service=ChromeService(executable_path=ChromeDriverManager().install()))
    return driver


    driver.implicitly_wait(5)
def runScraping(code):
    driver=runSel()
    driver.get("https://www.investing.com/pro/DSE:"+code+"/financials/ni")

    driver.implicitly_wait(5)

    button2 = driver.find_element(By.XPATH, "/html/body/div[5]/div/div/button")
    button2.click()
    button3 = driver.find_element(By.XPATH, "//*[@id='root']/div/div[4]/div[3]/div[1]/div/div[1]/button[4]")
    button3.click()
    button4 = driver.find_element(By.XPATH, "/html/body/div[3]/div/div[4]/div[3]/div[1]/div/div[1]/div[5]/div[3]")
    button4.click()

    net_profit = []
    for i in range(3, 13):
        element = driver.find_elements(By.XPATH,
                                   f"/html/body/div[3]/div/div[4]/div[3]/div[2]/div[1]/div/div[1]/div[3]/div[16]/div/div[{i}]/div")
        for gg in element:
            net_profit.append(float(gg.text.replace(",", "").replace("-", "0")))

    button5 = driver.find_element(By.XPATH, "/html/body/div[3]/div/div[4]/div[3]/div[1]/div/div[1]/button[1]")
    button5.click()
    button6 = driver.find_element(By.XPATH, "/html/body/div[3]/div/div[4]/div[3]/div[1]/div/div[1]/div[2]/div[2]")
    button6.click()
    equity = []
    # time.sleep(3)
    for i in range(3, 13):
        element = driver.find_elements(By.XPATH,
                                   f"/html/body/div[3]/div/div[4]/div[3]/div[2]/div[1]/div/div[1]/div[3]/div[40]/div/div[{i}]/div")
        for gg in element:
            equity.append(float(gg.text.replace(",", "").replace("%", "").replace("NM", "0").replace("-", "0")))

    debt = []
    for i in range(3, 13):
        element = driver.find_elements(By.XPATH,
                                   f"/html/body/div[3]/div/div[4]/div[3]/div[2]/div[1]/div/div[1]/div[3]/div[45]/div/div[{i}]/div")
        for gg in element:
            debt.append(float(gg.text.replace(",", "").replace("%", "").replace("NM", "0").replace("-", "0")))
    roic = []
    for i in range(len(net_profit)):
        if debt[i] + equity[i]!=0:
            roic.append((net_profit[i] / (debt[i] + equity[i])) * 100)
        else:
            roic.append(0)

    print("roic: ")
    print(roic)
    button5.click()
    button7 = driver.find_element(By.XPATH, "/html/body/div[3]/div/div[4]/div[3]/div[1]/div/div[1]/div[2]/div[1]")
    button7.click()
    # time.sleep(3)
    eps = []
    for i in range(3, 13):
        element = driver.find_elements(By.XPATH,
                                   f"/html/body/div[3]/div/div[4]/div[3]/div[2]/div[1]/div/div[1]/div[3]/div[27]/div/div[{i}]/div")
        for gg in element:
            eps.append(float(gg.text.replace(",", "").replace("%", "").replace("NM", "0").replace("-", "0")))
    sales = []
    for i in range(3, 13):
        element = driver.find_elements(By.XPATH,
                                   f"/html/body/div[3]/div/div[4]/div[3]/div[2]/div[1]/div/div[1]/div[3]/div[2]/div/div[{i}]/div")
        for gg in element:
            sales.append(float(gg.text.replace(",", "").replace("%", "").replace("NM", "0").replace("-", "0")))
    print("equity: ")
    print(equity)
    print("eps: ")
    print(eps)
    print("sales: ")
    print(sales)
    button5.click()
    button8 = driver.find_element(By.XPATH, "/html/body/div[3]/div/div[4]/div[3]/div[1]/div/div[1]/div[2]/div[3]")
    button8.click()
    # time.sleep(3)
    free_cash_flow = []
    for i in range(3, 13):
        element = driver.find_elements(By.XPATH,
                                   f"/html/body/div[3]/div/div[4]/div[3]/div[2]/div[1]/div/div[1]/div[3]/div[29]/div/div[{i}]/div")
        for gg in element:
            free_cash_flow.append(float(gg.text.replace(",", "").replace("%", "").replace("NM", "0").replace("-", "0")))
    print("free cash flow: ")
    print(free_cash_flow)

    operating_cash = []
    for i in range(3, 13):
        element = driver.find_elements(By.XPATH,
                                   f"/html/body/div[3]/div/div[4]/div[3]/div[2]/div[1]/div/div[1]/div[3]/div[9]/div/div[{i}]/div")
        for gg in element:
            operating_cash.append(float(gg.text.replace(",", "").replace("%", "").replace("NM", "0").replace("-", "0")))
    print("operating cash: ")
    print(operating_cash)
    driver.quit()
    all_info={
            'roic':
                str(roic)
            ,
            'equity':
                str(equity)
            ,
            'sales':
                str(sales)
            ,
            'free_cash_flow':
                str(free_cash_flow)
            ,
            'eps':
                str(eps)
            ,
            'operating_cash_flow':
                str(operating_cash)

        }
    return all_info

# restapi
def wait():
    time.sleep(1)

def peRatio(code):
    driver = runSel()

    driver.get("https://www.investing.com/pro/DSE:"+code+"/charts/?showExamples=1")
    button = driver.find_element(By.XPATH, "/html/body/div[7]/div/div/button")
    button.click()
    wait()
    button2 = driver.find_element(By.XPATH, "/html/body/div[3]/div/div[4]/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div/div/ul/li[16]/div/span[2]/button")
    button2.click()
    wait()
    button3 = driver.find_element(By.XPATH, "/html/body/div[3]/div/div[4]/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/button")
    button3.click()
    wait()
    button4 = driver.find_element(By.XPATH,
                                  "/html/body/div[3]/div/div[4]/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]")
    button4.click()
    wait()
    button5 = driver.find_element(By.XPATH,
                                  "/html/body/div[3]/div/div[4]/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[6]")
    button5.click()
    wait()
    pe=[]
    for i in range(1,11):
        element=driver.find_elements(By.XPATH,"/html/body/div[3]/div/div[4]/div[2]/div[2]/div[2]/div[2]/div[4]/div/div[3]/div/div/div[1]/div[3]/div["+str(i)+"]/div/div[3]/a")
        for gg in element:
            pe.append(float(gg.text.replace("x", "").replace("%", "").replace("NM", "0").replace("-", "0").replace(" ", "").replace("NA", "0")))
    print("P/E ratio",end=":")
    print(pe)
    sum=0
    count=0
    for i in pe:
        if i!=0:
            sum+=i
            count+=1
    avg=sum/count
    driver.quit()
    return avg


def forecast(code):
    driver = runSel()

    driver.get("https://www.investing.com/pro/DSE:"+code+"/explorer/eps_proj_growth/")

    button = driver.find_element(By.XPATH, "/html/body/div[7]/div/div/button")
    button.click()
    wait()


    element=driver.find_elements(By.XPATH,"/html/body/div[3]/div/div[4]/div[3]/div[2]/div[1]/div[2]/div[2]/div[2]/div/table/tbody/tr[7]/td[3]/a")
    growth_rate=0

    for gg in element:
        growth_rate=float(gg.text.replace("x", "").replace("%", "").replace("NM", "0").replace("-", "0").replace(" ", "").replace("NA", "0"))
    driver.quit()
    return growth_rate

app = Flask(__name__)
CORS(app)
@app.route('/',methods=['POST'])
def handlePost():
    # content_type = request.headers.get('Content-Type')
    # print(content_type)
    # if (content_type == 'application/json'):
    #     json = request.json
    #     return json
    # else:
    #     return 'Content-Type not supported!'
    tradecode=request.get_json(force=True)
    # tradecode=request.get_data()
    print(tradecode["tradecode"].upper())
    return runScraping(tradecode["tradecode"].upper())
@app.route('/mos',methods=['POST'])
def handlePostReq():
    # content_type = request.headers.get('Content-Type')
    # print(content_type)
    # if (content_type == 'application/json'):
    #     json = request.json
    #     return json
    # else:
    #     return 'Content-Type not supported!'
    tradecode=request.get_json(force=True)
    # tradecode=request.get_data()
    print(tradecode["tradecode"].upper())
    peRat=peRatio(tradecode["tradecode"].upper())
    growthRate=forecast(tradecode["tradecode"].upper())
    info={
        "peRatio":peRat,
        "growthRate":growthRate,
    }
    print(info)
    return info




if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=7000)
