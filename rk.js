$(() => {
    $(".fa.fa-heart").on('click', () => {
      $('.fa.fa-heart').toggleClass('liked');
    });
  });