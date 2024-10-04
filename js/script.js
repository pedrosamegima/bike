function ModalSuccess(){
    Swal.fire({
        title: "Deseja adicionar ao carrinho?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sim, eu quero!",
        denyButtonText: `Não, eu não quero!`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Adicionado com sucesso!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Não foi possivel adicionar o produto!", "", "info");
        }
      });
    }
