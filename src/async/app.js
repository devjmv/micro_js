let dir = './data.json'

async function datos(){
    const response = await fetch(dir)
    const dat = await response.json()
    //console.log(dat.results);

    dat.results.forEach(element => {
        console.log(element[0]);
    });
}

datos();