// const BASE_URL = "http://localhost:3000"
// const TRAINERS_URL = `${BASE_URL}/trainers`
// const POKEMONS_URL = `${BASE_URL}/pokemons`



document.addEventListener('DOMContentLoaded', function() {

    
    
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons` 
    
    
    function getPokemonTrainers() {
    
        fetch(TRAINERS_URL).then(response => response.json()).then(trainerObj => renderTrainers(trainerObj)
        //renderPokemonList(trainerObj)
        )
            
        
    }
    
    
    function renderTrainer(trainerObj) {
        const main = document.querySelector('main')
        const button = document.createElement('button')
        const trainerDiv = document.createElement('div')
        const ul = document.createElement('ul')
        main.append(trainerDiv)
        trainerDiv.innerHTML = `<p> ${trainerObj.name} </p>`
        trainerDiv.append(button)
        trainerDiv.append(ul)
        trainerDiv.classList.add('card')
        trainerDiv.dataset.id = trainerObj.id
        button.dataset.trainer = trainerObj.id
        button.textContent = 'Add Pokemon'
        const trainerID = trainerObj.id
        const pokemonList = trainerObj.pokemons
        //pokemons":[{"id":7,"nickname":"Slyvia","species":"Poliwag","trainer_id":2},{"id":8,"nickname":"Kristopher","species":"Ponyta","trainer_id":2}]
        console.log(pokemonList)
        renderPokemonList(pokemonList, trainerID, ul)
        
        
        


        // //main.innerHTML = `<div class="card" data-id="${trainerObj.id}"><p>${trainerObj.name}</p>
        //     <button data-trainer-id="${trainerObj.id}">Add Pokemon</button>
        //     <ul>
        //     </ul>
        //     </div>
            

    }

    function renderTrainers(obj) {
        
        for (const element of obj) {
            //console.log(element)
            renderTrainer(element)
            


    }
}

    // function getusers(bookuser){
    //     for(const book of bookuser.users ){
    //       const p = document.getElementById(‘user’)
    //       const li = document.createElement(‘li’)
    //        li.innerHTML = book.username
    //        p.appendChild(li)
    //     }
    // }




    function renderPokemonList(list, id, unordered_list) {
        
        //console.log(obj.pokemons)
        //const li = document.createElement('li')
        for (const element of list) {
            const li = document.createElement('li')
            if (element.trainer_id == id)
                //const li = document.createElement('li')
                li.innerHTML = `${element.nickname} (${element.species})`
                unordered_list.append(li)
            }
            
            
    }

    
    getPokemonTrainers()
    
    
    
    
    
    
    
    
    
    
    
    







})

























