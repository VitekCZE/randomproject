import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="z-0 flex min-h-[154px] w-full max-w-[1439px] flex-col items-stretch justify-center mt-12 px-20 py-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="text-[#faba00] text-2xl font-[612] leading-[1.1] self-stretch my-auto">
          <span style={{ fontWeight: 700, color: "rgba(45,175,229,1)" }}>
            prodej
          </span>
          <span style={{ fontWeight: 700, color: "rgba(255,255,255,1)" }}>
            hudbu
          </span>
          <span style={{ fontWeight: 700, color: "rgba(45,175,229,1)" }}>
            .cz
          </span>
        </div>
        <div className="self-stretch flex min-w-60 gap-5 text-sm text-neutral-100 font-normal leading-[1.3] flex-wrap my-auto max-md:max-w-full">
          <div>
            <span style={{ color: "rgba(245,245,245,1)" }}>©</span>
            <span
              style={{
                fontFamily:
                  "Atyp Text TRIAL, -apple-system, Roboto, Helvetica, sans-serif",
                color: "rgba(245,245,245,1)",
              }}
            >
              {" "}
              Copyright 2025 Supraphon
            </span>
          </div>
          <Link
            to="/terms"
            className="underline decoration-solid decoration-auto underline-offset-auto underline hover:text-[rgba(45,175,229,1)] transition-colors"
          >
            Terms & conditions
          </Link>
          <Link
            to="/gdpr"
            className="underline decoration-solid decoration-auto underline-offset-auto underline hover:text-[rgba(45,175,229,1)] transition-colors"
          >
            GDPR
          </Link>
          <Link
            to="/cookies"
            className="underline decoration-solid decoration-auto underline-offset-auto underline hover:text-[rgba(45,175,229,1)] transition-colors"
          >
            Cookies policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
