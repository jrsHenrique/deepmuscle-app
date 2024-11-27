import * as React from "react";
import "./styles.scss";
import { useShow } from "../../utils/request.jsx";
import { ModalDetalhes } from "../../components/ModalDetalhes.jsx";
import { useGet } from "../../utils/request.jsx";
import Loading from "../../components/Loading.jsx";
import uniq from "lodash/uniq";

const Treinos = () => {
  const [selectedWorkout, setSelectedWorkout] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const { show, hide, visible } = useShow();
  const { data: userInfo, isLoading: isLoadingInfo } = useGet({
    url: "users/get_user_infos",
  });
  const { data, isLoading } = useGet({ url: "users/get_all_user_exercises" });
  const days_dict = {
    "Segunda-feira": 1,
    "Terça-feira": 2,
    "Quarta-feira": 3,
    "Quinta-feira": 4,
    "Sexta-feira": 5,
  };
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  const today = new Date();
  const next_workouts = [];
  data &&
    Object.keys(days_dict).forEach((day) => {
      if (days_dict[day] >= userInfo?.current_workout_day) {
        next_workouts.push(data[day]);
      }
    });
  const handleShowModal = (workout) => {
    setSelectedWorkout(workout);
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
    setSelectedWorkout(null);
  };

  return (
    <Loading isLoading={isLoading} skeleton={{ height: 500 }}>
      {next_workouts && (
        <section className="treinos">
          {next_workouts.map((workout, idx) => (
            <section className="treino-card d-flex flex-column" key={idx}>
              <span className="item-up item-date">
                {today.addDays(idx).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </span>
              {uniq(workout.map((e) => e.category)).map((category, idx) => (
                <span key={idx} className="item-up text-center">
                  {category}
                </span>
              ))}
              <span className="d-flex align-items-center">
                <img src="assets/dumbbell_white.svg" width={15} />
                <span
                  className="details-button"
                  onClick={() => handleShowModal(workout)}
                >
                  Mais detalhes
                </span>
              </span>
            </section>
          ))}
        </section>
      )}

      {selectedWorkout && (
        <ModalDetalhes
          show={modalVisible}
          onHide={handleHideModal}
          treinos={selectedWorkout}
        />
      )}
    </Loading>
  );
};

export default Treinos;
