import React from "react";
import { useFormContext } from "react-hook-form";
import { TableDataRow } from "types";

import FileInput from "../../../modules/FileInput";

//Ипорт стилей
import './styles.scss';

type FormData = TableDataRow;

const AboutForm = (): React.ReactElement => {

    const {
        register,
        setValue,
        watch,
        formState: { errors }
    } = useFormContext<FormData>();

    return (
        <div className="form">
            <h3>Общая информация</h3>

            <input className="form_input" placeholder="Имя" {...register('name', { required: true, pattern: /^[A-Za-zА-Яа-яЁё]+$/i, maxLength: 15 })} />
            {errors?.name?.type === "required" && <p className="input_error">Введите ваше имя!</p>}
            {errors?.name?.type === "maxLength" && (
                <p className="input_error">Имя не должно превышать 15 символов!</p>
            )}
            {errors?.name?.type === "pattern" && (
                <p className="input_error">Допустимы только буквы!</p>
            )}

            <input className="form_input" placeholder="Фамилия" {...register('sirname', { required: true, pattern: /^[A-Za-zА-Яа-яЁё]+$/i, maxLength: 15 })} />
            {errors?.sirname?.type === "required" && <p className="input_error">Введите вашу фамилию!</p>}
            {errors?.sirname?.type === "maxLength" && (
                <p className="input_error">Фамилия не должна превышать 15 символов!</p>
            )}
            {errors?.sirname?.type === "pattern" && (
                <p className="input_error">Допустимы только буквы!</p>
            )}

            <input className="form_input" placeholder="test@example.com" {...register('email', {
                required: true,
                pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            })} />
            {errors.email && <p className="input_error">Введите корректный email!</p>}

            <FileInput
                register={register}
                setValue={setValue}
                fieldName={'picture.body'}
                fieldPictureName={'picture.name'}
                error={errors.picture?.body}
                required
            >
                {watch('picture.body') ? <img src={watch('picture.body')} /> : 'Загрузите фотографию'}
            </FileInput>
        </div>
    )
}
export default AboutForm;