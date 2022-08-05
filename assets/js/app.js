let cl = console.log;
cl(countries);

let countryCards = document.getElementById('country-cards');
let SearchBar = document.getElementById('SearchBar');
let nameBtn = document.getElementById('NAME');
let CAPITALBtn = document.getElementById('CAPITAL');
let btnPopulation = document.getElementById('POPULATION')

let newarr = countries.map(ele =>{
  if(ele.capital == undefined){
    ele.capital = 'NA';
    return ele
  }else{
    return ele
  }
})

function templating(arr){
    let result = '';
    arr.forEach(element => {
        result += ` 
        <div class="col-sm-3 mb-4">
          <div class="card">
            <div class="card-body">
              <figure>
                   <div class="card-img">
                       <img src="${element.flag}" alt="" class="img-fluid">
                   </div>
               <figcaption>
                <div class="heading">
                  <h3>${element.name}</h3>
                </div>
                      <ul class="info">
                        <li>
                          <div class="row"> 
                            <div class="col-sm-6">
                              <p><strong>Capital </strong> :</p>
                            </div>
                            <div class="col-sm-6">
                              <p>${element.capital}</p>                         
                            </div>
                          </div>                          
                        </li>
                        <li>
                        <div class="row"> 
                            <div class="col-sm-6">
                                <p><strong>Languages</strong> :</p>
                            </div>
                            <div class="col-sm-6">
                              <p>${element.languages}</p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="row"> 
                            <div class="col-sm-6">
                                <p><strong>Population </strong>:</p>
                            </div>
                            <div class="col-sm-6">
                              <p>${element.population}</p>
                            </div>
                          </div>
                      </li>
                    </ul>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>`
    });

    countryCards.innerHTML = result;
}
templating(countries)

function onkeyUp(e){
  let searchVal = e.target.value;
  cl(searchVal)
 let filterarr = newarr.filter(ele => ele.name.toLowerCase().includes(searchVal));
//  let filterLang = newarr.filter(e => e.languages.includes(searchVal));

  // cl(filterLang)
 templating(filterarr)
//  templating(filterLang )

}

let Nameflag = 'true';
function onclick(ele){
  if(Nameflag==true){  
    countries.sort((a,b) => b.name.localeCompare(a.name)) 
   templating(countries)
   Nameflag = false
  }else{
    countries.sort((a,b) => a.name.localeCompare(b.name)) 
   templating(countries);
    Nameflag = true
  }
}

let CapitalFlag = "true";
function onbtnclick(e){
  if(CapitalFlag == true){
    countries.sort((a,b) => a.capital.localeCompare(b.capital))
   templating(countries)
    CapitalFlag = false
  }else{
    countries.sort((a,b) => b.capital.localeCompare(a.capital))
    templating(countries)
    CapitalFlag = true
  }
}


let PopulationFlag = 'true';
function onPclick(e){
  if(PopulationFlag == true){
    countries.sort((a,b) => b.population - a.population)
   templating(countries)
   PopulationFlag = false;
  }else{
    countries.sort((a,b) => a.population - b.population)
    templating(countries)
    PopulationFlag = true;
  }

}


SearchBar.addEventListener('keyup', onkeyUp)
nameBtn.addEventListener('click', onclick)
CAPITALBtn.addEventListener('click', onbtnclick)
btnPopulation.addEventListener('click', onPclick)















