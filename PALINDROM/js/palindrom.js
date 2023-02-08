var first_input = document.getElementById('char-num');
first_input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        let char_num = document.getElementById('char-num').value;
        // e.preventDefault();
        makeSquares(char_num);
        document.getElementById('add').style.display = "block";
    }
})

let string = "";

function makeSquares(n) {
    var lengthh = document.querySelectorAll(".square").length;
    if (lengthh > 0) {
        document.getElementById('squares-cont').innerHTML = "";
    }
    for (let i = 0; i < n; i++) {
        const square = document.createElement("div");
        const input_square = document.createElement("input");
        const minus = document.createElement("div");
        minus.innerHTML = "-";
        document.getElementById('squares-cont').appendChild(square);
        square.appendChild(input_square);
        square.appendChild(minus);
        minus.classList.add('minus');
        minus.setAttribute("id", "minus");
        square.classList.add('square');
        input_square.setAttribute("class", "char-letter");
        input_square.setAttribute("maxlength", "1");
        square.setAttribute("id", i);
    }

    var all_inputs = document.querySelectorAll('.char-letter');
    checkForLetters(all_inputs);

    const all_minus = document.querySelectorAll('.minus');
    for (let index = 0; index < all_minus.length; index++) {
        all_minus[index].addEventListener("click", (even) => {
            all_minus[index].parentElement.remove();
        })
    }
}

document.getElementById('add').addEventListener("click", (ev) => {
    var lengthh = document.querySelectorAll(".square").length;
    const square = document.createElement("div");
    const input_square = document.createElement("input");
    const minus = document.createElement("div");
    minus.innerHTML = "-";
    document.getElementById('squares-cont').appendChild(square);
    square.appendChild(input_square);
    square.appendChild(minus);
    minus.classList.add('minus');
    minus.setAttribute("id", "minus");
    square.classList.add('square');
    input_square.setAttribute("class", "char-letter");
    input_square.setAttribute("maxlength", "1");
    square.setAttribute("id", lengthh++);

    var all_inputs = document.querySelectorAll('.char-letter');
    checkForLetters(all_inputs);

})

function checkForLetters(all_inputs) {
    // var all_inputs = document.querySelectorAll('.char-letter');
    var letters = /^[a-zA-Z]+$/;
    var inputs_length = all_inputs.length;
    for (let i = 0; i < all_inputs.length; i++) {
        all_inputs[i].addEventListener('keyup', (ev) => {
            if (all_inputs[i].value != "") {
                if (all_inputs[i].value.toString().match(letters)) {
                    string += all_inputs[i].value;
                    palindrome(string);
                    document.getElementById('message').innerHTML = "";
                } else {
                    document.getElementById('message').innerHTML = "You must enter letter, not number.";
                }
            }
        })
    }
}

function palindrome(str) {

    if (str.replace(/[^a-zA-Z]/g, "").toLowerCase() === str.replace(/[^a-zA-Z]/g, "").toLowerCase().split("").reverse().join("")) {
        document.getElementById("palindrom-mess").innerHTML = "It's a palindrome."
    } else {
        document.getElementById("palindrom-mess").innerHTML = "It's not a palindrome."
    }
}