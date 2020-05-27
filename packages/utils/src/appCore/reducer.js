import { handleActions } from "redux-actions";
import { setIDNameMap, setPageName, toggleSidebarMenu } from "./actions";

export const getSidebarState = () => localStorage.getItem("sidebarState");

const initialSidebarState = getSidebarState();

export const initialState = {
  idNameMap: {},
  pageName: "SMST",
  isSidebarOpened:
    initialSidebarState === null || initialSidebarState == 0 ? false : true
};

export const onSetPageName = (state, { payload }) => ({
  ...state,
  pageName: payload
});

export const onSetIDName = (state, { payload }) => {
  const { id, name } = payload;
  let idNameMap = state.idNameMap;
  idNameMap[id] = name;
  return {
    ...state,
    idNameMap
  };
};

export const onToggleSidebarMenu = state => {
  const currentSidebarState = !state.isSidebarOpened;
  localStorage.setItem("sidebarState", currentSidebarState ? 1 : 0);
  return {
    ...state,
    isSidebarOpened: currentSidebarState
  };
};

export default handleActions(
  {
    [setIDNameMap]: onSetIDName,
    [setPageName]: onSetPageName,
    [toggleSidebarMenu]: onToggleSidebarMenu
  },
  initialState
);
