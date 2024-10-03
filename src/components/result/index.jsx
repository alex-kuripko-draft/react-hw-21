import {useSelector} from 'react-redux';
import {Typography} from "@mui/material";

const Result = () => {
    const result = useSelector((state) => state.questionnaire.result);

    if (!result) return null;

    return (
        <Typography variant="h4">
            Your Score: {result}
        </Typography>
    );
};

export default Result;