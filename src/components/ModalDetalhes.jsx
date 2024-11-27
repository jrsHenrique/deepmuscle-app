import Modal from "react-bootstrap/Modal";

export const ModalDetalhes = ({ show, onHide, treinos }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body className="modal-descricao">
        {/* Descrição do Treino */}
        <div className="text-block mb-4">
          <h5 className="text-title">Descrição do Treino</h5>
          {/* <p className="text-content">
            {treinos.description || "Descrição geral do treino não disponível."}
          </p> */}
        </div>

        {/* Tabela com os Treinos */}
        {treinos && treinos.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Exercício</th>
                  <th>Séries</th>
                  <th>Repetições</th>
                </tr>
              </thead>
              <tbody>
                {treinos.map((treino, index) => (
                  <tr key={index}>
                    <td>{treino.name}</td>
                    <td>{treino.series}</td>
                    <td>{treino.reps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-muted">Nenhum treino disponível para exibição.</p>
        )}

        {/* Botão OK */}
        <button className="btn-modal bg-blue white w-25" onClick={onHide}>
          OK
        </button>
      </Modal.Body>
    </Modal>
  );
};
