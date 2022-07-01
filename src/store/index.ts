import { createPinia } from "pinia";
const store = createPinia();
export { store };
export * from "@/store/modules/user";
export default store;
