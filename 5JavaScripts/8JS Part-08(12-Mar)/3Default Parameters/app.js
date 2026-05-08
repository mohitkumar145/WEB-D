function sum(a, b = 2){

    console.log(a+b);
}
sum(2);
sum(5, 6);


// wrong format


function sum2(a = 3, b){

    console.log(a+b);
}

sum(5, 0);
sum2(2);// a = 2, b = undefined


// but agar kisi fn me hame a ko deafualt dena
//  pad gaya to ham a ko baad me assigned kar denge 


function sum2(b, a = 3){

    console.log(a+b);
}