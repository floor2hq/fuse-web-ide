import React, { useEffect } from 'react';
import "../Styles/Terminal.css"
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { Terminal as XTerm } from 'react-xterm';

const CustomTerminal = () => {
  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      cols: 120,
      rows: 80,
    });

    term.open(document.getElementById('terminal'));
    term.writeln('Welcome to FUSE');
    term.write('$ ');

    const onKey = (e) => {
      const printable = !e.altKey && !e.altGraphKey && !e.ctrlKey && !e.metaKey;

      if (e.keyCode === 13) {
        term.writeln('');
        term.write('$ ');
      } else if (e.keyCode === 8) {
        if (term._core.buffer.x > 2) {
          term.write('\b \b');
        }
      } else if (printable) {
        term.write(e.key);
      }
    };

    term.onKey(onKey);

    return () => {
      term.dispose();
    };
  }, []);

  return (
    <div id="terminal" className='terminal_container' >
      
    </div>
  );
};

export default CustomTerminal;
