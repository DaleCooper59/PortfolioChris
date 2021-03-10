window.addEventListener('load', ()=>{
    if(screen.width < 740){
    alert('sss');
    }
})



//scrollevent*********************************** */

window.addEventListener('scroll', () => {
    if (window.scrollY > (window.innerHeight) * 2) {
        let imgBckg = document.getElementById('imgBackground');
        imgBckg.style.opacity = '0';
        imgBckg.style.transition = '1.5s';
    }
})


//HEADER
//overlay*******************//

//const homeUrl = url('/index.html');
//if ( document.URL == homeUrl ){
// true
//}else{
// false    
//}

window.addEventListener('load', () => {
    let img_presentation = document.getElementById('overlay-main');
    setTimeout(() => {
        opacify(img_presentation);
        setTimeout(() => {
            img_presentation.style.opacity = "0";
            img_presentation.style.display = "none";
        }, 3000);
    }, 2000);

})


const projects_index = document.getElementById('projects-index');
const overlay_I = document.getElementById('overlay-presentation');
const proj_link = document.getElementById('projects-link');
const overlay_P = document.getElementById('overlay-project');
const cv_link = document.getElementById('CV-link');
const overlay_C = document.getElementById('overlay-CV');


projects_index.addEventListener('mouseover', () => {
    if (screen.width > 900) {
        overlay_I.style.display = "block";
        opacify(overlay_I);
    }
})

proj_link.addEventListener('mouseover', () => {
    if (screen.width > 900) {
        overlay_P.style.display = "block";
        opacify(overlay_P);
    }
})

cv_link.addEventListener('mouseover', () => {
    if (screen.width > 900) {
        overlay_C.style.display = "block";
        opacify(overlay_C);
    }
})

function opacify(ele) {
    ele.animate([{
            opacity: "1"
        },
        {
            opacity: "0.9"
        },
        {
            opacity: "0.8"
        },
        {
            opacity: "0.7"
        },
        {
            opacity: "0.6"
        },
        {
            opacity: "0.5"
        },
        {
            opacity: "0.4"
        },
        {
            opacity: "0.3"
        },
        {
            opacity: "0.2"
        },
        {
            opacity: "0.1"
        },
        {
            opacity: "0"
        }
    ], {
        duration: 4000,
        iterations: 1
    });
}



function btnLigthSwitch() {
    
    const fenetre = document.documentElement;
    fenetre.addEventListener('mousemove', (e) => {
        fenetre.style.setProperty('--x', e.clientX + 'px')
        fenetre.style.setProperty('--y', e.clientY + 'px')
    })
        let light_content = document.getElementById('ligth-content');
        light_content.classList.toggle("ligth");
    }
    




//Presentation



//copyrigth

let date = new Date()
let copy = document.querySelector('.copyR');
copy.innerHTML = date.getFullYear();

//form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const textArea = document.getElementById('textarea');
let arraySuccess =[];

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();

    if (arraySuccess.length >= 3) {  
        alert('Votre message a bien été envoyé, merci à vous!');   
        arraySuccess.length = 0;
   }

});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const textAreaValue = textArea.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Vous devez renseigner le champ');
	} else {
		setSuccessFor(username, 'Merci');        
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Un e-mail est nécéssaire pour vous répondre');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'l\'e-mail n\'est pas valide');
	} else {
		setSuccessFor(email, 'L\'e-mail est bien valide');
	}

    if (textAreaValue === '') {
        setErrorFor(textArea, 'Vous ne souhaitez rien savoir ?');
    } else {
        setSuccessFor(textArea, 'Je vous répondrais le plus vite possible');
    }
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	let small = formControl.querySelector('small');
    let smallid = formControl.querySelector('.small');
	formControl.className = 'form-control error';
	small.innerText = message;
    smallid.innerText = "";
    arraySuccess.pop();
}

function setSuccessFor(input,message) {
    const formControl = input.parentElement;
    let smallid = formControl.querySelector('.small');
    let small = formControl.querySelector('small');
    formControl.className=('form-control success');
    smallid.innerText = message;
    small.innerText = "";
    arraySuccess.push(1);
}
	
function isEmail(email) {
	return /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/.test(email);
}

let inputForm = [username,email,textArea];

Array.prototype.forEach.call(inputForm, (inputValue) => {
    inputValue.addEventListener('mouseover', (e) => {

        switch (e.target.value) {
            case '':
                inputValue.style.boxShadow = "4px 4px 5px white";
                break;
            default:
                null
                break;
        }
    })
    inputValue.addEventListener('mouseout', (e) => {
        inputValue.style.boxShadow = "none";
    })
})



//footer




//MEDIA QUERIES
const list_item = document.getElementById("list-item");
const socialItem = document.getElementById("social-item");
const cross = document.getElementById("cross-menu");
const crossClose = document.getElementById("cross-menu-close");

function openMenu() {
    cross.addEventListener('click', () => {
        // list_item.style.transform = "translateX(0)";
        socialItem.style.transform = "translateX(-100%)";
        document.body.style.transform = "translateX(100%)";
        document.body.style.backgroundColor = "rgba(51, 51, 51, 0.712)";

    })
}

function closeMenu() {
    crossClose.addEventListener('click', () => {
        // list_item.style.transform = "translateX(0)";
        socialItem.style.transform = "translateX(0)"
        document.body.style.transform = "translateX(0)";
        document.body.style.backgroundColor = ""
    });
}


//FORM
//function to disabled btn while form is EMPTY



/****************************************************************************************** */
/*404*/

//Index HTML
const main_p = document.getElementById('main-p');
const h1 = document.getElementById('h1-title');
const span = document.querySelectorAll('#h1-title > span');
Array.from(span, e => e.style.filter = "drop-shadow(10px 7px 4px #B2BEC3)");

    


let quotes;
let element ='';

const fetchQuotes = (element) => {
     fetch('https://thedavidbarton.herokuapp.com/api/1/quotes/recommend')
        .then(res => res.json())
        .then(data =>  element.addEventListener('mouseover', ()=>{main_p.innerHTML = `<div class"fetch-quote"> {${data[0].id}}, ${data[0].quoteText}</div>`; 
        setTimeout(() => {
            element.addEventListener('mouseover', ()=>{main_p.innerHTML='Bonjour à tous et bienvenus sur mon site, rechargez la page pour voir d\'autres citations ... sinon faites défiler'})
            
        }, 6500);})) ;
}


fetchQuotes(h1);
