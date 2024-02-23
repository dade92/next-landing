import {FC} from "react";

interface Props {
    name: string;
}

const Index: FC<Props> = ({name}) => {
    return <>
        <span>This is a test!</span>
    </>
}

export default Index