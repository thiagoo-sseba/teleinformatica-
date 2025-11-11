function mostrarSeccion(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  function verDetalle(docId) {
    mostrarSeccion('detalle');
    let titulo = document.getElementById("titulo-detalle");
    let img = document.getElementById("imagen-detalle");
    let desc = document.getElementById("descripcion-detalle");

    if (docId === "doc1") {
      titulo.innerText = "Documento 1";
      img.src = "https://via.placeholder.com/600x400";
      desc.innerText = "Este es un documento de publicidad creado en agosto 2025.";
    } else if (docId === "doc2") {
      titulo.innerText = "Documento 2";
      img.src = "https://via.placeholder.com/600x400";
      desc.innerText = "Documento relacionado con un comercio.";
    } else if (docId === "doc3") {
      titulo.innerText = "Documento 3";
      img.src = "https://via.placeholder.com/600x400";
      desc.innerText = "Este documento corresponde a una tarea académica.";
    } else {
      titulo.innerText = "Documento extra";
      img.src = "https://via.placeholder.com/600x400";
      desc.innerText = "Detalle de documento adicional.";
    }
  }

  function filtrar() {
    let seleccionados = Array.from(document.querySelectorAll("input[name='tipo']:checked")).map(cb => cb.value);
    let orden = document.querySelector("input[name='orden']:checked").value;

    let docs = document.querySelectorAll("#lista-documentos .documento");

    docs.forEach(doc => {
      let tipo = doc.dataset.tipo;
      if (seleccionados.length === 0 || seleccionados.includes(tipo)) {
        doc.style.display = "block";
      } else {
        doc.style.display = "none";
      }
    });

    let lista = document.getElementById("lista-documentos");
    let items = Array.from(docs).filter(doc => doc.style.display !== "none");
    items.sort((a, b) => {
      let fechaA = new Date(a.dataset.fecha);
      let fechaB = new Date(b.dataset.fecha);
      return orden === "reciente" ? fechaB - fechaA : fechaA - fechaB;
    });
    lista.innerHTML = "";
    items.forEach(item => lista.appendChild(item));
  }