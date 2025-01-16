function rechnung1() {
    let rechnung1a = document.getElementById("rechnung1a");
    let rechnung1b = document.getElementById("rechnung1b");
    let rechnung1c = document.getElementById("rechnung1c");
    let rechnung1ergebnis = document.getElementById("rechnung1ergebnis");
    let rechnung1_1ergebnis = document.getElementById("rechnung1_1ergebnis");
    let rechnung1_2ergebnis = document.getElementById("rechnung1_2ergebnis");
    let rechnung1_3ergebnis = document.getElementById("rechnung1_3ergebnis");
    
    rechnung1ergebnis.value = rechnung1a.value * rechnung1b.value * rechnung1c.value;
    rechnung1_1ergebnis.value = 2 * (rechnung1a.value * rechnung1b.value + rechnung1a.value * rechnung1c.value + rechnung1b.value * rechnung1c.value);
    rechnung1_2ergebnis.value = 2 * (rechnung1a.value * rechnung1c.value + rechnung1b.value * rechnung1c.value);
    rechnung1_3ergebnis.value = rechnung1a.value * rechnung1b.value;
}

function rechnung2() {
    let rechnung2a = document.getElementById("rechnung2a");
    let rechnung2ergebnis = document.getElementById("rechnung2ergebnis");
    let rechnung2_1ergebnis = document.getElementById("rechnung2_1ergebnis");
    let rechnung2_2ergebnis = document.getElementById("rechnung2_2ergebnis");
    let rechnung2_3ergebnis = document.getElementById("rechnung2_3ergebnis");

    rechnung2ergebnis.value = rechnung2a.value * rechnung2a.value * rechnung2a.value
    rechnung2_1ergebnis.value = 6 * (rechnung2a.value * rechnung2a.value)
    rechnung2_2ergebnis.value = 4 * (rechnung2a.value * rechnung2a.value)
    rechnung2_3ergebnis.value = rechnung2a.value * rechnung2a.value
}

function rechnung4() {
    let rechnung4a = document.getElementById("rechnung4a");
    let rechnung4b = document.getElementById("rechnung4b");
    let rechnung4c = document.getElementById("rechnung4c");
    let rechnung4ergebnis = document.getElementById("rechnung4ergebnis");
    let rechnung4_1ergebnis = document.getElementById("rechnung4_1ergebnis");
    let rechnung4_2ergebnis = document.getElementById("rechnung4_2ergebnis");
    let rechnung4_3ergebnis = document.getElementById("rechnung4_3ergebnis");
    
    rechnung4ergebnis.value = Math.floor((1 / 3) * (rechnung4a.value * rechnung4a.value) * rechnung4b.value);
    rechnung4_1ergebnis.value = (2 * rechnung4c.value + rechnung4a.value) * rechnung4a.value;
}

function rechnung6() {
    let rechnung6a = document.getElementById("rechnung6a");
    let rechnung6b = document.getElementById("rechnung6b");
    let rechnung6ergebnis = document.getElementById("rechnung6ergebnis");
    let rechnung6_1ergebnis = document.getElementById("rechnung6_1ergebnis");
    let rechnung6_2ergebnis = document.getElementById("rechnung6_2ergebnis");
    let rechnung6_3ergebnis = document.getElementById("rechnung6_3ergebnis");

    rechnung6ergebnis.value = Math.floor(Math.PI * (rechnung6b.value * rechnung6b.value) * rechnung6a.value);
    rechnung6_1ergebnis.value = Math.floor(2 * Math.PI * rechnung6b.value * (rechnung6b.value + rechnung6a.value))
    rechnung6_2ergebnis.value = Math.floor(2 * Math.PI * rechnung6b.value * rechnung6a.value)
    rechnung6_3ergebnis.value = Math.floor(Math.PI * (rechnung6b.value * rechnung6b.value))
}