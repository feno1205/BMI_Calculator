function calculate(w1,h1){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value/100
    
    let bmi = weight/(height*height)

    document.getElementById('heading').innerHTML="Your BMI is:"
    document.getElementById('result').innerHTML =bmi

    if(bmi<16){
        document.getElementById('message').style.color="red"
        document.getElementById('message').innerHTML="Severe Thinness"
    }
    else if(bmi>=16 && bmi<17){
        document.getElementById('message').style.color="orange"
        document.getElementById('message').innerHTML="Moderate Thinness"
    }
    else if(bmi>=17 && bmi<18.5){
        document.getElementById('message').style.color="yellow"
        document.getElementById('message').innerHTML="Mild Thinness"
    }
    else if(bmi>=18.5 && bmi<25){
        document.getElementById('message').style.color="green"
        document.getElementById('message').innerHTML="Normal weight"
    }
    else if(bmi>25 && bmi<=30){
        document.getElementById('message').style.color="yellow"
        document.getElementById('message').innerHTML="Overweight"
    }
    else if(bmi>30 && bmi<=35){
        document.getElementById('message').style.color="tangerine"
        document.getElementById('message').innerHTML="Obese Class I"
    }
    else if(bmi>35 && bmi<=40){
        document.getElementById('message').style.color="orange"
        document.getElementById('message').innerHTML="Obese Class II"
    }
    else if(bmi>40){
        document.getElementById('message').style.color="red"
        document.getElementById('message').innerHTML="Obese Class III"
    }
    else{
        document.getElementById('heading').style.color="skyblue"
        document.getElementById('heading').innerHTML="Please enter data"
        document.getElementById('result').innerHTML =""
    }
}