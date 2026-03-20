#include "WordList.hpp"
#include <fstream>
#include <ctime>
#include <iostream>


void WordList::loadWords() 
{
    // Loads file and sees if it exists
    std::ifstream file("words.txt");
    if (!file.is_open()) 
    {
        std::cout << "ERROR!! Unknown file!\n";
        return;
    }

    // Adds every word from the file into the WORDS vector 
    std::string word;
    while (file >> word) 
    {
        words.push_back(word);
    }

    //Ensures a different word is chosen everytime
    srand(time(0));
}

std::string WordList::getRandomWord() 
{
    // srand(time(0));
    return words[rand() % words.size()];
}