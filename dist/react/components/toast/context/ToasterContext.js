import { createContext as e, useContext as o } from "react";
const n = e(null);
function s() {
  const t = o(n);
  if (!t)
    throw new Error("Toast components must be used inside <Toaster />");
  return t;
}
export {
  n as ToasterContext,
  s as useToasterContext
};
