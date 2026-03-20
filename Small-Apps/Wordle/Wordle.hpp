#ifndef WORDLE_HPP
#define WORDLE_HPP

#include <string>

class Wordle 
{
    // Variable Members
    private:
        std::string answer;
        int tries;

    public:
        Wordle(std::string word);                   // Constructor
        void play();                                // WORDLE function
        void checkGuess(std::string guess);         // Guess function
};

#endif