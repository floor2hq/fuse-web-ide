import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import "../Styles/Terminal.css"

const Termina = () => {
    const xtermRef = useRef(null);

  useEffect(() => {
    const term = new Terminal();
    term.open(xtermRef.current);

    // Example: Print a welcome message
    term.writeln('PS');

    // Attach a listener for key presses
    term.onKey((e) => {
      // Handle key events as needed
      // Example: Close the terminal on Ctrl+C
      if (e.domEvent.ctrlKey && e.key === 'c') {
        term.writeln('^C');
        term.destroy();
      }
    });

    // Clean up on component unmount
    return () => {
      term.dispose();
    };
}, []);

  return (
    <div id="terminal_container" autofocus ref={xtermRef}>
    </div>
  )
}

export default Termina
