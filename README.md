# REST APIs with Express.js and Node.js #

This repository outlines how to create REST APIs using Express.js in Node.js.</br>

If you would like to clone the repository, make sure to use npm to install the needed node modules when downloaded.</br>

**Overview and Inspiration:**
</br>
 I was inspired to create this repo to assist mobile developersand others in understanding how they can leverage this powerful stack in adding additional capability to their application. In my own journey, as I learned these concepts and was able to apply them in my own app projects, I found it incredibly helpful to create mental models on how these capabilities sit within the mobile application framework. </br>
 
***Disclaimer:***</br>
This is intentionally made very basic – no backend database and no introduction to environment variables. This walkthrough will also only cover Post and Get requests without a database backend (for illustrative purposes). challenge yourself to expand on that to include update and delete requests. As you learn these steps, extrapolating to include additional improvements (there are many) can be done. But let us take this one step at a time.</br>

**Tech Stack**</br>
      1.	Node.js </br>
      2.	Express.js </br>
      3.	Postman </br>
      4.	NPM Package Manager </br>
      5.	Nodemon </br>

**Some Comments:** </br>
•	Node.js can be used to build a web server, but as projects get bigger, it can become cumbersome to manage. This is where Express.js comes in. It is a tool that provides a more effective way of accomplishing this and is very popular for building RESTful APIs over Node.js.</br>

**Steps/Walkthrough:**</br>

***Section 1: Setup and Creating a GET request:***</br>
1.	Create a folder on your desktop (or any other location).</br>
2.	Open a new terminal and type:
  ```npm init -y.```
3.	Open the folder in Visual Studios (or the editor of your choice) and you will see that you have package.json file created.

