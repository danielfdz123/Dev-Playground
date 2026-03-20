#include "Output.hpp"
#include <iostream>
#include <set>
#include <string>
#include <cctype>

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
            std::cout << "\033[90m" << guess[i] << "\033[0m" << " ";
        }
    }
    std::cout << std::endl;

    // Doesn't print history if player wins
    if(guess == answer)
    {
        return;
    }
    displayHistory(guess, answer);
}

void Output::displayHistory(std::string guess, std::string answer)
{
    // static std::set<char> green;        // Correct letter & Correct spot
    // static std::set<char> yellow;       // Correct letter & Incorrect spot
    static std::set<char> gray;         // Incorrect everything

    // Adds all letters that dont belong into the set
    for (int i = 0; i < 5; i++) 
    {
        if (!(guess[i] == answer[i]) && !(answer.find(guess[i]) != std::string::npos)) 
        {
           gray.insert(guess[i]);
        }
    }

    // Doesnt print results if the set is empty
    if(!gray.empty())
    {
        // Prints out all of our throwaway letters so we know what doesn't fit
        std::cout << "<<< Throw-Aways: ";
        for (char throwaways : gray) 
        {
            std::cout << "\033[90m" << throwaways << "\033[0m" << " ";
        }
    }
    std::cout << ">>>" << std::endl;
}

void Output::victoryText(int tries)
{
    //This function prints out the victory text depending on the amount of tries one takes
    if(tries <= 3)
    {
        std::cout << "Genius!" << std::endl;
    }
    else if (tries == 4)
    {
        std::cout << "Magnificent!" << std::endl;
    }
    else if (tries == 5)
    {
        std::cout << "Impressive!" << std::endl;
    }
    else
    {
        std::cout << "Great!" << std::endl;
    }
}