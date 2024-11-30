const processText = (text, userOptions) =>{

    var specialChars = ['ą','ę','ń','ś','ć','ż','ź','ó','ł',"Ą", "Ę", "Ń", "Ś", "Ć", "Ż", "Ź", "Ó", "Ł"]

    if (userOptions.uppercase) {
        text = text.toUpperCase();
    }


    if (userOptions.reverse) {
        text = [...text].reverse();
        text = text.join('');
    }


    if (userOptions.removeSpecialChars) {
        text = [...text].filter(letter => !specialChars.includes(letter))
        text = text.join('');
    }

    return console.log(`Twój tekst po przejściach to: ${text}`)
} 

var userOptions = {
    uppercase: false,
    reverse: false,
    removeSpecialChars: true
};


processText("LubięWarzywa!!", userOptions)