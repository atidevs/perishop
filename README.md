## Perishop App :
    Perishop is a web app that provides you with 300+ Shops.
---

### I. Technology stack :

Perishop app is built using the MEAN stack :

        M: MongoDB (NoSQL / Non Relational database)
        E: ExpressJs (Web application framework for building APIs)
        A: Angular (Javascript MVC framework for front end web development)
        N: NodeJs (Environment for running Javascript in the server side)

### II. Front End :zap: Back End :

#### 1. Front End :

:open_file_folder: client-perishop/ 

        Contains source code of the front end side :
                - Components : client-perishop/src/app/components   
                - Services : client-perishop/src/app/services
                - Modules : client-perishop/src/app
                - Package.json (dependencies)
                - Angular CLI generated files
        
:open_file_folder: client/

        This is the folder you need to try the app, please don't delete it.

        It contains the project build after running :
        > ng build

#### 2. Back End :

:open_file_folder: routes/

Contains two file : 

:page_with_curl: shops.js :
        
        Handling Shops end points.
                
:page_with_curl: users.js :

        Handling Users end points.

---

:open_file_folder: models/

:page_with_curl: shops.js :

        Holds the definition of Shop Model using Mongoose Schema, for querying the database and handling all CRUD operations that concerns shops records.

:page_with_curl: users.js :

        Holds the definition of User Model using Mongoose Schema, for querying the database and handling all CRUD operations that deals with users records.

---

:open_file_folder: config/

        Holds an Object with database path to connect to using mongoose.

---

:open_file_folder: database/

        Holds the database folder where all records go and mongoDB journaling is saved.

---
:page_with_curl: app.js

        Is the entry point to the app. It holds a set of imports among which : Express, Mongoose, BodyParser, Passport and other middleware.

---



### III. Features :
*Perishop features are :*

1. As a new user you can <b>sign up</b>,
2. As a registered user you can <b>log in</b>,
3. As a registered user you can <b>log out</b>,
4. As a registered user you can access <b>Nearby Shops</b> (Nearby Shops),
5. As a registered user you can <b>like</b> a shop, therefore adding it to your <b>Preferred Shops</b> (My Shops),
6. As a registered user you can access your <b>Preferred Shops list</b> (My Shops) that holds all <b>liked</b> shops,
7. As a registered user you can <b>dislike</b> a shop, thus not displaying it for <b>2 hours</b> in the Nearby Shops list,
8. As an <b>unregistered</b> user you <b>cannot</b> access any of the functionalities, but the <b>home page</b>.

---   

### IV. Setting up Perishop :

1. Create a project folder :open_file_folder: (eg: perishopApp) and cd into it :

        ~$ cd ..../perishopApp

2. Clone the github repository in your project folder :open_file_folder: by running : 
        
        ~$ .../perishopApp  // present working directory

        git clone https://github.com/atidevs/perishop.git

3. You need to have MongoDB installed : Community Server

        https://www.mongodb.com/download-center?jmp=nav#community

4. If you are on MacOS or Linux skip this step, if Windows download and install git :

        https://git-scm.com/downloads

5. Once MongoDB and git Installed, open up Git bash and cd into :

        ~$ cd .../mongodb/bin   (... : wherever path you installed mongodb in, usually C:/mongodb/bin)

    Then run this command :

        ~$ mongod --dbpath=".../perishopApp/perishop/database"

6. Open up another Git bash terminal :

        ~$ cd .../perishopApp/perishop (... : wherever the path to your perishopApp folder is)

    And then run this command :

        ~$ start

7. Open up your browser and go to :

        localhost:3000

8. Congrats! You are on the Home Page
---

### V. Playing around with the Database :
    
If you want to check the records in the database follow these steps :

1. Open up the command line (cmd) as an Administrator in windows or (terminal) in MacOS and Linux and run :
        
        > mongo

    Afterwards if you look at the Git bash terminal where you run :

        ~$ mongod --dbpath=".../perishopApp/perishop/database"

    You will see a (2 connections now open) : since the first connnection is from the app itself and the second is the one we just run : ( > mongo ).
    <br/>
    

2. Now you can run these commands : 

        > show dbs  // to show all available databases
        
        > use perishop // to use the perishop database displayed among available dbs

        > show collections // to show all collections inside perishop db

        > db.users.find().pretty() // to list all signed up users and their information

        > db.shops.find().pretty() // to list all shops and their information

3. Enjoy :v: :computer: 
        

---
### Screenshots :
![alt text][img1]
![alt text][img2]
![alt text][img3]
![alt text][img4]
![alt text][img5]
![alt text][img6]
![alt text][img7]
![alt text][img8]
![alt text][img9]
![alt text][img10]

[img1]: ./app-img/home.png "Perishop Home page image"
[img2]: ./app-img/login.png "Perishop login page image"
[img3]: ./app-img/signup.png "Perishop Signup page image"

[img4]: ./app-img/loggingIn.png "Perishop while logging in image"
[img5]: ./app-img/homeAfterLogin.png "Perishop Home page after logging in image"
[img9]: ./app-img/profile.png "Perishop Profile page image"
[img6]: ./app-img/nearbyRadiusIssue.png "Perishop Nearby Shops page image"
[img7]: ./app-img/nearbyShopsFound.png "Perishop Nearby Shops page with loaded shops image"
[img8]: ./app-img/myshops.png "Perishop My Shops page image"

[img10]: ./app-img/onLogOut.png "Perishop On LogOut page image"