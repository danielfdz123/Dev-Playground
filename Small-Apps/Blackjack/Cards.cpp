// This propgram replicates a game of Blaxkjack

#include <iostream>
#include <ctime>
using namespace std;

// Defines the suits, values, and used cards
std::string suits[4] = {"Hearts", "Diamonds", "Clubs", "Spades"};
std::string values[13] = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
bool usedCards[4][13] = {false};

std::string selectCard()
{
    int suit = rand() % 4;
    int value = rand() % 13;

    while (usedCards[suit][value])
    {
        return selectCard();
    }
    usedCards[suit][value] = true;
    return values[value] + " of " + suits[suit];
}

int handleScore(std::string card, int total)
{
    int score = 0;

    // Add score to player
    if (card[0] == 'A')
    {
        score = 11;
    }
    else if (card[0] == 'J' || card[0] == 'Q' || card[0] == 'K')
    {
        score = 10;
    }
    else if (card[0] >= '2' && card[0] <= '9')
    {
        score = card[0] - '0';
    }

    // CASE: When an Ace is pulled and score > 21, the Ace holds a value of 1
    if (total + score > 21 && card[0] == 'A')
    {
        score = 1;
    }
    return score;
}

int main()
{
    srand(time(0));
    std::string card1 = selectCard();
    std::string card2 = selectCard();

    int playerScore;
    playerScore += handleScore(card1, playerScore);
    playerScore += handleScore(card2, playerScore);

    std::cout << "Welcome to Blackjack! Player 1 (YOU) goes first, then its the dealers turn!" << std::endl;
    std::cout << "You are dealt a " << card1 << " and an " << card2 << "!" << std::endl;
    std::cout << "Total Score: " << playerScore << "!" << std::endl;

    char move;

    while(true)
    {
        std::cout << "Would you like to hit (h) or stay (s)? : ";
        cin >> move;

        if (move == 'h')
        {
            std::string newCard = selectCard();
            std::cout << "You are dealt a " << newCard << "!" << std::endl;
            playerScore += handleScore(newCard, playerScore);
            std::cout << "New Total Score: " << playerScore << "!" << std::endl;

            if (playerScore > 21)
            {
                std::cout << "Game Over! You went over 21, thanks for playing!" << endl;
                break;
            }
        }
        else if (move == 's')
        {
            std::cout << "Your current score is: " << playerScore << std::endl;
            std::cout << "DEALERS TURN!!" << std::endl;
            break;
        }
        else
        {
            std::cout << "Invalid input. Please enter 'h' or 's'." << std::endl;
        }
    }
    return 0;
} 