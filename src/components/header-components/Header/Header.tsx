import React from "react";
import { Logo } from "../Logo/Logo";
import { AddMovie } from "./AddMovie";
import { FindMovie } from "./FindMovie";

export function Header() {
  return (
    <>
      {
        <header>
          <div className="header">
            <Logo />
            <AddMovie />
          </div>
          <FindMovie />
          <div className="header-bottom"></div>
        </header>
      }
    </>
  );
}
