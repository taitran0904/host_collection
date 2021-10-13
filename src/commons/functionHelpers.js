import * as cts from "../constants/ui/myPage";

export const japanDate = d => {
  const date = new Date(d);

  return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
};

export const convertZodiac = zodiac => {
  const arr = [
    { id: "aquarius", value: cts.AQUARIUS },
    { id: "pisces", value: cts.PISCES },
    { id: "aries", value: cts.ARIES },
    { id: "taurus", value: cts.TAURUS },
    { id: "gemini", value: cts.GEMINI },
    { id: "cancer", value: cts.CANCER },
    { id: "leo", value: cts.LEO },
    { id: "virgo", value: cts.VIRGO },
    { id: "libra", value: cts.LIBRA },
    { id: "scorpio", value: cts.SCORPIO },
    { id: "sagittarius", value: cts.SAGITTARIUS },
    { id: "capricorn", value: cts.CAPRICORN }
  ];

  const result = arr.find(i => i.id === zodiac);

  if (result) {
    return result.value;
  }
};

export const convertDateTime = d => {
  const date = new Date(d);

  return `${date.getHours()}:${date.getMinutes()}, ${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
};

export function formatMoney(val) {
  let value = parseInt(val || 0, 10);
  return value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
