import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//Импорт компонентов
import AboutForm from "./AboutForm";
import HobbyForm from "./HobbyForm";
import JobForm from "./JobForm";
import SkillsForm from "./SkillsForm";

//Импорт redux/store
import { addInfo } from "../../redux/tableSlice";
import { TableDataRow } from "types";

//Импорт стилей
import './styles.scss';

type Props = {
    closeModal: () => void,
};

type FormData = TableDataRow;

const MultiStepForm = ({ closeModal }: Props): React.ReactElement => {

    const dispatch = useDispatch();

    const stepCounts = 4;
    const [activeStep, setActiveStep] = useState(1);

    const methods = useForm<FormData>({
        shouldUnregister: false,
        defaultValues: {},
        mode: 'onChange'
    });

    const onSubmit = (data: FormData) => {
        dispatch(addInfo(data));
        console.log(data);
        closeModal();
    };

    const handlePrev = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = async () => {
        const isStepValid = await methods.trigger();
        if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <FormProvider {...methods}>
            <form className="form_comtainer" onSubmit={methods.handleSubmit(onSubmit)}>
                <div>
                    {activeStep === 1 && <AboutForm />}
                    {activeStep === 2 && <HobbyForm />}
                    {activeStep === 3 && <JobForm />}
                    {activeStep === 4 && <SkillsForm />}
                </div>

                <div className="form_btn_group">
                    <button className="form_btn" type="button" onClick={closeModal}>Отменить</button>

                    {activeStep > 1 && (
                        <button className="form_btn" type="button" onClick={handlePrev}>Назад</button>
                    )}

                    {activeStep !== stepCounts && (
                        <button className="form_btn" type="button" onClick={handleNext}>Дальше</button>
                    )}

                    {activeStep === stepCounts && (
                        <button className="form_btn" type="submit">Сохранить</button>
                    )}
                </div>
            </form >
        </FormProvider>
    )
}

export default MultiStepForm;