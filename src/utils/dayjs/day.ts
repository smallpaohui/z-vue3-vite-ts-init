// 获取常用时间
import dayjs from "dayjs";
export const date = (time: any, format: string) => {
  return dayjs(time).format(format);
};
