#ifndef OUTPUT_HPP
#define OUTPUT_HPP

#include <string>
#include <set>

class Output 
{
    private:
        // Variable members, each of which manages the history of our guesses
        // static std::set<char> green;
        // static std::set<char> yellow;
        static std::set<char> gray;
    public:
        // Output();
        static void displayResult(std::string guess, std::string answer);
        static void displayHistory(std::string guess, std::string answer);
        static void victoryText(int tries);
};

#endif