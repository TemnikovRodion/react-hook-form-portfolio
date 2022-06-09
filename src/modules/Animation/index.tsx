import React from "react";

//Импорт стилей 
import './styles.scss';


const Animation = (): React.ReactElement => {
    return (
        <div className="animation_wrapper">
            <div className="animation_container">
                <span className="first_item"></span>
            </div>
            <div className="animation_container2">
                <span className="second_item"></span>
            </div>
            <div className="animation_container3">
                <span className="third_item"></span>
            </div>
        </div>
    )
}

export default Animation;