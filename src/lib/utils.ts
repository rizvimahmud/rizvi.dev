import { format, parseISO } from "date-fns";

export const throttle = (fn: () => void, delay: number) => {
  let lasttime: number;
  return (...args: []) => {
    const now = new Date().getTime();
    if (now < lasttime - delay) return;
    lasttime = now;
    fn(...args);
  };
};

export function formatDate(date: string) {
  return format(parseISO(date), "MMMM, yyyy");
}
