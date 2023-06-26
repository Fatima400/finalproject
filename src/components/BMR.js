import "./BMR.css"
import { useState, useEffect, useSyncExternalStore } from "react"
import axios from 'axios';


const BMR = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmiValue, setBMIValue] = useState(0);
  const [message, setMessage] = useState('');
  const [Calculate, setCalculate] = useState(false)
  const [gender, setGender] = useState('')
  const [data, setData] = useState([])

  const fetchData = async () => {
    const appId = 'ffde1e3c';
    const appKey = 'f678bd2eb0d711e740b8d7e68d80d2d4';
    const nutritionType = 'cooking';

    const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}&nutrition-type=${nutritionType}`;

    try {
      const response = await axios.get(url);
      console.log(response.data.hints);
      setData(response?.data.hints)
      // Process the response data as needed
    } catch (error) {
      console.error(error);
    }
  };
  
  console.log("this is my data" , data)
  useEffect(()=> {
    setBMIValue((weight / (height * height) * 10000));
    });
  
  const handleFamle = () => {
    setGender("famle")
  }
  const handleMale = () => {
    setGender("male")
  }
  const resetAll = () => {
    setGender("")
    setHeight()
    setMessage()
    setWeight()
    setCalculate()
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    setCalculate(true)
    setBMIValue();
    // console.log({ bmiValue });

    if (bmiValue < 16) {
      setMessage('Severe Thinness. Your BMI is ');


    } else if ((bmiValue>= 16) && (bmiValue < 17)) {
      setMessage('Moderate Thinness. Your BMI is ');



    } else if ((bmiValue>= 17) && (bmiValue < 18.5)) {
      setMessage('Mild Thinness. Your BMI is ');


    } else if ((bmiValue>= 18.5) && (bmiValue < 25)) {
      setMessage('Healthy weight. Your BMI is ');



    } else if ((bmiValue>= 25) && (bmiValue < 30)) {
      setMessage('Overweight. Your BMI is ');


    } else if ((bmiValue>= 30 )&& (bmiValue < 35)) {
      setMessage('Obese Class I. Your BMI is ');



    } else if ((bmiValue>= 35) && (bmiValue < 40)) {
      setMessage('Obese Class II. Your BMI is ');


    } else if (bmiValue>= 40) {
      setMessage('Obese Class III. Your BMI is ');
    }


  }
  console.log(Calculate)

  
  return (
    <>
    {data?.length !==0 ? 
    <>

      {data?.map((item) => (
      <>
     
     <div className="container">
      <div className="row">
          <div className="col-12 text-center">
              <h3>The Food </h3>
          </div>
      </div>
      <div className="row">

        {data.map((item) => (
          <div className="col-md-3" key={item.food.foodId}>
            <div className="card mb-4">
              <img src={item.food.image} className="card-img-top" alt={item.food.label} />
              <div className="card-body">
                <h5 className="card-title">{item.food.label}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
      </>
      
    ))}
    </>  
  : <>
   <div className="form">
        <form>
          <div className="weight">

            <input id="weight" placeholder="Enter Your Weight In (Kg)" type="text" onInput={(e) => setWeight(e.target.value)}></input>
          </div>
          <div className="height">

            <input id="height" placeholder="Enter Your Height In (M)" type="text" onInput={(e) => setHeight(e.target.value)} ></input>
          </div>
          <div className="d-flex my-3 ">
          <div class="form-check mx-4 ">
          <input class="form-check-input" type="radio" value="" id="flexCheckCheckedMale" onClick={() => setGender('Male')}  checked={gender === 'Male'}  />
          <label class="form-check-label" for="flexCheckChecked">
           <b className="mx-1">Male</b>  
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" value={gender} id="flexCheckCheckedFamle"  onClick={() => setGender('Female')}  checked={gender === 'Female'}  />
          <label class="form-check-label" for="flexCheckChecked">
           <b className="mx-1">Famle</b> 
          </label>
          </div>
          
        </div>

          <div className="button">
            <button value={false} onClick={onSubmit}>
              Calculate
             </button>
           <button onClick={resetAll}  type="reset">
              Reset
            </button> 
          </div>
        </form >
      </div >
     
        {Calculate === true &&
                <div className="row justify-content-center">
                <div className="card w-25 text-center">
                  <img src={ gender === "Female" ? "famle.png" : gender === "Male" ? "male1.svg": ""} style={{width:"100px"}} className="card-img-top mx-auto mt-3" alt="..." />
                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li>Weight : <h>{weight}</h> </li>
                      <li>Height : <h>{height}</h></li>
                      <li>Gender :  <h>{gender}</h></li>

                    </ul>
                    <div class="alert alert-info" role="alert">
                    {message} {bmiValue}
                  </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    {/* <button type="button" className="btn btn-outline-success w-25 my-3">Next</button> */}
                    <button onClick={fetchData}  className="btn btn-outline-success w-25 my-1" >Next</button>

                  </div>
                </div>
              </div>
        }
  </>}
    
     
    </>
  )

}

export default BMR;