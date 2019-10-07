# Real Wealth Network of Los Angeles County - Interactive Web Application
* We here at Real Wealth Network of LA County, invite you to explore our brand new industry trends application. This application enables users to learn more about the potential for the LA housing market by providing them with details about the pros and cons of the local market.
* We would love your feedback, so please feel free to access the webpage!!! Until this application goes live, users must first launch the gathering.py file in their text editor. Please navigate to the folder titled real_wealth to locate all neccessary files and uncomment lines 14-16, as well as lines 20-34. The gathering.py file will create the SQLite database used to house our housing market data. After this file is run, please comment out the same lines of code (14-16 and 20-34). The user is now ready to officially launch our application. You are now ready to launch the app.py file in your console. This will launch our application!
* We appreciate any feedback at this time and look forward to your comments!

## Documentation and Navigation:
* real-wealth-network-la (Home Directory)
    * DATA AND ETL FOR MAP ---> All Data for Map Application
    * MAP ---> HTML/CSS and Javascript for Jackson Map
    
* real_wealth (Folder for Main Application)
    * gathering.py ---> SQLLite Database Creation from 5 total CSV Files
    * app.py ---> Flask/SQLAlchemy Application that launches web app on local hostonce gathering.py file has been executed.
    * templates (Folder)
        * index.html ---> Main HTML Dashboard
    * data (Folder)
        * 5 Total CSV Files (Original Data Sources)
            * employment.csv
            * home_rentalPrice.csv
            * medianIncome.csv
            * monthlyListings.csv
            * population.csv
    * static (Folder)
        * css (Folder)
            * style.css ---> Stylesheet for index.html
        * js (Folder)
            * appHomeValue.js ---> Builds Plotly.js chart for LA COunty vs US Median Home Value. Also inputs data directly into index.html summary.
            * appRentValue.js ---> Builds Plotly.js chart for LA County vs US Median Rent Price. Also inputs data directly into index.html summary.
            * appIncome.js ---> Builds Plotly.js chart for LA County vs US vs California State 2017 Median Income Levels. Also inputs data directly into index.html.
            * population.js ---> Inputs Population data directly into index.html.
        * images (Folder)
            * LOGO.JPg ---> Real Wealth Network of LA Logo.
