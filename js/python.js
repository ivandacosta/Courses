const addBoton = document.getElementById("boton-agregar")

addBoton.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Redireccion al medio de pago',
        text: "Quieres seguir con la operacion?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Pagar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Redireccionando...',
            'Aguarde un instante',
            'info'
          )
          setInterval(() => {
            window.location.replace("https://mercadopago.com.ar")
          }, 3000);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'No fuiste redireccionado.',
            'success'
          )
        }
      })  
})