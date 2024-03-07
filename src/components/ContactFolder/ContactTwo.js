import react from 'react'

export const ContactTwo = () => {
    const heading1 = "GET IN TOUCH WITH US";
    const heading2 = "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
    return (
        <div className="text-center p-20 flex flex-col items-center justify-center">
            <div className="p-4 font-bold text-2xl"> {heading1}</div>
            <div> {heading2} </div>
        </div>
    )
}