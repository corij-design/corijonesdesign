// ============================================================
// DRAFT CONTENT v2 — all site copy lives here for easy editing
// Rewritten to center The Coherence Gap as the intellectual spine
// ============================================================

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  meta: string;
  description: string;
  heroStats: { value: string; label: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
  tags: string[];
}

export interface Essay {
  slug: string;
  title: string;
  tag: string;
  description: string;
  readTime: string;
  content: string[];
}

export interface Book {
  title: string;
  subtitle: string;
  status: string;
  description: string;
  cascade: { mode: string; brief: string }[];
  pullQuote: string;
  pullQuoteSource: string;
  ctaText: string;
}

// ============================================================
// CASE STUDIES
// ============================================================
export const caseStudies: CaseStudy[] = [
  {
    slug: "closing-the-gap-after-acquisitions",
    number: "01",
    title: "Closing the Gap After Four Acquisitions",
    subtitle:
      "How structural coherence turned five acquired companies into one platform",
    meta: "Enterprise Fintech · 2021–2025",
    description:
      "A mid-size fintech acquired four companies in two years, inheriting five design systems, fragmented research practices, and a product experience that no longer felt like one product. Leadership assumed it was a design problem. It wasn't. It was a coherence problem. I led the structural redesign (team, system, and strategy) that turned a patchwork into a platform.",
    heroStats: [
      { value: "5 → 1", label: "Product experiences unified" },
      { value: "30", label: "Designers across 4 time zones" },
      { value: "151M", label: "End users impacted" },
      { value: "72", label: "NPS (world-class)" },
    ],
    challenge:
      "Post-acquisition, the company had five definitions of quality, five sets of assumptions about who the customer was, and five inherited ways of making decisions. Every product team was still operating with its own design system, its own research cadence, and its own definition of done. Customers saw the fragmentation before leadership did: support tickets citing inconsistency were up 40%, and Sales was losing deals because the product looked like five different companies stitched together. The design team had grown from 12 to 30, but headcount wasn't the problem. Structure was. Leadership assumed it was a design problem. It wasn't. It was a coherence problem.",
    approach: [
      "Restructured design from an agency model (separate intake process, separate sprints, random designer assignment) to strategic partnerships: each designer paired with a specific PM, with consistent ownership over a part of the user journey. Pairings balanced skills and experience. Teams moved faster with deeper context, producing work that was actually buildable and releasable.",
      "Fixed a broken design-to-engineering pipeline. PMs and designers had been spending months on detailed feature designs that sat in a queue waiting for engineering prioritization. One designer told me she had been at nCino for two years and nothing she designed had been built. This was widespread: thousands of hours of work never realizing value. Six months after I took over, I led a product group through a design sprint that shipped a completely new feature and billable SKU in just over three months. Unheard of at nCino.",
      "Ran a comprehensive UX audit across all five product surfaces, documenting every inconsistency (54 button styles alone). This made the Coherence Gap visible to leadership. You cannot fix what you cannot see.",
      "Led a multi-year design system consolidation: five systems into one global standard (Figma libraries, code components, shared documentation). This was a structural intervention, not a Figma cleanup.",
      "Stood up research operations from scratch: hired a research ops lead, partnered with Legal and Customer Success, and built a user panel from 0 to 272,000 participants. Went from ad-hoc research to running 10+ concurrent studies.",
      "Replaced a single North Star metric with a three-metric constellation owned by dedicated leadership pods. Led the user satisfaction metric initiative.",
      "Guided the design team from no AI strategy to building full product prototype experiences. Pushed the company from a basic 'add a chatbot' approach to a comprehensive AI implementation strategy: enhancement prompts within existing workflows, AI-enhanced content, a visual language helping users distinguish AI-generated content, and contextual integration that minimized the blank-chat-screen problem.",
    ],
    outcome:
      "The unified platform now serves 151 million users with a world-class NPS of 72 and 98% customer retention. The design team operates as one organization: 30+ designers with shared principles, shared systems, and a shared product vision. Concept-to-ship time went from 'years in a queue' to months. The AI design strategy positioned the product for the next generation of intelligent lending software.",
    tags: [
      "Coherence Gap",
      "Design Systems",
      "Organizational Design",
      "Research Ops",
      "Post-Acquisition Integration",
    ],
  },
  {
    slug: "building-coherence-from-zero",
    number: "02",
    title: "Building Coherence from Zero",
    subtitle:
      "Bringing structural design leadership to a scaling company on its way to a $1.2B acquisition",
    meta: "B2B2C SaaS · 2019–2021",
    description:
      "Joined SimpleNexus at about 100 employees during COVID. The product had strong market traction but the design function hadn't scaled with it: no design system, no product vision, no research practice, and a team of five. I built the structural coherence (product trio model, shared context, explicit outcomes, ownership architecture) that helped the company reach 350 employees and a $1.2 billion acquisition where UX was cited as a top factor.",
    heroStats: [
      { value: "$1.2B", label: "Acquisition valuation" },
      { value: "5 → 12", label: "Design team growth" },
      { value: "98%", label: "Customer retention" },
      { value: "9.3×", label: "Task completion speed" },
    ],
    challenge:
      "SimpleNexus had grown from a basement startup to about 100 employees on the strength of its loan officer product, but the design function was still operating like it had at 20 people. Five designers served multiple product areas with no shared process, no research practice, and no structural connection to product strategy. Navigation was organized around database models instead of user mental models. Sales had lost multi-million-dollar deals because the product looked dated compared to competitors, and 30 to 50% of support calls stemmed from usability issues. Marketing had zero product screenshots on the website. The company didn't need a redesign. It needed coherence.",
    approach: [
      "Introduced the product trio model (PM, Designer, Engineering Lead as equal partners), transforming design from downstream execution to upstream partnership. This was a Decision Rights change: designers gained the authority and obligation to shape outcomes, not just outputs.",
      "Led a comprehensive product audit that surfaced the structural gap between what the company was building and what users actually needed. Presented findings company-wide to create the mandate for change.",
      "Built a 4-year product vision grounded in research (117 homebuyer interviews, full journey mapping). Visualized through prototypes and storytelling, not slide decks. Shared weekly updates for 9 weeks in a public Slack channel. The conversation shifted from 'Are we doing this?' to 'When can we start?'",
      "Broke the vision into a 9-step strategic roadmap: coherence architecture, not just a product plan. Each step mapped to a major opportunity in the homeownership lifecycle, with explicit outcomes and clear ownership.",
      "Grew the design team from 5 to 12 designers, each placed into a product trio (not a design silo). Built the company's first unified design system spanning iOS, Android, and web in both Figma and code.",
      "Established the team's first user research practice, not as a separate function, but as an integrated capability within each product trio.",
      "Co-created the Design Summit, a multi-day offsite format combining skill-building with strategic alignment. Not a team-building retreat: coherence infrastructure that became a recurring ritual.",
    ],
    outcome:
      "The product went from a simple mobile app to a platform touching 1 in 7 U.S. mortgage loans. NPS hit 72 from 5.7 million homebuyers. Loan application conversion reached 80%. Task completion improved 9.3x. Customer retention hit 98%. The company made the Inc. 5000 list four years running. Then nCino acquired us for $1.2 billion. UX was cited as a top factor in the acquisition, not because the screens were pretty, but because the product's structural coherence was a competitive moat the acquirer couldn't replicate quickly.",
    tags: [
      "Coherence Gap",
      "Product Vision",
      "Design Strategy",
      "Scaling",
      "User Research",
    ],
  },
  {
    slug: "when-the-product-doesnt-know-its-user",
    number: "03",
    title: "When the Product Doesn't Know Its User",
    subtitle:
      "Closing the gap between who Bluehost's customers were and who the product was designed for",
    meta: "Consumer Tech · 2012–2016",
    description:
      "Bluehost had built a massive customer base on price and reliability, but the experience was designed for sys-admins, not the small business owners who actually used it. The gap between customer reality and product design was the Coherence Gap made visible. Strategy said 'help small businesses.' The product said 'here's cPanel.' That's Unclear Outcomes paired with Misaligned Constraints. I led the structural redesign that closed it.",
    heroStats: [
      { value: "2M+", label: "Active hosting customers" },
      { value: "4", label: "Product lines redesigned" },
      { value: "3×", label: "Onboarding completion rate" },
      { value: "35%", label: "Support ticket reduction" },
    ],
    challenge:
      "The gap between who Bluehost's customers were (small business owners, bloggers, first-time website creators) and who the product was designed for (technical users comfortable with cPanel) was enormous. Strategy said 'help small businesses succeed online.' The product said 'here's a server control panel.' That disconnect is Unclear Outcomes plus Misaligned Constraints: the stated goal never translated into the structural decisions that shaped the product. Churn was high among new users who couldn't get past initial setup, and the brand felt interchangeable with a dozen other hosting providers.",
    approach: [
      "Embedded with the support team for two weeks to hear real customer struggles firsthand. The patterns were immediate: users didn't want to 'manage hosting.' They wanted to 'build a business.' The outcome needed redefining at the structural level.",
      "Reframed the product outcome from 'manage hosting' to 'build a business online.' This wasn't a rebrand exercise. It was closing the gap between what strategy intended and what the product actually delivered.",
      "Redesigned the onboarding experience to start with intent ('What do you want to build?') rather than configuration ('Select your server settings'). Aligned the product's constraints with its actual users, not its inherited technical audience.",
      "Introduced a design framework for collaboration across product, engineering, and marketing: defining problems clearly before jumping to solutions, and validating through experimentation rather than opinion.",
    ],
    outcome:
      "Onboarding completion tripled. Support tickets from new users dropped 35%. The rebrand and redesigned experience helped differentiate Bluehost in a commoditized market. More importantly, it proved to the organization that closing the gap between strategy and product experience drives measurable business outcomes.",
    tags: [
      "Coherence Gap",
      "Human-Centered Design",
      "Onboarding",
      "Brand Strategy",
      "Design Transformation",
    ],
  },
  {
    slug: "designing-the-system-that-produces-innovation",
    number: "04",
    title: "Designing the System That Produces Innovation",
    subtitle:
      "Building coherence infrastructure for innovation at a 20,000-person enterprise",
    meta: "Enterprise Services · 2014–2019",
    description:
      "Asurion was one of the world's largest private companies, and almost nobody had heard of it. With 20,000+ employees serving 300 million customers, the company didn't lack innovative people. It lacked structural conditions for innovation. No repeatable path from insight to prototype. No shared frameworks for experimentation. The fix was coherence infrastructure: shared decision rights, learning cycles, and a practice that could sustain itself without depending on any single team.",
    heroStats: [
      { value: "300M", label: "Customers served" },
      { value: "12", label: "Teams trained" },
      { value: "6", label: "New products piloted" },
      { value: "40%", label: "Faster concept-to-test" },
    ],
    challenge:
      "Innovation at Asurion was ad-hoc. Good ideas existed but had no repeatable path from insight to prototype to validated concept. This is the inverse of Process as Shield: instead of process replacing learning, there was no process at all. Product teams operated in silos, rarely talking to customers directly, and relied heavily on competitive analysis rather than original research. Leadership wanted to 'be more innovative' but hadn't invested in the structural conditions to make that possible.",
    approach: [
      "Designed a structured innovation practice tailored to Asurion's scale, not a generic workshop format, but coherence infrastructure that could be embedded into existing team workflows. Shared frameworks, explicit decision rights for experimentation, and learning cycles baked into the process.",
      "Trained 12 cross-functional teams through hands-on workshops focused on user empathy, collaborative ideation, and rapid testable prototyping.",
      "Created a 'learn by doing' model: each team applied the framework to a real business problem during training, producing actionable prototypes rather than theoretical exercises.",
      "Built internal facilitator capacity so the program could sustain itself without depending on a single design team to run every session. The goal was structural change, not a one-time event.",
    ],
    outcome:
      "Six new product concepts made it to pilot within the first year. Time from concept to first user test dropped 40%. But the deeper win was structural: teams started talking to customers before building, and cross-functional collaboration became the norm rather than the exception. The program expanded beyond the initial pilot teams into a company-wide practice. The organization had not added innovative people. It had built the conditions for the innovative people it already had.",
    tags: [
      "Coherence Gap",
      "Innovation Culture",
      "Enterprise Transformation",
      "Design Thinking",
      "Facilitation",
    ],
  },
];

