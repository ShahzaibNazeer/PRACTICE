// alert("testing connection...");

// let main = document.getElementById('heading')

// function wieghtFunc(){
//         main.style.fontWeight='bold'
// };
// function italicFunc(){
//         main.style.fontStyle='italic'
// };
// function sizeFunc(){
//         main.style.fontSize='100px'
// };

// document.getElementById('heading')
//         .addEventListener
//         ('click',
//                 function () {
//                         let wieght = this;
//                         if (wieght.style.fontWeight === 'bold') {
//                                 wieght.style.fontWeight = 'normal'
//                         } else {
//                                 wieght.style.fontWeight = 'bold'
//                         }
//                 }

//         );
//  COMPLETELY WORKING CODE SINGLE CLICK MAKE BOLD AND DOUBLE CLICK MAKE UNBOLD

document.getElementById('heading')
        .addEventListener
        ('click',
                function () {
                        let main = this;
                        if (main.style.fontWeight === '') {
                                main.style.fontWeight = 'bold'
                                

                        } else if (main.style.fontWeight === 'bold' && main.style.fontStyle === '') {
                                main.style.fontStyle = 'italic'
                                
                        }
                        else if (main.style.fontStyle === 'italic' && main.style.fontSize === '') {

                                main.style.fontSize = '100px'
                        }
                        else  {
                                main.style.fontWeight = ''
                                main.style.fontSize = ''
                                main.style.fontStyle = ''
                        }
                }

        );

// with help chatGPT 