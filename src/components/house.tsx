const promises = [
  {
    title: "Metal que se puede explicar",
    text: "Oro o plata, con el kilataje dicho de frente. Sin nombres raros para lo mismo.",
  },
  {
    title: "Piedras elegidas",
    text: "Se miran a la luz del taller, no se prometen desde una foto genérica.",
  },
  {
    title: "Tiempo acordado",
    text: "Si la pieza se encarga, la fecha se dice al empezar y se cumple.",
  },
];

export function House() {
  return (
    <section className="house">
      <div className="house-grid">
      <div className="house-copy reveal">
        <p className="eyebrow">Por qué esta casa</p>
        <h2>Una joyería se reconoce en cómo entrega, no en cuántas piezas muestra.</h2>
        <p>
          López es el apellido de la familia. La página existe para que alguien pueda
          acercarse antes de cruzar la puerta: ver el carácter de la casa, elegir una
          familia de piezas y dejar el encargo.
        </p>
      </div>
      <ul className="promise-list">
        {promises.map((item) => (
          <li key={item.title} className="reveal">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
