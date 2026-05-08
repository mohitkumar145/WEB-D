

// let a = 56, b = 78;

const sum = (a, b) => {


    console.log(a + b);



}

sum(23, 45);

console.log(sum); // it gives arrow fn not normal fn


const cube = (n) => {
        console.log(n * n * n);
    return n * n * n;
}
cube(6);

const power = (a, b) => {
      console.log(a**b);
    return a ** b;
}

power(3, 4);



// Implicit Return


const mult = (a, b) =>(a*b);

mult(4, 6);


const cub = (n) => (n * n * n);

// or


const cuve = n => n * n * n; // single parameters ke paarntesisi na likhe to mgi vhalega

// write in console cuve(5); wee will, gte 125
