import styled from "styled-components";
import { useEffect, useState } from "react";
import MealApi from "../components/TodaySchoolMealApi";

function TodaySchoolMeal() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    const load = async () => {
      const res = await MealApi(today);

      const Meal = res.data.mealServiceDietInfo?.[1]?.row;
      setMeal(Meal || []);
    };

    load();
  }, []);

  const breakfast = meal[0]?.DDISH_NM?.split("<br/>") || [];
  const lunch = meal[1]?.DDISH_NM?.split("<br/>") || [];
  const dinner = meal[2]?.DDISH_NM?.split("<br/>") || [];

  return (
    <>
      <h1>대덕소프트웨어마이스터고등학교 급식</h1>
      <h2>{new Date().toLocaleDateString()}</h2>

      <Meals>
        <MealCon>
          <h3>아침</h3>
          <div>
            {breakfast.map((item, i) => {
              return <div key={i}>{item}</div>;
            })}
          </div>
          <div></div>
        </MealCon>

        <MealCon>
          <h3>점심</h3>
          <div>
            {lunch.map((item, i) => {
              return <div key={i}>{item}</div>;
            })}
          </div>
          <div></div>
        </MealCon>

        <MealCon>
          <h3>저녁</h3>
          <div>
            {dinner.map((item, i) => {
              return <div key={i}>{item}</div>;
            })}
          </div>
          <div></div>
        </MealCon>
      </Meals>
    </>
  );
}

export default TodaySchoolMeal;

const Meals = styled.div`
  display: flex;
`;

const Meal = styled.div``;

const MealCon = styled.div`
  margin: 20px;
  border: 1px solid black;
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;
