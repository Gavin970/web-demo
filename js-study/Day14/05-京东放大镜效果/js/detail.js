let previewImg = document.querySelector('.preview_img');
let mask = document.querySelector('.mask');
let bigImg = document.querySelector('.big');

previewImg.addEventListener('mousemove',function (e){
    mask.style.display = 'block';
    bigImg.style.display = 'block';
    //获取鼠标距离小图盒子左侧和上方的位置
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    if (mouseX >= mask.offsetWidth / 2 && mouseX < this.offsetWidth - mask.offsetWidth / 2){
        //黄色选框跟随鼠标x轴移动
        mask.style.left = mouseX - mask.offsetWidth / 2 + 'px';
        bigImg.firstElementChild.style.left = -(mouseX - mask.offsetWidth / 2) * 2 + 'px';
    }
    if (mouseY >= mask.offsetHeight / 2 && mouseY < this.offsetHeight - mask.offsetHeight / 2){
        //黄色选框跟随鼠标y轴移动
        mask.style.top = mouseY - mask.offsetHeight / 2 + 'px';
        bigImg.firstElementChild.style.top = -(mouseY - mask.offsetHeight / 2) * 2 + 'px';
    }
})
previewImg.addEventListener('mouseout',function (){
    mask.style.display = 'none';
    bigImg.style.display = 'none';
})
