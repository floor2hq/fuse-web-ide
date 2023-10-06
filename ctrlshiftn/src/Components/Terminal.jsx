import React, { useState } from 'react'
import "../Styles/Terminal.css"

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleEnter = (e) => {
      if (e.key === 'Enter') {
        // Process the input and update the output
        const newOutput = [...output, `> ${input}`, processCommand(input)];
        setOutput(newOutput);
        setInput('');
      }
    };
  
    const processCommand = (command) => {
      // Add your command processing logic here
      // For simplicity, let's just echo the command
      return `Output for command: ${command}`;
    };

  return (
    <div id="terminal_container" autofocus>
        <div>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
        <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleEnter}
        placeholder="Type a command..."
      />
    </div>
  )
}

export default Terminal
