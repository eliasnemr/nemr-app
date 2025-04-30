import { ReactElement } from "react";
import {Experience} from "../types";

interface Props extends Experience {}
export default function Job({id, title, role, website, timeline, description, keyActions, technologies}: Props) {

    const isLink = (children: ReactElement, website?: string) => (website?.length ? <a href={`${website}`} rel="noreferrer" target="_blank">{children}</a> : <div>{children}</div>);
    const technologyTag = (technology: string, index: number) => (<li key={index}><div className="rounded-lg bg-blue-400 text-white max-w-fit px-2 py-1 technology">{technology}</div></li>)
    const technologyList = (technologies: string[]) => ( <ul className="mt-2 flex gap-2 flex-wrap text-[12px]">{technologies.map((technology, i: number) => technologyTag(technology, i))}</ul>);

    const jobResponsibilities = (actions: string[]) => (<ol className="my-4 space-y-2">{actions.map((action, i) => (<li className="text-white grid grid-cols-[auto_1fr] gap-2" key={i}><span>&#x2022;</span> {action}</li>))}</ol>)

    return (
        <li id={id} className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-[100px_1fr] md:gap-16 sm:gap-1 items-center md:group-hover:opacity-50 md:hover:!opacity-100">
                <h3 className="text-sm text-slate-400 animate-fadeIn mb-4 md:mb-0">
                    {timeline}
                </h3>
                {isLink(
                    <>
                        <h4 className="text-white sm:hover:text-teal-300 flex gap-1 items-center [&>svg>path]:sm:hover:fill-teal-300 [&>svg]:sm:hover:animate-bounce">
                            {title}
                            {website?.length && <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                viewBox="0 -960 960 960"
                                width="16"
                            >
                                <path
                                    fill="#FAFAFF"
                                    d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"
                                />
                            </svg>}
                        </h4>
                        <p className="text-sm text-slate-400 mb-2">{role}</p>
                        <p className="text-slate-100 font-light text-sm">
                            {description}
                        </p>

                        {jobResponsibilities(keyActions)}

                        {technologyList(technologies)}
                </>, website)}
    </li>
)
}
