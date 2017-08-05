var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {

'article-one' : {
  title: 'Article One | Aryan',
  heading: 'Article One',
  content: ` <p>
               Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading!
           </p>
           
            <p>
               Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading!
           </p>
           
            <p>
               Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! Hi all! Welcome to Article one of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading!
           </p>`
},
'article-two' : {
    title: 'Article Two | Aryan',
    heading: 'Article Two',
    content: ` <p>
               Hi all! Welcome to Article two of http://aryanbethman6.imad.hasura-app.io/.The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! </p> `
               },
               
'article-three' : {
    title: 'Article Three | Aryan',
    heading: 'Article Three',
    content: ` <p>
               Hi all! Welcome to Article three . The creator of this page is Aryan Bethmangalkar.
               I love programming!!Goodbye and Thank you for reading! };
               </p>`

}
};
    



function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;






var htmlTemplate = `
<html>
   <head>
      ${title}
       
        <meta name="viewport" content="width-device-width, initial-scale=1" />
       
        <link href="/ui/style.css" rel="stylesheet" />
       
   </head>
   
   <body>
       <div class="container">
             <div>
           <a href="/">Home</a>
       </div>
       <hr/>
       <h3>
           ${heading}
       </h3>
       <div>
           4th August 2017
       </div>
       <div>
          
          ${content}
           
       </div>
       
       </div>
       
   </body>
   
</html>`;

return htmlTemplate
;}


app.get('/:articleName', function (req, res){
  //articleName == article-one  
  //articles[articleName] == {} content object for article one
  var articleName = req.params.articleName;
res.send(createTemplate (articles[articleName]));
});  



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
