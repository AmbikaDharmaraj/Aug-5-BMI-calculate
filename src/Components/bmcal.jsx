function BmCalculate(){
    return(
        <div>
            <div id="bmdiv">
            <input type="text" id='weight' placeholder="Weight (kg)" /><br></br><br></br>
            <input type="text" id='height' placeholder="Height (m)"/><br></br><br></br>
            <button id='calculate' onClick={calcs}>Calculate</button>
            <p id='Bmical'></p>
        </div>

        <div>
             <table>
                <caption>BMI Categories</caption>
                <thead>

                                <tr>
                    <th>BMI Range</th>
                    <th>Category</th>
                    </tr>
                    </thead>
                 <tbody>
                    <tr>
                        <td>Below 18.5</td>
                        <td>Underweight</td>
                        </tr>
                    <tr>
                        
                        <td>18.5 – 24.9	</td>
                        <td>Normal weight</td>
                        
                    </tr>
                    <tr>
                        
                        <td>25.0 – 29.9	</td>
                        <td>Overweight</td>
                        
                    </tr>
                    <tr>
                        
                        <td>30.0 and above	</td>
                        <td>Obese</td>
                        
                    </tr>
                    </tbody>
             </table>
        </div>
    

        </div>
        )



function calcs(){
    let weighttxt = document.getElementById('weight').value;
    let heighttxt = document.getElementById('height').value;
    let Bmi = document.getElementById('Bmical');
    // Bmi.innerHTML = +weighttxt/(heighttxt)*(heighttxt);

    const weight = parseFloat(weighttxt);
    const height = parseFloat(heighttxt);

    if (weight > 0 && height > 0) {
        if(height<1||height>2.5){
            Bmi.innerHTML = "Please Enter height in metres(eg., 1.65)";
            return;
        }
      const bmiValue = weight / (height * height);
      let result = `Your BMI is: ${bmiValue.toFixed(2)} — `;

      if (bmiValue < 18.5) {
        result += "Underweight";
      } else if (bmiValue < 25) {
        result += "Normal weight";
      } else {
        result += "Overweight";
      }

      Bmi.innerHTML = result;
    } else {
      Bmi.innerHTML = "Invalid input";
    }
  }
}


export default BmCalculate;

