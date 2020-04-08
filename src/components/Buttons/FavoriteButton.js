import React, {useState }from 'react';
import { FaPlus, FaCheck } from 'react-icons/fa'



function FavoriteButton() {
    const [icon, setIcon] = useState(false);

    function  handleClick() {
        setIcon(!icon);
    }

    return (
        <div>
            <button class="add-btn justify-center " onClick={handleClick}>
                {icon ? <FaCheck/> : <FaPlus/> }
            </button>
        </div>
    )
}

export { FavoriteButton };