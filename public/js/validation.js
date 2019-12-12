$(function(){
  $('#form').submit(function(event){
    const cotacao = $('#cotacao').val()
    const quantidade = $('#quantidade').val()
    if (cotacao.length === 0) {
      event.preventDefault()
      $('#cotacao-validacao').removeAttr('hidden')
    } else {
      $('#cotacao-validacao').attr('hidden', 'true')
    }

    if (quantidade.length === 0) {
      event.preventDefault()
      $('#quantidade-validacao').removeAttr('hidden')
    } else {
      $('#quantidade-validacao').attr('hidden', 'true')
    }
  })
})