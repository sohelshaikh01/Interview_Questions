import { useEffect } from 'react';

const CleanUp1 = () => {

    useEffect(() => {
        console.log("rendered");

        return () => {
            console.log("Component Unmounted");
        }
    }, []);
    // Usefull is some timer is going on there

    return (
        <div>
        Hook Examples
        </div>
    )
}

export default CleanUp1;
