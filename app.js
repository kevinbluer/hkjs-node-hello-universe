var express = require('express')
var app = express()

app.use(express.static('public'));

app.get('/api/resources', function (req, res) {
  res.json([{ 
         title: "jQuery",
         description: 'jQuery is a fast, small, and feature-rich JavaScript library.',
         url: 'https://jquery.com',
        },{
         title: 'AngularJS',
         description: 'HTML enhanced for web apps!',
         url: 'https://angularjs.org',
        },{
         title: 'Bootstrap',
         description: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
         url: 'http://getbootstrap.com',
        },{
         title: 'Moment.js',
         description: 'Parse, validate, manipulate, and display dates and times in JavaScript.',
         url: 'http://momentjs.com',
        }
    ]);
});

app.listen(3000, function () {
  console.log('Hong Kong JS listening on port 3000!')
});