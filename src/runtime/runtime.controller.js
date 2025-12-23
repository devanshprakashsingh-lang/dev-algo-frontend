// PHASE 5.5 — RUNTIME CONTROLLER

import { bootstrapApp } from "../bootstrap/app.bootstrap";
import { startRefreshLoop } from "./refresh.controller";

let runtimeStarted = false;

export function startRuntime() {
  if (runtimeStarted) return;

  bootstrapApp();
  startRefreshLoop();

  runtimeStarted = true;
}
