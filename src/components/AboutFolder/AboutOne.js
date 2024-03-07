import react from 'react'

export const AboutOne = () => {
    const heading1 = "ABOUT MOON";
    const heading2 = "Moon's handmade ceramic products have been around since 1650, let's explore our journey"
    return (
        <div className="text-center p-20 flex flex-col items-center justify-center">
            <div className="p-4 font-bold text-2xl"> {heading1}</div>
            <div> {heading2} </div>
        </div>
    )
}