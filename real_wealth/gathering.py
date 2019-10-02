import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
from sqlalchemy import inspect

commands = []
employment = []
population = []
monthlylistings = []
medianincome = []
home_rentalprice = []

# with open(r'C:\Users\zgrin\OneDrive\Desktop\real-wealth-network-la\db\use.csv') as command_list:
#     for command in command_list:
#         commands.append(command)

engine = create_engine('sqlite:///realwealthnetwork.db')

# with engine.connect() as con:
#     ab = con.execute('DROP TABLE IF EXISTS "population";')
#     ac = con.execute('CREATE TABLE IF NOT EXISTS "population" ("id"INTEGER,"years"INTEGER,"population"INTEGER,"growth"INTEGER,"growth_rate" FLOAT);')
#     ad = con.execute('DROP TABLE IF EXISTS "monthlyListings";')
#     af = con.execute('CREATE TABLE IF NOT EXISTS "monthlyListings" ("id"INTEGER,"sizerank"INTEGER,"regionid"INTEGER,"regionname"TEXT,"regiontype"TEXT,"statename"TEXT,"date"TEXT,"totallistings"INTEGER);')
#     ag = con.execute('DROP TABLE IF EXISTS "medianIncome";')
#     ah = con.execute('CREATE TABLE IF NOT EXISTS "medianIncome" ("id"INTEGER,"years"INTEGER,"region"TEXT,"medianincome"INTEGER);')
#     ai = con.execute('DROP TABLE IF EXISTS "home_rentalPrice";')
#     aj = con.execute('CREATE TABLE IF NOT EXISTS "home_rentalPrice" ("id"INTEGER,"date"TEXT,"regionla"TEXT,"medianhomepricela"INTEGER,"medianRentalPriceLA"TEXT,"regionus"TEXT,"medianhomepriceus"	INTEGER,"medianRentalPriceUS"TEXT);')
#     ae = con.execute('DROP TABLE IF EXISTS "employment"')
#     ak = con.execute('CREATE TABLE IF NOT EXISTS "employment" ("id"INTEGER,"years"INTEGER,"periods"TEXT,"area"TEXT,"adjusted"TEXT,"preliminary"TEXT,"labor_force"INTEGER,"employment"INTEGER,"unemployment"INTEGER,"unemployment_rate"FLOAT);')
    
# for c in commands:
#     with engine.connect() as con:
#         con.execute(c)

with engine.connect() as con:
    rs = con.execute('SELECT * FROM employment')
    for r in rs:
        employment.append(r)
    rl = con.execute('SELECT * FROM population')
    for r in rl:
        population.append(r)
    rm = con.execute('SELECT * FROM monthlyListings')
    for r in rm:
        monthlylistings.append(r)
    rt = con.execute('SELECT * FROM home_rentalPrice')
    for r in rt:
        home_rentalprice.append(r)
    rx = con.execute('SELECT * FROM medianIncome')
    for r in rx:
        medianincome.append(r)

population = [list(el) for el in population]
employment = [list(el) for el in employment]
monthlylistings = [list(el) for el in monthlylistings]
home_rentalprice = [list(el) for el in home_rentalprice]
medianincome = [list(el) for el in medianincome]

hrplabels = ['id', 'date', 'regionla', 'medianhomepricela', 'medianRentalPriceLA', 'regionus', 'medianhomepriceus', 'medianRentalPriceUS']
hrpdf = pd.DataFrame.from_records(home_rentalprice, columns=hrplabels)
homerentalpriceData = hrpdf.to_dict('records')

incomelabels = ['id','years', 'region', 'medianincome']
incomedf = pd.DataFrame.from_records(medianincome, columns=incomelabels)
incomeData = incomedf.to_dict('records')

realwealthdict = {"population":population, "employment":employment, "monthlylistings":monthlylistings, "medianincome": medianincome,"home_rentalprice":home_rentalprice}

# homerentalpriceData = {"home_rentalprice": id, date, regionla, medianhomepricela, medianRentalPriceLA, regionus, medianhomepriceus, medianRentalPriceUS}
    
    
