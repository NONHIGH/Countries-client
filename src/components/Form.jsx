import { Link } from "react-router-dom";
import React from "react";
import {
  MainFormContainer,
  FormContainer,
  FormFieldSetContainer,
  FormInput,
  FormLabel,
} from "../stylesComponent/StyleForm";
import { BackToHomePage } from "../stylesComponent/StyleDetail";
import back from "../assets/back.svg";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Form() {

  const seasonDefault = "Summer";

  const [form, setForm] = useState({
    name: "",
    difficulty: '',
    duration: '',
    season: seasonDefault,
  });
  const structureForm = ["name", "difficulty", "duration", "season"];
  const toSeason = ['Summer', 'Autumn', 'Winter', 'Spring'];
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  
  const fields = () => {
    return (
      <FormFieldSetContainer>
        {structureForm.map((property) => {
          const key = uuidv4();
          if (property === "season") {
            return (
              <React.Fragment key={key}>
                <FormLabel>Enter the {property}</FormLabel>
                <select
                  value={form[property]}
                  name={property}
                  onChange={handleChange}
                >
                  {toSeason.map((dou) => {
                    return (
                      <option key={uuidv4()} value={dou}>
                        {dou}
                      </option>
                    );
                  })}
                </select>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={key}>
                <FormLabel>Enter the {property}</FormLabel>
                <FormInput
                  name={property}
                  value={form[property]}
                  onChange={handleChange}
                />
              </React.Fragment>
            );
          }
        })}
      </FormFieldSetContainer>
    );
  };
  

  return (
    <>
      <MainFormContainer>
        <BackToHomePage className="to-home">
          <Link to={"/home"}>
            <img src={back} alt="come back" />
          </Link>
        </BackToHomePage>
        <FormContainer>
          {
            fields()
          }
        </FormContainer>
      </MainFormContainer>
    </>
  );
}

export default Form;
