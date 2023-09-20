function addRow() {
    var buttonAdd = document.getElementById('btn-AddNota'),
        parentElem = document.getElementById('parentElement'),
        actualRows = document.getElementsByClassName('materieNota'),
        rowCreated = document.createElement('tr'),
        tdNr = document.createElement('td'),
        tdMaterie = document.createElement('td'),
        tdNota = document.createElement('td'),
        tdCredite = document.createElement('td'),
        inputMaterie = document.createElement('input'),
        inputNota = document.createElement('input'),
        inputCredite = document.createElement('input'),
        nrCrtCalculat = actualRows.length + 1,
        nrCrt = document.createTextNode(nrCrtCalculat),
        nrCrtSpan = document.createTextNode(" " + nrCrtCalculat),
        textMaterie = 'Materie ' + ' ...';

    parentElem.appendChild(rowCreated);
    rowCreated.setAttribute('class', 'materieNota');

    rowCreated.appendChild(tdNr);
    tdNr.appendChild(nrCrt);

    rowCreated.appendChild(tdMaterie);
    tdMaterie.appendChild(inputMaterie);
    inputMaterie.setAttribute('type', 'text');
    inputMaterie.setAttribute('placeholder', textMaterie);
    inputMaterie.setAttribute('class', 'inputMaterie');

    rowCreated.appendChild(tdNota);
    tdNota.appendChild(inputNota);
    inputNota.setAttribute('type', 'number');
    inputNota.setAttribute('class', 'note inputNote');
    inputNota.setAttribute('min', '5');
    inputNota.setAttribute('max', '10');
    inputNota.setAttribute('step', '1');
    inputNota.setAttribute('placeholder', 'Nota...');

    rowCreated.appendChild(tdCredite);
    tdCredite.appendChild(inputCredite);
    inputCredite.setAttribute('type', 'number');
    inputCredite.setAttribute('class', 'credite inputNote');
    inputCredite.setAttribute('min', '1');
    inputCredite.setAttribute('max', '15');
    inputCredite.setAttribute('step', '1');
    inputCredite.setAttribute('placeholder', 'Număr');


}

function removeRow() {
    var buttonRemove = document.getElementById('btn-RemoveNota'),
        parentElem = document.getElementById('parentElement'),
        materieNotaRow = document.getElementsByClassName('materieNota'),
        lastRow = materieNotaRow.length - 1;

    parentElem.removeChild(materieNotaRow[lastRow]);
}



function calculMedie() {
    var containerCalcul = document.getElementById('dateInitiale'),
        note = document.getElementsByClassName('note'),
        credite = document.getElementsByClassName('credite'),
        // outputMedie = document.querySelector('.container-rezultat .rezultat-final #rezultat'),
        produsNotaCredite = 0,
        sumaProduse = 0,
        totalCredite = 0,
        rezultatMedie = 0,
        x = 1,
        nonEmptyInputs = 0;


    for (var i = 0; i < note.length; i++) {
        if (note[i].value !== '') {
            if ((note[i].value > 10 || note[i].value < 1)) {
                alert("Toate NOTELE trebuie să fie între 1 și 10!");
                location.reload();
                x = 0;
                break;
            }

            if (credite[i].value > 10 || credite[i].value < 1) {
                alert("Toate CREDITELE trebuie să fie între 1 și 10!");
                location.reload();
                x = 0;
                break;
            }
            produsNotaCredite = Number(note[i].value) * Number(credite[i].value);
            sumaProduse += produsNotaCredite;
            totalCredite += Number(credite[i].value);
            rezultatMedie = sumaProduse / totalCredite;
            document.getElementById("rezultat").innerHTML = toFixed(rezultatMedie, 2);

            nonEmptyInputs++;
        }

    }

    if (x == 1) {
        rezultatMedie = sumaProduse / totalCredite;
        document.getElementById("rezultat").innerHTML = toFixed(rezultatMedie, 2);
    }

}

function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}