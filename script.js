let a, b, c;

function matchedAB() {
    document.getElementById('input-c').value = (a * a) + (b * b);
    document.getElementById('c').innerText = (a * a) + (b * b);
}
function matchedAC() {
    document.getElementById('input-b').value = (a * a) - (c * c);
    document.getElementById('b').innerText = (a * a) - (c * c);
}
function matchedBC() {
    document.getElementById('input-a').value = (b * b) - (c * c);
    document.getElementById('a').innerText = (b * b) - (c * c);
}

function checkValue() {
    if (a != 0 && b != 0)
        matchedAB();
    else if (a != 0 && c != 0)
        matchedAC();
    else if (b != 0 && c != 0)
        matchedBC();
}

function inputA() {
    a = document.getElementById('input-a').value;
    if (a < 0 || a > 20000) {
        document.getElementById('input-a').value = 0;
        a = 0;
    }
    if (a === "") {
        document.getElementById('input-a').value = 0;
        a = 0;
    }
    document.getElementById('a').innerText = a;
    checkValue();
}
function inputB() {
    b = document.getElementById('input-b').value;
    if (b < 0 || b > 20000) {
        document.getElementById('input-b').value = 0;
        b = 0;
    }
    if (b === "") {
        document.getElementById('input-b').value = 0;
        b = 0;
    }
    document.getElementById('b').innerText = b;
    checkValue();
}
function inputC() {
    c = document.getElementById('input-c').value;
    if (c < 0 || c > 20000) {
        document.getElementById('input-c').value = 0;
        c = 0;
    }
    if (c === "") {
        document.getElementById('input-c').value = 0;
        c = 0;
    }
    document.getElementById('c').innerText = c;
    checkValue();
}

function clearAll() {
    a = 0;
    b = 0;
    c = 0;
    document.getElementById('input-a').value = a;
    document.getElementById('input-b').value = b;
    document.getElementById('input-c').value = c;
    document.getElementById('a').innerText = a;
    document.getElementById('b').innerText = b;
    document.getElementById('c').innerText = c;
}