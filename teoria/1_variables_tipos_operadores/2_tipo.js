"use strict";
// boolean - true | false
const TrueTipos = true; // el tipo de este dato en typescript es true, ya que como es const nunca se puede modificar
const FalseTipos = false;
let verdaderoTipos = true; // el tipo de dato en typescript es bool, ya que como es let si se puede modificar
// verdaderoTipos = 5; // esto genera error en typescript ya que cuando se definio con let fue bool y no se puede cambiar el tipo de dato
// en javascript esto no genera error
// number - positivo | negativo | decimal
const PositivoTipos = 100000;
const NegativoTipos = -1;
const DecimalTipos = 1.1;
// string - "texto" (doble comilla) | 'texto' (comilla simple) | `texto` comilla invertida
const DobleComillaTipos = "Texto";
const ComillaSimpleTipos = "Texto";
const ComillaInvertidaTipos = `Texto`;
// undefined - sin definir
let UndefinedTipos;
UndefinedTipos = 5;
let UndefinedTipos2 = undefined;
UndefinedTipos2 = 5;
// null - ausencia de un valor
let NullTipos = null;
/* con typescript se puede definir además del valor el tipo de
dato que se quiera
*/
let NumeroTipos = 10000;
let CadenaTipos = "19191";
let CualquieraTipos = 1111; // any es el tipo de dato que se asemeja al javascript
/*
Con typescript se puede definir dos tipos posibles de datos de una variable,
esto se conoce como uniones
*/
let NumeroTipos2 = 1000;
