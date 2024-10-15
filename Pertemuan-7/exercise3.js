let adith = {
    firstName: "Adithia",
    height: 170, 
    weight: 50, 
    bmi: function () {
        let tinggiMeter = this.height / 100;
        let hasilBmi = this.weight / (tinggiMeter * tinggiMeter);

        console.log("Nama =" + " " + this.firstName)
        console.log("Tinggi =" + " " + this.height)
        console.log("berat =" + " " + this.weight)
        
        if (hasilBmi < 16.0) {
            console.log("Severely underweight");
        } else if (hasilBmi >= 16.0 && hasilBmi < 18.5) {
            console.log("Underweight");
        } else if (hasilBmi >= 18.5 && hasilBmi < 24.9) {
            console.log("Normal");
        } else if (hasilBmi >= 25.0 && hasilBmi < 29.9) {
            console.log("Overweight");
        } else if (hasilBmi >= 30.0 && hasilBmi < 34.9) {
            console.log("Moderately Obese");
        } else if (hasilBmi >= 35.0 && hasilBmi < 39.9) {
            console.log("Severely Obese");
        } else if (hasilBmi >= 40.0) {
            console.log("Morbidly Obese");
        }

        return hasilBmi;
    }
}

console.log(adith.bmi());

