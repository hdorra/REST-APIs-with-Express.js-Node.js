const express = require('express');
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.get('/api/Listing', (req, res) => {
    res.send(stuff);
})

app.get('/api/Listing/:id', (req, res) => {
    const thingToSell = stuff.find(stuff => stuff.id === parseInt(req.params.id))

    if (!thingToSell) {
        res.status(404).send('The item cannot be found')
    }
    res.send(thingToSell)
})

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


const stuff = [
    {
       id: 1,
       item: 'Baseball glove',
       description: 'A nice apartment',
       requestedPrice: '$10',
       contactEmai: 'demo@yahoo.com'
    },
    {
       id: 2,
       item: 'Used Iphone', 
       description: 'Great condition, unlocked.',
       requestedPrice: '$100',
       contactEmail:  'test@gmail.com'
   }]

app.listen(3000,()=>console.log('Server is running on Port 3000'))