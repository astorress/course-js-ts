/*
El código en js y ts se delimitan con ;
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    var tiene un ambito global (fuera de una función) y local (cuando es declarado dentro de una funcion).

        var tester = "hey, hola";

        function nuevaFuncion() {
            var hola = "hola";
        }

        console.log(hola); // error: hola is not defined

    Hoisting es un mecanismo de JavaScript en el que las variables y declaraciones de funciones se mueven a la 
    parte superior de su ámbito antes de la ejecución del código.
        
        console.log (saludar);
        var saludar = "dice hola"
    
    El Hoisting se puede interpretar así:
    
        var saludar;
        console.log(saludar); // saludar is undefined
        saludar = "dice hola"
    
    Para volver a declarar con var se puede hacer de dos formas 
        
        var saludar = "hey, hola";
        var saludar = "dice Hola tambien";

        var saludar = "hey, hola";
        saludar = "dice Hola tambien";
    
    Esto hace que en ocasiones se vuelvan a declarar variables de forma inconciente y no saber el valor que tiene

/////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    let tiene un ambito de bloque, ejemplo:

        let saludar = "dice Hola";
        let tiempos = 4;

        if (tiempos > 3) {
            let hola = "dice Hola tambien";
            console.log(hola); // "dice Hola tambien"
        }
        console.log(hola) // hola is not defined

    al igual que con var, let se puede modificar pero no se puede volver a declararse

        let saludar = "dice Hola";
        saludar = "dice Hola tambien";

        let saludar = "dice Hola";
        let saludar = "dice Hola tambien"; // error: Identifier 'saludar' has already been declared

    si la misma variable se define en diferentes ámbitos, no habrá ningún error.

        let saludar = "dice Hola";
        if (true) {
            let saludar = "dice Hola tambien";
            console.log(saludar); // "dice Hola tambien"
        }
        console.log(saludar); // "dice Hola"

    Cuando se utiliza let, no hay que preocuparse de sí se ha utilizado un nombre para una variable antes, 
    puesto que una variable solo existe dentro de su ámbito

    El Hoisting de let al igual que  var, las declaraciones let se elevan a la parte superior. A diferencia de var que se inicializa como undefined, 
    la palabra clave let no se inicializa. Sí que si intentas usar una variable let antes de declararla, obtendrás un Reference Error

/////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    Las variables declaradas con const mantienen valores constantes. Las declaraciones const similitudes 
    con las declaraciones let, solo tiene ambito de bloque

    const no puede modificarse luego de declararse

        const saludar = "dice Hola";
        saludar = "dice Hola tambien";// error: Assignment to constant variable. 
        
        const saludar = "dice Hola";
        const saludar = "dice Hola tambien";// error: Identifier 'saludar' has already been declared

    Este comportamiento es algo diferente cuando se trata de objetos declarados con const. Mientras que un objeto 
    const no se puede actualizar, las propiedades de este objeto sí se pueden actualizar.

        const saludar = {
            mensaje: "dice Hola",
            tiempos: 4
        }

        saludar = {
            palabras: "Hola",
            numero: "cinco"
        } // error:  Assignment to constant variable.

        saludar.mensaje = "dice Hola tambien";

    El Hoisting de let al igual que let, const las declaraciones const se elevan a la parte superior, pero no se inicializan.
/////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

var x = 5; // var
let y = 10;
const z = 5; // z ya no se puede modificar

x = 10;
y = 15;
// z = 1; Esto no se puede hacer en js y ts
