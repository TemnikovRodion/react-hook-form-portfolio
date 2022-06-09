import React from "react";
import { useFormContext } from "react-hook-form";
import { TableDataRow } from "types";

//Ипорт стилей
import './styles.scss';

type FormData = TableDataRow;

const HobbyForm = (): React.ReactElement => {

    const {
        register,
    } = useFormContext<FormData>();

    return (
        <div className="form">
            <h3>Увлечения</h3>
            <input className="form_input" placeholder="Какой вид спорта вам нравится?" {...register('sport')} />
            <input className="form_input" placeholder="Какая ваша любимая книга?" {...register('book')} />
            <input className="form_input" placeholder="Какой ваш любимый фильм?" {...register('film')} />
        </div>
    )
}
export default HobbyForm;