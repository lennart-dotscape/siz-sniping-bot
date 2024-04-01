import * as fs from 'fs';
import * as path from 'path';

fs.appendFile(path.join(__dirname, 'snipe-list.txt'), '\nca4', (err) => {
  if (err) console.log('error');
  else console.log('success');
});
