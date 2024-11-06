import React from "react";
import {storesContext} from "../stores/RootStore.tsx";

export const useRootStore = () => React.useContext(storesContext);