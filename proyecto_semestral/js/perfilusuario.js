$(document).ready(function(){
    $(document).ready(function() {

        var pos = 0;

        var img1 = {
            src: 'http://www.todopaisajes.com/Imagenes/paisaje-rural-del-campo.jpg'
        };

        var img2 = {
            src: 'http://www.poesi.as/cuadros/mar.jpg'
        };

        var img3 = {
            src: 'http://www.royaltyfreelandscapesimages.com/imagenes/desierto/desierto_g/Atardecer-en-el-Desierto.jpg'
        };

        var images = [img1,img2,img3]; //Aqui deberas meter los objetos (que después serán imágenes) que desees que se muestren

        for (var i=0; i < images.length; i++) {
            var img = new Image(); //Creamos una imagen
            img.src = images[i].src; //Le metemos en el src la url del objeto
            images[i] = img; //Metemos la variable en forma de imagen (convertimos el objeto en una imagen)
        }

        $('#image').empty().append(images[pos]); //Inicialmente cargamos la primera imagen

        $("#cambiar").click(function() {
            pos++; //Sumamos una posición en el array
            if (pos > images.length-1) {pos = 0;} //Si el valor de pos es mayor que la posición máxima del array volvemos a 0
            $('#image').empty().append(images[pos]); //Limpiamos el div y le metemos la nueva imagen
        });
    });
});