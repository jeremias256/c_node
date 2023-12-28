const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido}`;
    }
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
function imprimeHeroe({nombre, apellido, poder, edad=0}) {
    //* const {nombre, apellido, poder} = deadpool;
    //* Al usarlo directamente de los params puedo modificarlo
    nombre = 'Jeremias';
    console.log(nombre, apellido ,poder);
}
imprimeHeroe(deadpool);

//! Desestructurar arrays

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [, , h3] = heroes;
console.log("🚀 ~ file: desestructuracion.js:30 ~ h3:", h3);

