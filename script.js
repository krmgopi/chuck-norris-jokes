function fetchJokes() {
    let num = document.getElementById('numberOfJokes');
    if (!num.value) {
        alert("please enter number of jokes");
        num.focus();
        return false;
    }
    if (num.value <= 0) {
        alert("please enter a number greater than 0");
        num.value = '';
        num.focus();
        return false;
    }
    let jokes = document.getElementById("jokes");
    jokes.innerHTML = '';

    fetch(`http://api.icndb.com/jokes/random/${num.value}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            let ul = document.createElement('ul');
            ul.className = "collection with-header";
            jokes.appendChild(ul);
            console.log(ul);
            let sno = 1;
            data.value.forEach(function(data) {
                let li = document.createElement("li");
                li.className = "collection-item";
                li.innerHTML = `${sno++}. ${data.joke}`;
                ul.appendChild(li);
                console.log(ul);
            });
            num.value = ''
        })
        .catch(function(err) {
            console.log("Error: something went wrong")
        });
}