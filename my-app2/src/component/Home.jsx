import React from 'react';
//import './Home.css'
const Home = () => {
    const handler=() =>{
        window.location.href='/'

    }
    return (
        <div className="hero" style={{ backgroundImage: 'url(assets/home_bg.jpg)'}}>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col" >
                    <div className="card h-100" style={{width: "33rem", marginLeft:"5rem"}}>
                        <img src="assets/cake.jpg" alt=" " className="card-img-top"/>
                        <div className ="card-body">
                        <h5 className ="card-title"> Cakes</h5>
                        <p className ="card-text" style={{fontStyle:'italic'}}>Count the memories <br/>Not the Calories.</p>
                        <button onClick={handler} className='btn btn-outline-success'>Explore Cakes</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{width: "33rem"}}>
                        <img src="assets/flowers.jpg" alt=" "className="card-img-top"/>
                        <div className ="card-body">
                        <h5 className ="card-title">Flowers</h5>
                        <p className ="card-text" style={{fontStyle:'italic'}}>Your mind is a garden.Your Thoughts are seeds..You can grow flowers or you can grow weeds.</p>
                        <button onClick={handler} className='btn btn-outline-success'>Explore Flowers</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{width: "33rem",marginLeft:"5rem"}}>
                        <img src="assets/combo.jpg" alt=" " className="card-img-top"/>
                        <div className ="card-body">
                        <h5 className ="card-title">Explore Combos</h5>
                        <p className ="card-text" style={{fontStyle:'italic'}}>Every flower must grow through dirt<br/>Make Your Day better with delicious dessert!!.</p>
                        <button onClick={handler} className='btn btn-outline-success'>Explore Combos</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{width: "33rem"}}>
                        <img src="assets/all.jpg" alt=" " className="card-img-top"/>
                        <div className ="card-body">
                        <h5 className ="card-title">Explore Varities</h5>
                        <p className ="card-text" style={{fontStyle:'italic'}}>Cakes,Flowers,Combos.</p>
                        <button onClick={handler} className='btn btn-outline-success'>Explore ALL</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
