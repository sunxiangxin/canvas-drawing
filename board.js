class DrawingBoard{
    constructor(){
        this.ctx = null;
        this.dom = null;
        this.color = 'black';
        this.penWidth = 6;
    }

    painting(ele){
        ele.style.cursor='hand'
        this.dom = ele;
        if(!this.ctx){
            this.ctx=ele.getContext("2d");  
        } 
        var that = this;
        ele.onmousedown = function(e){
            that.cleanBoard();
            var x = e.clientX - ele.parentNode.offsetLeft;
            var y = e.clientY - ele.parentNode.offsetTop;
            that.ctx.beginPath();
            that.ctx.moveTo(x,y);
            that.ctx.strokeStyle = that.color;
            that.ctx.lineWidth = that.penWidth;
            document.onmousemove = function(e){
                var e=e||event;
                var x1= e.clientX- ele.parentNode.offsetLeft;
                var y1= e.clientY- ele.parentNode.offsetTop;
                that.ctx.lineTo(x1,y1);
                that.ctx.stroke();
            }
            document.onmouseup = function(){
                document.onmouseup = document.onmousemove = null;
            }
        }
    }
    //清除画布
    cleanBoard(ele){
        if(ele){
            ele.height=ele.height;  
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

}