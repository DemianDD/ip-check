import React from 'react'

const InputForm = ({ onResponseChange }: any) => {
    const [ip, setIp] = React.useState('');
    const [error, setError] = React.useState('');

    const onCalcSymbolsOnlyChange = (event: any) => {
        const inputValue = event.target.value;

        if (inputValue.length >= 16) {
            event.preventDefault();
            return;
        }
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValidSymbol = /^[0-9.\b]+$/.test(keyValue);
    
        if (!isValidSymbol) {
            event.preventDefault();
            return;
        } 
    };

    const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setIp(event.target.value);
    };

    const handleFormSubmit = async (event:any) => {
        event.preventDefault();
        
        if (ip.length < 8 || ip.length > 16) {
            setError('Minimum length is 8 and maximum length is 16');
            return;
        }

        try {
            const response = await fetch(
                `https://api.api-ninjas.com/v1/iplookup?address=${ip}`,
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'p9FwrWB4G+A9Nu1PjuJ+nQ==ff9ilr4QeXzZySYr',
                        'Content-Type': 'application/json',
                    },
                }
            );
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                const resultData = await response.json();
                onResponseChange(resultData);
                setError('');
            }
        } catch (err: any) {
            setError('Network response was not ok');
        }
      };
    return (
      <div className='flex flex-col relative pb-[30px]'>
            <form className='border border-[#ccc] rounded-xl p-2' onSubmit={handleFormSubmit}>
                <input
                    name='ip'
                    placeholder='Enter your IP address'
                    className='pl-2 border-r border-[#ccc] focus:outline-0'
                    value={ip}
                    onKeyPress={onCalcSymbolsOnlyChange}
                    onChange={handleInputChange}
                />
                <button className='px-2 hover:bg-[#eff3ff] rounded-lg' type="submit">
                    submit
                </button>
            </form>
            {error && <div className='text-xs text-red-500 absolute bottom-0'>Error: {error}</div>}
      </div>
    )
}

export default InputForm