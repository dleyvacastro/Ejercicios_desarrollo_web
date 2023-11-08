const animal={
    nombre: 'Snoopy',
    tipo: 'Perro',
    edad: 3,
    comer(){
        console.log(`${this.nombre} el ${this.tipo} esta comiendo tacticamente`);
    }
}

console.log(animal);
animal.comer();