// ============================================================
// ESSAYS
// ============================================================
export const essays: Essay[] = [
  {
    slug: "five-failure-modes",
    title: "The Five Failure Modes",
    tag: "Framework",
    description:
      "Organizations don't break randomly. They break in a predictable cascade of five structural failure modes. Here's how to diagnose which one is active in yours.",
    readTime: "12 min",
    content: [
      "Every product organization I've worked inside, or been hired to fix, exhibits at least one of five structural failure modes. They're not personality problems. They're not hiring problems. They're architecture problems, as surely as a building with a cracked foundation is an architecture problem.",
      "What makes these modes dangerous is that they form a cascade. Each one produces the conditions for the next. Fix the wrong one and you're treating symptoms while the structural cause compounds underneath. The cascade is: Unclear Outcomes, Priority Thrash, Collapsed Ownership, Misaligned Constraints, and Process as a Shield.",
      "It starts with Unclear Outcomes. Leadership has a strategy. It lives in a slide deck, a quarterly memo, maybe an all-hands presentation. But it never translates into outcomes specific enough for teams to act on. The 'why' never reaches the people doing the work. Teams fill the vacuum with their own interpretations, and now you have twenty teams executing against twenty different understandings of success.",
      "Unclear Outcomes produce Priority Thrash. When nobody knows what success looks like, everything feels urgent. Roadmaps churn quarterly. Initiatives launch before the last ones finish. Teams learn to start everything and finish nothing, because next quarter's priorities will overwrite this quarter's anyway. The organization is busy. The product is going nowhere.",
      "Priority Thrash produces Collapsed Ownership. When priorities shift constantly, teams stop investing in outcomes and start complying with requests. Why own the result when the goal will change before you ship? Ownership collapses into task completion. Teams stop pushing back, stop advocating for users, stop making judgment calls. They do what they're told and nothing more.",
      "Collapsed Ownership produces Misaligned Constraints. When teams stop owning outcomes, the real constraints (technical debt, capacity limits, regulatory requirements, integration dependencies) stay hidden. Nobody surfaces them because nobody feels responsible for the outcome those constraints affect. Leaders make decisions with incomplete information. Timelines are fiction. Scope is negotiated after the deadline passes, not before.",
      "Misaligned Constraints produce Process as a Shield. When the real limitations are invisible and ownership has collapsed, the organization reaches for the one thing it can control: process. Stand-ups, retros, planning ceremonies, status reports, approval gates. Each one added with good intentions. Collectively, they become a shield against accountability. The rituals replace learning. The organization performs productivity without producing results.",
      "The cascade is not inevitable. But it is the dominant pattern. I've watched it play out at startups, mid-size companies, and enterprises. The surface symptoms vary (missed deadlines, low morale, product inconsistency, customer churn) but the structural sequence is remarkably consistent.",
      "The diagnostic question is not 'what's wrong with our team?' It's 'where in the cascade are we?' Because the intervention for Unclear Outcomes is completely different from the intervention for Process as a Shield, even though both produce the same feeling of organizational frustration.",
      "This cascade is the structural backbone of The Coherence Gap. Part II of the book maps each failure mode in detail: how it forms, how it compounds, and what closing it actually requires. What I've learned across twenty-five years is that most organizations are treating symptoms at the bottom of the cascade while the cause lives at the top.",
    ],
  },
  {
    slug: "design-reveals-dysfunction",
    title: "Why Design Reveals Dysfunction First",
    tag: "Diagnosis",
    description:
      "Design teams are the canary in the organizational coal mine. When they're struggling, the whole product org is about to follow. Here's the structural reason why.",
    readTime: "8 min",
    content: [
      "There's a pattern I've seen at every company I've joined: the design team is the first to feel organizational dysfunction, and the last to be believed when they name it.",
      "This isn't because designers are more sensitive or more perceptive. It's structural. Design is a synthesis discipline. It takes inputs from product strategy, engineering constraints, user research, business goals, and brand standards, and produces a unified output. Synthesis requires stable inputs. When any of those inputs are unstable, broken, or contradictory, the synthesis fails visibly.",
      "Engineering can mask dysfunction through decomposition. Break the work into small enough tickets, and each one can succeed even when the larger product direction is incoherent. Product management can mask dysfunction through process: roadmaps, sprint plans, and status updates create the appearance of progress even when the underlying priorities are thrashing. Design cannot mask it. You cannot synthesize contradictory inputs into a coherent experience. The incoherence shows up on the screen.",
      "This makes design a leading indicator of organizational health. When designers say 'we keep redesigning the same thing,' that's Priority Thrash. When they say 'nobody uses our design system,' that's the structural gap between shared standards and team autonomy. When they say 'we never talk to users,' that's Unclear Outcomes creating a vacuum where assumptions replace evidence.",
      "When strategy is unclear, designers are asked to 'explore options' endlessly because no one can make a decision. When product and engineering aren't aligned, designers become translators and therapists. When leadership doesn't trust the team, design reviews become approval gauntlets rather than collaborative sessions.",
      "The design team's frustrations are diagnostic data. Smart organizations treat them as a leading indicator. If the designers are thriving (shipping coherent work, talking to users regularly, iterating with confidence) the product org is probably healthy. If they're demoralized, reactive, and constantly reworking, something upstream is broken.",
      "The fix is never 'hire more designers' or 'give design a seat at the table.' Those are necessary but insufficient. The fix is diagnosing which structural failure mode is creating the symptoms, and redesigning the system that produces them. The canary doesn't need a better cage. The mine needs better air.",
    ],
  },
  {
    slug: "velocity-trap",
    title: "The Velocity Trap: When Metrics Lie",
    tag: "Strategy",
    description:
      "Your team is shipping faster than ever. Your product is getting worse. Here's why speed without coherence is the most expensive kind of progress.",
    readTime: "10 min",
    content: [
      "The most dangerous product organizations are the fast ones. Not because speed is bad (speed is essential) but because velocity without coherence is how you build a product that's impossible to maintain, impossible to navigate, and impossible to love.",
      "I call it the Velocity Trap: the organizational belief that shipping speed is the primary indicator of health. Teams are measured by story points completed, features launched, sprints delivered on time. The dashboard is green. The product is getting worse. This is Priority Thrash (Chapter 6 of The Coherence Gap) wearing the mask of productivity.",
      "The trap works like this: to move fast, teams make local decisions. Each local decision is rational. The button that doesn't match the system? Faster to build a new one. The flow that duplicates existing functionality? The other team's code is too complex to reuse. The user research that gets skipped? We already know what to build.",
      "Multiply these decisions across 20 teams and 18 months and you have a product with redundant features and an information architecture that makes sense to no one, least of all the user. Every team hit their velocity targets. The product got worse.",
      "The core problem is measuring outputs instead of outcomes. Outputs are countable: features shipped, tickets closed, story points burned. Outcomes are harder to measure: did the user succeed? Did the product get more coherent? Did we learn something that changes what we build next? Organizations default to outputs because they're easier to track. But an output-driven organization is an organization optimizing for motion, not progress.",
      "The counter-metric to velocity is not 'slow down.' It's Learning Cycles: the speed at which the organization converts new information into better decisions. How quickly does user feedback change what you build? How fast does a failed experiment redirect the roadmap? How rapidly does a support pattern trigger a design intervention? Learning Cycles measure whether your speed is producing wisdom or just producing artifacts.",
      "Users feel coherence instantly. They feel it when the navigation makes sense without a tutorial. When the design language is consistent enough to build expectations. When a feature in one part of the product works the way they'd expect based on how a similar feature works elsewhere.",
      "The organizations that escape the Velocity Trap don't slow down. They develop the structural practices that let them move fast and stay coherent. Shared design systems. Regular product audits. Cross-team rituals that surface inconsistency before it ships. A vision that's concrete enough to navigate by, not just aspirational enough to put on a slide. And Learning Cycles that close the loop between what they ship and what they learn.",
    ],
  },
  {
    slug: "org-is-a-design-problem",
    title: "The Organization Is a Design Problem",
    tag: "Philosophy",
    description:
      "We spend all our rigor on the product and leave the organization to evolve by accident. What if we designed it instead?",
    readTime: "7 min",
    content: [
      "We have a strange double standard in product organizations. We insist on user research before building features, but reorganize teams based on gut feel. We A/B test button colors but never test meeting structures. We design products with rigor and leave the organization to evolve by accident.",
      "The result is predictable: the organization becomes the primary constraint on the product. Not the technology. Not the market. Not the talent. The system in which talented people operate is what determines whether great work ships or dies in committee.",
      "An organization is a system. It has inputs (people, capital, information), processes (how decisions get made, how work flows, how quality is defined), and outputs (the product, the culture, the customer experience). When the output is broken, the system is broken.",
      "Design leaders are uniquely positioned to see this because we practice systems thinking every day. We understand that a button isn't just a button: it exists within a flow, which exists within a product, which exists within a user's life. The same nested, interconnected thinking applies to organizations.",
      "A team structure isn't just a reporting line: it determines which information flows freely and which requires a meeting. A planning process isn't just a cadence: it determines whether strategy translates to execution or evaporates into slide decks. A design review isn't just quality assurance: it's a cultural signal about what the organization values.",
      "The most impactful work I've done has never been a single product redesign. It's been the moment an organization starts treating its own structure as a design problem: something to be researched, prototyped, tested, and iterated on with the same rigor we bring to the products we ship. I wrote a book about this.",
    ],
  },
  {
    slug: "empowerment-fallacy",
    title: "The Empowerment Fallacy",
    tag: "Leadership",
    description:
      "A CEO declared his teams empowered and watched them flounder. The problem wasn't the people. It was what empowerment actually requires.",
    readTime: "8 min",
    content: [
      "A CEO I worked with decided his organization needed empowerment. He had read the books. He believed in his people. At an all-hands, he announced that teams would now own their outcomes. Make decisions. Move fast. He would get out of the way.",
      "Within six months, the organization was in chaos. Teams made contradictory decisions. Three groups independently built overlapping features. One team committed to a customer timeline that engineering couldn't meet. Another team froze entirely, afraid to make the wrong call without clear direction.",
      "He had not given them ownership. He had given them abandonment dressed in the language of trust.",
      "This is the Empowerment Fallacy: the belief that ownership is something you grant through declaration. 'You're empowered' is not a structural intervention. It's a sentiment. And sentiment without structure produces exactly the chaos this CEO experienced.",
      "Real ownership requires three structural conditions. Remove any one of them and empowerment collapses into either chaos or compliance.",
      "The first is Decision Rights. Teams need to know which decisions they own, which decisions they influence, and which decisions are made above them. Not in theory, in practice. If a team 'owns' a product area but needs VP approval for every material design change, they don't own it. They're performing ownership. Decision rights must be explicit, documented, and honored.",
      "The second is Context Stability. Teams cannot make good decisions without stable context: who the user is, what success looks like, how their work connects to the broader strategy, and what constraints are real versus assumed. When context changes quarterly (or worse, when it was never shared clearly in the first place) teams either guess wrong or wait for someone to tell them what to do. Both are failures of the system, not the team.",
      "The third is Aligned Incentives. If you tell teams to own quality but measure them on velocity, velocity wins. If you tell them to innovate but punish failed experiments, they'll play it safe. Incentives must align with the ownership you're asking teams to exercise. Misaligned incentives are the most common structural betrayal of empowerment.",
      "There's a practical heuristic I call the 70% Rule: if a team can make 70% of its decisions without escalation, and the other 30% have a clear, fast path to resolution, ownership is structurally viable. Below 70%, you have centralized control dressed in empowerment language. Above 90%, you may have teams operating without sufficient alignment. The sweet spot is structural, not aspirational.",
      "The CEO who declared empowerment wasn't wrong about the goal. He was wrong about the mechanism. Ownership is a design problem, not a delegation problem. You don't create it by stepping back. You create it by building the structural conditions that make good autonomous decisions possible.",
    ],
  },
  {
    slug: "what-coherence-sounds-like",
    title: "What Coherence Actually Sounds Like",
    tag: "Culture",
    description:
      "Coherent organizations are loud. Incoherent ones are quiet in all the wrong places. Here's how to hear the difference.",
    readTime: "6 min",
    content: [
      "Most leaders think healthy culture sounds like alignment. Agreement. People nodding in meetings and saying 'great idea.' That's not coherence. That's compliance.",
      "Coherence is loud. It sounds like passionate debate about the right approach. Pushback grounded in data. A junior designer challenging a VP's assumption because she has user research that contradicts it, and the VP listening. Disagreement that resolves into a better decision because the structure supports honest conflict.",
      "Incoherence is quiet in all the wrong places. It's the meeting where nobody pushes back because they've learned it doesn't matter. The eye rolls after leadership leaves the room. The gossip in Slack DMs that never surfaces in the retro. The back-channel trash talk that substitutes for direct feedback. The compliance theater of nodding along with a strategy nobody believes in.",
      "If your organization is quiet in meetings and loud in back channels, that's not a culture problem. That's a coherence problem.",
      "The structural reason is straightforward. Honest conflict requires safety, and safety requires structural conditions: decision rights that are respected, context that's actually shared, incentives that reward candor rather than punishing it. When those conditions are absent, people protect themselves. They withhold dissent. They say what's expected and save their real opinions for the hallway.",
      "You can tell a lot about an organization's coherence by listening to the quality of its disagreements. In coherent organizations, conflict is specific ('I think this metric is wrong because our user data shows X'). In incoherent ones, conflict is vague or absent ('I guess that seems fine' followed by private frustration).",
      "Leaders who mistake silence for alignment are flying blind. The information they need to make good decisions is circulating everywhere except in the rooms where decisions get made. That's not a people problem. It's a structural gap between what the organization says it values and what the organization actually rewards.",
      "Closing this gap doesn't start with trust falls or culture workshops. It starts with structural interventions: making decision rights explicit, sharing context broadly, and creating feedback loops where dissent is productive rather than career-limiting. When the structure supports honest conflict, the culture follows.",
    ],
  },
];

