const loader = document.querySelector('#loading-container');
let pokemons = [];

const colors = {
    fire:'orange',
    grass:'lightgreen',
    electric:'yellow',
    water:'#70ffea',
    ground:'darkgrey',
    rock:'grey',
    fairy:'pink',
    poison:'greenyellow',
    bug:'#94ecbe',
    dragon:'orange',
    psychic:'#7c7db6', 
    flying:'#fcca46',
    fighting:'darkgrey',
    normal:'lightgrey',
    ice:'#00f2f2',
    dark: '#4f7ecf',
    ghost: '#7685a7',
    steel: 'steelblue',
}





async function generatePokemons(){
    let pokemons = [];

    for (let i = 1; i <= 151; i++) {
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(resp => resp.json())
        
        pokemons.push(pokemon)
    }

    pokemons.forEach(pokemon => {
        let card = document.createElement('div');

        card.classList.add('col-12' , 'col-sm-6', 'col-md-4');

        card.style.order = pokemon.order;

        card.innerHTML = `
        <div class="poke-card" style="border : solid 2px ${colors[pokemon.types[0].type.name]}">
    
            <div class="img-container">
                <img class="w-100" style="drop-shadow(0 0 6px ${colors[pokemon.types[0].type.name]})" src="${pokemon.sprites.front_default}" alt="">  
                  
            </div>
            <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-center">
                <h3 class="mb-0">${pokemon.name}</h3>
                <span class="type-icon mx-3" style="background :${colors[pokemon.types[0].type.name]}; box-shadow:0 0 6px ${colors[pokemon.types[0].type.name]};"></span>
                </div>
                
                <div class="d-flex justify-content-around my-4">
                    <div> 
                    <small> Peso</small> 
                    <h5 class="small tc-main-yellow"> ${pokemon.weight} kg </h5>
                    </div>
                    <div> 
                    <small> Altezza</small> 
                    <h5 class="small tc-main-yellow"> ${pokemon.height} m</h5>
                    </div>      
                </div>
                
                <div class="d-flex justify-content-between my-4">
                <div class="text-center"> 
                    <small> Attack</small> 
                    <h5 class="small tc-main-yellow"> ${pokemon.stats[1].base_stat}</h5>
                </div>  
                <div class="text-center"> 
                    <small> HP</small> 
                    <h5 class="small tc-main-yellow"> ${pokemon.stats[0].base_stat} </h5>
                </div>
                <div class="text-center"> 
                    <small> Defense</small> 
                    <h5 class="small tc-main-yellow"> ${pokemon.stats[2].base_stat}</h5>
                </div>          
                </div>
                <div class="details-link">
                <button class="btn btn-detail">Details</button>
                </div>
            </div>
        </div>
        `

        cardWrapper.appendChild(card)
    })

    cardWrapper.innerHTML = 
        pokemons.map(pokemon => {
            return `
            <div class="col-12 col-sm-6 col-md-4">
                <div class="poke-card" style="border : solid 2px ${colors[pokemon.types[0].type.name]}">
                <div class="img-container">
                    <img class="w-100" style="drop-shadow(0 0 6px ${colors[pokemon.types[0].type.name]})" src="${pokemon.sprites.front_default}" alt="">  
                    
                </div>
                <div class="d-flex flex-column">
                    <div class="d-flex align-items-center justify-content-center">
                        <h3 class="mb-0">${pokemon.name}</h3>
                    <span class="type-icon mx-3" style="background :${colors[pokemon.types[0].type.name]}; box-shadow:0 0 6px ${colors[pokemon.types[0].type.name]};"></span>
                    </div>
                    
                    <div class="d-flex justify-content-around my-4">
                        <div> 
                        <small> Peso</small> 
                        <h5 class="small tc-main-yellow"> ${pokemon.weight} kg </h5>
                        </div>
                        <div> 
                        <small> Altezza</small> 
                        <h5 class="small tc-main-yellow"> ${pokemon.height} m</h5>
                        </div>      
                    </div>
                    
                    <div class="d-flex justify-content-between my-4">
                    <div class="text-center"> 
                        <small> Attack</small> 
                        <h5 class="small tc-main-yellow"> ${pokemon.stats[1].base_stat}</h5>
                    </div>  
                    <div class="text-center"> 
                        <small> HP</small> 
                        <h5 class="small tc-main-yellow"> ${pokemon.stats[0].base_stat} </h5>
                    </div>
                    <div class="text-center"> 
                        <small> Defense</small> 
                        <h5 class="small tc-main-yellow"> ${pokemon.stats[2].base_stat}</h5>
                    </div>          
                    </div>
                    <div class="details-link">
                    <button class="btn btn-detail">Details</button>
                    </div>
                </div>
                </div>
            </div>
            `
        }).join('')
        
    
}

generatePokemons()