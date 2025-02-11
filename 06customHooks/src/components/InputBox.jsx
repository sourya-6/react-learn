import {useId} from "react";
  
function InputBox({
    label,
    amount,
    onAmountChange,//when amount changes
    onCurrencyChange,//when currency changes
    currencyOptions=[],//a default array so that we can loop  all the available currencies
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,

    className = "",//custom className by user


}) {
const amountInputId=useId();
  return(
  <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                        value={selectCurrency}
                        disabled={currencyDisable}
                        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency)=>(
                         <option key={currency} value={currency}>
                         {currency}
                     </option>
                    ))}
                       
                
                </select>
            </div>
        </div>
    );
    
}

export default InputBox;

//  onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))} an event is fired and if there was
//no default value it might cause an error so we will check it using the onAmountChange and the value it will 
//return in form of a string we will convert it to number
//new hook useId() which is used to generate unique ids;