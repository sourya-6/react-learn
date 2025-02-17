
//instead of writing everywhere props.username we use {} instead of props
//app lo Card component create chesinapudu alla avvi akkada unna values ni tisukuntai
function Card({username,buttonText="ready",bio}) {
    
    return (
        
        <div className="max-w-xxxl max-l-xs rounded-md shadow-md bg-black text-gray-100 m-4">
        <img
          src='https://i.pinimg.com/736x/f5/61/88/f56188980615ee32fe42d4fd597b3ca3.jpg'
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              {bio}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
    
}
export default Card;