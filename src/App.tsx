import React from 'react';
import './main.global.css';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";

function AppComponent() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export const App = () =>
  <AppComponent />
;
