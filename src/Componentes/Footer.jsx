import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";



export function Footer(){

  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      mail: "",
      mensaje: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.nombre) {
        errors.nombre = "Complete with your Name/Company name please.";
      }

      if (!values.mail) {
        errors.mail = "Complete with your Email/Company email name please.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)
      ) {
        errors.mail = "Wrong email.";
      }

      if (!values.mensaje) {
        errors.mensaje = "Message is required.";
      }

      return errors;
    },
    onSubmit: (values) => {
      setLoading(true);
      try {
        emailjs
          .send( "service_nz7o46s",
          "template_33rr0oa",
          values,
          "PTT9fHfB9E9GhZ4j7")
          .then(() => {
            setLoading(false);
            showSuccess();
            formik.resetForm();
          });
      } catch {
        setLoading(false);
        showWarn();
      }
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error ml-2">{formik.errors[name]}</small>
      )
    );
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Message sended correctly!",
      detail: "I'll answer soon!",
      life: 3000,
    });
  };

  const showWarn = () => {
    toast.current.show({
      severity: "warn",
      summary: "Message not sent",
      detail: "¡Something went wrong! Try again",
      life: 3000,
    });
  };


    return(
        <div className='flexardo'>
            <Toast ref={toast} position="top-right" />
            <div className='Cont-Text'>
            
                <div className="cont-footer">            
                  <p>Contact me</p>             
                </div>
            </div>
            <form className='Cont-input pt-4' onSubmit={formik.handleSubmit}>
                
                <div className="input-grup">
                    <div className="p-float-label m-4 mt-0 ">
                        <p className="input-title">Nombre</p>
                        <label htmlFor="nombre" aria-required></label>
                        <InputText className='inputs' id="nombre" value={formik.values.nombre} onChange={formik.handleChange}/>
                    </div>
                    {getFormErrorMessage("nombre")}
                    <div className="p-float-label m-4 ">
                      <p className="input-title">Email</p>
                        <label classnombre={`inputs-text ${classNames({ "p-error": isFormFieldValid("mail"), })}`} htmlFor="mail" aria-required></label>
                        <InputText className='inputs' id="mail" value={formik.values.mail} onChange={formik.handleChange}/>
                    </div>
                    {getFormErrorMessage("mail")}
                </div>
               
                <div   className="p-float-label   ">
                    <p className="input-title">Message</p>
                    <label id="mensaje-tamaño" htmlFor="mensaje" overflow="visible" resize="none" aria-required></label>
                    <InputTextarea classnombre="inputs" id="mensaje" rows={4} value={formik.values.mensaje} onChange={formik.handleChange} style={{width:"100%"}}/>
                </div>
                {getFormErrorMessage("mensaje")}
                <Button className="btn-enviar"  label="Send" loading={loading} type="submit" cursor="pointer" />
           
            </form>           
        </div>
    )
}