import java.util.Scanner;

// The UserInput class implements methods that are used to obtain user inputs for BMI calculation
public class UserInput 
{

    public String obtainBMISystem() 
    {
        // Welcome Text
        System.out.println("Welcome to the BMI calculator app!");
        System.out.print("Please select the preferred BMI calculation system (Imperial/Metric): ");

        // Sets up User Input methods
        @SuppressWarnings("resource")
        Scanner input = new Scanner(System.in);
        String bmiSystem = input.next();

        // Checks preffered BMI Calculation by the users input
        if (!(bmiSystem.equalsIgnoreCase("Imperial") || bmiSystem.equalsIgnoreCase("Metric"))) 
        {
            return "";          // Empty string if invalid
        }
        return bmiSystem;
    }

    // Gets weight of the user, depending on their choice (Imperial/Metric)
    public double obtainWeight(String bmiSystem)
    {
        double weight = 0;
        boolean isInvalidInput = true;

        // Will keep running until a valid value (double) is entered
        while (isInvalidInput) 
        {
            @SuppressWarnings("resource")
            Scanner weightInput = new Scanner(System.in);

            switch (bmiSystem.toUpperCase()) 
            {
                case "IMPERIAL":
                    System.out.print("Enter weight in Pounds: ");
                    break;

                case "METRIC":
                    System.out.print("Enter weight in Kilos: ");
                    break;

                case "":
                    System.out.println("Please Enter a valid BMI System as input");
                    break;
            }

            // Checks if a valid value (double value) was entered
            if (weightInput.hasNextDouble()) 
                {
                weight = weightInput.nextDouble();
                isInvalidInput = false;
            } 
            else 
            {
                System.out.println("Please enter a valid weight");
                weight = 0;
            }
        }
        // Returns weight value
        return weight;
    }
    // Gets height of the user, depending on their choice (Imperial/Metric)
    public double obtainHeight(String bmiSystem) 
    {
        double height = 0.0;
        boolean isInvalidInput = true;

        // Will keep runnning until a valid value (double) is entered
        while (isInvalidInput) 
            {
            @SuppressWarnings("resource")
            Scanner heightInput = new Scanner(System.in);

            switch (bmiSystem.toUpperCase()) 
            {
                case "IMPERIAL":
                    System.out.print("Enter height in Inches: ");
                    break;

                case "METRIC":
                    System.out.print("Enter height in Meters: ");
                    break;

                case "":
                    System.out.println("Please Enter a valid BMI System as input");
                    break;
            }

            // Checks if a valid value (double value) was entered
            if (heightInput.hasNextDouble()) 
                {
                height = heightInput.nextDouble();
                isInvalidInput = false;
            } 
            else 
            {
                System.out.println("Please enter a valid height");
                height = 0;
            }
        }

        // Returns height value
        return height;
    }
}
