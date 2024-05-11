import React from 'react'

function CBenefits({Image, Image2, Title, Description}) {
    return (
        <div className="col">
            <div className="card shadow-sm grande">
                <img src={Image} alt=''/>

                <div className="card-body d-flex">
                    <img src={Image2} alt='' className='w-25 h-25' />
                    <p>
                        <strong>{Title}</strong>
                        <p>{Description}</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CBenefits