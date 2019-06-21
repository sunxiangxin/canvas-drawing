class DrawingBoard{
    constructor(){
        this.ctx = null;
        this.dom = null;
        this.color = 'black';
        this.penWidth = 6;
        this.goods = '';
    }

    painting(canvas){
        canvas.style.cursor='hand'
        this.dom = canvas;
        if(!this.ctx){
            this.ctx=canvas.getContext("2d");  
        } 
        var that = this;
        canvas.onmousedown = function(e){
            that.cleanBoard();
            var x = e.clientX - canvas.parentNode.offsetLeft;
            var y = e.clientY - canvas.parentNode.offsetTop;
            that.ctx.beginPath();
            that.ctx.moveTo(x,y);
            that.ctx.strokeStyle = that.color;
            that.ctx.lineWidth = that.penWidth;
            document.onmousemove = function(e){
                var e=e||event;
                var x1= e.clientX- canvas.parentNode.offsetLeft;
                var y1= e.clientY- canvas.parentNode.offsetTop;
                that.ctx.lineTo(x1,y1);
                that.ctx.stroke();
            }
            document.onmouseup = function(){
                document.onmouseup = document.onmousemove = null;
            }
        }
    }
    //清除画布
    cleanBoard(canvas){
        if(canvas){
            canvas.height=canvas.height;  
        }
    }
 
    chooseColor(color){
        this.color = color;
    }
    chooseWidth(width){
        this.penWidth = width;
    }
    //下载画布
    downloadFile(canvas){
        var url = canvas.toDataURL('image/png');
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = '画布520.png';
        //执行下载
        a.click();
    }
    //鼠标图
    chooseCursor(canvas,goods){
        switch(goods){
            case 'pen':
                canvas.parentNode.classList.add("penStyle");
                canvas.parentNode.classList.remove("rubberStyle");
                break;
            case 'rubber':
                canvas.parentNode.classList.add("rubberStyle");
                canvas.parentNode.classList.remove("penStyle");
                break;
            default: 
                break;
        }
    }
}