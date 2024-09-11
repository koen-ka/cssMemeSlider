document.querySelectorAll('.container_btn .btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.container_btn .btn').forEach((btn) => {
            btn.classList.remove('btn-select');
        });
        btn.classList.toggle('btn-select');
        console.log(btn.id);

        switch (btn.id) {
            case 'meme_1_btn':
                document.getElementById('meme_1_img').style.transform = 'translate(0px)';
                document.getElementById('meme_1_text').style.transform = 'translate(0px)';

                document.getElementById('meme_2_img').style.transform = 'translate(0px)';
                document.getElementById('meme_2_text').style.transform = 'translate(0px)';

                document.getElementById('meme_3_img').style.transform = 'translate(0px)';
                document.getElementById('meme_3_text').style.transform = 'translate(0px)';

                document.getElementById('meme_4_img').style.transform = 'translate(0px)';
                document.getElementById('meme_4_text').style.transform = 'translate(0px)';
                break;

            case 'meme_2_btn':
                document.getElementById('meme_1_img').style.transform = 'translate(-640px)';
                document.getElementById('meme_1_text').style.transform = 'translate(-468px)';

                document.getElementById('meme_2_img').style.transform = 'translate(-640px)';
                document.getElementById('meme_2_text').style.transform = 'translate(-468px)';

                document.getElementById('meme_3_img').style.transform = 'translate(-640px)';
                document.getElementById('meme_3_text').style.transform = 'translate(-468px)';

                document.getElementById('meme_4_img').style.transform = 'translate(-640px)';
                document.getElementById('meme_4_text').style.transform = 'translate(-468px)';
                break;

            case 'meme_3_btn':
                document.getElementById('meme_1_img').style.transform = 'translate(-' + (640 * 2) + 'px)';
                document.getElementById('meme_1_text').style.transform = 'translate(-' + (468 * 2) + 'px)';

                document.getElementById('meme_2_img').style.transform = 'translate(-' + (640 * 2) + 'px)';
                document.getElementById('meme_2_text').style.transform = 'translate(-' + (468 * 2) + 'px)';

                document.getElementById('meme_3_img').style.transform = 'translate(-' + (640 * 2) + 'px)';
                document.getElementById('meme_3_text').style.transform = 'translate(-' + (468 * 2) + 'px)';

                document.getElementById('meme_4_img').style.transform = 'translate(-' + (640 * 2) + 'px)';
                document.getElementById('meme_4_text').style.transform = 'translate(-' + (468 * 2) + 'px)';
                break;

            case 'meme_4_btn':
                document.getElementById('meme_1_img').style.transform = 'translate(-' + (640 * 3) + 'px)';
                document.getElementById('meme_1_text').style.transform = 'translate(-' + (468 * 3) + 'px)';

                document.getElementById('meme_2_img').style.transform = 'translate(-' + (640 * 3) + 'px)';
                document.getElementById('meme_2_text').style.transform = 'translate(-' + (468 * 3) + 'px)';

                document.getElementById('meme_3_img').style.transform = 'translate(-' + (640 * 3) + 'px)';
                document.getElementById('meme_3_text').style.transform = 'translate(-' + (468 * 3) + 'px)';

                document.getElementById('meme_4_img').style.transform = 'translate(-' + (640 *3) + 'px)';
                document.getElementById('meme_4_text').style.transform = 'translate(-' + (468 *3) + 'px)';
                break;

            default:
                break;
        }

    })
})