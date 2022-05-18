const transformers = [
    {
        name: 'Optimus Prime',
        team: 'Autobot',
        form: 'Trailer'
    },
    {
        name: 'Bumblebee',
        team: 'Autobot',
        form: 'Camaro'
    },
    {
        name: 'Megatron',
        team: 'Decepticon',
        form: 'Jet'
    }
]

//Obtener los nombres de los transformers

function getNames(array){
    const names = [];
    //Iterar sobre el arreglo
    for(let i=0; i< array.length;i++){
        //Guardando los nombres en el nuevo arreglo
        names.push(array[i].name);
    }
    return names;
}

console.log(getNames(transformers));


const names= transformers.map((transformer) => transformer.name);

console.log(names)

//tradicional

// buscar el elemento que su team sea Decepticon

function team(array){
    const team=[];
    for(let i=0; i<array.length; i++){
        if(array[i].team=='Decepticon'){
            team.push(array[i]);
        }
    }
    return team;
}

console.log(team(transformers));

// filter

const teamDecep = transformers.filter(transformer => transformer.team == 'Decepticon');

console.log(teamDecep)