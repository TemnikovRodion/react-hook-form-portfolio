import React from "react";

//Импорт компонентов
import Animation from "../../modules/Animation";
import Icon from "../../modules/Icon";

//Импорт стилей
import './styles.scss';

type Props = {

};

const Footer = ({ }: Props): React.ReactElement => {
    return (
        <div id="footer">
            <div className="footer_title">
                <p className="footer_title_text">Приложение реализовано с целью демонстрации навыков и не несет коммерческой тайны</p>
            </div>
            <div className="footer_animation">
                <Animation />
            </div>
            <div className="footer_contacts">
                <ul className="footer_socials">
                    <li>
                        <a className="footer_social_link" href="skype:live:sotrudnikk?chat">
                            <Icon name="skype" size={30} />
                        </a>
                    </li>
                    <li>
                        <a className="header_social_link" href="https://wa.me/79494145803">
                            <Icon name="whatsapp" size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;