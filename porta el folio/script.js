function mostrarSeccion(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  function verDetalle(docId) {
    mostrarSeccion("detalle");

    let titulo = document.getElementById("titulo-detalle");
    let contenedor = document.getElementById("imagen-detalle");
    let desc = document.getElementById("descripcion-detalle");

    contenedor.innerHTML = "";

    if (docId === "doc1") {
        titulo.innerText = "Legendary motorsport";

        let img1 = document.createElement("img");
        
        img1.style.display = "block";
        img1.style.marginBottom = "0px";

        let img2 = document.createElement("img");
       
        img2.style.display = "block";

        contenedor.appendChild(img1);
        contenedor.appendChild(img2);

        desc.innerText = "Este es un documento de publicidad creado en agosto 2025.";
    } else if (docId === "doc2") {
        titulo.innerText = "Documento 2";

        let img = document.createElement("img");
        img.src = "https://via.placeholder.com/600x400";
        img.style.display = "block";
        contenedor.appendChild(img);

        desc.innerText = "Documento relacionado .";
    } else if (docId === "doc3") {
        titulo.innerText = "Documento 3";

        let img = document.createElement("img");
        
        img.style.display = "block";
        contenedor.appendChild(img);

        desc.innerText = "Otro documento de prueba.";
    }
  }

  function filtrar(tipo) {
    let docs = document.querySelectorAll("#lista-documentos .documento");

    document.querySelectorAll(".filtros li").forEach(li => li.classList.remove("active"));
    document.querySelector(`.filtros li[onclick="filtrar('${tipo}')"]`).classList.add("active");

    docs.forEach(doc => {
      doc.style.display = "block";
      if (tipo === "publicidad" && doc.dataset.tipo !== "publicidad") {
        doc.style.display = "none";
      } else if (tipo === "comercio" && doc.dataset.tipo !== "comercio") {
        doc.style.display = "none";
      } else if (tipo === "tareas" && doc.dataset.tipo !== "tareas") {
        doc.style.display = "none";
      }
    });

    if (tipo === "reciente" || tipo === "antiguo") {
      let lista = document.getElementById("lista-documentos");
      let items = Array.from(docs);
      items.sort((a, b) => {
        let fechaA = new Date(a.dataset.fecha);
        let fechaB = new Date(b.dataset.fecha);
        return tipo === "reciente" ? fechaB - fechaA : fechaA - fechaB;
      });
      lista.innerHTML = "";
      items.forEach(item => lista.appendChild(item));
    }
  }