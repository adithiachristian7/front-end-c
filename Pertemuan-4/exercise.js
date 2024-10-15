function bmi (tinggi, berat){

    let tinggimeter = tinggi / 100
    let bmi = berat / (tinggimeter * tinggimeter)

    console.log('Tinggi =' + tinggimeter + 'm')
    console.log('Berat =' + berat + 'kg')
    console.log('BMI =' + bmi)
    return bmi 

}
console.log(bmi(170,40)) ;