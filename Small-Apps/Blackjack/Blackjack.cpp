// This propgram replicates a game of Blaxkjack

#include <iostream>
#include <ctime>
using namespace std;

// Defines the suits, values, and used cards
std::string suits[4] = {"Hearts", "Diamonds", "Clubs", "Spades"};
std::string values[13] = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
bool usedCards[4][13] = {false};

// Selects card from the deck
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

// Manages the score
int handleScore(std::string card, int total)
{
    int score = 0;

    // Add score to player
    if (card[0] == 'A')
    {
        score = 11;
    }
    else if (card.substr(0, 2) == "10" || card[0] == 'J' || card[0] == 'Q' || card[0] == 'K')
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

    int playerScore = 0;
    playerScore += handleScore(card1, playerScore);
    playerScore += handleScore(card2, playerScore);

    std::cout << "Welcome to Blackjack! Player 1 (YOU) goes first, then its the dealers turn!" << std::endl;
    std::cout << "You are dealt a " << card1 << " and an " << card2 << "!" << std::endl;
    std::cout << "Total Score: " << playerScore << "!" << std::endl;

    char move;

    while (true)
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
                std::cout << "Player BUSTS! Dealer wins!" << std::endl;
                return 0;
            }
        }
        else if (move == 's')
        {
            std::cout << "Your current score is: " << playerScore << std::endl;
            std::cout << " /////    DEALERS TURN     /////" << std::endl;

            std::string dealerCard1 = selectCard();
            std::string dealerCard2 = selectCard();

            int dealerScore = 0;
            dealerScore += handleScore(dealerCard1, dealerScore);
            dealerScore += handleScore(dealerCard2, dealerScore);
            std::cout << "Dealer has their TWO starting cards!" << std::endl;

            while (dealerScore < 17)
            {
                // Gives dealer a new card
                std::string newCard = selectCard();
                dealerScore += handleScore(newCard, dealerScore);

                if (dealerScore > 21)
                {
                    std::cout << "Dealer BUSTS! They have a " << dealerScore << "!\nPlayer wins! They have a " << playerScore << "!";
                    return 0;
                }
            }

            ///////////////////////////////////////////////////////
            ///              CHECK SCORE OF PLAYERS             ///
            ///////////////////////////////////////////////////////

            // Score comparison
            if (dealerScore > playerScore)
            {
                std::cout << "Dealer wins with a score of " << dealerScore << "!\nPlayer loses with a score of " << playerScore << "!" << std::endl;
            }
            else if (playerScore > dealerScore)
            {
                std::cout << "Player wins with a score of " << playerScore << "!\nDealer loses with a score of " << dealerScore << "!" << std::endl;
            }
            else
            {
                std::cout << "GAME IS A TIE!! Both players have a score of " << playerScore << "!" << std::endl;
            }
            break;
        }
        else
        {
            std::cout << "Invalid input. Please enter 'h' or 's'." << std::endl;
        }
    }

    return 0;
}