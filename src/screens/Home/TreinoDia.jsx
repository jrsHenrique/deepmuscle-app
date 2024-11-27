import * as React from "react";
import "./styles.scss";
import { useGet, useClient } from "../../utils/request.jsx";
import Loading from "../../components/Loading.jsx";
import { all } from "axios";

const TreinoDia = () => {
  const { data, isLoading } = useGet({ url: "users/get_day_exercises" });
  const today_date = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
  const all_categorys = [];
  data?.forEach((e) => {
    if (!all_categorys.includes(e.category)) all_categorys.push(e.category);
  });
  const client = useClient();
  const handleRefresh = () => {
    client.invalidateQueries({
      queryKey: ["users/get_day_exercises"],
    });
    client.invalidateQueries({
      queryKey: ["users/get_user_infos"],
    });
  };
  console.log(data);
  return (
    <Loading isLoading={isLoading} skeleton={{ height: 400 }}>
      {data && Object.keys(data) ? (
        <section className="treino-dia-card d-flex flex-column justify-content-center align-items-center">
          <span className="item-date">{today_date}</span>
          <div className="d-flex justify-content-center mt-1 gap-1 mb-1 align-items-center">
            <span className="item-up">
              {all_categorys.map((category, idx) => {
                return (
                  <React.Fragment key={idx}>
                    {category}
                    {idx == all_categorys.length - 1 ? "" : ", "}
                  </React.Fragment>
                );
              })}
            </span>
          </div>
          <section className="treinos-card d-flex flex-column">
            {data.map((e, idx) => (
              <span
                className="d-flex flex-column justify-content-center align-items-center mt-1"
                key={idx}
              >
                <span className="d-flex mt-1 gap-3">
                  <span className="d-flex">
                    <img src="assets/dumbbell.svg" width={20} />
                    Exercício {idx + 1}
                  </span>
                  <span>{e.series} - Séries </span>
                  <span>{e.reps} - Repetições </span>
                </span>
                <span className="d-flex w-100 justify-content-center align-items-center gap-2">
                  <span>{e.name}</span>
                </span>
              </span>
            ))}
          </section>
        </section>
      ) : (
        <section className="treino-dia-card d-flex flex-column">
          <span className="item-up">Nenhum treino disponível para hoje</span>
          <span className="item-up">
            Se você já fez seu cadastro e solicitou, aperte o botão abaixo e
            aguarde:
          </span>
          <button className="button" onClick={handleRefresh}>
            Solicitar treino
          </button>
        </section>
      )}
    </Loading>
  );
};

export default TreinoDia;
