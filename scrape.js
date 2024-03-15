import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync('cache')) {
    fs.mkdirSync('cache');
}


for (let i = 16; i > 6; i--) {

    let cacheName = `cache/${i}.html`;
    let data;
    if (!fs.existsSync(cacheName)) {
        await sleep(1000);
        let res = await axios.get(`https://www.doomworld.com/10years/doomcomic/comic.php?page=${i}/`);
        data = res.data;
        fs.writeFileSync(cacheName, data);
        console.log('LIVE REQUEST!!!!');
    } else {
        data = fs.readFileSync(cacheName);
    }
    //console.log(res.data);
    const $ = cheerio.load(data);
    let img = $(`td>table+center>a>img`);
    console.log(img.attr('src'));
}