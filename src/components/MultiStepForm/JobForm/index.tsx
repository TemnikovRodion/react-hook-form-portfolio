import React from "react";
import { useFormContext } from "react-hook-form";
import { TableDataRow } from "types";

//Ипорт стилей
import './styles.scss';

type FormData = TableDataRow;

const JobForm = (): React.ReactElement => {
    const {
        register,
        formState: { errors }
    } = useFormContext<FormData>();

    return (
        <div className="form">
            <h3>Ваш опыт работы</h3>
            <input className="form_input" placeholder="Какой у вас опыт работы?" {...register('currentExperience')} />
            <input className="form_input" type="number" min="0" max="10" placeholder="В скольки компаниях вы работали?" {...register('currentCompany',
                {
                    required: true,
                    pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
                    min: 0,
                    max: 10
                })
            } />
            {errors?.currentCompany?.type === "required" && <p className="input_error">Введите кол-во компаний!</p>}
            {errors?.currentCompany?.type === "max" && (
                <p className="input_error">Допустимые значения от 0 до 10!</p>
            )}
        </div>
    )
}
export default JobForm;