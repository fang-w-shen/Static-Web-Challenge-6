var x =[];
var y =[];
for (var i = 1; i < 11; i++) {
	x.push(i);
	y.push(i);
}

var t = 0;
function addsq() {
	for (var i = 0; i < x.length; i++) {
		x[i] = Math.pow(x[i],2);
		t+=x[i];
	}
	return t;
}

var z = 0;
function sqadd() {
	for (var i = 0; i < y.length; i++) {
		z += y[i];
	}
	var z2 = z*z;

	return z2
}


console.log(sqadd()-addsq());