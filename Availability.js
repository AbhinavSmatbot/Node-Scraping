const request = require("request-promise"); //web Scripting Library using Node
const cheerio = require("cheerio");        //web Scripting Library using Node    
const fs = require('fs');                  

async function main() {
    const result = await request.get('https://modiproperties.com/availability-nilgiri-heights');
    const $ = cheerio.load(result);
    const scrapedData = [];
    $('.availability-content-section ul').each((index, ul) => {
        const tds = $(ul).find('li');
        const Sold = $(tds[0]).text();
        const Available = $(tds[1]).text();
        const Blocked = $(tds[2]).text();
        const tableRow = { Sold, Available, Blocked };
        scrapedData.push(tableRow);
    });
    console.log(scrapedData);
}
main();