            var frutadores = new Array(), frutAEmpujar,x = 0,encontrado; // El array contiene todos los datos, frutAEmpujar sirve para el push, x es un contador
            // constructor
            var frutador = function Frutador(tip,can,com){
                this.tipo = tip; // Cual fruta?
                this.cantidad = can; // Cuantas frutas?
                this.nombreDelComprador = com; // Nombre del comprador?
            };
            // Popup close
            function cerrarPop(){
                document.getElementById("pop").style.visibility = "hidden";
            };
            // Validador del form principal
            function validarForm(){
                // Paso a variables los datos de cada campo del formulario
                var tipo = document.getElementById("tipo").value;
                var cantidad = document.getElementById("cantidad").value;
                var comprador = document.getElementById("nombre").value;
                // Validacion simple, con un IF
                if(tipo!=="" && cantidad && comprador!==""){
                    console.log("Todo bien! form validado"); // Aviso que los datos fueron completados bien, via consola
                    // Formo el objeto y le paso via parametros los datos del formulario
                    frutAEmpujar = new frutador(tipo,cantidad,comprador);
                    frutadores.push(frutAEmpujar);
                // Si no se completaron bien los datos del formulario... largo una alerta al usuario.
                } else {
                    alert("Complete todos los campos por favor.");
                };
            };
            
            // Validador del form de estadisticas
            function revisarStats(){
                // Paso a variables el dato del formulario
                var statsNombre = document.getElementById("nombrestats").value;
                // Booleano donde se almacena la determinacion: se encontro el dato o no?
                encontrado = false;
                if(!frutadores[0]){ // Si es que ningun dato ha sido cargado
                    console.log("No se ha encontrado a " + statsNombre + " en la Mini DB.");
                } else { // En caso contrario comienza el bucle
                    do {
                        // Si llega a encontrarse lo buscado
                        if(frutadores[x].nombreDelComprador === statsNombre){
                            console.log("El comprador ha sido encontrado en la Mini DB.");
                            console.log(frutadores[x]);
                            encontrado = true; // Cambio determinante
                            document.getElementById("pop").style.visibility = "visible";
                            break;
                        };
                        encontrado = false; // No se cambia el determinante
                        x++;
                    } while (x < frutadores.length);
                };
                // Si la determinante sigue en false:
                if(encontrado === false){
                    console.log("No se ha encontrado a " + statsNombre + " en la Mini DB.");
                };
                // Reseteo la X
                x = 0;
            };
            
            // Agrego interactividad a los formularios
            window.onload = function(){
                // Selecciono los botones importantes y los almaceno en variables
                var botonSubmit = document.getElementById("env");
                var botonStats = document.getElementById("stats");
                var botonClosePop = document.getElementById("cerrar");
                // Al ser clickeado, cada uno ejecutara su propia funcion
                botonSubmit.onclick = validarForm;
                botonStats.onclick = revisarStats;
                botonClosePop.onclick = cerrarPop;
            };