// ============================================================
// BOOK
// ============================================================
export const book: Book = {
  title: "The Coherence Gap",
  subtitle: "Why Organizations Break Between Strategy and Execution",
  status: "In progress — 2027",
  description:
    "A book about the structural distance between what leadership intends and what teams experience. It maps a cascade of five failure modes that predictably degrade organizational performance, and provides a practical playbook for closing the gap.",
  cascade: [
    { mode: "Unclear Outcomes", brief: "The 'why' never reaches the team" },
    {
      mode: "Priority Thrash",
      brief: "Everything is urgent, nothing completes",
    },
    {
      mode: "Collapsed Ownership",
      brief: "Teams stop owning and start complying",
    },
    {
      mode: "Misaligned Constraints",
      brief: "Real limitations stay hidden",
    },
    { mode: "Process as Shield", brief: "Ritual replaces learning" },
  ],
  pullQuote:
    "He had not given them ownership. He had given them abandonment dressed in the language of trust.",
  pullQuoteSource: "Chapter 12 — Ownership by Design",
  ctaText: "Get notified when early chapters are available",
};

// ============================================================
// ABOUT
// ============================================================
export const about = {
  headline:
    "I fix the structural conditions that determine whether talented teams can do the work they were hired to do.",
  intro:
    "I've spent twenty-five years building, scaling, and often rebuilding product organizations. My work focuses on the structural gap between strategy and execution, the organizational architecture that determines whether great work ships or dies in a slide deck. I'm writing The Coherence Gap, a book about why this gap exists and what leaders can do about it.",
  philosophy: [
    {
      title: "Products are symptoms of organizations",
      body: "A fragmented product comes from a fragmented organization. A coherent product comes from a coherent one. I start with the system that produces the work, not just the work itself.",
    },
    {
      title: "Structure before motivation",
      body: "Most product org problems aren't people problems. They're architecture problems. You don't need better designers. You need better systems for the designers you have. The Coherence Gap is the distance between what leaders intend and what teams experience. Close the gap, and motivation takes care of itself.",
    },
    {
      title: "Make the invisible visible",
      body: "The most damaging organizational patterns are the ones nobody names. I name them: Unclear Outcomes. Priority Thrash. Collapsed Ownership. Misaligned Constraints. Process as Shield. These five failure modes form a cascade, and diagnosing which one is active changes everything.",
    },
    {
      title: "Relationships outlast products",
      body: "Companies come and go. Products get sunsetted. The people you build with, coach, and learn from, those connections compound. I invest in them first.",
    },
  ],
  background: [
    {
      period: "2025 – Present",
      role: "VP of Product Design, iGo",
      context:
        "Founding design leader at an early-stage AI-enabled platform. Building the product design practice from zero in a company using AI to reimagine the home services experience.",
    },
    {
      period: "2021 – 2025",
      role: "Director of Product Design, SimpleNexus → nCino",
      context:
        "Led and scaled a globally distributed design org (30+ designers) across multiple product areas after a $1.2 billion acquisition. Unified five design systems, built research operations from zero, and played a key role in UX unification of the platform. UX was cited as a top reason for the acquisition.",
    },
    {
      period: "2019 – 2021",
      role: "Senior Manager, Product Design, Bluehost",
      context:
        "Led cross-functional design teams for consumer and B2B SaaS products. Redesigned the onboarding experience around user intent, tripling completion rates.",
    },
    {
      period: "2014 – 2019",
      role: "Manager, Product Design & UX Research Lead, Asurion",
      context:
        "Built the company's first centralized UX research and design systems functions. Designed and led a design thinking program across 12 cross-functional teams, piloting 6 new product concepts.",
    },
  ],
  values: [
    {
      word: "Curiosity",
      description: "Shed preconception. Ask open questions. Listen intently.",
    },
    {
      word: "Humanity",
      description:
        "Products come and go. The relationships outlast them all.",
    },
    {
      word: "Unity",
      description:
        "Collaboration works when every person feels valued and committed.",
    },
    {
      word: "Storytelling",
      description:
        "Great designers and leaders are master storytellers.",
    },
    {
      word: "Focus",
      description:
        "Prioritize deeply. One thing at a time wins over multitasking.",
    },
  ],
};
