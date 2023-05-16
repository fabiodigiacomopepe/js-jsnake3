/* RICHIESTA
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadreCalcio = [
    {
        "nome": "Juventus",
        "punti_fatti": "0",
        "falli_subiti": "0"
    },
    {
        "nome": "Inter",
        "punti_fatti": "0",
        "falli_subiti": "0"
    },
    {
        "nome": "Milan",
        "punti_fatti": "0",
        "falli_subiti": "0"
    },
    {
        "nome": "Torino",
        "punti_fatti": "0",
        "falli_subiti": "0"
    },
    {
        "nome": "Roma",
        "punti_fatti": "0",
        "falli_subiti": "0"
    },
];

const newSquadreCalcio = [];

squadreCalcio.forEach(element => {
    element["punti_fatti"] = Math.floor(Math.random() * 100) + 1;
    element["falli_subiti"] = Math.floor(Math.random() * 20) + 1;

    const {nome, falli_subiti} = element;
    
    newSquadreCalcio.push({
        nome,
        falli_subiti
    })
});

console.log(squadreCalcio);
console.log(newSquadreCalcio);
