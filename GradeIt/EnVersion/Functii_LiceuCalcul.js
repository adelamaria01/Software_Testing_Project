function addRow() {
    var buttonAdd = document.getElementById('btn-AddNota'),
        parentElem = document.getElementById('parentElement'),
        actualRows = document.getElementsByClassName('materieNota'),
        rowCreated = document.createElement('tr'), // Creaza tagul tr
        tdNr = document.createElement('td'), // creaza tagul td pentru Nr
        tdMaterie = document.createElement('td'),  // creaza tagul td pentru Materie
        tdNota = document.createElement('td'), // creaza tagul td pentru Nota
        inputMaterie = document.createElement('input'),
        inputEl = document.createElement('input'),
        nrCrtCalculat = actualRows.length + 1,
        nrCrt = document.createTextNode(nrCrtCalculat), // numarul pentru tagul td pentru numar crt
        // nrCrtInputMaterie = document.createTextNode(" " + nrCrtCalculat),
        textMaterie = 'Subject ' + ' ...';

    parentElem.appendChild(rowCreated); //Ataseaza randul la elementul parinte tbody
    rowCreated.setAttribute('class', 'materieNota'); //Adauga attributul si clasa

    rowCreated.appendChild(tdNr); // Adauga tagul td la randul creat tr
    tdNr.appendChild(nrCrt); // Adauga textul la tagul td

    rowCreated.appendChild(tdMaterie); // Adauga tagul td pentru Materie
    //tdMaterie.appendChild(textMaterie); // Adauga textul la tagul creat
    tdMaterie.appendChild(inputMaterie); // Adauga tagul input in tagul td
    inputMaterie.setAttribute('type', 'text'); // Adauga attribut la input
    inputMaterie.setAttribute('placeholder', textMaterie); // Adauga attribut la input
    inputMaterie.setAttribute('class', 'inputMaterie'); // Adauga attribut la input


    rowCreated.appendChild(tdNota);
    tdNota.appendChild(inputEl);
    inputEl.setAttribute('type', 'number');
    inputEl.setAttribute('class', 'note inputNote');
    inputEl.setAttribute('min', '5');
    inputEl.setAttribute('max', '10');
    inputEl.setAttribute('placeholder', 'Grade...');
    inputEl.setAttribute('style', 'width:150px');

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
        sumaNote = 0,
        rezultatMedie = 0;
        x = 1;
  
    var nonEmptyInputs = 0;
  
    for (var i = 0; i < note.length; i++) {
      if (note[i].value !== '') {
        if(note[i].value > 10 || note[i].value < 1) {
            alert("Grades must be between 1 and 10!");
            location.reload();
            x = 0;
            break;
        }
        sumaNote += Number(note[i].value);
        nonEmptyInputs++;
      }
    }
  
    if(x == 1) {
      rezultatMedie = sumaNote / nonEmptyInputs;
      document.getElementById("rezultat").innerHTML = toFixed(rezultatMedie, 2);
    }
  }

function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}





