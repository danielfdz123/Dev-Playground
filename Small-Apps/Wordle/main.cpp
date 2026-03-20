#include "WordList.hpp"
#include "Wordle.hpp"

int main() 
{
    // Loads file andngenerates a secret word
    WordList file;
    file.loadWords();
    std::string secret = file.getRandomWord();

    // Starts game using the secret word
    Wordle game(secret);
    game.play();

    return 0;
}