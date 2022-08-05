
let cantidadVecesQuerer = 0;

function mensajes() {

    //debugger
    if (cantidadVecesQuerer > 1) {

        Swal.fire({
            title: ':_(',
            text: 'Weyyyy yaaaa se va a dañar el programa',
            imageUrl: 'data:image/jpeg;base64,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',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        }).then((result)=>{
            cantidadVecesQuerer = 0
            mensajes();
        })
    } else {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Quieres estar conmigo?',
            text: "Soy celoso,amoroso,tierno y a ratos me pongo bravo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'No ',
            cancelButtonText: 'Con dudas ?',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'No espero un no por respuesta en este momento',
                    text: "asi que te lo pregunto otra vez",
                    icon: 'question',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '"T.Q.M"'
                }).then((result) => {
                    if (result.isConfirmed) {
                        cantidadVecesQuerer += 1;
                        mensajes();
                    }
                })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'no hay porque hacerlo, realmente la quiero',
                    'simplemente quiero hacerla feliz ',
                ).then(()=>{
                    window.location.href = "../Aleja/aleja2.html";
                })
            }
        })
    }



    console.log(cantidadVecesQuerer);
}

