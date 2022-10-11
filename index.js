function cal(){
    let w = +document.getElementById('w').value;
    let h = +document.getElementById('h').value;
    let bmi = w/(h*h);
    if (bmi < 18)
        document.getElementById("bmi").innerHTML = 'Underweight';
    else if (bmi < 25.0)
        document.getElementById("bmi").innerHTML = 'Normal';
    else if (bmi < 30.0)
        document.getElementById("bmi").innerHTML = 'Overweight';
    else
        document.getElementById("bmi").innerHTML = 'Obese';
}