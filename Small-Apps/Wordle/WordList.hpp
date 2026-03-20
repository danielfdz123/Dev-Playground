#ifndef WORDLIST_HPP
#define WORDLIST_HPP

#include <vector>
#include <string>

class WordList 
{
    // Variable members
    private:
        std::vector<std::string> words;

    public:
        // WordList();
        void loadWords();
        std::string getRandomWord();
};

#endif