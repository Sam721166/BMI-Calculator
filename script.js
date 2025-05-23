const form = document.querySelector(".right");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const comment = document.querySelector('#comment');

    if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'please give a valid hieght'
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'please give a valid weight'
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`; 

        if (bmi <= 18.6) {
        comment.innerHTML = `(under weight)`;
        comment.style.color = 'rgb(255, 0, 0)'
        } else if (bmi > 18.6 && bmi <= 24.9){
        comment.innerHTML = '(normal weight)';
        comment.style.color ='rgb(25, 216, 0)'
        } else if (bmi > 24.9){
        comment.innerHTML = '(over weight)';
        comment.style.color = 'rgb(255, 170, 0)'
        }  
    }
})
    document.querySelectorAll('.input1').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    });
