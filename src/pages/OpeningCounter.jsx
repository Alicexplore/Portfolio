import React from 'react'

export default function OpeningCounter() {
 
  return (
    <div className='loading-screen z-50'>
        <div className="loader">
            <div className="loader-1 bar"></div>
            <div className="loader-2 bar"></div>

            <div className="counter">
                <div className="counter-1 digit">
                    <div className="num">0</div>
                    <div className="num num1offset1">1</div>
                </div>
                <div className="counter-2 digit">
                    <div className="num">0</div>
                    <div className="num num1offset2">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                </div>
                <div className="counter-3 digit">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                </div>
            </div>
        </div>
    </div>   

  )
}

