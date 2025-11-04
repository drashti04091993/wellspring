const bmiForm = document.getElementById('bmiForm');
const bmiResult = document.getElementById('bmiResult');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');

bmiForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const heightInput = parseFloat(document.getElementById('height').value);
  const weightInput = parseFloat(document.getElementById('weight').value);

  if (!heightInput || !weightInput || heightInput <= 0 || weightInput <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  // If user entered height in cm, convert to meters
  const height = heightInput > 3 ? heightInput / 100 : heightInput;
  const bmi = (weightInput / (height * height)).toFixed(1);

  let category = "";
  let categoryClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    categoryClass = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
    categoryClass = "normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    categoryClass = "overweight";
  } else {
    category = "Obese";
    categoryClass = "obese";
  }

  // Display result with animation and color feedback
  bmiResult.classList.remove('hidden', 'underweight', 'normal', 'overweight', 'obese');
  bmiResult.classList.add('visible', categoryClass);
  bmiValue.textContent = `Your BMI is ${bmi}`;
  bmiCategory.textContent = `— ${category}`;
});
