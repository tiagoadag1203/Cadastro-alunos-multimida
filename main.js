function menuShow(){
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
  } else{
    menuMobile.classList.add('open');
  }
}


function acao(){
  let fade = document.querySelector('.fade')
  fade.style.display = 'block';

  let modal = document.querySelector('.tela--cadastro')
  modal.style.display = 'block';
}


function fechar(){
  let fade = document.querySelector('.fade')
  fade.style.display = 'none';

  let modal = document.querySelector('.tela--cadastro')
  modal.style.display = 'none';

}