![image](https://user-images.githubusercontent.com/13279722/212387947-e96185c8-8a30-48de-95c2-12e3ec26c51c.png)

4.	Now you will need to install Express.js.</br>
     a.	Navigating to this newly created folder in the terminal, type:  
           ``` npm install express --save``` 
5.	Once this step is completed, we can see it has been added to our dependencies in the package.json file and you will see a package-lock.json file has been added as well).</br>
![image](https://user-images.githubusercontent.com/13279722/212388086-a6066b68-15e7-4613-9d89-f1911231c9bb.png)

![image](https://user-images.githubusercontent.com/13279722/212388108-1ff78ccb-31db-49b8-9317-ef5ebbbbac74.png)

6.	We will also need to install nodemon. In the terminal type: </br>
         ```    npm install nodemon - - save -dev ```
             </br>
      a.	The -dev extension allows us to use this as a development dependency. </br>
      b.	Once completed, we will see nodemon in our package.json file.</br>
![image](https://user-images.githubusercontent.com/13279722/212388188-15da6fad-3d53-4a79-ba26-438fbcfd42f8.png)

7.	To leverage nodemon, go to the package.json file and under scripts, type in the following:</br>
```“start”: “nodemon index.js” ```

![image](https://user-images.githubusercontent.com/13279722/212388572-c11d4f75-ef3d-4c72-9a92-31545f402c7a.png)

**Note that the index.js is the starting point of our application. We have not created that yet, let’s do that now!</br>
8.	Go to the root directory and create an index.js file.</br>
a.	In order to use Express, we will need to “require” the package and the initialize. This is outlined in the Express.js documentation (https://expressjs.com/en/4x/api.html). </br>
9.	At the top of the index.js file let’s require the package and initialize: </br>

![image](https://user-images.githubusercontent.com/13279722/212388759-e98099d9-4271-4115-80e3-5efc865ebbf1.png)

Using this new const “app,” we can now listen to requests (such as .get, .post, .put, .delete which are all methods we can now use). For example, let’s add this as well to the index.js file, using the .get method:</br>

![image](https://user-images.githubusercontent.com/13279722/212388959-d54a370a-1047-409a-a8a2-f158b8ec9543.png)

Now, we want this message to be sent somewhere – so we will need to let the “app” know what port to listen to!
10.	So right under the top statement in the index.js file, type the following:</br>

![image](https://user-images.githubusercontent.com/13279722/212389194-499f5662-7514-4c71-82bd-f435702477bb.png)

So far, this is what your index.js file should look like:
</br>
![image](https://user-images.githubusercontent.com/13279722/212389381-069d4320-24ad-45f4-acbb-2069f24b8c5d.png)

11.	To run what we have so far, we an run in the terminal: </br>
```npm run start```

If you go to your browser, and type in the URL localhost: 3000, you should see the message:

![image](https://user-images.githubusercontent.com/13279722/212382209-57fcbdaa-2f35-408f-9303-1d9bef0f1222.png)

You an also try different things, like returning an array instead of the “Welcome” message:</br>
Example: return an array of things you want to sell and some initial data points when a user navigations to localhost: 3000/api/Listing: </br>

      app.get('/api/Listing', (req, res) => {
      res.send([
      { id: 1, item: 'Baseball glove', requestedPrice: '$10' },
      { id: 2, item: 'Used Iphone', requestedPrice: '$100' },
           ])
      })     

Here is where we are so far!</br>

![image](https://user-images.githubusercontent.com/13279722/212389508-76427e34-11fd-483e-9b67-5a3c9e93af01.png)

In the browser, you have two routes to go to now! Here is the second newly added Listing route in action:
![image](https://user-images.githubusercontent.com/13279722/212389551-54e0474a-e9b9-4889-9d2d-d6e951bc3d43.png)

Great work! Now, let’s had more routes! You can think of these as pages on the browser that you can navigate to. </br>

12.	Updating to reference an array:
*Note: In this walkthrough, we are going to be using data hardcoded into our arrays. When actually implementing this in developing a mobile app, you would use fetch feature to pull from a database. I will create another tutorial that can walk through this process as well. 

a.	Before we use this great tool – we can go back to our index.js file and create an array of objects called “stuff.” This array will contain (like the example above), things we want to list to sell.</br>
    - We will add additional variables such as description and contactEmail fields. 
So far, this is what your code should look like:</br>
![image](https://user-images.githubusercontent.com/13279722/212382356-b8fba7bf-9b31-4d7a-a5f0-2758db28530c.png)
 
Now delete the 2 items in the app.get code block and reference the “stuff” table instead:

![image](https://user-images.githubusercontent.com/13279722/212382396-6f3aa4c8-4c4b-4352-b5f1-eec537b5cc25.png)
 
Save your file and head over to the url for http://localhost:3000/api/Listing:</br>

You can see your new array data when navigating to that route:</br>
 ![image](https://user-images.githubusercontent.com/13279722/212382543-7a4cfbd8-0c60-473d-9cae-50164703e234.png)

Now, let’s use Postman which can help us test our endpoints (which is essentially the routes we created in the prior steps).</br>
•	You noticed in the prior steps that the data doesn’t show up nicely in the browser. With only 2 records, image we have thousands or millions of records. </br>
o	This is where Postman comes in, it will show a better formatted view.</br>

13.	Download Postman at https://www.postman.com/ 

a.  Create a new collection.
*Note: I am using my scratch space for purposes of this demo/walk through. To leverage Postman’s full suite of features, there are tons of documentation on their website.

![image](https://user-images.githubusercontent.com/13279722/212389866-ff534fa6-c90d-4c94-b434-c65265a4d639.png)

b.	Make sure you are in the collection, and click on create a new request:

![image](https://user-images.githubusercontent.com/13279722/212390051-093e485a-c24d-4384-b832-35303d6f9fb9.png)

You will be taken here – enter in the GET request the same URL you had in the previous browser  (http://localhost:3000/api/Listing/):

![image](https://user-images.githubusercontent.com/13279722/212390374-4758eb77-e858-42a1-a45b-f52b1a0d3a71.png)

Here, we now see the 2 objects we have stored in our array in the body:

![image](https://user-images.githubusercontent.com/13279722/212390445-dcc20c7d-7909-4cec-a410-11f201df070c.png)

14.	Now we want to modify our routes a bit more in the index.js file, so that we can fetch one object from the array as opposed to all of them being returned.
a.	In the index.js, lets add the following app.get method right under the /api/Listing app.get method we added earlier:

              app.get('/api/Listing/:id', (req, res) => {
                  const thingToSell = stuff.find(stuff => stuff.id === parseInt(req.params.id))

                  if (!thingToSell) {
                      res.status(404).send('The item cannot be found')
                  }
                  res.send(thingToSell)
                })

Code breakdown: Here is what the above snippet is telling us:</br>
        •	We are creating a new route where we will pass the id at the end of the route – so in our dummy data case, we have 2 objects with id 1 and 2. So if we put in the GET box in postman: http://localhost:3000/api/Listing/1 -- our endpoint should return the 1st object (the glove). </br>
              o	Let’s test this out! In Postman, put the following in the GET request: http://localhost:3000/api/Listing/1 and you see the object in the body:
![image](https://user-images.githubusercontent.com/13279722/212382709-54cb739e-bb42-405d-b5d3-eb79f08946e7.png)
 
Now compare this if you put the url in the browser:</br>
![image](https://user-images.githubusercontent.com/13279722/212382724-4bd12a2d-2adc-466e-80ee-d5f1f4e25f44.png)

You are only returned the id unless you specifically ask to get more information from the object. Imagine you have an object with a lot of propertries! You see the difference with using Postman to test our endpoints?!
</br>
•	In the second statement, we are saying to take that id, find it in the stuff array and make sure the id we put at the end of the url equals that of the one in the stuff array. 

    const thingToSell = stuff.find(stuff => stuff.id === parseInt(req.params.id))
    
•	We finally added an if condition, that if the id doesn’t exist (in our case, id: 3 and onwards), return the message that the item cannot be found.

            if (!thingToSell) {
            res.status(404).send('The item cannot be found')
            }
            res.send(thingToSell)

o	Let’s try this out, in Postman, put a 3 instead of the 1 in the url. You see that the message is returned successfully!

 ![image](https://user-images.githubusercontent.com/13279722/212382764-7acdb0bc-2dbe-47db-94f2-e0d379f56aa8.png)

•	The final statement is telling us that if it is found (and therefore, the if condition is not met), then you return the object we requested (in this case, the glove).
</br>

***Section 2: Creating a POST request:***
</br>
1.	In Section 1, we saw how to fetch a resource using the GET request. Now we will look at how we can create an item using the POST request.</br>
          a.	The post method will have a second parameter, which is the (req, res), where the req object actually contains the data we want to add in our array.
          So to do that, we need a way to pass this request object so we can extract data from it (so we are going to use some middleware). </br>
              o	At the top of the index.js, put the following:</br>
          
              app.use(express.json())
              
2.	Now, lets add our post route (on the same index.js file):</br>

            app.post('/api/Listing', (req, res) => {
                const addItem= {
                    id: stuff.length + 1,
                    item: req.body.item,
                    description: req.body.description,
                    requestedPrice: req.body.requestedPrice,
                    contactEmail: req.body.contactEmail,
                }
                stuff.push(addItem);
                res.send(addItem)
            })
            
o	Here, we are creating an object (being stored in our constant addItem, which has the same attributes that we had before in our array. </br>
     - For the id – we are saying to increment the id from what is in the array already (so a new object would have an id of 3). Of course, there are much more efficient and better ways of doing this, but for the purposes of this walkthrough we will use this method.</br>
     - For the remaining attributes, it is saying that take the data that is in the request body and store it in the respective field.</br>
o	Lets see this in action in Postman!</br>
      -	Change the method to Post.</br>
      -	Make sure the URL is what is in the app.post method.</br>
      -	So now we need to pass some properties in the body of the Postman request.</br>
      - Select ‘raw’ and change the text drop-down to JSON.</br>
•	Now we will create an object (no need to pass the id since it will be created based on what we defined above).</br>

                {
                 "item": "Old XBox",
                 "description": "Like new, includes 3 bonus games",
                 "requestedPrice": "$200",
                 "contactEmail": "posttry@gmail.com"
                }

•	And press send to send the request and you will see that it worked!

![image](https://user-images.githubusercontent.com/13279722/212382911-08974d16-c854-428a-979b-af60ee5f442b.png)

 
