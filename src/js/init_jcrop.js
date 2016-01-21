
      function readURL(input) {
             if (input.files && input.files[0]) {
                 var reader = new FileReader();

                 reader.onload = function mail (e) {
                     $('#target, .jcrop-holder img').attr('src', e.target.result);
                    $('#target').Jcrop();

                 };

                 reader.readAsDataURL(input.files[0]);
             }
         }
         $('#image-input').on('change', function () {
          readURL(this);

         });
