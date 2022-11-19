export const Tabla = ({ shiba }) => {
  const Juan = 742787.459;
  const Joseph = 461977.566;
  const Gerardo = 389510.497;
  const Daniel = 217401.208;
  return (
    <div>
      <img
        src="https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=023"
        alt="shiba logo"
        className="logo"
      />
      <h1>PRECIO EN TIEMPO REAL SHIBA</h1>
      <table className="table table-bordered table-dark table-striped table-hover text-white">
        <caption>
          <p className="text-center fst-italic">
            Ahora mismo un SHIB equivale a ${shiba} USD
          </p>
        </caption>
        <thead>
          <tr>
            <th>Persona</th>
            <th>Parte en dolares</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>J</td>
            <td>$ {(shiba * Juan).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Jo</td>
            <td>$ {(shiba * Joseph).toFixed(2)}</td>
          </tr>
          <tr>
            <td>G</td>
            <td>$ {(shiba * Gerardo).toFixed(2)}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>$ {(shiba * Daniel).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
