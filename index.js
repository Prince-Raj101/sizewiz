function sizewiz(options){
    let text = document.querySelectorAll('.sizewiz')

    if(options.size_type==='big'){
        options.size_type= '50px'
    }
    else if (options.size_type==='medium'){
        options.size_type='25px'
    }
    else{
        options.size_type='10px'
    }

    text.forEach(txt =>{
        txt.style.fontSize= options.size_type;
    })
}

module.exports.sizewiz = sizewiz;