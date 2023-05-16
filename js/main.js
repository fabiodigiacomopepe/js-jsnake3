/* RICHIESTA
Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const elencoBici = [
    {
        "nome": "bici standard",
        "peso": 16,
    },
    {
        "nome": "bici titanio",
        "peso": 14,
    },
    {
        "nome": "bici elettrica",
        "peso": 19,
    },
    {
        "nome": "bici carbonio",
        "peso": 10,
    },
    {
        "nome": "bici enduro",
        "peso": 18,
    }
];

let biciPiuLeggera = elencoBici[0];

elencoBici.forEach((element) => {
    if (element.peso < biciPiuLeggera.peso) {
        biciPiuLeggera = element;
    }
});

const {nome, peso} = biciPiuLeggera;

const output = document.getElementById("output").innerHTML =
`La bici con il peso più leggero è la ${nome} con il peso di ${peso} kg`