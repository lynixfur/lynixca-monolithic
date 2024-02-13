"use client"

import { useState } from 'react';

interface OutputLine {
    type: 'input' | 'output';
    value: string;
}

const LynxOS = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [output, setOutput] = useState<OutputLine[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Process the input command here
        const outputLine = processCommand(inputValue);
        setOutput([...output, { type: 'input', value: inputValue }]);
        setOutput([...output, { type: 'output', value: outputLine }]);
        setInputValue('');
    };

    const processCommand = async (command: string) => {
        try {
            const response = await fetch('/api/lynxos/cmd', {
                method: 'POST',
                body: JSON.stringify({ command }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            const outputLines = data.output.split('\n');
            outputLines.forEach(line => {
                setOutput(prevOutput => [...prevOutput, { type: 'output', value: line }]);
            });
        } catch (error) {
            console.error('Error:', error);
            setOutput(prevOutput => [...prevOutput, { type: 'output', value: 'Failed to connect to Lynix. Communication Lost' }]);
        }
    };

    return (
        <div className="lynx-os h-screen flex items-center justify-center p-10">
            <div className="terminal-window  py-10 text-white rounded-lg overflow-hidden w-full h-full">
                <div className="output output text-cyan-600">LynxOS Version v304.19.1 {"<lynix@lynxnet>"} </div>
                <div className="output output text-neutral-400">Lynix is the proprietary technology of LYNX Corporation. <br/></div>
                <br/>
                
                <div>
                    <div className="output output text-red-700">Login required to access system</div>
                    <form className="flex">
                        <div className="prompt text-neutral-400 mr-2">{'Username: '}</div>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            autoFocus
                            className="flex-1 bg-transparent focus:outline-none"
                        />
                    </form>
                </div>

                {/* Logged In */}
                <div className="hidden">
                    {output.map((line, index) => (
                        <div key={index} className={`output ${line.type}`}>
                            {line.value}
                        </div>
                    ))}
                    <form onSubmit={handleInputSubmit} className="flex">
                        <div className="prompt text-green-400 mr-2">{'lynix@lynxcorp >'}</div>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            autoFocus
                            className="flex-1 bg-transparent focus:outline-none"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LynxOS;
