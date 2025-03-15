"use client";

import React, { useEffect, useState, useRef } from 'react';
import '@/styles/terminal.css';

export function TerminalAnimation() {
  const terminalRef = useRef(null);
  const typingLines = useRef([]);
  const [key, setKey] = useState(0);
  const [hovered, setHovered] = useState(false);

  const commands = [
    { comment: "#!/usr/bin/env node" },
    { comment: "# Install Qalá", command: "npm i qala" },
    { comment: "# Initialize Qalá in your project", command: "qala init" },
    { comment: "# Authenticate and sync secrets", command: "qala auth" },
    { comment: "# Import production secrets", command: "qala import .env.production" },
    { comment: " " },
    { comment: "# Now import qalá to the file to patch the process.env" },
    { comment: " " },
    { comment: "#!/usr/bin/env node" },
    { code: "const app = require('qala')();" },
    { code: "const apiKey = process.env.API_KEY;" },
    { code: "const data = await fetchData(apiKey);" },
    { comment: " " }
  ];

  const hoverwin = () => setHovered(true);
  const mouseoutWin = () => setHovered(false);


  function createTerminalLine(content, lineType, term) {
    const lineElement = document.createElement("div");
    lineElement.className = lineType;

    if (lineType === "command") {
      const promptElement = document.createElement("span");
      promptElement.className = "prompt";
      promptElement.textContent = "$ ";
      lineElement.appendChild(promptElement);
    }

    const commandElement = document.createElement("span");
    commandElement.className = lineType;
    lineElement.appendChild(commandElement);
    term.appendChild(lineElement);


    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < content.length) {
        commandElement.textContent += content.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, lineType === "comment" ? 10 : 40);

    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        clearInterval(typeInterval);
        commandElement.textContent = content;
        resolve();
      }, content.length * (lineType === "comment" ? 5 : 20) + 100);

      typingLines.current.push(timeout);
    });
  }

  const isRunning = useRef(false);

  async function executeCommands(term) {
    if (isRunning.current) return; // Prevent duplicate runs
    isRunning.current = true;

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      if (command.comment) {
        await createTerminalLine(command.comment, "comment", term);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      if (command.command) {
        await createTerminalLine(command.command, "command", term);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      if (command.code) {
        await createTerminalLine(command.code, "code", term);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    const cursorElement = document.createElement("span");
    cursorElement.className = "cursor";
    term.lastChild.appendChild(cursorElement);
  }

  // Reset running flag on unmount
  useEffect(() => {
    return () => {
      isRunning.current = false;
    };
  }, []);


  useEffect(() => {
    setKey((prev) => prev + 1);
    console.log(key);

    const terminalContainer = terminalRef.current;
    if (terminalContainer) {
      executeCommands(terminalContainer);
    }

    return () => {
      // Stop all ongoing animations
      typingLines.current.forEach((timeout) => clearTimeout(timeout));
      typingLines.current = [];

      // Ensure terminal is fully cleared
      if (terminalRef.current) {
        terminalRef.current.innerHTML = "";
      }
    };
  }, []);


  return (
    <div className="terminal" onMouseOver={hoverwin} onMouseOut={mouseoutWin}>

      <div className="terminal-header">
        <div className="terminal-button red">
          <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5.5" stroke="#E74C3C" fill="#E74C3C" />
            <line x1="3" y1="3" x2="9" y2="9" stroke={hovered ? "black" : "transparent"} strokeWidth="1" />
            <line x1="3" y1="9" x2="9" y2="3" stroke={hovered ? "black" : "transparent"} strokeWidth="1" />
          </svg>
        </div>
        <div className="terminal-button yellow">
          <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5.5" stroke="#F1C40F" fill="#F1C40F" />
            <line x1="3" y1="6" x2="9" y2="6" stroke={hovered ? "black" : "transparent"} strokeWidth="1" />
          </svg>
        </div>
        <div className="terminal-button green">
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5.5" stroke="#2ECC71" fill="#2ECC71" />
          <g transform="rotate(45, 6, 6)">
            <polygon points="3,5 6,2 9,5" fill={hovered ? "black" : "transparent"} />
            <polygon points="3,7 6,10 9,7" fill={hovered ? "black" : "transparent"} />
          </g>
        </svg>
        </div>
        <div className="terminal-title">Terminal</div>
      </div>
      <div className="terminal-body" ref={terminalRef}></div>
    </div>
  );
}
