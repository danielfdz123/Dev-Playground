#include "Output.hpp"
#include <iostream>

void Output::displayResult(std::string guess, std::string answer) 
{
    for (int i = 0; i < 5; i++) 
    {
        if (guess[i] == answer[i]) 
        {
            std::cout << "G ";
        } 
        else if (answer.find(guess[i]) != std::string::npos) 
        {
            std::cout << "Y ";
        }
        else 
        {
            std::cout << "X ";
        }
    }
    std::cout << std::endl;
}