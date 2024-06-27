var bckdrop = document.querySelector('.modal-backdrop');
if(bckdrop){
    bckdrop.onclick = function(){
        document.querySelector('.modal.show').classList.remove('show');
    }
}
var modal_btn = document.querySelectorAll('.main-content-items-item');
if(modal_btn){
    modal_btn.forEach(function(key, value){
        key.onclick = function(){
            document.querySelector('.modal#form').classList.add('show');
        }
    })
}

var cl = document.querySelectorAll('.modal-head');
if(cl){
    cl.forEach(function(key, value){
        key.onclick = function(){
            key.parentNode.parentNode.classList.remove('show');
        }
    })
}

var send_btn = document.querySelector('.modal#form .modal-form-item.full.modal-btn-block');
if(send_btn){
    send_btn.onclick = function(){
        document.querySelector('.modal#form').classList.remove('show');
        document.querySelector('.modal#thank-you').classList.add('show');
    }
}

var more_btn = document.querySelector('.modal#thank-you .modal-form-item.full.modal-btn-block');
if(more_btn){
    more_btn.onclick = function(){
        document.querySelector('.modal#thank-you').classList.remove('show');
    }
}