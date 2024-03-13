const SignUpPage = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className="p-6 font-bold">Sign Up For Emails</div>
            <div className="text-3xl font-bold p-6">FOR NEWS, COLLECTIONS & MORE</div>
            <div className="p-6">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="p-2 border-b border-black"
                />
            </div>
            <div className="p-6">
                <button className="border border-black text-black p-2">Sign Up</button>
            </div>
        </div>



    )
}
export default SignUpPage