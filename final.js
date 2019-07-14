var product = $.ajax({
  url:"https://my-json-server.typicode.com/ymoyam/API/productos",//esto es para consumir la swapi
  //esto es para consumir la swapi
  //"https://my-json-server.typicode.com/gody/digitalFactory_catalog/productos",//esto es para consumir la swapi
  method:"GET"//metodo a ocupar
});

product.done(function(data){ //repsuesta positiva como s emostrara


  data.forEach(function(item, index){//esto generara tantos objetos tenga el arreglo
    if($('#'+item.categoria)){
      $('#'+item.categoria).append('<div class="col-md-4">' + '<div class="thumbnail">' + '<div class="caption">' +
        '<h2 class="nom">'+item.nombre+'</h2>' +
        '<img class ="photo" src= "'+item.imagen+'"/>'+
        '<p class="pre"> Precio: '+item.precio+'</p>' +
        '<p>  Descrpcion: '+item.caracteristicas+'</p>' +
        '<a href="#" class="btn btn-primary" id="agregar" role="button">Agregar al Carro</a>' +
        '</div>' +
         '</div>');
    }

  });
});

product.fail(function(error){
  console.log(error);
});



  $('#buton').click(function(){
    var nombre= $('#fnombre').val();
    var email= $('#email').val();
    var comentario= $('#comentarios').val();
    var emailReg = new RegExp (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);


    if(nombre == ""){

      alert('debe colocar su nombre completo')

    }

    if(!emailReg.test(email)){
      alert('email no es valido')



    }
      if(comentario == "" || comentario.length < 5){
        alert('escribir al menos 10 caracteres')
    }

  });

  //carrito de compras(los que tienen 1 son los del signo de $)

  var items = $('#items');//esta id esta en el html en un <main>
  var carriro = [];// declaro un arreglo vacio que contendra los articulos a comprar
  var total = 0;// esta variable almacenara el suma de os precios de los articulos
  var carrito1 = $('#carrito');//este id esta en el html dentro de un <ul>
  var total1 = $('#total');//este id esta en el html dentro de un <span>

 
