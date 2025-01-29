import { useState } from "react";

function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>Visa/Göm</button>
            {isVisible && <p>Ses snart igen!</p>}
        </div>
    )
}

export default ToggleMessage;