import { CacheType, CommandInteractionOption } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';

export function addCa(ca: any) {
    fs.appendFile(path.join(__dirname, '../../snipe-list.txt'), '\n' + ca, (err) => {
        if (err) console.log('error');
        else console.log('success' + ca);
    });
}
