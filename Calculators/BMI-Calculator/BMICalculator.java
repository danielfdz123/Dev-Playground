public class BMICalculator 
{
    // Variable members
    double weightInPounds;
    double heightInInches;
    double weightInKilos;
    double heightInMeters;

    // No argument Constructor
    public BMICalculator() 
    {
        this.weightInPounds = 0.0;
        this.heightInInches = 0.0;
        this.weightInKilos = 0.0;
        this.heightInMeters = 0.0;
    }

    // Paramaterized Constructor
    public BMICalculator(double weightInPounds, double heightInInches, double weightInKilos, double heightInMeters) 
    {
        this.weightInPounds = weightInPounds;
        this.heightInInches = heightInInches;
        this.weightInKilos = weightInKilos;
        this.heightInMeters = heightInMeters;
    }

    ///////////////////////////////////////////////////////
    ///         FUNCTIONS AND OTHER STUFF WEEEEE        ///
    ///////////////////////////////////////////////////////

    // BMI Calculator for Imperial Measurements
    public double calculateBmiImperial(double weightInPounds, double heightInInches) 
    {
        return (703 * weightInPounds) / (heightInInches * heightInInches);
    }

    // BMI Calculator for Metric Measurements
    public double calculateBmiMetric(double weightInKilos, double heightInMeters) 
    {
        return weightInKilos / (heightInMeters * heightInMeters);
    }

    // Please implement the getBMICategory() method so that it takes the BMI value
    // and returns the BMI category based on it
    public String getBMICategory(double bmi) 
    {
        String result;
        if (bmi < 18.5) 
        {
            result = "Underweight";
            return result;
        } 
        else if (bmi < 25) 
        {
            result = "Normal weight";
            return result;
        } 
        else if (bmi < 30) 
        {
            result = "Overweight";
            return result;
        } 
        else 
        {
            result = "Obese";
            return result;
        }
    }
}