document.querySelectorAll('.container_btn .btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.container_btn .btn').forEach((btn) => {
            btn.classList.remove('btn-select');
        });
        btn.classList.toggle('btn-select');
        console.log(btn.id);

        const containerWidth = document.getElementById('imgs').getBoundingClientRect().width;
        const containerWidthText = document.getElementById('texts').getBoundingClientRect().width;
        console.log(containerWidth);
        console.log(containerWidthText);

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

        const imgOffset = containerWidth * offsetMultiplier;
        const textOffset = containerWidthText * offsetMultiplier;
        console.log(textOffset);
        
        document.querySelectorAll('#imgs .img').forEach((img) => {
            img.style.transform = `translate(-${imgOffset}px)`;
        });

        document.querySelectorAll('#texts .text').forEach((text) => {
            text.style.transform = `translate(-${textOffset}px)`;
        });
    });
});