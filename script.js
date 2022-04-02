let btn = Array.from(document.getElementsByClassName('button'));
let sasa = document.getElementById('Calculator');
btn.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'Clear All':
                sasa.innerText = '';
                break;
            case '=':
                try{
                    sasa.innerText = eval(sasa.innerText);
                } catch {
                    sasa.innerText = "Error"
                }
                break;
            case 'backspace':
                if (sasa.innerText){
                   sasa.innerText = sasa.innerText.slice(0, -1);
                }
                break;
            default:
                sasa.innerText += e.target.innerText;
        }
    });
});