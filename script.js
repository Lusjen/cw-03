let a = 20;
for (let a = 0; a <= 20; a++) {
    if ( a % 2 == 0) {
        document.write(`<div style="background-color:green">${a}</div>`);
    }
    else {
        document.write(`<div style="background-color:red">${a}</div>`);
    }
}

const max = 10;
for (let y = 0; y < max; y++) {
    for ( let g = 0 ; g < Math.abs(y-max/2) ; g++) {
        document.write(`&nbsp;`);
    }
    for ( let q = 0 ; q < max/2-Math.abs(y-max/2) ; q++) {
        document.write(`*`);
    }
    document.write("<br>");  
}