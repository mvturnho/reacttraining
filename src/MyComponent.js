import React from 'react'

export default function MyComponent({ waarde, factor }) {
    return (
        <div>
            <div className='ms-4 '>
                Waarde is : {bepaalKleur(waarde * factor)}
            </div>
        </div>
    )
}

function bepaalKleur(nieuwewaarde) {
    if(nieuwewaarde > 200) {
        return (<div className="makered">{nieuwewaarde}</div>)
    } else  { 
        return ( <div className="makegreen">{nieuwewaarde}</div>)
    }
}

