import React from 'react';

//Импорт компонентов
import Header from './template/Header';
import Main from './template/Main';
import Footer from './template/Footer';

//Импорт стилей
import './assets/styles/site.scss';


type Props = {

}

const App = ({ }: Props): React.ReactElement => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;