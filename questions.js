const QUESTIONS = [

  // EASY LEVEL
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Mark Language",
      "Home Tool Markup Language"
    ],
    correctIndex: 0,
    hint: "It structures web pages."
  },
  {
    question: "Which device is used to move cursor on screen?",
    options: ["Keyboard", "Mouse", "Printer", "Speaker"],
    correctIndex: 1,
    hint: "It is handheld and moves pointer."
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "C++"],
    correctIndex: 1,
    hint: "It controls colors and layout."
  },
  {
    question: "Which company developed Windows OS?",
    options: ["Apple", "Google", "Microsoft", "IBM"],
    correctIndex: 2,
    hint: "Founded by Bill Gates."
  },
  {
    question: "Which key is used to refresh a webpage?",
    options: ["F2", "F5", "F10", "F12"],
    correctIndex: 1,
    hint: "Function key number 5."
  },

  // MEDIUM LEVEL
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "<!-- -->", "**"],
    correctIndex: 0,
    hint: "Two forward slashes."
  },
  {
    question: "Which method converts JSON string to object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()"
    ],
    correctIndex: 0,
    hint: "Opposite of stringify."
  },
  {
    question: "Which keyword declares variable in JS?",
    options: ["int", "var", "string", "define"],
    correctIndex: 1,
    hint: "Old keyword before let and const."
  },
  {
    question: "Which company created JavaScript?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Google"],
    correctIndex: 2,
    hint: "Popular browser company in 90s."
  },
  {
    question: "Which HTML tag is used for image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correctIndex: 0,
    hint: "Starts with i."
  },

  // INTERMEDIATE
  {
    question: "Which operator is strict equality?",
    options: ["==", "===", "=", "!="],
    correctIndex: 1,
    hint: "Checks value and type."
  },
  {
    question: "Which function prints in console?",
    options: [
      "console.print()",
      "print.console()",
      "console.log()",
      "log.console()"
    ],
    correctIndex: 2,
    hint: "Most commonly used debugging method."
  },
  {
    question: "Which tag creates hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctIndex: 0,
    hint: "Anchor tag."
  },
  {
    question: "Which array method adds element at end?",
    options: ["push()", "add()", "append()", "insert()"],
    correctIndex: 0,
    hint: "Pushes element."
  },
  {
    question: "Which property changes background color?",
    options: [
      "color",
      "background-color",
      "bgcolor",
      "background"
    ],
    correctIndex: 1,
    hint: "Includes dash."
  },

  // ADVANCED
  {
    question: "Which protocol is used for web pages?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    correctIndex: 1,
    hint: "Hyper Text Transfer Protocol."
  },
  {
    question: "Which company created React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctIndex: 1,
    hint: "Now called Meta."
  },
  {
    question: "Which keyword stops loop?",
    options: ["exit", "stop", "break", "end"],
    correctIndex: 2,
    hint: "Used in switch also."
  },
  {
    question: "Which HTML tag runs JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    correctIndex: 1,
    hint: "Starts with s."
  },
  {
    question: "Which method removes last array element?",
    options: ["pop()", "remove()", "delete()", "cut()"],
    correctIndex: 0,
    hint: "Opposite of push."
  },

  // HARD LEVEL
  {
    question: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctIndex: 1,
    hint: "First In First Out."
  },
  {
    question: "Which algorithm finds shortest path?",
    options: ["DFS", "BFS", "Dijkstra", "Bubble"],
    correctIndex: 2,
    hint: "Named after scientist."
  },
  {
    question: "Which symbol selects ID in CSS?",
    options: [".", "#", "*", "$"],
    correctIndex: 1,
    hint: "Used before id name."
  },
  {
    question: "Which symbol selects class in CSS?",
    options: ["#", ".", "*", "$"],
    correctIndex: 1,
    hint: "Dot symbol."
  },
  {
    question: "Which keyword creates class in JS?",
    options: ["class", "object", "define", "struct"],
    correctIndex: 0,
    hint: "Same as Java."
  },

  // VERY HARD
  {
    question: "Which company created Linux?",
    options: ["Microsoft", "Apple", "Linus Torvalds", "IBM"],
    correctIndex: 2,
    hint: "Creator name starts with Linus."
  },
  {
    question: "Which complexity is fastest?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(2ⁿ)"],
    correctIndex: 1,
    hint: "Logarithmic."
  },
  {
    question: "Which keyword is async function?",
    options: ["async", "await", "promise", "delay"],
    correctIndex: 0,
    hint: "Used before function."
  },
  {
    question: "Which symbol spreads array?",
    options: ["...", "***", "+++", "---"],
    correctIndex: 0,
    hint: "Three dots."
  },
  {
    question: "Which method converts object to JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    correctIndex: 1,
    hint: "Opposite of parse."
  }

];