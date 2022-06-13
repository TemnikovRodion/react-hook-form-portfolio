import React from "react";
import { useFormContext } from "react-hook-form";
import { TableDataRow } from "types";


//Ипорт стилей
import './styles.scss';

type FormData = TableDataRow;

const SkillsForm = (): React.ReactElement => {

    const {
        register,
        formState: { errors },
    } = useFormContext<FormData>();

    return (
        <div className="form">
            <h3>Выши предпочтения и пожелания</h3>
            <input className="form_input" placeholder="Ваш любимый FrameWork?" {...register('javascript')} />
            <input className="form_input" placeholder="Вы знаете React.js?" {...register('react')} />
            <input className="form_input" type="number" min="0" max="100000" placeholder="Укажите сумму желаемой зарплаты, руб." {...register('salary',
                {
                    required: true,
                    pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
                    min: 0,
                    max: 100000
                })} />
            {errors?.salary?.type === "required" && <p className="input_error">Укажите желаемую зарплату!</p>}
            {errors?.salary?.type === "max" && (
                <p className="input_error">Допустимые значения от 0 до 100000 руб!</p>
            )}
            {errors?.salary?.type === "min" && (
                <p className="input_error">Допустимые значения от 0 до 100000 руб!</p>
            )}
        </div>
    )
}
export default SkillsForm;