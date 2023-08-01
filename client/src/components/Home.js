import React from 'react';
import { Link} from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div
          className="image"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDcMQIDqtkXtO33Ja-Qk_6-686Ts9x8NQ7g&usqp=CAU"
            alt=""
          ></img>
        </div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 10px 10px 10px",
          }}
        >
          Indian Institute of Information Technology, Pune
        </h1>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 10px 10px 10px",
          }}
        >
          Your On-Boarding Process in completed.
        </h3>
        <h6
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 10px 10px 10px",
          }}
        >
          You can visit Indian Institute of Information Technology, Pune Website
          for more information regarding Institute.
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.iiitp.ac.in/"
            target="_blank"
            rel="noreferrer"
            class="btn btn-danger "
            role="button"
          >
            IIIT Pune
          </a>
          {localStorage.getItem("token") && (
            <Link
              className="btn btn-danger mx-1"
              to="/profile"
              role="button"
              style={{}}
            >
              YOUR PROFILE
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
