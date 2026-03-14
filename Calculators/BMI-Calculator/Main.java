public class Main {
    public static void main(String[] args) 
    {
        // Variable Members
        double weight, height;
        double bmi = 0;
        String bmiSystem;
        String bmiCategory;

        // Creates ibject in userInput and BMICalculator classes
        UserInput userInput = new UserInput();
        BMICalculator bmiCalculator = new BMICalculator();

        // Calls the function in the userInput class to START running the BMI calculator 
        bmiSystem = userInput.obtainBMISystem();

        // Gets the height/weight by calling those functions in, followed by the calculation of the BMI itself
        switch (bmiSystem.toUpperCase()) 
        {
            case "IMPERIAL":
                weight = userInput.obtainWeight(bmiSystem);
                height = userInput.obtainHeight(bmiSystem);
                bmi = bmiCalculator.calculateBmiImperial(weight, height);
                break;

            case "METRIC":
                weight = userInput.obtainWeight(bmiSystem);
                height = userInput.obtainHeight(bmiSystem);
                bmi = bmiCalculator.calculateBmiMetric(weight, height);
                break;

            case "":
                System.out.println("Please enter a valid BMI System as input");
                break;
        }

        // Print results
        System.out.println("Your BMI is: " + bmi);
        bmiCategory = bmiCalculator.getBMICategory(bmi);
        System.out.println("Your BMI category is: " + bmiCategory);
    }
}
