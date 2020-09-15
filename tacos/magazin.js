function none() {
    document.getElementById(`menu`).style.display = `none`;

}

function corect1() {
    document.getElementsById(`name`).hidden = true;
    let name1 = document.getElementById(`lname`).value;
    let name = name1.length;
    if (name <= 13) {
        alert("Sent to server");
    } else {
        alert("Warning");
    }
}

function corect() {
    alert("Sent to server");
}