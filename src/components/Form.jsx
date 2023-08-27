import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  MainFormContainer,
  FormContainer,
  FormFieldSetContainer,
  FormInput,
  FormLabel,
  FormSelect,
  FormButton,
  FormButtonModal,
  RangeInputT,
  ListCountriesSelected
} from "../stylesComponent/StyleForm";
import { BackToHomePage } from "../stylesComponent/StyleDetail";
import back from "../assets/back.svg";
import ModalSearch from "./ModalSearch";
import { resetCountries } from "../redux/features/country/countrySlice";
import { useDispatch } from "react-redux";
import {
  validateForm
  
} from "./utils/Validation";
import { useEffect } from "react";
import { sendForm } from "../redux/features/country/actions";
import Toast from './Toast'


function Form() {
  const dispatch = useDispatch();
  



  const [countries, setCountries] = useState([])

  const [form, setForm] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: countries,
  });

  const [errors, setError] = useState({
    name: "",
    difficulty: "",
    duration: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    let updateValue = value;
    if(name === 'difficulty' || name === 'duration'){
      if(isNaN(value)){
        updateValue = 0;
      }else{
        updateValue = Number(value)
      }
    }
    setForm({
      ...form,
      [name]: updateValue,
    });

    const updatedForm = {
      ...form,
      [name]: updateValue
    };

    const formErrors = validateForm(updatedForm);

    setError(formErrors);
  };

  const [showToast, setShowToast] = useState(null); // Estado para mostrar el toast
  const [toastType, setToastType] = useState("");
  const [toastTitle, setToastTitle] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formErrors = validateForm(form);
  
    setError(formErrors);
    if (Object.values(formErrors).some((error) => error !== "")) {
      console.log("There are errors in the form.");
      return; // Detener el envío si hay errores
    }
    
    try {
      const response = await dispatch(sendForm(form));
      setToastType("success");
      setToastTitle("Éxito");
      console.log(response);
      setToastMessage("La actividad se creó exitosamente.");
      setShowToast(true);
      // navigate('/home')
    } catch (error) {
      setToastType("error");
      setToastTitle("Error");
      setToastMessage(error.message);
      setShowToast(true);

    }
  };



  useEffect(()=>{
    setForm((prevForm)=> {
      return {
        ...prevForm,
        countries: countries
      }
    })

  }, [countries])

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);

    dispatch(resetCountries());
  };


  const handleCountryCheckChange = (event) => {
    const {value, checked} = event.target;
    if (checked) {
      setCountries([...countries, value])
    } else {
      setCountries(countries.filter(id => id !== value));
    }
    
  }

  return (
    <>
      <MainFormContainer>
        <BackToHomePage className="to-home">
          <Link to={"/home"}>
            <img src={back} alt="come back" />
          </Link>
        </BackToHomePage>
        <FormContainer onSubmit={handleSubmit}>
          <h1>Create an activity</h1>
          <FormFieldSetContainer>
            <FormLabel htmlFor="name">Enter the name</FormLabel>
            <FormInput
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name && "errorInput"}
            />
            {errors.name && <span>{errors.name}</span>}
            <FormLabel htmlFor="difficulty">Enter the difficulty</FormLabel>
            <span>{form.difficulty}</span>
            <RangeInputT
              id="difficulty"
              type="range"
              name="difficulty"
              min={0}
              max={5}
              value={form.difficulty}
              onChange={handleChange}
              className={errors.difficulty && "errorInput"}
            />
            {errors.difficulty && <span>{errors.difficulty}</span>}
            <FormLabel htmlFor="duration">Enter the duration</FormLabel>
            <FormInput
              id="duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className={errors.duration && "errorInput"}
            />
            {errors.duration && <span>{errors.duration}</span>}
            <FormLabel htmlFor="season">Enter the season</FormLabel>
            <FormSelect
              id="season"
              value={form.season}
              name="season"
              onChange={handleChange}
            >
              <option defaultValue={null}>Select a season</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </FormSelect>
            <FormButtonModal type="button" onClick={openModal}>
              select countries
            </FormButtonModal>
            <ListCountriesSelected>
            {countries.length > 0 && countries.map((country, index)=>{
              
              return (
                
                <React.Fragment key={index}>
                    <li value={country} id={country}>{country}</li>
                </React.Fragment>
              )
            })}
            </ListCountriesSelected>

            <FormButton type="submit">Create</FormButton>
          </FormFieldSetContainer>
        </FormContainer>
        <ModalSearch
          openModal={modalOpen}
          closeModal={closeModal}
          selectedCountries={countries}
          handleCheckChange={handleCountryCheckChange}
        ></ModalSearch>
      </MainFormContainer>
      <Toast 
        type={toastType}
        title={toastTitle}
        message={toastMessage}
        duration={3000}
        $isVisible={showToast}
      />
    </>
  );
}

export default Form;
