#include "Wordle.hpp"
#include "Output.hpp"
#include <iostream>
#include <cctype>

Wordle::Wordle(std::string word)
{
    // Sets up base game rules (Defines what the answer is, every run has 6 tries to guess it)
    answer = word;
    tries = 6;
}

void Wordle::play()
{
    std::string guess;

    while (tries > 0)
    {
        // Prompts user to guess word
        std::cout << "Enter Guess: ";
        std::cin >> guess;

        // Sees if the guess matches the answer
        if (guess == answer)
        {
            std::cout << "Congratulations, you win!!\n";
            return;
        }

        // If guess is wrong, player loses a life and is asked to guess again
        checkGuess(guess);
        tries--;
    }

    std::cout << "You lose! Word was: " << answer << std::endl;
}

void Wordle::checkGuess(std::string guess)
{
    Output::displayResult(guess, answer);
}