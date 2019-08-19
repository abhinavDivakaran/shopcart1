const Express = require('express');

var app = new Express();

app.set('view engine','ejs');

app.use(Express.static(__dirname+'/public'));

items=[{
    'name':'Apple 6S (iPhone)',
    'image':'/images/apple.jpg',
    'price': 'Rs. 28,999',
    'desc': 'The phone comes with a 4.70-inch touchscreen display with a resolution of 750x1334 pixels at a pixel density of 326 pixels per inch (ppi) and an aspect ratio of 16:9. Apple iPhone 6s is powered by a 1.84GHz dual-core A9 processor. It comes with 2GB of RAM.',
    'feedback':["Just to remember you that this phone is 4 years old, one of the best for 2015. Don't compare 2015 technology with today's standards.","also me i just got one 2 days ago and yes its worth it","Even today it is a fast and solid phone. Still runs the current versions of iOS. The battery life is not phenomenal and never was. But other than that it is still a very good phone as a daily driver."]
},{
    'name':'Nokia (smartphones)',
    'image':'/images/images(1).jpg',
    'price': 'Rs. 16,000',
    'desc': 'The phone comes with a 6.inch touchscreen display with a resolution of 750x1334 pixels at a pixel density of 180 pixels per inch (ppi) and an aspect ratio of 16:9. Nokia (smartphone) is powered by a 1.84GHz dual-core processor. It comes with 3GB of RAM.',
    'feedback':["Just to remember you that this phone is 4 years old, Very good phoe.","also me i just got one 2 days ago and yes its worth it","Even today it is a fast and solid phone. Still runs the current versions of Android. The battery life is not phenomenal and never was. But other than that it is still a very good phone as a daily driver."]
},{
    'name':'Samsung Galaxy',
    'image':'/images/samsung.jpg',
    'price': 'Rs. 19,000',
    'desc': 'The phone comes with a 7-inch touchscreen display with a resolution of 750x1334 pixels at a pixel density of 281 pixels per inch (ppi) and an aspect ratio of 16:9. Samsung is powered by a 1.84GHz dual-core A9 processor. It comes with 4GB of RAM.',
    'feedback':["Just to remember you that this phone is 4 years old, one of the best for 2015. Don't compare 2015 technology with today's standards.","also me i just got one 2 days ago and yes its worth it","Even today it is a fast and solid phone. Still runs the current versions of iOS. The battery life is not phenomenal and never was. But other than that it is still a very good phone as a daily driver."]
},{
    'name':'Oppo ',
    'image':'/images/oppof7.jpg',
    'price': 'Rs. 11,000',
    'desc': 'The phone comes with a 5-inch touchscreen display with a resolution of 750x1334 pixels at a pixel density of 326 pixels per inch (ppi) and an aspect ratio of 1.oppo  is powered by a 1.84GHz dual-core A9 processor. It comes with 2GB of RAM.',
    'feedback':["Just to remember you that this phone is 4 years old, one of the best for 2019. Don't compare 2015 technology with today's standards.","also me i just got one 2 days ago and yes its worth it","Even today it is a fast and solid phone. Still runs the current versions of iOS. The battery life is not phenomenal and never was. But other than that it is still a very good phone as a daily driver."]
}];

app.get('/',(req,res)=>{
    res.render('index',{title:'Shop Cart'});
});

app.get('/items',(req,res)=>{
    res.render('items',{title:'Shop Cart',item:items});
});

app.get('/itemsingle/:id',(req,res)=>{
    const x = req.params.id;
    res.render('itemsingle',{title:'Shop Cart',item:items[x]});
});

app.listen(process.env.PORT || 3322,()=>{
    console.log('Working In Progress...:3322s...')
});