console.log("js file at the end of the body loaded");

function getAPIData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("showData").innerHTML =
                this.responseText;
        }
    };

    xhttp.open("GET", "http://localhost:8080/assets/facade/jsonData.json", true);
    xhttp.send();
}

function getAPIDataToTable() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //create a Table and read everything from the json-data
            CreateTableFromJSON(JSON.parse(this.responseText));
        }
    };
   
    xhttp.onerror = (error) => {
        console.log("Es ist ein Fehler aufgetreten!");
        console.log(error);
    }
    xhttp.open("GET", "http://localhost:8080/assets/facade/jsonData.json", true);
    xhttp.send();
 
}


function CreateTableFromJSON(jsonData) {

    // HEADER build col values
    // changerequest rruhe 2021-10-27: col.indexOf(key) === -1
    var col = [];
    for (var i = 0; i < jsonData.length; i++) {
        for (var key in jsonData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // JSON data into rows and cells
    for (var i = 0; i < jsonData.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonData[i][col[j]];
        }
    }

    let divOutput = document.getElementById("divJSONDataToTable");
    divOutput.innerHTML = "";
    divOutput.appendChild(table).setAttribute("class", "blueTable");;
}
