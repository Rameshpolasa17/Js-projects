const form= document.querySelector('form')


form.addEventListener('submit', function(e){
    e.preventDefault(); // To delay the submission
    const height=parseInt(document.querySelector('#Height').value)
    const weight=parseInt(document.querySelector('#Weight').value)
    const result=document.querySelector('#results')
    if (height==='' || height<0|| isNaN(height)) {
        result.innerHTML=`Please add the valid Height ${height}`
    }
    else if (weight==='' || weight<0|| isNaN(weight)) {
        result.innerHTML=`Please add the valid Weight ${weight}`
    }
    else{
        const bmi= (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
    }
});