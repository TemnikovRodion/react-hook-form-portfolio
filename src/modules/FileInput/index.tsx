import React from "react";
import { PropsWithChildren } from "react";
import { useId } from "react";
import { FieldError, Path, PathValue, UnpackNestedValue, UseFormRegister, UseFormSetValue } from "react-hook-form";

//Импорт стилей
import "./styles.scss"

type Props<TData> = {
    fieldName: Path<TData>;
    fieldPictureName: Path<TData>;
    register: UseFormRegister<TData>;
    setValue: UseFormSetValue<TData>;
    required?: boolean;
    error?: FieldError;
}

const FileInput = <TData extends object>({ register, setValue, fieldName, fieldPictureName, required = false, error, children }: PropsWithChildren<Props<TData>>): React.ReactElement => {
    const id = useId();

    const openFileDialog = () => {
        const fileInput = document.getElementById(id);
        fileInput?.click();
    }

    const saveSelectedFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        setValue(fieldPictureName, (file?.name ?? '') as UnpackNestedValue<PathValue<TData, Path<TData>>>, { shouldValidate: true });

        if (file) {
            const promise = new Promise<string>((resolve) => {
                const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    const file = fileReader.result
                    if (file) {
                        resolve(file.toString());
                    }
                }
                fileReader.readAsDataURL(file);
            })

            const fileUrl = await promise;
            setValue(fieldName, fileUrl as UnpackNestedValue<PathValue<TData, Path<TData>>>, { shouldValidate: true });
        } else {
            setValue(fieldName, '' as UnpackNestedValue<PathValue<TData, Path<TData>>>, { shouldValidate: true });
        } // if
    }

    return (
        <div className="form_input_wrapper">
            <div className="form_input_image" onClick={openFileDialog}>
                <input hidden placeholder="Загрузите фотографию" {...register(fieldPictureName, {
                    required: {
                        value: required,
                        message: 'Required'
                    }
                })} />
                <input hidden {...register(fieldName, {
                    required: {
                        value: required,
                        message: 'Загрузите фотографию!'
                    }
                })} />
                {children}

                {error && <span className="form_input_error">{error.message}</span>}
            </div>
            <input className="form_input_button"
                id={id}
                type="file"
                onChange={saveSelectedFile}
                accept="image/png, image/jpeg"
            />
        </div>
    )
}

export default FileInput;