export const ContactThree = () => {
    const items=[
        {
            id:1,
            heading1:'Office Hours:',
            heading2:'Monday - Friday  8:00 am to 5:00 pm'
        },
        {
            id:2,
            heading1:'Email:',
            heading2:'contact@company.com'
        },
        {
            id:3,
            heading1:'Phone:',
            heading2:'(414) 687 - 5892'
        },
        {
            id:4,
            heading1:'Location:',
            heading2:'59 Middle Point RdSan Francisco, 80412'
        }

    ]
    return(
        <div >
            {items.map((item)=>(
                <div className="flex flex-col items-center justify-center" key={item.id}>
                    <div className="font-bold" >{item.heading1}</div>
                    <div style={{color:'#C69B7B'}}>{item.heading2}</div>
                </div>


            ))}


        </div>
    )
}