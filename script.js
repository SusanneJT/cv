

fetch('https://api.github.com/users/SusanneJT/repos')
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);

    //Arrays skapade för att lagra två divvar för varje repo 
    var div = [];
    var div2 = [];

    for (i=0; i<data.length; i++) { //För varje index i den hämtade datan/arrayn
        
        div[i] = document.createElement('div'); 
        div[i].setAttribute('class', 'col-lg-3 col-sm-6 mb-4 col-xs-6');
        document.getElementById("container-for-projects").appendChild(div[i]);

        div2[i] = document.createElement('div'); 
        div2[i].setAttribute('class', 'card h-100"');
        div[i].appendChild(div2[i]);

        let h6 = document.createElement('h6'); 
        h6.setAttribute('class', 'card-title');
        let textH6 = document.createTextNode(data[i].name); // Namnet på repot
        div2[i].appendChild(h6);
        h6.appendChild(textH6);        

        let icon = document.createElement('i'); 
        icon.setAttribute('class', 'fab fa-github-square');
        div2[i].appendChild(icon);

        var createA = document.createElement('a');
        var createAText = document.createTextNode(data[i].html_url); // Länk till github-repot
        createA.setAttribute('href', data[i].html_url);
        createA.appendChild(createAText);
        div2[i].appendChild(createA);

    }
})
.catch(function(error) {
    console.log(error);
}); 