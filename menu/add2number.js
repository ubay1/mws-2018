function kalkulator()
{
	let angka = document.querySelectorAll('input');
	let opr   = document.getElementById('operator');
	let i1 = angka[0].value;
	let i2 = angka[1].value;

	if (opr.value=="jumlah"){
		angka[2].value = parseFloat(i1)+parseFloat(i2);
	}
	else if (opr.value=="kurang") {
		angka[2].value = parseFloat(i1)-parseFloat(i2);
	}
	else if (opr.value=="kali") {
		angka[2].value = parseFloat(i1)*parseFloat(i2);
	}
	else if (opr.value=="bagi") {
		angka[2].value = parseFloat(i1)/parseFloat(i2);
	}

}

var tombol = document.querySelector('button');
tombol.addEventListener('click',kalkulator);
