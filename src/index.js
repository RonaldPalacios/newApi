import app from './app';
import './database/db'


app.listen(app.get('port'));
console.log('Servidor online port', 3000);