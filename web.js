//print all table data
const request = require("request-promise");
const cheerio = require("cheerio");
const Table = require('cli-table');

let table = new Table({    
});
request('https://modiproperties.com/project-inner.php?pageid=427',(error, response, html) => {
if(!error && response.statusCode == 200) {
    const $ =  cheerio.load(html);

    //const pricingtable = $('.pricing-content-section');
     // console.log(pricingtable.text());  //for text formet working output in text formet
     //console.log(pricingtable.html()); //for html formet working output in html formet table
     //const table = pricingtable.find('table').text();
     //const table  = pricingtable.find.children('table').text();
     //const table  = pricingtable.find.children('table').next().text();
     //const table  = pricingtable.find.children('table').parent().text();
  
     $('.pricing-content-section table > tbody:nth-child(1)').each((i,tr) =>{
      const item = $(tr).text();
    //   const table = new Table();
    
      console.log(item);
      });

       // const structDatas = [
       //    { handler: 'http', endpoint: 'http://localhost:3000/path', method: 'ALL' },
       //   { handler: 'event', endpoint: 'http://localhost:3000/event', method: 'POST' },
       //   { handler: 'GCS', endpoint: 'http://localhost:3000/GCS', method: 'POST' }
       // ];
       // console.table(structDatas);
    }
});

















//URL
//https://modiproperties.com/project-inner.php?pageid=427


