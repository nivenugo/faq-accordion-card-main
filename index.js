   $(".panel-heading").on('show.bs.collapse', function() {
      console.log("inside");
      $(this).find('img').addClass('flip-horizontally');
    });

    $('.panel-heading').on('hide.bs.collapse', function () {
        console.log("inside hide");
      $(this).find('img').removeClass('flip-horizontally');

    });
