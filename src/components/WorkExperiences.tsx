import {Experience} from "../types";
import Job from "./Job.tsx";

interface Props {
    jobs: Experience[];
}
export default function WorkExperiences({jobs}: Props) {

    return <ul className="space-y-4 group">{(jobs as Experience[]).map((experience, i: number) => (<Job key={i} {...experience} />))}</ul>
}
