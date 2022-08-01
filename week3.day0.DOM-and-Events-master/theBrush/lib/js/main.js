//function onClickR() {
//    console.log("Rengar");
//    img1.src = assets/rengar.png;
//}

//const img1 = document.getElementById('rengar');
//document.addEventListener('click', onClickR);

function onClickR () {
    document.getElementById("rengar").src = 'assets/rengar.png';
    alert("You've been deleted!");
}

document.addEventListener('click', onClickR);
