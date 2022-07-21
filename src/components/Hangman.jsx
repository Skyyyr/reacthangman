import hangman_0 from "../assets/hangman_0.png";
import hangman_1 from "../assets/hangman_1.png";
import hangman_2 from "../assets/hangman_2.png";
import hangman_3 from "../assets/hangman_3.png";
import hangman_4 from "../assets/hangman_4.png";
import hangman_5 from "../assets/hangman_5.png";
import hangman_6 from "../assets/hangman_6.png";

function Hangman(props) {
    let hangmanNum = 0
    const incorrect = props.guessLetters.filter((letter) => {
        if (!props.word.includes(letter)) {
            hangmanNum++
        }
    });

    let currentHangman = hangman_0
    switch (hangmanNum) {
        case 0:
            currentHangman = hangman_0
            break
        case 1:
            currentHangman = hangman_1
            break
        case 2:
            currentHangman = hangman_2
            break
        case 3:
            currentHangman = hangman_3
            break
        case 4:
            currentHangman = hangman_4
            break
        case 5:
            currentHangman = hangman_5
            break
        case 6:
            currentHangman = hangman_6
            break
    }

    return (
        <div className="hangingman mx-auto">
            {currentHangman === hangman_6 ?
                <div>
                    <p>
                        GAME OVER
                    </p>
                    <p>
                        <strong>
                            REFRESH THE PAGE
                        </strong>
                    </p>
                </div>
                :
                <img src={currentHangman} width="256px" height="256px" alt="" />}
        </div>
        );
    }

export default Hangman;
