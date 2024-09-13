// document.querySelectorAll('.container_btn .btn').forEach((btn) => {
//     btn.addEventListener('click', () => {
//         document.querySelectorAll('.container_btn .btn').forEach((btn) => {
//             btn.classList.remove('btn-select');
//         });
//         btn.classList.toggle('btn-select');
//         console.log(btn.id);
        
//         const containerWidth = document.getElementById('imgs').getBoundingClientRect().width;
//         console.log(containerWidth);

//         switch (btn.id) {
//             case 'meme_1_btn':
//                 document.getElementById('meme_1_img').style.transform = 'translate(0px)';
//                 document.getElementById('meme_1_text').style.transform = 'translate(0px)';

//                 document.getElementById('meme_2_img').style.transform = 'translate(0px)';
//                 document.getElementById('meme_2_text').style.transform = 'translate(0px)';

//                 document.getElementById('meme_3_img').style.transform = 'translate(0px)';
//                 document.getElementById('meme_3_text').style.transform = 'translate(0px)';

//                 document.getElementById('meme_4_img').style.transform = 'translate(0px)';
//                 document.getElementById('meme_4_text').style.transform = 'translate(0px)';
//                 break;

//             case 'meme_2_btn':
//                 document.getElementById('meme_1_img').style.transform = 'translate(-'+ containerWidth + 'px)';
//                 document.getElementById('meme_1_text').style.transform = 'translate(-468px)';

//                 document.getElementById('meme_2_img').style.transform = 'translate(-'+ containerWidth + 'px)';
//                 document.getElementById('meme_2_text').style.transform = 'translate(-468px)';

//                 document.getElementById('meme_3_img').style.transform = 'translate(-'+ containerWidth + 'px)';
//                 document.getElementById('meme_3_text').style.transform = 'translate(-468px)';

//                 document.getElementById('meme_4_img').style.transform = 'translate(-'+ containerWidth + 'px)';
//                 document.getElementById('meme_4_text').style.transform = 'translate(-468px)';
//                 break;

//             case 'meme_3_btn':
//                 document.getElementById('meme_1_img').style.transform = 'translate(-' + (containerWidth * 2) + 'px)';
//                 document.getElementById('meme_1_text').style.transform = 'translate(-' + (468 * 2) + 'px)';

//                 document.getElementById('meme_2_img').style.transform = 'translate(-' + (containerWidth * 2) + 'px)';
//                 document.getElementById('meme_2_text').style.transform = 'translate(-' + (468 * 2) + 'px)';

//                 document.getElementById('meme_3_img').style.transform = 'translate(-' + (containerWidth * 2) + 'px)';
//                 document.getElementById('meme_3_text').style.transform = 'translate(-' + (468 * 2) + 'px)';

//                 document.getElementById('meme_4_img').style.transform = 'translate(-' + (containerWidth * 2) + 'px)';
//                 document.getElementById('meme_4_text').style.transform = 'translate(-' + (468 * 2) + 'px)';
//                 break;

//             case 'meme_4_btn':
//                 document.getElementById('meme_1_img').style.transform = 'translate(-' + (containerWidth * 3) + 'px)';
//                 document.getElementById('meme_1_text').style.transform = 'translate(-' + (468 * 3) + 'px)';

//                 document.getElementById('meme_2_img').style.transform = 'translate(-' + (containerWidth * 3) + 'px)';
//                 document.getElementById('meme_2_text').style.transform = 'translate(-' + (468 * 3) + 'px)';

//                 document.getElementById('meme_3_img').style.transform = 'translate(-' + (containerWidth * 3) + 'px)';
//                 document.getElementById('meme_3_text').style.transform = 'translate(-' + (468 * 3) + 'px)';

//                 document.getElementById('meme_4_img').style.transform = 'translate(-' + (containerWidth *3) + 'px)';
//                 document.getElementById('meme_4_text').style.transform = 'translate(-' + (468 *3) + 'px)';
//                 break;

//             default:
//                 break;
//         }

//     })
// })

document.querySelectorAll('.container_btn .btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        // Сброс выделения всех кнопок и установка выделения на выбранной кнопке
        document.querySelectorAll('.container_btn .btn').forEach((btn) => {
            btn.classList.remove('btn-select');
        });
        btn.classList.toggle('btn-select');
        console.log(btn.id);

        const containerWidth = document.getElementById('imgs').getBoundingClientRect().width;
        const containerWidthText = document.getElementById('texts').getBoundingClientRect().width;
        console.log(containerWidth);
        console.log(containerWidthText);

        // Определяем смещение на основе кнопки
        let offsetMultiplier = 0;
        switch (btn.id) {
            case 'meme_2_btn':
                offsetMultiplier = 1;
                break;
            case 'meme_3_btn':
                offsetMultiplier = 2;
                break;
            case 'meme_4_btn':
                offsetMultiplier = 3;
                break;
            default:
                offsetMultiplier = 0;
        }

        // Рассчитываем смещение в зависимости от номера кнопки
        const imgOffset = containerWidth * offsetMultiplier;
        const textOffset = containerWidthText * offsetMultiplier;
        console.log(textOffset);
        

        // Применяем трансформацию для всех изображений и текстов
        document.querySelectorAll('#imgs .img').forEach((img) => {
            img.style.transform = `translate(-${imgOffset}px)`;
        });

        document.querySelectorAll('#texts .text').forEach((text) => {
            text.style.transform = `translate(-${textOffset}px)`;
        });
    });
});