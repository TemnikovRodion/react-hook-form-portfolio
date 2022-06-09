import React from "react";

//Импорт компонентов
import Icon from "../../modules/Icon";

//Ипорт стилей
import './styles.scss';

type Props = {

};

const Header = ({ }: Props): React.ReactElement => {
    return (
        <div id="header">
            <ul className="header_socials">
                <li>
                    <a className="header_social_link" href="https://github.com/TemnikovRodion">
                        <Icon name="github" size={30} />
                    </a>
                </li>
                <li>
                    <a className="header_social_link" href="https://telegram.me/RdnTmnkv">
                        <Icon name="telegram" size={30} />
                    </a>
                </li>
            </ul>
            <ul className="header_technologies">
                <li>
                    <a className="header_social_link" href="https://reactjs.org/">
                        <Icon name="react" size={30} />
                    </a>
                </li>
                <li>
                    <a className="header_social_link" href="https://www.typescriptlang.org/">
                        <Icon name="typescript" size={30} />
                    </a>
                </li>
                <li>
                    <a className="header_social_link" href="https://redux.js.org/">
                        <Icon name="redux" size={30} />
                    </a>
                </li>
                <li>
                    <a className="header_social_link" href="https://sass-lang.com/">
                        <Icon name="scss" size={30} />
                    </a>
                </li>
            </ul>
            <div className="header_contacts">
                <p>< a href="tel:+7(000)-000-00-00">+7(000)-000-00-00</a></p>
                <p>< a href="tel:+7(000)-000-00-00">+7(000)-000-00-01</a></p>
            </div>
        </div>
    )
}

export default Header;