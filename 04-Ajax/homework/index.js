



    $("#boton").click(function(){
        showlist();
        });
    function showlist(){
        let lista=$('#lista')
        lista.empty();
        $.get(`http://localhost:5000/amigos`,function (data) {
         for (let i = 0; i < data.length; i++) {
         let nuevoli= document.createElement("li"); 
         nuevoli.innerHTML=`${data[i].name} <button>x</button>`;
         let container= document.getElementById("lista");
         container.appendChild(nuevoli);
         };
         }
    )
    }
    /*$("#boton").click(()=>{
        let lista=$('#lista')
        lista.empty();
        $.get(`http://localhost:5000/amigos`,data => {
         for (let i = 0; i < data.length; i++) {
         let nuevoli= `<li>${data[i].name}</li>`
         lista.append(li);
         };
         }
    )});
    */


$("#search").click(function(){
    $.get(`http://localhost:5000/amigos`,function (data) {
        let id=$("#input").val();
        let nuevoli= document.createElement("l1"); 
        nuevoli.innerHTML=data[id].name;
        let container= document.getElementById("amigo");
        container.appendChild(nuevoli);
    }
    )});
/*$("#boton").click(()=>{
        let id=$('#input').val();
        $.get(`http://localhost:5000/amigos`,data => {
        $("#amigo").text(data.name) 
        }
    )});
*/



    $("#delete").click(()=>{
        let id = $('#inputDelete').val();
        $.ajax({
            url: `http://localhost:5000/amigos/${id}`,
            type: "DELETE",
            success: response =>{
                let text= document.createElement("l1"); 
                text.innerHTML="tu amigo fue sacado con exito de la lista"
                let container= document.getElementById('sucess');
                container.appendChild(text);
            }
            
          });
          showlist();
    });
/*
    $("#delete").click(()=>{
        let id = $('#inputDelete').val();
        $.ajax({
            url: `http://localhost:5000/amigos/${id}`,
            type: "DELETE",
            success: () =>{
                &("#succes").text("tu amigo fue sacado con exito de la lista")
            }
          });
    });
*/