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
  function ModalWarning(){
      Swal.fire({
          title: "Deseja finalizar a compra?",
          text: "Você tem certeza disso??",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Finalizar!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Compra finaliza!",
              text: "Sua compra foi finalizada com sucesso!",
              icon: "success"
            });
          }
        });
  
  }
