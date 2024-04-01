import * as fs from 'fs';
import * as path from 'path';

export function getSnipingList() {
    let snipeList: string[] = [];

    const data = fs.readFileSync(path.join(__dirname, '../../snipe-list.txt'), 'utf-8');
    snipeList = data
        .split('\n')
        .map((a) => a.trim())
        .filter((a) => a);

    return snipeList;
}
