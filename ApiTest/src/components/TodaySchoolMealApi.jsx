import axios from "axios";
const key = import.meta.env.VITE_NEIS_KEY;

const API = axios.create({
  baseURL: "https://open.neis.go.kr/hub",
  headers: {
    "Content-Type": "application/json",
  },
});

const MealApi = async (date) => {
  try {
    const response = await API.get("/mealServiceDietInfo", {
      params: {
        KEY: key,
        Type: "json",
        pIndex: 1,
        pSize: 5,
        ATPT_OFCDC_SC_CODE: "G10",
        SD_SCHUL_CODE: 7430310,
        MLSV_YMD: date,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default MealApi;

//c43f08953fcd48ceba0efbabe945516e 인증키
