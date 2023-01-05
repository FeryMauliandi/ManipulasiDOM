const angka = document.getElementById('input');
const tombol = document.getElementById('button');
const hasil = document.getElementById('output');

tombol.addEventListener('click', function () {
    if(angka.value === "") {
        alert('Angka tidak ada');
    } else{
        setTimeout(() =>{
            hasil.innerHTML = `${angka.value}`;
            if(angka.value % 3 == 0) {
                hasil.innerText = "Fizz";
            }
            if(angka.value % 5 == 0) {
                hasil.innerText = "Buzz";
            }
            if(angka.value % 3 == 0 && angka.value % 5 == 0) {
                hasil.innerText = "FizzBuzz";
            }
            if(angka.value <= 0 ) {
                hasil.innerText = "Invalid Input";
            }  
        }, 500)
}
})