import {useNavigate} from 'react-router-dom'

const CardsPageComponent=({products})=>{
    const navigate=useNavigate()

    return (
        <div className="sm:p-20 font-normal text-base grid sm:grid-cols-4 grid-cols-2 gap-8">
                {products.map((product) => (
                    <div key={product._id} className="text-left">
                        <img
                            src={`http://localhost:3000/uploads/${product.filename[0]}`}
                            alt={product.productHeading}
                        />
                        <div className='font-bold'>{product.productHeading}</div>
                        <div className="font-bold">${product.productPrice}</div>
                        <div>{product.productDesc}</div>
                        <button className="mt-8 border border-black p-2 w-full" onClick={()=>navigate('/Shop')}>Add To Cart</button>
                    </div>
                ))}
            </div>
    )
}

export default CardsPageComponent