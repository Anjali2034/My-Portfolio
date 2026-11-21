window.BOT_KB = {
  logUrl: "https://script.google.com/macros/s/AKfycbwE76MevdRv2A8K76OfTbJ-btbgkbXzKALu8YwslHSJP4txiDErpxD6FBuzcG6JJQPhMA/exec",

  greeting: "Hi! I'm Anjali's portfolio assistant. Ask me about her work, results or availability.",

  starters: ["Quick intro", "Biggest win?", "A failure she learned from", "Availability & location"],

  fallback: {
    text: "That isn't in my notes, and I'd rather not guess. Anjali will happily answer it herself.",
    links: ["email", "whatsapp"],
    next: ["Quick intro", "Biggest win?", "What roles is she looking for?"]
  },

  nonEnglish: {
    text: "I can only answer in English for now. For anything else, Anjali is happy to help directly.",
    links: ["email", "whatsapp"],
    next: ["Quick intro", "Availability & location"]
  },
  // Tools and skills she does not have: never guess an answer for these.
  notSkills: ["figma", "tableau", "power bi", "powerbi", "photoshop", "salesforce", "illustrator", "canva", "sap$", "excel vba", "c++", "java$"],

  negative: ["drop$", "dropped$", "declin", "fell$", "fail", "mistake", "wrong", "worst", "bad$",
             "regret", "lost$", "lose$", "struggl", "setback", "weak", "didnt work", "did not work", "went wrong"],

  LINKS: {
    resume:     { label: "Résumé ↓",           href: "./assets/Anjali_Verma_Resume.pdf", newTab: true },
    email:      { label: "Email Anjali",        href: "mailto:anjali.verma20032004@gmail.com" },
    whatsapp:   { label: "WhatsApp",            href: "https://wa.me/918273613578", newTab: true },
    call:       { label: "Call +91 82736 13578", href: "tel:+918273613578" },
    linkedin:   { label: "LinkedIn",            href: "https://www.linkedin.com/in/anjali-verma-66023a284/", newTab: true },
    github:     { label: "GitHub",              href: "https://github.com/Anjali2034", newTab: true },
    pw:         { label: "PW case study",       href: "Case-PW.dc.html" },
    shiprocket: { label: "Shiprocket case study", href: "Case-Shiprocket.dc.html" },
    blinkit:    { label: "Blinkit case study",  href: "Case-Blinkit.dc.html" },
    scamcheck:  { label: "Try ScamCheck",       href: "https://scamcheck-h6pe.onrender.com", newTab: true },
    casewise:   { label: "Try CaseWise",        href: "https://casewise-youo.onrender.com", newTab: true },
    tumour:     { label: "Tumour model demo",   href: "https://huggingface.co/spaces/Anjali2034/Brain_tumor_deployment_model", newTab: true },
    work:       { label: "See all work",        section: "work" },
    projects:   { label: "Things she built",    section: "projects" },
    cases:      { label: "Case studies",        section: "cases" },
    about:      { label: "About",               section: "about" },
    quiz:       { label: "Daily Quiz project",  project: 0 },
    fmge:       { label: "FMGE Growth project", project: 1 },
    leads:      { label: "Lead Scoring project", project: 2 },
    payments:   { label: "Payment Recovery project", project: 3 }
  },

  topics: [
    {
      id: "failure-2", tier: 0,
      strong: ["another failure", "second failure", "other failure", "one more failure", "failed experiment", "experiment that failed", "experiment failed", "experiment fail", "experiment that didnt", "test that failed", "missed target"],
      terms: ["kill", "stopped"],
      weak: ["fail", "another$", "second$"],
      text: "Before the WhatsApp channel, Reflexprep's FMGE team tried paid ads with a new creative and a referral offer. Because it was a new platform, Anjali set a clear kill rule up front: 200 signups in two weeks. It missed, so they stopped instead of spending more and moved on to the WhatsApp community test, which grew signups 6x. Her takeaway: decide what failure looks like before you start, so stopping is easy.",
      links: ["fmge"],
      next: ["How did she grow signups 6x?", "How does she run experiments?"]
    },
    {
      id: "failure", tier: 0,
      strong: ["failure", "failed project", "biggest mistake", "went wrong", "didnt work", "did not work", "setback", "worst", "went badly", "mess up", "did not go as planned", "not go as planned", "didnt go as planned", "go wrong", "got wrong", "get wrong", "gotten wrong"],
      terms: ["fail", "mistake", "screwed", "messed up", "biggest challenge", "toughest", "hardest"],
      weak: ["wrong"],
      text: "On the Daily Quiz, Anjali signed off a release that had passed functional testing, but that evening the leaderboard's pagination broke under real traffic and over 60 students wrote in. She owns that gap: she had tested that it worked, not how it held up at volume, and she stayed with engineering until it was fixed. Since then, every release she owns is tested with production-scale data, and edge cases like volume go into the spec before development starts.",
      links: ["quiz"],
      next: ["Another failure?", "What would she do differently?", "Her biggest weakness?"]
    },
    {
      id: "weakness", tier: 0,
      strong: ["weakness", "weak point", "area of improvement", "areas of improvement", "needs improvement", "need to improve", "not good at", "bad at", "needs to improve", "improvement area", "should she work on", "should you work on", "work on herself", "should improve", "still learning", "improve on", "needs work", "get better at", "better at", "achilles", "weak spot", "blind spot"],
      terms: ["weak", "shortcoming", "flaw", "blind spot", "struggle with"],
      text: "Anjali's instinct is to go deep on building before the problem is validated, because she genuinely enjoys the build. She saw it on ScamCheck, where she built link sandboxing, screenshot reading and WhatsApp support before testing the core idea with users. Now she writes down the riskiest assumption first and tests it the cheapest way she can (a few user conversations, a fake-door test or a manual version), and builds only once it holds.",
      links: ["scamcheck"],
      next: ["How does she prioritise?", "A failure she learned from", "What does she want to learn next?"]
    },
    {
      id: "exit", tier: 0,
      strong: ["why did you leave", "why did she leave", "why leave", "left reflexprep", "leave reflexprep", "3 months", "three months", "laid off", "layoff", "restructur", "only 3", "short stint", "career gap", "reflexprep end", "why did reflexprep", "discontinu", "role end", "looking for a change", "job change", "reason for leaving", "reason to leave", "short tenure", "tenure", "job end", "why is she not working", "why are you not working", "why did her last", "why are you leaving", "why is she leaving", "leaving$", "so short", "shut her role", "role close", "role closed", "company shut", "shut down her"],
      terms: ["leave", "left$", "end$", "quit", "exit", "fired", "terminat", "let go", "ended", "gap", "why only"],
      weak: ["reflexprep"],
      text: "Anjali joined Reflexprep as Associate Product Manager in June 2026; in September the company restructured and the role was discontinued. In those three months she owned the Daily Quiz roadmap, grew FMGE signups 6x on a flat budget and built the payment recovery dashboard for sales. She can join immediately.",
      links: ["work", "resume"],
      next: ["Biggest win?", "Availability & location", "Her role vs the team?"]
    },
    {
      id: "exit-internships", tier: 0,
      strong: ["why did she leave", "why did you leave", "why leave", "leave neetprep", "left neetprep", "leave zaide", "left zaide", "neetprep end", "zaide end", "internship end", "internships end", "after neetprep", "after zaide", "neetprep role", "neetprep stint", "zaide role", "zaide stint"],
      terms: ["leave", "left$", "end$", "ended"],
      weak: ["neetprep", "neet prep", "zaide", "internship"],
      text: "Both were internships. NEETprep ran from January to June 2026, and when it ended she moved straight into a full-time Associate Product Manager role at Reflexprep. Zaide.ai was a summer ML internship in 2025, during her degree.",
      links: ["resume"],
      next: ["What did she do at NEETprep?", "Why did Reflexprep end?", "Her experience?"]
    },
    {
      id: "salary", tier: 0,
      strong: ["salary", "want to be paid", "ctc", "compensation", "expected pay", "pay expectation", "stipend", "package", "lpa", "how much does she expect", "how much do you expect", "how much would she", "how much will she", "how much is she asking", "asking for", "is she asking", "what is she asking", "current drawing", "drawing$", "in hand salary", "was she paid", "paid at", "she paid", "her pay", "pay at"],
      terms: ["pay", "money", "current ctc", "expected ctc", "lakh", "remuneration"],
      text: "Anjali is flexible on compensation and happy to discuss it once there's a fit. The quickest way to start that conversation is a short email.",
      links: ["email"],
      next: ["Availability & location", "What roles is she looking for?"]
    },
    {
      id: "employers", tier: 0,
      strong: ["bad manager", "manager bad", "manager was bad", "bad boss", "toxic", "hate", "work culture", "badmouth", "complain", "worst company", "bad company", "company was bad", "bad team", "bad employer", "company bad", "dislike", "didnt like", "did not like", "didnt enjoy"],
      terms: ["boss"],
      text: "Anjali has learnt something at every team she's worked with, and she won't speak badly of any of them. Happy to tell you what she achieved and learnt at each one: Reflexprep, NEETprep or Zaide.ai.",
      next: ["What did she do at NEETprep?", "What did she do at Zaide.ai?", "Biggest win?"]
    },
    {
      id: "confidential-numbers", tier: 0,
      strong: ["exact revenue", "how much revenue", "revenue in rupees", "actual revenue", "how much money", "absolute numbers", "ad spend", "ad budget", "how much budget"],
      terms: ["rupees", "inr", "budget"],
      text: "Anjali keeps her former employers' internal revenue and budget figures confidential, so she shares results as multiples and unit costs: 2x monthly quiz revenue, 6x signups on the same budget, and cost per signup down from ₹600 to ₹107.",
      links: ["work"],
      next: ["How did she grow signups 6x?", "Biggest win?"]
    },
    {
      id: "proximics", tier: 0,
      strong: ["proximics", "y combinator", "yc application", "ycombinator"],
      terms: ["yc"],
      text: "That's one Anjali would rather talk about in person. Drop her a short email and she'll happily walk you through it.",
      links: ["email"],
      next: ["Quick intro", "Things she built"]
    },
    {
      id: "differently", tier: 0,
      strong: ["do differently", "done differently", "differently", "in hindsight", "looking back", "regret", "would change"],
      weak: ["improve", "learnt", "learned", "learning"],
      text: "On the Daily Quiz, Anjali would set up event tracking before launch, not after. Daily players doubled, but the CleverTap funnel came later, so early on the team couldn't see which changes drove the growth or where users dropped off. Today, defining what to measure is part of her spec, before development starts.",
      links: ["quiz"],
      next: ["A failure she learned from", "How does she prioritise?"]
    },
    {
      id: "disagreement", tier: 0,
      strong: ["disagree", "disagreement", "conflict", "pushback", "push back", "say no", "difficult stakeholder", "convince", "persuade", "pushed back", "push back", "pushing back", "pushed back on", "push back on"],
      terms: ["argument", "influence", "negotiat", "work with engineer", "working with engineer", "work with design", "work with developer"],
      weak: ["stakeholder", "manager", "engineer"],
      text: "Her manager wanted the quiz automation system to be 100% proven before launch, after five or six full runs on the dev environment. Anjali's view, shaped by the earlier leaderboard incident, was that some issues only appear with real users at real volume, so the fastest route to a reliable system was to launch a solid version and improve it live. She walked him through what had been tested and what only live usage could show; they agreed to launch, and the system went on to help double quiz revenue.",
      links: ["quiz"],
      next: ["A failure she learned from", "Her role vs the team?"]
    },
    {
      id: "concern", tier: 0,
      strong: ["why not hire", "why shouldnt", "why should not", "why we shouldnt", "red flag", "concern", "risk of hiring", "doubt", "not hire", "reject", "convince me"],
      terms: ["risk", "hesita", "worry", "convince me"],
      text: "Fair question. The honest one is experience: Anjali is early in her career. But in just over a year she has owned a roadmap, doubled monthly quiz revenue, grown signups 6x on a flat budget and shipped an ML model to production, so she learns fast and delivers. The best way to test that is a case round or assignment, which she's happy to do.",
      links: ["work", "email"],
      next: ["Biggest win?", "Her biggest weakness?", "Does she do assignments?"]
    },
    {
      id: "personal", tier: 0,
      strong: ["married", "marital", "marriage", "religion", "caste", "boyfriend", "husband", "family background", "kids", "children", "single$", "relationship", "her family", "about her family", "your family"],
      terms: ["family", "parents", "father", "mother", "personal life"],
      text: "Anjali keeps this space about her work. Happy to tell you about her projects, results or availability.",
      next: ["Quick intro", "Biggest win?", "Availability & location"]
    },
    {
      id: "age", tier: 1,
      strong: ["how old", "age$", "her age", "your age", "years old", "date of birth", "dob", "born in", "birth year", "year was she born", "when was she born", "born$"],
      text: "Anjali is 22. She graduated from NIT Jalandhar in 2026 and has already worked in product, growth and ML across three companies.",
      links: ["work"],
      next: ["Quick intro", "Her experience?", "Availability & location"]
    },
    {
      id: "rude", tier: 0,
      strong: ["stupid", "idiot", "useless", "dumb", "shut up", "nonsense", "rubbish", "trash", "garbage", "waste of time", "sucks", "fuck", "shit", "bakwas"],
      terms: ["boring", "pathetic", "lame"],
      text: "I'm here to help with questions about Anjali's work. If you'd rather reach her directly, her email is below.",
      links: ["email"],
      next: ["Quick intro", "Biggest win?"]
    },
    {
      id: "logistics", tier: 1,
      strong: ["availab", "notice period", "join immediately", "when can", "start date", "relocat", "where is she based", "where are you based", "based in", "remote", "hybrid", "in office", "location", "how soon", "work from office", "from office", "immediate joiner", "joiner", "where does she live", "where do you live", "lives in", "stays in", "come to office", "office daily", "go to office", "from the office"],
      terms: ["notice", "join", "city", "delhi", "mumbai", "bangalore", "bengaluru", "pune", "gurgaon", "gurugram", "noida", "ncr", "hyderabad", "chennai", "kolkata", "onsite", "wfh", "work from home"],
      weak: ["start", "move"],
      text: "Anjali can join immediately; she has no notice period. She's based in New Delhi and happy to relocate to Bengaluru, Gurugram, Noida, Mumbai or Pune, and she's comfortable with remote, hybrid or in-office roles.",
      links: ["email", "resume"],
      next: ["What roles is she looking for?", "How do I contact her?"]
    },
    {
      id: "roles", tier: 1,
      strong: ["looking for", "what roles", "which roles", "kind of role", "type of role", "job search", "open to work", "product analyst", "business analyst", "targeting", "applying for", "apply for", "consider a", "analyst job", "analyst role", "apm positions", "apm roles", "open to apm", "apm position"],
      terms: ["roles", "position", "apm", "associate product", "product analyst", "business analyst", "analyst", "job$", "opportunit", "hiring for", "interested in"],
      text: "Anjali is looking for full-time Associate Product Manager, Product Analyst and Business Analyst roles. Company size matters less to her than the role: she wants to own real outcomes and grow fast. She can join immediately and is open to relocating.",
      links: ["resume", "email"],
      next: ["Availability & location", "Why product management?", "Quick intro"]
    },
    {
      id: "jobtype", tier: 1,
      strong: ["looking for full", "full time", "fulltime", "part time", "contract role", "contract job", "on contract", "contractual", "with contract", "contract basis", "freelance", "open to intern", "looking for intern", "want an intern", "an internship", "intern role", "consulting", "trial project", "paid trial", "type of job", "job type", "employment type", "startup or", "big company", "mnc", "company size", "kind of company", "type of company", "which companies", "dream company"],
      terms: ["startup", "stage", "corporate"],
      text: "Anjali is looking for a full-time role. She's also open to a paid trial project or short contract if it leads to a full-time position, but not internships. She's open to companies of any size where she can take real ownership and grow.",
      links: ["email"],
      next: ["What roles is she looking for?", "Availability & location"]
    },
    {
      id: "current", tier: 1,
      strong: ["working now", "work now", "currently working", "current employer", "is she working", "is she employed", "employed$", "where does she work", "where do you work", "doing now", "doing right now", "currently doing", "up to now", "up to these days", "these days", "since september", "since reflexprep", "after reflexprep", "what is she working on", "what are you working on", "working on now", "currently working on", "right now", "been up to", "up to lately", "up to these days"],
      terms: ["currently", "nowadays", "present"],
      text: "Since September, Anjali has been writing product case studies (PhysicsWallah, Shiprocket and Blinkit), improving ScamCheck and CaseWise with feedback from users, and interviewing for APM and product analyst roles. She treats the job search like a product: shipping work that shows how she thinks.",
      links: ["cases", "projects"],
      next: ["Her case studies?", "Things she built", "Availability & location"]
    },
    {
      id: "interviewing", tier: 1,
      strong: ["other offer", "offer in hand", "holding offer", "interviewing elsewhere", "other interviews", "other companies", "any offer", "competing offer", "interview process", "actively looking", "offers$"],
      terms: ["offer$", "pipeline", "interviewing"],
      text: "Anjali is actively interviewing and can join immediately, so she can move quickly for the right role.",
      links: ["email"],
      next: ["What roles is she looking for?", "Availability & location"]
    },
    {
      id: "assignment", tier: 1,
      strong: ["assignment", "take home", "takehome", "case round", "case interview", "test task", "home task", "trial task", "product exercise"],
      terms: ["task", "exercise"],
      text: "Yes, happily. Assignments and case rounds are a good way to show how she works. Up to three or four hours lets her do it properly, and her three case studies show the kind of work to expect.",
      links: ["cases", "email"],
      next: ["Her case studies?", "How does she prioritise?"]
    },
    {
      id: "references", tier: 1,
      strong: ["reference", "referee", "background check", "recommendation", "vouch", "testimonial"],
      terms: ["who can confirm", "verify"],
      text: "References are available on request, from her manager at Reflexprep and her reporting lead in NEETprep's CEO's office. Email Anjali and she'll connect you.",
      links: ["email"],
      next: ["How does she work with her manager?", "Availability & location"]
    },
    {
      id: "contact", tier: 1,
      strong: ["contact", "reach her", "reach you", "get in touch", "email", "phone", "phone number", "contact number", "contact details", "mobile", "email id", "email address", "whatsapp", "call her", "call you", "her number", "your number", "phone no", "mobile no", "reach anjali", "reach out", "how to reach", "linkedin", "her linkedin"],
      terms: ["mail", "call", "talk to", "speak to", "connect", "message her", "address", "schedule", "book a", "set up a", "meeting", "interview her"],
      text: "Email is best: anjali.verma20032004@gmail.com, and it's also the easiest way to set up a call. You can call or WhatsApp her on +91 82736 13578, or connect on LinkedIn.",
      links: ["email", "whatsapp", "linkedin"],
      next: ["Availability & location", "Can I see her résumé?"]
    },
    {
      id: "resume", tier: 1,
      strong: ["resume", "résumé", "cv", "github", "portfolio", "biodata", "bio data"],
      terms: ["pdf", "download"],
      text: "Here you go. Her résumé covers Reflexprep, NEETprep and Zaide.ai, plus her projects. Her code is on GitHub.",
      links: ["resume", "linkedin", "github"],
      next: ["Quick intro", "Availability & location"]
    },
    {
      id: "intro", tier: 1, brag: true,
      weak: ["about her", "about anjali", "tell me about"],
      exact: ["about", "bio", "about me", "profile", "product", "pm", "tell me about her", "tell me about anjali", "about anjali", "about her", "tell me about yourself", "bio please", "short bio", "a short bio", "a short bio please"],
      strong: ["quick intro", "tell me about yourself", "who is anjali", "who is she", "introduce", "summary", "summarise", "summarize", "overview", "product manager", "elevator pitch", "tldr", "who is this", "about the candidate", "describe her", "what does anjali do", "what does she do", "kind of pm", "sum her up", "her story", "talking about", "who is she", "anjali who", "bio$", "short bio", "brief about", "in brief", "who exactly", "all about", "is anjali", "who anjali is", "describe her work", "her work like"],
      terms: ["intro", "background", "profile", "yourself", "herself"],
      text: "Anjali is an Associate Product Manager focused on growth and data, who loves building and shipping products that make a real difference for users. In 2026 she doubled monthly quiz revenue at Reflexprep, grew FMGE signups 6x on the same budget, and shipped a lead scoring model at NEETprep that scores 100K+ leads a month. She's looking for APM, Product Analyst or Business Analyst roles and can join immediately.",
      links: ["work", "resume"],
      next: ["Biggest win?", "A failure she learned from", "Why should we hire her?"]
    },
    {
      id: "strengths", tier: 1, brag: true,
      strong: ["why hire", "why should we hire", "why should i hire", "strength", "superpower", "good at", "stand out", "unique", "what makes her", "what makes you", "why her", "why you", "good fit", "right fit", "sets her apart", "sets you apart", "fit for", "best quality", "qualities", "pick her", "choose her", "hire her", "right candidate", "best candidate", "pick anjali", "over others", "over other candidates", "choose anjali"],
      terms: ["best at", "value", "bring to", "differen"],
      text: "Three things stand out. She finds the number that matters, like the SQL query that showed droppers convert best. She ships: a production ML model, an automated quiz system and a recovery dashboard she built herself. And she gets results from ownership rather than budget: 6x signups on the same spend is a good example.",
      links: ["work"],
      next: ["Her biggest weakness?", "Biggest win?", "Her role vs the team?"]
    },
    {
      id: "fresher", tier: 1,
      strong: ["fresher", "hire a fresher", "junior", "entry level", "new grad", "not enough experience", "less experience", "only one year", "inexperienced", "little experience", "1 year of experience", "one year of experience", "new to product", "experienced enough", "enough experience", "only 1 year"],
      terms: ["how long"],
      text: "Anjali is early in her career, but in just over a year she has owned a product roadmap, run growth experiments and shipped an ML model to production, across three companies. She's used to small teams where she owns the outcome, and she's open about what she's still learning.",
      links: ["work", "resume"],
      next: ["Biggest win?", "What does she want to learn next?"]
    },
    {
      id: "win", tier: 1, brag: true,
      strong: ["biggest win", "proudest", "proud of", "achievement", "accomplishment", "best work", "best project", "greatest", "highlight", "most impactful", "impactful", "results has she", "results delivered", "what results", "quiz project", "best result", "best results", "biggest result", "quiz grow", "did the daily quiz grow", "quiz growth", "quiz players grow"],
      terms: ["win", "proud", "achiev", "accomplish", "impact", "success", "daily quiz", "quiz", "revenue", "doubled"],
      text: "Her biggest win is the Daily Quiz at Reflexprep. She turned a manual Google Forms quiz into a real product: she wrote the PRD, designed the UI, built the frontend, ran sprints and UAT, and took it to launch. Daily players grew from about 230 to 480, and monthly quiz revenue doubled.",
      links: ["quiz"],
      next: ["How does the quiz make money?", "What would she do differently?", "A failure she learned from"]
    },
    {
      id: "quizmoney", tier: 1,
      strong: ["make money", "makes money", "monetis", "monetiz", "business model", "revenue model", "how does the quiz", "quiz work", "coupon", "how long did the quiz", "quiz team", "quiz timeline"],
      terms: ["earn", "paid users", "convert", "daily quiz"],
      weak: ["quiz"],
      text: "The Daily Quiz is free to play and brings students back every day. Revenue comes from conversion: each quiz ends with a coupon code that nudges players towards buying a test series or course. Anjali designed the UI and built the frontend herself while engineering built the backend, took it from PRD to launch in about two weeks, and spoke with 80+ students along the way about what mattered to them.",
      links: ["quiz"],
      next: ["What would she do differently?", "A failure she learned from"]
    },
    {
      id: "role", tier: 1,
      strong: ["role vs", "her role", "your role", "my role", "her part", "your part", "own part", "contribution", "what was hers", "what was yours", "team vs", "vs the team", "ownership", "own vs", "individual", "exact role", "role in these", "role in the projects", "what did she own"],
      terms: ["responsib", "owned", "team size"],
      text: "Her part on each project was specific. Daily Quiz: she owned the roadmap, PRD, sprints, UAT and delivery, and designed the UI and built the frontend herself while engineering built the backend. FMGE: she designed and ran the WhatsApp channel test. Lead Scoring: she revived the paused project, found the droppers signal in SQL, built the model and deployed it herself on AWS Lambda for sales. Payment Recovery: she built the dashboard herself, then automated failed-payment tracking.",
      links: ["work"],
      next: ["Biggest win?", "Tell me about a disagreement"]
    },
    {
      id: "whypm", tier: 1,
      strong: ["why product", "why pm", "why product management", "why become", "how did you get into", "how did she get into", "switch to product", "move to product", "into product", "biotech to product", "why not biotech", "choose product", "chose product", "switch from biotech", "leave biotech", "want to be a pm", "be a pm", "become a pm", "drew her", "drawn to product", "attracted to product", "love product"],
      terms: ["motivat", "passion"],
      weak: ["why"],
      text: "At Zaide.ai she trained a tumour detection model, and what stayed with her wasn't the accuracy but who would use it and how. At NEETprep, the best part of shipping lead scoring was watching sales call the right students first. She enjoys deciding what to build and why, and making sure it actually gets used. That's product management.",
      next: ["What does she want to learn next?", "Her degree and background?"]
    },
    {
      id: "education", tier: 1,
      strong: ["biotech", "degree", "education", "college", "university", "nit", "jalandhar", "studied", "study", "b tech", "btech", "graduat", "qualification", "qualif", "passing year", "pass out", "passout", "batch$", "she an engineer", "you an engineer", "engineering degree"],
      terms: ["major", "branch", "academic", "school"],
      text: "Anjali has a B.Tech in Biotechnology from NIT Jalandhar (2022 to 2026, degree in November 2026). It trained her to work with data, run experiments and reason from evidence, and she spent much of college on the E-Cell and building things. Product was the natural next step: the same habit of testing ideas, applied to real products and real people.",
      links: ["about"],
      next: ["Why product management?", "Things she built"]
    },
    {
      id: "grades", tier: 1,
      strong: ["cgpa", "gpa", "sgpa", "grade", "marks", "percentage", "score in college", "academic score", "class rank", "topper"],
      terms: ["academic record"],
      weak: ["college"],
      text: "Anjali is happy to share her academic details directly. Drop her an email, and in the meantime her work and projects are the best picture of what she can do.",
      links: ["email", "work"],
      next: ["Her degree and background?", "Biggest win?"]
    },
    {
      id: "courses", tier: 1,
      strong: ["certification", "certificate", "certified", "course$", "courses$", "udemy", "coursera", "online course", "training"],
      terms: ["upskill", "self taught", "self learn"],
      text: "Anjali completed the Become a Product Manager course on Udemy, but most of her learning comes from doing: three companies, two live products of her own and three product case studies.",
      links: ["cases", "projects"],
      next: ["Her case studies?", "Things she built"]
    },
    {
      id: "next", tier: 1,
      strong: ["learn next", "want next", "next step", "5 years", "five years", "goal", "aspiration", "ambition", "future", "first pm role", "looking to learn", "grow into", "career goal", "career plan", "few years", "want to be in", "see herself", "see yourself", "want to become", "wants to become", "kind of pm does she want"],
      terms: ["plan", "long term", "want to learn"],
      text: "She wants to own a product area end to end: find the problem, ship the solution and be accountable for the number it moves. In her first PM role she wants to go deeper on user research and on sharper prioritisation calls with engineering and design.",
      next: ["What roles is she looking for?", "Why product management?"]
    },
    {
      id: "fmge", tier: 1, brag: true,
      strong: ["fmge", "6x", "signups 6x", "whatsapp community", "whatsapp communities", "whatsapp channel", "whatsapp group", "group admin", "admin", "fmge project", "whatsapp growth"],
      terms: ["acquisition", "signup", "sign up", "growth", "grow", "marketing", "channel", "community", "cost per signup", "cps", "cac"],
      text: "FMGE is the licensing exam for Indians who studied medicine abroad, and those students already gather in WhatsApp groups by country and university. Reflexprep's new FMGE platform had stalled below 50 signups a month on paid ads, so Anjali partnered with the admins of 20+ of these groups, offering a fee plus free mock tests and exclusive content for their members. On the same budget, signups grew 6x to 300+ a month, cost per signup fell from ₹600 to ₹107, and monthly revenue grew 5x.",
      links: ["fmge"],
      next: ["How does she run experiments?", "Her role vs the team?"]
    },
    {
      id: "leads", tier: 1, brag: true,
      strong: ["lead scoring", "lead score", "droppers", "dropper", "logistic regression", "lambda", "100k", "connect rate", "model at neetprep", "ml model at", "scoring model", "help the sales team", "sales team prioritise", "sales team prioritize", "which students", "call first"],
      terms: ["lead$", "leads$", "scoring", "sales team", "intent signal", "conversion"],
      text: "At NEETprep, a lead scoring project had been paused because the earlier version wasn't reliable enough to act on, while sales handled 100K+ leads a month. Anjali revived it, built a logistic regression model on 7+ intent signals, and found in SQL that droppers (students retaking NEET) convert 2.5x better than Class 12 students (8% vs 3%). She shipped it to production on AWS Lambda, and with sales calling top-scored leads first, connect rate rose from 20% to 32%.",
      links: ["leads"],
      next: ["What else did she do at NEETprep?", "Can she work with data?"]
    },
    {
      id: "payments", tier: 1,
      strong: ["payment recovery", "dropped payment", "failed payment", "dropped transaction", "appsmith", "razorpay", "paytm", "dashboard", "payment migration", "payment dashboard", "payments dashboard", "failed transaction", "failed transactions", "payment failure", "payment failures", "failure dashboard", "payment failed"],
      terms: ["payment", "recover", "transaction", "internal tool", "migration"],
      text: "During Reflexprep's Paytm to Razorpay migration, sales had no single view of failed payments. Anjali built an Appsmith dashboard herself that surfaced 39 dropped transactions for follow-up, then automated it so the team could track failed payments and measure recovery.",
      links: ["payments"],
      next: ["Her role vs the team?", "Tools she uses?"]
    },
    {
      id: "neetprep", tier: 1, brag: true,
      strong: ["neetprep", "neet prep", "ceo office", "ceos office", "founders office", "founder office", "paid ads", "remarketing", "cost per lead", "cpl"],
      terms: ["neet", "google ads", "meta ads", "clevertap", "reporting", "automat"],
      text: "Anjali interned in NEETprep's CEO's office on product and growth (Jan to Jun 2026). Beyond shipping lead scoring, she ran paid acquisition on Google and Meta for the flagship NEET batch and cut cost per lead by about 40% with remarketing. She also fixed customer-record failures in CleverTap and automated daily reporting, saving the team 40 to 50 minutes a day.",
      links: ["leads", "resume"],
      next: ["Tell me about lead scoring", "Can she work with data?"]
    },
    {
      id: "zaide", tier: 1, brag: true,
      strong: ["zaide", "radiology", "yolo", "yolov8", "medical imaging"],
      terms: ["medical", "healthcare"],
      text: "At Zaide.ai (Jun to Sep 2025) Anjali learnt machine learning for medical imaging under a mentor. She trained a YOLOv8 brain tumour detection model on 15K+ MRI scans to 96% accuracy and deployed it as an inference API on Hugging Face. She then built her own U-Net tumour segmentation project to apply what she'd learnt.",
      links: ["tumour"],
      next: ["Why product management?", "Things she built"]
    },
    {
      id: "reflexprep", tier: 1, brag: true,
      strong: ["reflexprep", "reflex prep", "last company", "last job", "last role", "last employer", "last organisation", "last organization", "latest company", "latest role", "latest job", "latest employer", "most recent", "recent company", "recent job", "worked last", "work last", "last workplace", "most recent role", "recent role", "latest role", "last position", "latest position", "current position", "at reflexprep", "role at reflexprep"],
      terms: ["apm role", "associate product manager"],
      text: "At Reflexprep (Jun to Sep 2026) Anjali was a full-time Associate Product Manager. She owned the Daily Quiz roadmap and doubled monthly quiz revenue, grew FMGE signups 6x on a flat budget, and built the payment recovery dashboard for sales.",
      links: ["quiz", "fmge", "payments"],
      next: ["Why did Reflexprep end?", "Biggest win?"]
    },

    {
      id: "experience", tier: 1,
      exact: ["experience", "exp"],
      strong: ["work experience", "her experience", "work history", "employment", "previous companies", "past companies", "companies", "current company", "current role", "current job", "designation", "previous company", "previous companies", "previous employer", "former employer", "past employer", "which company", "which companies", "what company", "what companies", "companies worked", "organisations", "organizations", "employer$", "employers$", "where has she worked", "where have you worked", "years of", "total experience", "how much experience", "work experience", "has she worked", "worked before", "prior work", "prior experience", "past roles", "previous roles", "roles has she held", "roles held", "job history", "where work", "list her jobs", "her jobs", "jobs has she", "has she held", "held$", "done so far", "previous jobs", "past jobs", "professional experience", "professional background", "all jobs", "all roles", "all her", "list of jobs", "list of companies", "jobs she", "jobs did", "job she had", "jobs she had", "has she had", "what all", "all experience", "every job", "every company", "all the companies", "all the jobs", "she did", "anjali did", "has she done", "jobs done", "her roles", "all her roles", "before reflexprep", "before the apm", "before her last", "before her apm", "earlier role", "earlier roles", "prior to", "do before", "did before", "role before", "roles before", "job before", "worked before reflexprep", "before neetprep", "after college", "after graduation", "after her degree", "do after college", "did after college", "after she graduated"],
      terms: ["your experience", "career", "jobs$", "job history", "worked at", "edtech", "startup", "internship", "intern$", "timeline"],
      weak: ["experience"],
      text: "Anjali has three roles behind her, in edtech and AI: full-time Associate Product Manager at Reflexprep (Jun to Sep 2026, until the company restructured), intern in the CEO's office for product and growth at NEETprep (Jan to Jun 2026), and ML intern in AI for radiology at Zaide.ai (Jun to Sep 2025). She's available now and can join immediately.",
      links: ["resume", "work"],
      next: ["What did she do at NEETprep?", "Biggest win?", "Why did Reflexprep end?"]
    },
    {
      id: "workstyle", tier: 1,
      strong: ["soft skill", "leadership", "communication", "teamwork", "team player", "collaborat", "problem solving", "problem solver", "working style", "work style", "cross functional", "interpersonal", "people skill", "lead a team", "stakeholders", "handle stakeholders", "manage stakeholders", "work in a team", "in a team", "team environment"],
      terms: ["communicat", "team work", "work with others", "attitude", "personality"],
      text: "Anjali works closely with design, engineering and sales: she ran sprint planning and UAT on the Daily Quiz, and built and shipped lead scoring for the sales team. When she disagrees, she makes her case with evidence, as she did when walking her manager through what testing could and couldn't show before the quiz automation launch. And she stays when things break: after the leaderboard incident she worked late with engineering until it was fixed.",
      links: ["quiz"],
      next: ["Tell me about a disagreement", "A failure she learned from", "Her role vs the team?"]
    },
    {
      id: "data", tier: 1, brag: true,
      strong: ["sql", "work with data", "data analysis", "analytics", "analyse", "analyze", "analytical", "dashboarding", "excel"],
      terms: ["data", "analys", "number", "metric", "query", "insight", "mixpanel", "funnel"],
      text: "Yes, she writes SQL every week. At NEETprep, one query showed that droppers convert 2.5x better than Class 12 students (8% vs 3%), and that became a signal in the lead scoring model that scores 100K+ leads a month. She works in CleverTap and Mixpanel, and she automated NEETprep's daily reporting.",
      links: ["leads"],
      next: ["Tools she uses?", "How does she run experiments?"]
    },
    {
      id: "tools", tier: 1,
      strong: ["tools", "tool stack", "tech stack", "stack", "software", "python", "code", "coding", "program", "technical", "programming language", "programming languages", "coding languages", "coding language"],
      terms: ["tool", "clevertap", "mixpanel", "aws", "cursor", "lovable", "claude", "skills", "skill set", "skillset", "technical skill", "hard skill", "key skill", "prompt engineering", "rag$", "evals", "ai guardrail", "unit economics", "llm product"],
      text: "Product and growth: discovery, PRDs, prioritisation, sprint planning and UAT, channel experiments, paid acquisition and unit economics. Data: SQL, funnel and cohort analysis, event tracking, CleverTap and Mixpanel. AI and build: LLM product design, prompt engineering, RAG, AI guardrails and evals, Appsmith, Python, AWS Lambda, Claude and Cursor. ScamCheck, CaseWise and her U-Net model are all her own builds.",
      links: ["projects", "github"],
      next: ["Things she built", "Can she work with data?"]
    },
    {
      id: "ml", tier: 1, brag: true,
      strong: ["machine learning", "ml", "ai", "artificial intelligence", "u net", "unet", "tumour", "tumor", "mri", "brain", "deep learning", "ai native", "llm"],
      terms: ["model", "neural", "pytorch", "hugging face", "huggingface", "genai", "gen ai"],
      text: "Anjali has shipped ML to production: a lead scoring model on AWS Lambda at NEETprep that scores 100K+ leads a month. She also trained a YOLOv8 tumour detector at Zaide.ai and her own U-Net that outlines brain tumours on MRI scans (Dice 0.84 on unseen scans, live on Hugging Face). Day to day she prototypes with Claude, Cursor and Lovable.",
      links: ["tumour", "leads"],
      next: ["Things she built", "Why product management?"]
    },
    {
      id: "toolkit", tier: 1,
      strong: ["prioriti", "framework", "north star", "kill rule", "guardrail", "a b test", "ab test", "experiment", "hypothes", "decide what to build", "how does she decide", "how do you decide", "product sense", "approach", "measure success", "define metrics", "metrics does she", "which metrics", "what metrics", "what to build", "build first", "pick what"],
      terms: ["testing", "process", "method", "measure", "success metric", "trade off", "tradeoff", "decision", "rice"],
      text: "She compares options on impact, effort and risk, and picks the one that fixes the root cause rather than the symptom. Before building, she sets a north-star metric, guardrails and a kill rule, so the team agrees up front what success and failure look like. Her FMGE channel test is a good example: one new channel, budget held flat, results compared against paid ads.",
      links: ["fmge", "pw"],
      next: ["Read her PW case study", "A failure she learned from"]
    },
    {
      id: "prd", tier: 1,
      strong: ["prd", "product requirement", "spec$", "specs$", "user stor", "sprint", "uat", "agile", "roadmap", "agile teams", "agile team", "user stories"],
      terms: ["requirement", "documentation", "jira", "scrum"],
      text: "Yes. On the Daily Quiz she wrote the PRD (difficulty tiers and an exam-weighted topic schedule), designed the UI and built the frontend herself, ran sprint planning with engineering, and led UAT and delivery. Since then, her specs include what to measure and edge cases like data volume before development starts.",
      links: ["quiz"],
      next: ["What would she do differently?", "How does she prioritise?"]
    },
    {
      id: "scamcheck", tier: 1, brag: true,
      strong: ["scamcheck", "scam check", "scam", "fraud", "upi"],
      terms: ["phishing", "otp", "hinglish", "suspicious", "crore", "cyber", "22495"],
      text: "Indians lost at least ₹22,495 crore to cyber fraud in 2025 (Ministry of Home Affairs data), yet most scams follow a handful of known scripts. ScamCheck gives a verdict, the evidence and the next step in seconds, in English, Hindi or Hinglish, and 40+ users have tested it. Verdicts are rules-first: AI can only make a verdict stricter, never softer. Users shaped it too, so it hides OTPs instantly and reads screenshots. Next is WhatsApp, where scams arrive.",
      links: ["scamcheck", "github"],
      next: ["Tell me about CaseWise", "Her biggest weakness?"]
    },
    {
      id: "casewise", tier: 1, brag: true,
      strong: ["casewise", "case wise", "legal", "lawyer", "contract", "legal ai", "contract review", "legal tool", "legal assistant"],
      terms: ["law", "compliance", "document assistant", "privacy", "stack", "built on", "users"],
      text: "CaseWise helps people understand or draft a legal document without a lawyer on hand: plain-language answers, drafting, contract analysis, compliance checks and simplifying legal text, with PDF upload. It's privacy-first, with no database and documents processed in memory, and it can run fully on your own computer with a local model. It gives general legal information, not legal advice. Anjali has tested it with 40 to 50 people in her network and is improving it from their feedback before opening it up more widely.",
      links: ["casewise", "github"],
      next: ["Tell me about ScamCheck", "Tools she uses?"]
    },
    {
      id: "projects", tier: 1, brag: true,
      strong: ["things she built", "side project", "personal project", "built herself", "what has she built", "what have you built", "build anything", "built anything", "projects", "build products", "own products", "products herself", "products she built", "side hustle", "side hustles", "side gig"],
      terms: ["project", "built", "build", "github", "demo", "product she"],
      text: "Two live products and an ML project, all her own builds. ScamCheck checks suspicious messages, links, UPI IDs and screenshots in English, Hindi or Hinglish. CaseWise is a privacy-first AI legal document assistant. And a U-Net model outlines brain tumours on MRI scans.",
      links: ["scamcheck", "casewise", "projects"],
      next: ["Tell me about ScamCheck", "Tell me about CaseWise", "Her case studies?"]
    },
    {
      id: "cases", tier: 1, brag: true,
      strong: ["case stud", "teardown", "product thinking", "product teardown", "product critique", "critiques", "critique"],
      terms: ["case"],
      text: "She's written three product case studies. PhysicsWallah: a mock test report that tells students what to do next, built from 840 reviews and a full mock she took herself. Shiprocket: who pays when a courier fakes a delivery attempt, from 169 coded seller reviews. Blinkit: why people keep it for groceries only, from 600 reviews. Start with PW.",
      links: ["pw", "shiprocket", "blinkit"],
      next: ["How does she prioritise?", "Things she built"]
    },

    {
      id: "case-pw", tier: 1, brag: true,
      strong: ["physicswallah", "physics wallah", "pw$", "mock test", "mistake review", "test report"],
      terms: ["jee", "edtech case", "7 day plan", "case stud", "case"],
      text: "In her PhysicsWallah case study, Anjali found that the mock test report stops at the score and leaves the next step to a tired student. From 840 Play Store reviews, a full mock she took herself and PW's own advice, she designed a five-minute Mistake Review: AI guesses why each mark was lost, the student confirms, and PW's own lectures become a 7-day plan with a retest. Success is measured as closed loops per mock taker per week, with a kill rule set up front.",
      links: ["pw"],
      next: ["Shiprocket case study?", "Blinkit case study?", "How does she prioritise?"]
    },
    {
      id: "case-shiprocket", tier: 1, brag: true,
      strong: ["shiprocket", "ship rocket", "fake delivery", "delivery attempt", "courier", "rto", "delivery boost"],
      terms: ["logistics case", "seller", "ndr", "case stud", "case"],
      text: "In her Shiprocket case study, Anjali looked at what happens when a courier marks a failed delivery with no proof: the seller pays and can't check it. After coding 169 recent seller reviews and checking claims in a live seller account, she designed a verified attempt ledger, where missing proof plus a buyer dispute means a free reattempt and the cost moves to the courier. Simple rules decide refunds and AI only flags cases, so every verdict can be read and contested.",
      links: ["shiprocket"],
      next: ["PW case study?", "Blinkit case study?"]
    },
    {
      id: "case-blinkit", tier: 1, brag: true,
      strong: ["blinkit", "quick commerce", "qcommerce", "q commerce", "zepto", "blinkit assured", "electronics"],
      terms: ["grocer", "return", "replacement", "case stud", "case"],
      text: "Her Blinkit case study started with her own failed return of a faulty iron. From 600 reviews and an audit of the app, she found that people can find non-grocery products but can't trust them, so they keep Blinkit for groceries. Her fix is Blinkit Assured: a replacement promise Blinkit backs, shown before checkout, with a sealed-box photo at handover so a claim needs just one photo. The north star is repeat non-grocery buyers within 60 days.",
      links: ["blinkit"],
      next: ["PW case study?", "Shiprocket case study?"]
    },
    {
      id: "story-data", tier: 1, brag: true,
      strong: ["data driven decision", "decision with data", "data decision", "used data", "data to decide", "against the obvious", "data told", "made with data", "decision you made", "decision she made", "data driven", "surprising insight", "counterintuitive", "insight from data"],
      terms: ["assumption", "surprising", "unexpected"],
      text: "At NEETprep, the obvious assumption was that Class 12 students, the largest group, were the best leads. When Anjali queried past conversions, droppers (students retaking NEET) actually converted 2.5x better (8% vs 3%). She made exam year a scoring signal so sales called them earlier, and once the model was live, connect rate rose from 20% to 32%. Her takeaway: check the assumption everyone shares before building on it.",
      links: ["leads"],
      next: ["Tell me about lead scoring", "How does she handle ambiguity?"]
    },
    {
      id: "story-influence", tier: 1, brag: true,
      strong: ["without authority", "influence people", "influenced", "get buy in", "buy in", "convince someone", "persuaded", "win over", "won over", "whatsapp admins", "win people over"],
      terms: ["stakeholder management", "partnership"],
      text: "For the FMGE test, Anjali needed WhatsApp group admins who had no reason to help Reflexprep. She led with what their members needed, free mock tests and exam content, rather than a sales pitch, and grew it to 20+ groups. That partnership grew signups 6x. Her takeaway: people say yes when the ask helps them first.",
      links: ["fmge"],
      next: ["Tell me about a disagreement", "How did she grow signups 6x?"]
    },
    {
      id: "story-ambiguity", tier: 1,
      strong: ["ambiguity", "ambiguous", "unclear", "no clear", "uncertain", "vague", "undefined problem", "open ended", "ambiguous project", "clear direction", "without direction", "no direction"],
      terms: ["uncertainty", "no direction"],
      text: "The lead scoring project at NEETprep had been paused with no clear definition of success. Anjali reframed it as one question, \"which students should sales call first?\", agreed that success meant sales actually using the scores, and built the smallest model that answered it before adding signals. Her takeaway: in ambiguity, define the question and the success metric first.",
      links: ["leads"],
      next: ["A decision she made with data?", "How does she prioritise?"]
    },
    {
      id: "story-pressure", tier: 1, brag: true,
      strong: ["pressure", "tight deadline", "deadline", "urgent", "under stress", "stressful", "crunch", "short timeline", "time is short", "short on time", "little time", "time crunch"],
      terms: ["stress", "fast", "quickly", "time crunch"],
      text: "During the Paytm to Razorpay migration, failed payments were slipping through every day. Anjali built the Appsmith dashboard in about two days so sales could start following up straight away, then automated it once it worked. It surfaced 39 dropped transactions for recovery. Her takeaway: under pressure, ship the version that stops the bleeding, then improve it.",
      links: ["payments"],
      next: ["Did she go beyond her role?", "A failure she learned from"]
    },
    {
      id: "story-initiative", tier: 1, brag: true,
      strong: ["beyond your role", "beyond her role", "above and beyond", "initiative", "proactive", "nobody asked", "without being asked", "self driven", "self starter", "extra mile", "job description", "outside her role", "outside her job", "beyond her job"],
      terms: ["ownership", "beyond"],
      text: "Nobody asked Anjali to build the payment recovery dashboard. She noticed sales had no single view of failed payments during the migration, built it herself in Appsmith and then automated it. It surfaced 39 dropped transactions for follow-up.",
      links: ["payments"],
      next: ["Her role vs the team?", "How does she work with her manager?"]
    },
    {
      id: "research", tier: 1, brag: true,
      strong: ["user research", "talk to users", "talked to users", "spoke to users", "user interview", "customer interview", "customer research", "understand users", "user feedback", "empathy", "talked to customers", "talk to customers", "speak to customers", "customer conversations", "customers"],
      terms: ["research", "interview users", "reviews", "survey"],
      text: "At Reflexprep, Anjali spoke with 80+ students about the Daily Quiz to learn what mattered to them and where other platforms were ahead, and that shaped the engagement and conversion work. For her case studies she coded 840 PhysicsWallah reviews and 169 Shiprocket seller reviews and took a full PW mock test herself, and ScamCheck's next steps come from its early users' feedback.",
      links: ["cases", "quiz"],
      next: ["Her case studies?", "How does she prioritise?"]
    },
    {
      id: "feedback", tier: 1,
      strong: ["critical feedback", "feedback you received", "feedback she received", "negative feedback", "constructive feedback", "take feedback", "handle feedback", "work with your manager", "work with her manager", "working with manager", "manager relationship", "working remotely", "remote team", "remote setup", "work in a remote", "worked remotely", "manage up", "managing up"],
      terms: ["feedback", "criticism", "criticised", "manager"],
      text: "At Reflexprep, Anjali was new and working remotely, and she realised that taking every small question to her manager would slow both of them down. So she started adding short notes for anything that needed review inside the PRD itself, then went through them with her manager in one session. Reviews got faster and more focused, and she owned the follow-through without needing constant check-ins.",
      links: ["quiz"],
      next: ["Tell me about a disagreement", "Her biggest weakness?"]
    },
    {
      id: "lessons", tier: 1,
      strong: ["lesson", "learnings", "what did she learn", "what did you learn", "biggest learning", "key takeaway", "takeaways"],
      terms: ["learnt$", "learned$", "taught"],
      text: "One from each company. Zaide.ai: a model is only valuable if it fits into someone's real workflow. NEETprep: the best insight often hides in data nobody looked at, like the droppers signal. Reflexprep: passing tests isn't the same as being ready for real users, which is why she now tests with production-scale data.",
      links: ["work"],
      next: ["A failure she learned from", "What would she do differently?"]
    },
    {
      id: "fav-product", tier: 1,
      strong: ["favourite product", "favorite product", "product you love", "product she loves", "product do you like", "best product", "love using", "admire", "duolingo", "product do you love", "product do you like", "product you like", "love and why"],
      terms: ["favourite app", "favorite app", "favourite product", "favorite product", "inspir"],
      text: "Duolingo. It turns something people know they should do into something they want to do every day, with streaks, small wins and difficulty that adapts to you. Anjali used the same thinking on the Daily Quiz: difficulty tiers and a daily habit.",
      links: ["quiz"],
      next: ["A product she'd improve?", "How does she prioritise?"]
    },
    {
      id: "improve-product", tier: 1,
      strong: ["improve a product", "product you would improve", "product would you improve", "product to improve", "redesign", "what would you change in", "fix a product", "improve any product", "product shed improve", "product she would improve", "product youd improve", "product you would change", "would she improve", "app would she improve", "she improve", "would she fix"],
      terms: ["improve", "product critique"],
      text: "PhysicsWallah's mock test report. It tells students their score but not what to do next, so Anjali would add a five-minute Mistake Review that ends in a 7-day study plan and a retest, turning every mock into action. Her full case study walks through the evidence and how she'd measure it.",
      links: ["pw"],
      next: ["Her case studies?", "Favourite product?"]
    },
    {
      id: "ai-view", tier: 1,
      strong: ["ai and product", "ai in product", "future of pm", "ai replace", "does she use ai", "do you use ai", "use ai", "ai tools", "views on ai", "think about ai", "ai change", "think about ai", "about ai", "opinion on ai", "feel about ai"],
      terms: ["chatgpt", "copilot", "automation", "replace", "pms$"],
      text: "Anjali uses Claude, Cursor and Lovable to prototype ideas in hours instead of weeks, and AI to speed up research like coding hundreds of reviews. As building gets cheaper, she believes a PM's edge shifts to picking the right problem and validating it fast, and that's exactly what she's sharpening.",
      links: ["projects"],
      next: ["Things she built", "Tools she uses?"]
    },
    {
      id: "languages", tier: 1,
      strong: ["languages", "language", "speak hindi", "hindi", "english fluency", "fluent", "speak english"],
      terms: ["speak$", "communication in"],
      text: "English (fluent) and Hindi (native), plus conversational Punjabi.",
      next: ["Quick intro", "Availability & location"]
    },
    {
      id: "hobbies", tier: 1,
      strong: ["hobby", "hobbies", "interests", "free time", "spare time", "outside work", "for fun", "weekend", "passionate about"],
      terms: ["interest", "fun", "leisure"],
      text: "Outside work, Anjali loves reading about new ideas and turning the interesting ones into things she can build. ScamCheck and CaseWise both started that way. She has also spoken at a few college events.",
      links: ["projects"],
      next: ["Things she built", "Quick intro"]
    },
    {
      id: "memorable", tier: 1, brag: true,
      strong: ["memorable", "fun fact", "interesting about", "something unique", "surprise", "remember about"],
      terms: ["fact"],
      text: "A biotech graduate who has shipped an ML model to production and built two live AI products on her own: science, data and product in one person.",
      links: ["projects", "work"],
      next: ["Things she built", "Biggest win?"]
    },
    {
      id: "site", tier: 1,
      strong: ["this website", "this site", "built this", "made this", "build this", "your website", "her website", "portfolio site", "who made", "who built", "used ai to build", "website yourself"],
      terms: ["website", "web site", "designed"],
      text: "Yes, Anjali designed and built this site herself, iterating on every section until it said what she meant, and she used AI tools like Claude and Cursor to move faster. This assistant answers only from notes she wrote.",
      links: ["github"],
      next: ["Things she built", "Tools she uses?"]
    },
    {
      id: "bot", tier: 2,
      exact: ["are you ai", "are you a bot", "are you human", "are you real", "bot", "are you an ai"],
      strong: ["are you a bot", "are you ai", "are you real", "are you anjali", "who are you", "what are you", "is this anjali", "is this really", "talk to anjali", "speak to anjali", "talk to her", "human", "real person", "talking to a", "chatbot", "is this a bot", "anjali herself", "is it anjali", "chatting with a human", "talking to a human"],
      terms: ["bot", "robot", "assistant"],
      text: "I'm Anjali's portfolio assistant, not Anjali herself. I answer only from notes she wrote, so I won't guess. Email or WhatsApp reaches her directly.",
      links: ["email", "whatsapp"],
      next: ["Quick intro", "Biggest win?"]
    },
    {
      id: "thanks", tier: 2,
      strong: ["thank", "thanks", "thx", "great", "awesome", "helpful", "cool", "nice", "perfect", "bye", "goodbye", "ok$", "okay$", "got it"],
      text: "Glad to help! If you'd like to talk to Anjali directly, she's one email away.",
      links: ["email", "resume"],
      next: ["Availability & location"]
    },
    {
      id: "help", tier: 2,
      strong: ["help", "menu", "options", "what can you", "what can i ask", "what should i ask", "what do you know", "yes$", "no$", "start$"],
      text: "I can tell you about Anjali's experience, biggest wins, a failure she learned from, her skills and projects, her education, or her availability. Tap a suggestion below or type your question.",
      next: ["Quick intro", "Her experience?", "Availability & location"]
    },
    {
      id: "hello", tier: 2,
      strong: ["hello", "hey", "hi", "hii", "namaste", "good morning", "good afternoon", "good evening", "yo"],
      text: "Hi! I can tell you about Anjali's work, results and availability. Where would you like to start?",
      next: ["Quick intro", "Biggest win?", "Availability & location"]
    }
  ]
};
