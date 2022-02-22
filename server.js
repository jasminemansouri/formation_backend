const express = require('express');
const connect = require('./config/db')
const app = express();

app.use(express.json());


const adminRoute = require('./src/routes/admin.routes');
const blogRoute = require('./src/routes/blog.routes');
const menuRoute = require('./src/routes/menu.routes');

app.use('/admin', adminRoute);
app.use('/blog', blogRoute);
app.use('/getblogimage', express.static('./assets/blog_files'));
app.use('/menu', menuRoute);
app.use('/getmenuimage', express.static('./assets/menu_files'));




app.listen(5000, () => { console.log(`Server is listening on port 5000`); });