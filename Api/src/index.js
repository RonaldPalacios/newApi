import app from './app';
import './database/db'


app.listen(app.get('port'));
console.log('Server online port', 3000);