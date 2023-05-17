export function Emma() {
    let name = prompt("Escribe tu nombre: ");
    if (name == "Marco" || name == "marco" || name == "fini") {
      return <h1>ESTE ES {name}</h1>;
    } else if (name == "salo" || name == "Salo" || name == "Agustin") {
      return <h1>Novio de jenna ortega</h1>;
    } else {
      return <h1>Y vos quien sos {name}???</h1>;
    }
  }