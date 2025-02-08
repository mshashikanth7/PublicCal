import { transform } from "framer-motion";
import "./Footer.css";
import { Scale } from "lucide-react";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div className="mt-5 fStyle b">
      <div
        className="text-center py-5 content"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) , rgba(0, 0, 0, 1) , rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.6) , rgba(0, 0, 0, 0.3) , rgba(0, 0, 0, 0))",
          color: "white",
          zIndex: 2,
          position: "relative", // Ensure zIndex works
        }}
      >
        <div className="row">
          <div className="col">
            <p className="text-center mt-4" style={{ fontSize: "20px" }}>
              <span
                style={{
                  fontSize: "30px",
                  fontFamily: "GF",
                  display: "inline-block",
                  // textShadow:
                  //   "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.8)",
                }}
              >
                Designed&nbsp;&nbsp;
              </span>
              <span>with</span>
              <Link
                href="/explore"
                underline="always"
                style={{ fontSize: "50px" }}
                className=" link-underline-opacity- link-underline-opacity-100-hover "
              >
                &nbsp;purpose&nbsp;
              </Link>
              <span>by M Shashikanth</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container pt-4 mt-5 p-5 ">
        <div className="row justify-content-center text-center">
          <div className="col-4 col-sm-8">
            <section className="mb-5 p-5">
              <a
                className="btn btna btn-link btn-floating btn-lg text-light m-1 "
                href="https://x.com/Shashik24942118"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class="i fa-brands fa-x-twitter"></i>
              </a>
              <a
                className="btn btna btn-link btn-floating btn-lg text-light m-1 "
                href="https://www.youtube.com/@gladiatorglittery2518"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class=" i fa-brands fa-youtube"></i>
              </a>

              <a
                className="btn btna btn-link btn-floating btn-lg text-light m-1"
                href="https://www.reddit.com/user/Human_Classic2978/?rdt=36405"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class=" i fa-brands fa-reddit-alien"></i>
              </a>
              <a
                className="btn btna btn-link btn-floating btn-lg text-light m-1"
                href="https://www.instagram.com/bubblicious_moon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                role="button"
                data-mdb-ripple-color="light"
              >
                <i className="i fab fa-instagram"></i>
              </a>
              <a
                className="btn btna btn-link btn-floating btn-lg text-light m-1"
                href="https://www.linkedin.com/in/shashikanth-mondkar-99aa47282"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i className="i fab fa-linkedin"></i>
              </a>
              <a
                className="btn btna btn-link btn-floating btn-lg text-light m-1"
                href="https://discord.gg/4VYq3N9c"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i className="i fab fa-github"></i>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
