#include "Output.hpp"
#include <iostream>

void Output::displayResult(std::string guess, std::string answer) 
{
    for (int i = 0; i < 5; i++) 
    {
        // If letter is in the right spot of the answer word
        if (guess[i] == answer[i]) 
        {
            // GREEN TEXT
            std::cout << "\033[32m" << guess[i] << "\033[0m" << " ";
        } 
        // If letter is in the wrong sport, but apart of the answer word
        else if (answer.find(guess[i]) != std::string::npos) 
        {
            // YELLOW TEXT
            std::cout << "\033[33m" << guess[i] << "\033[0m" << " ";
        }
        // Letter is not apart of the answer word at all
        else 
        {
            std::cout << guess[i] << " ";
        }
    }
    std::cout << std::endl;
}