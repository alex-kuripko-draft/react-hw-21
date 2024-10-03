import {useDispatch, useSelector} from "react-redux";
import {submitAnswers} from "./redux/questionnaire/slice";
import Question from "./components/question";
import Result from "./components/result";
import {Box, Button, Container, Typography} from "@mui/material";
import {selectQuestions} from "./redux/selectors";

function App() {
    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions);

    const handleSubmit = () => {
        dispatch(submitAnswers());
    };

    const hasAllAnswers = questions.every(({selectedAnswer}) => selectedAnswer);

    return (
        <Container maxWidth="sm">
            <Typography variant="h3" fontWeight={700} align="center" gutterBottom>
                Questionnaire
            </Typography>
            {questions.map((question) => (
                <Box key={question.id} mb={4}>
                    <Question question={question}/>
                </Box>
            ))}
            <Box mt={4} mb={4} textAlign="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={!hasAllAnswers}
                    fullWidth
                >
                    Submit
                </Button>
            </Box>
            <Result/>
        </Container>
    );
}

export default App;
