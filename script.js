function typeWriter(element){
        const textArray = element.innerHTML.split('');
        element.innerHTML='';
        textArray.forEach((letter,i)=>{
            setTimeout(function(){element.innerHTML+=letter;
            },75 * i).toExponential
        });
}
const nameTitle = document.querySelector('h1');
typeWriter(nameTitle)

