import { useDispatch } from 'react-redux';
import {answerQuestion} from "../../redux/questionnaire/slice";
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";

const Question = ({ question }) => {
    const dispatch = useDispatch();

    const handleAnswer = (event) => {
        dispatch(answerQuestion({ id: question.id, answer: event.target.value }));
    };

    return (
        <Box>
            <Typography variant="h6">{question.question}</Typography>
            <FormControl component="fieldset">
                <RadioGroup
                    value={question.selectedAnswer || ''}
                    onChange={handleAnswer}
                >
                    {question.answers.map((answer) => (
                        <FormControlLabel
                            key={answer}
                            value={answer}
                            control={<Radio />}
                            label={answer}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default Question;