$(document).ready(function(){

    $.ajax({
        url: "http://localhost:3000/api/products",
        type: "get",
        dataType: "JSON"
    })
    .done(function(response){
        let data = response.data;
        let status = response.status;

        if(status){
            createTbody(data);
        }
        else{
            alert(false, "Πρόβλημα στην αναζήτηση Προϊόντων (" + data.message + ")");
        }
    });

    $(".btn").off("click", ".btnSubmit").on("click", ".btnSubmit", function(){
        let product = $("#productName").val();
        let cost = $("#productCost").val();
        let description = $("#productDescription").val();
        let quantity = $("#productQuantity").val();

        const item = {
        'product': product,
        'cost': cost,
        'description': description,
        'quantity': quantity,
        }
        console.log(item);

        console.log($('.btnSubmit').val(), item);
        $.ajax({
        url: "http://localhost:3000/api/products",
        type: "post",
        data: item,
        dataType: "JSON",
        })
        .done( function(response) {
        
        let data = response.data;
        let status = response.status
    
        if (status) { 
            console.log(true,'Επιτυχής εισαγωγή του προϊόντος');
            $('#frmProduct')[0].reset();
            window.location.replace("http://localhost:3000/view/products.html")
        } else {
            console.log(false,'Πρόβλημα στην εισαγωγή του προϊόντος ('+ data.message + ')');
            $('#frmProduct')[0].reset();
        }
        });

        return false
    });

});



function createTbody(data){

    $("#productTable > tbody").empty();
  
    const len = data.length;
    for (let i=0; i<len; i++){
      let product = data[i].product;
      let cost = data[i].cost;
      let description = data[i].description;
      let quantity = data[i].quantity;
  
      let tr_str = "<tr>" +
        "<td>" + product + "</td>" +
        "<td>" + cost + "</td>" +
        "<td>" + description + "</td>" +
        "<td>" + quantity + "</td>" +
        "</tr>";
  
      $("#productTable tbody").append(tr_str);
    }
  }
  
