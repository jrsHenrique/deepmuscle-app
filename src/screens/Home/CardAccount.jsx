import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useGet, usePost, useClient, useQueryCache } from "../../utils/request";
import { logout } from "../Login/index.jsx";
import { useNavigate } from "react-router-dom";
import { QueryCache } from "@tanstack/react-query";

const ProgressLive = ({ treinoAtual, totalTreinos }) => {
  const progresso = (treinoAtual / totalTreinos) * 100;
  return (
    <div className="d-flex flex-column flex-fill mt-1">
      <div className="d-flex justify-content-between f12 fw-500">
        <p className="grayaf m-0">
          Treino {treinoAtual}/{totalTreinos}
        </p>
        <p className="purple mb-0">{progresso}%</p>
      </div>
      <ProgressBar now={progresso} striped animated />
    </div>
  );
};

export default function CardAccount({ setAuthenticated }) {
  const client = useClient();
  const queryCache = useQueryCache();
  const { isLoading, data } = useGet({ url: "users/get_user_infos" });
  const { isLoading: isLoadingWorkout, mutate } = usePost({
    url: "users/update_workout_day",
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(setAuthenticated, navigate);
    client.invalidateQueries();
    queryCache.clear();
  };

  const handleNextWorkout = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          client.invalidateQueries({
            predicate: (query) =>
              query.queryKey[0] === "users/get_user_infos" ||
              query.queryKey[0] === "users/get_all_user_exercises" ||
              query.queryKey[0] === "users/get_day_exercises",
          });
        },
      }
    );
  };
  return (
    <Loading isLoading={isLoading} skeleton={{ height: 200 }}>
      {data && (
        <section className="card-welcome bg-blue28 mt-4">
          <article className="d-flex w-100">
            <div className="d-flex flex-column align-items-center">
              <div className="rounded-avatar">
                <img
                  src={`/assets/avatars/1.svg`}
                  width={55}
                  onError={(e) => (e.target.src = "/assets/default-avatar.svg")}
                />
              </div>
            </div>
            <div
              className="d-flex flex-column flex-1 ps-2"
              style={{ width: 100 }}
            >
              <div className="d-flex gap-4">
                <span className="f18 fw-500 white text-start one-liner d-block">
                  Bem vindo, <span className="blue">{data.full_name}</span>!{" "}
                </span>
                <button className="red" onClick={handleLogout}>
                  Sair da conta
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-start gap-3 mt-2">
                <div>
                  <span className="f12 fw-400 grayf0">
                    Nível:{" "}
                    {data.exercise_level == "Diariamente" ||
                    data.exercise_level == "Avançado"
                      ? "Professor Jhonny"
                      : data.exercise_level}
                  </span>
                </div>
                <div>
                  <span className="f12 fw-400 yellow">
                    Altura: {data.height} cm
                  </span>
                </div>
                <div>
                  <span className="f12 fw-400 yellow">
                    Peso: {data.weight} kg
                  </span>
                </div>
              </div>
              <button className="button_home bg-blue28 white text-decoration-none mt-3">
                <span className="f12 fw-300" onClick={handleNextWorkout}>
                  Clique aqui se já fez seu treino de hoje!
                </span>
              </button>
            </div>
          </article>
          <ProgressLive
            treinoAtual={data.current_workout_day}
            totalTreinos={5}
          />
        </section>
      )}
    </Loading>
  );
}
