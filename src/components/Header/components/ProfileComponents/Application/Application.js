import React, { useState } from "react";
import cl from "./Application.module.scss";
import human from "../../../../../assets/images/human.png";
const Application = () => {
  const [status, setStatus] = useState("rejeckted");
  return (
    <>
      <section className={cl.application}>
        <h2>Ваши Заявки</h2>
        <aside className={cl.applicationCont}>
          <div className={cl.title}>
            <h3>Учреждения</h3>
            <h3>Дата Заявки</h3>
            <h3>Статус Заявок</h3>
          </div>
          <div className={cl.content}>
            <span>
              <img src={human} alt="" />
              <h5>Первый уник</h5>
            </span>
            <span>
              <p>04 Dec 2019</p>
            </span>
            {status === "approved" ? (
              <button>Принято</button>
            ) : status === "rejeckted" ? (
              <button style={{ color: "red", borderColor: "red" }}>
                Отклонено
              </button>
            ) : status === "pending" ? (
              <button
                style={{
                  color: "#FFAB00",
                  border: "1px solid  ",
                  borderColor: "#FFAB00",
                }}
              >
                В ожидании
              </button>
            ) : (
              <button>Неизвестный статус</button>
            )}
          </div>
          <div className={cl.content}>
            <span>
              <img src={human} alt="" />
              <h5>Первый уник</h5>
            </span>
            <span>
              <p>04 Dec 2019</p>
            </span>
            {status === "approved" ? (
              <button>Принято</button>
            ) : status === "rejeckted" ? (
              <button style={{ color: "red", borderColor: "red" }}>
                Отклонено
              </button>
            ) : status === "pending" ? (
              <button
                style={{
                  color: "#FFAB00",
                  border: "1px solid  ",
                  borderColor: "#FFAB00",
                }}
              >
                В ожидании
              </button>
            ) : (
              <button>Неизвестный статус</button>
            )}
          </div>
          <div className={cl.content}>
            <span>
              <img src={human} alt="" />
              <h5>Первый уник</h5>
            </span>
            <span>
              <p>04 Dec 2019</p>
            </span>
            {status === "approved" ? (
              <button>Принято</button>
            ) : status === "rejeckted" ? (
              <button style={{ color: "red", borderColor: "red" }}>
                Отклонено
              </button>
            ) : status === "pending" ? (
              <button
                style={{
                  color: "#FFAB00",
                  border: "1px solid  ",
                  borderColor: "#FFAB00",
                }}
              >
                В ожидании
              </button>
            ) : (
              <button>Неизвестный статус</button>
            )}
          </div>
          <div className={cl.content}>
            <span>
              <img src={human} alt="" />
              <h5>Первый уник</h5>
            </span>
            <span>
              <p>04 Dec 2019</p>
            </span>
            {status === "approved" ? (
              <button>Принято</button>
            ) : status === "rejeckted" ? (
              <button style={{ color: "red", borderColor: "red" }}>
                Отклонено
              </button>
            ) : status === "pending" ? (
              <button
                style={{
                  color: "#FFAB00",
                  border: "1px solid  ",
                  borderColor: "#FFAB00",
                }}
              >
                В ожидании
              </button>
            ) : (
              <button>Неизвестный статус</button>
            )}
          </div>
        </aside>
      </section>
    </>
  );
};

export default Application;
