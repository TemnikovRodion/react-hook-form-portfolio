import React from "react";
import { useSelector, useDispatch } from 'react-redux';


//Импорт redux/store
import { deleteInfo } from "../../redux/tableSlice";
import { RootState } from '../../redux/store';

//Импорт компонентов
import Icon from "../../modules/Icon";

// Импорт стилей
import './styles.scss';


type Props = {

};

const Table = ({ }: Props): React.ReactElement => {

    const dispatch = useDispatch();
    const tableData = useSelector((state: RootState) => state.table.tableData);

    const onDelete = (id: string) => {
        dispatch(deleteInfo(id));
    }

    const tableList = tableData.map((item, index) =>
        <tr key={index}>
            <td>
                <button className="btn_delete" onClick={() => onDelete(item.id)}>
                    <Icon name="delete" size={20} />
                </button>
            </td>
            <td><img alt={item.picture.name} src={item.picture.body} /></td>
            <td>{item.name}</td>
            <td>{item.sirname}</td>
            <td>{item.email}</td>
            <td>{item.sport}</td>
            <td>{item.book}</td>
            <td>{item.film}</td>
            <td>{item.currentExperience}</td>
            <td>{item.currentCompany}</td>
            <td>{item.salary}</td>
            <td>{item.javascript}</td>
            <td>{item.react}</td>
        </tr>
    )

    return (
        <div className="table_container">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Фотография</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>E-mail</th>
                        <th>Спорт</th>
                        <th>Книга</th>
                        <th>Фильм</th>
                        <th>Опыт</th>
                        <th>Компании</th>
                        <th>Зарплата</th>
                        <th>JavaScript</th>
                        <th>React</th>
                    </tr>
                </thead>

                <tbody>
                    {tableList}
                </tbody>
            </table>
        </div>
    )
}

export default Table;