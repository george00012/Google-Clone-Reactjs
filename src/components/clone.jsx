import "./clone.css";
import imagen from "../components/img/image_search_FILL0_wght400_GRAD0_opsz24.png";
import search from "../components/img/search_FILL0_wght400_GRAD0_opsz24.png";
import voice from "../components/img/keyboard_voice_FILL0_wght400_GRAD0_opsz24.png";
import React, { useEffect } from "react";

function Clone() {
  // Mueve la declaración del manejador de búsqueda fuera de SearchGoogle
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada.
    // Obtener la consulta del input
    const query = event.target.query.value;
    // Redirigir al usuario a la URL de búsqueda de Google Custom Search con la consulta
    window.location.href = `https://cse.google.com/cse?cx=f71663c08e15342f2&q=${encodeURIComponent(query)}`;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=f71663c08e15342f2";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="general">
      <header>
        <div className="header-info">
          <nav>
            <ul>
              <li>
                <a href="/" target="_blank">
                  Sobre Google
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Tienda
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-redes">
          <nav>
            <ul>
              <li>
                <a href="/" target="_blank">
                  Gmail
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Imagenes
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="contain">
        <h1 className="google-text">
          <span className="g">G</span>
          <span className="o1">o</span>
          <span className="o2">o</span>
          <span className="g2">g</span>
          <span className="l">l</span>
          <span className="e">e</span>
        </h1>
        <div className="search">
          <img src={search} alt="search"></img>
          {/* Elimina la URL incorrecta en el atributo 'action' del formulario */}
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="gcse-search"
              placeholder="Buscar en Google"
              name="query"
            />
          </form>
          <img src={voice} alt="voice"></img>
          <img src={imagen} alt="imagen"></img>
        </div>
        <div className="search-botons">
          <button>Buscar con Google</button>
          <button>Buscar con Google</button>
        </div>
      </main>
    </div>
  );
}

export default Clone;
