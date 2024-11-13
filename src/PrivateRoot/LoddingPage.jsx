


const LoddingPage = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-20 w-fit mt-9 mx-auto">
            {
                arr.map(each => <div key={each} className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>)
            }
        </div>
    )
}
export default LoddingPage